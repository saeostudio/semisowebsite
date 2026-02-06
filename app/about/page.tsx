'use client';

import { DraggableWindow } from '@/components/ui/DraggableWindow';
import content from '@/data/content.json';
import { User } from 'lucide-react';

export default function AboutPage() {
  const { about } = content;
  return (
    <div className="w-full h-full p-4">
        <DraggableWindow title="About The Artist" defaultPosition={{ x: 150, y: 100 }} width={500}>
            <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3 bg-gray-100 p-4 border-r border-gray-300 flex items-center justify-center">
                     {/* Placeholder for artist image if we had one */}
                     <div className="w-24 h-24 bg-gray-300 border border-gray-400 flex items-center justify-center">
                        <User size={40} className="text-gray-500" />
                     </div>
                </div>
                <div className="w-full md:w-2/3 p-6 font-serif text-base leading-relaxed bg-white">
                    <h1 className="font-bold text-xl mb-4 font-sans">Biography</h1>
                    <p>{about.bio}</p>
                </div>
            </div>
        </DraggableWindow>
    </div>
  )
}
