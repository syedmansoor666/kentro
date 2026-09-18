"use client";

import React from "react";
import { Phone } from "lucide-react";

export default function MobileBottomBar() {
  return (
    <aside
      aria-label="Mobile quick actions"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 999,
        background: "rgba(5, 11, 20, 0.95)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderTop: "1px solid rgba(56, 189, 248, 0.25)",
        boxShadow: "0 -8px 25px rgba(0, 0, 0, 0.7)",
        padding: "10px 16px",
      }}
      className="mobile-bottom-bar"
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
        }}
      >
        {/* Full Width Primary Action: Book Service Now (Direct Tel Link) */}
        <a
          href="tel:+919886012345"
          className="btn-primary"
          style={{
            width: "100%",
            height: "50px",
            padding: "0 20px",
            fontSize: "15px",
            fontWeight: 800,
            letterSpacing: "0.03em",
            borderRadius: "14px",
            boxShadow: "0 4px 20px rgba(14, 165, 233, 0.55)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            textDecoration: "none",
          }}
          id="mobile-book-call-btn"
          aria-label="Book Service Now via direct phone call"
        >
          <Phone size={19} />
          <span>Book Service Now</span>
        </a>
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-bottom-bar {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
