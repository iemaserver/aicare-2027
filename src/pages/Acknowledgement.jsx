import React from 'react';

export default function Acknowledgement() {
  return (
    <div className="page-wrapper">
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">AICARE 2027</span>
          <h1>Acknowledgement</h1>
          <p>Recognizing our technical partners and supporters.</p>
        </div>
      </div>

      {/* ── PAGE BODY ── */}
      <div className="page-body">
        <div className="page-card" style={{ textAlign: 'center', padding: '60px 40px' }}>
          <h2 style={{ borderBottom: 'none', marginBottom: '24px' }}>Microsoft CMT</h2>
          <p style={{ fontSize: '16px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. 
            This service was provided for free by Microsoft and they bore all expenses, including costs for 
            Azure cloud services as well as for software development and support.
          </p>
        </div>
      </div>
    </div>
  );
}