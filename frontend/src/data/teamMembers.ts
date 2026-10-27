export interface TeamMember {
  slug: string;
  name: string;
  github: string;
  role: string;
  image?: string;
  bio: string;
}

/**
 * Add one object per teammate. Slugs must be unique.
 * Images belong in frontend/public/team/. Only add images with permission.
 */
export const teamMembers: TeamMember[] = [
  {
    slug: "replace-with-your-slug",
    name: "Replace With Your Name",
    github: "replace-with-github",
    role: "Team Member",
    image: "",
    bio: "I contribute to building a useful marketplace for the Fulda student community."
  }
];
