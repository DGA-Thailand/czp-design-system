/* @jsx React.createElement */

const UI = {};

// ============== UTILITIES ==============
const cx = (...a) => a.filter(Boolean).join(" ");

// ============== BUTTON ==============
UI.Button = function Button({ variant = "default", size = "md", loading, disabled, children, onClick, className, ...rest }) {
  const base = {
    borderRadius: "1000px",
    fontWeight: 500,
    fontSize: 16,
    padding: "0 16px",
    minHeight: 48,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all .15s",
    whiteSpace: "nowrap",
    fontFamily: "inherit",
  };
  const variants = {
    default: { background: "var(--button-background-primary-solid)", color: "var(--button-foreground-primary-on-solid)" },
    destructive: { background: "var(--button-background-negative-solid)", color: "var(--button-foreground-primary-on-solid)" },
    outline: { background: "transparent", color: "var(--button-foreground-primary-on-transparent)", border: "1px solid var(--button-stroke-primary)" },
    secondary: { background: "var(--button-background-secondary-subtle)", color: "var(--button-foreground-secondary-on-subtle)" },
    tertiary: { background: "var(--background-neutral-medium)", color: "var(--foreground-neutral-light)" },
    ghost: { background: "transparent", color: "var(--foreground-neutral-light)" },
    link: { background: "transparent", color: "var(--foreground-primary-default)", textDecoration: "underline", padding: "0 4px", minHeight: "auto" },
    white: { background: "var(--button-background-fixed-solid)", color: "var(--foreground-neutral-default)", boxShadow: "0 1px 2px rgba(0,0,0,.05)" },
  };
  const style = { ...base, ...(variants[variant] || variants.default) };
  if (disabled) { style.background = "var(--button-background-disabled)"; style.color = "var(--button-foreground-disabled)"; style.border = "none"; }
  return (
    <button style={style} className={className} onClick={disabled ? undefined : onClick} disabled={disabled} {...rest}>
      {loading && <span style={{width:16,height:16,border:"2px solid currentColor",borderRightColor:"transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}></span>}
      {children}
    </button>
  );
};

// ============== ICON BUTTON ==============
UI.IconButton = function IconButton({ children, variant = "default", size = "md", onClick, "aria-label": aria }) {
  const sizes = { sm: 32, md: 44, lg: 48 };
  const d = sizes[size] || 44;
  const styles = {
    default: { background: "transparent", color: "var(--foreground-neutral-light)" },
    fill: { background: "var(--background-neutral-medium)", color: "var(--foreground-neutral-default)" },
    primary: { background: "var(--button-background-primary-solid)", color: "var(--button-foreground-primary-on-solid)" },
    secondary: { background: "var(--button-background-secondary-subtle)", color: "var(--button-foreground-secondary-on-subtle)" },
    negative: { background: "var(--button-background-negative-solid)", color: "var(--button-foreground-primary-on-solid)" },
  };
  return (
    <button aria-label={aria} onClick={onClick} style={{
      width: d, height: d, borderRadius: "1000px", border: "none", cursor: "pointer",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      transition: "all .15s", ...(styles[variant] || styles.default)
    }}>{children}</button>
  );
};

// ============== BADGE ==============
UI.Badge = function Badge({ variant = "default", children }) {
  const v = {
    default: { background: "var(--button-background-primary-solid)", color: "var(--button-foreground-primary-on-solid)", border: "1px solid transparent" },
    secondary: { background: "var(--background-secondary-lighter)", color: "var(--foreground-secondary-default)", border: "1px solid var(--secondary-80)" },
    destructive: { background: "var(--button-background-negative-solid)", color: "var(--canvas-white)", border: "1px solid transparent" },
    success: { background: "var(--background-positive-medium)", color: "var(--canvas-white)", border: "1px solid transparent" },
    outline: { background: "transparent", color: "var(--foreground-neutral-default)", border: "1px solid var(--stroke-neutral-default)" },
    warningSoft: { background: "var(--warning-90)", color: "var(--foreground-warning-dark)", border: "1px solid var(--warning-80)" },
    infoSoft: { background: "var(--background-info-light)", color: "var(--info-30)", border: "1px solid var(--info-80)" },
    successSoft: { background: "var(--background-positive-light)", color: "var(--foreground-positive-dark)", border: "1px solid var(--positive-80)" },
    dangerSoft: { background: "var(--background-negative-light)", color: "var(--foreground-negative-dark)", border: "1px solid var(--danger-80)" },
  };
  return (
    <span style={{
      borderRadius: "1000px",
      padding: "2px 10px",
      fontSize: 12,
      lineHeight: "18px",
      fontWeight: 500,
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      ...(v[variant] || v.default)
    }}>{children}</span>
  );
};

// ============== INPUT ==============
UI.Input = function Input({ label, value, onChange, placeholder, error, disabled, type = "text", helper, icon }) {
  const [focused, setFocused] = React.useState(false);
  const labelColor = error ? "var(--input-label-error)" : focused ? "var(--input-label-focused)" : "var(--input-label-default)";
  const borderColor = error ? "var(--input-stroke-error)" : focused ? "var(--input-stroke-focused)" : "var(--input-stroke-default)";
  const bg = error && focused ? "var(--input-background-error-focused)" : disabled ? "var(--input-background-disabled)" : "var(--input-background-default)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      {label && <label style={{ fontSize: 12, fontWeight: 500, color: labelColor }}>{label}</label>}
      <div style={{ position: "relative" }}>
        {icon && <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--foreground-neutral-lighter)", pointerEvents: "none" }}>{icon}</span>}
        <input
          type={type}
          value={value}
          disabled={disabled}
          onChange={e => onChange && onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={{
            width: "100%",
            boxSizing: "border-box",
            border: "1px solid " + borderColor,
            borderRadius: 12,
            padding: icon ? "12px 14px 12px 40px" : "12px 14px",
            background: bg,
            color: disabled ? "var(--input-input-placeholder)" : "var(--input-input-default)",
            fontSize: 16,
            minHeight: 48,
            fontFamily: "inherit",
            outline: focused ? "2px solid " + (error ? "var(--input-background-error-focused)" : "var(--background-primary-lighter)") : "none",
            outlineOffset: 0,
          }}
        />
      </div>
      {error && <div style={{ color: "var(--foreground-negative-default)", fontSize: 12 }}>{error}</div>}
      {helper && !error && <div style={{ color: "var(--foreground-neutral-lighter)", fontSize: 12 }}>{helper}</div>}
    </div>
  );
};

// ============== CARD ==============
UI.Card = function Card({ children, elevated, padding = 16, style, ...rest }) {
  return (
    <div style={{
      background: "var(--canvas-white)",
      border: elevated ? "1px solid transparent" : "1px solid var(--stroke-neutral-lighter)",
      borderRadius: 12,
      padding,
      boxShadow: elevated ? "var(--shadow-custom)" : "none",
      ...style,
    }} {...rest}>{children}</div>
  );
};

// ============== AVATAR ==============
UI.Avatar = function Avatar({ children, size = "md", tone = "primary" }) {
  const sizes = { sm: 28, md: 44, lg: 64 };
  const fonts = { sm: 12, md: 16, lg: 22 };
  const tones = {
    primary: "linear-gradient(135deg, var(--primary-40), var(--primary-30-base))",
    secondary: "linear-gradient(135deg, var(--secondary-60), var(--secondary-40-main))",
    neutral: "var(--background-neutral-dark)",
  };
  return (
    <div style={{
      width: sizes[size], height: sizes[size], borderRadius: "1000px",
      background: tones[tone], color: tone === "neutral" ? "var(--foreground-neutral-lighter)" : "var(--canvas-white)",
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      fontWeight: 600, fontSize: fonts[size], flexShrink: 0,
    }}>{children}</div>
  );
};

// ============== SWITCH ==============
UI.Switch = function Switch({ checked, onChange, label }) {
  return (
    <button onClick={() => onChange && onChange(!checked)} style={{
      border: "none", padding: 0, cursor: "pointer", background: "transparent",
      display: "inline-flex", alignItems: "center", gap: 8,
    }}>
      <span style={{
        position: "relative", width: 44, height: 24, borderRadius: 1000,
        background: checked ? "var(--primary-30-base)" : "var(--stroke-neutral-default)", transition: ".2s",
      }}>
        <span style={{
          position: "absolute", top: 2, left: checked ? 22 : 2,
          width: 20, height: 20, borderRadius: "50%", background: "var(--canvas-white)",
          boxShadow: "0 1px 2px rgba(0,0,0,.2)", transition: ".2s",
        }} />
      </span>
      {label && <span style={{ fontSize: 14, color: "var(--foreground-neutral-default)" }}>{label}</span>}
    </button>
  );
};

// ============== TYPOGRAPHY ==============
UI.H1 = ({children, style}) => <h1 style={{fontSize:32, lineHeight:"40px", fontWeight:600, color:"var(--foreground-neutral-default)", margin:0, ...style}}>{children}</h1>;
UI.H2 = ({children, style}) => <h2 style={{fontSize:24, lineHeight:"32px", fontWeight:600, color:"var(--foreground-neutral-default)", margin:0, ...style}}>{children}</h2>;
UI.H3 = ({children, style}) => <h3 style={{fontSize:18, lineHeight:"26px", fontWeight:600, color:"var(--foreground-neutral-default)", margin:0, ...style}}>{children}</h3>;
UI.P = ({children, style}) => <p style={{fontSize:16, lineHeight:"24px", color:"var(--foreground-neutral-light)", margin:0, ...style}}>{children}</p>;
UI.Muted = ({children, style}) => <span style={{fontSize:14, color:"var(--foreground-neutral-lighter)", ...style}}>{children}</span>;

// ============== ICONS (lucide-style inline) ==============
UI.Icon = function Icon({ name, size = 20, color = "currentColor" }) {
  const paths = {
    search: <><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></>,
    bell: <><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></>,
    menu: <><path d="M4 12h16"/><path d="M4 6h16"/><path d="M4 18h16"/></>,
    user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></>,
    check: <><path d="M20 6 9 17l-5-5"/></>,
    x: <><path d="M18 6 6 18"/><path d="m6 6 12 12"/></>,
    chevronRight: <><path d="m9 18 6-6-6-6"/></>,
    chevronDown: <><path d="m6 9 6 6 6-6"/></>,
    arrowRight: <><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></>,
    home: <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></>,
    settings: <><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></>,
    logout: <><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></>,
    calendar: <><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></>,
    creditCard: <><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></>,
    shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></>,
    building: <><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></>,
    heart: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    info: <><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></>,
    download: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    globe: <><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] || null}
    </svg>
  );
};

window.UI = UI;
