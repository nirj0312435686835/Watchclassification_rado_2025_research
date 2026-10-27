import { Link, useParams } from "react-router-dom";
import NotFoundPage from "../../components/NotFoundPage";
import { getMemberBySlug } from "../../data/team";
import MemberAvatar from "./MemberAvatar";
import { roleBg } from "./roleColors";

const box = "rounded-2xl border border-line bg-white p-5 sm:p-6";
const contact =
    "rounded-full border-[1.5px] border-card-border bg-white px-3.5 py-2 text-sm font-semibold text-contact-ink hover:bg-skill";

export default function TeamMemberPage() {
    const { slug } = useParams();
    const member = slug ? getMemberBySlug(slug) : undefined;

    if (!member) {
        return <NotFoundPage />;
    }

    return (
        <article className="mx-auto max-w-3xl">
            <Link to="/about" className="mb-5 inline-block font-semibold text-link hover:underline">
                ← Team 2 - About Us
            </Link>

            <header className={`${box} flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-7 sm:text-left`}>
                <MemberAvatar member={member} className="size-32 text-4xl" />
                <div>
                    <h1 className="mb-2 text-3xl font-bold">{member.name}</h1>
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold text-white ${roleBg[member.roleType]}`}>
            {member.role}
          </span>
                    <p className="mt-2.5 font-mono text-xs text-muted">@{member.github}</p>
                </div>
            </header>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {member.about && (
                    <section className={box}>
                        <h2 className="mb-2 font-bold">About me</h2>
                        <p className="leading-relaxed text-muted">{member.about}</p>
                    </section>
                )}

                <section className={box}>
                    <h2 className="mb-2 font-bold">My role in the project</h2>
                    <p className="leading-relaxed text-muted">{member.projectRole ?? member.roleSummary}</p>
                </section>

                {member.skills && member.skills.length > 0 && (
                    <section className={box}>
                        <h2 className="mb-2 font-bold">Skills</h2>
                        <ul className="flex flex-wrap gap-1.5">
                            {member.skills.map((skill) => (
                                <li key={skill} className="rounded-lg bg-skill px-2.5 py-1 text-sm">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                <section className={box}>
                    <h2 className="mb-2 font-bold">Contacts</h2>
                    <div className="flex flex-wrap gap-2.5">
                        <a href={`https://github.com/${member.github}`} target="_blank" rel="noreferrer" className={contact}>
                            GitHub
                        </a>
                        {member.linkedin && (
                            <a href={member.linkedin} target="_blank" rel="noreferrer" className={contact}>
                                LinkedIn
                            </a>
                        )}
                    </div>

                    {member.email && <p className="mt-3 text-sm text-muted wrap-anywhere">{member.email}</p>}
                </section>
            </div>
        </article>
    );
}