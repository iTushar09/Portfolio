import React, { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Send, ExternalLink } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Tushar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:tusharchaudhri1809@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "tusharchaudhri1809@gmail.com",
      link: "mailto:tusharchaudhri1809@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/tusharchaudhari0918/",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "View my projects",
      link: "https://github.com/iTushar09",
      color: "from-gray-500 to-slate-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black/40 to-black/60 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Get in <span className="bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities and exciting projects. Let's connect!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <div className="flex items-center gap-6 p-6 bg-gradient-to-br from-black/60 to-purple-900/20 rounded-2xl border border-purple-500/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300 transform hover:scale-[1.02]">
                      <div className={`p-4 rounded-xl bg-gradient-to-r ${info.color} group-hover:shadow-lg transition-all duration-300`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-1">{info.label}</h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{info.value}</p>
                      </div>
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </div>
                  </a>
                ))}
              </div>

              {/* Additional Info */}
              <div className="p-6 bg-gradient-to-br from-black/40 to-purple-900/10 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
                <h3 className="text-xl font-semibold text-white mb-4">Let's Work Together</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  I'm passionate about creating innovative solutions at the intersection of hardware and software. 
                  Whether you're looking for embedded systems development, machine learning solutions, or full-stack web applications, I'd love to discuss how we can bring your ideas to life.
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Available for new projects and collaborations</span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-black/60 to-purple-900/20 p-8 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name"
                      required
                      className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email"
                      required
                      className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                    />
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    required
                    className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300"
                  />
                </div>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your Message"
                    rows={6}
                    required
                    className="w-full bg-black/40 border border-purple-500/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/60 focus:ring-2 focus:ring-purple-400/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-teal-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-teal-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
