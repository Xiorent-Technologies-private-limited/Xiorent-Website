// import React from 'react'

import CreateTogether from "@/components/layout/CreateTogether"
import Faq from "@/components/layout/Faq"
import Image from "next/image"

function page() {
  return (
    <div className="mt-10">

        <div className="flex justify-center items-center bg-black ">

            <div className="py-5 relative left-32">

      <Image src= "/assets/services-head1.png"
                  alt="heading"
                  width={500}
                  height={500}
                  className="mx-auto "
                  />
    <Image src= "/assets/services-bg2.png"
            alt="heading"
            width={600}
            height={490}
            className="mx-auto mt-5"
    />
    
                  </div>


    <Image src= "/assets/services-bg.svg"
                alt="heading"
                width={1000}
                height={700}
                className=" mt-5"
            />




    </div>


    <CreateTogether/>


    <Faq/>

    </div>
  )
}

export default page
