import Link from 'next/link';
import TransitionSlideUp from './TransitionSlideUp';

export default function CallToAction() {
  return (
    <section className="w-full flex justify-center py-16 bg-white px-4 md:px-0">
      <TransitionSlideUp>
        <div className="bg-blue-600 max-w-screen-2xl w-full mx-auto px-4 md:px-8 rounded-[48px]">
          <div className="max-w-4xl mx-auto text-center py-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Recover Your Crypto?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't let a forgotten password or scammer keep you from your digital assets. 
              Our expert team is here to help you reclaim what's yours.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-2xl px-8 py-4 text-lg shadow-lg transition duration-300 transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </TransitionSlideUp>
    </section>
  );
} 