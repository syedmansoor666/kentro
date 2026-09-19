"use client";

import React from "react";
import {
  AlertTriangle,
  Droplets,
  PowerOff,
  Gauge,
  Volume2,
  Filter,
  Flame,
  HelpCircle,
  ArrowRight,
} from "lucide-react";

interface ProblemSolverProps {
  onSelectProblem: (problemName: string) => void;
}

export default function ProblemSolver({ onSelectProblem }: ProblemSolverProps) {
  const problems = [
    {
      icon: <PowerOff size={24} color="#ef4444" />,
      title: "RO purifier not turning on",
      cause: "Power adapter/SMPS failure, blown internal fuse, or float switch disconnection.",
      actionLabel: "Fix Power Issue",
    },
    {
      icon: <Gauge size={24} color="#f59e0b" />,
      title: "Water coming very slowly",
      cause: "Choked sediment/carbon filters, weak booster pump pressure, or blocked RO membrane.",
      actionLabel: "Restore Flow",
    },
    {
      icon: <Droplets size={24} color="#06b6d4" />,
      title: "RO continuously draining water",
      cause: "Faulty Auto Shut-Off (ASV) valve, malfunctioning solenoid valve, or low pressure.",
      actionLabel: "Stop Drain Waste",
    },
    {
      icon: <AlertTriangle size={24} color="#f97316" />,
      title: "Water leaking from purifier",
      cause: "Loose push-fit connector, cracked filter housing, worn O-ring, or internal tube rupture.",
      actionLabel: "Fix Water Leak",
    },
    {
      icon: <HelpCircle size={24} color="#8b5cf6" />,
      title: "Bad taste or smell",
      cause: "Expired post-carbon cartridge, biofilm inside storage tank, or exhausted RO membrane.",
      actionLabel: "Restore Pure Taste",
    },
    {
      icon: <Filter size={24} color="#10b981" />,
      title: "Filter replacement due",
      cause: "Overdue 6-12 month maintenance cycle or high Bangalore borewell sediment choking.",
      actionLabel: "Replace Filters",
    },
    {
      icon: <Volume2 size={24} color="#ec4899" />,
      title: "RO making unusual noise",
      cause: "Air trapped in filter system, bearing wear in booster pump, or vibrating mounting.",
      actionLabel: "Silence Purifier",
    },
    {
      icon: <Flame size={24} color="#eab308" />,
      title: "Low water output",
      cause: "Depleted pressure tank, high incoming TDS saturation, or choked pre-sediment line.",
      actionLabel: "Boost Output",
    },
  ];

  return (
    <section className="section" id="problems">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">Quick Diagnostic Check</span>
          <h2 className="section-title">
            Common <span className="gradient-text-pure">RO Problems</span> We Fix
          </h2>
          <p className="section-subtitle">
            Notice any of these warning signs? Don&apos;t wait for your purifier to stop completely. Select your problem to schedule an immediate doorstep technician inspection.
          </p>
        </div>

        {/* Problems Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "20px",
          }}
        >
          {problems.map((p, index) => (
            <a
              key={index}
              href={`https://wa.me/917708982342?text=${encodeURIComponent(`Hi Bangalore RO Care, my RO purifier has this issue: "${p.title}". Please arrange a doorstep technician visit.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                padding: "24px 20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
                textDecoration: "none",
                color: "inherit",
              }}
            >
              <div>
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
                  {p.icon}
                </div>

                <h3
                  style={{
                    fontSize: "17px",
                    fontWeight: 700,
                    marginBottom: "8px",
                    color: "#f8fafc",
                    lineHeight: 1.35,
                  }}
                >
                  {p.title}
                </h3>

                <p style={{ fontSize: "13px", color: "#94a3b8", lineHeight: 1.5, marginBottom: "20px" }}>
                  {p.cause}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(255, 255, 255, 0.06)",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#38bdf8",
                }}
              >
                <span>{p.actionLabel}</span>
                <ArrowRight size={15} />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Banner */}
        <div
          style={{
            marginTop: "36px",
            textAlign: "center",
            padding: "20px",
            borderRadius: "16px",
            background: "linear-gradient(90deg, rgba(2, 132, 199, 0.15) 0%, rgba(16, 185, 129, 0.15) 100%)",
            border: "1px solid rgba(56, 189, 248, 0.2)",
          }}
        >
          <span style={{ fontSize: "15px", color: "#e2e8f0", fontWeight: 600 }}>
            Let our technician inspect your purifier at your doorstep today.
          </span>
        </div>
      </div>
    </section>
  );
}
