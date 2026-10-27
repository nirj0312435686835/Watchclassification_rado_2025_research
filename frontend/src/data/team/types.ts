/** Kind of role - decides the colour of the card and the role badge. */
export type RoleType = "lead" | "frontend" | "backend" | "github";

export interface TeamMember {
  /** Part of the page address: /team/<slug>. Must be unique. */
  slug: string;
  /** Position of the card on the ABOUT page (1 = first). */
  order: number;
  name: string;
  /** GitHub username without "@". */
  github: string;
  /** Team role, e.g. "Frontend Developer". */
  role: string;
  roleType: RoleType;
  /** One short sentence for the back of the card. */
  roleSummary: string;
  /** Path to an image in public/team/, e.g. "/team/tina.jpg". Without it the initials are shown. */
  image?: string;
  /** "About me" section: 2-3 sentences. */
  about?: string;
  /** "My role in the project" section. */
  projectRole?: string;
  skills?: string[];
  /** University e-mail, shown as text (no e-mail links). */
  email?: string;
  linkedin?: string;
}
