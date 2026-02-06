'use client';

import { DraggableWindow } from '@/components/ui/DraggableWindow';
import content from '@/data/content.json';

export default function AboutPage() {
  const { about } = content;
  return (
    <div className="w-full h-full p-4">
        <DraggableWindow title="About The Artist" defaultPosition={{ x: 100, y: 50 }} width={700}>
            <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-5/12 bg-gray-200 p-0 border-r border-gray-300 flex items-center justify-center overflow-hidden relative min-h-[300px] md:min-h-0">
                     <div
                        className="w-full h-full bg-cover bg-center absolute inset-0"
                        style={{ backgroundImage: `url(${about.image})` }}
                     ></div>
                </div>
                <div className="w-full md:w-7/12 p-8 font-serif text-lg leading-relaxed bg-white flex flex-col justify-center">
                    <h1 className="font-bold text-2xl mb-6 font-sans uppercase tracking-widest text-gray-800 border-b-2 border-black pb-2">Semiso</h1>
                    <p>{about.bio}</p>
                </div>
            </div>
        </DraggableWindow>
    </div>
  )
}
