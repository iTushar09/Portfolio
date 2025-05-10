import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

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

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-black/50 p-6 rounded-lg border border-purple-900/30 text-center">
            <Mail className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400">tusharchaudhari1809@gmail.com</p>
          </div>

          <div className="bg-black/50 p-6 rounded-lg border border-purple-900/30 text-center">
            <Phone className="w-8 h-8 text-teal-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
            <p className="text-gray-400">+91-782-184-8265</p>
          </div>

          <div className="bg-black/50 p-6 rounded-lg border border-purple-900/30 text-center">
            <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Location</h3>
            <p className="text-gray-400">Maharashtra</p>
          </div>
        </div>

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