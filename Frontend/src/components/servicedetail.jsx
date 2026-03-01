// src/pages/ServiceDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

const serviceData = [
  {
    id: "developer-banking-apis",
    title: "Developer Banking APIs",
    desc: "Integrate secure banking, payments, and transaction APIs into your applications effortlessly.",
    details: "Our Developer Banking APIs allow engineers to integrate secure banking, manage accounts, process payments, and handle transactions with simple REST endpoints and SDKs. Ideal for SaaS apps, fintech startups, and internal tools.",
  },
  {
    id: "investment-portfolio-tools",
    title: "Investment & Portfolio Tools",
    desc: "Visualize and manage your investments or company funds with developer-friendly dashboards.",
    details: "Our investment dashboards provide real-time analytics, portfolio insights, and alerts for software engineers managing personal or team investments. Fully customizable and API-ready.",
  },
  {
    id: "smart-payroll-solutions",
    title: "Smart Payroll Solutions",
    desc: "Automate salary payments, tax deductions, and benefits management for your tech team.",
    details: "Automate salary disbursement, tax computation, and benefits for your software team. Integrates with multiple banking APIs for smooth payroll management.",
  },
  {
    id: "startup-financial-toolkit",
    title: "Startup Financial Toolkit",
    desc: "Accounting, invoicing, and fundraising insights tailored for software startups.",
    details: "A complete financial toolkit for startups: invoicing, accounting, fundraising analytics, and budget tracking to help your tech company scale faster.",
  },
  {
    id: "team-savings-chamas",
    title: "Team Savings & Chamas",
    desc: "Manage group savings, contributions, and growth for your team or developer community.",
    details: "Keep track of team contributions, group savings, or developer community funds with transparency and automated tracking.",
  },
  {
    id: "financial-analytics-dashboard",
    title: "Financial Analytics Dashboard",
    desc: "Track project finances, expenses, and KPIs with interactive charts and insights.",
    details: "Visualize all your project finances, expenses, and KPIs in one dashboard. Export data, get analytics alerts, and make data-driven decisions.",
  },
];

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const service = serviceData.find((s) => s.id === serviceId);

  if (!service)
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-[#F7FAFC] p-6">
        <h2 className="text-3xl font-bold text-[#1F2F55] mb-4">Service Not Found</h2>
        <Link
          to="/services"
          className="bg-[#1A7FC7] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#00AFC4] transition"
        >
          Back to Services
        </Link>
      </div>
    );

  return (
    <div className="min-h-screen bg-[#F7FAFC] pt-32 px-6">
      <Link
        to="/services"
        className="text-[#1A7FC7] font-semibold hover:underline mb-6 inline-block"
      >
        ← Back to Services
      </Link>
      <h1 className="text-5xl font-bold text-[#1F2F55] mb-6">{service.title}</h1>
      <p className="text-[#1F2F55]/80 text-lg mb-6">{service.desc}</p>
      <p className="text-[#1F2F55]/70 text-base">{service.details}</p>
    </div>
  );
}