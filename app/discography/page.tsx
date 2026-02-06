'use client';

import { DraggableWindow } from '@/components/ui/DraggableWindow';
import content from '@/data/content.json';
import Link from 'next/link';
import { Disc } from 'lucide-react';

export default function DiscographyPage() {
    return (
        <div className="w-full h-full p-4">
             <DraggableWindow title="Discography" defaultPosition={{ x: 50, y: 50 }} width={800} className="h-[600px]">
                <div className="bg-[#f0f0f0] border-b border-gray-300 px-2 py-1 flex items-center gap-2 mb-0">
                    <span className="text-xs text-gray-500">{content.discography.length} items</span>
                </div>
                <div className="bg-white p-6 min-h-[400px]">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
                        {content.discography.map((album) => (
                            <Link href={`/discography/${album.slug}`} key={album.slug} className="group flex flex-col items-center gap-3">
                                <div className="w-full aspect-square bg-gray-200 border border-gray-400 shadow-lg flex items-center justify-center group-hover:ring-4 ring-blue-200 transition-all relative">
                                     {/* Placeholder cover art logic */}
                                     <div className="absolute inset-0 bg-gradient-to-tr from-gray-300 to-white opacity-20"></div>
                                     <Disc className="text-gray-400 w-1/2 h-1/2" />
                                </div>
                                <div className="text-center w-full">
                                    <span className="font-bold text-sm block truncate w-full group-hover:bg-blue-600 group-hover:text-white rounded px-1">{album.title}</span>
                                    <span className="text-xs text-gray-500">{album.year}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
             </DraggableWindow>
        </div>
    )
}
