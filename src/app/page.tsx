import HeroSection from "@/components/HeroSection";
import WhyLoveCarSection from "@/components/WhyLoveCarSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col">
      <HeroSection />
      <WhyLoveCarSection />
    </main>
  );
}
