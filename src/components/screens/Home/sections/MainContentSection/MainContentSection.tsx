import React from "react";
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
      <div className="flex flex-col items-center max-w-[1085px] mx-auto px-4">
        <h2 className="text-white text-[48px] font-bold font-heading-desktop-h2 leading-[120%] tracking-[0px] text-center mb-6">
          About Us
        </h2>

        <Card className="bg-transparent border-0">
          <CardContent className="p-0">
            <div className="font-['Roboto',Helvetica] font-normal text-white text-2xl text-center leading-9 space-y-6">
              {aboutUsContent.map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};