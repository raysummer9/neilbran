import { FiKey } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 pt-12 pb-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 min-w-0">
        {/* Left: Logo only */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 mb-8 md:mb-0 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <span className="text-3xl font-extrabold">
              <span className="text-blue-600">N</span><span className="text-yellow-400">B</span>
            </span>
            <div className="flex flex-col leading-tight min-w-0">
              <span className="font-bold text-xl text-gray-900">NeilBran Hacks</span>
              <span className="text-xs text-gray-500 font-medium -mt-1">Crypto Asset Recovery</span>
            </div>
          </div>
        </div>
        {/* Center: Nav Links */}
        <nav className="flex flex-wrap justify-center gap-6 md:gap-10 mb-8 md:mb-0 min-w-0">
          <a href="#" className="text-gray-400 font-semibold hover:text-blue-600 transition">About Us</a>
          <a href="#" className="text-gray-400 font-semibold hover:text-blue-600 transition">Testimonials</a>
          <a href="#" className="text-gray-400 font-semibold hover:text-blue-600 transition">Legal</a>
        </nav>
        {/* Right: Subscribe Form */}
        <form className="flex flex-col items-center md:items-end gap-2 w-full md:max-w-xs min-w-0 px-2 md:px-0">
          <div className="flex w-full min-w-0">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 min-w-0 rounded-l-lg border border-blue-400 border-r-0 px-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <span className="flex items-center px-2 bg-white border-t border-b border-blue-400">
              <FiKey className="text-blue-500 text-lg" />
            </span>
            <button
              type="submit"
              className="rounded-r-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 transition border border-blue-600"
            >
              Subscribe
            </button>
          </div>
          <span className="text-xs text-gray-400 mt-1">
            We care about your data in our <a href="#" className="underline">privacy policy</a>.
          </span>
        </form>
      </div>
      {/* Bottom: Copyright and Terms/Privacy */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between mt-10 text-xs text-gray-400 gap-2 min-w-0">
        <span>© 2025 neilbrinahacks.it.com, LLC. All rights reserved.</span>
        <div className="flex gap-4 min-w-0">
          <a href="#" className="hover:underline">Terms</a>
          <a href="#" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
} 