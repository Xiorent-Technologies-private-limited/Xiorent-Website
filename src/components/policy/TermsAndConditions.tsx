"use client";

import React from "react";

export default function Termsandconditions() {
  return (
    <div className="min-h-screen  text-white-800 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-center bg-gradient-to-r from-purple-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent pt-12">
      Terms and Conditions
    </h1>

        {/* Effective Date & Company Info */}
        <p className="mb-4 mt-6">
          <strong>Effective Date:</strong> 15/07/2025
        </p>
        <p className="mb-2">
          <strong>Company Name:</strong> Xiorent Technologies Private Limited
        </p>
        <p className="mb-2">
          <strong>Registered Address:</strong> 10/10, Hindustan Kolkata, West Bengal, 700127, India
        </p>
        <p className="mb-6">
          <strong>Email:</strong>{" "}
          <a href="mailto:info@xiorent.com" className="text-blue-600 underline">
            info@xiorent.com
          </a>
        </p>

        {/* Section */}
        <Section title="Acceptance of Terms">
          By accessing or using the website, applications, products, or services offered by Xiorent
          Technologies Private Limited (“we,” “us,” or “our”), you agree to be bound by these Terms of
          Service and our Privacy Policy. If you do not agree with any part of these terms, you must not
          use our services.
        </Section>

        <Section title="Eligibility">
          To use our services, you must be at least 18 years old or the legal age in your jurisdiction. By
          using our services, you confirm that you meet these requirements and are legally able to enter
          into a binding agreement.
        </Section>

        <Section title="Services Overview">
          Xiorent Technologies offers services including but not limited to:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>AI and automation solutions</li>
            <li>Blockchain development</li>
            <li>Game development</li>
            <li>AR/VR solutions</li>
            <li>Mobile and web app development</li>
            <li>Custom enterprise software</li>
          </ul>
          <p className="mt-2">
            The services may be updated or modified from time to time. We reserve the right to
            discontinue or introduce new functionalities without prior notice.
          </p>
        </Section>

        <Section title="User Responsibilities">
          By using our website or services, you agree to:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Use our services lawfully and responsibly</li>
            <li>Respect intellectual property rights</li>
            <li>Not attempt to hack, disrupt, or exploit our platforms</li>
            <li>Not engage in abusive or harmful conduct</li>
            <li>Provide accurate and complete information when required</li>
            <li>Be responsible for any content you post, transmit, or share while using our services</li>
          </ul>
        </Section>

        <Section title="Intellectual Property Rights">
          All intellectual property rights, trademarks, documentation, and intellectual property on our
          platform are the exclusive property of Xiorent Technologies. Unauthorized use, reproduction, or
          distribution is strictly prohibited without prior approval.
        </Section>

        <Section title="Limitation of Liability">
          To the maximum extent permitted by law, Xiorent Technologies Private Limited shall not be
          liable for any direct, indirect, incidental, or consequential damages arising out of your use of
          our products or services, including but not limited to loss of revenue, data, performance, or
          accuracy.
        </Section>

        <Section title="Termination">
          We reserve the right to suspend or terminate your project at any time, with or without notice, if
          you violate these Terms of Service or engage in any activity that is harmful to our operations or
          reputation.
        </Section>

        <Section title="Governing Law">
          These Terms of Service are governed by the laws of India. Any disputes arising will be subject to
          the exclusive jurisdiction of the courts located in Kolkata.
        </Section>

        <Section title="Modifications to Terms">
          We reserve the right to update these Terms at any time. Changes will be posted on this page with
          an updated “Effective Date.” Continued use of our services constitutes acceptance of updated
          terms.
        </Section>

        <Section title="Contact Information">
          If you have any questions regarding these Terms of Service, please contact us at:
          <p className="mt-2">
            <strong>Email:</strong>{" "}
            <a href="mailto:info@xiorent.com" className="text-blue-600 underline">
              info@xiorent.com
            </a>
          </p>
          <p>
            <strong>Address:</strong> 10/10, Hindustan Kolkata, West Bengal, 700127, India
          </p>
        </Section>
      </div>
    </div>
  );
}

/* Reusable Section Component */
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-white-900 mb-2">{title}</h2>
      <div className="text-white-700">{children}</div>
    </div>
  );
}
