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
    <section className=" w-full bg-black">
      <div className="relative max-w-[2080px] mx-auto px-4">
        <h2 className="relative text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-12 text-center md:text-center md:ml-[-1rem]">
          About Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          {/* Left: Image (5/12) */}
          <div className="col-span-12 md:col-span-5 flex justify-center">
           <Image
  src="/AboutUs.png"
  alt="Our Lab"
  className="w-full h-auto max-w-[90%] sm:max-w-[500px] md:max-w-[600px] object-contain"
  width={600}
  height={600}
  priority
/>

          </div>

          {/* Right: Text (7/12) */}
          <div className="col-span-12 md:col-span-7">
            <Card className="bg-transparent border-0">
              <CardContent className="p-0">
                <div className="font-['Roboto',Helvetica] font-normal text-white text-lg leading-8 space-y-5 text-justify">
                  {aboutUsContent.map((paragraph, index) => (
                    <p key={index} className="whitespace-pre-line">
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
