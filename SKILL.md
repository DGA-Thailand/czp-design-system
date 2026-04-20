---
name: czp-design
description: Use this skill to generate well-branded interfaces and assets for CZP (Citizen Portal / พอร์ทัลประชาชน), a Thai government services portal. Contains the full design token system (shared with the mobile app), Anuphan typography scale, colour palettes, spacing/radius/shadow tokens, component previews, and a React UI kit for prototyping or production code.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

Key files:
- `colors_and_type.css` — all design tokens as CSS custom properties. Import this at the top of any prototype HTML.
- `preview/` — static preview cards for every token group. Great reference while designing.
- `ui_kits/czp-web/` — React components (`components.jsx`, `sections.jsx`) and an interactive `index.html` demo. Copy components out for prototypes.
- `uploads/DESIGN.md` — original machine-readable spec, authoritative for any token lookup.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. Always `@import "colors_and_type.css";` and use the CSS variables rather than hex values. Buttons are always pill-shaped (`border-radius: 1000px`), min-height 48px. Use the semantic background/foreground/stroke tokens, not raw palette tokens.

If working on production code, the real app is Next.js 16 + Tailwind v4 + shadcn/ui (new-york) + Radix + lucide-react + next-intl. Tokens live in `src/app/[locale]/globals.css`. Typography uses `next/font/google`'s Anuphan loader with Thai + Latin subsets. Remind the developer to mirror any token changes to the `czp-mobile` repo.

If the user invokes this skill without any other guidance, ask them what they want to build or design (landing section? dashboard screen? form? agent-portal slide?), ask some questions about the target surface (authenticated vs public, mobile vs desktop, Thai vs English), and act as an expert designer who outputs HTML artifacts or production code depending on the need.
