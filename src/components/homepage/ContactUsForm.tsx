"use client";

import type React from "react";
import { useState } from "react";
import {
  Mail,
  PhoneCall,
  User,
  MessageSquare,
  Loader2,
  ChevronLeft,
} from "lucide-react";
import { Poppins_font } from "./HeroSection";
import { Button } from "../ui/button";

interface ContactUs {
  redirectToHome: () => void;
}

export default function ContactUs({ redirectToHome }: ContactUs) {
  const [formData, setFormData] = useState({
    FullName: "",
    Email: "",
    Message: "",
    Subject: "",
    Phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // checking for empty fields of the form
  const isFormIncomplete = Object.entries(formData).some(
    ([key, value]) => key !== "Phone" && !value.trim()
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/emailHina`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ formData }),
      });

      if (res.ok) {
        setFormData({
          FullName: "",
          Email: "",
          Message: "",
          Subject: "",
          Phone: "",
        });
      }
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // <div
    //   className={`${Poppins_font.className} flex items-center justify-center bg-white py-8 px-2`}
    // >
    <div
      className={`${Poppins_font.className} flex flex-col h-full max-h-screen`}
    >
      {/* <div className="w-full max-w-lg bg-white/95 max-h-[75vh] overflow-y-auto"> */}
      <div className="w-full max-w-lg bg-white/95 h-full overflow-y-auto">
        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          <div className="text-center relative">
            {/* back button */}
            <button
              type="button"
              onClick={redirectToHome}
              className="absolute -left-6 top-1/4 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full hover:bg-purple-50 transition-colors duration-200 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6 text-[#8B00CC]" />
            </button>
            <h2 className="text-3xl font-bold text-[#8B00CC] drop-shadow">
              Let&apos;s Get In Touch.
            </h2>
            <p className="text-[#8B00CC]/80 mt-2">
              We&apos;d love to hear from you!
            </p>
          </div>

          {/* Full Name */}
          <div>
            <label
              htmlFor="FullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="FullName"
                name="FullName"
                type="text"
                value={formData.FullName}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="pl-10 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="Email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="Email"
                name="Email"
                type="email"
                value={formData.Email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
                className="pl-10 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="Phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <div className="relative">
              <PhoneCall className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                id="Phone"
                name="Phone"
                type="tel"
                value={formData.Phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="pl-10 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="Subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Subject
            </label>
            <input
              id="Subject"
              name="Subject"
              type="text"
              value={formData.Subject}
              onChange={handleChange}
              required
              placeholder="What is this regarding?"
              className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="Message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <textarea
                id="Message"
                name="Message"
                value={formData.Message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Tell us how we can help you..."
                className="pl-10 block w-full rounded-lg border border-gray-300 px-4 py-3 
                 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                 transition-all min-h-[120px]"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mt-4">
            <Button
              className="w-38 bg-[#1E90FF] text-white hover:bg-[#1E90FF]/90 px-5 py-2 rounded-lg font-medium shadow-sm disabled:opacity-60"
              disabled={isFormIncomplete}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>

            <Button
              type="button"
              variant="outline"
              className="w-38 border-gray-300 text-gray-700 hover:bg-gray-100 px-5 py-2 rounded-lg font-medium shadow-sm"
              onClick={() =>
                setFormData({
                  FullName: "",
                  Email: "",
                  Message: "",
                  Subject: "",
                  Phone: "",
                })
              }
            >
              Clear Form
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
