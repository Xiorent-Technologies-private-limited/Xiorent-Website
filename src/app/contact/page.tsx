import React from "react";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

function page() {
  return (
    <div className="relative overflow-hidden mt-20 mb-20 px-6 lg:px-20">

        <div
          className="absolute top-12 -right-32 w-[550px] h-[600px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
        />
        <div
          className="absolute top-12 -left-32 w-[550px] h-[600px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
        />
      {/* Heading */}
      <h1
        className="text-5xl lg:text-6xl font-bold text-white text-left leading-tight mb-12"
        style={{ fontFamily: "var(--font-orbitron), sans-serif" }}
      >
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2">
        {/* Left Side - Form */}
        <form className="bg-blue-200/15 backdrop-blur-md p-8 rounded-2xl shadow-2xl space-y-6 w-md">
          {/* Full Name */}
          <div>
            <label className="block text-sm text-white mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Aarushi Mehta"
              className="w-full bg-transparent border border-gray-500 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm text-white mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="+91 9876543210"
              className="w-full bg-transparent border border-gray-500 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm text-white mb-2">Email</label>
            <input
              type="email"
              placeholder="anjali.panday@gmail.com"
              className="w-full bg-transparent border border-gray-500 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm text-white mb-2">
              Message For Us!
            </label>
            <textarea
              placeholder="Feel free to connect"
              className="w-full min-h-[120px] bg-transparent border border-gray-500 rounded-2xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/3 mx-auto py-2 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold flex items-center border justify-center gap-2 hover:opacity-90 transition"
          >
            Submit →
          </button>
        </form>

        {/* Right Side - Company Info */}
        <div className=" p-8 rounded-2xl shadow-2xl text-white flex flex-col gap-6">
          <h2 className="text-6xl  bg-gradient-to-r from-[#4A14FE] via-[#C21CF9] to-[#01EFFE] bg-clip-text text-transparent text-center"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Xiorent Technologies <br /> Private Limited
          </h2>

          <p>
            10/10, Hridaypur Station rd,
            <br /> Kolkata, West Bengal : 700127
          </p>

          <p>📞 +91 7319824047</p>
          <p>✉️ official@xiorent.com</p>

          {/* Social Icons */}
          <div>
            <p className="mb-2">Follow us on:</p>
            <div className="flex gap-4 text-xl">
              <FaYoutube className="text-white cursor-pointer hover:scale-110 transition" />
              <FaInstagram className="text-white cursor-pointer hover:scale-110 transition" />
              <FaFacebook className="text-white cursor-pointer hover:scale-110 transition" />
              <FaTwitter className="text-white cursor-pointer hover:scale-110 transition" />
            </div>
          </div>

          {/* Map Embed */}
          <div className=" h-48 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.215294352362!2d88.4248!3d22.6438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275c7b469a6e5%3A0xa2f75f85f4ef5f8!2sHridaypur%20Station%20Road!5e0!3m2!1sen!2sin!4v1694704300000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
