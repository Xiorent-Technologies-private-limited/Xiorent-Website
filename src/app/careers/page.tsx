// import React from 'react'

import Alerts from "@/components/careers/Alerts"
import Categories from "@/components/careers/Categories"
import Culture from "@/components/careers/Culture"
import Jobs from "@/components/careers/Jobs"
import CreateTogether from "@/components/layout/CreateTogether"
import Faq from "@/components/layout/Faq"
import Image from "next/image"

function page() {
  return (
    <div className="relative overflow-hidden pt-20">
       <div
        className="absolute top-12 -right-52 w-[400px] h-[700px]
                   bg-gradient-to-t from-[#C30EFF]  to-[#1E92FF]/80
                   rounded-full blur-3xl opacity-30 pointer-events-none"
      />
      <div
        className="absolute top-12 -left-52 w-[400px] h-[700px]
                   bg-gradient-to-b from-[#C30EFF] to-[#1E92FF]/80
                   rounded-full blur-3xl opacity-30 pointer-events-none"
      />

    <div className="relative w-full min-h-screen overflow-hidden">
  {/* Background image */}
  <Image
    src="/assets/LooperBG1.png"
    alt="bg"
    width={1600}
    height={900}
    className=" absolute -top-32 left-0 w-full
     object-cover z-0"
  />

  {/* Foreground content */}
  <div className="relative z-10 flex justify-center items-center">
    <Image
      src="/assets/carrers-head1.png"
      alt="heading"
      width={600}
      height={490}
      className="mx-auto mt-5"
    />
    <Image
      src="/assets/careers-bg1.png"
      alt="heading"
      width={600}
      height={490}
      className="mx-auto mt-5"
    />
  </div>

  <div className="relative z-10">
    <button className="gradient-border relative bottom-20 left-20">
      Explore Roles
    </button>
  </div>
      <Culture/>
</div>




      <Jobs/>

      <Categories/>

      <Alerts/>

      <CreateTogether/>

      <Faq/>

    </div>
  )
}

export default page
