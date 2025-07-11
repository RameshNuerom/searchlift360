import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export const MainContentSection = (): JSX.Element => {
  const aboutUsContent = [
    "We're a bunch of Gen Z mad scientists, running on ideas, caffeine, and a bit of chaos. We build stuff that's fast—like, 10x faster—and made to actually pull people in. No boring tech, no fluff. Just tools that hit hard and bring traffic where it matters.",
    "This whole project? It started as a wild experiment… Now it's a full-blown digital storm.",
    "We don't follow trends—we build what's next.\nOur team blends speed, genius, and just the right amount of madness to make the internet move.",
    "We take inspiration from Geoffrey Hinton, Neuralink, SpaceX and others who crack a few jokes (and maybe our minds), and create something that actually works. And honestly? We're just getting started.",
    "So yeah—if you're into speed, madness, and results.\nWelcome to the lab.",
  ];

  return (
    <section className="w-full bg-black px-4 py-8 sm:px-6 md:px-12 md:py-16">
      <div className="relative max-w-[1280px] mx-auto">
        <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-8 md:mb-12 text-center">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          {/* Left: Image */}
          <div className="col-span-12 md:col-span-5 flex justify-center md:justify-end items-center px-2 sm:px-4"> {/* Changed to md:justify-end for potentially better alignment with text */}
            <Image
              src="/AboutUs.png"
              alt="Our Lab"
              // Adjusted image sizing for desktop view to be larger
              className="w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[400px] md:max-w-[550px] lg:max-w-[700px] h-auto object-contain" // Increased max-width for md and lg
              width={700} // Increased base width for larger screens
              height={700} // Increased base height for larger screens
              priority
            />
          </div>

          {/* Right: Text */}
          <div className="col-span-12 md:col-span-7">
            <Card className="bg-transparent border-0">
              <CardContent className="p-0">
                <div className="font-['Roboto',Helvetica] text-white text-base sm:text-lg leading-8 space-y-4 px-2 sm:px-4">
                  {aboutUsContent.map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line text-left">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};