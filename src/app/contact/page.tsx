"use client";
import { useState } from 'react';
import { FiShield, FiDatabase, FiEdit } from 'react-icons/fi';
import FAQSection from '@/components/FAQSection';

const features = [
  {
    icon: <FiShield className="text-blue-500 text-3xl" />,
    title: 'Trusted wallet recovery',
    desc: 'The most trusted name in digital asset recovery since 2017.',
  },
  {
    icon: <FiDatabase className="text-blue-500 text-3xl" />,
    title: 'Secure Air-Gapped Storage',
    desc: 'All wallet and password data is encrypted and stored on offline, air-gapped servers.',
  },
  {
    icon: <FiEdit className="text-blue-500 text-3xl" />,
    title: 'Start for Free',
    desc: 
      
'A no-risk guarantee that you won\'t pay us a dime if we can\'t recover your password.',
  },
];

const darkPlaceholder = 'placeholder-gray-600';

function validateEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    country: '',
    email: '',
    phone: '',
    recoveryType: '',
    walletType: '',
    lostAmount: '',
    privacy: false,
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiMessage, setApiMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value, type } = e.target;
    if (type === 'checkbox' && 'checked' in e.target) {
      setForm((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  function validate() {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName.trim()) newErrors.firstName = 'First name is required.';
    if (!form.lastName.trim()) newErrors.lastName = 'Last name is required.';
    if (!form.country.trim()) newErrors.country = 'Country is required.';
    if (!form.email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(form.email)) newErrors.email = 'Enter a valid email.';
    if (!form.recoveryType) newErrors.recoveryType = 'Select a recovery type.';
    if (!form.walletType) newErrors.walletType = 'Select a wallet type.';
    if (!form.lostAmount.trim()) newErrors.lostAmount = 'Total lost amount is required.';
    else if (isNaN(Number(form.lostAmount)) || Number(form.lostAmount) <= 0) newErrors.lostAmount = 'Enter a positive number.';
    if (!form.privacy) newErrors.privacy = 'You must agree to the privacy policy.';
    return newErrors;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    setApiMessage(null);
    if (Object.keys(validationErrors).length === 0) {
      setLoading(true);
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        });
        const data = await res.json();
        if (data.success) {
          setApiMessage({ type: 'success', text: 'Your message has been sent successfully!' });
          setForm({
            firstName: '',
            lastName: '',
            country: '',
            email: '',
            phone: '',
            recoveryType: '',
            walletType: '',
            lostAmount: '',
            privacy: false,
          });
          setSubmitted(false);
        } else {
          setApiMessage({ type: 'error', text: data.error || 'Failed to send your message. Please try again.' });
        }
      } catch (error) {
        setApiMessage({ type: 'error', text: 'Failed to send your message. Please try again.' });
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <main className="w-full min-h-screen bg-white flex flex-col items-center py-16 px-4 md:px-0">
      <div className="max-w-5xl w-full mx-auto">
        <div className="text-center mb-12">
          <span className="text-blue-600 font-semibold text-base md:text-lg mb-2 block">Contact us</span>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Talk to our support team</h1>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Contact us to recover the password or seed phrase to your locked crypto wallet. Our friendly team would love to hear from you.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16">
          {/* Left: Features */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            {features.map((f, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex-shrink-0">{f.icon}</div>
                <div>
                  <div className="font-bold text-lg md:text-xl text-gray-900 mb-1">{f.title}</div>
                  <div className="text-gray-500 text-base md:text-lg">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Right: Contact Form */}
          <form className="flex-1 bg-white rounded-2xl shadow-md p-6 md:p-10 flex flex-col gap-4 max-w-lg mx-auto" onSubmit={handleSubmit} noValidate>
            {apiMessage && (
              <div className={`text-center text-base font-semibold mb-2 ${apiMessage.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>{apiMessage.text}</div>
            )}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">First name</label>
                <input name="firstName" type="text" className={`w-full border ${errors.firstName && submitted ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} placeholder="First name" value={form.firstName} onChange={handleChange} />
                {errors.firstName && submitted && <div className="text-red-500 text-sm mt-1">{errors.firstName}</div>}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Last name</label>
                <input name="lastName" type="text" className={`w-full border ${errors.lastName && submitted ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} placeholder="Last name" value={form.lastName} onChange={handleChange} />
                {errors.lastName && submitted && <div className="text-red-500 text-sm mt-1">{errors.lastName}</div>}
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Country</label>
              <input name="country" type="text" className={`w-full border ${errors.country && submitted ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} placeholder="Country" value={form.country} onChange={handleChange} />
              {errors.country && submitted && <div className="text-red-500 text-sm mt-1">{errors.country}</div>}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Email</label>
                <input name="email" type="email" className={`w-full border ${errors.email && submitted ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} placeholder="your@company.com" value={form.email} onChange={handleChange} />
                {errors.email && submitted && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Phone number</label>
                <input name="phone" type="tel" className={`w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} placeholder="+1 (555) 000-0000" value={form.phone} onChange={handleChange} />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1">Choose your recovery type</label>
              <select name="recoveryType" className={`w-full border ${errors.recoveryType && submitted ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} value={form.recoveryType} onChange={handleChange}>
                <option className="text-gray-600" value="">Select one...</option>
                <option>Password Recovery</option>
                <option>Seed Phrase Recovery</option>
                <option>Wallet Address Recovery</option>
                <option>Scammed/Hacked assets recovery</option>
              </select>
              {errors.recoveryType && submitted && <div className="text-red-500 text-sm mt-1">{errors.recoveryType}</div>}
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Wallet type</label>
                <select name="walletType" className={`w-full border ${errors.walletType && submitted ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} value={form.walletType} onChange={handleChange}>
                  <option className="text-gray-600" value="">Select one...</option>
                  <option>Bitcoin</option>
                  <option>Ethereum</option>
                  <option>Litecoin</option>
                  <option>Dogecoin</option>
                  <option>Other</option>
                </select>
                {errors.walletType && submitted && <div className="text-red-500 text-sm mt-1">{errors.walletType}</div>}
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 font-semibold mb-1">Total lost amount</label>
                <input name="lostAmount" type="number" className={`w-full border ${errors.lostAmount && submitted ? 'border-red-500' : 'border-gray-200'} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 ${darkPlaceholder}`} placeholder="Wallet Value/Total scammed Value" value={form.lostAmount} onChange={handleChange} />
                {errors.lostAmount && submitted && <div className="text-red-500 text-sm mt-1">{errors.lostAmount}</div>}
              </div>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <input name="privacy" type="checkbox" id="privacy" className={`rounded border-gray-300 focus:ring-blue-400 ${errors.privacy && submitted ? 'border-red-500' : ''}`} checked={form.privacy} onChange={handleChange} />
              <label htmlFor="privacy" className="text-gray-600 text-sm">You agree to our friendly <a href="#" className="underline">privacy policy</a>.</label>
            </div>
            {errors.privacy && submitted && <div className="text-red-500 text-sm mt-1">{errors.privacy}</div>}
            <button type="submit" className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg px-6 py-3 text-lg transition" disabled={loading}>{loading ? 'Sending...' : 'Send message'}</button>
          </form>
        </div>
      </div>
      <FAQSection />
    </main>
  );
} 