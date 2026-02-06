'use client';

import { DraggableWindow } from '@/components/ui/DraggableWindow';
import { Button } from '@/components/Button';
import content from '@/data/content.json';
import { Disc, ShoppingBag } from 'lucide-react';

export default function Home() {
  const { home } = content;

  return (
    <div className="w-full h-full p-4 relative overflow-hidden">

      {/* Desktop Icons */}
      <div className="absolute top-4 right-4 flex flex-col gap-6 items-center">
        <div className="flex flex-col items-center gap-1 group cursor-pointer w-32 text-center">
           <div className="w-20 h-20 bg-white border border-gray-400 shadow-md flex items-center justify-center rounded-sm">
             <Disc size={40} className="text-gray-600" />
           </div>
           <span className="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-sm bg-opacity-0 group-hover:bg-opacity-100 transition-all text-shadow leading-tight">
             SEMISO38, A subsidary of NONVERBAL BITCH
           </span>
        </div>
      </div>

      {/* Stream Window */}
      <DraggableWindow
        title="Music Player"
        defaultPosition={{ x: 100, y: 80 }}
        width={350}
      >
        <div className="flex flex-col items-center gap-4 p-4 bg-[#f8f8f8]">
          <div className="w-full aspect-square bg-gradient-to-br from-gray-200 to-gray-400 border border-gray-500 flex items-center justify-center shadow-inner relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('/covers/the-pear-tree.jpg')] bg-cover bg-center opacity-80"></div>
             {/* Fallback icon if image fails or for decoration */}
             <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                <Disc className="w-32 h-32 text-white animate-spin-slow" />
             </div>
          </div>
          <div className="text-center w-full bg-white border border-gray-300 p-3 shadow-inner">
            <h2 className="font-bold text-base truncate">{home.latestReleaseTitle}</h2>
            <p className="text-sm text-gray-500">Semiso</p>
          </div>

          <div className="w-full flex items-center gap-2">
             <span className="text-xs font-mono">0:00</span>
             <div className="flex-1 bg-gray-300 h-3 rounded-full overflow-hidden border border-gray-400 shadow-inner">
                <div className="bg-gradient-to-b from-blue-400 to-blue-600 h-full w-1/3"></div>
             </div>
             <span className="text-xs font-mono">3:45</span>
          </div>

          <Button href={home.streamLink} external className="w-full justify-center py-3 text-sm">
            Stream New Album
          </Button>
        </div>
      </DraggableWindow>

      {/* Buy Window */}
      <DraggableWindow
        title="Shop"
        defaultPosition={{ x: 600, y: 150 }}
        width={400}
      >
        <div className="flex flex-col gap-6 p-6 bg-white">
           <div className="flex items-center gap-4 border-b border-gray-200 pb-4">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center shadow-lg border-2 border-gray-700">
                 <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div>
                 <h3 className="font-bold text-base">Vinyl LP & CD</h3>
                 <p className="text-sm text-gray-500">In Stock</p>
              </div>
           </div>
           <p className="text-sm leading-relaxed font-serif italic text-gray-600">
             &quot;A maximalist experience that challenges the senses.&quot; <br/>
             Includes limited edition poster and stickers.
           </p>
           <Button href={home.buyLink} external className="justify-center py-3 text-sm">
             <ShoppingBag size={16} /> Buy Physical
           </Button>
        </div>
      </DraggableWindow>
    </div>
  );
}
