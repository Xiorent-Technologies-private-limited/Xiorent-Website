"use client";
import React from "react";
import { Facebook, Linkedin, Twitter } from "lucide-react";

interface ProfileData {
  name: string;
  position: string;
  profileImage: string;
  nameImage: string;
  description: string[];
  socialLinks?: {
    facebook?: string;
    linkedin?: string;
    twitter?: string;
  };
}

interface ProfilesProps {
  profiles: ProfileData[];
}

const Profiles: React.FC<ProfilesProps> = ({ profiles }) => {
  return (
    <div className="space-y-20">
      {profiles.map((profile, index) => (
        <div key={index} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* LEFT: profile image */}
          <div className="relative w-96 h-96">
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="relative w-96 h-96 object-contain left-40 top-20"
            />
          </div>

          {/* RIGHT: content */}
          <div className="text-gray-300">
            {/* Name image */}
            <div className="mb-6">
              <img
                src={profile.nameImage}
                alt={profile.name}
                className="w-90 h-auto object-contain mx-auto lg:mx-0"
              />
              <p className="text-lg text-gray-400 mt-4">{profile.position}</p>
            </div>

            {/* Description */}
            <div className="space-y-5 text-sm md:text-base leading-relaxed text-gray-300">
              {profile.description.map((paragraph, pIndex) => (
                <p key={pIndex}>{paragraph}</p>
              ))}
            </div>

            {/* Social links */}
            {profile.socialLinks && (
              <div className="flex gap-5 mt-10">
                {profile.socialLinks.facebook && (
                  <a
                    href={profile.socialLinks.facebook}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-500 transition"
                  >
                    <Facebook className="w-4 h-4 text-gray-300" />
                  </a>
                )}
                {profile.socialLinks.linkedin && (
                  <a
                    href={profile.socialLinks.linkedin}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-400 transition"
                  >
                    <Linkedin className="w-4 h-4 text-gray-300" />
                  </a>
                )}
                {profile.socialLinks.twitter && (
                  <a
                    href={profile.socialLinks.twitter}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-gray-700 bg-black/30 hover:border-blue-300 transition"
                  >
                    <Twitter className="w-4 h-4 text-gray-300" />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Profiles;
