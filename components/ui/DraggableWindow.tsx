'use client';

import React, { ReactNode, useRef, useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import { cn } from '@/lib/utils';

interface DraggableWindowProps {
  title: string;
  children: ReactNode;
  defaultPosition?: { x: number; y: number };
  className?: string;
  width?: string | number;
}

export function DraggableWindow({ title, children, defaultPosition = { x: 0, y: 0 }, className, width = 400 }: DraggableWindowProps) {
  const nodeRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a static version or null to avoid hydration mismatch
    // But better to render it at default position to avoid layout shift, but Draggable needs DOM
    // For simplicity, we can just render the static div without Draggable wrapper during SSR?
    // Actually, Draggable is client-only mostly. Let's just return null or a skeleton if strict.
    // Or we render it statically.
    return (
        <div
        className={cn(
          "absolute flex flex-col bg-[#e8e8e8] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] z-10",
          className
        )}
        style={{ width, left: defaultPosition.x, top: defaultPosition.y }}
      >
        <div className="flex items-center justify-between px-2 py-1 bg-gradient-to-b from-[#f0f0f0] to-[#c0c0c0] border-b border-[#808080] h-8">
           <div className="flex gap-1.5">
             <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
             <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
             <div className="w-3 h-3 rounded-full bg-[#28c93f] border border-[#1aab29]"></div>
          </div>
          <span className="font-bold text-xs text-[#404040] drop-shadow-sm flex-1 text-center pr-12 truncate">{title}</span>
        </div>
        <div className="p-0 bg-white overflow-auto max-h-[80vh]">
          {children}
        </div>
      </div>
    )
  }

  return (
    <Draggable handle=".handle" defaultPosition={defaultPosition} nodeRef={nodeRef}>
      <div
        ref={nodeRef}
        className={cn(
          "absolute flex flex-col bg-[#e8e8e8] border-t-2 border-l-2 border-white border-b-2 border-r-2 border-[#808080] shadow-[4px_4px_0px_rgba(0,0,0,0.2)] z-10",
          className
        )}
        style={{ width }}
      >
        {/* Title Bar */}
        <div className="handle flex items-center justify-between px-2 py-1 bg-gradient-to-b from-[#f0f0f0] to-[#c0c0c0] border-b border-[#808080] cursor-grab active:cursor-grabbing select-none h-8">
          <div className="flex gap-1.5">
             <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-[#e0443e]"></div>
             <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-[#dea123]"></div>
             <div className="w-3 h-3 rounded-full bg-[#28c93f] border border-[#1aab29]"></div>
          </div>
          <span className="font-bold text-xs text-[#404040] drop-shadow-sm flex-1 text-center pr-12 truncate uppercase tracking-widest">{title}</span>
        </div>

        {/* Content */}
        <div className="p-0 bg-white overflow-auto max-h-[80vh]">
          {children}
        </div>
      </div>
    </Draggable>
  );
}
