import React, { useState } from "react";

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "MSME Business Consulting",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("api/send-email/route.ts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Email failed");

      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        service: "MSME Business Consulting",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-24 px-6 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20">
          {/* LEFT SECTION */}
          <div className="space-y-12">
            <header className="space-y-4">
              <h1 className="text-5xl font-bold text-black tracking-tight">
                Let's start a conversation.
              </h1>
              <p className="text-xl text-slate-600">
                Whether you're looking for MSME business consulting, a robust
                go-to-market strategy, or process optimization, our experts are
                ready to help.
              </p>
            </header>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm border border-slate-200 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Call Us</h3>
                  <p className="text-slate-600 font-medium">+91 703 3438 666</p>
                  <p className="text-slate-600 font-medium">+91 877 8731 073</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-emerald-600 shadow-sm border border-slate-200 shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-black mb-1">Email</h3>
                  <p className="text-slate-600">info@fullyintegratedgroup.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20">
                <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-black">
                  Message Received
                </h2>
                <p className="text-slate-600">
                  A representative from Fully Integrated Group will be in touch
                  shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-emerald-600 font-bold hover:text-emerald-700"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <input
                    required
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none"
                  />
                  <input
                    required
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none"
                  />
                </div>

                <input
                  required
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@company.com"
                  className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none"
                >
                  <option>MSME Business Consulting</option>
                  <option>Go-To-Market Strategy</option>
                  <option>Process Consultation</option>
                </select>

                <textarea
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full bg-slate-50 border-slate-200 rounded-xl px-4 py-3 outline-none resize-none"
                />

                {error && (
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-emerald-700 disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
