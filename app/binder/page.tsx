"use client";

import {
  FolderOpen,
  Plus,
  ChevronLeft,
  ChevronRight,
  Settings,
  Trash,
  MoveLeft,
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BinderPage() {
  const [sections] = useState([
    { id: "1", title: "Introduction", pageCount: 5 },
    { id: "2", title: "Chapter 1", pageCount: 12 },
    { id: "3", title: "Chapter 2", pageCount: 8 },
    { id: "4", title: "Notes", pageCount: 3 },
  ]);

  const router = useRouter();
  const [activeSection, setActiveSection] = useState("1");
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleBack = () => {
    router.push("/home");
  };

  return (
    <div className="flex flex-col min-h-screen max-w-7xl justify-center mx-auto bg-gray-50">
      {/* Header Image */}
      <div className="relative overflow-hidden h-64">
        <Image
          src="/images/default.png"
          alt="Binder background"
          fill
          className="object-cover brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/20 to-transparent z-1" />
        <button
          onClick={handleBack}
          className="absolute top-5 left-8 z-10 p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          <MoveLeft className="h-6 w-6 text-white" />
        </button>
        <p className="absolute bottom-0 left-0 right-0 px-8 py-5 text-2xl font-bold text-white drop-shadow-lg z-10">
          binder name
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-row flex-1">
        {/* Sidebar */}
        <div
          className={`bg-white border-r border-gray-200 shrink-0 transition-all duration-300 ${
            sidebarCollapsed ? "w-0" : "w-64"
          }`}
        >
          <div className={`${sidebarCollapsed ? "hidden" : "block"}`}>
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                <FolderOpen className="h-4 w-4" />
                Sections
              </h2>
              <div className="flex items-center gap-1">
                <button className="p-1.5 hover:bg-gray-100 rounded-md transition-colors">
                  <Plus className="h-4 w-4 text-gray-600" />
                </button>
                <button
                  onClick={() => setSidebarCollapsed(true)}
                  className="p-1.5 hover:bg-gray-100 rounded-md transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="p-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`w-full text-left px-3 py-2.5 rounded-md transition-colors mb-1 ${
                    activeSection === section.id
                      ? "bg-blue-50 text-blue-700"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{section.title}</span>
                    <span className="text-xs text-gray-500">
                      {section.pageCount}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Show Open Button when collapsed */}
        {sidebarCollapsed && (
          <button
            onClick={() => setSidebarCollapsed(false)}
            className="absolute left-0 top-72 bg-white border border-gray-200 p-1.5 rounded-r-md hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-4 w-4 text-gray-600" />
          </button>
        )}

        {/* Main Content Area with Action Buttons */}
        <div className="flex-1 p-8 flex justify-end">
          <div className="flex items-start gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <Plus className="h-4 w-4" />
              <span className="text-sm font-medium">Add Page</span>
            </button>
            <button className="p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm">
              <Settings className="h-4 w-4 text-gray-600" />
            </button>
            <button className="p-2.5 bg-white border border-gray-200 rounded-lg hover:bg-red-50 transition-colors shadow-sm group">
              <Trash className="h-4 w-4 text-gray-600 group-hover:text-red-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
