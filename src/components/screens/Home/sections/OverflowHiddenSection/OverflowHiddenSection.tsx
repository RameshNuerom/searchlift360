import React from "react";
import Image from "next/image";

export const OverflowHiddenSection = (): JSX.Element => {
  const featuresList = [
    "Smart Keyword Integration",
    "Conversational AI Chatbot",
    "Dedicated Agentic AI",
  ];

  return (
    <section className="w-full bg-black py-24">
      <div className="w-full flex flex-col md:flex-row items-start md:items-center gap-16 md:gap-24 px-4 md:px-12">
        
        {/* Left: Image */}
        <div className="w-full md:w-[40%]">
          <Image
            src="/image-31.png"
            alt="AI Discovery and Conversation"
            width={500}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-[60%] mr-6">
          <h2 className="text-white text-[32px] sm:text-[40px] md:text-[48px] font-bold mb-4">
            Features 02
          </h2>

          <h3 className="text-[#ffa400] text-[24px] sm:text-[32px] md:text-[36px] font-bold mb-6">
            AI Discovery & Conversation
          </h3>

          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-6 font-['Roboto',Helvetica]">
            Transform that data into action with an AI chatbot, seamless keyword integration,
            and a dedicated Agentic AI tuned to your catalog. Engage customers via a Conversational
            WhatsApp AI bot and stay ahead with predictive analytics and live growth dashboards.
          </p>

          <ul className="list-disc pl-5 text-white space-y-2 text-base sm:text-lg font-semibold">
            {featuresList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
