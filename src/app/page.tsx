"use client";

import type React from "react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { MessageSquare, Home, MessageCircle } from "lucide-react";
import Message from "@/components/homepage/Message";
import HomePage from "@/components/homepage/Home";
import HeroSection from "@/components/homepage/HeroSection";
import Image from "next/image";
import Link from "next/link";

type PopoverPage = "home" | "message";

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<PopoverPage>("home");
  // eslint-disable-next-line
  const [currentUrl, setCurrentUrl] = useState("https://www.mulphilog.com/");
  const [message, setMessage] = useState("");
  const [initialQuery, setInitialQuery] = useState<string | undefined>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [timeoutState, setTimeoutState] = useState(false);
  const hasUsedInitialQuery = useRef(false);

  const navigateTo = (page: PopoverPage) => {
    setCurrentPage(page);
  };

  const sendMessage = (customMessage?: string) => {
    const query = customMessage || message.trim();
    if (!query) return;

    hasUsedInitialQuery.current = false;
    setInitialQuery(query);
    setMessage("");
    setCurrentPage("message");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case "message":
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <Message
                initialQuery={initialQuery}
                onUrlDetected={(url) => setCurrentUrl(url)}
                hasUsedInitialQuery={hasUsedInitialQuery}
              />
            </div>
            <div className="flex justify-around bg-white rounded-b-2xl sticky bottom-0">
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#8B00CC] cursor-pointer"
                onClick={() => navigateTo("home")}
              >
                <Home className="h-6 w-6" />
                <span className="font-medium">Home</span>
              </Button>
              <Button
                variant="ghost"
                className="flex flex-col items-center gap-1 h-auto text-[#8B00CC] cursor-pointer"
                onClick={() => navigateTo("message")}
              >
                <MessageCircle className="h-6 w-6" />
                <span className="font-medium">Messages</span>
              </Button>
            </div>
          </div>
        );

      default: // 'home'
        return (
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto">
              <HomePage
                onCardClick={(content) => sendMessage(content)}
                message={message}
                isLoading={isLoading}
                timeoutState={timeoutState}
                setMessage={setMessage}
                handleKeyDown={handleKeyDown}
                sendMessage={sendMessage}
              />
            </div>

            {/* Sticky Bottom Navigation + Footer */}
            <div className="sticky bottom-0 bg-white rounded-b-2xl shadow-md">
              <div className="flex justify-around border-b border-gray-200">
                <Button
                  variant="ghost"
                  className="flex flex-col items-center gap-1 h-auto text-[#8B00CC] cursor-pointer hover:text-[#8B00CC]"
                  onClick={() => navigateTo("home")}
                >
                  <Home className="h-6 w-6" />
                  <span className="font-medium">Home</span>
                </Button>
                <Button
                  variant="ghost"
                  className="flex flex-col items-center gap-1 h-auto text-gray-500 hover:text-[#8B00CC] cursor-pointer"
                  onClick={() => navigateTo("message")}
                >
                  <MessageCircle className="h-6 w-6" />
                  <span className="font-medium">Messages</span>
                </Button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center text-white h-full">
      <HeroSection />

      {/* Chat Button - unchanged */}
      <div className="fixed bottom-8 right-8 z-40 flex items-center gap-3 flex-row-reverse">
        <Popover open={open} onOpenChange={setOpen} modal={false}>
          <PopoverTrigger asChild>
            <Button
              className={`h-14 w-14 rounded-full shadow-xl cursor-pointer transition-all duration-300 ${
                !open && "hover:scale-110"
              } bg-gradient-to-br from-[#5B0094] via-[#8B00CC] to-[#B84DFF] 
       hover:from-[#6E00A8] hover:via-[#9E33E6] hover:to-[#C266FF]
       p-0 flex items-center justify-center`}
              aria-label="Open chat"
            >
              <MessageSquare className="h-6 w-6 text-white" />
            </Button>
          </PopoverTrigger>

          <PopoverContent
            className="w-80 sm:w-96 p-0 rounded-2xl shadow-2xl bg-gray-900 overflow-hidden"
            align="end"
            side="top"
            onInteractOutside={(e) => {
              // Prevent closing when clicking the powered by link
              const target = e.target as HTMLElement;
              if (target.closest(".no-close")) {
                e.preventDefault();
              }
            }}
            style={{ maxHeight: "calc(100vh - 95px)" }}
          >
            <div className="flex flex-col h-[500px]">{renderPage()}</div>
          </PopoverContent>
        </Popover>

        {open && (
          <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-lg shadow text-gray-600">
            <span className="text-sm">Powered by</span>
            <Link
              href="https://theaisystems.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="no-close"
            >
              <Image
                src="/aisystems.svg"
                alt="Brand Logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
