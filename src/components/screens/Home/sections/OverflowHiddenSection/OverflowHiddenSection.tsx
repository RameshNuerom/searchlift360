import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const OverflowHiddenSection = (): JSX.Element => {
  // Feature list data for the bottom section
  const featuresList = [
    "Smart Keyword Integration",
    "Backend AI Chatbot",
    "Dedicated Agentic AI",
  ];

  // Bottom section feature highlights
  const featureHighlights = [
    "Smart Keyword Integration",
    "Conversational AI Chatbot",
    "Dedicated Agentic AI",
  ];

  return (
    <section className="relative w-full">
      {/* Hero Section */}
      {/* <div className="relative w-full h-[634px] bg-cover bg-center bg-no-repeat" style={{backgroundImage: "url('/image--absolute-.png')"}}>
        <div className="relative w-full max-w-[800px] mx-auto pt-[103px] px-4">
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

      {/* Top Navigation/CTA */}
      {/* <div className="absolute top-[65px] left-1/2 -translate-x-1/2 flex items-center gap-[58px]">
        <div className="flex items-end gap-[58px]">
          <div className="font-bold text-white text-base font-['Montserrat',Helvetica]">
            From search to sale—make AI work for you.
          </div>
        </div>

        <Button className="bg-[#ffa400] text-black font-medium rounded-md h-[37px] w-[150px] hover:bg-[#ffa400]/90">
          Get Started
        </Button>
      </div> */} 

      {/* Features Section */}
      <div className="w-full bg-black py-24 mt-8">
        <div className="max-w-[1226px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Column - Image */}
            <div>
              <Image
                className="w-full h-[522px] object-cover"
                alt="AI Discovery and Conversation"
                src="/image-31.png"
                width={600}
                height={522}
                priority
              />
            </div>

            {/* Right Column - Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-white text-[48px] leading-[120%] font-heading-desktop-h2 font-bold">
                  Features 02
                </h2>
                <h3 className="text-[#ffa400] text-[40px] leading-[48px] font-bold font-['Roboto',Helvetica] mt-8">
                  AI Discovery & Conversation
                </h3>
              </div>

              {/* Feature List */}
              <div className="mt-8">
                {featuresList.map((feature, index) => (
                  <div key={index} className="flex items-center gap-4 mb-6">
                    <Image
                      className="w-4 h-4"
                      alt="Icon relume"
                      src="/icon---relume.svg"
                      width={16}
                      height={16}
                    />
                    <div className="font-text-regular-normal text-white">
                      {feature}
                    </div>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mt-8">
                <p className="text-white text-xl leading-[30px] font-['Roboto',Helvetica]">
                  Transform that data into action with an AI chatbot, seamless
                  keyword integration, and a dedicated Agentic AI tuned to your
                  catalog. Engage customers via a Conversational WhatsApp AI bot
                  and stay ahead with predictive analytics and live growth
                  dashboards.
                </p>
              </div>

              {/* Feature Highlights */}
              <div className="mt-8">
                <p className="text-white text-xl leading-[30px] font-medium font-['Roboto',Helvetica]">
                  {featureHighlights.map((highlight, index) => (
                    <React.Fragment key={index}>
                      {highlight}
                      {index < featureHighlights.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Brand Name */}
      <div className="absolute top-[70px] left-[189px] bg-[linear-gradient(90deg,rgba(245,56,56,1)_0%,rgba(1,243,253,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-['Sansita_One-Regular',Helvetica] text-2xl tracking-[-0.55px]">
        {""}
      </div>
    </section>
  );
};