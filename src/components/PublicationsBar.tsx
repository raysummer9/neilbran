import Image from "next/image";

const publications = [
  { src: "/images/publications/the-block.webp", alt: "The Block" },
  { src: "/images/publications/hype-beast.webp", alt: "Hypebeast" },
  { src: "/images/publications/motherboard.webp", alt: "Motherboard by Vice" },
  { src: "/images/publications/bbc.webp", alt: "BBC" },
  { src: "/images/publications/forbes.png", alt: "Forbes" },
];

export default function PublicationsBar() {
  return (
    <section className="w-full py-8 bg-white flex flex-col items-center">
      <span className="text-gray-500 text-base md:text-lg mb-6 font-poppins">Trusted by 100+ publications...</span>
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 w-full max-w-5xl">
        {publications.map((pub) => (
          <div key={pub.alt} className="flex items-center justify-center h-12">
            <Image src={pub.src} alt={pub.alt} height={22} width={70} className="object-contain h-12 w-auto" />
          </div>
        ))}
      </div>
    </section>
  );
} 