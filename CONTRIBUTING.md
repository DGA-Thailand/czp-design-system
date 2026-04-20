# Contributing to CZP Design System

ขอบคุณที่สนใจร่วมพัฒนาระบบดีไซน์ของพอร์ทัลประชาชน

## กระบวนการ

1. เปิด Issue อธิบายการเปลี่ยนแปลงก่อนเริ่มงานใหญ่
2. Fork → branch → commit → PR
3. ใช้ conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `chore:`

## โทเค็น

- **ห้ามเพิ่มสี/ขนาดใหม่แบบ hardcode** — ให้เพิ่มโทเค็นใน `colors_and_type.css` แล้วอ้างอิงผ่าน CSS variable
- การเปลี่ยนค่าโทเค็นต้อง sync กับทีม `czp-mobile` (Flutter) ก่อน
- รัน `run_script` / สคริปต์ local เพื่อ regen `tokens.json` หลังเปลี่ยน CSS

## คอมโพเนนต์ใหม่

ต้องมี:
1. Preview card ใน `preview/` (HTML standalone)
2. หน้าเอกสารใน `docs/components/`
3. JSX component ใน `ui_kits/czp-web/components.jsx` หรือ `sections.jsx`
4. ลงทะเบียนใน sidebar nav (`docs/docs.js`)

## Design review

- Screenshots ก่อน/หลัง ใน PR
- แนบลิงก์ Netlify deploy preview
- Tag `@DGA-Thailand/design` สำหรับ review

## Accessibility

- WCAG 2.1 AA เป็นขั้นต่ำ
- ทุก interactive element มี focus state ที่มองเห็น
- Touch target ≥ 44×44px
- ไม่สื่อสารข้อมูลด้วยสีเพียงอย่างเดียว
