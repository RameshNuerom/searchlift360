"use client";

import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

const conversationText: string[] = [

  

   " Give me the best smudge-proof eyeliner and mascara below 2k.",
    "Give me the best shoes matching my party wear.",
    "Show me a red shirt best paired with blue jeans.",

];

const TypewriterConversation: React.FC = () => (
  <div className="text-white text-2xl leading-9 font-normal font-['Roboto',Helvetica]">
    <Typewriter
      words={conversationText}
      loop={false}
      cursor
      cursorStyle="|"
      typeSpeed={50}
      deleteSpeed={30}
      delaySpeed={900}
    />
  </div>
);

export default TypewriterConversation;
