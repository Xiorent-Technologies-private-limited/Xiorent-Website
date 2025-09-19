import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div className='relative overflow-hidden pb-10 pt-20'>

        <div
          className="absolute -top-60 -left-32 w-[450px] h-[600px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-30 pointer-events-none"
        />
         <div
          className="absolute -bottom-60 -right-32 w-[450px] h-[600px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-30 pointer-events-none"
        />

      <Image src= "/assets/maintain-bg.png"
                  alt="heading"
                  width={600}
                  height={490}
                  className="mx-auto z-0"
          />

           <h2 className="text-6xl mt-10  bg-gradient-to-b from-[#C21CF9] via-[#4A14FE] to-[#01EFFE] bg-clip-text text-transparent text-center"
          style={{ fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Under Maintenance
          </h2>

          <p className='mt-2 text-lg text-center'>
            Our Website is under Maintenance.We will be back shortly. 
          </p>

 <button
            className="w-1/5 mx-auto mt-10  py-2 rounded-full backdrop-blur-md text-white font-semibold flex items-center border justify-center gap-2 hover:opacity-90 transition"
          >
            Back to Home →
          </button>
    </div>
  )
}

export default page
