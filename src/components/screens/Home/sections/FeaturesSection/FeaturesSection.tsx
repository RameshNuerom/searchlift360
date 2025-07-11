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
      <div className="max-w-9xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* Left Column: Text Card (7/12) */}
       {/* Right Column: Image (5/12) - should come FIRST on mobile */}
<div className="col-span-12 md:col-span-5 order-1 md:order-2 flex justify-center md:justify-end  mt-12 md:mt-0">
  <Image
    src="/image-33.png"
    alt="Data platform visualization"
    width={1000}
    height={1000}
    className="w-full max-w-[800px] h-auto object-contain"
    priority
  />
</div>

{/* Left Column: Text Card (7/12) - should come SECOND on mobile */}
<div className="col-span-12 md:col-span-7 order-2 md:order-1 ml-5">
  <Card className="bg-black border-none rounded-none">
    <CardContent className="p-0">
      <div className="flex flex-col p-6 md:p-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[1.2] font-bold">
            Features 01
          </h2>
          <h3 className="text-[#ffa400] text-[24px] sm:text-[32px] md:text-[40px] font-bold">
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

        <p className="text-white text-lg md:text-2xl leading-relaxed font-normal">
          Access your website&apos;s data instantly through a robust
          <br />
          API with custom schemas. Our adaptive AI pipelines ensure every data point is validated and enriched,
          while web-scale crawling delivers up to 10× faster extraction—no manual cleanup or developer time needed.
        </p>

        <ul className="text-white text-lg md:text-2xl font-medium list-disc list-inside space-y-2">
          {featuresList.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
</div>

      </div>
    </section>
  );
};
