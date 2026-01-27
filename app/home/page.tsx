"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar, ReusableSection, ScrollSection } from "@/components";
import { FolderPlus, FolderOpen, FolderClock, FolderHeart } from "lucide-react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!session) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <p className="text-4xl font-semibold">Welcome back, <span className="font-serif italic font-medium">{session.user?.name?.split(" ")[0]}!</span></p>
        </div>
        <div className="flex flex-col items-center justify-center mt-2">
          <p className="text-xl">What would you like to do today?</p>
        </div>
        <div className="flex flex-row gap-4 items-center justify-center mt-4">
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 active:outline-none cursor-pointer active:scale-99">
            <FolderPlus className="h-5 w-5" />
            Create Binder
          </button>
          <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 active:outline-none cursor-pointer active:scale-99">
            <FolderOpen className="h-5 w-5" />
            Go To Binder   
          </button>
        </div>
        <div className="flex flex-col pt-16 gap-8">
        <ReusableSection title="Recently Opened" icon={FolderClock}>
          <ScrollSection />
        </ReusableSection>
        <ReusableSection title="favorites" icon={FolderHeart}>
          <ScrollSection />
        </ReusableSection>
        </div>
      </main>
    </div>
  );
}
