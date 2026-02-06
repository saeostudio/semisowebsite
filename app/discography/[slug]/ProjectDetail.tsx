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
        width={800}
      >
        <div className="flex flex-col gap-0">
            {/* Toolbar */}
            <div className="bg-[#f0f0f0] border-b border-gray-300 p-3 flex gap-2">
                <Link href="/discography">
                    <button className="flex items-center gap-1 text-sm border border-gray-400 bg-white px-3 py-1 rounded shadow-sm active:bg-gray-200 hover:border-gray-500 font-bold">
                        <ArrowLeft size={14} /> Back
                    </button>
                </Link>
            </div>

            <div className="p-8 bg-white flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/3 flex flex-col gap-6">
                     <div className="aspect-square bg-gray-200 border border-gray-400 shadow-2xl flex items-center justify-center relative overflow-hidden">
                         {album.cover ? (
                             <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${album.cover})` }}></div>
                         ) : (
                             <Disc size={80} className="text-gray-400" />
                         )}
                     </div>
                     <div className="flex flex-col gap-3">
                        <Button href={album.streamLink} external className="w-full justify-center py-3">
                            <Play size={14} fill="black" /> Stream
                        </Button>
                        <Button href={album.buyLink} external className="w-full justify-center py-3">
                            <ShoppingCart size={14} /> Buy Physical
                        </Button>
                     </div>
                </div>
                <div className="w-full md:w-2/3 flex flex-col gap-6">
                    <div>
                        <h1 className="text-4xl font-bold tracking-tight mb-1">{album.title}</h1>
                        <span className="text-gray-500 font-mono text-base bg-gray-100 px-2 py-0.5 rounded border border-gray-200">{album.year}</span>
                    </div>

                    <div className="border-t border-gray-200 pt-6">
                        <h3 className="font-bold text-sm mb-3 uppercase tracking-widest text-gray-400">About the project</h3>
                        <p className="text-lg leading-relaxed font-serif text-gray-800">
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
