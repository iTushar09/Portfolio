import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-black/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-white text-center">
          Get in <span className="text-purple-400">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Feel free to reach out for collaborations or just a friendly hello
        </p>

        <div className="max-w-3xl mx-auto mt-12">
          {/* Contact cards */}
          
          {/* Enhanced contact form */}
          <div className="bg-gradient-to-br from-black/60 to-purple-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 transition-all duration-300"
                  />
                </div>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 transition-all duration-300"
                />
              </div>
              <div className="relative">
                <textarea
                  placeholder="Your Message"
                  rows={6}
                  className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
