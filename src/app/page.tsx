import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PrivacySection from "@/components/PrivacySection";
import AppShowcase from "@/components/AppShowcase";
import FeatureSection from "@/components/FeatureSection";
import EventSection from "@/components/EventSection";
import PricingSection from "@/components/PricingSection";
import CommunitySection from "@/components/CommunitySection";
import TrustSection from "@/components/TrustSection";
import AiMatchingSection from "@/components/AiMatchingSection";
import ContactSection from "@/components/ContactSection";
import Fab from "@/components/Fab";

import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col relative bg-transparent">
            <Navbar />
            <Hero />
            <PrivacySection />
            {/* <AppShowcase /> */}
            {/* <EventSection /> */}
            <FeatureSection />
            <CommunitySection />
            <TrustSection />
            <AiMatchingSection />
            {/* <PricingSection /> */}
            <ContactSection />
            <Footer />
            <Fab />
        </main>
    );
}
