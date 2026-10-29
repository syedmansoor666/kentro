"use client";

import React from "react";
import { Phone, MessageSquare, Wrench, ShieldCheck, Clock, MapPin, Mail } from "lucide-react";

interface FinalCtaProps {
  onBookClick: () => void;
}

export default function FinalCta({ onBookClick }: FinalCtaProps) {
  return (
    <section className="section" id="contact" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background Ambient Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "750px",
          height: "350px",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(2, 132, 199, 0.08) 50%, transparent 75%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="glass-panel"
          style={{
            borderRadius: "28px",
            padding: "50px 30px",
            textAlign: "center",
            maxWidth: "960px",
            margin: "0 auto",
            border: "1px solid rgba(56, 189, 248, 0.35)",
            boxShadow: "0 25px 60px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(14, 165, 233, 0.2)",
            background: "linear-gradient(135deg, rgba(14, 28, 51, 0.92) 0%, rgba(6, 14, 26, 0.98) 100%)",
          }}
        >
          {/* Trust Pill */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
            <span className="badge-pill badge-pill-emerald">
              <Clock size={13} /> Same-Day 90-Minute Service
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(28px, 4.5vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Need <span className="gradient-text-cyan">RO Service</span> in Bangalore?
          </h2>

          <p
            style={{
              fontSize: "clamp(16px, 2.2vw, 19px)",
              color: "#e2e8f0",
              fontWeight: 600,
              maxWidth: "680px",
              margin: "0 auto 12px auto",
            }}
          >
            Don&apos;t wait for a small purifier problem to become a major one.
          </p>

          <p
            style={{
              fontSize: "14px",
              color: "#94a3b8",
              maxWidth: "600px",
              margin: "0 auto 30px auto",
              lineHeight: 1.6,
            }}
          >
            Get professional RO repair, filter replacement, installation and maintenance at your doorstep. Fast response across all Bangalore locations.
          </p>

          {/* Action CTAs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "14px",
              marginBottom: "36px",
            }}
          >
            <button
              onClick={onBookClick}
              className="btn-primary"
              style={{ padding: "15px 32px", fontSize: "16px", borderRadius: "14px" }}
            >
              <Wrench size={18} />
              <span>BOOK A SERVICE TODAY</span>
            </button>

            <a
              href="tel:+917708982342"
              className="btn-secondary"
              style={{ padding: "15px 28px", fontSize: "16px", borderRadius: "14px" }}
            >
              <Phone size={18} color="#38bdf8" />
              <span>CALL NOW: +91 77089 82342</span>
            </a>

            <a
              href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20want%20to%20book%20a%20doorstep%20RO%20service."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
              style={{ padding: "15px 28px", fontSize: "16px", borderRadius: "14px" }}
            >
              <MessageSquare size={18} />
              <span>WHATSAPP US</span>
            </a>
          </div>

          {/* Contact Information Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              padding: "24px",
              background: "rgba(5, 11, 20, 0.7)",
              borderRadius: "18px",
              border: "1px solid rgba(56, 189, 248, 0.2)",
              textAlign: "left",
              marginBottom: "24px",
            }}
          >
            {/* Address */}
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(14, 165, 233, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#38bdf8",
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>
                  Physical Office Address
                </div>
                <div style={{ fontSize: "13px", color: "#f8fafc", lineHeight: 1.5, fontWeight: 500 }}>
                  #42/1, 2nd Floor, 80 Feet Road, 4th Block, Koramangala, Bengaluru, Karnataka 560034
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(16, 185, 129, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#10b981",
                  flexShrink: 0,
                }}
              >
                <Mail size={20} />
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>
                  Customer Support Email
                </div>
                <a
                  href="mailto:support@bangalorerocare.com"
                  style={{ fontSize: "14px", color: "#38bdf8", fontWeight: 600, textDecoration: "none" }}
                >
                  support@bangalorerocare.com
                </a>
                <div style={{ fontSize: "12px", color: "#94a3b8", marginTop: "2px" }}>
                  Replies within 2 hours
                </div>
              </div>
            </div>

            {/* Phone & Timings */}
            <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "10px",
                  background: "rgba(245, 158, 11, 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fbbf24",
                  flexShrink: 0,
                }}
              >
                <Clock size={20} />
              </div>
              <div>
                <div style={{ fontSize: "12px", color: "#94a3b8", fontWeight: 600, textTransform: "uppercase", marginBottom: "4px" }}>
                  Working Hours
                </div>
                <div style={{ fontSize: "13px", color: "#f8fafc", fontWeight: 500 }}>
                  Mon - Sun: 8:00 AM – 9:00 PM
                </div>
                <div style={{ fontSize: "12px", color: "#10b981", marginTop: "2px", fontWeight: 600 }}>
                  24x7 WhatsApp Doorstep Booking
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              fontSize: "13px",
              color: "#94a3b8",
              fontWeight: 600,
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            <ShieldCheck size={16} color="#10b981" />
            <span>Bangalore RO Care — Your Local Water Purifier Service Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}
