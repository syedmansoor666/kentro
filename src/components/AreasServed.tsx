"use client";

import React, { useState } from "react";
import { MapPin, Search, CheckCircle2, Phone, MessageSquare } from "lucide-react";

export default function AreasServed() {
  const [searchTerm, setSearchTerm] = useState("");

  const allAreas = [
    "Indiranagar",
    "Koramangala",
    "HSR Layout",
    "BTM Layout",
    "Jayanagar",
    "JP Nagar",
    "Banashankari",
    "Rajajinagar",
    "Malleshwaram",
    "Yeshwanthpur",
    "Hebbal",
    "Marathahalli",
    "Whitefield",
    "Electronic City",
    "Bellandur",
    "Sarjapur Road",
    "Kadugodi",
    "KR Puram",
    "Vijayanagar",
    "Nagarbhavi",
    "Kengeri",
  ];

  const filteredAreas = allAreas.filter((area) =>
    area.toLowerCase().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <section className="section" id="areas" style={{ background: "rgba(6, 14, 26, 0.6)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Bangalore Wide Network</span>
          <h2 className="section-title">
            Areas We <span className="gradient-text-cyan">Serve in Bangalore</span>
          </h2>
          <p className="section-subtitle">
            Our local field technicians are stationed across East, South, West, and North Bangalore for rapid 90-minute doorstep service.
          </p>
        </div>

        {/* Interactive Search Filter Box */}
        <div
          style={{
            maxWidth: "520px",
            margin: "0 auto 36px auto",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              background: "#0e1e38",
              border: "1px solid rgba(56, 189, 248, 0.3)",
              borderRadius: "16px",
              padding: "6px 14px",
              boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
            }}
          >
            <Search size={20} color="#38bdf8" style={{ marginRight: "10px", flexShrink: 0 }} />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search your area (e.g. HSR, Whitefield, Indiranagar)..."
              style={{
                width: "100%",
                background: "transparent",
                border: "none",
                outline: "none",
                color: "#f8fafc",
                fontSize: "15px",
                padding: "8px 0",
              }}
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                style={{
                  color: "#94a3b8",
                  fontSize: "13px",
                  padding: "4px 8px",
                  background: "rgba(255, 255, 255, 0.08)",
                  borderRadius: "6px",
                }}
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Areas Pill Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            justifyContent: "center",
            maxWidth: "1000px",
            margin: "0 auto 40px auto",
          }}
        >
          {filteredAreas.length > 0 ? (
            filteredAreas.map((area, idx) => (
              <div
                key={idx}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  background: "rgba(14, 28, 51, 0.7)",
                  border: "1px solid rgba(56, 189, 248, 0.2)",
                  padding: "8px 16px",
                  borderRadius: "30px",
                  fontSize: "14px",
                  color: "#e2e8f0",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#38bdf8";
                  e.currentTarget.style.color = "#38bdf8";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(56, 189, 248, 0.2)";
                  e.currentTarget.style.color = "#e2e8f0";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <MapPin size={14} color="#38bdf8" />
                <span>{area}</span>
              </div>
            ))
          ) : (
            <div
              style={{
                textAlign: "center",
                padding: "20px",
                color: "#94a3b8",
                fontSize: "14px",
              }}
            >
              Don&apos;t see <strong style={{ color: "#38bdf8" }}>{searchTerm}</strong> listed above? We likely still serve it!
            </div>
          )}
        </div>

        {/* Don't See Your Area Banner */}
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "linear-gradient(135deg, rgba(14, 28, 51, 0.8) 0%, rgba(6, 14, 26, 0.95) 100%)",
            border: "1px solid rgba(56, 189, 248, 0.25)",
            borderRadius: "20px",
            padding: "24px 30px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "16px",
          }}
          className="area-cta-banner"
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <CheckCircle2 size={20} color="#10b981" />
            <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#f8fafc" }}>
              Don&apos;t see your area? Contact us — we may still be able to provide doorstep service.
            </h3>
          </div>
          <p style={{ fontSize: "14px", color: "#94a3b8", margin: 0 }}>
            We cover almost every residential layout and gated community across Greater Bangalore.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="tel:+917708982342" className="btn-secondary" style={{ padding: "10px 20px", fontSize: "14px" }}>
              <Phone size={15} color="#38bdf8" />
              <span>Check Service via Call</span>
            </a>
            <a
              href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20do%20you%20service%20my%20area%20in%20Bangalore?"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: "10px 20px", fontSize: "14px" }}
            >
              <MessageSquare size={15} />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
