import CompanyDirector from "@/components/About/CompanyDirector";
import HeroSection from "@/components/Common/HeroSection";
import LetsConnect from "@/components/Common/LetsConnect";
import Questions from "@/components/Common/Questions";
import CreateTogether from "@/components/layout/CreateTogether";
import Faq from "@/components/layout/Faq";
import  Anindya from "@/components/About/Anindya"

export default function About() {
    return (
        <div>
            <HeroSection />
            <CompanyDirector />
                        <Anindya />
            <CreateTogether />
            <Faq />
            
        </div>
    );
}