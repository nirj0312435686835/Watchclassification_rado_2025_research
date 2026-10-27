import { Link } from "react-router-dom";

export default function NotFoundPage() {
    return (
        <section className="mx-auto max-w-xl text-center">
            <h1 className="mb-4 text-3xl font-bold">Page not found</h1>
            <Link to="/about" className="font-semibold text-link hover:underline">
                ← Team 2 - About Us
            </Link>
        </section>
    );
}
