import Link from 'next/link';
import { Apple } from 'lucide-react';

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-8 bg-[#dddddd] border-b border-[#808080] flex items-center px-4 shadow-sm z-50 select-none">
      <div className="flex items-center gap-6">
        <Link href="/" className="font-bold text-sm flex items-center gap-1 text-black hover:text-blue-600">
           <Apple size={16} fill="black" />
        </Link>
        <Link href="/about" className="font-bold text-xs flex items-center gap-1 text-black hover:bg-blue-600 hover:text-white px-2 py-0.5 rounded-sm transition-colors">
           About Me
        </Link>
        <Link href="/discography" className="font-bold text-xs flex items-center gap-1 text-black hover:bg-blue-600 hover:text-white px-2 py-0.5 rounded-sm transition-colors">
           Discography
        </Link>
        <Link href="/tour" className="font-bold text-xs flex items-center gap-1 text-black hover:bg-blue-600 hover:text-white px-2 py-0.5 rounded-sm transition-colors">
           Tour Dates
        </Link>
      </div>
      <div className="ml-auto text-xs font-mono text-gray-600">
        Artist OS v1.0
      </div>
    </nav>
  );
}
