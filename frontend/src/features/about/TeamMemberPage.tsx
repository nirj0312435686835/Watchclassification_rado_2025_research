import { Link, useParams } from "react-router-dom";
import { teamMembers } from "../../data/teamMembers";

export default function TeamMemberPage() {
  const { slug } = useParams();
  const member = teamMembers.find((person) => person.slug === slug);
  if (!member) return <main className="container page"><h1>Team member not found</h1><Link className="button" to="/">Meet the team</Link></main>;
  return <main className="container page profile-page"><Link className="text-link" to="/">← Back to team</Link>
    <article className="profile-card">
      {member.image ? <img className="profile-avatar" src={member.image} alt={member.name}/> :
        <span className="profile-avatar avatar-initials" aria-hidden="true">{member.name.split(" ").map((part) => part[0]).slice(0, 2).join("")}</span>}
      <p className="eyebrow">TEAM MEMBER</p><h1>{member.name}</h1><p className="profile-role">{member.role}</p>
      <p>{member.bio}</p><p className="member-github">GitHub: @{member.github}</p>
      <p className="profile-note">Profile data is maintained in <code>src/data/teamMembers.ts</code>.</p>
    </article>
  </main>;
}
