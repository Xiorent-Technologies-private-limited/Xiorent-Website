// import React from 'react'

import CreateTogether from "@/components/layout/CreateTogether"
import Faq from "@/components/layout/Faq"
import ExploreBusiness from "@/components/our-services/ExploreBusiness"
import TechnoServices from "@/components/our-services/TechnoServices"
import TechStack from "@/components/our-services/TechStack"
import Image from "next/image"

function page() {
  return (
    <div className="relative overflow-hidden pt-20">

        <div className="  flex justify-center items-center gap-20 bg-black ">

           <div
        className="absolute top-12 -right-52 w-[400px] h-[700px]
                   bg-gradient-to-t from-[#C30EFF]  to-[#1E92FF]/80
                   rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <div
        className="absolute top-12 -left-52 w-[400px] h-[700px]
                   bg-gradient-to-b from-[#C30EFF] to-[#1E92FF]/80
                   rounded-full blur-3xl opacity-30 pointer-events-none z-5"
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
