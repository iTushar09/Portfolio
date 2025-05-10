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

        <div className="max-w-2xl mx-auto mt-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-black/30 border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-black/30 border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-black/30 border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400"
            />
            <textarea
              placeholder="Your Message"
              rows={6}
              className="w-full bg-black/30 border border-purple-900/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-400"
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
