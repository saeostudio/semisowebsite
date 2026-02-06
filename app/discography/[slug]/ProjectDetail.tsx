'use client';

import { DraggableWindow } from '@/components/ui/DraggableWindow';
import { Button } from '@/components/Button';
import { Disc, Play, ShoppingCart, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Album } from '@/lib/data';

export function ProjectDetail({ album }: { album: Album }) {
  return (
    <div className="w-full h-full p-4">
      <DraggableWindow
        title={`Project Info: ${album.title}`}
        defaultPosition={{ x: 100, y: 50 }}
        width={600}
      >
        <div className="flex flex-col gap-0">
            {/* Toolbar */}
            <div className="bg-[#f0f0f0] border-b border-gray-300 p-2 flex gap-2">
                <Link href="/discography">
                    <button className="flex items-center gap-1 text-xs border border-gray-400 bg-white px-2 py-1 rounded shadow-sm active:bg-gray-200">
                        <ArrowLeft size={12} /> Back
                    </button>
                </Link>
            </div>

            <div className="p-6 bg-white flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 flex flex-col gap-4">
                     <div className="aspect-square bg-gray-200 border border-gray-400 shadow-lg flex items-center justify-center relative">
                         <Disc size={64} className="text-gray-400" />
                         {/* Image would go here */}
                     </div>
                     <div className="flex flex-col gap-2">
                        <Button href={album.streamLink} external className="w-full justify-center">
                            <Play size={12} fill="black" /> Stream
                        </Button>
                        <Button href={album.buyLink} external className="w-full justify-center">
                            <ShoppingCart size={12} /> Buy Physical
                        </Button>
                     </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-4">
                    <div>
                        <h1 className="text-2xl font-bold">{album.title}</h1>
                        <span className="text-gray-500 font-mono text-sm">{album.year}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-4">
                        <h3 className="font-bold text-sm mb-2 uppercase tracking-wide text-gray-400">About the project</h3>
                        <p className="text-sm leading-relaxed font-serif">
                            {album.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </DraggableWindow>
    </div>
  );
}
