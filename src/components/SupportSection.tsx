import TransitionSlideUp from "@/components/TransitionSlideUp";
import { FiLock, FiKey, FiAlertCircle } from "react-icons/fi";
import { FaWallet } from "react-icons/fa";

const supportItems = [
  {
    icon: FiLock,
    title: "Password doesn't work",
    desc: "You thought you knew your password, but now it won't unlock your wallet. Perhaps it involves different numbers or different capitalization than you remember.",
    action: "Recover my password",
    href: "#",
  },
  {
    icon: FiKey,
    title: "Partial seed phrase recovery",
    desc: "You wrote down a list of words, and the passphrase is some combination of those words.",
    action: "Recover my seed",
    href: "#",
  },
  {
    icon: FaWallet,
    title: "Lost access to a major chain wallet",
    desc: "You have lost access to a common crypto asset, such as Bitcoin, Ethereum, Litecoin, Dogecoin, an NFT or dozens of other alt coins",
    action: "Recover my wallet",
    href: "#",
  },
  {
    icon: FiAlertCircle,
    title: "You've been scammed",
    desc: "We offer a Tracing service and recovery service for those looking to build their case and hopefully uncover the real-world identity of their scammer.",
    action: "Recover my funds",
    href: "#",
  },
];

export default function SupportSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-0">
      <TransitionSlideUp>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm md:text-base">Support</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">When we can help.</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            While not every lost or scammedwallet is recoverable, many of the most common issues are recoverable.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {supportItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex flex-col items-center text-center px-4 py-8 rounded-xl">
                <div className="mb-4 flex items-center justify-center">
                  <span className="inline-flex items-center justify-center rounded-full bg-blue-50 h-16 w-16">
                    <Icon size={40} className="text-blue-500" />
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm md:text-base mb-4">{item.desc}</p>
                <a href={item.href} className="text-blue-600 font-semibold text-sm md:text-base inline-flex items-center gap-1 hover:underline">
                  {item.action} <span aria-hidden>→</span>
                </a>
              </div>
            );
          })}
        </div>
      </TransitionSlideUp>
    </section>
  );
} 