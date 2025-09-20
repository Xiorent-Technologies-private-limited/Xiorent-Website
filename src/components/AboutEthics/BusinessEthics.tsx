"use client";
import React from "react";
import Link from "next/link";
import Heading from "../Common/Heading";
import Image from "next/image";

const BusinessEthics = () => {
    return (
        <div className="min-h-screen  text-gray-100 p-[120px]">

            {/* NAVBAR */}


            <nav className="flex justify-between items-center mb-20">
                <ul className="flex w-full justify-between text-base text-gray-400">
                    <li>
                        <Link href="/about/bod" className="hover:text-white transition">
                            Board Of Directors
                        </Link>
                    </li>
                    <li>
                        <Link href="/about/team" className="hover:text-white transition">
                            Our Team
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/about/ethics"
                            className="relative pb-2 font-semibold text-white after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-purple-500 after:to-cyan-400"
                        >
                            Code of Ethics
                        </Link>
                    </li>
                    <li>
                        <Link href="/coming-soon" className="hover:text-white transition">
                            Jobs
                        </Link>
                    </li>
                </ul>
            </nav>


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
