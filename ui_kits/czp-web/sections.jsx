/* @jsx React.createElement */

const { Button, IconButton, Badge, Input, Card, Avatar, Switch, H1, H2, H3, P, Muted, Icon } = window.UI;

// ============== HEADER ==============
function Header({ onMenu, onLogin, signedIn, name }) {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 40,
      background: "#fff",
      borderBottom: "1px solid #ebecee",
      boxShadow: "0 4px 6px -1px rgba(62,67,76,.05)",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "12px 32px",
        display: "flex", alignItems: "center", gap: 24,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: "#008858", color: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 14, letterSpacing: "-0.02em",
          }}>CZ</div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontWeight: 700, fontSize: 16, color: "#25272a", lineHeight: 1.2 }}>Citizen Portal</div>
            <div style={{ fontSize: 11, color: "#62676c" }}>บริการออนไลน์สำหรับประชาชน</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: 4, marginLeft: 16 }}>
          {["หน้าแรก", "บริการ", "เอกสาร", "ข่าวสาร", "ติดต่อ"].map((l, i) => (
            <a key={i} href="#" style={{
              padding: "8px 14px", borderRadius: 8,
              fontSize: 14, fontWeight: 500,
              color: i === 0 ? "#008858" : "#373c41",
              background: i === 0 ? "#ebfaf4" : "transparent",
              textDecoration: "none",
            }}>{l}</a>
          ))}
        </nav>
        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 8 }}>
          <IconButton variant="default" aria-label="Search"><Icon name="search" /></IconButton>
          <IconButton variant="default" aria-label="Notifications"><Icon name="bell" /></IconButton>
          <button style={{
            display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 10px",
            border: "1px solid #dde0e2", borderRadius: 1000, background: "#fff",
            fontSize: 13, color: "#373c41", cursor: "pointer",
          }}>
            <Icon name="globe" size={16} /> TH
          </button>
          {signedIn ? (
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginLeft: 4 }}>
              <Avatar size="md">{name?.[0] || "ก"}</Avatar>
            </div>
          ) : (
            <Button variant="default" onClick={onLogin}>เข้าสู่ระบบ</Button>
          )}
        </div>
      </div>
    </header>
  );
}

// ============== HERO ==============
function Hero({ onCta }) {
  return (
    <section style={{
      background: "linear-gradient(135deg, #006643 0%, #008858 50%, #00b274 100%)",
      color: "#fff", padding: "64px 32px",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "center" }}>
        <div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "4px 12px", borderRadius: 1000,
            background: "rgba(255,255,255,.15)", border: "1px solid rgba(255,255,255,.25)",
            fontSize: 12, fontWeight: 500, marginBottom: 20,
          }}><span style={{width:6,height:6,borderRadius:"50%",background:"#adebd2"}}></span>บริการใหม่ 24/7</div>
          <h1 style={{ fontSize: 48, lineHeight: 1.1, fontWeight: 600, margin: 0, letterSpacing: "-0.02em" }}>
            บริการภาครัฐ<br/>ในที่เดียว
          </h1>
          <p style={{ fontSize: 18, lineHeight: "28px", marginTop: 20, color: "rgba(255,255,255,.85)", maxWidth: 560 }}>
            ยื่นคำร้อง ตรวจสอบสิทธิ์ และจัดการเอกสารของท่านได้อย่างปลอดภัย รวดเร็ว ทุกที่ทุกเวลา ผ่านพอร์ทัลประชาชน
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <Button variant="white" onClick={onCta}>เริ่มต้นใช้งาน →</Button>
            <button style={{
              border: "1px solid rgba(255,255,255,.4)", background: "transparent",
              color: "#fff", padding: "0 20px", minHeight: 48, borderRadius: 1000,
              fontSize: 16, fontWeight: 500, cursor: "pointer",
            }}>เรียนรู้เพิ่มเติม</button>
          </div>
          <div style={{ display: "flex", gap: 32, marginTop: 40 }}>
            {[["2.4M", "ผู้ใช้บริการ"], ["120+", "บริการ"], ["99.9%", "ระบบพร้อมใช้งาน"]].map(([v, l], i) => (
              <div key={i}>
                <div style={{ fontSize: 28, fontWeight: 700 }}>{v}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,.75)" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{
          background: "#fff", borderRadius: 20, padding: 24,
          boxShadow: "0 20px 25px -5px rgba(62,67,76,.1), 0 10px 10px -5px rgba(62,67,76,.04)",
          color: "#25272a",
        }}>
          <div style={{ fontSize: 12, color: "#62676c", textTransform: "uppercase", letterSpacing: ".06em", fontWeight: 600, marginBottom: 12 }}>ค้นหาบริการ</div>
          <Input placeholder="เช่น ทะเบียนบ้าน, ใบอนุญาต..." icon={<Icon name="search" size={18}/>} />
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["ทะเบียนบ้าน", "บัตรประชาชน", "ภาษี", "เบี้ยยังชีพ", "ใบอนุญาต"].map(t => (
              <span key={t} style={{
                padding: "6px 12px", borderRadius: 1000, background: "#f1f3f3",
                fontSize: 12, color: "#373c41", cursor: "pointer",
              }}>{t}</span>
            ))}
          </div>
          <div style={{ height: 1, background: "#ebecee", margin: "20px 0" }} />
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#ebfaf4", color: "#006643", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="shield" size={18} />
            </div>
            <div style={{ fontSize: 12, color: "#373c41" }}>ยืนยันตัวตนด้วย ThaID ปลอดภัยและเชื่อถือได้</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============== SERVICE GRID ==============
function ServiceGrid() {
  const services = [
    { icon: "file", title: "เอกสารรับรอง", desc: "ขอเอกสารรับรองและสำเนาทะเบียน", badge: "ใหม่", tone: "default" },
    { icon: "creditCard", title: "ชำระภาษี", desc: "ชำระภาษีออนไลน์ทุกประเภท", tone: "secondary" },
    { icon: "heart", title: "เบี้ยยังชีพ", desc: "ตรวจสอบสิทธิ์และลงทะเบียนรับเบี้ย", tone: "positive" },
    { icon: "building", title: "ทะเบียนบ้าน", desc: "ย้ายเข้า–ย้ายออก ขอเลขที่บ้าน", tone: "info" },
    { icon: "shield", title: "ใบอนุญาต", desc: "ต่ออายุและยื่นคำขอใบอนุญาต", tone: "warning" },
    { icon: "calendar", title: "จองคิว", desc: "จองคิวเข้ารับบริการที่สำนักงาน", tone: "neutral" },
  ];
  const toneMap = {
    default: { bg: "#ebfaf4", fg: "#006643" },
    secondary: { bg: "#eff3fa", fg: "#325fb4" },
    positive: { bg: "#ecfdf3", fg: "#085d3a" },
    info: { bg: "#f0f9ff", fg: "#026aa2" },
    warning: { bg: "#fffaeb", fg: "#93370d" },
    neutral: { bg: "#f1f3f3", fg: "#373c41" },
  };
  return (
    <section style={{ padding: "80px 32px", background: "#f8f9f9" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 32 }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 600, color: "#008858", textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 8 }}>บริการ</div>
            <H2>บริการยอดนิยม</H2>
            <div style={{ color: "#62676c", fontSize: 16, marginTop: 4 }}>ครอบคลุมบริการสำคัญสำหรับประชาชนทุกช่วงวัย</div>
          </div>
          <Button variant="outline">ดูบริการทั้งหมด</Button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {services.map((s, i) => {
            const t = toneMap[s.tone];
            return (
              <Card key={i} padding={24} style={{ cursor: "pointer", transition: "all .15s" }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: t.bg, color: t.fg,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  marginBottom: 16,
                }}><Icon name={s.icon} size={24} /></div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <H3>{s.title}</H3>
                  {s.badge && <Badge variant="default">{s.badge}</Badge>}
                </div>
                <P style={{ fontSize: 14, lineHeight: "20px" }}>{s.desc}</P>
                <div style={{ marginTop: 16, color: t.fg, fontSize: 14, fontWeight: 500, display: "inline-flex", alignItems: "center", gap: 4 }}>
                  ใช้บริการ <Icon name="arrowRight" size={16} />
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ============== STATUS CARDS ROW ==============
function StatusRow() {
  const rows = [
    { title: "คำร้องขอเอกสารรับรอง", id: "#REQ-20260419-001", date: "19 เม.ย. 2569", status: "inprogress" },
    { title: "ชำระภาษีที่ดิน", id: "#PAY-20260415-092", date: "15 เม.ย. 2569", status: "done" },
    { title: "ลงทะเบียนเบี้ยยังชีพ", id: "#REG-20260410-041", date: "10 เม.ย. 2569", status: "warning" },
    { title: "ต่ออายุใบอนุญาต", id: "#LIC-20260401-018", date: "1 เม.ย. 2569", status: "rejected" },
  ];
  const statusMap = {
    inprogress: { label: "กำลังดำเนินการ", variant: "secondary" },
    done: { label: "เสร็จสิ้น", variant: "success" },
    warning: { label: "รอเอกสารเพิ่ม", variant: "warningSoft" },
    rejected: { label: "ถูกปฏิเสธ", variant: "destructive" },
  };
  return (
    <section style={{ padding: "32px 32px 80px", background: "#f8f9f9" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <Card padding={0} style={{ overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderBottom: "1px solid #ebecee" }}>
            <div>
              <H3>คำร้องของฉัน</H3>
              <Muted>ติดตามสถานะคำร้องล่าสุดของคุณ</Muted>
            </div>
            <Button variant="tertiary">ดูทั้งหมด</Button>
          </div>
          {rows.map((r, i) => {
            const s = statusMap[r.status];
            return (
              <div key={i} style={{
                display: "grid", gridTemplateColumns: "1fr 200px 180px 140px 40px",
                padding: "16px 24px", alignItems: "center", gap: 16,
                borderBottom: i < rows.length - 1 ? "1px solid #ebecee" : "none",
              }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#25272a" }}>{r.title}</div>
                  <div style={{ fontSize: 12, color: "#62676c", fontFamily: "ui-monospace, Menlo, monospace" }}>{r.id}</div>
                </div>
                <div style={{ fontSize: 14, color: "#373c41", display: "flex", alignItems: "center", gap: 6 }}>
                  <Icon name="calendar" size={14} color="#62676c" />{r.date}
                </div>
                <Badge variant={s.variant}>{s.label}</Badge>
                <Button variant="link">รายละเอียด</Button>
                <IconButton variant="default" size="sm" aria-label="more"><Icon name="chevronRight" size={16}/></IconButton>
              </div>
            );
          })}
        </Card>
      </div>
    </section>
  );
}

// ============== FOOTER ==============
function Footer() {
  return (
    <footer style={{ background: "#25272a", color: "rgba(255,255,255,.75)", padding: "48px 32px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: "#00b274", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12 }}>CZ</div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 16 }}>Citizen Portal</div>
          </div>
          <P style={{ color: "rgba(255,255,255,.7)", fontSize: 14, maxWidth: 380 }}>
            พอร์ทัลบริการภาครัฐสำหรับประชาชน พัฒนาและดูแลโดยสำนักงานพัฒนารัฐบาลดิจิทัล (องค์การมหาชน)
          </P>
        </div>
        {[
          ["บริการ", ["เอกสารรับรอง", "ชำระภาษี", "เบี้ยยังชีพ", "ใบอนุญาต"]],
          ["ช่วยเหลือ", ["คำถามที่พบบ่อย", "ศูนย์ช่วยเหลือ", "ติดต่อเรา", "รายงานปัญหา"]],
          ["นโยบาย", ["เงื่อนไขการใช้งาน", "นโยบายคุ้มครองข้อมูล", "การเข้าถึง", "แผนผังเว็บ"]],
        ].map(([title, items]) => (
          <div key={title}>
            <div style={{ color: "#fff", fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{title}</div>
            {items.map(i => <div key={i} style={{ fontSize: 13, padding: "5px 0" }}>{i}</div>)}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: "40px auto 0", paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", justifyContent: "space-between", fontSize: 12 }}>
        <span>© 2569 Citizen Portal — สงวนลิขสิทธิ์</span>
        <span>WCAG 2.1 AA · Thai / English</span>
      </div>
    </footer>
  );
}

// ============== LOGIN MODAL ==============
function LoginModal({ open, onClose, onSubmit }) {
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  if (!open) return null;
  return (
    <div style={{
      position: "fixed", inset: 0, background: "rgba(21,22,24,.6)",
      display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 24,
    }} onClick={onClose}>
      <div style={{
        background: "#fff", borderRadius: 16, width: 440, maxWidth: "100%",
        padding: 32, boxShadow: "0 20px 25px -5px rgba(62,67,76,.1)",
      }} onClick={e => e.stopPropagation()}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24 }}>
          <div>
            <H2 style={{ fontSize: 22 }}>เข้าสู่ระบบ</H2>
            <Muted>ยืนยันตัวตนด้วยเลขประจำตัวประชาชน</Muted>
          </div>
          <IconButton variant="default" onClick={onClose} aria-label="Close"><Icon name="x" /></IconButton>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Input label="เลขประจำตัวประชาชน" value={id} onChange={setId} placeholder="1-2345-67890-12-3" />
          <Input label="รหัสผ่าน" type="password" value={pwd} onChange={setPwd} placeholder="••••••••" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 13 }}>
            <label style={{ display: "flex", alignItems: "center", gap: 6, color: "#373c41" }}>
              <input type="checkbox" /> จดจำฉัน
            </label>
            <a href="#" style={{ color: "#008858", textDecoration: "none", fontWeight: 500 }}>ลืมรหัสผ่าน?</a>
          </div>
          <Button variant="default" onClick={() => onSubmit && onSubmit(id)}>เข้าสู่ระบบ</Button>
          <div style={{ textAlign: "center", color: "#62676c", fontSize: 12, padding: "4px 0" }}>หรือ</div>
          <Button variant="outline">
            <Icon name="shield" size={18}/> เข้าสู่ระบบด้วย ThaID
          </Button>
          <div style={{ textAlign: "center", fontSize: 13, color: "#62676c" }}>
            ยังไม่มีบัญชี? <a href="#" style={{ color: "#008858", fontWeight: 500, textDecoration: "none" }}>ลงทะเบียน</a>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Header, Hero, ServiceGrid, StatusRow, Footer, LoginModal });
