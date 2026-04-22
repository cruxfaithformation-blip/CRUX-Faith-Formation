# CRUX Faith Formation Platform — Claude Code Handoff

## Project Overview

CRUX is a Catholic faith formation platform with a trading card system, apparel brand, and web platform. It serves students and teachers in faith formation contexts, combining gamified saint card collecting with structured curriculum modules.

**Live Site:** cruxfaith.com
**Hosting:** Netlify (deployed from GitHub)
**Firebase Project ID:** crux-faith-formation

---

## Local File Structure

```
/Documents/CRUX/
├── /WebDevelopment/
│   ├── /CRUXdeploy/          # All HTML & JS deployed to Netlify/GitHub (production files)
│   ├── /BibleStudyModules/   # Adult formation track
│   │   └── /adultformationtrack/
│   │       └── [subfolder per module]
│   ├── /Biblestudy/          # 4 HTML modules, early-stage development
│   └── /CRUXmodules/         # HTML for all modules in the "Faith Formation" tab
│
└── /Saint Cards/
    ├── /LEGENDARY/           # Drafted Leonardo.ai images for future LEGENDARY holo cards
    ├── /rare/                # First rare card images
    ├── /Graysons/            # Personal cards made for nieces & nephew
    ├── /1of1/                # One-of-a-kind gift cards
    └── /AlphaPack/           # Starter pack given to all users on signup
```

**Production files live in `/CRUXdeploy/`.** When editing files intended for the live site, always work from this folder.

---

## Firebase Architecture

**Project ID:** `crux-faith-formation`
**Services in use:** Firebase Auth, Firestore

### Firestore Schema

```
/teachers/{uid}
  - email
  - displayName
  - classCode
  - role: "teacher"

/userProgress/{uid}
  - xp
  - level
  - cardsOwned: []
  - packsOpened: int
  - role: "student" | "teacher"
```

### Auth
- Email/password auth via Firebase Auth
- Role-based registration: Student vs Teacher
- Teacher accounts write to `teachers/{uid}`; student accounts write to `userProgress/{uid}`
- Conditional registration fields based on role (teachers get class code generation)

---

## Saint Card System

### Current Holographic Cards (Built)
All 6 are fully built with holographic flip mechanics, parallax, and cinematic reveal animations:
1. St. Thomas
2. St. Cecilia
3. St. David
4. St. Clare
5. St. Bernadette
6. Blessed Virgin Mary (BVM)

### Card Mechanics
- **Flip mechanic:** Mouse hover triggers 3D flip to reveal card back
- **Parallax:** Mouse movement drives layered parallax depth effect on card face
- **Holographic effect:** CSS gradient shimmer tied to mouse position
- **Card back:** CRUX wordmark in Playfair Display 900, gold gradient on navy background

### Pack Opening System
- Weighted random draw system for rarity tiers
- Cinematic reveal animation sequence
- Pack results write card ownership to `userProgress/{uid}.cardsOwned`

### Rarity Tiers
| Tier | Notes |
|------|-------|
| Common | Standard saints |
| Rare | First few built, images in `/Saint Cards/rare/` |
| Legendary | Future holo cards, images drafted in `/Saint Cards/LEGENDARY/` |
| 1-of-1 | Personal gift cards, not in pack pool |

### Alpha Pack
- Starter pack in `/Saint Cards/AlphaPack/`
- Intended to be distributed automatically to all new user signups
- **Status:** Started, not fully implemented

---

## Design System

| Token | Value |
|-------|-------|
| Primary background | Navy |
| Primary accent | Gold gradient |
| Heading font | Playfair Display, weight 900 |
| Card back font | Playfair Display 900, gold gradient on navy |
| Apparel fonts | Cinzel, IM Fell English, DM Mono |

**Apparel brand** uses Bella+Canvas as exclusive supplier. Designs built in Canva with scripture-anchored hero designs.

---

## Account System (crux-account.html)

- Role-based registration form (Student / Teacher)
- Conditional fields: teachers see class code generation UI
- XP breakdown dashboard
- Firestore writes on registration:
  - Teachers → `teachers/{uid}`
  - Students → `userProgress/{uid}`

---

## Site Structure / Tabs

The CRUX website has the following main sections:
- **Faith Formation tab** — modules live in `/CRUXmodules/`
- **Bible Study** — early stage, 4 HTML modules in `/Biblestudy/`
- **Adult Formation Track** — more developed, lives in `/BibleStudyModules/adultformationtrack/`
- **Card Collection / Pack Opening** — the trading card experience
- **Account / Profile** — `crux-account.html`

---

## Known Issues & Hard-Won Lessons

1. **No browser-based debugging** — Browser diagnosis via Claude consistently fails for local file paths. All effective debugging must be done directly from code using `node --check` for JS validation.
2. **Template literal mangling** — Python scripts have historically corrupted JavaScript template literals. Use plain string concatenation in JS files; avoid Python-based file manipulation on JS source.
3. **One file per conversation (legacy)** — Previous workflow was one fresh Chat conversation per file with a handoff doc. Claude Code replaces this — read the whole project directly instead.
4. **Firebase sync** — Past issues with Firebase sync on Legacy Verse Studio (separate project) were resolved by ensuring all Firestore writes are awaited properly.

---

## Related Projects (Do Not Confuse)

- **Legacy Verse Studio** — Separate project. Firebase project ID: `legacy-visual-studio`. Greeting card verse generation tool. Deployed on Netlify.
- **The Barn at Schartner Farms** — Wedding venue concept. Unrelated to CRUX.

---

## Preferred Workflow in Claude Code

- Work from `/CRUXdeploy/` for anything going to production
- Run `node --check filename.js` to validate JS before testing in browser
- Commit logical units of work to git with descriptive messages
- When adding a new saint card: create the card HTML, add to card catalog, assign rarity tier, add image asset to appropriate `/Saint Cards/` subfolder
