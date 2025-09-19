import React from "react";

type JobHeaderProps = {
  isApply: boolean;
  setIsApply: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function JobHeader({ isApply, setIsApply }: JobHeaderProps) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-evenly items-center mb-8">
        {/* Job Description */}
        <h1
          onClick={() => setIsApply(false)}
          className={`relative pb-2 text-lg md:text-xl font-semibold cursor-pointer transition-colors
            ${
              !isApply
                ? "bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                : "text-gray-400 hover:text-gray-200"
            }`}
        >
          Job Description
          {!isApply && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 rounded-full"></span>
          )}
        </h1>

        {/* Apply */}
        <h1
          onClick={() => setIsApply(true)}
          className={`relative pb-2 text-lg md:text-xl font-semibold cursor-pointer transition-colors
            ${
              isApply
                ? "bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                : "text-gray-400 hover:text-gray-200"
            }`}
        >
          Apply
          {isApply && (
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-400 rounded-full"></span>
          )}
        </h1>
      </div>
    </div>
  );
}
