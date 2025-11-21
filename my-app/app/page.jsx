"use client";
import CarCard from "@/components/car-card";
import { Button } from "@/components/ui/button";
import { carMakes, featuredCars, bodyTypes, faqItems } from "@/lib/data";
import { ChevronRight, Car, Calendar, Shield, Sparkles, Search, Calculator, ShieldCheck } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="pt-20 flex flex-col">
      {/* Hero Section */}

      <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-blue-100 text-blue-700 text-sm font-medium backdrop-blur-lg">
              <Sparkles className="h-4 w-4" /> AI‑Powered Smart Platform
            </span>
            <h1 className="text-4xl md:text-6xl mb-4 gradient">
              Find Your Perfect Car with AutoVerge AI
            </h1>
            <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
              Explore your ideal car with AI-powered matching and quick results.
            </p>
          </div>

          {/*Search*/}
        </div>
      </section>

      {/* Featured Cars */} 
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Make */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Make</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {carMakes.map((make) => (
              <Link
                key={make.name}
                href={`/cars?make=${make.name}`}
                className="bg-white rounded-lg shadow p-4 text-center hover:shadow-md transition cursor-pointer"
              >
                <div className="h-16 w-auto mx-auto mb-2 relative">
                  <Image
                    src={
                      make.imageUrl || `/make/${make.name.toLowerCase()}.webp`
                    }
                    alt={make.name}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <h3 className="font-medium">{make.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

  {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why We Stand Out
          </h2>
          
         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transition">
<div className="bg-blue-100 text-blue-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
<Search className="h-8 w-8" />
</div>
<h3 className="text-xl font-bold mb-3">Smart Search & Recommendations</h3>
<p className="text-gray-600">
Explore vehicles using image-based search and smart recommendations that perfectly match your preferences.
</p>
</div>

            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transition">
              <div className="bg-indigo-100 text-indigo-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">EMI Calculator</h3>
              <p className="text-gray-600">
                Calculate your monthly loan payments using the integrated EMI calculator before making a purchase decision.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-2xl transition">
              <div className="bg-emerald-100 text-emerald-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Blue‑T Grading & Price Analysis</h3>
              <p className="text-gray-600">
                View Blue‑T graded vehicle conditions and AI‑based price analysis to ensure transparency and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Body Type */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Browse by Body Type</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bodyTypes.map((type) => (
              <Link
                key={type.name}
                href={`/cars?bodyType=${type.name}`}
                className="relative group cursor-pointer"
              >
                <div className="overflow-hidden rounded-lg flex justify-end h-28 mb-4 relative">
                  <Image
                    src={
                      type.imageUrl || `/body/${type.name.toLowerCase()}.webp`
                    }
                    alt={type.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent rounded-lg flex items-end">
                  <h3 className="text-white text-xl font-bold pl-4 pb-2 ">
                    {type.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section with Accordion */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 dotted-background text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Begin Your Journey To The Right Car
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Find your ideal car using intelligent search, trusted Blue-T grading, and accurate AI-based price estimates for a safe and confident buying experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/cars">View All Cars</Link>
            </Button>
            <SignedOut>
              <Button size="lg" asChild>
                <Link href="/sign-up">Sign Up Now</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </section>
    </div>
  );
}
