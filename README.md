# CZP Design System

ระบบดีไซน์สำหรับ **Citizen Portal (พอร์ทัลประชาชน)** — ใช้ร่วมกันระหว่าง `czp-web` (Next.js) และ `czp-mobile` (Flutter)

> พัฒนาและดูแลโดย [สำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน)](https://www.dga.or.th)

---

## สิ่งที่อยู่ในโปรเจกต์นี้

| โฟลเดอร์/ไฟล์ | คำอธิบาย |
|---|---|
| `colors_and_type.css` | Design tokens เป็น CSS custom properties (สี, ตัวอักษร, ระยะห่าง, มุมโค้ง, เงา) + `.t-*` utility classes |
| `tokens.json` | โทเค็นในรูปแบบ JSON — สำหรับ Figma Token Studio / Style Dictionary |
| `fonts/` | Anuphan 7 น้ำหนัก (Thin 100 → Bold 700) — self-hosted |
| `docs/` | Documentation site (HTML static) — landing, foundations, components, downloads |
| `ui_kits/czp-web/` | Interactive React prototype — Header, Hero, ServiceGrid, StatusRow, Footer, LoginModal |
| `preview/` | Preview cards สำหรับแต่ละโทเค็น/คอมโพเนนต์ |
| `uploads/DESIGN.md` | สเปกดีไซน์ซิสเต็มต้นฉบับ (machine-readable) |
| `SKILL.md` | Agent skill สำหรับ Claude Code |
| `netlify.toml` | การตั้งค่า Netlify deploy |

---

## เริ่มต้นใช้งาน

### 1. Clone
```bash
git clone https://github.com/DGA-Thailand/czp-design-system.git
cd czp-design-system
```

### 2. เปิดในเบราว์เซอร์
ไม่ต้อง build — เป็น static site
```bash
python3 -m http.server 8000
# เปิด http://localhost:8000/docs/index.html
```

### 3. Deploy ไป Netlify
```bash
# ติดตั้ง Netlify CLI
npm i -g netlify-cli
netlify deploy --prod --dir=.
```
หรือ drag-and-drop โฟลเดอร์ทั้งหมดลง https://app.netlify.com/drop

---

## การใช้งานใน `czp-web` (Next.js)

```ts
// app/layout.tsx
import "czp-design-system/colors_and_type.css";
```

```css
.my-button {
  background: var(--primary-30-base);
  border-radius: var(--radius-full);
  padding: 0 var(--spacing-xl);
  min-height: 48px;
}
```

## การใช้งานใน `czp-mobile` (Flutter)

ใช้ค่าจาก `tokens.json` โดยตรง — โทเค็นชุดเดียวกันบังคับความสอดคล้องระหว่าง platform

---

## โครงสร้างโทเค็น

- **สี** — 7 palettes (primary/secondary/neutral/danger/positive/warning/info) × scale 0→100 + semantic background/foreground/stroke tokens
- **ตัวอักษร** — Anuphan, scales: display (57/46/36), headline (32/28/24), title (18/16/14), body (16/14/12), label (16/14/12/11)
- **ระยะห่าง** — xxs (2px) → 11xl (160px) บน 4-base
- **มุมโค้ง** — xxs (2) → 4xl (24) → full (1000 — ใช้กับปุ่ม/badge)
- **เงา** — 3 ระดับ: custom / custom-lg / custom-xl

ดูรายละเอียดเต็มที่ `docs/foundations/`

---

## Contributing

1. Fork repo นี้
2. สร้าง branch ใหม่: `git checkout -b feat/your-feature`
3. Commit: `git commit -m 'feat: เพิ่ม component X'`
4. Push: `git push origin feat/your-feature`
5. เปิด Pull Request

หลักการสำคัญ:
- **ไม่เปลี่ยนค่าโทเค็นโดยไม่ sync** กับทีม `czp-mobile`
- เพิ่มคอมโพเนนต์ใหม่ต้องมี preview card ใน `preview/` และเอกสารใน `docs/components/`
- ใช้โทเค็น (CSS vars) เสมอ ไม่ hardcode ค่าสี

---

## License

Apache-2.0 — ดูที่ [LICENSE](./LICENSE)

---

## Contact

- Organization: [DGA-Thailand](https://github.com/DGA-Thailand)
- Website: https://www.dga.or.th
