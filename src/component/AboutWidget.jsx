import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

export default function AboutWidget() {
  const [activeTab, setActiveTab] = useState('recommended');

  const tabs = [
    { id: 'about', label: 'About Me' },
    { id: 'experiences', label: 'Experiences' },
    { id: 'recommended', label: 'Recommended' }
  ];

  const content = {
    about: (
      <div className="text-gray-300 leading-relaxed text-lg">
        <p className="mb-4">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p>
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella.
        </p>
      </div>
    ),
    experiences: (
      <div className="text-gray-300 leading-relaxed text-lg">
        <p className="mb-4">
          I have over 8 years of experience in sales and customer relationship management. My expertise includes enterprise software solutions and building long-term client partnerships.
        </p>
        <p>
          Previously worked at Oracle and Microsoft, consistently exceeding sales targets by 150% year over year.
        </p>
      </div>
    ),
    recommended: (
      <div className="text-gray-300 leading-relaxed text-lg">
        <p className="mb-4">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p>
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    )
  };

  return (
    <div className="bg-[#363C43] rounded-[18px] shadow-[5px_5px_10px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(96,96,96,0.1)] p-6 relative">
      {/* Help Icon */}
      <div className="absolute top-6 left-6">
        <button className="w-6 h-6 rounded-full bg-[#171717] flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors shadow-inner">
          <HelpCircle size={16} />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex justify-end gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-2xl text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? 'bg-[#28292F] text-white shadow-[inset_0px_4px_10px_rgba(0,0,0,0.5)]'
                : 'bg-[#363C43] text-gray-400 hover:text-gray-300 hover:bg-[#28292F]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="px-4 pb-4 max-h-[400px] overflow-y-auto">
        {content[activeTab]}
      </div>
    </div>
  );
}