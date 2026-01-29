"use client";
import { Star, Trash, Clock, Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
export function BinderCard() {
    const router = useRouter();

    return (
        <div className="group cursor-pointer active:scale-99 flex flex-col bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 w-64 shrink-0 overflow-hidden border border-gray-100" onClick={() => router.push("/binder")}>
            <div className="relative h-52 overflow-hidden">
                <Image 
                    src="/images/default.png" 
                    alt="Binder Card" 
                    fill
                    className="object-cover brightness-90 group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent z-1" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h1 className="text-2xl font-bold text-white drop-shadow-lg">Binder Name</h1>
                </div>
            </div>
            
            <div className="flex flex-col p-5 gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1 text-xs text-gray-500 bg-gray-50 px-2.5 py-1.5 rounded-md">
                            <Clock className="h-3.5 w-3.5" />
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-yellow-50 rounded-lg transition-colors group/star">
                            <Star className="h-4.5 w-4.5 text-gray-400 group-hover/star:text-yellow-500 group-hover/star:fill-yellow-500 transition-all" />
                        </button>
                        <button className="p-2 hover:bg-red-50 rounded-lg transition-colors group/trash">
                            <Trash className="h-4.5 w-4.5 text-gray-400 group-hover/trash:text-red-500 transition-colors" />
                        </button>
                    </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar className="h-3.5 w-3.5" />
                    <span>Created Jan 20, 2026</span>
                </div>
            </div>
        </div>
    )
}