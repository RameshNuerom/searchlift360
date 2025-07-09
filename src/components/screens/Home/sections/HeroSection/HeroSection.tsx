import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image'; // Import Image component

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative w-full h-[634px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image--absolute-.png')" }}
    >
      {/* Top Header Row: Logo on left, CTA on right */}
      <div className="absolute top-[-50px] left-0 right-0 px-6 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Image
            src="/sl360_logo.png"
            alt="Logo"
            width={250}
            height={250}
            priority
          />
        </div>

        {/* Right: Text + Button */}
        <div className="flex items-center gap-6 mr-10">
          <div className="font-bold text-white text-sm sm:text-base font-['Montserrat',Helvetica]">
            From search to sale—make AI work for you.
          </div>
          <Button className="bg-[#ffa400] text-black font-medium rounded-md h-[37px] w-[150px] hover:bg-[#ffa400]/90">
            Get Started
          </Button>
        </div>
      </div>

      {/* Centered Content */}
      <div className="relative w-full max-w-[800px] mx-auto pt-[200px] px-4">
        <div className="text-center">
          <h1 className="font-medium text-[56.1px] tracking-[-2.24px] leading-[64.4px] mb-12 font-['Inter',Helvetica] text-white">
            Is your brand AI conversation ready?
          </h1>
          <Button className="bg-[#ffa400] text-black font-medium rounded-md h-[37px] w-[150px] hover:bg-[#ffa400]/90">
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
