# Scrum Trainer

Browser-based practice trainers for **Scrum.org certifications**. Pick a certification from the dropdown, choose topics and mode, and drill. No build step, no dependencies, no backend — a shared engine (`app.js`) plus one question-bank file per certification. Runs from GitHub Pages or straight off the file system, and stores your scores per-browser in `localStorage`.

> Original study questions written against the official Scrum guides — **not** real exam questions and not affiliated with Scrum.org. Always pair with the free official [Open Assessments](https://www.scrum.org/open-assessments).

## Certifications

| # | Certification | Real exam | Bank | Status |
|---|---------------|-----------|------|--------|
| 1 | Professional Scrum Master I (PSM I) | 80 Q · 60 min · 85% | 84 Q | ✅ complete |
| 2 | Professional Scrum Product Owner I (PSPO I) | 80 Q · 60 min · 85% | 16 Q | 🌱 starter |
| 3 | Professional Scrum Product Owner – AI Essentials | 20 Q · 30 min · 85% | 14 Q | 🌱 starter |
| 4 | Professional Agile Leadership – Essentials (PAL-E) | 36 Q · 60 min · 85% | 16 Q | 🌱 starter |
| 5 | Professional Scrum Facilitation Skills (PSF Skills) | 20 Q · 30 min · 85% | 14 Q | 🌱 starter |
| 6 | Professional Scrum Developer (PSD I) | 80 Q · 60 min · 85% | 16 Q | 🌱 starter |
| 7 | Professional Scrum with Kanban (PSK I) | 80 Q · 60 min · 85% | 17 Q | 🌱 starter |
| 8 | Professional Product Discovery & Validation (PPDV) | 20 Q · 30 min · 85% | 14 Q | 🌱 starter |

**🌱 starter** = a real, validated set of original questions grounded in the official guides, smaller than a full bank — being expanded and expert-reviewed. **✅ complete** = full-size bank.

Exam parameters were taken from scrum.org; verify the few that change over time (e.g. PSK / PAL question counts) against the linked official pages.

## Features

- **Certification dropdown** — one engine, switch banks instantly.
- **Topic filter** — per-certification topic chips; drill only your weak areas.
- **Two modes** — *Practice* (instant feedback + explanation per question) and *Exam* (timed, full review at the end).
- **Full-exam simulation** — one click runs the real question count + time limit + 85% pass mark for the selected cert.
- **Shuffled** questions and answer options every run; per-cert score history.

## Structure

```
scrum-trainer/
├── index.html        # shell: cert dropdown + quiz UI; loads engine + all banks
├── app.js            # shared quiz engine (multi-certification)
├── data/             # one bank file per certification (registers window.BANKS[id])
│   ├── psm-i.js  pspo-i.js  pspo-ai.js  pal-e.js
│   └── psf.js    psd.js     psk.js      ppdv.js
└── README.md
```

## How to use

- **Hosted (recommended):** deploy via GitHub Pages (Settings → Pages → Branch `main` / root). Visit the URL — works on a phone.
- **Local:** serve the folder (e.g. `python -m http.server`) and open it. Opening `index.html` directly via `file://` also works in most browsers; a tiny static server is the most reliable.

## Adding / growing a bank

Each `data/<id>.js` is an IIFE that registers a bank into `window.BANKS`:

```js
(function(){
  window.BANKS = window.BANKS || {};
  window.BANKS["psm-i"] = {
    id:"psm-i", short:"PSM I", name:"Professional Scrum Master I",
    url:"https://www.scrum.org/...", source:"Scrum Guide 2020",
    pass:85, examCount:80, minutes:60, status:"complete",
    cats:{ theory:"Theory & Values", team:"Scrum Team", events:"Events", artifacts:"Artifacts" },
    questions:[
      { type:"single", cat:"events", q:"…?", opts:[{t:"A",c:true},{t:"B"},{t:"C"},{t:"D"}], exp:"Why, per source." },
      { type:"multi",  cat:"team",   q:"… (select 2)", opts:[{t:"A",c:true},{t:"B",c:true},{t:"C"}], exp:"…" },
      { type:"tf",     cat:"theory", q:"A statement.", opts:[{t:"True",c:true},{t:"False"}], exp:"…" }
    ]
  };
})();
```

Rules: `single` = exactly 1 correct, `multi` = 2+ correct, `tf` = 2 options (True/False) with 1 correct. Every `cat` must exist in `cats`. To add a new certification, drop a new `data/<id>.js`, add a `<script>` tag in `index.html`, and (optionally) place its id in `CERT_ORDER` in `app.js`.
