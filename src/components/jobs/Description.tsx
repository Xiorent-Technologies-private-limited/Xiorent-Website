"use client";

import React from "react";
import Link from "next/link";

export default function Description() {
  return (
    <div className="min-h-screen   ">
      <div className="max-w-4xl mx-auto mb-8">
        
        {/* Job Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white-400 mb-6 pb-2 ">
          Frontend Development
        </h1>

        {/* Job Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white-400 mb-2">
            Job Overview
          </h2>
          <p className="text-white-400 leading-relaxed">
            As a Frontend Developer, you will be responsible for translating
            UI/UX designs into responsive and interactive web interfaces. You’ll
            collaborate closely with designers, backend developers, and product
            managers to bring the visual aspects of websites and applications to
            life while ensuring optimal performance and user experience.
          </p>
        </section>

        {/* Key Responsibilities */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white-400 mb-2">
            Key Responsibilities
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>
              Develop responsive and visually appealing user interfaces using
              HTML, CSS, and JavaScript.
            </li>
            <li>
              Collaborate with designers to turn mockups and wireframes into
              functional websites.
            </li>
            <li>Optimize web pages for maximum speed and scalability.</li>
            <li>Implement SEO best practices for front-end development.</li>
            <li>Ensure the technical feasibility of UI/UX designs.</li>
            <li>
              Maintain, improve, and troubleshoot existing web pages or
              applications.
            </li>
            <li>
              Ensure cross-browser compatibility and responsive design on
              various devices.
            </li>
          </ul>
        </section>

        {/* Job Requirements */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-white-400 mb-2">
            Job Requirements & Skills
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-white-400">
            <li>Proficiency in HTML5, CSS3, and JavaScript (ES6+).</li>
            <li>
              Experience with JavaScript frameworks like React.js, Angular.js,
              or Vue.js.
            </li>
            <li>
              Strong understanding of responsive design and cross-browser
              compatibility.
            </li>
            <li>Knowledge of version control systems like Git.</li>
            <li>
              Attention to detail, especially in translating design into code.
            </li>
            <li>
              Experience with front-end build tools (Webpack, Gulp, or Babel).
            </li>
            <li>
              Ability to work in a fast-paced, collaborative environment.
            </li>
            <li>Strong problem-solving skills and attention to detail.</li>
          </ul>
        </section>

        {/* Required Tools */}
        <section>
          <h2 className="text-xl font-semibold text-white-400 mb-2">
            Required Tools / Technologies
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-white-400">
            <li>HTML5, CSS3, JavaScript</li>
            <li>React.js, Angular.js, Vue.js</li>
            <li>Git, GitHub, or GitLab</li>
            <li>Bootstrap, Material UI, Tailwind CSS</li>
            <li>Webpack, Gulp, or Grunt</li>
            <li>Chrome DevTools for debugging</li>
          </ul>
        </section>
      </div>
    </div>
  );
}


