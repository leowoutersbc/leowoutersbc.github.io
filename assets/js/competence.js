/* Construit une page compétence à partir de window.PORTFOLIO (portfolio-data.js).
   La page indique sa compétence avec <body data-competence="admin"> */
(function () {
  const DATA = window.PORTFOLIO;
  const key = document.body.dataset.competence;
  const comp = DATA && DATA[key];
  const root = document.getElementById("competence");
  if (!comp || !root) return;

  const ICONS = {
    "Ce que j'ai fait": "bi-bullseye",
    "Pourquoi je l'ai fait": "bi-question-circle",
    "Comment je l'ai fait": "bi-tools",
    "Mes difficultés": "bi-exclamation-triangle",
    "Ce que j'en ai appris": "bi-lightbulb",
    "Ce que je ferais autrement": "bi-arrow-repeat",
    "Ce que j'ai fait & Pourquoi": "bi-bullseye",
    "Difficultés & Apprentissages": "bi-exclamation-triangle",
    "Comment je ferais autrement": "bi-arrow-repeat",
  };
  const STATUS = { ok: "Trace complète", wip: "En cours", todo: "À venir" };
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  document.title = comp.name + " — Portfolio Leo Wouters";

  // Niveau ouvert par défaut : le niveau de l'année en cours (BUT2)
  const current = comp.levels.findIndex((l) => l.year === "BUT2");
  const keys = Object.keys(DATA);
  const idx = keys.indexOf(key);
  const prev = DATA[keys[(idx - 1 + keys.length) % keys.length]];
  const next = DATA[keys[(idx + 1) % keys.length]];

  const blocksHtml = (blocks) => blocks.filter((b) => b[1]).map((b, i) => `
      <div class="block b${(i % 6) + 1}">
        <h4><i class="bi ${ICONS[b[0]] || "bi-dot"}"></i>${esc(b[0])}</h4>
        <p>${b[1]}</p>
      </div>`).join("");

  const proofsHtml = (proofs, acId) => !proofs.length ? "" : `
      <div class="proofs">
        <h5><i class="bi bi-paperclip"></i>Traces</h5>
        <div class="proof-list">
          ${proofs.map((p, i) => `<button class="proof" type="button" data-ac="${acId}" data-proof="${i}">
            <i class="bi ${p.pdf ? "bi-file-earmark-pdf" : "bi-code-square"}"></i>${esc(p.title)}</button>`).join("")}
        </div>
      </div>`;

  const acHtml = (a, li, ai) => {
    const id = `l${li}a${ai}`;
    const status = a.status || "ok";
    return `
    <details class="ac card" id="${esc(a.code)}">
      <summary>
        <span class="ac-code">${esc(a.code)}</span>
        <span class="ac-title">${esc(a.title)}
          ${a.sources && a.sources.length ? `<span class="ac-sources">${a.sources.map((s) => `<span>${esc(s)}</span>`).join("")}</span>` : ""}
        </span>
        <span class="status ${status}">${STATUS[status]}</span>
        <i class="bi bi-chevron-down chev"></i>
      </summary>
      <div class="ac-body">
        <div class="blocks">${blocksHtml(a.blocks)}</div>
        ${proofsHtml(a.proofs || [], id)}
      </div>
    </details>`;
  };

  const levelHtml = (l, li) => !l.acs.length
    ? `<div class="card locked"><i class="bi bi-lock"></i>Niveau ${l.n} — contenu disponible en ${esc(l.year)}</div>`
    : l.acs.map((a, ai) => acHtml(a, li, ai)).join("");

  root.innerHTML = `
  <header class="comp-hero">
    <div class="container">
      <a class="crumb" href="../index.html#portfolio"><i class="bi bi-arrow-left"></i>Retour au portfolio</a>
      <div class="row">
        <div class="comp-icon"><i class="bi ${comp.icon}"></i></div>
        <div>
          <div class="comp-name">Compétence ${esc(comp.name)}${key === "rapprocher" || key === "unifier" ? " · parcours ROM" : ""}</div>
          <h1>${esc(comp.title)}</h1>
        </div>
      </div>
    </div>
  </header>

  <main class="container" style="padding-bottom:70px">
    <div class="comp-intro">
      <section class="card">
        <h2><i class="bi bi-check2-square"></i>Composantes essentielles</h2>
        <ul class="list-check">${comp.composantes.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      </section>
      <section class="card">
        <h2><i class="bi bi-briefcase"></i>Situations professionnelles</h2>
        <ul class="list-check list-arrow">${comp.situations.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>
      </section>
    </div>

    ${comp.alternance ? `
    <div class="alt-note">
      <i class="bi bi-building"></i>
      <div><strong>En alternance chez Eiffage</strong><p>${esc(comp.alternance)}</p></div>
    </div>` : ""}

    <h2 style="font-size:1.4rem">Niveaux et apprentissages critiques</h2>
    <div class="tabs" role="tablist">
      ${comp.levels.map((l, li) => `
      <button class="tab" role="tab" type="button" data-level="${li}" aria-selected="${li === current}">
        <span class="t-n">Niveau ${l.n}<span class="t-y">${esc(l.year)}</span></span>
        <span class="t-l">${esc(l.label)}</span>
      </button>`).join("")}
    </div>
    <div class="legend">
      <span><span class="status ok">Trace complète</span></span>
      <span><span class="status wip">En cours</span> SAÉ ou TP pas encore terminé</span>
      <span><span class="status todo">À venir</span></span>
    </div>
    ${comp.levels.map((l, li) => `<section class="level" data-level="${li}" ${li === current ? "" : "hidden"}>${levelHtml(l, li)}</section>`).join("")}

    <nav class="pager">
      <a class="btn btn-outline" href="${prev.page}"><i class="bi bi-arrow-left"></i>${esc(prev.name)}</a>
      <a class="btn btn-outline" href="${next.page}">${esc(next.name)}<i class="bi bi-arrow-right"></i></a>
    </nav>
  </main>

  <dialog class="viewer" id="viewer">
    <div class="viewer-head"><span id="viewer-title"></span><button type="button" aria-label="Fermer" id="viewer-close">&times;</button></div>
    <div class="viewer-body" id="viewer-body"></div>
  </dialog>`;

  // Onglets
  const tabs = root.querySelectorAll(".tab");
  tabs.forEach((t) => t.addEventListener("click", () => {
    tabs.forEach((x) => x.setAttribute("aria-selected", x === t));
    root.querySelectorAll(".level").forEach((s) => { s.hidden = s.dataset.level !== t.dataset.level; });
  }));

  // Lien direct vers un AC (#AC21.01)
  if (location.hash) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target && target.tagName === "DETAILS") {
      const lvl = target.closest(".level").dataset.level;
      root.querySelector(`.tab[data-level="${lvl}"]`).click();
      target.open = true;
      target.scrollIntoView();
    }
  }

  // Fenêtre des traces
  const dlg = root.querySelector("#viewer");
  const body = root.querySelector("#viewer-body");
  root.querySelector("#viewer-close").addEventListener("click", () => dlg.close());
  dlg.addEventListener("click", (e) => { if (e.target === dlg) dlg.close(); });
  dlg.addEventListener("close", () => { body.innerHTML = ""; });
  root.addEventListener("click", (e) => {
    const btn = e.target.closest(".proof");
    if (!btn) return;
    const [, li, ai] = btn.dataset.ac.match(/l(\d+)a(\d+)/);
    const p = comp.levels[li].acs[ai].proofs[btn.dataset.proof];
    root.querySelector("#viewer-title").textContent = p.title;
    body.innerHTML = p.pdf
      ? `<iframe src="../${esc(p.pdf)}" title="${esc(p.title)}"></iframe>`
      : `<pre><code>${esc(p.code)}</code></pre>`;
    dlg.showModal();
  });
})();
