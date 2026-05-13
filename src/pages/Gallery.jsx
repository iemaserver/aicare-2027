import React from 'react';

const galleryImages = [
  { src: '/images/campus/image copy 2.png', alt: 'AICARE Session 1' },
  { src: '/images/campus/image copy 3.png', alt: 'UEMK Campus' },
  { src: '/images/campus/image copy 4.png', alt: 'Conference Keynote' },
  { src: '/images/campus/image copy.png',   alt: 'Conference Photos' }
];

export default function Gallery() {
  return (
    <div className="page-wrapper" style={{ overflowX: 'hidden' }}>
      {/* ── PAGE HERO ── */}
      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="page-tag">AICARE 2027</span>
          <h1>Event Gallery</h1>
          <p>Highlights from our sessions and campus life.</p>
        </div>
      </div>

      {/* ── FULL WIDTH GALLERY BODY ── */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2px', // Google Photos 2px white grid lines
        width: '100%',
        background: '#fff',
        padding: '2px 0' 
      }}>
        {galleryImages.map((img, index) => (
          <div 
            key={index} 
            style={{ 
              flex: '1 1 auto', 
              
              /* Responsive height: 320px on desktop, shrinks down to 220px on mobile to prevent extreme side-cropping */
              height: 'clamp(220px, 35vh, 320px)', 
              
              /* Ensures photos don't get too thin, but maxes out at 100% so it doesn't break mobile edges */
              minWidth: '280px', 
              maxWidth: '100%', 
              
              overflow: 'hidden',
              background: '#e0e0e0' // Fallback color while loading
            }}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover', // Fills the tile perfectly
                display: 'block'
              }} 
            />
          </div>
        ))}
        {/* The invisible spacer was REMOVED. Now all rows will stretch to fill 100% of the width. */}
      </div>
    </div>
  );
}