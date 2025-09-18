"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function Page() {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    // Target date (change this to your event date)
    const targetDate = new Date("2025-12-31T23:59:59");

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0 });
        return;
      }

      // Convert time
      const totalMinutes = Math.floor(diff / 1000 / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);
      const totalMonths = Math.floor(totalDays / 30);

      setTimeLeft({
        months: totalMonths % 12,
        days: totalDays % 30,
        hours: totalHours % 24,
        minutes: totalMinutes % 60,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000); 

    return () => clearInterval(interval);
  }, []);
 

  return (
   <div
  className="w-full min-h-screen py-32 relative overflow-hidden bg-bottom bg-no-repeat px-0 mx-0"
  style={{ backgroundImage: "url('/assets/soon-bg.png')" }}
>
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
      <Image src= "/assets/xiorent-logo.png"
                        alt="heading"
                        width={200}
                        height={200}
                        className="mx-auto z-0"
                />

{/* <h2 className="mt-5 text-7xl font-bold bg-gradient-to-b from-[#C21CF9] via-[#4A14FE] to-[#01EFFE] bg-clip-text text-transparent text-center"
          style={{ fontFamily: "var(--font-Manrope), sans-serif" }}
          >
            COMING SOON 
          </h2> */}

          <Image src= "/assets/soon-head1.png"
                        alt="heading"
                        width={400}
                        height={420}
                        className="mx-auto mt-7 z-0"
                />

          <div className="w-1/3 mx-auto mt-10 bg-black/10 backdrop-blur-md flex justify-center gap-6 p-6 rounded-lg text-white text-center">
      <div>
        <p className="text-3xl font-bold font-mono">{timeLeft.months}</p>
        <span className="text-sm">Months</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div>
        <p className="text-3xl font-bold font-mono">{timeLeft.days}</p>
        <span className="text-sm">Days</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div>
        <p className="text-3xl font-bold font-mono">{timeLeft.hours}</p>
        <span className="text-sm">Hours</span>
      </div>
      <span className="text-3xl font-bold">:</span>
      <div>
        <p className="text-3xl font-bold font-mono">{timeLeft.minutes}</p>
        <span className="text-sm">Mins</span>
      </div>
    </div>

          <p className='text-lg text-center mt-10'
          style={{ fontFamily: "var(--font-Manrope), sans-serif" }}
          
          >We Will Return soon, Stronger and better then ever !</p>

          <div className="relative w-[30%] mt-10 mx-auto ">
  <input
    type="text"
    placeholder="Email"
    className="border rounded-full w-full py-4 px-4 pr-28" // <-- extra right padding
  />

  <button
    className="absolute top-1/2 right-2 -translate-y-1/2
               px-7 py-3 rounded-full bg-gradient-to-r from-white to-gray-400
               text-black text-sm font-medium hover:from-gray-600 hover:to-gray-400
               transition "
  >
    Notify Me
  </button>
</div>

 <div className="flex space-x-5 mt-10 items-center justify-center">
              <a href="#" className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <span className="text-xl font-bold">f</span>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <span className="text-xl font-bold">in</span>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border-2 border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>

    </div>
  )
}

export default Page
