import BusinessEthics from "@/components/AboutEthics/BusinessEthics";
import HeroSection from "@/components/Common/HeroSection";
import CreateTogether from "@/components/layout/CreateTogether";
import Faq from "@/components/layout/Faq";

export default function About() {
    return (
        <div>
            <HeroSection />
            <BusinessEthics />
            <CreateTogether />
            <Faq />
        </div>
    );
}