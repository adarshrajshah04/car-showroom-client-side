import React from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";

const showroomLinks = [
  { name: "Collection", path: "/collection" },
  { name: "Brands", path: "/brands" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const companyLinks = [
  { name: "About ARS", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy Policy", path: "/privacy" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-light-text border-t border-border/20">

      {/* Main Footer */}
      <div className="px-6 md:px-12 lg:px-20 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl tracking-[8px]">
              ARS
            </h2>

            <p className="mt-8 max-w-xs text-sm leading-6 text-dark-text">
              A curated collection of exceptional luxury and
              performance automobiles, selected for those who
              appreciate design, performance and timeless elegance.
            </p>

            {/* Newsletter */}
            <div className="mt-10">
              <p className="text-[10px] tracking-[4px] text-gray-light">
                ARRIVALS BRIEF
              </p>

              <div className="mt-4 flex items-center w-full max-w-sm h-12 rounded-full border border-border/20 px-2">

                <input
                  type="email"
                  placeholder="you@email.com"
                  className="flex-1 bg-transparent outline-none px-4 text-sm text-light-text placeholder:text-dark-text"
                />

                <button
                  className="w-9 h-9 rounded-full bg-light-text text-primary flex items-center justify-center"
                >
                  <FaArrowRight />
                </button>

              </div>
            </div>
          </div>


          {/* Showroom */}
          <div>
            <h3 className="text-xs tracking-[4px] text-gray-light">
              SHOWROOM
            </h3>

            <div className="mt-7 flex flex-col gap-4">

              {showroomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                 data-cursor=''
                  className="w-fit text-sm text-dark-text hover:text-light-text transition-colors"
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </div>


          {/* Company */}
          <div>
            <h3 className="text-xs tracking-[4px] text-gray-light">
              COMPANY
            </h3>

            <div className="mt-7 flex flex-col gap-4">

              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  className="text-sm text-dark-text hover:text-light-text transition-colors"
                >
                  {link.name}
                </Link>
              ))}

            </div>
          </div>


          {/* Contact */}
          <div>
            <h3 className="text-xs tracking-[4px] text-gray-light">
              CONTACT
            </h3>

            <div className="mt-7 flex flex-col gap-4 text-sm text-dark-text">

              <p>Mumbai, India</p>

              <p>+91 XXXXX XXXXX</p>

              <p>hello@ars.com</p>

            </div>

            {/* Social */}
            <div className="flex gap-3 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center hover:bg-light-text hover:text-primary transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center hover:bg-light-text hover:text-primary transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-border/20 flex items-center justify-center hover:bg-light-text hover:text-primary transition"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

        </div>
      </div>


      {/* Bottom */}
      <div className="border-t border-border/20 px-6 md:px-12 lg:px-20 py-7 flex flex-col md:flex-row justify-between gap-4 text-xs text-dark-text">

        <p>
          © 2026 ARS. All rights reserved.
        </p>

        <p>
          Exceptional automobiles · Exceptional experience
        </p>

      </div>

    </footer>
  );
};

export default Footer;