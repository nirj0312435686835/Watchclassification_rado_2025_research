import { Link } from "react-router-dom";
export default function Footer() {
  return <footer className="site-footer"><div className="container footer-inner">
    <div><Link to="/" className="brand footer-brand">Fulda <strong>ReUse Market</strong></Link><p>A university software engineering demonstration project.</p></div>
    <Link to="/about" className="text-link">About the project</Link>
  </div></footer>;
}
