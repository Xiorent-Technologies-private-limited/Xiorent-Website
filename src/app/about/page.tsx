import AboutTabs from "@/components/About/AboutTabs";
import HeroSection from "@/components/Common/HeroSection";
import Faq from "@/components/layout/Faq";
// import Questions from "@/components/Common/Questions";
import ProjectForm from "@/components/our-creations/ProjectForm";

export default function About() {
    return (
        <div>
            <HeroSection />
            <AboutTabs />
            <ProjectForm/>
            {/* <Questions/> */}
            <Faq/>
        </div>
    );
}
