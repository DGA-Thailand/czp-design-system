/* CZP Docs — shared sidebar nav + copy-to-clipboard */

(function () {
  const nav = [
    {
      title: "เริ่มต้น",
      items: [
        { href: "/index.html", label: "ภาพรวม" },
        { href: "/start.html", label: "วิธีเริ่มใช้งาน" },
      ],
    },
    {
      title: "พื้นฐาน",
      items: [
        { href: "/foundations/colors.html", label: "สี" },
        { href: "/foundations/typography.html", label: "ตัวอักษร" },
        { href: "/foundations/spacing.html", label: "ระยะห่าง" },
        { href: "/foundations/radius.html", label: "มุมโค้ง" },
        { href: "/foundations/elevation.html", label: "เงา" },
        { href: "/foundations/iconography.html", label: "ไอคอน" },
      ],
    },
    {
      title: "คอมโพเนนต์",
      items: [
        { href: "/components/buttons.html", label: "Buttons" },
        { href: "/components/badges.html", label: "Badges" },
        { href: "/components/inputs.html", label: "Inputs" },
        { href: "/components/cards.html", label: "Cards" },
        { href: "/components/toasts.html", label: "Toasts" },
        { href: "/components/toggles.html", label: "Toggles, Checkbox, Radio" },
        { href: "/components/dropdown.html", label: "Dropdown Menu" },
        { href: "/components/tabs.html", label: "Tabs" },
        { href: "/components/avatars.html", label: "Avatars" },
        { href: "/components/otp.html", label: "OTP Input" },
      ],
    },
    {
      title: "ทรัพยากร",
      items: [
        { href: "/resources/downloads.html", label: "ดาวน์โหลด" },
      ],
    },
  ];

  function render() {
    const host = document.getElementById("docs-sidebar");
    if (!host) return;
    const path = window.location.pathname.replace(/\/$/, "") || "/index.html";
    const html = `
      <div class="docs-brand">
        <div class="docs-brand-mark">CZ</div>
        <div>
          <div class="docs-brand-name">CZP Design</div>
          <div class="docs-brand-sub">พอร์ทัลประชาชน</div>
        </div>
      </div>
      ${nav.map(g => `
        <div class="docs-nav-group">
          <div class="docs-nav-group-title">${g.title}</div>
          <div class="docs-nav">
            ${g.items.map(i => {
              const active = path === i.href || path.endsWith(i.href);
              return `<a href="${i.href}" ${active ? 'class="active"' : ""}>${i.label}</a>`;
            }).join("")}
          </div>
        </div>
      `).join("")}
    `;
    host.innerHTML = html;
  }

  function copyToast(text) {
    let el = document.getElementById("copy-toast");
    if (!el) {
      el = document.createElement("div");
      el.id = "copy-toast";
      document.body.appendChild(el);
    }
    el.textContent = "คัดลอกแล้ว — " + text;
    el.classList.add("show");
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("show"), 1600);
  }

  document.addEventListener("click", async (e) => {
    const copyable = e.target.closest("[data-copy]");
    if (!copyable) return;
    const text = copyable.getAttribute("data-copy");
    try {
      await navigator.clipboard.writeText(text);
      copyToast(text);
    } catch (err) {
      // fallback
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); copyToast(text); } catch (e) {}
      ta.remove();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
