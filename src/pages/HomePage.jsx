import SponsorStrip from '../components/SponsorStrip';
import LogoStrip from '../components/LogoStrip';
import AnnouncementBar from '../components/AnnouncementBar'; // Import it here
import Hero from '../components/Hero';
import TickerBar from '../components/TickerBar';
import MainContent from '../components/MainContent';

export default function HomePage() {
  return (
    <>
      <SponsorStrip />
      <LogoStrip />
      {/* Announcement bar placed under the four logos */}
      <AnnouncementBar />
      <Hero />
      <TickerBar />
      <MainContent />
    </>
  );
}