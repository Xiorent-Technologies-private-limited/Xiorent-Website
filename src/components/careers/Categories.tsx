import { Laptop, MenuSquare, Paintbrush, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

function Categories() {
  return (
    <div className='relative overflow-hidden px-40'>

        <div
        className="absolute -bottom-32 -right-32 w-[550px] h-[500px]
                   bg-gradient-to-r from-purple-700 via-indigo-700 to-sky-400
                   rounded-full blur-3xl opacity-20 pointer-events-none"
      />

        <Image src= "/assets/cat-head1.png"
            alt="heading"
            width={600}
            height={490}
            className="mx-auto mt-5 mb-10"
        />

<div className="flex justify-between   text-white ">
{/* Left Section */}
<div className="w-1/3 bg-black/80 rounded-xl p-6 shadow-lg">
<h2 className="text-2xl font-mono font-semibold mb-6" style={{ fontFamily: "var(--font-orbitron), sans-serif" }}>Popular Categories</h2>
<ul className="space-y-4">
<li className="flex justify-between items-center border-b border-gray-100 pb-5">
<span>UI/UX Designer</span>
<span className="bg-gradient-to-b from-[#C21CF9] via-[#4A14FE] to-[#01EFFE] text-white text-sm px-3 py-1 rounded-full">
6
</span>
</li>
<li className="flex justify-between items-center border-b border-gray-100 pb-5">
<span>Frontend Developer</span>
<span className="bg-gray-800 px-3 py-1 rounded-full">12</span>
</li>
<li className="flex justify-between items-center border-b border-gray-100 pb-5">
<span>Backend Developer</span>
<span className="bg-gray-800 px-3 py-1 rounded-full">14</span>
</li>
<li className="flex justify-between items-center border-b border-gray-100 pb-5">
<span>Full Stack Developer</span>
<span className="bg-gray-800 px-3 py-1 rounded-full">8</span>
</li>
</ul>
</div>


{/* Right Section */}
<div className="w-2/3 grid grid-cols-2 gap-6 px-6">
<div className="bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 flex gap-5 justify-center items-center cursor-pointer">
<Paintbrush className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">UI/UX <br />Designer</h3>
</div>
<div className="bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 flex gap-5 justify-center items-center cursor-pointer">
<Users className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">Human <br />Resources</h3>
</div>
<div className="bg-gradient-to-b from-[#C21CF9] via-[#4A14FE] to-[#01EFFE] hover:from-purple-400 hover:to-blue-400 transition rounded-lg p-6 flex gap-5 justify-center items-center cursor-pointer shadow-lg">
<Laptop className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">Software <br />Developers</h3>
</div>
<div className="bg-gray-800 hover:bg-gray-700 transition rounded-lg p-6 flex gap-5 justify-center items-center cursor-pointer">
<MenuSquare className="w-8 h-8 mb-3" />
<h3 className="text-lg font-medium">Blockchain <br />Developer</h3>
</div>
{/*  */}

</div>
</div>

<div className="col-span-2 flex justify-center my-10">
<button className="px-5 py-2 border border-white rounded-full flex items-center gap-2 hover:bg-white hover:text-black transition">
Get Started  →
</button>
</div>
        <Image src= "/assets/cat-head2.png"
            alt="heading"
            width={600}
            height={490}
            className="mx-auto mt-5 mb-10"
        />
      
        <Image src= "/assets/cat-head3.png"
            alt="heading"
            width={900}
            height={490}
            className="mx-auto mb-10"
        />
      
    </div>
  )
}

export default Categories
