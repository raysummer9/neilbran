import { FaUserCircle } from 'react-icons/fa';

interface TestimonialCardProps {
  name: string;
  title: string;
  quote: string;
}

export default function TestimonialCard({ name, title, quote }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center max-w-xl mx-auto">
      <blockquote className="text-xl md:text-2xl text-gray-500 font-medium mb-6">{quote}</blockquote>
      <FaUserCircle className="text-gray-300 mb-2" size={64} />
      <div className="font-bold text-lg text-gray-900">{name}</div>
      <div className="text-gray-500 text-base">{title}</div>
    </div>
  );
} 