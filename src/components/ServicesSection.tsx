"use client";

import React from "react";
import { Wrench, Filter, ShieldCheck, ArrowRight, Activity, Check, Zap, MessageSquare } from "lucide-react";

interface ServicesSectionProps {
  onSelectService?: (serviceName: string) => void;
}

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  const getWhatsAppLink = (srvId: string) => {
    let text = "Hi Bangalore RO Care, I would like to book an RO purifier service.";
    if (srvId === "repair") {
      text = "Hi Bangalore RO Care, I would like to book an RO Repair Service at my doorstep. Please share technician availability.";
    } else if (srvId === "filter") {
      text = "Hi Bangalore RO Care, I would like to enquire / book an RO Filter Replacement for my water purifier. Please share filter types and pricing.";
    } else if (srvId === "amc") {
      text = "Hi Bangalore RO Care, I would like to enquire about RO AMC (Annual Maintenance Contract) packages for my purifier.";
    } else if (srvId === "installation") {
      text = "Hi Bangalore RO Care, I would like to book an RO Installation / Uninstallation service at my location.";
    }
    return `https://wa.me/917708982342?text=${encodeURIComponent(text)}`;
  };

  const services = [
    {
      id: "repair",
      icon: <Wrench size={28} color="#38bdf8" />,
      title: "RO Repair Service",
      badge: "Most Requested",
      desc: "Fast diagnosis and precision repair for all critical water purifier breakdowns at your home.",
      features: [
        "RO not turning on or power issues",
        "Water leakage from pipe, filter or tank",
        "Low water flow or slow tank filling",
        "Noisy purifier vibrating or humming",
        "Booster pump failure & SMPS repair",
        "Auto shutdown malfunction & sensor issues",
        "Poor water purification & high TDS",
      ],
      action: "Book RO Repair on WhatsApp",
    },
    {
      id: "filter",
      icon: <Filter size={28} color="#10b981" />,
      badge: "Original Cartridges",
      title: "RO Filter Replacement",
      desc: "Restore crystal-pure drinking water quality with genuine replacement filter cartridges.",
      features: [
        "Spun Polypropylene Sediment filters",
        "Pre-Carbon & Post-Carbon filter blocks",
        "High-TDS Reverse Osmosis (RO) membranes",
        "Ultraviolet (UV) lamp chambers & ballasts",
        "Ultra-filtration (UF) hollow fiber filters",
        "Mineralizer & alkaline cartridge additions",
        "Complete TDS testing pre & post change",
      ],
      action: "Book Filter Replacement on WhatsApp",
    },
    {
      id: "amc",
      icon: <ShieldCheck size={28} color="#fbbf24" />,
      badge: "Full Year Care",
      title: "RO AMC Service",
      desc: "Hassle-free Annual Maintenance Contracts to protect your purifier's lifespan and family's health.",
      features: [
        "Scheduled periodic check-ups & deep cleaning",
        "Periodic filter & membrane health testing",
        "Electrical wiring, sensor & pump inspection",
        "Priority emergency technician visit in 90 mins",
        "Discounted replacement consumables",
        "Free TDS and water purity health reports",
        "Available for Kent, Pureit and all major models",
      ],
      action: "Book RO AMC on WhatsApp",
    },
    {
      id: "installation",
      icon: <Zap size={28} color="#c084fc" />,
      badge: "Safe Setup",
      title: "RO Installation & Uninstallation",
      desc: "Professional relocation, wall-mounting, and plumbing setup with zero leakage assurance.",
      features: [
        "New purifier unboxing & wall mounting",
        "Safe uninstallation during home relocation",
        "Re-installation & plumbing tap connection",
        "Pressure valve setup & overflow drainage check",
        "Post-installation leakage inspection test",
        "TDS calibration for Bangalore water supply",
        "Demonstration and maintenance guidance",
      ],
      action: "Book Installation on WhatsApp",
    },
  ];

  return (
    <section className="section" id="services" style={{ background: "rgba(6, 14, 26, 0.5)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Bangalore RO Care Services</span>
          <h2 className="section-title">
            Complete <span className="gradient-text-cyan">RO Water Purifier</span> Services
          </h2>
          <p className="section-subtitle">
            From sudden leaks to annual filter replacement and new installations, our certified Bangalore technicians ensure your purifier runs at peak purity.
          </p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          {services.map((srv) => (
            <div
              key={srv.id}
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "28px 24px",
                position: "relative",
              }}
            >
              {/* Header with Icon and Badge */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  marginBottom: "20px",
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "16px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {srv.icon}
                </div>
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    padding: "4px 10px",
                    borderRadius: "20px",
                    background: "rgba(14, 165, 233, 0.12)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    color: "#38bdf8",
                  }}
                >
                  {srv.badge}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "10px", color: "#f8fafc" }}>
                {srv.title}
              </h3>
              <p style={{ fontSize: "14px", color: "#94a3b8", lineHeight: 1.55, marginBottom: "20px" }}>
                {srv.desc}
              </p>

              {/* Feature List */}
              <div style={{ flex: 1, marginBottom: "24px" }}>
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    color: "#64748b",
                    letterSpacing: "0.05em",
                    marginBottom: "12px",
                  }}
                >
                  What is included:
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "9px" }}>
                  {srv.features.map((feat, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px",
                        fontSize: "13px",
                        color: "#cbd5e1",
                      }}
                    >
                      <Check size={15} color="#10b981" style={{ flexShrink: 0, marginTop: "3px" }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button - WhatsApp direct connection with specific service info */}
              <a
                href={getWhatsAppLink(srv.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{
                  width: "100%",
                  padding: "12px 18px",
                  fontSize: "14px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                }}
              >
                <MessageSquare size={16} />
                <span>{srv.action}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
