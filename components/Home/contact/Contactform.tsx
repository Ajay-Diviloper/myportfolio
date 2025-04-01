"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    option: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Fix: Correct event type
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fix: Correct form submission event type
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      setLoading(false);

      if (res.ok) {
        setSuccess("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", phone: "", option: "", message: "" });
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setError( `  Something went wrong. Please try again.`);
    }
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-6 sm:p-10 max-w-[600px] mx-auto">
      <h1 className="text-white text-2xl sm:text-3xl lg:text-[2.5rem] text-center font-semibold">
        Lets work together
      </h1>
      <p className="text-gray-300 mt-3 text-center text-sm sm:text-base text-opacity-70">
        Fill out the form below, and we will get back to you as soon as possible.
      </p>

      {error && <p className="text-red-500 text-center mt-3">{error}</p>}
      {success && <p className="text-green-500 text-center mt-3">{success}</p>}

      <form className="mt-6 sm:mt-8 w-full" onSubmit={handleSubmit}>
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
        </div>

        <div className="mt-4">
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            required
            className="w-full bg-black text-gray-200 px-4 py-3 rounded-md outline-none"
          >
            <option value="">Select an option</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="full-stack">Full Stack</option>
          </select>
        </div>

        <textarea
          name="message"
          className="w-full mt-4 bg-black text-gray-200 px-4 py-3 rounded-md outline-none placeholder:text-gray-400"
          placeholder="Message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <div className="mt-6 text-center">
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full w-full sm:w-auto"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
