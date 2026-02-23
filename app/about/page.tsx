import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Users,
  Shield,
  Heart,
  Target,
  Clock,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-teal-600">Micro</span>be
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The{" "}
              <span className="font-bold">
                <span className="text-teal-600">Micro</span>be
              </span>{" "}
              is a multi-specility diagnostic laboratory established by a group
              of women enterpreneurs under the leadership of{" "}
              <span className="font-bold">Dr. Sharayu Gaikwad</span> and{" "}
              <span className="font-bold">Ms Vinita Dhoot</span>. It provides a
              wide spectrum of diagnostic test encompassing Biochemistry,
              Microbiology, Cytopathology, Histopathology, Immunology etc with
              reliable and highly accurate reports. We believe in open
              communication and are available with a willing ear for report
              discussion
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/tests">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto"
                >
                  Browse Tests
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Founded in 2021, HealthLab Diagnostic is a forward-thinking
                healthcare company passionate about simplifying diagnostics
                through innovative technology and patient-centric
                services.[web:1][web:9] We bridge traditional medical practices
                with modern digital solutions, serving millions across India
                with accurate, affordable testing.[web:7]
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From home sample collection to fast digital reports, we're
                committed to quality backed by NABL certification and
                state-of-the-art labs.[web:16]
              </p>
              <Link href="/tests">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700">
                  Get Tested Today
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-teal-100 to-blue-100 h-96 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-32 h-32 text-teal-600 mx-auto mb-4" />
                  <p className="text-3xl font-bold text-gray-900">
                    NABL Certified
                  </p>
                  <p className="text-gray-600">Highest Quality Standards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Our Purpose
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Target className="w-16 h-16 text-teal-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-lg text-gray-600">
                To provide comprehensive, innovative diagnostic services that
                empower people to take control of their health with accessible,
                accurate testing.
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <Heart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-lg text-gray-600">
                To be India's leading diagnostic network, transforming
                healthcare through technology, quality, and care for every
                community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Patient First",
                color: "bg-teal-100",
                iconColor: "text-teal-600",
                desc: "Your health is our top priority with personalized, compassionate care.",
              },
              {
                icon: Shield,
                title: "Quality Excellence",
                color: "bg-green-100",
                iconColor: "text-green-600",
                desc: "NABL certified processes ensure precision and reliability every time.",
              },
              {
                icon: Zap,
                title: "Innovation Driven",
                color: "bg-blue-100",
                iconColor: "text-blue-600",
                desc: "Cutting-edge technology for faster results and better insights.",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${value.color} mb-4 mx-auto`}
                >
                  <value.icon size={32} className={value.iconColor} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Join Thousands Trusting HealthLab
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Experience reliable diagnostics with home collection and expert
            support.
          </p>
          <Link href="/tests">
            <Button
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100"
            >
              Book Your Test
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
