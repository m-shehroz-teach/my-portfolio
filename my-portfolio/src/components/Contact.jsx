import React, { useState } from 'react';

const ContactInfoIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-6 0h6" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const LinkIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
  </svg>
);

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");

    const formData = new FormData(event.target);
    formData.append("access_key", "21359afa-cf45-4bc1-ab1d-18449b5c4e5e");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Submission failed. Please check your network connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen w-full flex flex-col justify-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display tracking-tight">
          Contact Me
        </h2>
        <div className="h-1 w-12 bg-blue-500 rounded mt-2 mb-3" />
        <p className="text-xs sm:text-sm text-zinc-400 max-w-2xl">
          I'm always happy to discuss opportunities, answer questions, or explore new ideas. Send a message or connect online.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                <ContactInfoIcon />
              </div>
              <h3 className="text-base font-bold text-blue-400 font-display">Contact Information</h3>
            </div>
            <p className="text-xs text-zinc-500 mb-4 pl-11">
              Reach me directly via email or phone for questions or collaborations.
            </p>

            <div className="space-y-4 pl-11">
              <div className="flex items-center gap-3">
                <MailIcon className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-xs text-white font-medium">Email</p>
                  <a href="mailto:shehroz.dev@gmail.com" className="text-xs text-zinc-400 hover:text-blue-400 transition-colors">
                    shehroz.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-xs text-white font-medium">Phone</p>
                  <p className="text-xs text-zinc-400">+92 300 0000000</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <LocationIcon className="w-4 h-4 text-blue-400" />
                <div>
                  <p className="text-xs text-white font-medium">Location</p>
                  <p className="text-xs text-zinc-400">Multan, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-blue-400">
                <LinkIcon />
              </div>
              <h3 className="text-base font-bold text-blue-400 font-display">Connect with Me</h3>
            </div>
            <p className="text-xs text-zinc-500 mb-4 pl-11">
              Stay connected on social media for collaborations or updates.
            </p>
          </div>
        </div>

        {/* Right Side Working Form */}
        <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800/80 p-6 rounded-2xl">
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">Name</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="Enter your email"
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Enter subject"
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-1.5">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Enter your message"
                className="w-full bg-zinc-900/80 border border-zinc-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-lg bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 text-white font-semibold text-xs transition-colors shadow-lg shadow-blue-600/30 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {result && (
              <p className={`text-xs text-center mt-2 ${result.includes("Successfully") ? "text-emerald-400" : "text-blue-400"}`}>
                {result}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;