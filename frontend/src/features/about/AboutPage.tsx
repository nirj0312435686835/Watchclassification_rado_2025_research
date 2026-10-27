import { teamMembers } from "../../data/team";
import FlipCard from "./FlipCard";

export default function AboutPage() {
    return (
        <section className="mx-auto max-w-4xl">
            <header className="mb-3 text-center">
                <h1 className="mb-1.5 text-2xl font-bold sm:text-3xl">
                    Global Distributed Software Development
                </h1>
                <p className="mb-3.5 text-muted">Fulda University of Applied Sciences - Fall 2026</p>
                <h2 className="text-xl font-bold sm:text-2xl">Team 2 - About Us</h2>
            </header>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
                {teamMembers.map((member) => (
                    <FlipCard key={member.slug} member={member} />
                ))}
            </div>
        </section>
    );
}