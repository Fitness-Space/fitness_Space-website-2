import Image from "next/image";
import { ChakraProvider } from "@chakra-ui/react";
import DiscoverSection from "@/components/ui/DiscoverSection";
import DownloadSection from "@/components/ui/DownloadSection";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/ui/HeroSection";
import Navbar from "@/components/ui/Navbar";
import PricingModal from "@/components/ui/PricingModal";
import HealthScore from "@/components/ui/HealthScore";
import SocialProofSection from "@/components/ui/SocialProofSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      {/* <DiscoverSection /> */}
      <DownloadSection />
      <HealthScore />
      <PricingModal />
      <SocialProofSection />
      <Footer />
    </div>
  );
}
