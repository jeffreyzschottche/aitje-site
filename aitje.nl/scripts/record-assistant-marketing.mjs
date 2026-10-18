/** Reproducible marketing captures of the real local frontend, with synthetic browser API fixtures only. */
import { createRequire } from "node:module";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { execFileSync } from "node:child_process";
const source =
  process.env.AITJE_ASSISTANT_SOURCE ??
  resolve("../../aitje-chat-assistent/chat-assistent/frontend");
const { chromium } = createRequire(resolve(source, "package.json"))(
  "playwright-core",
);
const { fixtures, user, role, branding, model, chat, messages, category, doc } =
  await import(pathToFileURL(resolve(source, "e2e/fixtures.mjs")));
const dest = resolve("public/img/assistant");
const work = "/tmp/aitje-marketing-v2";
for (const name of ["screenshots", "posters", "video", "gifs"])
  await mkdir(resolve(dest, name), { recursive: true });
await mkdir(work, { recursive: true });
const models = [
  { ...model, name: "Lokaal · algemeen" },
  { ...model, key: "local-reason", name: "Lokaal · redeneren", default: false },
  {
    ...model,
    key: "external",
    name: "Extern · toegestaan model",
    provider: "Voorbeeldprovider",
    local: false,
    default: false,
  },
];
const demoRole = {
  ...role,
  name: "Klantenservice",
  description: "Klantvragen beantwoorden met eigen kennis",
  user_count: 12,
  permissions: {
    "chat.use": true,
    "kennis.level": "read",
    "models.allowed": ["local"],
    "models.default": "local",
    "models.external": false,
    "external.anonymize": "required",
    "cap.monthly_eur": 25,
    "cap.daily_tokens": 50000,
    "cap.monthly_tokens": 1000000,
    "cap.on_limit": "fallback",
    "tools.web": false,
    "tools.sandbox": true,
    "upload.chat": true,
    "projects.create": true,
  },
  category_ids: ["cat", "products"],
};
const categories = [
  { ...category, name: "Bedrijfsinformatie", document_count: 18 },
  {
    ...category,
    id: "products",
    name: "Producten & diensten",
    document_count: 32,
    is_public: false,
  },
  {
    ...category,
    id: "hr",
    name: "HR & personeel",
    document_count: 14,
    is_public: false,
  },
];
const option = (m) => ({ value: m.key, label: m.name, external: !m.local });
const specs = [
  {
    key: "kennis.level",
    group: "kennis",
    type: "enum",
    default: "read",
    order: ["none", "read", "upload", "manage"],
  },
  {
    key: "models.allowed",
    group: "modellen",
    type: "list",
    default: ["local"],
    options: models.map(option),
  },
  {
    key: "models.default",
    group: "modellen",
    type: "option",
    default: "local",
    options: models.map(option),
  },
  { key: "models.external", group: "modellen", type: "bool", default: false },
  {
    key: "external.anonymize",
    group: "modellen",
    type: "enum",
    default: "required",
    order: ["blocked", "required", "default", "optional"],
  },
  ...[
    "monthly_eur",
    "daily_eur",
    "daily_tokens",
    "weekly_tokens",
    "monthly_tokens",
    "yearly_eur",
    "yearly_tokens",
  ].map((k) => ({
    key: "cap." + k,
    group: "verbruik",
    type: "number",
    default: null,
  })),
  {
    key: "cap.on_limit",
    group: "verbruik",
    type: "enum",
    default: "fallback",
    order: ["block", "fallback"],
  },
  ...[
    "chat.use",
    "tools.web",
    "tools.sandbox",
    "upload.chat",
    "projects.create",
  ].map((key) => ({ key, group: "tools", type: "bool", default: true })),
  { key: "chat_insight", group: "privacy", type: "bool", default: false },
].map((s) => ({ order: [], options: [], ...s }));
const state = (period, unit, cap, used) => ({
  period,
  unit,
  cap,
  used,
  remaining: Math.max(0, cap - used),
  reached: used >= cap,
  resets_at: "2026-11-01T00:00:00Z",
  scope: "user",
});
const budgetStates = [
  state("day", "tokens", 50000, 32000),
  state("month", "eur", 25, 18.4),
];
const demoUsage = {
  cap_eur: 25,
  spent_eur: 18.4,
  remaining_eur: 6.6,
  on_limit: "fallback",
  reached: false,
  limits: budgetStates,
};
const demoUser = {
  ...user,
  name: "Robin Voorbeeld",
  email: "robin@example.test",
};
const styles =
  "*{box-sizing:border-box}body{margin:0;padding:24px;background:#20211e;color:#fafaf5;font:15px system-ui}h2{margin:0 0 10px;font-size:24px;letter-spacing:-.7px}p{color:#babdb2;line-height:1.6}button{font:inherit;cursor:pointer;border:1px solid #515447;background:#30332a;color:#fff;padding:13px 16px;border-radius:12px}button:hover{border-color:#facc15}small{color:#b4b9a8}.label{font-size:11px;color:#facc15;letter-spacing:2px;text-transform:uppercase}.accent{color:#facc15}.panel{padding:20px;background:#2b2e25;border:1px solid #454b3b;border-radius:16px;margin-top:20px}.pill{border-radius:100px;background:#343a25;color:#facc15;padding:7px 11px;font-size:12px}";
const wrap = (body, script = "") =>
  `<!doctype html><html lang="nl"><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>${styles}</style></head><body>${body}<script>${script}</script></body></html>`;
const quiz = wrap("<span class=\"label\">Lokaal of cloud?</span><h2>Hoe goed ken jij lokale AI?</h2><p>Drie vragen over verwerking, kosten en eigen beheer.</p><div class=\"panel\"><small id=\"quiz-count\">VRAAG 1 VAN 3</small><h3 id=\"quiz-question\"></h3><div id=\"quiz-answers\" style=\"display:grid;gap:10px\"></div><p id=\"feedback\" aria-live=\"polite\">Kies je antwoord.</p><button id=\"quiz-next\" hidden>Volgende vraag →</button></div>","const questions=[{q:'Waar draait het model in een lokale AITJE-opstelling?',a:['Bij een externe AI-dienst','Op het eigen apparaat of de ingerichte server','Op iedere telefoon van je team'],why:'Het model draait op de eigen rekenomgeving. Medewerkers gebruiken de browser als toegang.'},{q:'Welke kosten vervallen bij lokale modelverwerking?',a:['Alle kosten van AI','De externe API-tokenkosten voor die verwerking','De aanschaf van hardware'],why:'Lokale verwerking heeft geen externe API-tokenrekening. Hardware, stroom en inrichting blijven onderdeel van de kosten.'},{q:'Wat gebeurt er als je een extern model inschakelt?',a:['Er verandert niets aan de gegevensstroom','De benodigde vraag en context kunnen naar die dienst gaan','Alle documenten worden automatisch openbaar'],why:'Externe modellen hebben een eigen gegevensstroom en tarieven. AITJE laat je toegang en gebruik bewust instellen.'}];let current=0;function draw(){const q=questions[current];document.querySelector('#quiz-count').textContent='VRAAG '+(current+1)+' VAN 3';document.querySelector('#quiz-question').textContent=q.q;document.querySelector('#quiz-answers').replaceChildren();document.querySelector('#quiz-next').hidden=true;document.querySelector('#feedback').textContent='Kies je antwoord.';q.a.forEach((label,i)=>{const b=document.createElement('button');b.dataset.answer=['a','b','c'][i];b.textContent=['A · ','B · ','C · '][i]+label;b.style.textAlign='left';b.onclick=()=>{document.querySelectorAll('[data-answer]').forEach(x=>x.style.background='#30332a');b.style.background=i===1?'#4c6028':'#654435';document.querySelector('#feedback').textContent=(i===1?'Goed. ':'Bekijk de uitleg. ')+q.why;document.querySelector('#quiz-next').hidden=current===2;};document.querySelector('#quiz-answers').appendChild(b);});}document.querySelector('#quiz-next').onclick=()=>{current=(current+1)%3;draw();};draw();");
const chart = wrap(
  '<span class="label">Van cijfers naar inzicht</span><h2>Servicevragen per team</h2><p>Fictieve weekdata. Kies een periode en vergelijk de verdeling.</p><div style="display:flex;gap:8px"><button data-week="0">Deze week</button><button data-week="1">Vorige week</button></div><div class="panel" id="chart"></div><p id="total" class="accent"></p>',
  "const d=[[['Service',42],['Verkoop',28],['Planning',18],['Administratie',12]],[['Service',32],['Verkoop',36],['Planning',22],['Administratie',10]]];function draw(i){document.querySelector('#chart').innerHTML=d[i].map(([n,v])=>'<div style=\"margin:18px 0\"><div style=\"display:flex;justify-content:space-between;margin-bottom:8px\"><span>'+n+'</span><b>'+v+'</b></div><div style=\"height:14px;background:#444938;border-radius:8px\"><div style=\"height:100%;border-radius:8px;background:#facc15;width:'+v*2+'%\"></div></div></div>').join('');document.querySelector('#total').textContent='Totaal: '+d[i].reduce((s,x)=>s+x[1],0)+' servicevragen';}document.querySelectorAll('button').forEach(b=>b.onclick=()=>draw(+b.dataset.week));draw(0)",
);
const processHtml = wrap(
  '<span class="label">Een proces zichtbaar maken</span><h2>Van aanvraag naar akkoord</h2><p>Een klikbare procesweergave, als uitwerking van je vraag.</p><div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:30px"><button data-step="0">01 · Aanvraag</button><button data-step="1">02 · Beoordelen</button><button data-step="2">03 · Akkoord</button></div><div class="panel"><span class="pill" id="owner">Klantenservice</span><h3 id="title">Aanvraag registreren</h3><p id="detail">Verzamel de vraag, contactgegevens en gewenste termijn. Leg de aanvraag vast.</p></div><p>Je kunt een proces als diagram uitwerken en als document of afbeelding exporteren, afhankelijk van de gekozen vorm.</p>',
  "const d=[['Klantenservice','Aanvraag registreren','Verzamel de vraag, contactgegevens en gewenste termijn. Leg de aanvraag vast.'],['Teamleider','Haalbaarheid beoordelen','Controleer capaciteit, benodigde informatie en afspraken. Vraag aanvulling als iets ontbreekt.'],['Klant en team','Akkoord en overdracht','Leg het akkoord vast en maak de volgende actie duidelijk voor het team.']];document.querySelectorAll('button').forEach(b=>b.onclick=()=>{const a=d[+b.dataset.step];['owner','title','detail'].forEach((id,i)=>document.getElementById(id).textContent=a[i]);})",
);
const rendered = await readFile(new URL('./assistant-demos/rubiks-cube.html', import.meta.url), 'utf8');
const scenes = {
  "chat-render": {
    title: "Render een volledige 3D Rubik’s Cube",
    answer:
      "Hier is een complete 3D Rubik’s Cube met 27 blokjes, 54 gekleurde vlakken en belichting. Je kunt hem draaien en van alle kanten bekijken.",
    html: rendered,
  },
  "chat-quiz": {
    title: "Maak een korte quiz over lokale AI",
    answer:
      "Hier oefen je met het verschil tussen lokale en externe AI. Iedere vraag heeft uitleg over verwerking, kosten of eigen beheer.",
    html: quiz,
  },
  "chat-visualisatie": {
    title: "Visualiseer de servicevragen per team",
    answer:
      "Hieronder vergelijk je de fictieve weekdata in een interactieve grafiek. Wissel van periode om de verdeling te bekijken.",
    html: chart,
  },
  "chat-proces": {
    title: "Maak ons aanvraagproces visueel en klikbaar",
    answer:
      "Ik heb het voorbeeld uitgewerkt in drie stappen. Selecteer een stap om de verantwoordelijke en de toelichting te bekijken.",
    html: processHtml,
  },
};
const guardrails = [
  {
    id: "local",
    kind: "knowledge_local",
    name: "HR-kennis blijft lokaal",
    enabled: true,
    audience: { all: true, role_ids: [], user_ids: [] },
    config: { category_ids: ["hr"], block_writes: true },
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "actions",
    kind: "actions",
    name: "Koppelingen alleen lezen",
    enabled: true,
    audience: { all: false, role_ids: ["review"], user_ids: [] },
    config: { blocked_servers: [], read_only: true, max_actions: 3 },
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "output",
    kind: "output",
    name: "Contactgegevens afschermen",
    enabled: true,
    audience: { all: true, role_ids: [], user_ids: [] },
    config: {
      presets: ["email", "iban"],
      terms: ["Project Morgen"],
      action: "mask",
      message: "",
    },
    updated_at: "2026-10-18T10:00:00Z",
  },
];
const demoSkills = [
  {
    id: "proposal",
    name: "Voorstellen in onze huisstijl",
    description:
      "Van klantvraag naar een helder voorstel met vaste structuur en toon.",
    enabled: true,
    role_ids: ["review"],
    all_roles: false,
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "service",
    name: "Klantcontact met bronvermelding",
    description:
      "Beantwoord servicevragen met de afgesproken werkwijze en controleerbare bronnen.",
    enabled: true,
    role_ids: ["review"],
    all_roles: false,
    updated_at: "2026-10-18T10:00:00Z",
  },
  {
    id: "briefing",
    name: "Van overleg naar actiepunten",
    description:
      "Werk notities uit tot besluiten, actiehouders en vervolgstappen.",
    enabled: true,
    role_ids: ["review"],
    all_roles: false,
    updated_at: "2026-10-18T10:00:00Z",
  },
];
async function setup(context, scene) {
  await context.routeWebSocket("**", (socket) => socket.close());
  await context.route(
    (url) => url.pathname.startsWith("/api/"),
    async (route) => {
      const req = route.request(),
        p = new URL(req.url()).pathname.replace("/api/v1", "");
      let body = fixtures[p] ?? {};
      if (p === "/client-errors") return route.fulfill({ status: 204 });
      if (p === "/auth/session")
        body = { stage: "full", csrf_token: "marketing-fixture" };
      else if (p === "/me")
        body = {
          ...demoUser,
          user_id: user.id,
          actor: "user",
          stage: "full",
          is_admin: true,
          permissions: { "chat.use": true },
          csrf_token: "marketing-fixture",
          preferences: {},
          locale: "nl",
          customer: "Voorbeeldbureau",
          roles: ["Klantenservice"],
          two_factor_enabled: false,
        };
      else if (p === "/branding" || p === "/admin/branding")
        body = { ...branding, company_name: "Voorbeeldbureau" };
      else if (p === "/models") body = models;
      else if (p === "/projects") body = [];
      else if (p === "/admin/users") body = [demoUser];
      else if (p === "/admin/roles") body = [demoRole];
      else if (p === "/admin/roles/review") {
        if (req.method() === "PUT") Object.assign(demoRole, req.postDataJSON());
        body = demoRole;
      } else if (p === "/admin/guardrails") body = guardrails;
      else if (p === "/admin/guardrails/test")
        body = {
          result: "Neem contact op met [verborgen] over [verborgen].",
          blocked: false,
          rules: [{ id: "output", name: "Contactgegevens afschermen" }],
        };
      else if (p.startsWith("/admin/guardrails/") && req.method() === "PUT") {
        const r = guardrails.find((r) => r.id === p.split("/").pop());
        Object.assign(r, req.postDataJSON());
        body = r;
      } else if (p === "/admin/skills") body = demoSkills;
      else if (p.startsWith("/admin/skills/"))
        body = {
          id: p.split("/").pop(),
          source:
            "---\nname: voorstellen-in-onze-huisstijl\ndescription: Schrijf een voorstel in onze vaste structuur en toon.\n---\n# Aanpak\n1. Vat de klantvraag samen.\n2. Benoem doel en uitgangspunten.\n3. Werk de aanpak uit.\n4. Geef acties en open vragen.\n\nGebruik begrijpelijke taal en controleer broninformatie.",
          license: "Eigen instructies",
          compatibility: "AITJE",
        };
      else if (p === "/admin/permissions") body = specs;
      else if (p === "/admin/role-categories") body = categories;
      else if (p === "/knowledge/categories") body = categories;
      else if (p === "/knowledge/roles") body = [demoRole];
      else if (p === "/usage/me")
        body = scene.startsWith("chat-")
          ? {
              cap_eur: null,
              spent_eur: 0,
              remaining_eur: null,
              on_limit: "block",
              reached: false,
              limits: [],
            }
          : demoUsage;
      else if (p === "/admin/usage/caps")
        body = {
          roles: [
            {
              role_id: "review",
              name: "Klantenservice",
              monthly_eur: 25,
              daily_tokens: 50000,
              on_limit: "fallback",
            },
          ],
          personal: [
            { user_id: user.id, monthly_eur: 15, daily_tokens: 30000 },
          ],
          users: [{ user_id: user.id, name: demoUser.name, ...demoUsage }],
        };
      else if (p === "/admin/usage")
        body = {
          summary: {
            ...fixtures[p].summary,
            cost_eur: 18.4,
            tokens: 372000,
            tokens_in: 240000,
            tokens_out: 132000,
            questions: 186,
            local_pct: 84,
            local_only: false,
          },
          series: {
            bucket: "day",
            start: "2026-10-12T00:00:00Z",
            end: "2026-10-19T00:00:00Z",
            points: Array.from({ length: 7 }, (_, i) => ({
              t: `2026-10-${12 + i}T00:00:00Z`,
              group: "Lokaal · algemeen",
              tokens_in: 25000 + i * 2200,
              tokens_out: 14000 + i * 800,
              questions: 18 + i,
              cost_eur: 0,
            })),
          },
          top_users: [
            {
              user_id: user.id,
              name: demoUser.name,
              questions: 42,
              tokens: 98000,
              cost_eur: 6.8,
            },
          ],
          budgets: [
            {
              provider: "example",
              name: "Voorbeeldprovider",
              budget_eur: 100,
              spent_eur: 18.4,
            },
          ],
        };
      else if (p === "/knowledge/documents")
        body = {
          total: 3,
          items: [
            {
              ...doc,
              title: "Servicehandboek 2026",
              filename: "servicehandboek.pdf",
              mime: "application/pdf",
              page_count: 18,
            },
            {
              ...doc,
              id: "doc2",
              title: "Producten en diensten",
              filename: "producten.pdf",
              category: "Producten & diensten",
            },
            {
              ...doc,
              id: "doc3",
              title: "Werkinstructies klantcontact",
              filename: "werkinstructies.docx",
            },
          ],
        };
      else if (p === "/chats")
        body = [
          { ...chat, title: scenes[scene]?.title ?? "Werken met eigen kennis" },
        ];
      else if (p === "/chats/chat" && scenes[scene])
        body = {
          ...chat,
          title: scenes[scene].title,
          messages: [
            { ...messages[0], content: scenes[scene].title },
            {
              ...messages[1],
              content: scenes[scene].answer,
              artifacts: [
                {
                  id: "marketing-answer",
                  type: "pending",
                  title: scenes[scene].title,
                },
              ],
            },
          ],
        };
      else if (p === "/artifacts/marketing-answer")
        body = {
          id: "marketing-answer",
          type: "interactive",
          title: scenes[scene].title,
          content: scenes[scene].html,
        };
      return route.fulfill({ json: body });
    },
  );
}
const browser = await chromium.launch({
  executablePath:
    process.env.CHROME ??
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  headless: true,
});
const priorCaptures = JSON.parse(
  await readFile(resolve(dest, "captures.json"), "utf8").catch(() => "[]"),
);
const manifest = priorCaptures;

try {
  for (const scene of process.env.AITJE_CAPTURE_SCENES?.split(",") ?? [
    ...Object.keys(scenes),
    "admin-modellen",
    "admin-budget",
    "admin-verbruik",
    "kennis-documenten",
    "taken-overzicht",
    "admin-guardrails",
    "admin-skills",
    "admin-modes",
    "admin-netwerk",
    "admin-systeem",
  ]) {
    const context = await browser.newContext({
      colorScheme: "dark",
      viewport: { width: 1440, height: 1000 },
      recordVideo: { dir: work, size: { width: 1440, height: 1000 } },
    });
    await setup(context, scene);
    const page = await context.newPage();
    page.setDefaultTimeout(18000);
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    const extraRoutes = {
      "admin-guardrails": "/admin/guardrails",
      "admin-skills": "/admin/skills",
      "admin-modes": "/admin/modes",
      "admin-netwerk": "/admin/network",
      "admin-systeem": "/admin/system",
    };
    const path =
      extraRoutes[scene] ??
      (scene.startsWith("chat-")
        ? "/c/chat"
        : scene.startsWith("admin-m") || scene === "admin-budget"
          ? "/admin/roles/review"
          : scene === "admin-verbruik"
            ? "/admin/usage"
            : scene === "kennis-documenten"
              ? "/kennis/documents"
              : "/tasks");
    await page.goto(
      (process.env.AITJE_ASSISTANT_URL ?? "http://localhost:3000") + path,
    );
    if (scene.startsWith("chat-"))
      await page
        .locator("[data-composed-answer] iframe")
        .waitFor()
        .catch(async (e) => {
          await page.screenshot({
            path: "/tmp/aitje-marketing-diagnostic.png",
          });
          console.log("Page:", await page.locator("body").innerText());
          throw e;
        });
    else if (["admin-modellen", "admin-budget"].includes(scene)) {
      await page.locator("#role-name").waitFor();
      await page
        .getByRole("tab", {
          name: scene === "admin-modellen" ? "Modellen" : "Verbruik",
          exact: true,
        })
        .click();
    } else await page.locator("main").waitFor();
    await page.evaluate(async () => document.fonts.ready);
    await page.waitForTimeout(1400);
    await page.screenshot({ path: resolve(dest, `screenshots/${scene}.png`) });
    await page.screenshot({ path: resolve(dest, `posters/${scene}.png`) });
    const start = Date.now();
    if (scene.startsWith("chat-")) {
      const frame = page
        .locator("[data-composed-answer]")
        .frameLocator("iframe");
      await page.waitForTimeout(1200);
      if (scene === "chat-render") {
        await frame.locator('canvas[data-cubies="27"][data-tiles="54"]').waitFor();
        await frame.locator("#rotation").fill("-35");
        await page.waitForTimeout(1800);
        await frame.locator("#rotation").fill("45");
      }
      if (scene === "chat-quiz") {
        await frame.locator('[data-answer="a"]').click();
        await page.waitForTimeout(1800);
        await frame.locator('[data-answer="b"]').click();
        await page.waitForTimeout(1800);
        await frame.locator('#quiz-next').click();
        await page.waitForTimeout(1200);
        await frame.locator('[data-answer="b"]').click();
      }
      if (scene === "chat-visualisatie") {
        await frame.locator('[data-week="1"]').click();
        await page.waitForTimeout(1800);
        await frame.locator('[data-week="0"]').click();
      }
      if (scene === "chat-proces") {
        await frame.locator('[data-step="1"]').click();
        await page.waitForTimeout(1800);
        await frame.locator('[data-step="2"]').click();
      }
    } else if (scene === "admin-modellen") {
      await page.waitForTimeout(1000);
      await page
        .getByRole("checkbox", { name: "Lokaal · redeneren", exact: true })
        .check();
      await page.waitForTimeout(1500);
      await page
        .getByRole("checkbox", {
          name: "Extern · toegestaan model",
          exact: true,
        })
        .check();
    } else if (scene === "admin-budget") {
      await page.waitForTimeout(1000);
      await page.locator('[id="perm-cap.monthly_eur"]').fill("50");
      await page.waitForTimeout(1600);
      await page.locator('[id="perm-cap.daily_tokens"]').fill("75000");
    } else if (scene === "admin-guardrails") {
      await page
        .getByRole("button", {
          name: "Contactgegevens afschermen bewerken",
          exact: true,
        })
        .click();
      await page.waitForTimeout(1700);
      await page
        .getByRole("dialog")
        .getByRole("button", { name: "Annuleren", exact: true })
        .click();
      await page
        .locator("#guard-sample")
        .fill("Neem contact op met robin@example.test over Project Morgen.");
      await page.locator("#guard-sample").scrollIntoViewIfNeeded();
      await page.getByRole("button", { name: "Testen", exact: true }).click();
    } else if (scene === "admin-skills") {
      await page
        .getByRole("button", { name: "Bewerken", exact: true })
        .first()
        .click();
      await page.waitForTimeout(1600);
    } else if (scene === "admin-modes") {
      await page.getByText("Algemeen", { exact: true }).first().click();
      await page.waitForTimeout(1600);
    } else if (scene === "admin-netwerk") {
      await page
        .getByText("https://aitje.test", { exact: false })
        .first()
        .hover();
      await page.waitForTimeout(1600);
    } else if (scene === "admin-systeem") {
      await page.waitForTimeout(1800);
    } else if (scene === "admin-verbruik") {
      await page.waitForTimeout(1000);
      await page
        .locator('[data-cap-user="Robin Voorbeeld"]')
        .getByRole("button")
        .click();
      await page.waitForTimeout(1200);
      await page.selectOption("#personal-budget-period", "day");
      await page.locator("#personal-budget-daily_tokens").fill("20000");
    }
    await page.waitForTimeout(2200);
    await page.screenshot({
      path: resolve(dest, `screenshots/${scene}-detail.png`),
    });
    if (errors.length) throw new Error(scene + ": " + errors.join(";"));
    const clipLength = (Date.now() - start) / 1000;
    const video = page.video();
    await context.close();
    const raw = await video.path();
    const duration = Number(
      execFileSync(
        "ffprobe",
        [
          "-v",
          "error",
          "-show_entries",
          "format=duration",
          "-of",
          "csv=p=0",
          raw,
        ],
        { encoding: "utf8" },
      ),
    );
    execFileSync("ffmpeg", [
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-ss",
      String(Math.max(0, duration - clipLength)),
      "-i",
      raw,
      "-t",
      String(clipLength),
      "-vf",
      "fps=20,scale=1152:800",
      "-c:v",
      "libx264",
      "-crf",
      "22",
      "-pix_fmt",
      "yuv420p",
      "-movflags",
      "+faststart",
      "-an",
      resolve(dest, `video/${scene}.mp4`),
    ]);
    execFileSync("ffmpeg", [
      "-hide_banner",
      "-loglevel",
      "error",
      "-y",
      "-i",
      resolve(dest, `video/${scene}.mp4`),
      "-filter_complex",
      "fps=8,scale=864:-1:flags=lanczos,split[a][b];[a]palettegen=max_colors=96[p];[b][p]paletteuse=dither=bayer:bayer_scale=4",
      "-loop",
      "0",
      resolve(dest, `gifs/${scene}.gif`),
    ]);
    const previous = manifest.findIndex((item) => item.scene === scene);
    if (previous >= 0) manifest.splice(previous, 1);
    manifest.push({
      scene,
      route: path,
      duration: clipLength,
      source:
        "Real frontend with synthetic browser API fixtures; prepared scenarios, no model calls or performance measurement",
    });
    console.log("Captured:", scene);
  }
  await writeFile(
    resolve(dest, "captures.json"),
    JSON.stringify(manifest, null, 2) + "\n",
  );
} finally {
  await browser.close();
}
