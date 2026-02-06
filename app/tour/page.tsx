'use client';
import { DraggableWindow } from '@/components/ui/DraggableWindow';
import content from '@/data/content.json';

export default function TourPage() {
    return (
        <div className="w-full h-full p-4">
             <DraggableWindow title="Upcoming Shows" defaultPosition={{ x: 300, y: 100 }} width={600}>
                <div className="bg-white min-h-[300px]">
                    <table className="w-full text-sm text-left">
                        <thead className="bg-[#e8e8e8] border-b border-gray-400 font-bold text-gray-600 text-xs shadow-sm">
                            <tr>
                                <th className="p-2 border-r border-gray-300 w-24">Date</th>
                                <th className="p-2 border-r border-gray-300">Venue</th>
                                <th className="p-2 border-r border-gray-300">City</th>
                                <th className="p-2 text-center w-20">Action</th>
                            </tr>
                        </thead>
                        <tbody className="font-mono text-xs">
                             {content.tour.map((date, i) => (
                                 <tr key={i} className="hover:bg-[#3b82f6] hover:text-white group even:bg-[#f2f2f2]">
                                     <td className="p-2 border-r border-gray-200 border-b">{date.date}</td>
                                     <td className="p-2 border-r border-gray-200 border-b">{date.venue}</td>
                                     <td className="p-2 border-r border-gray-200 border-b">{date.city}</td>
                                     <td className="p-2 text-center border-b">
                                         <a href={date.ticketLink} target="_blank" rel="noreferrer" className="text-blue-600 group-hover:text-white hover:underline uppercase font-bold bg-white px-2 py-0.5 rounded border border-blue-200 group-hover:border-transparent text-[10px]">
                                            Get Tix
                                         </a>
                                     </td>
                                 </tr>
                             ))}
                        </tbody>
                    </table>
                    {content.tour.length === 0 && (
                        <div className="p-8 text-center text-gray-400 font-mono">No upcoming dates.</div>
                    )}
                </div>
             </DraggableWindow>
        </div>
    )
}
