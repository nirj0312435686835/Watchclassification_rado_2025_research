import type { TeamMember } from "./types";

// Every file in ./members/ is one team member. A new file is picked up automatically.
const memberFiles = import.meta.glob<TeamMember>("./members/*.ts", {
  eager: true,
  import: "default",
});

export const teamMembers: TeamMember[] = Object.values(memberFiles).sort(
  (a, b) => a.order - b.order,
);

export function getMemberBySlug(slug: string): TeamMember | undefined {
  return teamMembers.find((member) => member.slug === slug);
}
