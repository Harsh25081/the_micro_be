"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-2xl font-bold text-teal-400 mb-4">HealthLab</h3> */}
            <img src="/Microbe-Logo-1.png" alt="The Microbe" width={200} />
            <p className="text-gray-400">
              The Microbe is a multi-speciality diagnostic laboratory that is
              equipped to handle all types of laboratory investigations to the
              highest standard.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/tests"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Tests
                </Link>
              </li>
              <li>
                <Link
                  href="/packages"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-teal-400 transition"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-teal-400">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                Address:
                <Link
                  href="https://maps.app.goo.gl/Wd5Pz4zWwuNKSkDR8"
                  target="_blank"
                  className="no-underline hover:underline"
                >
                  The Microbe Lab, 819 - P, 1st Floor, Sector 47 Off, Netaji
                  Subhash Marg, Gurugram, Haryana 122018
                </Link>
              </li>
              <li>Email: ccg@themicrobe.in</li>
              <li>Phone: +91-9319098833</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} HealthLab. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-teal-400 transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
