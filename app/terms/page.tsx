import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  FileText,
  ShieldCheck,
  Scale,
  ArrowRight,
} from "lucide-react";

export default function TermsConditionsPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 mb-6 mx-auto">
              <FileText className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Terms Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto prose prose-lg max-w-none">
            {/* Introduction */}
            <Card className="p-8 mb-12 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Welcome to The Microbe Lab
              </h2>
              <p className="text-lg mb-4">
                These Terms and Conditions ("Terms") govern your use of The
                Microbe Lab website (themicrobe.in) and services ("Services").
                By accessing our website or using our Services, you agree to be
                bound by these Terms.
              </p>
              <p className="text-lg font-bold text-red-600 uppercase tracking-wide mb-4">
                IF YOU DO NOT AGREE, PLEASE DO NOT USE OUR SERVICES.
              </p>
              <p className="text-lg">
                HealthLab Diagnostics reserves the right to modify these Terms
                at any time. Changes will be effective upon posting.
              </p>
            </Card>

            {/* 1. Services Overview */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              1. Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Diagnostic Testing
                </h3>
                <p className="text-md text-gray-700">
                  HealthLab provides diagnostic testing services including blood
                  tests, health checkups, and home sample collection across
                  Gurgaon and surrounding areas.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  NABL Certified
                </h3>
                <p className="text-md text-gray-700">
                  All our laboratories are NABL certified ensuring highest
                  quality standards and accurate results.
                </p>
              </Card>
            </div>

            {/* 2. User Eligibility & Account */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              2. User Eligibility & Account
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              You must be 18 years or older to use our Services. By using our
              Services, you represent that you meet this requirement. All
              information provided during registration must be accurate and
              complete.
            </p>

            {/* 3. Disclosure of Personal Information */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              3. Disclosure of Personal Information
            </h2>
            <p className="text-md text-gray-700 mb-6">
              You agree and confirm that we do not rent, sell, or share Personal
              Information about you with other people (save with your consent)
              or non-affiliated companies except under the following
              circumstances:
            </p>

            <div className="space-y-4 mb-12">
              <Card className="p-6 bg-blue-50 border-blue-200 pl-8">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-700 text-md mt-1 w-6 flex-shrink-0">
                    a.
                  </span>
                  <p className="text-md text-gray-700">
                    to provide the Personal Information to transplant
                    physicians/treating doctors and other authorized health care
                    professionals who need to access your personal information
                    for Lab testing check & Medical history verification (if
                    required);
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200 pl-8">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-700 text-md mt-1 w-6 flex-shrink-0">
                    b.
                  </span>
                  <p className="text-md text-gray-700">
                    to respond to summons, court orders, or legal process, or to
                    establish or exercise our legal rights or defend against
                    legal claims;
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200 pl-8">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-700 text-md mt-1 w-6 flex-shrink-0">
                    c.
                  </span>
                  <p className="text-md text-gray-700">
                    to health department or any other Government body as and
                    when required by them for collecting or processing health
                    information of the state/country;
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200 pl-8">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-700 text-md mt-1 w-6 flex-shrink-0">
                    d.
                  </span>
                  <p className="text-md text-gray-700">
                    from time to time, to reveal general statistical information
                    about our Website and visitors, such as number of visitors,
                    number and type of services purchased, etc;
                  </p>
                </div>
              </Card>

              <Card className="p-6 bg-blue-50 border-blue-200 pl-8">
                <div className="flex items-start gap-3">
                  <span className="font-bold text-blue-700 text-md mt-1 w-6 flex-shrink-0">
                    e.
                  </span>
                  <p className="text-md text-gray-700">
                    to transfer Personal Information about you to trusted
                    partners, may or may not for gain, to promote certain
                    products/services for commercial purposes, without any prior
                    notice to you.
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-teal-50 border-teal-200 mb-12">
              <p className="text-md font-semibold text-gray-900 mb-3">
                Further, you agree that we may share your Personal Information
                with the following categories of activities from time-to-time:
              </p>
              <ul className="text-md text-gray-700 space-y-1 list-disc list-inside">
                <li>Advertisements and promotional partners</li>
                <li>Service providers for order fulfillment</li>
                <li>Legal and regulatory compliance</li>
              </ul>
            </Card>

            {/* 4. Payments & Cancellation */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              4. Payments & Cancellation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Payment Security
                </h3>
                <p className="text-gray-600">
                  All payments processed through secure SSL encrypted gateways.
                  We do not store credit card information.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Cancellation Policy
                </h3>
                <p className="text-gray-600">
                  Free cancellation up to 2 hours before scheduled sample
                  collection. Standard refund processing within 7 days.
                </p>
              </Card>
            </div>

            {/* 5. Results & Reports */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              5. Test Results & Reports
            </h2>
            <p className="text-md text-gray-700 mb-6">
              Results typically available within 24-48 hours. Reports accessible
              via patient portal. Results are for informational purposes;
              consult your physician for medical advice.
            </p>

            {/* 6-10 Legal Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <ShieldCheck className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">
                    6. Limitation of Liability
                  </h3>
                </div>
                <p className="text-gray-600">
                  HealthLab not liable for indirect damages or misuse of test
                  results.
                </p>
              </Card>
              <Card className="p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Scale className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <h3 className="text-lg font-bold text-gray-900">
                    7. Governing Law
                  </h3>
                </div>
                <p className="text-gray-600">
                  Indian laws, New Delhi jurisdiction.
                </p>
              </Card>
            </div>

            {/* Contact Section */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              Contact Information
            </h2>
            <Card className="p-8 bg-gradient-to-br from-teal-50 to-blue-50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Support
                  </h3>
                  <p className="text-lg font-semibold text-teal-700 mb-2">
                    ccg@themicrobe.in
                  </p>
                  <p className="text-md text-gray-600">+91-9319098833</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Address
                  </h3>
                  <p className="text-md text-gray-600">
                    The Microbe Lab
                    <br />
                    819 - P, 1st Floor, Sector 47 Off, Netaji Subhash Marg
                    <br />
                    Gurugram, Haryana 122018
                  </p>
                </div>
              </div>
            </Card>

            {/* Footer Note */}
            <div className="bg-teal-50 border-t-4 border-teal-400 p-8 rounded-lg mt-16">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Last Updated: February 22, 2026
              </p>
              <p className="text-gray-700">
                © 2026 HealthLab Diagnostics. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Book Your Tests?</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Trusted diagnostics with home collection. Fast, accurate results.
          </p>
          <Link href="/tests">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 cursor-pointer"
            >
              Browse Tests
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
