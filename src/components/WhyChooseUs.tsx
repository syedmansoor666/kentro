"use client";

import React from "react";
import Image from "next/image";
import {
  Home,
  Users,
  SearchCheck,
  Receipt,
  Zap,
  Layers,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    {
      icon: <Home size={26} color="#38bdf8" />,
      title: "Doorstep Service",
      desc: "Get your water purifier checked and serviced conveniently at your home or office without the hassle of unmounting.",
    },
    {
      icon: <Users size={26} color="#10b981" />,
      title: "Experienced Technicians",
      desc: "Skilled technicians intimately familiar with diverse RO, UV, and UF purification systems and water chemistry.",
    },
    {
      icon: <SearchCheck size={26} color="#fbbf24" />,
      title: "Proper Diagnosis",
      desc: "The purifier is thoroughly tested with TDS meters and pressure gauges before any repairs or parts are recommended.",
    },
    {
      icon: <Receipt size={26} color="#c084fc" />,
      title: "Transparent Pricing",
      desc: "Clear itemized estimates and applicable charges are fully explained to you before any major work begins.",
    },
    {
      icon: <Zap size={26} color="#f97316" />,
      title: "Quick Service",
      desc: "Convenient service appointments with same-day 90-minute arrival across all zones in Bangalore.",
    },
    {
      icon: <Layers size={26} color="#06b6d4" />,
      title: "Multi-Brand Service",
      desc: "Expert independent support for Kent, Pureit, and other commonly used residential and commercial RO brands.",
    },
  ];

  return (
    <section className="section" id="why-us" style={{ background: "rgba(5, 11, 20, 0.7)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">The Bangalore RO Care Advantage</span>
          <h2 className="section-title">
            Why Choose <span className="gradient-text-cyan">Bangalore RO Care</span>?
          </h2>
          <p className="section-subtitle">
            We are dedicated to honest, reliable, and swift water purifier maintenance so your family always has access to pure, healthy drinking water.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "36px",
            alignItems: "center",
          }}
          className="why-grid"
        >
          {/* Left Column: 6 Value Proposition Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "20px",
            }}
          >
            {points.map((p, idx) => (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "24px 20px",
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {p.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, color: "#f8fafc", marginBottom: "6px" }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.55 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Trust Panel */}
          <div
            style={{
              position: "relative",
              borderRadius: "24px",
              overflow: "hidden",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)",
              minHeight: "440px",
            }}
          >
            <Image
              src="/images/technician-repair.jpg"
              alt="Experienced Bangalore RO Care technician diagnosing water purifier"
              fill
              style={{ objectFit: "cover" }}
            />
            {/* Dark Gradient Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, rgba(5, 11, 20, 0.2) 0%, rgba(5, 11, 20, 0.9) 100%)",
              }}
            />

            {/* Overlay Content */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "28px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(16, 185, 129, 0.2)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  fontWeight: 700,
                  color: "#34d399",
                  marginBottom: "12px",
                }}
              >
                <ShieldCheck size={14} /> Certified Technicians
              </div>

              <h4 style={{ fontSize: "22px", fontWeight: 800, color: "#ffffff", marginBottom: "8px" }}>
                100% Genuine Filter Replacements
              </h4>
              <p style={{ fontSize: "13px", color: "#cbd5e1", lineHeight: 1.5, marginBottom: "16px" }}>
                We test raw inlet TDS and purified outlet TDS with calibrated digital meters before and after every service visit.
              </p>

              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#38bdf8" }}>3,500+</div>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>Bangalore Homes</div>
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#10b981" }}>90 Mins</div>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>Avg. Response Time</div>
                </div>
                <div>
                  <div style={{ fontSize: "20px", fontWeight: 800, color: "#fbbf24" }}>4.9★</div>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>Customer Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 1024px) {
          .why-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
