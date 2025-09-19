import Image from "next/image";
import React from "react";

function ExploreBusiness() {
  const services = [
    {
      icon: "/assets/services-globe.png",
      title: "BLOCKCHAIN DEVELOPMENT",
      description:
        "Modern and mobile-ready website that will help you reach all of your marketing.",
    },
    {
      icon: "/assets/seervices-thunder.png",
      title: "AI DEVELOPMENT",
      description:
        "Create intuitive interfaces and delightful user experiences by blending aesthetics with usability.",
    },
    {
      icon: "/assets/services-Phone.png",
      title: "SOFTWARE DEVELOPMENT",
      description:
        "Modern and mobile-ready application that will help you reach all of your marketing.",
    },
    {
      icon: "/assets/services-Code.png",
      title: "CLOUD ENGINEERING & DEVOPS",
      description:
        "Developing a highly secure, fast and scalable APIs both REST and GraphQL.",
    },
    {
      icon: "/assets/services-game.png",
      title: "GAME DEVELOPMENT",
      description:
        "Automate the process of payments to allow users pay right on your platform.",
    },
    {
      icon: "/assets/services-users.png",
      title: "AR/VR DEVELOPMENT",
      description:
        "Finds great joy in sharing my knowledge with others. As a technical mentor this allows me to give back to the community.",
    },
  ];

  return (
    <div className="relative overflow-hidden py-20">

         <div
        className="absolute -top-32 left-62 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-30 pointer-events-none"
      />

       <div
        className="absolute -bottom-32 -right-22 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      {/* Heading Image */}
      <Image
        src="/assets/services-explore-head.png"
        alt="heading"
        width={500}
        height={500}
        className="mx-auto z-10"
      />

      {/* Services Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="backdrop-blur-md p-6 rounded-2xl border border-gray-300 shadow-lg text-center space-y-4 hover:border-purple-500 transition-all"
            >
              {/* Replace icon with Image */}
              <div className="flex justify-center">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </div>
              <h3 className="text-white font-bold text-lg tracking-wide" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed" style={{ fontFamily: "var(--font-Manrope), sans-serif" }}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExploreBusiness;

