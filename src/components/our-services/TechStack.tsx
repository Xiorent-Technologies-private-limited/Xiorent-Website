"use client";
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";
import { FaAws, FaJava, FaMicrosoft } from 'react-icons/fa6';
import {
  SiPython, SiBootstrap, SiJavascript, SiMysql, SiNextdotjs,
  SiAdobexd, SiFirebase, SiUnrealengine, SiMongodb, SiBlender,
  SiShopify, SiReact, SiPhp, SiFigma, SiAutodesk, SiWordpress,
  SiUnity, SiKotlin, SiTypescript, SiSwift, SiDjango, SiFlutter,
  SiTailwindcss, SiHostinger, SiNodedotjs, SiDocker,
} from "react-icons/si";
import { VscAzure } from 'react-icons/vsc';

function TechStack() {
  const techStack = [
    { name: "Python", icon: <SiPython className="text-yellow-400" size={32} /> },
    { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" size={32} /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-300" size={32} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-500" size={32} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" size={32} /> },
    { name: "Adobe XD", icon: <SiAdobexd className="text-pink-500" size={32} /> },
    { name: "Firebase", icon: <SiFirebase className="text-yellow-400" size={32} /> },
    { name: "Unreal Engine", icon: <SiUnrealengine className="text-gray-300" size={32} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={32} /> },
    { name: "Blender", icon: <SiBlender className="text-orange-500" size={32} /> },
    { name: "Shopify", icon: <SiShopify className="text-green-400" size={32} /> },
    { name: "React Native", icon: <SiReact className="text-cyan-400" size={32} /> },
    { name: "PHP", icon: <SiPhp className="text-indigo-400" size={32} /> },
    { name: "Azure", icon: <VscAzure className="text-blue-400" size={32} /> },
    { name: "Figma", icon: <SiFigma className="text-pink-400" size={32} /> },
    { name: "Maya", icon: <SiAutodesk className="text-teal-400" size={32} /> },
    { name: "Microsoft 365", icon: <FaMicrosoft className="text-orange-500" size={32} /> },
    { name: "WordPress", icon: <SiWordpress className="text-blue-500" size={32} /> },
    { name: "Unity", icon: <SiUnity className="text-gray-200" size={32} /> },
    { name: "Java", icon: <FaJava className="text-red-500" size={32} /> },
    { name: "AWS", icon: <FaAws className="text-orange-400" size={32} /> },
    { name: "Kotlin", icon: <SiKotlin className="text-blue-500" size={32} /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-500" size={32} /> },
    { name: "Swift", icon: <SiSwift className="text-orange-400" size={32} /> },
    { name: "Django", icon: <SiDjango className="text-green-500" size={32} /> },
    { name: "Flutter", icon: <SiFlutter className="text-blue-400" size={32} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" size={32} /> },
    { name: "Hostinger", icon: <SiHostinger className="text-purple-500" size={32} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" size={32} /> },
    { name: "Docker", icon: <SiDocker className="text-blue-400" size={32} /> },
  ];

  const iconSize = 80; 
  const ringGap = 50; 
  const baseRadius = 120;

  const rings = [
    { count: 6, duration: 40 },
    { count: 10, duration: 60 },
    { count: 14, duration: 90 },
  ].map((ring, idx) => ({
    ...ring,
    radius: baseRadius + idx * (iconSize + ringGap),
  }));

  let iconIndex = 0;

  return (
    <div className="pt-10 relative overflow-hidden">
      <section className="relative flex justify-center items-center py-20 overflow-hidden">
        <div className="relative w-[700px] h-[700px] mx-auto">
          
          {/* Center Icon */}
          <div className="flex flex-col items-center justify-center w-24 h-24 rounded-full bg-black shadow-2xl hover:scale-110 transition-transform cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border-4 border-cyan-400/60">
            <SiReact className="text-cyan-400" size={40} />
            <p className="text-white text-xs mt-1 font-semibold">React</p>
          </div>

          {/* Animated Rings */}
          {rings.map((ring, ringIdx) => {
            const ringIcons = Array.from({ length: ring.count }).map((_, i) => {
              if (iconIndex >= techStack.length) return null;
              const angle = (i / ring.count) * 2 * Math.PI;
              const x = parseFloat((ring.radius * Math.cos(angle)).toFixed(2));
              const y = parseFloat((ring.radius * Math.sin(angle)).toFixed(2));
              
              const tech = techStack[iconIndex++];

              return (
                <div
                  key={`${ringIdx}-${i}`}
                  className="absolute flex flex-col items-center justify-center w-20 h-20 rounded-full bg-black/90 shadow-xl hover:scale-110 hover:bg-cyan-900/80 transition-transform cursor-pointer border-2 border-cyan-400/20"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`,
                  }}
                >
                  {tech.icon}
                  <p className="text-white text-[11px] mt-1 font-medium text-center">{tech.name}</p>
                </div>
              );
            });

            return (
              <motion.div
                key={ringIdx}
                className="absolute left-1/2 top-1/2"
                style={{ width: 0, height: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: ring.duration, ease: "linear" }}
              >
                {ringIcons}
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TechStack;
