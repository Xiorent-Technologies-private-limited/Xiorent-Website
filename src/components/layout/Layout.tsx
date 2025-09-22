import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import AnimatedBackground from "../ui/AnimatedBackgorund";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative bg-[#050915]">
      {/* Animated Background */}
      {/* <AnimatedBackground /> */}
      
      {/* Header - positioned absolutely over content */}
      <Header />
      
      {/* Content with higher z-index */}
      <div className="relative z-10 flex flex-col">
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
