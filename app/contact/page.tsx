"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { toast } from "sonner";

export default function ContactPage() {
  // NEW: Add state for form handling
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  // NEW: Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // NEW: Custom form submission handler
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus("idle");
    setErrorMsg("");

    try {
      // MARKED CHANGE: Replace this with your actual API endpoint/backend logic
      // Example: const response = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });

      // Simulate API call delay (2 seconds)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Simulate success (remove this and use real validation)
      if (
        formData.name &&
        formData.email &&
        formData.phone &&
        formData.message
      ) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" }); // Reset form
      } else {
        throw new Error("Please fill all fields");
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMsg(
        error instanceof Error ? error.message : "Something went wrong!",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact The <span className="text-teal-600">Micro</span>be Lab
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Get in touch with us for bookings, queries, or support. We're here
              to help 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 lg:sticky lg:top-20 h-fit">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>

              {/* NEW: Success/Error Messages */}
              {submitStatus === "success" && (
                <Card className="mb-6 p-4 bg-green-50 border-green-200">
                  <div className="flex items-center text-green-800">
                    <CheckCircle className="h-5 w-5 mr-2" />
                    <span>
                      Thank you! Your message has been sent successfully. We'll
                      respond within 24 hours.
                    </span>
                  </div>
                </Card>
              )}

              {submitStatus === "error" && (
                <Card className="mb-6 p-4 bg-red-50 border-red-200">
                  <div className="flex items-center text-red-800">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    <span>{errorMsg}</span>
                  </div>
                </Card>
              )}

              {/* MODIFIED: Form with onSubmit and controlled inputs */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="h-12"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="h-12"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 98765 43210"
                    className="h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    required
                  />
                </div>
                {/* MODIFIED: Submit button with loading state */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>Sending...</>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </Card>
            {/* <Card className="p-8 lg:sticky lg:top-20 h-fit">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input placeholder="Enter your name" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="h-12"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="+91 98765 43210" className="h-12" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell us how we can help you..."
                    rows={5}
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card> */}

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Get in Touch
                </h2>
                <p className="text-xl text-gray-600">
                  Reach out anytime. We're always ready to help.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-teal-100">
                      <Phone className="h-6 w-6 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Phone</h3>
                      <p className="text-gray-600">+91 9319098833</p>
                      <p className="text-gray-600">+0124 4270582</p>
                      <p className="text-gray-600 text-sm">
                        24/7 Customer Support
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
                      <Mail className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email</h3>
                      <p className="text-gray-600">ccg@themicrobe.in</p>
                      <p className="text-gray-600 text-sm">
                        Response within 24 hours
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
                      <MapPin className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Address</h3>
                      <p className="text-gray-600">
                        The Microbe Lab,
                        <br />
                        819 - P, 1st Floor, Sector 47 Off, Netaji Subhash Marg,
                        <br />
                        Gurugram, Haryana 122018
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Working Hours
                      </h3>
                      <p className="text-gray-600">
                        Mon - Sat: 8:00 AM - 8:00 PM
                        <br />
                        Sun: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Us Here
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Visit our main lab in Delhi or book home collection anywhere in
              the city.
            </p>
          </div>
          <Card className="overflow-hidden shadow-xl">
            <iframe
              //   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.232566335951!2d77.20902131531642!3d28.61393998248206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce36e6f5bfd6d%3A0xaaa8f6e1c1d5a7d5!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1630000000000"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1796422.7068666113!2d77.045566!3d28.430175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d580132bd3%3A0x81aa30c72074562d!2sThe%20Microbe%20Lab!5e0!3m2!1sen!2sin!4v1771758957669!5m2!1sen!2sin"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready for Your Health Check?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book tests online or contact us for personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/tests">
              <Button
                size="lg"
                className="bg-white text-teal-600 hover:bg-gray-100 cursor-pointer"
              >
                Book Tests
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-teal-600 hover:bg-teal-600 hover:text-white cursor-pointer"
            >
              Call Now: +91-9319098833
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
