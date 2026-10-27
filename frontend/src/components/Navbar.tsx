import { Link, NavLink } from "react-router-dom";
export default function Navbar() {
  return <header className="site-header"><nav className="container nav" aria-label="Main navigation">
    <Link to="/" className="brand"><span className="brand-mark" aria-hidden="true">↻</span><span>Fulda <strong>ReUse</strong></span></Link>
    <div className="nav-links"><NavLink to="/" end>Home</NavLink><NavLink to="/about">About</NavLink></div>
  </nav></header>;
}
