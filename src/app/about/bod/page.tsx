import CompanyDirector from "@/components/About/CompanyDirector";
import HeroSection from "@/components/Common/HeroSection";
import Anindya from "@/components/About/Anindya";
import CreateTogether from "@/components/layout/CreateTogether";
import Faq from "@/components/layout/Faq";

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