import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PrivacySection from "@/components/PrivacySection";
import FeatureSection from "@/components/FeatureSection";
import EventSection from "@/components/EventSection";
import RegisterForm from "@/components/RegisterForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-background flex flex-col relative">
            <Navbar />
            <Hero />
            <PrivacySection />
            <EventSection />
            <FeatureSection />
            <RegisterForm />
            <Footer />
        </main>
    );
}
