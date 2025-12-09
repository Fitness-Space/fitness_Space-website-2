import Image from "next/image";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import PricingModal from "@/components/ui/PricingModal";
import SocialProofSection from "@/components/ui/SocialProofSection";
import LandingSection from "@/components/ui/LandingSection";
import FitnessIntro from "@/components/ui/FitnessIntro";
import SuccessScoreSection from "@/components/ui/SuccessScoreSection";
import FitnessTransformations from "@/components/ui/FitnessTransformations";
import PricingSection from "@/components/ui/PricingSection";
import CoachesSection from "@/components/ui/CoachesSection";
import ArticlesSection from "@/components/ui/ArticlesSection";
import AppDownloadBanner from "@/components/ui/DownloadAppSection";
import DownloadAppSection from "@/components/ui/DownloadAppSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <LandingSection />
      <FitnessIntro />
      <SuccessScoreSection />
      <FitnessTransformations />
      <PricingSection />
      <CoachesSection />
      <ArticlesSection />
      <DownloadAppSection />
      <Footer />
    </div>
  );
}
