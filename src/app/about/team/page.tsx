
import HeroSection from "@/components/Common/HeroSection";
import ManagementTeam from "@/components/AboutTeam/ManagementTeam";
import LeadingTeam from "@/components/AboutTeam/LeadingTeam";
import CreateTogether from "@/components/layout/CreateTogether";
import Faq from "@/components/layout/Faq";

export default function About() {
    return (
        <div>
            <HeroSection />
            <ManagementTeam />
            <LeadingTeam />
            <CreateTogether />
            <Faq />
        </div>
    );
}