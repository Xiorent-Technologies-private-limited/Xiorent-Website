"use client";


import Image from "next/image";
import React from "react";


export default function JobApplicationForm() {
  return (
    <div className="min-h-screen flex items-center justify-center pb-20">
      <div className="w-full max-w-3xl border border-white/20 rounded-xl p-10 shadow-lg backdrop-blur-sm">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-semibold">Job Application Form</h1>
          <p className="text-xs text-gray-400">
            ©2025 by Kovent Technologies Private Limited. All Rights Reserved.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2">Full name*</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm mb-2">Email Address*</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm mb-2">Phone Number*</label>
            <input
              type="tel"
              placeholder="Enter your number"
              className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm mb-2">Location*</label>
            <input
              type="text"
              placeholder="Enter your location"
              className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2">Message for us</label>
            <textarea
              placeholder="Feel Free to Connect"
              rows={3}
              className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400"
            ></textarea>
          </div>

          {/* Resume & Portfolio */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm mb-2">Your Resume CV*</label>
              <input
                type="file"
                className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-gradient-to-r  file:text-white hover:file:opacity-80"
              />
            </div>
            <div>
              <label className="block text-sm mb-2">Your Portfolio</label>
              <input
                type="file"
                className="w-full rounded-full border border-white/20 bg-transparent px-4 py-2 text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:bg-gradient-to-r file:text-white hover:file:opacity-80"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10 mt-8">
            <button
              type="submit"
              
            >
             <Image width={180} height={50} src="/application-button.png" alt="Send Application" />
            </button>
            <p className="text-xs text-gray-400 leading-relaxed">
              By clicking{" "}
              <span className="text-white font-medium">Send Application</span>, you agree to our{" "}
              <span className="underline cursor-pointer">Terms & Conditions</span>,{" "}
              <span className="underline cursor-pointer">Privacy Policy</span>, and{" "}
              <span className="underline cursor-pointer">Cookie Policy</span>.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
