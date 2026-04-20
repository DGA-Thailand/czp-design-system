/* CZP Docs — shared sidebar nav + copy-to-clipboard */

(function () {
  const nav = [
    {
      title: "เริ่มต้น",
      items: [
        { href: "/docs/index.html", label: "ภาพรวม" },
        { href: "/docs/start.html", label: "วิธีเริ่มใช้งาน" },
      ],
    },
    {
      title: "พื้นฐาน",
      items: [
        { href: "/docs/foundations/colors.html", label: "สี" },
        { href: "/docs/foundations/typography.html", label: "ตัวอักษร" },
        { href: "/docs/foundations/spacing.html", label: "ระยะห่าง" },
        { href: "/docs/foundations/radius.html", label: "มุมโค้ง" },
        { href: "/docs/foundations/elevation.html", label: "เงา" },
        { href: "/docs/foundations/iconography.html", label: "ไอคอน" },
      ],
    },
    {
      title: "คอมโพเนนต์",
      items: [
        { href: "/docs/components/buttons.html", label: "Buttons" },
        { href: "/docs/components/badges.html", label: "Badges" },
        { href: "/docs/components/inputs.html", label: "Inputs" },
        { href: "/docs/components/cards.html", label: "Cards" },
        { href: "/docs/components/toasts.html", label: "Toasts" },
        { href: "/docs/components/toggles.html", label: "Toggles, Checkbox, Radio" },
        { href: "/docs/components/dropdown.html", label: "Dropdown Menu" },
        { href: "/docs/components/tabs.html", label: "Tabs" },
        { href: "/docs/components/avatars.html", label: "Avatars" },
        { href: "/docs/components/otp.html", label: "OTP Input" },
      ],
    },
    {
      title: "ทรัพยากร",
      items: [
        { href: "/docs/resources/downloads.html", label: "ดาวน์โหลด" },
      ],
    },
  ];

  function render() {
    const host = document.getElementById("docs-sidebar");
    if (!host) return;
    const path = window.location.pathname.replace(/\/$/, "") || "/docs/index.html";
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
      try { document.execCommand("copy"); copyToast(text); } catch (e) { }
      ta.remove();
    }
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
