"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Clock,
  Phone,
  MessageSquare,
  Wrench,
  Star,
  Droplet,
  CheckCircle,
  Volume2,
  VolumeX,
} from "lucide-react";

interface HeroSectionProps {
  onBookClick: () => void;
}

export default function HeroSection({ onBookClick }: HeroSectionProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const toggleMute = (e?: React.SyntheticEvent) => {
    if (e) {
      e.stopPropagation();
    }
    if (videoRef.current) {
      const v = videoRef.current;
      if (v.muted) {
        v.muted = false;
        v.volume = 1.0;
        v.removeAttribute("muted");
        const promise = v.play();
        if (promise !== undefined) {
          promise.catch(() => {});
        }
        setIsMuted(false);
      } else {
        v.muted = true;
        v.setAttribute("muted", "true");
        setIsMuted(true);
      }
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 12; // max 12 deg
    const rotY = ((x - centerX) / centerX) * 14; // max 14 deg

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section
      style={{
        position: "relative",
        paddingTop: "40px",
        paddingBottom: "70px",
        overflow: "hidden",
      }}
      id="hero"
    >
      {/* Mobile-Only Autoplay Video with Sound & Controls */}
      <div className="hero-mobile-video" style={{ position: "relative" }}>
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          playsInline
          loop
          controls
          onClick={toggleMute}
          onTouchEnd={toggleMute}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            borderRadius: "16px",
            boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
            cursor: "pointer",
          }}
        >
          <source src="/RO.mp4" type="video/mp4" />
        </video>

        {/* Floating Sound Toggle Button Overlay */}
        <button
          onClick={toggleMute}
          onTouchEnd={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          style={{
            position: "absolute",
            bottom: "48px",
            right: "20px",
            background: "rgba(15, 23, 42, 0.92)",
            color: "#ffffff",
            border: "1px solid rgba(56, 189, 248, 0.5)",
            borderRadius: "30px",
            padding: "8px 14px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "12px",
            fontWeight: 600,
            backdropFilter: "blur(10px)",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 4px 14px rgba(0,0,0,0.5)",
            transition: "all 0.2s ease",
          }}
        >
          {isMuted ? (
            <>
              <VolumeX size={16} style={{ color: "#ef4444" }} />
              <span>Tap for Sound 🔊</span>
            </>
          ) : (
            <>
              <Volume2 size={16} style={{ color: "#38bdf8" }} />
              <span>Sound On 🔊</span>
            </>
          )}
        </button>
      </div>

      {/* Background Decorative Ambient Lighting */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "500px",
          background: "radial-gradient(circle, rgba(14, 165, 233, 0.18) 0%, rgba(2, 132, 199, 0.05) 50%, transparent 80%)",
          filter: "blur(70px)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "40px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & CTAs */}
          <div>
            {/* Trust Pill */}
            <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginBottom: "18px" }}>
              <span className="badge-pill">
                <ShieldCheck size={14} /> Doorstep Service in Bangalore
              </span>
              <span className="badge-pill badge-pill-emerald">
                <Clock size={14} /> Within 90 Minutes
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 54px)",
                lineHeight: 1.12,
                fontWeight: 800,
                letterSpacing: "-0.03em",
                marginBottom: "16px",
              }}
            >
              Trusted <span className="gradient-text-cyan">RO Water Purifier</span> Service in Bangalore
            </h1>

            {/* Sub-headline */}
            <h2
              style={{
                fontSize: "clamp(17px, 2.4vw, 22px)",
                color: "#e2e8f0",
                fontWeight: 600,
                lineHeight: 1.4,
                marginBottom: "18px",
              }}
            >
              Expert RO Repair, Service, Installation & Maintenance at Your Doorstep
            </h2>

            {/* Problem Questions */}
            <div
              style={{
                background: "rgba(14, 28, 51, 0.6)",
                borderLeft: "3px solid #38bdf8",
                padding: "14px 18px",
                borderRadius: "0 12px 12px 0",
                marginBottom: "22px",
                backdropFilter: "blur(8px)",
              }}
            >
              <p style={{ color: "#94a3b8", fontSize: "14px", lineHeight: 1.5, margin: 0 }}>
                <strong style={{ color: "#f8fafc" }}>
                  Is your RO purifier leaking, making unusual noises, giving low water flow, or not working properly?
                </strong>
                <br />
                Bangalore RO Care provides professional water purifier repair and maintenance services across Bangalore. Our technicians handle Kent, Pureit and other major RO, UV and UF water purifier brands.
              </p>
            </div>

            {/* Quick Benefits Bullet Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "10px 16px",
                marginBottom: "28px",
              }}
              className="benefits-grid"
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#cbd5e1" }}>
                <CheckCircle size={16} color="#38bdf8" />
                <span>Kent & Pureit Specialists</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#cbd5e1" }}>
                <CheckCircle size={16} color="#10b981" />
                <span>100% Genuine Spare Parts</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#cbd5e1" }}>
                <CheckCircle size={16} color="#38bdf8" />
                <span>Free TDS Water Purity Check</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "14px", color: "#10b981" }}>
                <CheckCircle size={16} color="#10b981" />
                <span>Transparent Upfront Charges</span>
              </div>
            </div>

            {/* Primary CTAs */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "14px",
                alignItems: "center",
                marginBottom: "24px",
              }}
            >
              <a
                href="tel:+917708982342"
                className="btn-primary"
                style={{ padding: "14px 28px", fontSize: "16px", borderRadius: "14px" }}
              >
                <Phone size={18} />
                <span>CALL NOW</span>
              </a>

              <a
                href="https://wa.me/917708982342?text=Hi%20Bangalore%20RO%20Care,%20I%20want%20to%20book%20a%20doorstep%20RO%20water%20purifier%20service."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                style={{ padding: "14px 28px", fontSize: "16px", borderRadius: "14px" }}
              >
                <MessageSquare size={18} />
                <span>WHATSAPP US</span>
              </a>
            </div>

            {/* Customer Rating Proof */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "8px" }}>
              <div style={{ display: "flex", color: "#fbbf24" }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#fbbf24" />
                ))}
              </div>
              <span style={{ fontSize: "13px", color: "#94a3b8" }}>
                <strong style={{ color: "#f8fafc" }}>4.9/5 Rating</strong> across 3,500+ Bangalore households serviced
              </span>
            </div>
          </div>

          {/* Right Column: 3D Realistic Kent RO View */}
          <div
            style={{
              position: "relative",
              perspective: "1200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* 3D Interactive Card Container */}
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "460px",
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
                transformStyle: "preserve-3d",
                cursor: "pointer",
              }}
            >
              {/* Card Background Glow & Stand */}
              <div
                style={{
                  position: "relative",
                  borderRadius: "28px",
                  background: "linear-gradient(145deg, rgba(14, 28, 51, 0.85) 0%, rgba(6, 14, 26, 0.95) 100%)",
                  border: "1px solid rgba(56, 189, 248, 0.3)",
                  boxShadow: "0 25px 50px -10px rgba(0, 0, 0, 0.8), 0 0 50px rgba(14, 165, 233, 0.25)",
                  padding: "32px 24px 28px 24px",
                  overflow: "hidden",
                }}
              >
                {/* Dynamic Lighting Glare Effect */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255, 255, 255, 0.18) 0%, transparent 60%)`,
                    pointerEvents: "none",
                    zIndex: 3,
                    transition: "opacity 0.2s",
                    opacity: isHovered ? 1 : 0.4,
                  }}
                />

                {/* Top 3D Header Badge */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "16px",
                    position: "relative",
                    zIndex: 4,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      fontSize: "11px",
                      color: "#10b981",
                      fontWeight: 700,
                      background: "rgba(16, 185, 129, 0.12)",
                      padding: "4px 10px",
                      borderRadius: "20px",
                    }}
                  >
                    <Droplet size={12} fill="#10b981" /> 100% Pure RO+UV
                  </div>
                </div>

                {/* Realistic Kent RO Purifier Showcase */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "360px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transform: "translateZ(30px)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  {/* Subtle Under-glow reflection */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      width: "70%",
                      height: "30px",
                      borderRadius: "50%",
                      background: "radial-gradient(ellipse, rgba(56, 189, 248, 0.45) 0%, transparent 70%)",
                      filter: "blur(12px)",
                      zIndex: 1,
                    }}
                  />

                  {/* Kent Grand Plus Realistic Image */}
                  <Image
                    src="/images/kent-grand-plus.webp"
                    alt="Realistic Kent Grand Plus Mineral RO Purifier Bangalore Service"
                    width={340}
                    height={360}
                    priority
                    style={{
                      objectFit: "contain",
                      position: "relative",
                      zIndex: 2,
                      filter: "drop-shadow(0 15px 25px rgba(0, 0, 0, 0.7)) drop-shadow(0 0 15px rgba(56, 189, 248, 0.2))",
                    }}
                  />
                </div>

                {/* Interactive Live Purity Metrics Overlay */}
                <div
                  style={{
                    marginTop: "12px",
                    background: "rgba(5, 11, 20, 0.7)",
                    border: "1px solid rgba(56, 189, 248, 0.2)",
                    borderRadius: "14px",
                    padding: "14px 16px",
                    position: "relative",
                    zIndex: 4,
                    transform: "translateZ(20px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "8px",
                      fontSize: "12px",
                    }}
                  >
                    <span style={{ color: "#94a3b8" }}>Bangalore Borewell TDS Reduction</span>
                    <span style={{ color: "#38bdf8", fontWeight: 700 }}>96% Removal</span>
                  </div>

                  {/* Progress Meter */}
                  <div
                    style={{
                      width: "100%",
                      height: "8px",
                      background: "rgba(255, 255, 255, 0.08)",
                      borderRadius: "4px",
                      overflow: "hidden",
                      display: "flex",
                      marginBottom: "10px",
                    }}
                  >
                    <div
                      style={{
                        width: "96%",
                        background: "linear-gradient(90deg, #0284c7, #38bdf8, #10b981)",
                        borderRadius: "4px",
                      }}
                    />
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "11px",
                    }}
                  >
                    <div>
                      <span style={{ color: "#ef4444", fontWeight: 700 }}>Inlet TDS: 850 PPM</span>
                      <span style={{ color: "#64748b", marginLeft: "4px" }}>(Hard Water)</span>
                    </div>
                    <div style={{ color: "#38bdf8", fontWeight: 700 }}>➔</div>
                    <div>
                      <span style={{ color: "#10b981", fontWeight: 800 }}>Pure Outlet: 35 PPM</span>
                      <span style={{ color: "#64748b", marginLeft: "4px" }}>(Safe Drink)</span>
                    </div>
                  </div>
                </div>

                {/* Purifier Brand Label */}
                <div
                  style={{
                    textAlign: "center",
                    marginTop: "12px",
                    fontSize: "12px",
                    color: "#94a3b8",
                  }}
                >
                  <strong style={{ color: "#f8fafc" }}>Kent Grand Plus Mineral RO™</strong> (RO + UV + UF + TDS Controller)
                </div>
              </div>

              {/* Floating Floating Purity Badge Left */}
              <div
                style={{
                  position: "absolute",
                  left: "-18px",
                  top: "28%",
                  background: "rgba(6, 14, 26, 0.92)",
                  border: "1px solid rgba(56, 189, 248, 0.4)",
                  borderRadius: "14px",
                  padding: "10px 14px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transform: "translateZ(45px)",
                  backdropFilter: "blur(10px)",
                }}
                className="floating-anim floating-badge-left"
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(14, 165, 233, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#38bdf8",
                  }}
                >
                  <Droplet size={18} fill="#38bdf8" />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>Water Quality</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#f8fafc" }}>
                    100% Mineral Safe
                  </div>
                </div>
              </div>

              {/* Floating Verified Badge Right */}
              <div
                style={{
                  position: "absolute",
                  right: "-18px",
                  bottom: "22%",
                  background: "rgba(6, 14, 26, 0.92)",
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  borderRadius: "14px",
                  padding: "10px 14px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.6)",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transform: "translateZ(45px)",
                  backdropFilter: "blur(10px)",
                }}
                className="floating-anim floating-badge-right"
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "8px",
                    background: "rgba(16, 185, 129, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#10b981",
                  }}
                >
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontSize: "11px", color: "#94a3b8" }}>Doorstep Tech</div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#10b981" }}>
                    Same-Day in 90m
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-mobile-video {
          display: none;
        }
        @media (max-width: 640px) {
          .hero-mobile-video {
            display: block;
            padding: 0 16px 24px 16px;
          }
        }
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
        @media (max-width: 640px) {
          .floating-badge-left,
          .floating-badge-right,
          .btn-primary,
          .btn-whatsapp {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
