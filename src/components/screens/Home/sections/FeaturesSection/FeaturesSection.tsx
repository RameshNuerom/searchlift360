import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export const FeaturesSection = (): JSX.Element => {
  const featuresList = [
    "Crawlability",
    "API for any website",
    "Up To 10x Faster",
    "Custom Schemas",
  ];

  return (
    <section className="w-full relative">
      <div className="flex flex-row relative w-full">
        <Card className="w-full md:w-[1239px] bg-black rounded-none border-none">
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-col p-16 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-white text-[48px] leading-[57.6px] font-heading-desktop-h2 font-bold tracking-[0]">
                    Features 01
                  </h2>
                  <h3 className="text-[#ffa400] text-[40px] leading-[48px] font-['Roboto',Helvetica] font-bold tracking-[0]">
                    Instant Data Platform
                  </h3>
                  <Image
                    className="w-[18px] h-5"
                    alt="Vector"
                    src="/vector.svg"
                    width={18}
                    height={20}
                  />
                </div>

                <p className="text-white text-2xl leading-[28.8px] font-['Roboto',Helvetica] font-normal">
                  Access your website&apos;s data instantly through a robust
                  & API with custom schemas. Our adaptive AI pipelines
                  ensure every data point is validated and enriched, while
                  web-scale crawling delivers up to 10× faster extraction—no
                  manual cleanup or developer time needed.
                </p>

                <ul className="text-white text-2xl leading-9 font-['Roboto',Helvetica] font-medium mt-8">
                  {featuresList.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Image
          className="hidden md:block w-[840px] h-[671px] object-cover absolute right-0"
          alt="Data platform visualization"
          src="/image-33.png"
          width={840}
          height={671}
          priority
        />
      </div>
    </section>
  );
};