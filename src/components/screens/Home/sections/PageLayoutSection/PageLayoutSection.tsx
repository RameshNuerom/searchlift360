import React from "react";
import Image from "next/image";
import TypewriterConversation from "../TypewriterConversation/TypewriterConversation";
import HeroSection from "../HeroSection/HeroSection";

export const PageLayoutSection = (): JSX.Element => {
  const conversationText = [
    "",
    "Do you think your brand pops up in this AI conversation?",
    "",
    "No - This is where we hand hold you.",
    "Instead of pointing the traffic to a giant marketplace, we redirect the query straight to your website.",
  ];

  return (
    <section className="relative w-full bg-black pl-6 md:pl-12">

      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <div className="w-full py-20 md:py-28 flex flex-col-reverse md:flex-row items-center">

        {/* Text Section */}
        <div className="flex flex-col items-start gap-8 max-w-full md:max-w-[714px] pl-6 md:pl-12 mt-12 md:mt-0">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] leading-[120%] font-bold font-heading-desktop-h2">
              Ready to own every AI recommendation?
            </h2>

            <div className="text-white text-lg sm:text-xl md:text-2xl leading-8 sm:leading-9 font-normal font-['Roboto',Helvetica]">
              <p className="mb-6">Imagine this,</p>
              <p className="mb-6">Sreya: Hey GPT</p>
              <TypewriterConversation />
              {conversationText.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Image Section */}
      
       <div className="relative shrink-0 ml-auto mt-12 md:mt-0">
  <Image
    className="w-[220px] sm:w-[260px] md:w-[287px] h-auto"
    alt="Mobile device showing AI conversation"
    src="/image-32.png"
    width={287}
    height={449}
    priority
  />
</div>
      </div>
    </section>
  );
};
