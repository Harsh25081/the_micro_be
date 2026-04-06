import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Home,
  Zap,
  Award,
  Clock,
  Download,
  User,
  Shield,
  Stethoscope,
  Heart,
  Target,
  Star,
  MapPin,
  Phone,
  Mail,
  Quote,
  Microscope,
  FlaskConical,
  Dna,
  TestTube,
  Activity,
  ShieldCheck,
  ScanLine,
  ClipboardList,
} from "lucide-react";
import { allTests } from "@/lib/tests";
import Image from "next/image";

const departments = [
  {
    icon: Activity,
    title: "Hematology",
    desc: "CBC, ESR, Hemoglobin, RBC/WBC/Platelets analysis",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: FlaskConical,
    title: "Biochemistry",
    desc: "Blood sugar, liver, kidney function, lipid profile",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Microscope,
    title: "Microbiology",
    desc: "Bacteria, virus detection, culture & sensitivity",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: ShieldCheck,
    title: "Serology / Immunology",
    desc: "Antibody tests like HIV, dengue, COVID-19",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: ScanLine,
    title: "Histopathology",
    desc: "Biopsy analysis & cancer diagnosis",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: TestTube,
    title: "Cytology",
    desc: "Cell studies like Pap smear & FNAC",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: ClipboardList, // ⚠️ need to import this too
    title: "Clinical Pathology",
    desc: "Routine urine, stool & body fluid tests",
    color: "bg-teal-100 text-teal-600",
  },
  {
    icon: Dna,
    title: "Molecular Biology / PCR",
    desc: "DNA/RNA testing & advanced RT-PCR",
    color: "bg-teal-100 text-teal-600",
  },
];

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1. Hero Section - UPDATED */}
      <section className="bg-gradient-to-r from-teal-50 to-blue-50 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center opacity-5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Health, Our Priority
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get accurate health tests with home collection. Fast results,
              trusted diagnostics, NABL certified labs, and affordable packages
              across Gurgaon.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/tests">
                <Button
                  size="lg"
                  className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto shadow-lg"
                >
                  Browse Tests
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link href="/packages">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white w-full sm:w-auto"
                >
                  View Packages
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base text-gray-600">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span>NABL Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-600" />
                <span>24-48 Hrs Results</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-blue-600" />
                <span>Home Collection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Trusted By Section */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 text-center">
          {/* Image */}
          <div className="relative w-full max-w-full mx-auto h-[250px] md:h-[300px]">
            <Image
              src="/companies.png"
              alt="Trusted Companies"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>

      {/* Updated Popular Tests - KEPT */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Popular Health Tests
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* [
              {
                title: "Complete Blood Count",
                desc: "Comprehensive blood analysis including RBC, WBC, platelets and more",
                price: "₹299",
              },
              {
                title: "Thyroid Profile",
                desc: "TSH, T3, T4 tests to check thyroid function and health",
                price: "₹599",
              },
              {
                title: "Lipid Profile",
                desc: "Cholesterol levels, triglycerides and heart health markers",
                price: "₹399",
              },
            ] */}
            {allTests.map((test, index) => (
              <Card key={index} className="p-8 hover:shadow-xl group">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">
                  {test.name}
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {test.description}
                </p>
                <div className="flex items-end justify-between">
                  <span className="text-4xl font-bold text-teal-600">
                    ₹{test.price}
                  </span>
                  <Link href={`/tests/${test.id}`}>
                    <Button
                      size="lg"
                      className="bg-teal-600 hover:bg-teal-700 shadow-lg px-8"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Features Section - UPDATED */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Why Choose The <span className="text-teal-600">Micro</span>
            <span className="text-blue-600">be</span>?
          </h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Trusted diagnostics with cutting-edge technology and expert
            pathologists
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-teal-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Home
                  size={36}
                  className="text-teal-600 group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Home Collection
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Phlebotomists visit your home at convenient time
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Zap
                  size={36}
                  className="text-blue-600 group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Fast Results
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Digital reports in 24-48 hours via patient portal
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <Award
                  size={36}
                  className="text-green-600 group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                NABL Certified
              </h3>
              <p className="text-gray-600 leading-relaxed">
                ISO & NABL accredited laboratories
              </p>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl transition-all group">
              <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <Clock
                  size={36}
                  className="text-purple-600 group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                24/7 Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock assistance for all queries
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW 1: Download Reports Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-teal-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We'll Ensure You Always Get The{" "}
              <span className="text-teal-600">Best Results</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access your test reports anytime, anywhere. Track your health
              journey with digital reports.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 text-center hover:shadow-xl group">
              <Download className="w-20 h-20 text-teal-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Download Reports
              </h3>
              <p className="text-gray-600 mb-6">
                Instant PDF download from patient portal
              </p>
              <Button className="bg-teal-600 hover:bg-teal-700 w-full md:w-auto">
                <Link
                  href="https://crm.themicrobe.in/Account/SignIn.aspx?_gl=1*ajhyuh*_ga*ODU4NzQ0MTA1LjE3NzE3NTEwODQ.*_ga_D1ZZ1PRK9J*czE3NzE3NzIyNjIkbzQkZzEkdDE3NzE3NzY2MDYkajYwJGwwJGgw"
                  target="_blank"
                >
                  Download Now
                </Link>
              </Button>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl group">
              <User className="w-20 h-20 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Patient Portal
              </h3>
              <p className="text-gray-600 mb-6">
                24/7 access to all your medical reports
              </p>
              <Button
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50 w-full md:w-auto"
              >
                <Link
                  href="https://crm.themicrobe.in/Account/SignIn.aspx?_gl=1*ajhyuh*_ga*ODU4NzQ0MTA1LjE3NzE3NTEwODQ.*_ga_D1ZZ1PRK9J*czE3NzE3NzIyNjIkbzQkZzEkdDE3NzE3NzY2MDYkajYwJGwwJGgw"
                  target="_blank"
                >
                  Login
                </Link>
              </Button>
            </Card>
            <Card className="p-8 text-center hover:shadow-xl group">
              <Shield className="w-20 h-20 text-green-600 mx-auto mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                Secure Access
              </h3>
              <p className="text-gray-600 mb-6">
                Bank-level encryption for your data
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 w-full md:w-auto">
                Learn More
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW 2: Our Departments */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive diagnostic services under one roof
            </p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="p-8 hover:shadow-xl group">
                <div
                  className={`w-20 h-20 ${dept.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-all`}
                >
                  <dept.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  {dept.title}
                </h3>
                <p className="text-gray-600 text-center">{dept.desc}</p>
              </Card>
            ))}
          </div> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all group border border-gray-100"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-105 transition">
                  <dept.icon size={28} className="text-teal-600" />
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 text-center">
                  {dept.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed text-center">
                  {dept.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW 3: Expert Team */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              <span className="text-teal-600">Micro</span>
              <span className="text-blue-600">be </span> Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Get One Step Ahead Of Disease
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Sharayu gaikwad",
                role: "Director",
                exp: "10+ Years",
                img: "sharayu-gaikwad.jpeg",
              },
              {
                name: "Ms. Vinita Dhoot",
                role: "Director",
                exp: "10+ Years",
                img: "vinita-dhoot.jpeg",
              },
              {
                name: "Dr. C. V. Nerikar",
                role: "CEO & M.D",
                exp: "10+ Years",
                img: "nerikar.jpg",
              },
            ].map((doctor, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-2xl group bg-white/70 backdrop-blur-sm gap-4"
              >
                <div className="w-50 h-50 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-4xl group-hover:scale-110 transition-all overflow-hidden">
                  <img src={doctor.img} alt={doctor.name} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {doctor.name}
                </h3>
                <p className="text-teal-600 font-semibold">{doctor.role}</p>
                <p className="text-lg text-gray-600">{doctor.exp} Experience</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW 4: Our Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-teal-600">Expertise</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
            <Card className="p-8 lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">500K+</h3>
              <p className="text-3xl font-bold text-teal-600 mb-4">
                Tests Performed
              </p>
              <p className="text-gray-600">Across all major categories</p>
            </Card>
            <Card className="p-8 lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">50+</h3>
              <p className="text-3xl font-bold text-blue-600 mb-4">
                Expert Pathologists
              </p>
              <p className="text-gray-600">MBBS, MD qualified professionals</p>
            </Card>
            <Card className="p-8 lg:col-span-1">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">100K+</h3>
              <p className="text-3xl font-bold text-purple-600 mb-4">
                Happy Customers
              </p>
              <p className="text-gray-600">Trusted across Delhi NCR</p>
            </Card>
          </div>
        </div>
      </section>

      {/* NEW 5: Why People Trust Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why People <span className="text-teal-600">Trust</span> Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Accurate Results",
                desc: "99.9% accuracy rate verified by NABL",
                color: "bg-yellow-100 text-yellow-600",
              },
              {
                icon: Shield,
                title: "Certified Labs",
                desc: "Fully NABL & ISO accredited facilities",
                color: "bg-green-100 text-green-600",
              },
              {
                icon: Clock,
                title: "Fast Delivery",
                desc: "Reports in 24-48 hours guaranteed",
                color: "bg-blue-100 text-blue-600",
              },
              {
                icon: Heart,
                title: "Patient First",
                desc: "100% satisfaction or money back",
                color: "bg-red-100 text-red-600",
              },
            ].map((trust, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl group border-t-4 border-teal-500"
              >
                <div
                  className={`w-16 h-16 ${trust.color} rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all`}
                >
                  <trust.icon size={28} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                  {trust.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {trust.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW 6: Brand Image Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Left Content */}
            <div className="col-span-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                Experience the Future of{" "}
                <span className="text-teal-600">Diagnostics</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Advanced microbiology-driven diagnostics with precision, speed,
                and reliability. Designed to give you clarity and confidence in
                your health decisions.
              </p>
              <Link href="/tests">
                <Button className="bg-teal-600 hover:bg-teal-700 px-8 py-6 text-lg">
                  Explore Tests
                </Button>
              </Link>
            </div>

            {/* Right Image */}
            <div className="relative w-full h-[300px] md:h-[400px] col-span-3">
              <Image
                src="/themicrobe_ranking.png" // 👈 put your image name here
                alt="Diagnostics Illustration"
                fill
                className="object-cover rounded-2xl shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* NEW 7 Testimonials */}
      <section className="py-20 bg-gradient-to-b from-teal-600 to-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              TESTIMONIALS
            </h2>
            <p className="text-2xl opacity-90 max-w-2xl mx-auto">
              What our patients say about us
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "Exceptional service! Home collection was on time and reports came in 24 hours. Highly recommended!",
                name: "Priya S.",
                rating: 5,
                image: "/testimonials/testimonial1.jpg",
              },
              {
                quote:
                  "NABL certified quality at affordable prices. My entire family uses HealthLab now.",
                name: "Rajesh K.",
                rating: 4,
                image: "/testimonials/testimonial2.jpg",
              },
              {
                quote:
                  "Professional phlebotomist and accurate thyroid test results. Will use again!",
                name: "Neha G.",
                rating: 5,
                image: "/testimonials/testimonial3.jpg",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="relative overflow-hidden p-8 border-0 rounded-2xl group"
              >
                {/* Background Image */}
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />

                {/* Dark Overlay (IMPORTANT for readability) */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-6 w-6 text-yellow-300 fill-yellow-300"
                      />
                    ))}
                  </div>

                  <Quote className="h-10 w-10 text-white/80 mb-6" />

                  <p className="text-xl mb-6 italic leading-relaxed text-white">
                    "{testimonial.quote}"
                  </p>

                  <div className="text-right">
                    <p className="font-bold text-lg text-white">
                      - {testimonial.name}
                    </p>
                  </div>
                </div>
              </Card>
              // <Card
              //   key={index}
              //   className="p-8 bg-white/20 backdrop-blur-lg border-0 hover:bg-white/30 transition-all"
              // >
              //   <div className="flex mb-6">
              //     {[...Array(testimonial.rating)].map((_, i) => (
              //       <Star
              //         key={i}
              //         className="h-6 w-6 text-yellow-300 fill-yellow-300"
              //       />
              //     ))}
              //   </div>
              //   <Quote className="h-10 w-10 text-white/70 mb-6 opacity-75" />
              //   <p className="text-xl mb-6 italic leading-relaxed">
              //     "{testimonial.quote}"
              //   </p>
              //   <div className="text-right">
              //     <p className="font-bold text-lg">- {testimonial.name}</p>
              //   </div>
              // </Card>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Why Us Full Width Section */}
      <section className="w-full">
        <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px]">
          <Image
            src="/why_us.png"
            alt="Why Choose TheMicrobe"
            fill
            className="object-cover"
            priority
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </div>
      </section>

      {/* CTA Section - ENHANCED */}
      {/* <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Ready to Get Tested?
            </h2>
            <p className="text-2xl mb-12 opacity-90 leading-relaxed">
              Book now and experience reliable diagnostics with home collection
              service
            </p>
            <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
              <Link href="/tests">
                <Button
                  size="lg"
                  className="border border-teal-600 bg-white text-teal-700 hover:bg-teal-600 text-2xl hover:text-white px-12 py-8 shadow-2xl cursor-pointer"
                >
                  Start Booking
                  <ArrowRight className="ml-3 h-8 w-8" />
                </Button>
              </Link>
              <div className="flex flex-wrap gap-6 justify-center text-lg font-semibold">
                <span>📞 +91-9319098833</span>
                <span>✉️ ccg@themicrobe.in</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
