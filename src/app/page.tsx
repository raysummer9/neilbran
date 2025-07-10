import HeroSection from "@/components/HeroSection";
import WhyLoveCarSection from "@/components/WhyLoveCarSection";
import SupportSection from "@/components/SupportSection";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />
      <WhyLoveCarSection />
      <SupportSection />
      <FAQSection />
    </main>
  );
}
