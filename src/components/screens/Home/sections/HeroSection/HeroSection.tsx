import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Import Image component
import WebsiteAnalyzer from '../WebsiteAnalyzer/WebsiteAnalyzer';

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative w-full h-[634px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image--absolute-.png')" }}
    >
      {/* Top Header Row: Logo on left, CTA on right */}
     {/* Top Header Row: Logo on left, CTA on right */}
<div className="w-full px-4 sm:px-6 md:px-12 py-4 flex flex-col sm:flex-row justify-between items-center gap-4 bg-transparent relative z-50">
  {/* Left: Logo */}
  <div className="flex items-center justify-center sm:justify-start w-full sm:w-auto">
    <Image
      src="/my_logo.png"
      alt="Logo"
      width={200}
      height={60}
      className="w-auto h-[40px] sm:h-[50px] object-contain"
      priority
    />
  </div>

  {/* Right: Text + Button */}
  <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto text-center sm:text-left">
    <div className="font-bold text-white text-sm sm:text-base font-['Montserrat',Helvetica]">
      From search to sale—make AI work for you.
    </div>
    <a
      href="#contact"
      className="bg-[#ffa400] text-black font-medium rounded-md px-4 py-2 hover:bg-[#ffa400]/90 text-sm sm:text-base"
    >
      Contact Us
    </a>
  </div>
</div>

      {/* Centered Content */}
      <div className="relative w-full max-w-[800px] mx-auto pt-[80px] px-4">
        <div className="text-center">
          <h1 className="font-medium text-[56.1px] tracking-[-2.24px] leading-[64.4px] mb-12 font-['Inter',Helvetica] text-white">
            Is your brand AI conversation ready?
          </h1>
            <WebsiteAnalyzer />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
