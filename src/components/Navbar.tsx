"use client";

import React, { useState, useEffect } from "react";
import { Droplet, Phone, Menu, X, ShieldCheck, Clock } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Kent RO", href: "#kent-service" },
    { name: "Pureit Service", href: "#pureit-service" },
    { name: "RO AMC", href: "#amc" },
    { name: "Problems We Fix", href: "#problems" },
    { name: "Why Us", href: "#why-us" },
    { name: "Areas", href: "#areas" },
    { name: "FAQs", href: "#faqs" },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <div
        style={{
          background: "linear-gradient(90deg, #0369a1 0%, #0284c7 50%, #0ea5e9 100%)",
          color: "#ffffff",
          fontSize: "12px",
          fontWeight: 600,
          padding: "6px 16px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
        }}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: "4px" }}>
          <Clock size={13} /> Same-Day Doorstep Service across Bangalore within 90 Mins
        </span>
        <span style={{ opacity: 0.7, display: "none" }} className="topbar-bullet">•</span>
        <span style={{ display: "none", alignItems: "center", gap: "4px" }} className="topbar-guarantee">
          <ShieldCheck size={13} /> 100% Genuine Spare Parts & 30-Day Service Guarantee
        </span>
      </div>

      {/* Main Sticky Navbar */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 900,
          transition: "all 0.3s ease",
          background: scrolled ? "rgba(5, 11, 20, 0.92)" : "rgba(5, 11, 20, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(56, 189, 248, 0.25)"
            : "1px solid rgba(255, 255, 255, 0.08)",
          boxShadow: scrolled ? "0 10px 30px rgba(0, 0, 0, 0.5)" : "none",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Brand Logo */}
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 20px rgba(14, 165, 233, 0.5)",
                color: "#ffffff",
              }}
            >
              <Droplet size={24} fill="#ffffff" />
            </div>
            <div>
              <span
                style={{
                  fontSize: "19px",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  display: "block",
                  lineHeight: 1.1,
                }}
              >
                BANGALORE <span style={{ color: "#38bdf8" }}>RO CARE</span>
              </span>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 600,
                  color: "#94a3b8",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Trusted Water Purifier Service
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: "none",
              alignItems: "center",
              gap: "24px",
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#cbd5e1",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#38bdf8")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#cbd5e1")}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Action Group */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: "12px",
            }}
            className="desktop-actions"
          >
            <a
              href="tel:+919886012345"
              className="btn-secondary"
              style={{ padding: "8px 16px", fontSize: "13px" }}
              aria-label="Call +91 98860 12345"
            >
              <Phone size={14} color="#38bdf8" />
              <span>+91 98860 12345</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "42px",
              height: "42px",
              borderRadius: "10px",
              background: "rgba(255, 255, 255, 0.06)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              color: "#f8fafc",
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              background: "rgba(6, 14, 26, 0.98)",
              borderBottom: "1px solid rgba(56, 189, 248, 0.25)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: "#e2e8f0",
                  padding: "6px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                }}
              >
                {link.name}
              </a>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "8px" }}>
              <a
                href="tel:+919886012345"
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <Phone size={16} /> Call: +91 98860 12345
              </a>
              <a
                href="https://wa.me/919886012345?text=Hi%20Bangalore%20RO%20Care,%20I%20want%20to%20book%20a%20doorstep%20RO%20water%20purifier%20service."
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Book Doorstep Service
              </a>
            </div>
          </div>
        )}
      </header>

      <style jsx>{`
        @media (min-width: 960px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-actions {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
        @media (min-width: 640px) {
          .topbar-bullet {
            display: inline !important;
          }
          .topbar-guarantee {
            display: inline-flex !important;
          }
        }
      `}</style>
    </>
  );
}
