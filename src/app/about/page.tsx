import CallToAction from '@/components/CallToAction';
import TransitionSlideUp from '@/components/TransitionSlideUp';

export default function AboutPage() {
  return (
    <>
      <main className="w-full min-h-screen bg-white py-16 px-4 md:px-0">
        <TransitionSlideUp>
          <div className="max-w-4xl w-full mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 text-center">About Us</h1>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 text-center">Making Sure Your Crypto is Always Yours</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 text-justify">
              At Neil Brina Hacks, we understand the importance of keeping your cryptocurrency safe and secure. That&apos;s why we&apos;re dedicated to recovering scammed assets and the passwords to your forgotten wallets, ensuring that your digital assets remain in your possession.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6 text-justify">
              Picture this: you&apos;ve got a digital fortune locked away in a crypto wallet, but the password is nowhere to be found. It&apos;s like a treasure chest with a missing key – frustrating, right? But don&apos;t lose hope just yet. Our team of experts use cutting-edge, air-gapped servers to crack the code and give you back control of your assets.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-10 text-justify">
              Don&apos;t let a forgotten password keep you from your digital riches. Trust us to be your crypto sheriffs, on a mission to recover your lost assets.
            </p>
            <h2 className="text-xl md:text-2xl font-semibold text-blue-600 mb-4 text-center">About Our Founder</h2>
            <p className="text-gray-700 text-base md:text-lg mb-6 text-justify">
              NeilBrina Hacks was created to empower cryptocurrency owners to keep their assets safe. The company was founded in 2017 by Niel Brina, a seasoned professional with a background in technology and a wealth of experience in the industry. He was previously the VP of Technology at Carescout and a programmer at Fidelity Investments.
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-10 text-justify">
              We are leading the way in the crypto asset recovery space, helping to bring large-scale adoption of cryptocurrency to the world. Today, we&apos;re proud to be at the forefront of this exciting and rapidly-evolving industry. Don&apos;t let a scammer or forgotten password keep you from your digital riches. Trust us to be your crypto sheriffs, on a mission to recover your lost assets.
            </p>
          </div>
        </TransitionSlideUp>
      </main>
      <CallToAction />
    </>
  );
} 