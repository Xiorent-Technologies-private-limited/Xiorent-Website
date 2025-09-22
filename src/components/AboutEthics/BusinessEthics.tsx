"use client";
import React from "react";
import Heading from "../Common/Heading";
import Image from "next/image";

const BusinessEthics = () => {
    return (
        <div className="min-h-screen text-gray-100 p-[120px]">
            {/* HEADING */}
            <Heading heading="Business" subHeading="Ethics" />

            {/* MAIN CONTENT */}
            <main className="max-w-4xl mx-auto">
                {/* Sections */}
                <div className="space-y-10 leading-relaxed text-gray-200">
                    <Image src= "/assets/ethics-text.png"
                        alt="heading"
                        width={1100}
                        height={920}
                        className="mx-auto mt-7 z-0"
                />
                </div>
            </main>
        </div>
    );
};

export default BusinessEthics;
