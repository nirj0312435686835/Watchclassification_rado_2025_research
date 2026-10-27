import { Link } from "react-router-dom";
import type { TeamMember } from "../../data/team/types";
import MemberAvatar from "./MemberAvatar";
import { roleBg } from "./roleColors";

interface FlipCardProps {
    member: TeamMember;
}

const face =
    "absolute inset-0 flex flex-col items-center justify-center rounded-2xl px-4 py-5 text-center backface-hidden";

export default function FlipCard({ member }: FlipCardProps) {
    return (
        <Link
            to={`/team/${member.slug}`}
            className="group block h-64 rounded-2xl perspective-midrange focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-link"
        >
            <div className="relative h-full w-full transition-transform duration-500 transform-3d group-hover:rotate-y-180 group-focus-visible:rotate-y-180 motion-reduce:transition-none">

                <div className={`${face} border-[1.5px] border-card-border bg-white`}>
                    <MemberAvatar member={member} className="mb-3 size-28 text-3xl" />
                    <h3 className="mb-1 font-bold">{member.name}</h3>
                    <p className="font-mono text-xs text-muted wrap-anywhere">
                        @{member.github} · {member.role}
                    </p>
                </div>


                <div className={`${face} rotate-y-180 text-white ${roleBg[member.roleType]}`}>
                    <p className="mb-1.5 text-xl font-extrabold">{member.role}</p>
                    <p className="mb-3.5 text-sm">{member.roleSummary}</p>
                    <span className="rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-ink">
            View profile →
          </span>
                </div>
            </div>
        </Link>
    );
}