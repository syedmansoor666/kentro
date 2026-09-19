"use client";

import React from "react";
import { Droplet, Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";

export default function Footer() {
  const areas = [
    "Indiranagar", "Koramangala", "HSR Layout", "BTM Layout", "Jayanagar",
    "JP Nagar", "Banashankari", "Rajajinagar", "Malleshwaram", "Hebbal",
    "Marathahalli", "Whitefield", "Electronic City", "Bellandur", "Sarjapur Road"
  ];

  return (
    <footer
      style={{
        background: "#030710",
        borderTop: "1px solid rgba(56, 189, 248, 0.2)",
        paddingTop: "60px",
        paddingBottom: "30px",
        color: "#94a3b8",
        fontSize: "14px",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px",
            marginBottom: "50px",
          }}
        >
          {/* Brand & Overview */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#ffffff",
                }}
              >
                <Droplet size={20} fill="#ffffff" />
              </div>
              <span style={{ fontSize: "18px", fontWeight: 800, color: "#f8fafc" }}>
                BANGALORE <span style={{ color: "#38bdf8" }}>RO CARE</span>
              </span>
            </div>

            <p style={{ fontSize: "13px", lineHeight: 1.6, color: "#94a3b8", marginBottom: "16px" }}>
              Trusted RO water purifier service in Bangalore. Expert doorstep repair, filter replacement, installation, and AMC for Kent, Pureit, and other major purifier brands.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "13px" }}>
              <a
                href="tel:+917708982342"
                style={{ display: "flex", alignItems: "center", gap: "8px", color: "#e2e8f0" }}
              >
                <Phone size={15} color="#38bdf8" />
                <span>+91 77089 82342 / +91 80 4567 8900</span>
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#e2e8f0" }}>
                <MapPin size={15} color="#38bdf8" />
                <span>Doorstep Service Across All Bangalore Layouts</span>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div>
            <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#f8fafc", marginBottom: "16px" }}>
              RO Services
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><a href="#services" style={{ color: "#cbd5e1" }}>RO Repair Service</a></li>
              <li><a href="#services" style={{ color: "#cbd5e1" }}>RO Filter Replacement</a></li>
              <li><a href="#amc" style={{ color: "#cbd5e1" }}>RO AMC Maintenance</a></li>
              <li><a href="#services" style={{ color: "#cbd5e1" }}>RO Installation & Relocation</a></li>
              <li><a href="#problems" style={{ color: "#cbd5e1" }}>Water Leakage Repair</a></li>
              <li><a href="#problems" style={{ color: "#cbd5e1" }}>Low Water Flow Diagnostics</a></li>
            </ul>
          </div>

          {/* Brand Services Links */}
          <div>
            <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#f8fafc", marginBottom: "16px" }}>
              Purifier Brands
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "13px" }}>
              <li><a href="#kent-service" style={{ color: "#cbd5e1" }}>Kent RO Service Bangalore</a></li>
              <li><a href="#kent-service" style={{ color: "#cbd5e1" }}>Kent Grand & Grand Plus Repair</a></li>
              <li><a href="#pureit-service" style={{ color: "#cbd5e1" }}>Pureit Water Purifier Service</a></li>
              <li><a href="#pureit-service" style={{ color: "#cbd5e1" }}>Pureit Copper+ & Ultima Care</a></li>
              <li><a href="#pureit-service" style={{ color: "#cbd5e1" }}>Pureit GermKill Kit (GKK) Replacement</a></li>
              <li><a href="#services" style={{ color: "#cbd5e1" }}>Aquaguard & Multi-Brand Service</a></li>
            </ul>
          </div>

          {/* Service Areas Summary */}
          <div>
            <h4 style={{ fontSize: "15px", fontWeight: 700, color: "#f8fafc", marginBottom: "16px" }}>
              Popular Areas Served
            </h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
              {areas.map((area, idx) => (
                <a
                  key={idx}
                  href="#areas"
                  style={{
                    fontSize: "11px",
                    padding: "4px 8px",
                    borderRadius: "6px",
                    background: "rgba(255, 255, 255, 0.04)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    color: "#94a3b8",
                  }}
                >
                  {area}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Regulatory Independent Disclaimer */}
        <div
          style={{
            padding: "16px 20px",
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(255, 255, 255, 0.06)",
            borderRadius: "12px",
            marginBottom: "30px",
            fontSize: "12px",
            lineHeight: 1.6,
            color: "#64748b",
          }}
        >
          <strong style={{ color: "#94a3b8" }}>Disclaimer:</strong> Bangalore RO Care is an independent service, repair, and maintenance provider for water purifiers. Brand names such as Kent, Pureit, Aquaguard, and others are registered trademarks of their respective owners and are mentioned strictly for descriptive purposes to indicate product compatibility with our service expertise. We are not affiliated with or authorized by any specific manufacturer.
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
            borderTop: "1px solid rgba(255, 255, 255, 0.06)",
            paddingTop: "24px",
            fontSize: "12px",
            color: "#64748b",
          }}
        >
          <div>
            © {new Date().getFullYear()} Bangalore RO Care. All Rights Reserved. Trusted RO Water Purifier Service in Bangalore.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <span>Clean & Safe Drinking Water for Every Bangalore Home</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
