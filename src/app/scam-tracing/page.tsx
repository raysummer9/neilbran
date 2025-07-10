import Image from 'next/image';
import CallToAction from '@/components/CallToAction';
import FAQSection from '@/components/FAQSection';

export default function ScamTracingPage() {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center py-16 px-4 md:px-0">
      <section className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Left: Larger Image, no background */}
        <div className="flex-1 flex items-center justify-center w-full min-w-[280px] max-w-lg mx-auto md:mx-0">
          <Image
            src="/images/scam-tracking.png"
            alt="Police officer for scam tracking"
            width={440}
            height={540}
            className="object-contain w-full h-auto max-w-md md:max-w-lg lg:max-w-xl"
            priority
          />
        </div>
        {/* Right: Text Content */}
        <div className="flex-1 max-w-xl mx-auto md:mx-0">
          <span className="text-blue-600 font-semibold text-base md:text-lg mb-2 block">Our mission</span>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Combatting sophisticated scammers</h1>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            <span className="font-bold text-gray-900">Ransomware and crypto scams are becoming more common</span>, and bad actors are using innovative techniques to obfuscate their trail and to hide from law enforcement. The ever increasing sophistication of scammers is a challenge for local law enforcement who don&apos;t have the training of funding to properly investigate crimes on the blockchain.
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-4">
            <span className="font-bold text-gray-900">Law enforcement are likely to never pursue the case</span> without a clear understanding of what took place and a real-world-entity to pursue.
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            <span className="font-bold text-gray-900">Tracing the scammer</span> can be done by our team of investigators who will work to link the scammer with a real-world-entity and formulate reports and help with recovery.
          </p>
        </div>
      </section>
      <CallToAction />
      <FAQSection />
    </main>
  );
} 