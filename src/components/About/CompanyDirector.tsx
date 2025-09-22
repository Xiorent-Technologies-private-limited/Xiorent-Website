"use client";
import React from "react";
import Heading from "../Common/Heading";
import Profiles from "../Common/Profiles";

const CompanyDirector = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto relative">


        {/* Header: COMPANY + Directors */}
        <Heading heading={"Company"} subHeading={"Directors"} />

        {/* Profiles */}
        <Profiles profiles={[
          {
            name: "Shivam Goswami",
            position: "Director & CEO",
            profileImage: "/Shivam.png",
            nameImage: "/ShivamGoswami.png",
            description: [
              "Shivam Goswami is the Director and Chief Executive Officer of Xiorent Technologies Private Limited, a next-generation technology company focused on driving digital innovation across artificial intelligence, automation, blockchain, AR/VR, IoT, and full-stack software development. He founded the company with a mission to transform the digital landscape through creativity, purpose-driven innovation, and user-centric design.",
              "Shivam has led Xiorent from inception with a vision to develop advanced technology platforms that challenge conventional norms and deliver practical, high-impact solutions. His leadership has been instrumental in positioning Xiorent as a forward-thinking player in emerging tech—spearheading efforts in machine learning, immersive technologies, and intelligent automation. At Xiorent, he fosters an environment where creativity thrives and diverse perspectives fuel progress. His belief in the power of experimentation and continuous learning drives the company's agile, solution-driven mindset.",
              "Shivam also actively engages with thought leaders, strategic partners, and global technology forums to contribute to the broader discourse on digital transformation. He is dedicated to using technology as a catalyst for growth, empowerment, and positive change—both in business and society."
            ],
            socialLinks: {
              facebook: "#",
              linkedin: "#",
              twitter: "#"
            }
          }
        ]} />

        <div className="mt-20">
          <Profiles profiles={[
            {
              name: "Anindya Sundar Pyne",
              position: "Director & CMO",
              profileImage: "/Anindya.png",
              nameImage: "/Anindya Sundar Pyne.png",
              description: [
                "Anindya Sundar Pyne is the Director and Chief Marketing Officer of Xiorent Technologies Private Limited, where he plays a pivotal role in shaping the company's brand, market presence, and go-to-market strategy. As a co-founder, Anindya has been instrumental in building the foundation of Xiorent—transforming it from an ambitious startup into a technology powerhouse recognized for its innovation and customer-first mindset.",
                "Anindya's journey into entrepreneurship was driven by a desire to connect people and businesses with transformative technology. From the early days of Xiorent, he focused on creating meaningful narratives around AI, software development, blockchain, AR/VR, and IoT—helping clients not just understand these innovations, but envision their potential. Known for his creative energy and strategic clarity, Anindya has built agile marketing systems that scale with the company.",
                "His collaborative approach and commitment to innovation have made him a trusted voice within the leadership team, as well as a mentor to the next generation of marketers and technologists within Xiorent. His work continues to reflect a blend of vision, empathy, and execution—making him a key architect of Xiorent's ongoing success."
              ],
              socialLinks: {
                facebook: "#",
                linkedin: "#",
                twitter: "#"
              }
            }
          ]} />
        </div>
      </div>
    </div>
  );
};

export default CompanyDirector;
