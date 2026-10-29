"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Wrench, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

interface BrandShowcaseProps {
  onSelectBrand?: (brandName: string) => void;
}

export default function BrandShowcase({ onSelectBrand }: BrandShowcaseProps) {
  return (
    <section className="section" id="purifier-service">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Specialized Doorstep Support</span>
          <h2 className="section-title">
            <span className="gradient-text-cyan">RO + UV Water Purifier Service</span> & <span className="gradient-text-copper">All Major Models</span> in Bangalore
          </h2>
          <p className="section-subtitle">
            Specialized doorstep care for all major water purifier models. Our experienced technicians carry quality model-compatible replacement filters, membranes, and diagnostics.
          </p>
        </div>

        {/* Specialized Purifier Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          className="brand-grid"
        >
          {/* Card 1: RO + UV Water Purifier Service */}
          <div
            className="glass-card brand-card-inner brand-card-ro"
            style={{
              padding: "36px 30px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "30px",
              alignItems: "center",
              background: "linear-gradient(135deg, rgba(14, 28, 51, 0.9) 0%, rgba(6, 14, 26, 0.95) 100%)",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              boxShadow: "0 20px 45px -10px rgba(2, 132, 199, 0.2)",
            }}
          >
            {/* Left: Product Image */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "280px",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, transparent 70%)",
                    filter: "blur(20px)",
                    zIndex: 0,
                  }}
                />
                <Image
                  src="/images/Hero image.png"
                  alt="RO + UV Water Purifier Service in Bangalore - All Major Water Purifier Models"
                  width={260}
                  height={270}
                  style={{
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 15px 25px rgba(0, 0, 0, 0.7))",
                  }}
                />
              </div>
              <span
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                Service for All Major RO, UV & UF Water Purifier Models
              </span>
            </div>

            {/* Right: Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#38bdf8",
                  background: "rgba(14, 165, 233, 0.12)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  marginBottom: "12px",
                }}
              >
                <Sparkles size={13} /> RO + UV Purifier Specialists
              </div>

              <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#f8fafc" }}>
                RO + UV Water Purifier Service in Bangalore
              </h3>

              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "20px" }}>
                Need RO + UV water purifier repair or maintenance in Bangalore? Our experienced technicians assist with multi-stage filtration issues, quality filter replacement, membrane replacement, leakage, low water flow, and general maintenance.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "10px",
                  marginBottom: "26px",
                }}
              >
                {[
                  "Multi-Stage RO + UV Filter Service",
                  "Quality RO Membrane Replacement",
                  "High-Pressure Booster Pump Repair",
                  "UV LED & Chamber Disinfection Check",
                  "Auto-Flush & SMPS Adapter Setup",
                  "Complete Purifier Annual AMC",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20need%20RO%20%2B%20UV%20water%20purifier%20service%20at%20my%20doorstep.%20Please%20share%20technician%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "14px 28px", fontSize: "15px", borderRadius: "14px" }}
              >
                <Wrench size={18} />
                <span>BOOK RO + UV SERVICE</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Card 2: Alkaline & Mineral RO Service */}
          <div
            className="glass-card brand-card-inner brand-card-mineral"
            style={{
              padding: "36px 30px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "30px",
              alignItems: "center",
              background: "linear-gradient(135deg, rgba(30, 20, 10, 0.85) 0%, rgba(10, 15, 26, 0.95) 100%)",
              border: "1px solid rgba(245, 158, 11, 0.3)",
              boxShadow: "0 20px 45px -10px rgba(245, 158, 11, 0.15)",
            }}
          >
            {/* Left: Product Image */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "280px",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, transparent 70%)",
                    filter: "blur(20px)",
                    zIndex: 0,
                  }}
                />
                <Image
                  src="/images/Mineral & Alkaline RO image.png"
                  alt="Mineral RO Water Purifier Service in Bangalore - All Major Water Purifier Models"
                  width={250}
                  height={270}
                  style={{
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 15px 25px rgba(0, 0, 0, 0.7))",
                  }}
                />
              </div>
              <span
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                Service for Advanced Mineral, Alkaline & Multi-Stage Models
              </span>
            </div>

            {/* Right: Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#f59e0b",
                  background: "rgba(245, 158, 11, 0.12)",
                  border: "1px solid rgba(245, 158, 11, 0.25)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  marginBottom: "12px",
                }}
              >
                <Sparkles size={13} /> Mineral & Alkaline Specialists
              </div>

              <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#f8fafc" }}>
                Mineral & Alkaline RO Service in Bangalore
              </h3>

              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "20px" }}>
                Looking for mineral or alkaline water purifier service in Bangalore? Get doorstep assistance for purifier inspection, repair, cartridge replacement, maintenance, and installation.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "10px",
                  marginBottom: "26px",
                }}
              >
                {[
                  "Alkaline & Mineral Cartridge Replacement",
                  "Copper Infusion & Dispenser Care",
                  "Low Water Flow & Tank Filling Repair",
                  "Digital Purity Indicator Sensor Check",
                  "Quality RO Membrane & Carbon Filters",
                  "Complete Re-installation & Plumbing Setup",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20need%20mineral%20RO%20water%20purifier%20service%20at%20my%20doorstep.%20Please%20share%20technician%20availability."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg, #d97706 0%, #f59e0b 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px 28px",
                  borderRadius: "14px",
                  boxShadow: "0 4px 20px rgba(245, 158, 11, 0.35)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <Wrench size={18} />
                <span>BOOK MINERAL RO SERVICE</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Card 3: All Major Water Purifier Models Service */}
          <div
            className="glass-card brand-card-inner brand-card-major"
            style={{
              padding: "36px 30px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "30px",
              alignItems: "center",
              background: "linear-gradient(135deg, rgba(35, 15, 25, 0.85) 0%, rgba(15, 10, 20, 0.95) 100%)",
              border: "1px solid rgba(244, 63, 94, 0.3)",
              boxShadow: "0 20px 45px -10px rgba(244, 63, 94, 0.15)",
            }}
          >
            {/* Left: Product Image */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "280px",
                  height: "280px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(244, 63, 94, 0.25) 0%, transparent 70%)",
                    filter: "blur(20px)",
                    zIndex: 0,
                  }}
                />
                <Image
                  src="/images/All Major Water image.png"
                  alt="Water Purifier Service in Bangalore - All Major Water Purifier Models"
                  width={250}
                  height={270}
                  style={{
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 1,
                    filter: "drop-shadow(0 15px 25px rgba(0, 0, 0, 0.7))",
                  }}
                />
              </div>
              <span
                style={{
                  marginTop: "8px",
                  fontSize: "12px",
                  color: "#94a3b8",
                  fontWeight: 600,
                }}
              >
                Service for Wall-Mount, Table-Top & Under-Sink Models
              </span>
            </div>

            {/* Right: Content */}
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "#f43f5e",
                  background: "rgba(244, 63, 94, 0.12)",
                  border: "1px solid rgba(244, 63, 94, 0.25)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  marginBottom: "12px",
                }}
              >
                <Sparkles size={13} /> All Major Models Specialists
              </div>

              <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#f8fafc" }}>
                All Major Water Purifier Models Service
              </h3>

              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "20px" }}>
                Need water purifier repair or maintenance in Bangalore? Get doorstep assistance for quality filter replacement, stainless steel tank care, leakage repair, and performance tuning.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "10px",
                  marginBottom: "26px",
                }}
              >
                {[
                  "Multi-Stage Filter & Membrane Change",
                  "Stainless Steel Tank Sterilization Check",
                  "Digital Indicator & Sensor Diagnostics",
                  "Low Flow & Leakage Repair",
                  "RO Re-installation & Plumbing Setup",
                  "All Major Water Purifier Models AMC",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={16} color="#f43f5e" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20need%20water%20purifier%20service%20at%20my%20doorstep.%20Please%20share%20technician%20availability."
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  background: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "15px",
                  padding: "14px 28px",
                  borderRadius: "14px",
                  boxShadow: "0 4px 20px rgba(244, 63, 94, 0.35)",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                }}
              >
                <Wrench size={18} />
                <span>BOOK PURIFIER SERVICE</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Independent Service Notice */}
        <div
          style={{
            marginTop: "30px",
            background: "rgba(10, 22, 42, 0.6)",
            border: "1px dashed rgba(255, 255, 255, 0.15)",
            borderRadius: "12px",
            padding: "12px 18px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <ShieldAlert size={18} color="#94a3b8" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: "12px", color: "#94a3b8", lineHeight: 1.5, margin: 0 }}>
            <strong>Independent Service Notice:</strong> Bangalore RO Care is an independent multi-brand water purifier service, repair, and maintenance provider across Bangalore. We provide specialized service for all major water purifier models and are not an authorized franchise or official manufacturer service center.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 960px) {
          .brand-card-inner {
            grid-template-columns: 0.8fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
