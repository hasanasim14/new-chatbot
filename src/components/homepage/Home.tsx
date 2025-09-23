"use client";

import type React from "react";
import { ChevronRight, Headphones, Info, Phone, Users } from "lucide-react";
import { TextAreaMessage } from "./TextAreaMessage";
import { Button } from "../ui/button";
import { Poppins_font } from "./HeroSection";

interface HomePageProps {
  onCardClick?: (content: string) => void;
  onContactClick: () => void;
  message: string;
  isLoading: boolean;
  timeoutState: boolean;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  sendMessage: (customMessage?: string) => void;
}

export default function HomePage({
  onCardClick,
  onContactClick,
  message,
  isLoading,
  timeoutState,
  setMessage,
  handleKeyDown,
  sendMessage,
}: HomePageProps) {
  const cardItems = [
    {
      text: "About Mayfair",
      icon: <Info className="h-5 w-5 text-[#8B00CC]" />,
      query: "What is mayfair?",
    },
    {
      text: "Leadership Team",
      icon: <Users className="h-5 w-5 text-[#8B00CC]" />,
      query: "Leadership Team",
    },
    {
      text: "Customer Support",
      icon: <Headphones className="h-5 w-5 text-[#8B00CC]" />,
      query: "Customer Support",
    },
  ];

  const handleCardClick = (content: string) => {
    onCardClick?.(content);
  };

  const handleContact = () => {
    onContactClick();
  };

  return (
    <div
      className={`${Poppins_font.className} flex flex-col h-full max-h-screen bg-gradient-to-br from-[#5B0094] via-[#8B00CC] to-[#B84DFF]`}
    >
      <div className="p-3 backdrop-blur overflow-y-auto flex-1">
        <h2 className="text-lg font-semibold text-white drop-shadow-sm space-y-1 mt-4">
          <span className="block">👋 Hi, I’m your MayfairTech Assistant!</span>
          <span className="block text-center">How can I help you today?</span>
        </h2>

        <div className="flex-1 px-4 py-2">
          <div className="flex gap-4 mb-4"></div>

          <div className="max-w-sm mx-auto bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {cardItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleCardClick(item.query)}
                  className="flex items-center justify-between p-2 group hover:bg-gray-50/80 transition-colors duration-300 cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-gray-800 font-medium">
                      {item.text}
                    </span>
                  </div>
                  <ChevronRight className="h-5 w-5 text-gray-400 stroke-[3] transition-colors duration-200 group-hover:text-[#8B00CC]" />
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-sm mx-auto mt-6 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl text-center">
            <h3 className="text-lg font-semibold text-[#8B00CC] mb-2 flex items-center justify-center gap-2">
              <Phone className="h-5 w-5 text-[#8B00CC]" />
              Get in Touch
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              We&apos;d love to hear from you! Fill out the form and we&apos;ll
              get back to you shortly.
            </p>
            <Button
              onClick={handleContact}
              className="w-full text-white bg-[#8B00CC] transition-all hover:bg-[#8B00CC]/90"
            >
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-auto">
        <TextAreaMessage
          message={message}
          isLoading={isLoading}
          timeoutState={timeoutState}
          setMessage={setMessage}
          handleKeyDown={handleKeyDown}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}
