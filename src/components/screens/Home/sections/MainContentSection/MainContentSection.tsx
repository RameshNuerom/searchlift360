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
    <section className="w-full bg-black py-16">
      <div className="max-w-[1280px] mx-auto px-4">
      <h2 className="text-white text-[48px] font-bold mb-12 md:ml-[27rem] px-50">

          About Us
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-80">
          {/* Left: Image */}
       <div className="w-full md:w-1/2 md:pl-0 md:ml-[-100px]">


            <Image
              src="/About.png"
              alt="Our Lab"
              width={1800}
              height={1800}
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right: Text */}
          <div className="w-full md:w-1/2">
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
