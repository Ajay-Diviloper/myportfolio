import React from "react";

const Contactform = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-6 sm:p-10 max-w-[600px] mx-auto">
      {/* Title */}
      <h1 className="text-white text-2xl sm:text-2xl md:text-3xl lg:text-[2.5rem] text-left lg:text-center text-bg font-semibold">
        Lets work together
      </h1>
      <p className="text-gray-300 mt-2 sm:mt-3 text-left lg:text-center text-sm sm:text-base text-opacity-70">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit repudiandae, iste vero quaerat maxime fuga?
      </p>

      {/* Form */}
      <form className="mt-6 sm:mt-8 w-full">
        {/* First & Last Name */}
        <div className="flex flex-wrap gap-4">
          <input
            type="text"
            placeholder="First Name"
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
        </div>

        {/* Email & Phone Number */}
        <div className="mt-4 flex flex-wrap gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full sm:flex-1 bg-black text-white px-4 py-3 rounded-md outline-none"
          />
        </div>

        {/* Select Option */}
        <div className="mt-4">
          <select className="w-full bg-black text-gray-200 px-4 py-3 rounded-md outline-none">
            <option>Select an option</option>
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="full-stack">Full Stack</option>
          </select>
        </div>

        {/* Message Textarea */}
        <textarea
          className="w-full mt-4 bg-black text-gray-200 px-4 py-3 rounded-md outline-none placeholder:text-gray-400"
          placeholder="Message"
          rows={4}
        ></textarea>

        {/* Submit Button */}
        <div className="mt-6 text-center">
          <button className="px-6 py-3 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-200 rounded-full w-full sm:w-auto">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contactform;
