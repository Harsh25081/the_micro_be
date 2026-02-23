import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowLeft,
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-100 mb-6 mx-auto">
              <Shield className="w-10 h-10 text-teal-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Your privacy matters. Learn how we collect, use, and protect your
              personal information.
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

      {/* Policy Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto prose prose-lg max-w-none">
            {/* Introduction */}
            <Card className="p-8 mb-12 shadow-lg">
              <p className="text-md mb-4">
                This privacy policy ("Privacy Policy") sets forth our commitment
                to respect your online privacy and recognize your need for
                appropriate protection and management of any Personal
                Information (as defined below) you share with us. The Privacy
                Policy applies to our Services available under the domain{" "}
                <strong>themicrobe.in</strong> (hereinafter referred to as the
                "Website"). By visiting the Website, you agree to be bound by
                the terms and conditions of this Privacy Policy.
              </p>
              <p className="text-md mb-4 font-bold text-red-600 uppercase tracking-wide">
                IF YOU DO NOT AGREE PLEASE DO NOT USE OR ACCESS THE WEBSITE.
              </p>
              <p className="text-md">
                The words "you" or "your" or "User" or "Customer" as used
                herein, refer to all individuals and/or entities accessing or
                using the Website for any reason. The words "we" or "us" or
                "our" or the "Company" as used herein, refer to{" "}
                <strong>Microbe Labs</strong> and/or any permitted assignees.
              </p>
              <p>
                This Privacy Policy describes the information, as part of the
                normal operation of our Services; we collect from you and what
                may happen to that information. Although this policy may seem
                long, we have prepared a detailed policy because we believe you
                should know as much as possible about the Website, Services and
                our practices so that you can make informed decisions.
              </p>
              <p>
                By accepting the Privacy Policy and the Terms of Use, which
                prescribes terms and conditions for use of Website or availing
                Services, you expressly consent to our use and disclosure of
                your personal information in accordance with this Privacy
                Policy. This Privacy Policy is incorporated into and subject to
                the terms of the Terms of Use and the terms not defined here,
                have their meanings ascribed to in the Terms of Use. This
                Privacy Policy and Terms of Use are effective upon your visit to
                Website. We encourage you to read the terms of the Privacy
                Policy and the Terms of Use in their entirely before you use the
                Website.
              </p>
            </Card>

            {/* 1. Your Privacy – Our Commitment */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              1. Your Privacy – Our Commitment
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              We are extremely proud of our commitment to protect your privacy.
              We value your trust in us. We will work hard to earn your
              confidence so that you can enthusiastically use our services and
              recommend us to friends and family. Please read the following
              policy to understand how your Personal Information will be treated
              as you make full use of our Website.
            </p>

            {/* 2. Location Access & Information we collect */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              2. Location Access & Information we collect
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  A. Personal Information
                </h3>
                <p className="text-md text-gray-700">
                  When you use our Website & Mobile Application we collect and
                  store your Personal Information. Our primary goal in doing so
                  is to provide a safe, efficient and customized experience to
                  our Users. Importantly, we only collect Personal Information
                  about you that we consider necessary for achieving this
                  purpose.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-md font-semibold text-gray-900 mb-4">
                  B. Anonymous Browsing
                </h3>
                <p className="text-lg text-gray-700">
                  In general, you can browse the Website without telling us who
                  you are or revealing any personal information about yourself.
                  To fully use our Website, you will need to register using our
                  online registration form.
                </p>
              </Card>
            </div>

            <Card className="p-6 mb-8 bg-blue-50 border-blue-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                C. Cookies & Tracking
              </h3>
              <p className="text-md text-gray-700">
                We may automatically track certain information about you based
                upon your behavior on our Website. We use data collection
                devices such as "cookies" on certain pages of the Website to
                help analyze our web page flow, measure promotional
                effectiveness, and promote trust and safety.
              </p>
            </Card>

            <Card className="p-6 mb-8 bg-green-50 border-green-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                D. Location Data Collection
              </h3>
              <p className="text-md text-gray-700 mb-4">
                <strong>Purpose:</strong> To identify and verify user location
                for lab services, sample collection, delivery, and service
                availability.
              </p>
              <p className="text-md text-gray-700">
                <strong>Consent:</strong> Location access is collected only
                after obtaining your explicit consent. You may revoke permission
                at any time.
              </p>
            </Card>

            {/* 3. Use of your Personal Information */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              3. Use of your Personal Information
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              You agree that we may use your Personal Information to facilitate
              the services you request, customize your experience, improve our
              marketing efforts, and contact you with relevant communications.
              You may opt-out of certain communications in your profile
              settings.
            </p>

            {/* 4. Disclosure of your Personal Information */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              4. Disclosure of your Personal Information
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              We do not rent, sell, or share Personal Information about you with
              other people except: to treating doctors for lab testing; to
              respond to legal process; to government bodies; or with trusted
              partners for service fulfillment. Public postings are visible to
              others.
            </p>

            {/* 5-10. Other Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  5. Access Your Information
                </h3>
                <p className="text-gray-600">
                  Review, correct, or update your account information anytime
                  after identity verification.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  6. Third Party Links
                </h3>
                <p className="text-gray-600">
                  We are not responsible for privacy practices of linked
                  websites.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  7. Policy Changes
                </h3>
                <p className="text-gray-600">
                  We may update this policy. Changes effective upon publication.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  8. Disclaimer
                </h3>
                <p className="text-gray-600">
                  We don't store credit card data. All transactions use secure
                  SSL encryption.
                </p>
              </Card>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              9. Governing Law & 10. Assignability
            </h2>
            <p className="text-md text-gray-700 leading-relaxed mb-6">
              This Privacy Policy governed by Indian laws, subject to New Delhi
              jurisdiction. Company may assign obligations; you may not without
              consent.
            </p>

            {/* Contact & Grievance Officer */}
            <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-8 border-b-2 border-teal-200 pb-4">
              11. Contacting HealthLab & 12. Grievance Officer
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 bg-gradient-to-br from-teal-50 to-blue-50 border-teal-200">
                <div className="flex items-start gap-4 mb-4">
                  <Mail className="h-8 w-8 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      General Contact
                    </h3>
                    <p className="text-lg font-semibold text-teal-700">
                      ccg@themicrobe.in
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
                <div className="flex items-start gap-4 mb-4">
                  <Phone className="h-8 w-8 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Grievance Officer
                    </h3>
                    <p className="text-lg font-semibold text-orange-700">
                      The Microbe Lab
                    </p>
                    <p className="text-md text-gray-700">
                      819 - P, 1st Floor, Sector 47 Off, Netaji Subhash Marg
                    </p>
                    <p className="text-md text-gray-700">
                      Gurugram, Haryana 122018
                    </p>
                    <p className="text-md font-semibold text-orange-700 mt-1">
                      +91-9319098833
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      (5 AM to 9 PM on working days)
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Footer Note */}
            <div className="bg-teal-50 border-t-4 border-teal-400 p-8 rounded-lg mt-16">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Last Updated: February 22, 2026
              </p>
              <p className="text-gray-700">
                HealthLab Diagnostics reserves all rights. This policy subject
                to Terms of Use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Trustworthy Diagnostics</h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Your data is secure with us. Book your health tests with confidence.
          </p>
          <Link href="/tests">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8 cursor-pointer"
            >
              Book Tests Now
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
