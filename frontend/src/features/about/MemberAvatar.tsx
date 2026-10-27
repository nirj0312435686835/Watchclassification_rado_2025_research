import type { TeamMember } from "../../data/team/types";
import { roleBg } from "./roleColors";

interface MemberAvatarProps {
  member: TeamMember;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((word) => word[0])
    .join("");
}

export default function MemberAvatar({ member, className = "" }: MemberAvatarProps) {
  if (member.image) {
    return (
        <img
            src={member.image}
            alt={member.name}
            className={`rounded-full object-cover ${className}`}
        />
    );
  }
  return (
      <span
          aria-hidden="true"
          className={`grid shrink-0 place-items-center rounded-full font-bold tracking-wide text-white ${roleBg[member.roleType]} ${className}`}
      >
      {getInitials(member.name)}
    </span>
  );
}
