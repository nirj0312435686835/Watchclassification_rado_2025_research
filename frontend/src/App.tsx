import { Link, Route, Routes } from "react-router-dom";
import DemoBanner from "./components/DemoBanner";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutPage from "./features/about/AboutPage";
import TeamMemberPage from "./features/about/TeamMemberPage";
import { teamMembers } from "./data/teamMembers";

function HomePage() {
  return (
    <main className="container page">
      <section className="hero">
        <p className="eyebrow">FULDA REUSE MARKET</p>
        <h1>Good finds. New beginnings.</h1>
        <p className="hero-copy">A student-powered place to sell, give away, or borrow useful items in Fulda. Make moving easier and give everyday things a second life.</p>
        <Link className="button" to="/about">Meet the team</Link>
      </section>
      <section className="section">
        <div className="section-heading">
          <div><p className="eyebrow">THE PEOPLE BEHIND THE PROJECT</p><h2>Meet our team</h2></div>
          <Link to="/about" className="text-link">About the project →</Link>
        </div>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <Link className="member-card" to={`/team/${member.slug}`} key={member.slug}>
              {member.image ? <img className="avatar" src={member.image} alt={member.name} /> :
                <span className="avatar avatar-initials" aria-hidden="true">{member.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>}
              <h3>{member.name}</h3><p>{member.role}</p><span className="member-github">@{member.github}</span>
            </Link>
          ))}
        </div>
        {teamMembers.length === 0 && <p className="empty-state">Add team members in src/data/teamMembers.ts.</p>}
      </section>
    </main>
  );
}

function NotFound() {
  return <main className="container page"><h1>Page not found</h1><p>The page may have moved.</p><Link className="button" to="/">Return home</Link></main>;
}

export default function App() {
  return <>
    <DemoBanner /><Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/team/:slug" element={<TeamMemberPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </>;
}
