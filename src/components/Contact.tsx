import React from "react";
import { Mail, Phone, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-16">
      <div className="animate-fade-in text-center">
        <h3 className="text-2xl font-bold mb-8">Let's Connect</h3>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
          {/* I'm always interested in discussing new opportunities, innovative projects, 
          or just connecting with fellow developers. Feel free to reach out! */}
        </p>
        <div className="flex flex-col md:flex-row md:space-y-0  justify-center   gap-6 mb-8">
          <a
            href="mailto:yesslandolsi@email.com"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors hover-scale"
          >
            <Mail size={20} />
            yesslandolsi@email.com
          </a>
          <a
            href="tel:+21625202909"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors hover-scale"
          >
            <Phone size={20} />
            +216 25 202 909
          </a>
        </div>
        <div className="flex justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/mohamed-yassine-landolsi-137657284/"
            className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors hover-scale"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://github.com/Ylandolsi"
            className="p-3 border border-gray-200 rounded-full hover:bg-gray-50 transition-colors hover-scale"
          >
            <Github size={20} />
          </a>
          <a
            href="cv.pdf"
            download="Med_Yassine_Landolsi_CV.pdf"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors hover-scale"
          >
            <Download size={20} />
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
