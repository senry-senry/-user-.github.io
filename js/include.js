async function includeHTML(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(path);
  el.innerHTML = await res.text();
}

// GitHub Pages のリポジトリ名を自動取得
const REPO = location.pathname.split("/")[1];

includeHTML("#site-header", `/${REPO}/common/header.html`);
includeHTML("#site-footer", `/${REPO}/common/footer.html`);
