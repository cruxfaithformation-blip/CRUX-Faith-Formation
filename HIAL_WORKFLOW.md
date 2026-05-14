# Here I Am, Lord — Chapter Workflow

**Book:** *Here I Am, Lord: Send Me — 12 Old Testament Heroes Who Took Life by the Horns*
**Audience:** Ages 7-12
**Format:** One HTML file per chapter, deployed to cruxfaith.com via Netlify/GitHub
**Landing page:** `here-i-am-lord.html`

---

## Chapters Complete

| # | Hero | File | Status |
|---|------|------|--------|
| 1 | Moses | `hial-ch01-moses.html` | Live |
| 2 | David | `hial-ch02-david.html` | Live |
| 3–12 | TBD | — | Not started |

---

## The 7-Section Chapter Structure

Every chapter has the same seven sections, in order:

| Section | Visual | Purpose |
|---------|--------|---------|
| **The Hook** | Yellow card, gold left border | Visceral opening moment that grabs attention |
| **The Story** | White card, warm border | Full narrative; contains one mid-story illustration |
| **The Turning Point** | Full-bleed amber band | The decision/insight that changed everything |
| **What Happened Next** | Full-bleed parchment band | Brief — covers legacy and wider significance |
| **Here I Am Moment** | Full-bleed sage green band | Application to the reader's life; contains HIAM illustration |
| **Dig Deeper** | Blue card | 3 discussion/reflection questions |
| **The Verse** | Gold-bordered card | Memory verse |

---

## Workflow Per Chapter

### Step 1 — Research Brief (for heroes Andrew is less familiar with)
Claude writes a research brief covering: key story beats, the Turning Point moment, Here I Am application, and a suggested memory verse. Andrew reviews before drafting.

### Step 2 — Full Draft
Claude writes the complete chapter in Andrew's voice, using the previous chapter as a voice reference. Saves as a `.docx` in `/Users/andrewcross/Documents/CRUX/` for offline editing.

Voice markers to maintain:
- Direct reader address ("you've probably heard this story before")
- Modern analogies ("ancient DoorDash driver")
- Punchy short sentences. Sometimes one word.
- Humor with reverence
- Personal asides (teaching CCD, football games, tattoos)
- No em dashes. No "Not-Not-But" triples. No announcing sentences.

### Step 3 — Andrew Rewrites
Andrew edits the draft in his own voice and sends it back.

### Step 4 — Feedback
Claude reviews Andrew's rewrite and flags:
- Prose issues (per CRUX rules above)
- Factual/theological inaccuracies
- Weak or flat endings
- Missing content

### Step 5 — Prompt Remaining Sections
Claude prompts Andrew for any sections not covered in his rewrite (usually Turning Point and Here I Am Moment). Andrew answers in a few sentences; Claude drafts the section and Andrew approves.

### Step 6 — Dig Deeper + Verse
Claude drafts 3 questions and selects the memory verse. Andrew approves or adjusts.

### Step 7 — Build HTML
Claude builds `hial-ch0X-[hero].html` using the Moses chapter as the CSS/structure template. All prose, sections, and illustration placeholders drop in.

### Step 8 — Unlock Landing Page
Claude edits `here-i-am-lord.html` to convert the hero's locked `div` to an `<a>` tag linking to the new chapter file.

### Step 9 — Commit and Push
```
git add hial-ch0X-[hero].html here-i-am-lord.html
git commit -m "Add Chapter X: [Hero] — Here I Am, Lord"
git push
```

### Step 10 — Leonardo.ai Illustrations
Claude writes 3 prompts (see spec below). Andrew generates and saves images, then:
```
git add "images/Here I Am Lord Storybook/CH0X [Hero]/"
git commit -m "Add [Hero] chapter illustrations"
git push
```

---

## Illustration Spec

**3 illustrations per chapter:**

| Slot | CSS class | File name | Notes |
|------|-----------|-----------|-------|
| Header | `.chapter-illustration` | `hial-ch0X-[hero]-[scene].jpg` | Wide landscape |
| Mid-story | `.story-illustration` | `hial-ch0X-[hero]-[scene].jpg` | Edge-to-edge within story card |
| Here I Am | `.hiam-illustration` | `hial-ch0X-[hero]-hiam.jpg` | Full width, rounded corners |

**Image folder:** `images/Here I Am Lord Storybook/CH0X [Hero]/`
HTML path uses `%20` for spaces: `images/Here%20I%20Am%20Lord%20Storybook/CH0X%20[Hero]/filename.jpg`

**Aspect ratio:** Use widest landscape setting available. Images display at natural height — no cropping.

---

## Leonardo.ai Guidance

**Primary model:** FLUX.2 Pro
**Backup model:** Recraft V4 Pro

**Style language that works:**
> Painterly children's book illustration, wide landscape, warm earth tones, detailed but not photorealistic.

**Negative prompt (always include):**
> photorealistic, dark, blood, gore, horror, modern, text, watermark

**Scene framing:**
- Header: establishing/character scene, 3:1 or widest available ratio
- Mid-story: action or dramatic moment, 16:9
- Here I Am: modern child in relatable situation, 16:9

---

## Design System

```css
--cream: #fdf8f0;         /* body background */
--parchment: #ede4cf;     /* What Happened Next band */
--navy: #1a1f36;          /* headings, ghost numbers */
--gold: #b8782a;          /* labels, accents */
--gold-light: #deb870;    /* borders, pullquotes */
--sage: #4a7a42;          /* Here I Am section text */
--sage-mid: #d8eccc;      /* Here I Am section background */
--text-dark: #2d1f0e;     /* body prose */

/* Turning Point band */
background: #f0d890;

/* Hook card */
background: #fef7e2;

/* Dig Deeper card */
background: #e6eff8;  border-left: 4px solid #5a7aaa;

/* Verse card */
background: #fdf0d2;  border: 2px solid var(--gold-light);
```

**Fonts:** Playfair Display (headings, 900 weight) · Crimson Pro (body) · Inter (labels, eyebrows)

---

## File Naming Conventions

```
hial-ch01-moses.html
hial-ch02-david.html
hial-ch03-[hero].html
...

images/Here I Am Lord Storybook/CH01 Moses/hial-ch01-moses-bush.jpg
images/Here I Am Lord Storybook/CH02 David/hial-ch02-david-samuel.jpg
```

---

## Book Structure (Planned)

The landing page (`here-i-am-lord.html`) has 4 parts with 3 heroes each. Parts 2-4 are not yet defined — to be confirmed as chapters are written.

| Part | Theme | Heroes |
|------|-------|--------|
| Part One: When God Calls | God choosing unlikely people | Moses, David, + 1 TBD |
| Part Two | TBD | 3 heroes |
| Part Three | TBD | 3 heroes |
| Part Four | TBD | 3 heroes |

Remaining 10 heroes to assign: Joseph, Joshua, Gideon, Ruth, Samuel, Elijah, Esther, Nehemiah, Daniel, Jonah (from original manuscript kickoff)

---

## Git / Deployment

- **Repo:** GitHub → Netlify auto-deploy on push to `main`
- **Branch:** always `main`
- **Validate JS before push:** `node --check filename.js`
- **Batch commits** — push once per session to conserve Netlify build minutes
