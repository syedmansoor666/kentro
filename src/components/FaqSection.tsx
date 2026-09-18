"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you service Kent RO purifiers?",
      a: "Yes. We provide independent service and maintenance for Kent RO water purifiers, subject to the model and issue. Our technicians carry specialized parts for Kent Grand, Grand Plus, Prime, Sterling, and other models.",
    },
    {
      q: "Do you service Pureit water purifiers?",
      a: "Yes. We provide independent repair, maintenance and filter replacement services for Pureit water purifiers, including the Copper+ series, Ultima, Classic RO, and GermKill Kit (GKK) replacements.",
    },
    {
      q: "Do you provide doorstep RO service?",
      a: "Yes. Our service is designed for home and office visits across serviceable areas of Bangalore. A technician brings all necessary diagnostics, spare parts, and tools right to your location.",
    },
    {
      q: "How often should RO filters be replaced?",
      a: "Filter replacement depends on water quality, purifier usage, incoming TDS and the purifier model. Generally, sediment and carbon filters are checked every 6 to 12 months, and RO membranes every 18 to 24 months. A technician can inspect the system and recommend replacement when necessary.",
    },
    {
      q: "Do you provide RO AMC?",
      a: "Yes, AMC (Annual Maintenance Contract) packages can be offered for eligible RO/UV/UF water purifiers. Our AMC plans include periodic preventive checkups, cleaning, filter checks, membrane testing, and discounted spare parts.",
    },
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section" id="faqs">
      <div className="container" style={{ maxWidth: "860px" }}>
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Got Questions?</span>
          <h2 className="section-title">
            Frequently Asked <span className="gradient-text-cyan">Questions</span>
          </h2>
          <p className="section-subtitle">
            Find quick answers to common questions about our water purifier service, Kent & Pureit maintenance, and doorstep support in Bangalore.
          </p>
        </div>

        {/* Accordion Container */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  transition: "all 0.25s ease",
                  border: isOpen ? "1px solid rgba(56, 189, 248, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: "100%",
                    padding: "20px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    textAlign: "left",
                    background: isOpen ? "rgba(14, 165, 233, 0.05)" : "transparent",
                    color: "#f8fafc",
                    fontSize: "16px",
                    fontWeight: 600,
                  }}
                  aria-expanded={isOpen}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <HelpCircle size={18} color="#38bdf8" style={{ flexShrink: 0 }} />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    color="#94a3b8"
                    style={{
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s ease",
                      flexShrink: 0,
                    }}
                  />
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: "0 24px 20px 54px",
                      color: "#94a3b8",
                      fontSize: "14px",
                      lineHeight: 1.6,
                    }}
                  >
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
