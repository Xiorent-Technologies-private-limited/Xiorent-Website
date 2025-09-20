"use client";
import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const DirectorProfile = () => {
  return (
    <div className="min-h-screen p-[120px]">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Main Image Container - Larger & Transparent */}
              <div className="w-[500px] h-[500px] rounded-4xl overflow-hidden flex items-center justify-center">
                <img
                  src="/Anindya.png"  // <-- Use transparent PNG (remove bg)
                  alt="Director"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 lg:pl-8">
            {/* Header Text */}
            <div className="text-center lg:text-left">
              <div className="text-sm text-gray-400 uppercase tracking-[0.2em] mb-4">
                HELLO, MY NAME IS
              </div>

              {/* Enlarged Name/Signature Image */}
              <img
                src="/Anindya Sundar Pyne.png"
                alt="Signature"
                className="w-90 h-auto mx-auto lg:mx-0 mb-6" // increased from w-40 → w-72
              />

              <p className="text-2xl md:text-3xl text-gray-300 font-light mb-8">
                Director & CMO
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
              <p>
                Anindya Sundar Pyne is the Director and Chief Marketing Officer of
                Xiorent Technologies Private Limited, where he plays a pivotal
                role in shaping the company's brand, market presence, and
                go-to-market strategy. As a co-founder, Anindya has been
                instrumental in building the foundation of Xiorent—transforming
                it from an ambitious startup into a technology powerhouse
                recognized for its innovation and customer-first mindset.
              </p>

              <p>
                Anindya's journey into entrepreneurship was driven by a desire to
                connect people and businesses with transformative technology. From
                the early days of Xiorent, he focused on creating meaningful
                narratives around AI, software development, blockchain, AR/VR,
                and IoT—helping clients not just understand these innovations,
                but envision their potential. Known for his creative energy and
                strategic clarity, Anindya has built agile marketing systems that
                scale with the company.
              </p>

              <p>
                His collaborative approach and commitment to innovation have made
                him a trusted voice within the leadership team, as well as a
                mentor to the next generation of marketers and technologists
                within Xiorent. His work continues to reflect a blend of vision,
                empathy, and execution—making him a key architect of Xiorent's
                ongoing success.
              </p>
            </div>

            {/* Social Links */}
                        <div className="flex gap-5 mt-10">
                          <a
                            href="#"
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-500 transition"
                          >
                            <Facebook className="w-4 h-4 text-gray-300" />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-400 transition"
                          >
                            <Linkedin className="w-4 h-4 text-gray-300" />
                          </a>
                          <a
                            href="#"
                            className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-300 transition"
                          >
                            <Twitter className="w-4 h-4 text-gray-300" />
                          </a>
                        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectorProfile;
