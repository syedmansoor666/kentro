"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BrandShowcase from "@/components/BrandShowcase";
import ProblemSolver from "@/components/ProblemSolver";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import AreasServed from "@/components/AreasServed";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BookingModal from "@/components/BookingModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState("Kent");
  const [selectedIssue, setSelectedIssue] = useState("General RO Service / Repair");

  const openBooking = (brand = "Kent", issue = "General RO Service / Repair") => {
    setSelectedBrand(brand);
    setSelectedIssue(issue);
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    openBooking("Kent", serviceName);
  };

  const handleSelectBrand = (brandName: string) => {
    openBooking(brandName, `${brandName} RO Doorstep Service & Inspection`);
  };

  const handleSelectProblem = (problemName: string) => {
    openBooking("Kent", problemName);
  };

  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      {/* Navigation Header */}
      <Navbar onBookClick={() => openBooking("Kent", "General RO Service / Repair")} />

      {/* Hero Section with 3D Realistic Kent RO View */}
      <HeroSection onBookClick={() => openBooking("Kent", "General RO Service / Repair")} />

      {/* Complete RO Services Section */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Specialized Kent & Pureit Showcase */}
      <BrandShowcase onSelectBrand={handleSelectBrand} />

      {/* Common RO Problems We Fix */}
      <ProblemSolver onSelectProblem={handleSelectProblem} />

      {/* Why Choose Bangalore RO Care */}
      <WhyChooseUs />

      {/* How Our Service Works (5-Step Timeline) */}
      <HowItWorks />

      {/* Areas We Serve in Bangalore */}
      <AreasServed />

      {/* Frequently Asked Questions */}
      <FaqSection />

      {/* Final Call to Action */}
      <FinalCta onBookClick={() => openBooking("Kent", "General RO Service / Repair")} />

      {/* Footer with SEO & Disclaimers */}
      <Footer />

      {/* Floating Circular WhatsApp Button (Desktop + Mobile) */}
      <FloatingWhatsApp />

      {/* Mobile-Only Sticky Bottom Call & Booking Bar */}
      <MobileBottomBar />

      {/* Interactive Quick Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialBrand={selectedBrand}
        initialIssue={selectedIssue}
      />
    </main>
  );
}
