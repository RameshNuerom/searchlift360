import React from "react";
import { FeaturesSection } from "./sections/FeaturesSection";
import { MainContentSection } from "./sections/MainContentSection";
import { OverflowHiddenSection } from "./sections/OverflowHiddenSection";
import { PageLayoutSection } from "./sections/PageLayoutSection";
import { SiteFooterSection } from "./sections/SiteFooterSection";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-transparent flex flex-row justify-center w-full">
      <div className="w-full max-w-[1280px] overflow-x-hidden">
        <div className="relative w-full bg-black">
          
          <PageLayoutSection />
          <MainContentSection />
          <FeaturesSection />
          <OverflowHiddenSection />
          <SiteFooterSection />
        </div>
      </div>
    </div>
  );
};
