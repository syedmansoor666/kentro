"use client";

import React from "react";
import { PhoneCall, UserCheck, Stethoscope, Settings, CheckCircle2 } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <PhoneCall size={24} color="#38bdf8" />,
      title: "Book Your Service",
      desc: "Call, WhatsApp, or request online with your purifier model and the problem you are facing.",
    },
    {
      num: "02",
      icon: <UserCheck size={24} color="#10b981" />,
      title: "Technician Visit",
      desc: "A verified technician visits your home or office in Bangalore at the scheduled convenient time.",
    },
    {
      num: "03",
      icon: <Stethoscope size={24} color="#fbbf24" />,
      title: "Purifier Inspection",
      desc: "The purifier is thoroughly checked with digital meters to diagnose the actual root cause.",
    },
    {
      num: "04",
      icon: <Settings size={24} color="#c084fc" />,
      title: "Service & Repair",
      desc: "Required servicing, cleaning, or genuine parts replacement is carried out only after your upfront approval.",
    },
    {
      num: "05",
      icon: <CheckCircle2 size={24} color="#34d399" />,
      title: "Performance Check",
      desc: "The purifier is tested for pure TDS, optimal water pressure, and zero leaks before sign-off.",
    },
  ];

  return (
    <section className="section" id="how-it-works">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Seamless Process</span>
          <h2 className="section-title">
            How Our <span className="gradient-text-cyan">Service Works</span>
          </h2>
          <p className="section-subtitle">
            Experience a completely transparent, hassle-free doorstep water purifier service in 5 simple steps.
          </p>
        </div>

        {/* 5-Step Process Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: "20px",
            position: "relative",
          }}
        >
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: "24px 18px",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Step Number Background */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "14px",
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "rgba(255, 255, 255, 0.05)",
                  letterSpacing: "-0.05em",
                }}
              >
                {s.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "16px",
                }}
              >
                {s.icon}
              </div>

              {/* Step Title */}
              <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#f8fafc", marginBottom: "8px" }}>
                {s.num}. {s.title}
              </h3>

              {/* Step Desc */}
              <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.5 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
