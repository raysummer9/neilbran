import Image from 'next/image';
import TestimonialCard from '@/components/TestimonialCard';
import CallToAction from '@/components/CallToAction';
import FAQSection from '@/components/FAQSection';

const carouselTestimonials = [
  // Crypto recovery services (3)
  {
    name: 'Sophia Lee',
    title: 'Crypto Investor',
    image: '/images/testimonials/sophia.png',
    quote: 'NeilBrina Hacks recovered my lost crypto after a scam. Their service is fast, professional, and trustworthy.',
    logo: '/images/publications/forbes.png',
  },
  {
    name: 'Carlos Mendes',
    title: 'Entrepreneur',
    image: '/images/testimonials/carlos.png',
    quote: 'I thought my crypto was gone forever, but NeilBrina Hacks brought it back. Highly recommended!',
    logo: '/images/publications/bbc.webp',
  },
  {
    name: 'Emily Zhang',
    title: 'Blockchain Analyst',
    image: '/images/testimonials/emily.png',
    quote: 'Their crypto recovery team is the best in the business. Transparent and effective.',
    logo: '/images/publications/the-block.webp',
  },
  // Password recovery (2)
  {
    name: 'David Kim',
    title: 'Software Engineer',
    image: '/images/testimonials/david.png',
    quote: 'I forgot my wallet password and NeilBrina Hacks recovered it in days. Amazing!',
    logo: '/images/publications/motherboard.webp',
  },
  {
    name: 'Priya Patel',
    title: 'Crypto Enthusiast',
    image: '/images/testimonials/priya.png',
    quote: 'Password recovery was quick and secure. I got my assets back safely.',
    logo: '/images/publications/hype-beast.webp',
  },
  // Wallet address recovery (2)
  {
    name: 'Lucas Brown',
    title: 'Day Trader',
    image: '/images/testimonials/lucas.png',
    quote: 'Lost my wallet address and thought it was over. NeilBrina Hacks found it for me!',
    logo: '/images/publications/forbes.png',
  },
  {
    name: 'Fatima Al-Farsi',
    title: 'Crypto Collector',
    image: '/images/testimonials/fatima.png',
    quote: 'Wallet address recovery was seamless. Thank you for the excellent support!',
    logo: '/images/publications/bbc.webp',
  },
  // Hacked wallet recovery (1)
  {
    name: 'James O’Connor',
    title: 'Business Owner',
    image: '/images/testimonials/james.png',
    quote: 'My wallet was hacked and I lost hope. NeilBrina Hacks recovered my funds and restored my faith.',
    logo: '/images/publications/the-block.webp',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <main className="w-full min-h-screen bg-white flex flex-col items-center py-16 px-4 md:px-0">
        <div className="max-w-3xl w-full mx-auto text-center">
          <a href="/about" className="text-blue-600 font-medium text-base mb-2 inline-block">About Us</a>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">Read our testimonials</h1>
          <Image
            src="/images/publications/currency.png"
            alt="currency.com logo"
            width={220}
            height={60}
            className="mx-auto mb-8"
          />
          <blockquote className="text-2xl md:text-3xl text-gray-400 font-semibold mb-10 leading-snug">
            &quot;Losing the password to your wallet can cost you millions, but options for recovery exist.&quot;
          </blockquote>
          <div className="flex flex-col items-center gap-2">
            <Image
              src="/images/ceo-currency.png"
              alt="William Farrington"
              width={72}
              height={72}
              className="rounded-full mb-2"
            />
            <div className="font-bold text-lg text-gray-900">William Farrington</div>
            <div className="text-gray-500 text-base">Journalist, Currency.com</div>
          </div>
        </div>
      </main>
      {/* New testimonial carousel section */}
      <section className="w-full bg-white pt-4 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-center mb-10">What our clients say</h2>
          <div className="relative overflow-x-hidden">
            <div className="flex gap-8 min-w-[900px] md:min-w-[1200px] animate-carousel-scroll">
              {carouselTestimonials.map((t, i) => (
                <div key={i} className="flex-shrink-0 w-80 h-[370px] flex">
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CallToAction />
      <FAQSection />
    </>
  );
} 