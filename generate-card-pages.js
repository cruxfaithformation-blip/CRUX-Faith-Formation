// Generates individual holographic card pages for each Alpha Pack saint
// Run: node generate-card-pages.js
// Output: crux-{saint}-flip.html in the current directory

const fs = require('fs');
const path = require('path');

const GRAYSONS_DIR = '/Users/andrewcross/Documents/CRUX/Saint Cards/Graysons';
const LEGENDARY_DIR = '/Users/andrewcross/Documents/CRUX/Saint Cards/LEGENDARY';
const OUT_DIR = __dirname;

function toBase64(filePath) {
  return fs.readFileSync(filePath).toString('base64');
}

const cards = [
  {
    slug:        'cecilia',
    title:       'CRUX — St. Cecilia',
    saintName:   'St. Cecilia',
    badge:       '✦ Uncommon',
    feast:       'November 22',
    patron:      'Musicians, composers, singers',
    bio:         'She sang to God in her heart while the organs played around her — music no one else in the room could hear.',
    setNum:      '033 / 052',
    backName:    'Cecilia of Rome',
    backDates:   'd. c. 230 AD · Rome',
    prayer: [
      'O St. Cecilia, virgin and martyr, you who kept a song of love for God alive in your heart even in the midst of what the world demanded of you — intercede for all musicians, composers, and singers who offer their art as prayer.',
      'Teach us that the truest music is the interior offering of the heart, hidden from every ear but God\'s alone. Pray for us in our silence, and help us find the sacred in sound.',
    ],
    bioParagraphs: [
      'Cecilia was a young Roman noblewoman who had consecrated her virginity to God. When forced into marriage, she converted her husband Valerian and his brother Tiburtius to Christianity. An angel appeared to them with roses from paradise as the seal of her vow.',
      'After her husband\'s martyrdom, Cecilia was sentenced to death by suffocation, then by beheading. She survived three sword strikes and lived three more days, giving away all she had to the poor. She is the patron of music because at her wedding, while the organs played, she sang to God in her heart alone.',
    ],
    facts: [
      { label: 'Also Known', value: 'Cecilia of Rome · Patron of Music' },
      { label: 'Key Text',   value: 'Acts of Cecilia · Roman Martyrology' },
      { label: 'Patron of',  value: 'Musicians · Composers · Singers · Poets' },
      { label: 'Symbols',    value: 'Organ · White roses · Palm of martyrdom' },
      { label: 'Martyrdom',  value: 'Beheading, c. 230 AD · Rome' },
    ],
    imgFile: path.join(GRAYSONS_DIR, 'Cecilia.jpg'),
  },
  {
    slug:        'david',
    title:       'CRUX — St. David of Wales',
    saintName:   'St. David of Wales',
    badge:       '✦ Uncommon',
    feast:       'March 1',
    patron:      'Wales, poets, the Welsh people',
    bio:         '"Be joyful. Keep the faith. Do the little things." — His last words became a nation\'s motto.',
    setNum:      '034 / 052',
    backName:    'David of Wales',
    backDates:   'c. 500–589 AD · Menevia, Wales',
    prayer: [
      'O St. David, patron of Wales, you who found God in small acts faithfully done — intercede for all who feel their work is too ordinary to matter, too hidden to count.',
      'Remind us that the little things, done with great love and steady faith, are the very substance of a holy life. Pray for Wales, for all who carry your motto in their hearts, and for all who need to hear: be joyful, keep the faith, do the little things.',
    ],
    bioParagraphs: [
      'David was a sixth-century Welsh bishop who founded monastic communities across Wales and Brittany. He lived with extreme austerity — drinking only water, eating bread with salt and herbs — and was known for his care for the poor and sick.',
      'At the Synod of Brefi, the ground beneath him is said to have risen into a hill so all could hear him preach, and a white dove descended onto his shoulder. His final sermon ended with words Wales never forgot: "Be joyful, keep the faith, do the little things."',
    ],
    facts: [
      { label: 'Also Known', value: 'Dewi Sant · David of Menevia' },
      { label: 'Key Text',   value: 'Rhygyfarch\'s Life of St. David, c. 1090' },
      { label: 'Patron of',  value: 'Wales · Welsh people · Poets · Vegetarians' },
      { label: 'Symbols',    value: 'White dove · Leek · Pastoral staff' },
      { label: 'Canonized',  value: '1120 AD by Pope Calixtus II' },
    ],
    imgFile: path.join(GRAYSONS_DIR, 'David.jpg'),
  },
  {
    slug:        'clare',
    title:       'CRUX — St. Clare of Assisi',
    saintName:   'St. Clare of Assisi',
    badge:       '✦ Uncommon',
    feast:       'August 11',
    patron:      'Television, the Poor Clares',
    bio:         'She stood at the gate holding nothing but the Eucharist — and the soldiers fled.',
    setNum:      '035 / 052',
    backName:    'Clare of Assisi',
    backDates:   '1194–1253 AD · Assisi, Italy',
    prayer: [
      'O St. Clare, mirror of poverty and courage, you who stood between your sisters and an army with nothing in your hands but the Body of Christ — intercede for all who feel defenseless.',
      'Teach us that the Eucharist is not a symbol but a presence, and that placing ourselves before it in trust is the most powerful act available to us. Pray for all who guard others through prayer and love.',
    ],
    bioParagraphs: [
      'Clare of Assisi heard Francis preach when she was eighteen and gave up everything — her noble family, her wealth, her future — to follow Christ in radical poverty. She founded the Order of Poor Ladies (the Poor Clares), the first religious order for women written by a woman.',
      'In 1240, gravely ill, she was carried to the gate of San Damiano when Emperor Frederick II\'s soldiers came to attack. She knelt holding the monstrance. The soldiers, according to witnesses, were seized with fear and fled. She lived twenty-seven years of illness and is one of the Church\'s greatest mystics.',
    ],
    facts: [
      { label: 'Also Known', value: 'Clare of the Cross · Mirror of Francis' },
      { label: 'Key Text',   value: 'Rule of St. Clare · Letters to Agnes of Prague' },
      { label: 'Patron of',  value: 'Television · Eye disease · Embroiderers · Poor Clares' },
      { label: 'Symbols',    value: 'Monstrance · Lily · Lamp' },
      { label: 'Canonized',  value: '1255 AD by Pope Alexander IV' },
    ],
    imgFile: path.join(GRAYSONS_DIR, 'Clare.jpg'),
  },
  {
    slug:        'bernadette',
    title:       'CRUX — St. Bernadette',
    saintName:   'St. Bernadette',
    badge:       '✦ Uncommon',
    feast:       'April 16',
    patron:      'Lourdes, the sick, those who doubt',
    bio:         'She dug in the mud for a spring that wasn\'t there yet. It has not stopped flowing since.',
    setNum:      '036 / 052',
    backName:    'Bernadette Soubirous',
    backDates:   '1844–1879 AD · Lourdes, France',
    prayer: [
      'O St. Bernadette, poorest and smallest of visionaries, you who were asked to do something that looked foolish to everyone watching — and did it anyway — intercede for all who obey God in the face of ridicule.',
      'Pray for the sick who come to Lourdes and do not receive healing of the body, that they might receive the deeper healing you yourself received: peace, surrender, and the certainty of being known by God. You suffered your whole life and called it your job. Help us accept ours.',
    ],
    bioParagraphs: [
      'Bernadette Soubirous was fourteen, asthmatic, and illiterate when the Virgin Mary appeared to her eighteen times in the Grotto of Massabielle in 1858. When asked to dig for a spring, she obeyed before a crowd who thought she had lost her mind. The spring emerged and has flowed ever since — millions have been healed at Lourdes.',
      'Bernadette never sought a cure for herself. She entered the Sisters of Notre Dame at Nevers and spent her remaining years in severe illness, saying, "My job is to be sick." She died at 35. Her body, examined in 1909, 1919, and 1925, was found incorrupt.',
    ],
    facts: [
      { label: 'Also Known', value: 'Bernadette of Lourdes · Marie-Bernarde Soubirous' },
      { label: 'Key Text',   value: '18 Apparitions, Feb–Jul 1858 · Lourdes' },
      { label: 'Patron of',  value: 'Lourdes · The sick · The poor · Shepherds' },
      { label: 'Symbols',    value: 'Rosary · Grotto · Spring water · White roses' },
      { label: 'Canonized',  value: '1933 AD by Pope Pius XI' },
    ],
    imgFile: path.join(GRAYSONS_DIR, 'Bernadette.jpg'),
  },
  {
    slug:        'bvm',
    title:       'CRUX — Blessed Virgin Mary',
    saintName:   'Blessed Virgin Mary',
    badge:       '✦ Rare',
    feast:       'January 1 (Solemnity)',
    patron:      'All of humanity, the Church',
    bio:         '"Do whatever he tells you." The last recorded words of Mary in Scripture — and perhaps the most important.',
    setNum:      '001 / 052',
    backName:    'Mary, Mother of God',
    backDates:   'c. 18 BC – c. 40 AD · Nazareth',
    prayer: [
      'O Blessed Virgin Mary, Mother of God and our Mother, you who said yes to the impossible with complete trust — intercede for all who face what they cannot carry alone.',
      'Teach us your fiat: the surrender that does not know the cost but trusts the Giver. Pray for your children in every hour of need, and bring us always to your Son.',
    ],
    bioParagraphs: [
      'Mary of Nazareth was chosen from eternity to be the Mother of God — Theotokos, the God-bearer. Her yes to the angel Gabriel at the Annunciation set salvation history in motion. She bore the Word made flesh, watched him grow, and stood at the foot of his cross when all others fled.',
      'The Church has venerated Mary across every tradition and century, recognizing in her the fullest human cooperation with grace. Her apparitions — at Guadalupe, Lourdes, Fatima, and elsewhere — continue to call the world to prayer, penance, and peace. She is the New Eve, the Ark of the New Covenant, the Queen of Heaven.',
    ],
    facts: [
      { label: 'Also Known', value: 'Our Lady · Theotokos · Queen of Heaven · New Eve' },
      { label: 'Key Text',   value: 'Luke 1:26–56 · John 2:1–11 · John 19:25–27' },
      { label: 'Patron of',  value: 'All of humanity · The Church · Many nations' },
      { label: 'Symbols',    value: 'Blue mantle · White lily · Crescent moon · Crown of stars' },
      { label: 'Apparitions', value: 'Guadalupe · Lourdes · Fatima · Knock · Akita' },
    ],
    imgFile: path.join(LEGENDARY_DIR, 'MaryGuadalupe001.jpg'),
  },
];

function buildHTML(card, imgBase64) {
  const prayerHTML = card.prayer.map(p => `          <div class="back-prayer-text">${p}</div>`).join('\n');
  const bioHTML    = card.bioParagraphs.map(p => `          <div class="back-bio-text">${p}</div>`).join('\n');
  const factsHTML  = card.facts.map((f, i) =>
    `          <div class="back-fact-row"><span class="back-fact-label">${f.label}</span><span class="back-fact-value">${f.value}</span></div>${i < card.facts.length - 1 ? '\n          <div class="back-fact-row"><div class="back-fact-divider"></div></div>' : ''}`
  ).join('\n');

  const prayerLabel = `Prayer to ${card.saintName}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${card.title}</title>
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">
<style>
* { margin:0; padding:0; box-sizing:border-box; }

body {
  background: radial-gradient(ellipse at center, #1a1510 0%, #0a0806 100%);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  gap: 1.2rem;
  font-family: 'EB Garamond', serif;
}

.flip-hint {
  font-family: 'Cinzel', serif;
  font-size: 0.52rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(212,165,116,0.35);
  text-align: center;
  pointer-events: none;
  transition: opacity 0.4s;
}

/* ══ FLIP SCENE ══ */
.card-scene {
  width: 300px;
  height: 420px;
  perspective: 1000px;
  cursor: pointer;
}

.card-flipper {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.72s cubic-bezier(0.45, 0.05, 0.2, 1.0);
}

.card-scene.flipped .card-flipper {
  transform: rotateY(180deg);
}

.card-face {
  position: absolute;
  inset: 0;
  border-radius: 18px;
  overflow: hidden;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* ══ FRONT FACE — HOLO ══ */
.card-front {
  box-shadow:
    0 0 0 1.5px rgba(255,255,255,0.15),
    0 0 0 3px rgba(120,80,200,0.3),
    0 8px 50px rgba(0,0,0,0.8),
    0 0 60px rgba(150,100,255,0.1);
}

.holo-portrait {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  z-index: 1;
}

.holo-darken {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(4,2,8,0) 0%, rgba(4,2,8,0) 28%,
    rgba(4,2,8,0.45) 50%, rgba(4,2,8,0.88) 68%,
    rgba(2,1,5,0.97) 100%
  );
  z-index: 2;
}

.holo-rainbow {
  position: absolute; inset: -50%; width: 200%; height: 200%;
  background: linear-gradient(115deg,
    transparent 0%, transparent 20%,
    rgba(255,0,128,0.18) 25%, rgba(255,100,0,0.15) 30%,
    rgba(255,220,0,0.18) 35%, rgba(0,255,128,0.15) 42%,
    rgba(0,200,255,0.18) 48%, rgba(100,0,255,0.15) 54%,
    rgba(255,0,200,0.12) 60%, transparent 65%, transparent 100%
  );
  z-index: 3; mix-blend-mode: screen;
  animation: holo-sweep 4s linear infinite; pointer-events: none;
}

@keyframes holo-sweep {
  0%   { transform: translateX(-30%) translateY(-30%); }
  100% { transform: translateX(30%)  translateY(30%); }
}

.holo-rainbow-2 {
  position: absolute; inset: -50%; width: 200%; height: 200%;
  background: linear-gradient(245deg,
    transparent 0%, transparent 25%,
    rgba(0,255,200,0.1) 30%, rgba(100,0,255,0.12) 36%,
    rgba(255,0,100,0.1) 42%, rgba(255,180,0,0.08) 48%,
    rgba(0,150,255,0.1) 54%, transparent 60%, transparent 100%
  );
  z-index: 3; mix-blend-mode: screen;
  animation: holo-sweep-2 6s linear infinite; pointer-events: none;
}

@keyframes holo-sweep-2 {
  0%   { transform: translateX(20%) translateY(20%); }
  100% { transform: translateX(-20%) translateY(-20%); }
}

.holo-foil {
  position: absolute; inset: 0; z-index: 4;
  mix-blend-mode: overlay; opacity: 0.4;
  background-image: repeating-linear-gradient(105deg,
    transparent 0px, transparent 2px,
    rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px
  );
  pointer-events: none;
}

.holo-specular {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 40% at 35% 25%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%);
  z-index: 5; pointer-events: none;
  animation: specular-shift 4s ease-in-out infinite alternate;
}

@keyframes specular-shift {
  0%   { background: radial-gradient(ellipse 60% 40% at 30% 20%, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 40%, transparent 70%); }
  50%  { background: radial-gradient(ellipse 60% 40% at 70% 40%, rgba(200,180,255,0.1) 0%, rgba(255,255,255,0.03) 40%, transparent 70%); }
  100% { background: radial-gradient(ellipse 60% 40% at 40% 70%, rgba(180,255,220,0.1) 0%, rgba(255,255,255,0.03) 40%, transparent 70%); }
}

.holo-rarity-strip {
  position: absolute; top: 0; left: 0; right: 0; height: 5px; z-index: 20;
  background: linear-gradient(90deg, #ff0080, #ff8c00, #ffe000, #00ff80, #00c8ff, #8000ff, #ff0080);
  background-size: 200% 100%;
  animation: rainbow-strip 3s linear infinite;
}

@keyframes rainbow-strip {
  0%   { background-position: 0% 0; }
  100% { background-position: 200% 0; }
}

.holo-border {
  position: absolute; inset: 4px; border-radius: 14px; z-index: 19;
  pointer-events: none; border: 1px solid rgba(255,255,255,0.15);
  box-shadow: inset 0 0 20px rgba(150,100,255,0.08);
  animation: border-glow 4s ease-in-out infinite alternate;
}

@keyframes border-glow {
  0%   { border-color: rgba(255,100,200,0.2); box-shadow: inset 0 0 20px rgba(255,0,150,0.06); }
  33%  { border-color: rgba(100,200,255,0.2); box-shadow: inset 0 0 20px rgba(0,200,255,0.06); }
  66%  { border-color: rgba(200,255,100,0.2); box-shadow: inset 0 0 20px rgba(100,255,0,0.06); }
  100% { border-color: rgba(255,200,100,0.2); box-shadow: inset 0 0 20px rgba(255,150,0,0.06); }
}

.holo-content {
  position: absolute; bottom: 0; left: 0; right: 0;
  padding: 1rem 1.1rem 0.9rem; z-index: 15;
}

.holo-name-row {
  display: flex; align-items: flex-start; justify-content: space-between;
  margin-bottom: 0.45rem; gap: 0.5rem;
}

.holo-saint-name {
  font-family: 'Cinzel', serif; font-size: 1.05rem; font-weight: 700;
  color: #ffffff; letter-spacing: 0.5px; line-height: 1.2;
  text-shadow: 0 0 20px rgba(200,150,255,0.6), 0 1px 8px rgba(0,0,0,0.9); flex: 1;
}

.holo-badge {
  display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px;
  border-radius: 4px; font-family: 'Cinzel', serif; font-size: 0.52rem;
  font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase;
  flex-shrink: 0; margin-top: 2px; background: rgba(0,0,0,0.5);
  border: 1px solid rgba(255,255,255,0.25); color: #ffffff;
  text-shadow: 0 0 8px rgba(200,150,255,0.8); backdrop-filter: blur(4px);
  animation: badge-glow 3s ease-in-out infinite alternate;
}

@keyframes badge-glow {
  0%   { border-color: rgba(255,100,200,0.5); color: #ffb0e0; text-shadow: 0 0 8px rgba(255,0,150,0.8); }
  33%  { border-color: rgba(100,200,255,0.5); color: #b0e0ff; text-shadow: 0 0 8px rgba(0,200,255,0.8); }
  66%  { border-color: rgba(180,255,100,0.5); color: #d0ffb0; text-shadow: 0 0 8px rgba(100,255,0,0.8); }
  100% { border-color: rgba(255,200,50,0.5);  color: #ffe8b0; text-shadow: 0 0 8px rgba(255,180,0,0.8); }
}

.holo-divider {
  width: 100%; height: 1px; margin: 0.4rem 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  position: relative; overflow: hidden;
}

.holo-divider::after {
  content: ''; position: absolute; top: 0; left: -100%; width: 60%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,200,255,0.6), transparent);
  animation: divider-sweep 3s ease-in-out infinite;
}

@keyframes divider-sweep { 0% { left: -60%; } 100% { left: 160%; } }

.holo-info-grid {
  display: grid; grid-template-columns: auto 1fr;
  gap: 0.22rem 0.6rem; margin-bottom: 0.45rem;
}

.holo-label {
  font-family: 'Cinzel', serif; font-size: 0.5rem; font-weight: 600;
  letter-spacing: 1.5px; text-transform: uppercase;
  color: rgba(255,255,255,0.4); padding-top: 2px; white-space: nowrap;
}

.holo-value {
  font-family: 'EB Garamond', serif; font-size: 0.8rem;
  color: rgba(255,240,220,0.9); line-height: 1.35;
  text-shadow: 0 1px 6px rgba(0,0,0,0.8);
}

.holo-bio {
  font-family: 'EB Garamond', serif; font-size: 0.78rem; font-style: italic;
  color: rgba(230,210,255,0.75); line-height: 1.5;
  border-left: 2px solid rgba(255,255,255,0.2); padding-left: 0.6rem;
  margin-bottom: 0.5rem; text-shadow: 0 1px 4px rgba(0,0,0,0.8);
}

.holo-footer {
  display: flex; align-items: center; justify-content: space-between;
  padding-top: 0.4rem; border-top: 1px solid rgba(255,255,255,0.1);
}

.holo-set { font-family:'Cinzel',serif; font-size:0.48rem; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.25); }
.holo-num { font-family:'Cinzel',serif; font-size:0.48rem; letter-spacing:1px; color:rgba(255,255,255,0.25); }

.holo-corner { position: absolute; z-index: 18; width: 28px; height: 28px; }
.hc-tl { top:10px; left:10px; }
.hc-tr { top:10px; right:10px; transform:scaleX(-1); }
.hc-bl { bottom:10px; left:10px; transform:scaleY(-1); }
.hc-br { bottom:10px; right:10px; transform:scale(-1,-1); }

/* ══ BACK FACE ══ */
.card-back {
  transform: rotateY(180deg);
  background: #0c0a07;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 0 0 1.5px rgba(255,255,255,0.12),
    0 0 0 3px rgba(120,80,200,0.25),
    0 8px 50px rgba(0,0,0,0.8),
    0 0 60px rgba(150,100,255,0.08);
}

.back-strip {
  height: 5px; flex-shrink: 0;
  background: linear-gradient(90deg, #ff0080, #ff8c00, #ffe000, #00ff80, #00c8ff, #8000ff, #ff0080);
  background-size: 200% 100%;
  animation: rainbow-strip 3s linear infinite;
}

.back-border {
  position: absolute; inset: 4px; border-radius: 14px; pointer-events: none;
  border: 1px solid rgba(255,255,255,0.1);
  animation: border-glow 4s ease-in-out infinite alternate; z-index: 10;
}

.back-foil {
  position: absolute; inset: 0; z-index: 2; mix-blend-mode: overlay; opacity: 0.25;
  background-image: repeating-linear-gradient(105deg,
    transparent 0px, transparent 2px,
    rgba(255,255,255,0.03) 2px, rgba(255,255,255,0.03) 3px
  );
  pointer-events: none;
}

.back-crest {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; opacity: 0.04; pointer-events: none; z-index: 1;
}
.back-crest svg { width: 200px; height: 200px; }

.back-vignette {
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(0,0,0,0.6) 100%);
  z-index: 3; pointer-events: none;
}

.back-content {
  position: relative; z-index: 20; flex: 1; display: flex;
  flex-direction: column; padding: 1.25rem 1.2rem 1rem; overflow: hidden;
}

.back-header { text-align: center; margin-bottom: 0.85rem; flex-shrink: 0; }

.back-saint-name {
  font-family: 'Cinzel', serif; font-size: 0.78rem; font-weight: 700;
  letter-spacing: 2.5px; text-transform: uppercase; color: rgba(255,255,255,0.85);
  text-shadow: 0 0 16px rgba(200,150,255,0.5); line-height: 1.3;
}

.back-dates {
  font-family: 'EB Garamond', serif; font-size: 0.72rem; font-style: italic;
  color: rgba(255,255,255,0.3); margin-top: 0.15rem; letter-spacing: 0.5px;
}

.back-ornament { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.85rem; flex-shrink: 0; }
.back-ornament-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent); }
.back-ornament-cross { font-size: 0.6rem; color: rgba(255,255,255,0.25); letter-spacing: 3px; }

.back-tabs {
  display: flex; gap: 0; margin-bottom: 0.75rem;
  border-bottom: 1px solid rgba(255,255,255,0.12); flex-shrink: 0;
}

.back-tab {
  font-family: 'Cinzel', serif; font-size: 0.58rem; letter-spacing: 1px;
  text-transform: uppercase; color: rgba(255,255,255,0.4);
  padding: 0.45rem 0.75rem 0.5rem; cursor: pointer;
  border-bottom: 2px solid transparent; margin-bottom: -1px;
  transition: color 0.2s, border-color 0.2s; user-select: none;
  min-width: 60px; text-align: center;
}
.back-tab.active { color: rgba(200,150,255,1); border-bottom-color: rgba(200,150,255,0.8); }
.back-tab:hover:not(.active) { color: rgba(255,255,255,0.65); }

.back-panel { display: none; flex: 1; overflow-y: auto; scrollbar-width: none; }
.back-panel::-webkit-scrollbar { display: none; }
.back-panel.active { display: block; }

.back-prayer-label {
  font-family: 'Cinzel', serif; font-size: 0.44rem; letter-spacing: 2px;
  text-transform: uppercase; color: rgba(200,150,255,0.5); margin-bottom: 0.6rem;
}

.back-prayer-text {
  font-family: 'EB Garamond', serif; font-size: 0.82rem;
  color: rgba(230,215,200,0.78); line-height: 1.7;
  text-shadow: 0 1px 4px rgba(0,0,0,0.7); margin-bottom: 0.4rem;
}

.back-bio-text {
  font-family: 'EB Garamond', serif; font-size: 0.8rem;
  color: rgba(230,215,200,0.78); line-height: 1.7;
  text-shadow: 0 1px 4px rgba(0,0,0,0.7); margin-bottom: 0.55rem;
}

.back-bio-text + .back-bio-text {
  padding-top: 0.4rem; border-top: 1px solid rgba(255,255,255,0.06);
}

.back-fact-row {
  display: grid; grid-template-columns: auto 1fr;
  gap: 0.25rem 0.6rem; margin-bottom: 0.55rem; align-items: start;
}
.back-fact-label {
  font-family: 'Cinzel', serif; font-size: 0.46rem; letter-spacing: 1.5px;
  text-transform: uppercase; color: rgba(200,150,255,0.55); padding-top: 3px; white-space: nowrap;
}
.back-fact-value {
  font-family: 'EB Garamond', serif; font-size: 0.8rem;
  color: rgba(230,215,200,0.82); line-height: 1.45; text-shadow: 0 1px 4px rgba(0,0,0,0.7);
}
.back-fact-divider { grid-column: 1/-1; height: 1px; background: rgba(255,255,255,0.06); margin: 0.2rem 0; }

.back-footer {
  flex-shrink: 0; display: flex; align-items: center; justify-content: space-between;
  padding-top: 0.5rem; margin-top: 0.3rem; border-top: 1px solid rgba(255,255,255,0.08);
}
.back-footer-set { font-family:'Cinzel',serif; font-size:0.44rem; letter-spacing:2px; text-transform:uppercase; color:rgba(255,255,255,0.2); }
.back-footer-num { font-family:'Cinzel',serif; font-size:0.44rem; letter-spacing:1px; color:rgba(255,255,255,0.2); }
</style>
</head>
<body>

<div class="flip-hint" id="flipHint">Tap card to flip &nbsp;✦</div>

<div class="card-scene" id="cardScene">
  <div class="card-flipper">

    <!-- ══ FRONT FACE ══ -->
    <div class="card-face card-front" id="holoCard">

      <div class="holo-rarity-strip"></div>
      <div class="holo-border"></div>

      <svg class="holo-corner hc-tl" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(255,255,255,0.5)" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M2 2 L9 9" stroke="rgba(255,255,255,0.2)" stroke-width="0.7"/>
        <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.4)"/>
        <circle cx="14" cy="2" r="1.2" fill="rgba(255,255,255,0.25)"/>
        <circle cx="2" cy="14" r="1.2" fill="rgba(255,255,255,0.25)"/>
      </svg>
      <svg class="holo-corner hc-tr" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(255,255,255,0.5)" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M2 2 L9 9" stroke="rgba(255,255,255,0.2)" stroke-width="0.7"/>
        <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.4)"/>
        <circle cx="14" cy="2" r="1.2" fill="rgba(255,255,255,0.25)"/>
        <circle cx="2" cy="14" r="1.2" fill="rgba(255,255,255,0.25)"/>
      </svg>
      <svg class="holo-corner hc-bl" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(255,255,255,0.5)" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.4)"/>
      </svg>
      <svg class="holo-corner hc-br" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(255,255,255,0.5)" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="2" cy="2" r="2" fill="rgba(255,255,255,0.4)"/>
      </svg>

      <img class="holo-portrait" src="data:image/jpeg;base64,${imgBase64}" alt="${card.saintName}">
      <div class="holo-darken"></div>
      <div class="holo-rainbow"></div>
      <div class="holo-rainbow-2"></div>
      <div class="holo-foil"></div>
      <div class="holo-specular"></div>

      <div class="holo-content">
        <div class="holo-name-row">
          <div class="holo-saint-name">${card.saintName}</div>
          <div class="holo-badge">${card.badge}</div>
        </div>
        <div class="holo-divider"></div>
        <div class="holo-info-grid">
          <span class="holo-label">Feast</span><span class="holo-value">${card.feast}</span>
          <span class="holo-label">Patron</span><span class="holo-value">${card.patron}</span>
        </div>
        <div class="holo-bio">${card.bio}</div>
        <div class="holo-footer">
          <span class="holo-set">CRUX · Saints · Series I</span>
          <span class="holo-num">${card.setNum}</span>
        </div>
      </div>
    </div>

    <!-- ══ BACK FACE ══ -->
    <div class="card-face card-back">
      <div class="back-strip"></div>
      <div class="back-border"></div>
      <div class="back-foil"></div>
      <div class="back-vignette"></div>

      <!-- CRUX watermark crest -->
      <div class="back-crest">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="5" x2="50" y2="95" stroke="white" stroke-width="3"/>
          <line x1="5" y1="35" x2="95" y2="35" stroke="white" stroke-width="3"/>
          <circle cx="50" cy="50" r="44" stroke="white" stroke-width="1.5" stroke-dasharray="4 6"/>
          <circle cx="50" cy="50" r="30" stroke="white" stroke-width="0.8"/>
          <text x="50" y="78" text-anchor="middle" font-family="serif" font-size="10" fill="white" letter-spacing="4">CRUX</text>
        </svg>
      </div>

      <div class="back-content">
        <div class="back-header">
          <div class="back-saint-name">${card.backName}</div>
          <div class="back-dates">${card.backDates}</div>
        </div>

        <div class="back-ornament">
          <div class="back-ornament-line"></div>
          <div class="back-ornament-cross">✦ ✦ ✦</div>
          <div class="back-ornament-line"></div>
        </div>

        <div class="back-tabs">
          <div class="back-tab active" data-panel="prayer">Prayer</div>
          <div class="back-tab" data-panel="bio">Biography</div>
          <div class="back-tab" data-panel="facts">Details</div>
        </div>

        <div class="back-panel active" id="panel-prayer">
          <div class="back-prayer-label">${prayerLabel}</div>
${prayerHTML}
          <div class="back-prayer-text" style="font-style:italic; color:rgba(200,150,255,0.7); font-size:0.76rem;">Amen.</div>
        </div>

        <div class="back-panel" id="panel-bio">
${bioHTML}
        </div>

        <div class="back-panel" id="panel-facts">
${factsHTML}
        </div>

        <div class="back-footer">
          <span class="back-footer-set">CRUX · Saints · Series I</span>
          <span class="back-footer-num">${card.setNum}</span>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
const scene = document.getElementById('cardScene');
const hint  = document.getElementById('flipHint');
let isFlipped = false;

const flipper = scene.querySelector('.card-flipper');

scene.addEventListener('click', () => {
  isFlipped = !isFlipped;
  flipper.style.transform = '';
  scene.classList.toggle('flipped', isFlipped);
  hint.textContent = isFlipped ? 'Tap to flip back  ✦' : 'Tap card to flip  ✦';
});

document.querySelectorAll('.back-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.stopPropagation();
    const target = tab.dataset.panel;
    document.querySelectorAll('.back-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.back-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + target).classList.add('active');
  });
});

const card = document.getElementById('holoCard');
const rainbow  = card.querySelector('.holo-rainbow');
const rainbow2 = card.querySelector('.holo-rainbow-2');
const specular = card.querySelector('.holo-specular');

scene.addEventListener('mousemove', (e) => {
  if (isFlipped) return;
  const rect = card.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top)  / rect.height;
  if (x < 0 || x > 1 || y < 0 || y > 1) return;

  const rotX = (y - 0.5) * -22;
  const rotY = (x - 0.5) *  22;
  flipper.style.transform = 'rotateX(' + rotX + 'deg) rotateY(' + rotY + 'deg)';

  const rx = (x - 0.5) * 60;
  const ry = (y - 0.5) * 60;
  rainbow.style.transform  = 'translateX(' + rx + '%) translateY(' + ry + '%) rotate(0deg)';
  rainbow2.style.transform = 'translateX(' + (-rx * 0.7) + '%) translateY(' + (-ry * 0.7) + '%)';
  const sx = Math.round(x * 100);
  const sy = Math.round(y * 100);
  specular.style.background = 'radial-gradient(ellipse 55% 35% at ' + sx + '% ' + sy + '%, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)';
});

scene.addEventListener('mouseleave', () => {
  if (!isFlipped) {
    flipper.style.transform = '';
  }
  rainbow.style.transform  = '';
  rainbow2.style.transform = '';
  specular.style.background = '';
});
</script>

</body>
</html>`;
}

for (const card of cards) {
  console.log('Building ' + card.slug + '...');
  const imgBase64 = toBase64(card.imgFile);
  const html = buildHTML(card, imgBase64);
  const outPath = path.join(OUT_DIR, 'crux-' + card.slug + '-flip.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('  -> ' + outPath + ' (' + Math.round(html.length / 1024) + ' KB)');
}

console.log('\nDone.');
