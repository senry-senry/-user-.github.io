async function includeHTML(selector, path) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(path);
  el.innerHTML = await res.text();
}

includeHTML("#site-header", "../common/header.html");
includeHTML("#site-footer", "../common/footer.html");