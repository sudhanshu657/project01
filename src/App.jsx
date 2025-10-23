import { useState } from 'react';
import AboutWidget from './component/AboutWidget';
import GalleryWidget from './component/GalleryWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-[#1E1E1E] p-2 sm:p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {/* Left side - Empty Big Box (Desktop only) */}
          <div className="hidden lg:block">
            <div className="bg-[#363C43] rounded-[18px] shadow-[5px_5px_10px_rgba(0,0,0,0.5),-5px_-5px_10px_rgba(96,96,96,0.1)] h-[calc(100vh-4rem)] sticky top-8">
              {/* Empty box with 3D effect */}
            </div>
          </div>

          {/* Right side - Widgets */}
          <div className="space-y-4 sm:space-y-6 w-full max-w-full overflow-hidden">
            <AboutWidget />
            <GalleryWidget />
          </div>
        </div>
      </div>
    </div>
  );
}
