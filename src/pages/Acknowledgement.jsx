import React from 'react';
import '../styles/page.css';

/**
 * Acknowledgement Page
 * Follows Microsoft CMT requirements for static, plain-text acknowledgment.
 */
export default function Acknowledgement() {
  return (
    <div className="page-wrapper">
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">AICARE 2027</span>
          <h1>CMT ACKNOWLEDGMENT</h1>
          <p>Recognizing our technical partners and supporters.</p>
        </div>
      </div>

      {/* ── PAGE BODY ── */}
      <div className="page-body">
        <div className="page-card">
          <h2>Microsoft CMT</h2>
          
          {/* 
              COMPLIANCE CHECK: 
              1. Plain text in a paragraph.
              2. Static part of the page.
              3. No bold, strong, or italics.
              4. Visible in "View Source".
          */}
          <p>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </div>
  );
}