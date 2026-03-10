import { useState } from "react";
import {
  BookOpen,
  Monitor,
  Download,
  Image,
} from "lucide-react";

export default function DocumentationView() {
  const [activeTab, setActiveTab] = useState("introduction");

  const tabs = [
    {
      id: "introduction",
      label: "Introduction",
      icon: BookOpen,
    },
    {
      id: "requirements",
      label: "System Requirements",
      icon: Monitor,
    },
    {
      id: "installation",
      label: "Installation",
      icon: Download,
    },
    {
      id: "screenshots",
      label: "Screenshots",
      icon: Image,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-6">
      <div className="grid md:grid-cols-12 gap-6">

        {/* Sidebar */}
        <div className="md:col-span-3">
          <nav className="flex flex-col gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-4 py-2 text-left text-sm transition
                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200"
                  }`}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Content */}
        <div className="md:col-span-9">
          <div className="rounded-xl border bg-white p-6 shadow-sm">

            {activeTab === "introduction" && (
              <>
                <h4 className="text-lg font-semibold">Introduction</h4>
                <hr className="my-4" />
              </>
            )}

            {activeTab === "requirements" && (
              <>
                <h4 className="text-lg font-semibold">
                  System Requirements
                </h4>
                <hr className="my-4" />
              </>
            )}

            {activeTab === "installation" && (
              <>
                <h4 className="text-lg font-semibold">Installation</h4>
                <hr className="my-4" />
              </>
            )}

            {activeTab === "screenshots" && (
              <>
                <h4 className="text-lg font-semibold">Screenshots</h4>
                <hr className="my-4" />
              </>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
