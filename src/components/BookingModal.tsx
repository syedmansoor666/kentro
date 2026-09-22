"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle2, Phone, MessageSquare, Wrench, ShieldCheck, MapPin, Clock } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialBrand?: string;
  initialIssue?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  initialBrand = "Kent",
  initialIssue = "General RO Service / Repair",
}: BookingModalProps) {
  const [brand, setBrand] = useState(initialBrand);
  const [issue, setIssue] = useState(initialIssue);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [area, setArea] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialBrand) setBrand(initialBrand);
    if (initialIssue) setIssue(initialIssue);
  }, [initialBrand, initialIssue, isOpen]);

  if (!isOpen) return null;

  const brands = ["Kent", "Pureit", "LG", "Aquaguard", "Havells", "Livpure", "Other"];
  const commonIssues = [
    "RO Not Turning On",
    "Water Leaking",
    "Low Water Flow",
    "RO Continuously Draining",
    "Bad Taste / Smell",
    "Filter Replacement Due",
    "Unusual Loud Noise",
    "RO AMC Service",
    "Installation / Relocation",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hi Bangalore RO Care, I would like to book a service visit:\n• Brand: ${brand}\n• Issue: ${issue}\n• Area: ${area || "Bangalore"}\n• Name: ${name || "Customer"}\n• Phone: ${phone || "Will provide"}`
    );
    window.open(`https://wa.me/917708982342?text=${text}`, "_blank");
    onClose();
  };

  const handleDirectCall = () => {
    window.location.href = "tel:+917708982342";
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(3, 7, 18, 0.75)",
        backdropFilter: "blur(12px)",
        padding: "16px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "linear-gradient(180deg, #0e1e38 0%, #081120 100%)",
          border: "1px solid rgba(56, 189, 248, 0.3)",
          borderRadius: "20px",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(14, 165, 233, 0.2)",
          padding: "24px",
          position: "relative",
          maxHeight: "90vh",
          overflowY: "auto",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#94a3b8",
            transition: "all 0.2s",
          }}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: "center", padding: "24px 8px" }}>
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "50%",
                background: "rgba(16, 185, 129, 0.15)",
                border: "2px solid #10b981",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 16px auto",
                color: "#10b981",
              }}
            >
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: "22px", marginBottom: "8px", color: "#f8fafc" }}>
              Service Request Confirmed!
            </h3>
            <p style={{ color: "#94a3b8", fontSize: "14px", marginBottom: "20px", lineHeight: 1.5 }}>
              Thank you, <strong style={{ color: "#38bdf8" }}>{name || "Customer"}</strong>. Our nearest technician in{" "}
              <strong style={{ color: "#38bdf8" }}>{area || "Bangalore"}</strong> has been notified for your{" "}
              <strong>{brand}</strong> purifier.
            </p>

            <div
              style={{
                background: "rgba(14, 165, 233, 0.08)",
                border: "1px solid rgba(56, 189, 248, 0.2)",
                borderRadius: "12px",
                padding: "14px",
                marginBottom: "24px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textAlign: "left",
              }}
            >
              <Clock size={20} color="#38bdf8" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: "13px", color: "#cbd5e1" }}>
                Estimated Doorstep Arrival: <strong style={{ color: "#38bdf8" }}>Within 60-90 Mins</strong>. Our technician will call you on <strong>{phone}</strong> to confirm your slot.
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <button
                onClick={handleWhatsAppBooking}
                className="btn-whatsapp"
                style={{ width: "100%", justifyContent: "center" }}
              >
                <MessageSquare size={18} /> Send Details on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="btn-secondary"
                style={{ width: "100%", justifyContent: "center" }}
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div style={{ marginBottom: "20px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "#38bdf8",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                }}
              >
                <ShieldCheck size={14} /> Doorstep Service in 90 Mins
              </span>
              <h3 style={{ fontSize: "22px", color: "#f8fafc", fontWeight: 700 }}>
                Book A RO Service Call
              </h3>
              <p style={{ fontSize: "13px", color: "#94a3b8", marginTop: "4px" }}>
                Fill out the quick form or call us directly for immediate doorstep support.
              </p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Brand Selection */}
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#cbd5e1", display: "block", marginBottom: "6px" }}>
                  Select Purifier Brand
                </label>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
                  {brands.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBrand(b)}
                      style={{
                        padding: "8px 10px",
                        borderRadius: "8px",
                        fontSize: "13px",
                        fontWeight: 600,
                        border: brand === b ? "1px solid #38bdf8" : "1px solid rgba(255, 255, 255, 0.1)",
                        background: brand === b ? "rgba(14, 165, 233, 0.2)" : "rgba(255, 255, 255, 0.03)",
                        color: brand === b ? "#38bdf8" : "#94a3b8",
                        transition: "all 0.2s",
                      }}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Common Issue Selection */}
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#cbd5e1", display: "block", marginBottom: "6px" }}>
                  Select Issue or Service Needed
                </label>
                <select
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: "10px",
                    background: "#0a1526",
                    border: "1px solid rgba(56, 189, 248, 0.25)",
                    color: "#f8fafc",
                    fontSize: "14px",
                    outline: "none",
                  }}
                >
                  {commonIssues.map((item) => (
                    <option key={item} value={item} style={{ background: "#0a1526", color: "#fff" }}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#cbd5e1", display: "block", marginBottom: "6px" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh K."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      background: "#0a1526",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#f8fafc",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
                <div>
                  <label style={{ fontSize: "12px", fontWeight: 600, color: "#cbd5e1", display: "block", marginBottom: "6px" }}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit Mobile"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px",
                      borderRadius: "10px",
                      background: "#0a1526",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#f8fafc",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                </div>
              </div>

              {/* Locality */}
              <div>
                <label style={{ fontSize: "12px", fontWeight: 600, color: "#cbd5e1", display: "block", marginBottom: "6px" }}>
                  Bangalore Locality / Area *
                </label>
                <div style={{ position: "relative" }}>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Indiranagar, HSR Layout, Whitefield"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    style={{
                      width: "100%",
                      padding: "10px 12px 10px 34px",
                      borderRadius: "10px",
                      background: "#0a1526",
                      border: "1px solid rgba(255, 255, 255, 0.12)",
                      color: "#f8fafc",
                      fontSize: "14px",
                      outline: "none",
                    }}
                  />
                  <MapPin
                    size={16}
                    color="#38bdf8"
                    style={{ position: "absolute", left: "10px", top: "50%", transform: "translateY(-50%)" }}
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", padding: "14px", fontSize: "16px", marginTop: "6px" }}
              >
                <Wrench size={18} /> Confirm Doorstep Service Call
              </button>
            </form>

            <div
              style={{
                marginTop: "16px",
                paddingTop: "16px",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "10px",
              }}
            >
              <button
                type="button"
                onClick={handleDirectCall}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "rgba(56, 189, 248, 0.1)",
                  border: "1px solid rgba(56, 189, 248, 0.25)",
                  color: "#38bdf8",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <Phone size={14} /> Call Technician
              </button>
              <button
                type="button"
                onClick={handleWhatsAppBooking}
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "10px",
                  borderRadius: "10px",
                  background: "rgba(16, 185, 129, 0.12)",
                  border: "1px solid rgba(16, 185, 129, 0.3)",
                  color: "#34d399",
                  fontSize: "13px",
                  fontWeight: 600,
                }}
              >
                <MessageSquare size={14} /> WhatsApp Chat
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
