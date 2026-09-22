"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Wrench, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

interface BrandShowcaseProps {
  onSelectBrand: (brandName: string) => void;
}

export default function BrandShowcase({ onSelectBrand }: BrandShowcaseProps) {
  return (
    <section className="section" id="kent-service">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Specialized Doorstep Support</span>
          <h2 className="section-title">
            <span className="gradient-text-cyan">Kent</span>, <span className="gradient-text-copper">Pureit</span> & <span style={{ color: "#f43f5e" }}>LG</span> RO Service in Bangalore
          </h2>
          <p className="section-subtitle">
            Specialized doorstep care for Bangalore&apos;s most trusted purifier brands. Our technicians carry genuine model-specific replacement filters, membranes, and diagnostics.
          </p>
        </div>

        {/* Brand Showcase Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "32px",
          }}
          className="brand-grid"
        >
          {/* Kent RO Card */}
          <div
            className="glass-card brand-card-inner brand-kent"
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
                  src="/images/kent-grand.webp"
                  alt="Kent RO Service in Bangalore - Kent Grand & Prime Repair"
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
                Service for Kent Grand, Prime, Sterling, Pearl & Super+
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
                <Sparkles size={13} /> Kent Purifier Specialists
              </div>

              <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#f8fafc" }}>
                Kent RO Service in Bangalore
              </h3>

              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "20px" }}>
                Need Kent RO repair or maintenance in Bangalore? Our technicians can assist with common Kent purifier issues, filter replacement, membrane replacement, leakage, low water flow and general maintenance.
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
                  "Kent Grand & Grand Plus Service",
                  "Kent Mineral RO Membrane Change",
                  "Kent Booster Pump & SV Valve",
                  "UV LED Tank Disinfection Fix",
                  "Auto-Flush & SMPS Adapter",
                  "Complete Kent Annual AMC",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20need%20Kent%20RO%20purifier%20service%20at%20my%20doorstep.%20Please%20share%20technician%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ padding: "14px 28px", fontSize: "15px", borderRadius: "14px" }}
              >
                <Wrench size={18} />
                <span>BOOK KENT RO SERVICE</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Pureit RO Card */}
          <div
            className="glass-card brand-card-inner brand-pureit"
            id="pureit-service"
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
                  src="/images/pureit-copper-ro.png"
                  alt="Pureit Water Purifier Service in Bangalore - Copper+ & Mineral RO Repair"
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
                Service for Pureit Copper+, Ultima, Eco, Vital & Classic
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
                <Sparkles size={13} /> Pureit Purifier Specialists
              </div>

              <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#f8fafc" }}>
                Pureit Service in Bangalore
              </h3>

              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "20px" }}>
                Looking for Pureit water purifier service in Bangalore? Get doorstep assistance for purifier inspection, repair, filter replacement, maintenance and installation.
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
                  "Pureit GermKill Kit (GKK) Replacement",
                  "Pureit Copper+ Auto-Dispense Fix",
                  "Low Water Flow & Tank Filling Repair",
                  "Digital Purity Indicator Sensor Check",
                  "Pureit RO Membrane & Carbon Filters",
                  "Pureit Re-installation & Plumbing Setup",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={16} color="#f59e0b" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20need%20Pureit%20water%20purifier%20service%20at%20my%20doorstep.%20Please%20share%20technician%20availability."
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
                <span>BOOK PUREIT SERVICE</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* LG RO Card */}
          <div
            className="glass-card brand-card-inner brand-lg"
            id="lg-service"
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
                  src="/images/lg-ro-transparent.png"
                  alt="LG RO Water Purifier Service in Bangalore - PuriCare & Dual Protection Repair"
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
                Service for LG PuriCare, Dual Protection, WW180EP, WW140NP & UV RO
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
                <Sparkles size={13} /> LG Purifier Specialists
              </div>

              <h3 style={{ fontSize: "28px", fontWeight: 800, marginBottom: "12px", color: "#f8fafc" }}>
                LG RO Service in Bangalore
              </h3>

              <p style={{ fontSize: "15px", color: "#cbd5e1", lineHeight: 1.6, marginBottom: "20px" }}>
                Need LG RO water purifier repair or maintenance in Bangalore? Get doorstep assistance for filter replacement, stainless steel tank care, leakage repair, and performance tuning.
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
                  "LG PuriCare Filter & Membrane Change",
                  "Stainless Steel Tank Sterilization Check",
                  "Digital Indicator & Sensor Diagnostics",
                  "Low Flow & Leakage Repair",
                  "LG RO Re-installation & Plumbing Setup",
                  "Complete LG Water Purifier AMC",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#e2e8f0" }}>
                    <CheckCircle2 size={16} color="#f43f5e" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20need%20LG%20water%20purifier%20service%20at%20my%20doorstep.%20Please%20share%20technician%20availability."
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
                <span>BOOK LG RO SERVICE</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory Independent Service Notice from content.md */}
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
            <strong>Independent Service Notice:</strong> Bangalore RO Care is an independent multi-brand water purifier service, repair, and maintenance provider across Bangalore. We provide specialized service for Kent, Pureit, LG, and other major brands and are not an authorized franchise or official manufacturer service center.
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
