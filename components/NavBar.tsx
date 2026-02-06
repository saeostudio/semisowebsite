import Link from 'next/link';
import Image from 'next/image';

export function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 h-8 bg-[#dddddd] border-b border-[#808080] flex items-center px-4 shadow-sm z-50 select-none">
      <div className="flex items-center gap-6">
        <Link href="/" className="flex items-center gap-1.5 text-black hover:opacity-80 transition-opacity">
           <div className="relative w-6 h-6">
              <Image
                src="/assets/logo.png"
                alt="SEMISO Logo"
                fill
                className="object-contain"
                priority
              />
           </div>
        </Link>
        <Link href="/about" className="font-bold text-xs flex items-center gap-1 text-black hover:bg-blue-600 hover:text-white px-2 py-0.5 rounded-sm transition-colors uppercase tracking-wide">
           About
        </Link>
        <Link href="/discography" className="font-bold text-xs flex items-center gap-1 text-black hover:bg-blue-600 hover:text-white px-2 py-0.5 rounded-sm transition-colors uppercase tracking-wide">
           Discography
        </Link>
        <Link href="/tour" className="font-bold text-xs flex items-center gap-1 text-black hover:bg-blue-600 hover:text-white px-2 py-0.5 rounded-sm transition-colors uppercase tracking-wide">
           Tour Dates
        </Link>
      </div>
      <div className="ml-auto text-xs font-mono text-gray-600 font-bold">
        SEMISO OS v2.0
      </div>
    </nav>
  );
}
