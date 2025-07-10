"use client";
import Image from "next/image";
import TransitionSlideUp from "@/components/TransitionSlideUp";

const publications = [
  { src: "/images/publications/the-block.webp", alt: "The Block" },
  { src: "/images/publications/hype-beast.webp", alt: "Hypebeast" },
  { src: "/images/publications/motherboard.webp", alt: "Motherboard by Vice" },
  { src: "/images/publications/bbc.webp", alt: "BBC" },
  { src: "/images/publications/forbes.png", alt: "Forbes" },
  // Removed Currency.com
];

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center">
      <TransitionSlideUp>
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center justify-center gap-8 md:gap-0 pb-0 md:pb-4">
          {/* Left: Text Content */}
          <div className="flex-1 flex flex-col items-start justify-center max-w-xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight">
              Easy, Transparent <br /> Wallet Recovery
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              The simplest way to recover your lost wallet password and investigate scammed crypto.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-900 font-medium hover:bg-gray-100 transition">Testimonials</button>
              <button className="px-6 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition">Contact an expert</button>
            </div>
          </div>
          {/* Right: Image */}
          <div className="flex-1 flex items-center justify-center min-w-[320px]">
            <Image
              src="/images/hero-people.webp"
              alt="Two people working together"
              width={540}
              height={540}
              className="object-cover"
            />
          </div>
        </div>
      </TransitionSlideUp>
      <div className="w-full flex flex-col items-center mt-16 md:mt-12">
        <span className="text-gray-500 text-base md:text-lg mb-6 font-poppins">Trusted by 100+ publications...</span>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 w-full max-w-5xl">
          {publications.map((pub) => (
            <div key={pub.alt} className="flex items-center justify-center h-4 md:h-8">
              <Image
                src={pub.src}
                alt={pub.alt}
                width={56}
                height={16}
                className="object-contain h-4 w-auto md:h-8 md:w-auto md:min-w-[70px] md:min-h-[22px]"
                sizes="(min-width: 768px) 70px, 56px"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 