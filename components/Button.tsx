import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  external?: boolean;
}

export function Button({ className, href, external, children, ...props }: ButtonProps) {
  const styles = cn(
    "glossy-button px-4 py-2 rounded-full text-black text-xs font-bold active:scale-95 transition-transform flex items-center justify-center gap-2 uppercase tracking-wide min-w-[120px]",
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}
