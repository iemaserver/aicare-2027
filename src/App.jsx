import { Routes, Route } from 'react-router-dom';
import './styles/main.css';

import NavBar    from './components/NavBar';
import Footer    from './components/Footer';

// Pages
import Tracks                 from './pages/Tracks';
import HomePage               from './pages/HomePage';
import PaperSubmission        from './pages/PaperSubmission';
import ImportantDates         from './pages/ImportantDates';
import OrganizingCommittee    from './pages/OrganizingCommittee';
import TechnicalCommittee     from './pages/TechnicalCommittee';
import AdvisoryBoard          from './pages/AdvisoryBoard';
import Speakers               from './pages/Speakers';
import Registration           from './pages/Registration';
import Venue                  from './pages/Venue';
import ProgramSchedule        from './pages/ProgramSchedule';
import Contact                from './pages/Contact';
import AboutUniversity        from './pages/AboutUniversity';
import AboutRenewableEnergy   from './pages/AboutRenewableEnergy';
import AboutAstronomy         from './pages/AboutAstronomy';
import InternationalAdvisory  from './pages/InternationalAdvisory';
import StudentCommittee       from './pages/StudentCommittee';
import PresentationGuidelines from './pages/PresentationGuidelines';
import Acknowledgement        from './pages/Acknowledgement';
import NotFound               from './pages/NotFound';
import Gallery from './pages/Gallery';

export default function App() {
  return (
    <>
      <NavBar />

      <Routes>
        {/* Home */}
        <Route path="/"                            element={<HomePage />} />

        {/* Call For Papers */}
        <Route path="/call-for-papers/submission"  element={<PaperSubmission />} />
        <Route path="/call-for-papers/dates"       element={<ImportantDates />} />
        <Route path="/call-for-papers/tracks"      element={<Tracks />} />
        <Route path="/call-for-papers/presentation-guidelines" element={<PresentationGuidelines />} />

        {/* Committee */}
        <Route path="/committee/organizing"        element={<OrganizingCommittee />} />
        <Route path="/committee/technical"         element={<TechnicalCommittee />} />
        <Route path="/committee/advisory"          element={<AdvisoryBoard />} />
        <Route path="/committee/international-advisory" element={<InternationalAdvisory />} />
        <Route path="/committee/student"           element={<StudentCommittee />} />

        {/* About */}
        <Route path="/about/university"            element={<AboutUniversity />} />
        <Route path="/about/renewable-energy"      element={<AboutRenewableEnergy />} />
        <Route path="/about/astronomy"             element={<AboutAstronomy />} />

        {/* Other pages */}
        <Route path="/speakers"                    element={<Speakers />} />
        <Route path="/registration"                element={<Registration />} />
        <Route path="/venue"                       element={<Venue />} />
        <Route path="/program-schedule"            element={<ProgramSchedule />} />
        <Route path="/contact"                     element={<Contact />} />
        
        {/* Acknowledgement */}
        <Route path="/acknowledgement"             element={<Acknowledgement />} />
        <Route path="/gallery" element={<Gallery />} />
        {/* Catch-All 404 Route (Must be last) */}
        <Route path="*"                            element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}