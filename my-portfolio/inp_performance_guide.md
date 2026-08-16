# Interaction to Next Paint (INP) Optimization Guide for React

Interaction to Next Paint (INP) is a Core Web Vital that measures a page's overall responsiveness to user interactions (clicks, taps, and keypresses) by tracking the latency of all interactions. An INP under **200 milliseconds** is considered "good".

Here are the React-specific architectural best practices to maintain a sub-200ms INP in this portfolio.

---

## 1. Avoid Blocking the Main Thread in Event Handlers

When a user clicks an element (e.g. the Submit button in the Contact form, or a Project link), any synchronous code inside the event handler blocks the main thread. If the event handler takes longer than 50ms, it is classified as a **Long Task**, directly degrading INP.

### Best Practice: Defer CPU-Heavy Tasks
Use non-blocking asynchronous APIs or split long tasks. For example, if we need to perform validation or local analytics logging, defer them using `requestIdleCallback` or `setTimeout`.

```javascript
// Avoid doing this in click handlers
const handleInteraction = (e) => {
  doHeavyCalculation(); // Blocks main thread!
  updateState();
};

// Do this instead
const handleInteraction = (e) => {
  updateState();
  // Defer heavy calculation to next tick or idle period
  setTimeout(() => {
    doHeavyCalculation();
  }, 0);
};
```

---

## 2. Leverage React 18 Concurrent Features (`useTransition`)

In React 18+, state transitions are classified into two categories:
1. **Urgent updates**: Direct physical interactions (typing in input fields, clicking dropdown buttons).
2. **Transition updates**: Transitioning UI from one view to another (e.g. loading more projects, filtering categories).

If a Transition update triggers a heavy re-render, it will block the urgent update, causing visible lag (high INP).

### Best Practice: Use `startTransition`
Wrap non-urgent state updates inside `startTransition` (or the `useTransition` hook) to mark them as low-priority. This allows React to pause the rendering of the transition if the user interacts with the page again (e.g. typing in the form).

```javascript
import { useState, useTransition } from 'react';

const ProjectFilter = () => {
  const [filter, setFilter] = useState('All');
  const [isPending, startTransition] = useTransition();

  const handleFilterChange = (newFilter) => {
    // Keep user interaction responsive immediately
    setFilter(newFilter);

    // Defer the heavy rendering of filtered items
    startTransition(() => {
      // Slow state updates go here...
    });
  };
};
```

---

## 3. Yield to the Main Thread

For extremely long-running tasks, break them into smaller chunks and yield to the main thread between chunks. This allows the browser to process layout, paint, and handle any pending user clicks in between the chunks.

### Best Practice: Use a scheduler or `setTimeout`
```javascript
const processLargeDataset = async (items) => {
  for (let i = 0; i < items.length; i++) {
    processItem(items[i]);
    
    // Yield to the main thread every 5 items
    if (i % 5 === 0) {
      await new Promise(resolve => setTimeout(resolve, 0));
    }
  }
};
```

---

## 4. Optimize Component Re-renders

Excessive rendering of off-screen or unaffected components during an interaction will block the main thread and delay the next paint.

### Best Practice:
- **Memoize expensive components**: Use `React.memo` for static or heavy list items (like individual Project cards) so they only re-render if their specific props change.
- **Isolate Form State**: In the [`Contact`](src/components/Contact.jsx) component, ensure the input state updates do not re-render the entire sections of the page. Keeping state local to the form ensures lightning-fast interaction times.
- **Use CSS over JS Animations for states**: For hover and focus rings, use CSS transitions/animations (which Vite/Tailwind compiles efficiently) instead of triggering React state changes on mouse events. This bypasses the React rendering cycle entirely, keeping INP at 0ms for visual hover states.
