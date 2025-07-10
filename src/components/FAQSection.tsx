"use client";
import { useState } from "react";
import { FiPlus } from "react-icons/fi";
import TransitionSlideUp from "@/components/TransitionSlideUp";

const faqs = [
  {
    q: "How does it work?",
    a: "The techniques we use to recover our clients’ accounts vary widely from case to case. In the event of a password recovery we will walk our clients through extracting an encrypted private key backup and building a comprehensive list of possible password guesses. We then transfer our client’s data to secure password cracking servers that use the data collected from the client to try billions or trillions of possible password combinations until the correct password is found.",
  },
  {
    q: "Can I trust you?",
    a: "We understand the issue of trust and authority is one that must be addressed before our clients feel comfortable sharing sensitive financial information with us. Our founder, Neil Brina has been publicly featured on top repuable news and blog agencies. Furthermore, we are a registered LLC in good standing in the state of New Hampshire with a public business address.",
  },
  {
    q: "Can you recover scammed or stolen assets?",
    a: "Yes we can. Scam tracing is for anyone who has been scammed and wishes to explore every option possible for recovery. Our investigations specialists will create a case detailing and visualizing the path your funds took and any connections we are able to make to real-world entities and help recover them. Once we have that information on hand we will work with law agencies to complete recovery process",
  },
  {
    q: "How much do you charge?",
    a: "We work on a service based fee of 20% of any funds recovered. This means that if your account ends up being empty, there is no charge to you.",
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full bg-white flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-0">
      <TransitionSlideUp>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <span className="text-blue-600 font-semibold text-sm md:text-base">FAQs</span>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 mb-4">Frequently asked questions</h2>
          <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto">
            Everything you need to know about the product, recovery processes and billing.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-y-4 w-full max-w-3xl mx-auto">
          {faqs.map((item, i) => (
            <div key={item.q} className="flex flex-col border-b border-gray-100 py-5 px-2">
              <button
                className="flex items-center justify-between w-full focus:outline-none"
                onClick={() => handleToggle(i)}
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="text-gray-900 text-base md:text-lg font-medium text-left">{item.q}</span>
                <FiPlus
                  className={`text-gray-400 text-2xl shrink-0 ml-4 transition-transform duration-200 ${openIndex === i ? "rotate-45" : "rotate-0"}`}
                />
              </button>
              {item.a && openIndex === i && (
                <p
                  id={`faq-answer-${i}`}
                  className="text-gray-600 text-sm md:text-base mt-3 text-left"
                >
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </TransitionSlideUp>
    </section>
  );
} 