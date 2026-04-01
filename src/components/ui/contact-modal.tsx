"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";

export const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");
    setIsError(false);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("user_name") as string,
      email: formData.get("user_email") as string,
      phone: formData.get("user_phone") as string,
      description: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/book-call", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setIsError(true);
        // Parse Zod validation details into readable text
        let msg = data.error || "Something went wrong. Please try again.";
        if (data.details && typeof data.details === "object") {
          const fieldErrors = Object.entries(data.details)
            .map(([field, errs]) => `${field}: ${(errs as string[]).join(", ")}`)
            .join(". ");
          if (fieldErrors) msg = fieldErrors;
        }
        setStatusMessage(msg);
        setIsSubmitting(false);
        return;
      }

      setStatusMessage("Call booked successfully! We'll be in touch shortly.");
      setIsSubmitting(false);
      setTimeout(() => {
        onClose();
        setStatusMessage("");
      }, 2500);
    } catch {
      setIsError(true);
      setStatusMessage("Network error. Please check your connection and try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#0d041c] border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.2)]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors rounded-full bg-white/5 hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400">
                Book a Call
              </h3>
              <p className="text-sm text-gray-400 mt-2">
                Leave your details and our team will get back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-300 font-medium">Name</label>
                <input
                  required
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none text-white transition-all placeholder-gray-600"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-300 font-medium">Email</label>
                <input
                  required
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none text-white transition-all placeholder-gray-600"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-300 font-medium">Phone</label>
                <input
                  required
                  type="tel"
                  name="user_phone"
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none text-white transition-all placeholder-gray-600"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm text-gray-300 font-medium">Project Details</label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  placeholder="Tell us about what you're building..."
                  className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 outline-none text-white transition-all resize-none placeholder-gray-600"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-colors glow-purple"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
              
              {statusMessage && (
                <p className={`text-center text-sm mt-2 ${isError ? "text-red-400" : "text-green-400"}`}>
                  {statusMessage}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
