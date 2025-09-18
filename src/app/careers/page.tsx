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
        className="absolute top-12 -right-52 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-40 pointer-events-none"
      />
      <div
        className="absolute top-12 -left-52 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-40 pointer-events-none"
      />

     <div
  className="w-full min-h-screen bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/assets/LooperBG1.png')" }}
>
  <div className="flex justify-center items-center">
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
      <div>
        <button className="gradient-border relative bottom-20 left-20">
            Explore Roles
        </button>
      </div>
</div>


      <Culture/>

      <Jobs/>

      <Categories/>

      <Alerts/>

      <CreateTogether/>

      <Faq/>

    </div>
  )
}

export default page
