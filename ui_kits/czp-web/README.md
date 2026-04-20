# CZP Web UI Kit

High-fidelity React recreation of the Citizen Portal (CZP Web) marketing + dashboard surface.

## Files
- `index.html` — interactive prototype (log-in → see status table)
- `components.jsx` — primitives: `Button`, `IconButton`, `Badge`, `Input`, `Card`, `Avatar`, `Switch`, typography, `Icon`
- `sections.jsx` — `Header`, `Hero`, `ServiceGrid`, `StatusRow`, `Footer`, `LoginModal`

## Tokens
All colors / typography / spacing / radii come from `../../colors_and_type.css` (CSS vars). Values are mirrored inline in JSX where convenient.

## Known simplifications
- Not using real shadcn/Radix — these are cosmetic recreations (no focus trap, portal, etc.)
- Logo "CZ" is a placeholder wordmark; real brand mark not supplied.
- Icons use inline lucide-style SVGs (substitute — the real app uses `lucide-react` + Material Symbols).
- Thai copy is sample content, not verbatim from the live product.
