import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export const SiteFooterSection = (): JSX.Element => {
  return (
    <footer className="w-full bg-black py-6 px-4 md:px-16">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          {/* Logo section */}
          <div className="flex flex-col gap-8">
            <div className="bg-[linear-gradient(90deg,rgba(245,56,56,1)_0%,rgba(1,243,253,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Sansita_One-Regular',Helvetica] font-normal text-transparent text-2xl tracking-[-0.55px]">
              {""}
            </div>
            <div className="flex flex-col gap-6">
              <div className="w-[84px] h-9 bg-gray-600 rounded"></div>
            </div>
          </div>

          {/* Contact form section */}
          <Card className="bg-transparent border-none w-full md:w-[400px]">
            <CardContent className="p-0 space-y-4">
              <h3 className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-white text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">
                Get Touch with Us
              </h3>

              <div className="space-y-4">
                {/* <div className="relative">
                  <div className="flex items-center border border-white">
                    <span className="px-3 py-3 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      Email
                    </span>
                    <Input
                      className="border-0 bg-transparent h-12 text-[#00000099] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                      placeholder="Enter your email"
                    />
                  </div>
                </div> */}

                {/* <div className="relative">
                  <div className="flex items-center border border-white">
                    <span className="px-3 py-3 font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-white text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]">
                      Phone Number
                    </span>
                    <Input
                      className="border-0 bg-transparent h-12 text-[#00000099] font-text-regular-normal font-[number:var(--text-regular-normal-font-weight)] text-[length:var(--text-regular-normal-font-size)] tracking-[var(--text-regular-normal-letter-spacing)] leading-[var(--text-regular-normal-line-height)] [font-style:var(--text-regular-normal-font-style)]"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div> */}

                <a
                  href="https://mail.google.com/mail/?view=cm&to=hello@neurom.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  text-white text-2xl leading-9 font-normal font-['Roboto',Helvetica]
                  border-b-2 border-transparent
                  transition-all duration-200
                  hover:border-blue-400
                  hover:text-blue-400
                  cursor-pointer
                "
                >
                  hello@neurom.in
                </a>


                <p className="font-text-regular-semi-bold font-[number:var(--text-regular-semi-bold-font-weight)] text-white text-[length:var(--text-regular-semi-bold-font-size)] tracking-[var(--text-regular-semi-bold-letter-spacing)] leading-[var(--text-regular-semi-bold-line-height)] [font-style:var(--text-regular-semi-bold-font-style)]">Our location: Vindhya C4, IIITH Campus, Gachibowli, Hyderabad, Telangana 500032</p>


              </div>

              {/* <Button className="bg-[#ffa400] hover:bg-[#ffa400]/90 text-black font-medium rounded-md h-[37px] w-[150px] mt-4">
                Submit
              </Button> */}
            </CardContent>
          </Card>
        </div>

        {/* Footer bottom section */}
        <div className="mt-12">
          <Separator className="bg-white/20 h-px w-full" />
          <div className="flex justify-start py-4">
            <p className="font-text-small-normal font-[number:var(--text-small-normal-font-weight)] text-white text-[length:var(--text-small-normal-font-size)] tracking-[var(--text-small-normal-letter-spacing)] leading-[var(--text-small-normal-line-height)] [font-style:var(--text-small-normal-font-style)]">
              © 2025 AI Conversation Platform. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};