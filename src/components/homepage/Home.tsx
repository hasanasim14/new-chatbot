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
      icon: <Info className="h-5 w-5 text-[#fff]" />,
      query: "What is mayfair?",
    },
    {
      text: "Leadership Team",
      icon: <Users className="h-5 w-5 text-[#fff]" />,
      query: "Leadership Team",
    },
    {
      text: "Customer Support",
      icon: <Headphones className="h-5 w-5 text-[#fff]" />,
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
      className={`${Poppins_font.className} flex flex-col h-full max-h-screen bg-[#fff]`}
    >
      <div className="p-3 backdrop-blur overflow-y-auto flex-1">
        <h2 className="text-lg font-semibold text-[#1e3a8a] space-y-1 mt-4">
          <span className="block">👋 Hi, I’m your MayfairTech Assistant!</span>
          <span className="block text-center">How can I help you today?</span>
        </h2>

        <div className="flex-1 px-4 py-2">
          <div className="flex gap-4 mb-4"></div>

          <div className="max-w-sm mx-auto bg-[#1e3a8a] backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
            <ul className="divide-y divide-white/10">
              {cardItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleCardClick(item.query)}
                  className="flex items-center justify-between p-2 group 
                   hover:bg-[#264499] transition-colors duration-300 
                   cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-white font-medium transition-colors duration-300 group-hover:text-gray-100">
                      {item.text}
                    </span>
                  </div>
                  <ChevronRight
                    className="h-5 w-5 text-gray-300 stroke-[3] 
                     transition-colors duration-300 group-hover:text-white"
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-sm mx-auto mt-6 p-5 bg-[#fff] rounded-2xl shadow-md text-center">
            <h3 className="text-lg font-semibold text-[#1e3a8a] mb-2 flex items-center justify-center gap-2">
              <Phone className="h-5 w-5" />
              Get in Touch
            </h3>
            <p className="text-gray-700 text-sm mb-4">
              We&apos;d love to hear from you! Fill out the form and we&apos;ll
              get back to you shortly.
            </p>
            <Button
              onClick={handleContact}
              className="w-full text-white bg-[#1e3a8a] transition-all hover:bg-[#264499] group"
            >
              Contact Us
              <ChevronRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
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
