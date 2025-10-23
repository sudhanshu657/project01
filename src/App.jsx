

import { useState } from 'react';
import AboutWidget from './component/AboutWidget';
import GalleryWidget from './component/GalleryWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1E1E1E]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-screen">
          {/* Left side - Empty Big Box */}
          <div className="hidden lg:block lg:pl-8">
            <div className="bg-[#363C43] rounded-[18px] shadow-[5px_5px_10px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(96,96,96,0.1)] h-[calc(100vh-4rem)] sticky top-8">
              {/* Empty box with 3D effect */}
            </div>
          </div>

          {/* Right side - Widgets */}
          <div className="space-y-6 lg:pr-8">
            <AboutWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
}