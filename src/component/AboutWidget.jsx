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
      <div className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg break-words">
        <p className="mb-3 sm:mb-4">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p>
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years with my wife Tiffany and my 4 year old twin daughters - Emma and Ella.
        </p>
      </div>
    ),
    experiences: (
      <div className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg break-words">
        <p className="mb-3 sm:mb-4">
          I have over 8 years of experience in sales and customer relationship management. My expertise includes enterprise software solutions and building long-term client partnerships.
        </p>
        <p>
          Previously worked at Oracle and Microsoft, consistently exceeding sales targets by 150% year over year.
        </p>
      </div>
    ),
    recommended: (
      <div className="text-gray-300 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg break-words">
        <p className="mb-3 sm:mb-4">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p>
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
    )
  };

  return (
    <div className="bg-[#363C43] rounded-[18px] shadow-[5px_5px_10px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(96,96,96,0.1)] p-3 sm:p-4 md:p-6 relative w-full max-w-full overflow-hidden">
      {/* Help Icon */}
      <div className="absolute top-3 sm:top-4 md:top-6 left-3 sm:left-4 md:left-6 z-10">
        <button className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#171717] flex items-center justify-center text-gray-400 hover:text-gray-300 transition-colors shadow-inner flex-shrink-0">
          <HelpCircle className="w-3 h-3 md:w-4 md:h-4" />
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-end gap-1 sm:gap-2 mb-4 sm:mb-6 md:mb-8 pt-8 sm:pt-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-xl sm:rounded-2xl text-[10px] sm:text-xs md:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
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
      <div className="px-2 sm:px-3 md:px-4 pb-3 sm:pb-4 max-h-[300px] sm:max-h-[350px] md:max-h-[400px] overflow-y-auto overflow-x-hidden">
        {content[activeTab]}
      </div>
    </div>
  );
}
