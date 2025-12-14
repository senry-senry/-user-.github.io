async function includeHTML(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(path);
  el.innerHTML = await res.text();
}

const BASE = location.pathname.split("/")[1]
  ? `/${location.pathname.split("/")[1]}`
  : "";

includeHTML("#site-header", `${BASE}/common/header.html`);
includeHTML("#site-footer", `${BASE}/common/footer.html`);
