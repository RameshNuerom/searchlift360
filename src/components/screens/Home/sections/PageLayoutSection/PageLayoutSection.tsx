import React from "react";
import Image from "next/image";
import TypewriterConversation from "../TypewriterConversation/TypewriterConversation";

export const PageLayoutSection = (): JSX.Element => {
  const conversationText = [
   
   
    "",
    "Do you think your brand pops up in this AI conversation?",
    "",
    "No - This is where we hand hold you.",
    "Instead of pointing the traffic to a giant marketplace, we redirect the query straight to your website.",
  ];

  return (
    <section className="relative w-full bg-black py-28">
      <div className="container mx-auto flex items-start gap-20">
        <div className="flex flex-col items-start gap-8 max-w-[714px]">
          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="text-white text-[48px] leading-[120%] font-bold font-heading-desktop-h2">
              Ready to own every AI recommendation?
            </h2>

            <div className="text-white text-2xl leading-9 font-normal font-['Roboto',Helvetica]">
                 <p  className="text-white text-2xl leading-9 font-normal font-['Roboto',Helvetica] mb-8">Imagine this,</p>
                 <p  className="text-white text-2xl leading-9 font-normal font-['Roboto',Helvetica] mb-8">Sreya: Hey GPT</p>
              <TypewriterConversation/>
              {conversationText.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <Image
            className="w-[287px] h-[449px]"
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