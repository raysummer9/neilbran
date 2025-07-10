"use client";
import Image from "next/image";
import TransitionSlideUp from "@/components/TransitionSlideUp";

export default function WhyLoveCarSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-12 md:py-20 px-4 md:px-0">
      <TransitionSlideUp>
        <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* Text and Features */}
          <div className="flex-1 flex flex-col items-start">
            <span className="text-blue-600 font-semibold mb-1 text-sm md:text-base">About Us</span>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8">Why You&apos;ll Love NeilBrina</h2>
            <div className="space-y-8 w-full">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">We&apos;ll Upload your locked wallet and guesses</h3>
                <p className="text-gray-600 text-sm md:text-base">Our machine learning dashboard allows us to upload data whenever you&apos;d like to improve our odds of recovery. All data is encrypted in transit and at rest.</p>
              </div>
              <div className="border-l-4 border-transparent pl-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Your wallet secured by an air-gap</h3>
                <p className="text-gray-600 text-sm md:text-base">To ensure data integrity, your encrypted wallet backup is moved, off-line to one of our state of the art air-gaped servers.</p>
              </div>
              <div className="border-l-4 border-transparent pl-4">
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">Your Stolen Crypto recovered</h3>
                <p className="text-gray-600 text-sm md:text-base">Our state of the art attack strategies for brute forcing recovery have achieved roughly a 75% success rate.</p>
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="flex-1 flex items-center justify-center w-full">
            <Image
              src="/images/recovery-machine.png"
              alt="Recovery Machine Screenshot"
              width={640}
              height={450}
              className="w-full max-w-xl h-auto object-contain drop-shadow-xl"
              priority
            />
          </div>
        </div>
      </TransitionSlideUp>
    </section>
  );
} 