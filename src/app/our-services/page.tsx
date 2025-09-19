// import React from 'react'

import CreateTogether from "@/components/layout/CreateTogether"
import Faq from "@/components/layout/Faq"
import ExploreBusiness from "@/components/our-services/ExploreBusiness"
import TechnoServices from "@/components/our-services/TechnoServices"
import TechStack from "@/components/our-services/TechStack"
import Image from "next/image"

function page() {
  return (
    <div className="relative overflow-hidden mt-10">

        <div className="  flex justify-center items-center gap-20 bg-black ">

            <div
        className="absolute top-8 -right-52 w-[550px] h-[700px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-40 pointer-events-none"
      />

       <div
        className="absolute top-8 -left-52 w-[550px] h-[700px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-40 pointer-events-none z-5"
      />

            <div className="mt-10 relative left-32">

      <h1 className="text-5xl lg:text-6xl font-bold text-white text-center leading-tight" style={{ fontFamily: 'var(--font-orbitron), sans-serif' }}>
              Innovative <br /> Services That <br /> Drive Success
            </h1>

    <Image src= "/assets/services-bg2.png"
            alt="heading"
            width={600}
            height={490}
            className="mx-auto z-0"
    />

                  </div>


    <Image src= "/assets/servicesGIF.gif"
                alt="heading"
                width={1000}
                height={700}
                className=" mt-5  "
            />

    </div>

    <TechnoServices/>


    <ExploreBusiness/>

    <TechStack/>

    <CreateTogether/>


    <Faq/>

    </div>
  )
}

export default page
