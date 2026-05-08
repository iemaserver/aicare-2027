import React from 'react';
import { Link } from 'react-router-dom';
import PixelBlast from '../components/PixelBlast'; // Adjust path if needed

export default function NotFound() {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #05101f 0%, #0a1c3a 60%, #040b18 100%)',
      overflow: 'hidden',
      color: '#fff',
      textAlign: 'center',
      padding: '20px'
    }}>
      {/* ── Animated Background ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0, opacity: 0.5 }}>
        <PixelBlast
          variant="circle"
          pixelSize={3}
          color="#e8a020" // Gold accent for the 404 page
          patternScale={2.5}
          enableRipples
          rippleSpeed={0.2}
          speed={0.4}
          transparent
        />
      </div>

      {/* ── Floating Content ── */}
      <div style={{ position: 'relative', zIndex: 1, animation: 'float404 6s ease-in-out infinite' }}>
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: 'clamp(100px, 15vw, 180px)',
          fontWeight: 900,
          margin: 0,
          lineHeight: 1,
          background: 'linear-gradient(to right, #ffffff, #2e6fd4)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          textShadow: '0 10px 40px rgba(46,111,212,0.3)'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: 'clamp(22px, 4vw, 32px)',
          fontWeight: 600,
          marginBottom: '16px',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          Lost in Space
        </h2>
        <p style={{
          fontSize: '16px',
          color: 'rgba(220, 235, 255, 0.7)',
          maxWidth: '420px',
          margin: '0 auto 36px',
          lineHeight: 1.6
        }}>
          The page you are looking for has been moved, deleted, or possibly swallowed by a black hole.
        </p>
        
        <Link to="/" style={{
          display: 'inline-flex',
          background: '#e8a020',
          color: '#05101f',
          textDecoration: 'none',
          padding: '14px 32px',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '1px',
          boxShadow: '0 4px 15px rgba(232, 160, 32, 0.4)',
          transition: 'transform 0.2s, box-shadow 0.2s'
        }}
        onMouseOver={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 8px 25px rgba(232, 160, 32, 0.6)';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(232, 160, 32, 0.4)';
        }}
        >
          Return to Base
        </Link>
      </div>

      {/* Inline CSS Animation */}
      <style>{`
        @keyframes float404 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px); }
        }
      `}</style>
    </div>
  );
}