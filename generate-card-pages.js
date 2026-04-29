// Generates individual holographic card pages for each saint
// Run: node generate-card-pages.js
// Output: crux-{saint}-flip.html in the current directory

const fs = require('fs');
const path = require('path');

const GRAYSONS_DIR = '/Users/andrewcross/Documents/CRUX/Saint Cards/Graysons';
const OUT_DIR = __dirname;

function toBase64(filePath) {
  return fs.readFileSync(filePath).toString('base64');
}

// Alpha Pack cards use base64-embedded images (already generated, re-generated here with updated nav)
const ALPHA_CARDS = [
  {
    slug: 'cecilia', navName: 'Cecilia',
    title: 'CRUX — St. Cecilia', saintName: 'St. Cecilia',
    badge: '✦ Uncommon', feast: 'November 22', patron: 'Musicians, composers, singers',
    bio: 'She sang to God in her heart while the organs played around her — music no one else in the room could hear.',
    setNum: '033 / 052', backName: 'Cecilia of Rome', backDates: 'd. c. 230 AD · Rome',
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
    slug: 'david', navName: 'David',
    title: 'CRUX — St. David of Wales', saintName: 'St. David of Wales',
    badge: '✦ Uncommon', feast: 'March 1', patron: 'Wales, poets, the Welsh people',
    bio: '"Be joyful. Keep the faith. Do the little things." — His last words became a nation\'s motto.',
    setNum: '034 / 052', backName: 'David of Wales', backDates: 'c. 500–589 AD · Menevia, Wales',
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
    slug: 'clare', navName: 'Clare',
    title: 'CRUX — St. Clare of Assisi', saintName: 'St. Clare of Assisi',
    badge: '✦ Uncommon', feast: 'August 11', patron: 'Television, the Poor Clares',
    bio: 'She stood at the gate holding nothing but the Eucharist — and the soldiers fled.',
    setNum: '035 / 052', backName: 'Clare of Assisi', backDates: '1194–1253 AD · Assisi, Italy',
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
    slug: 'bernadette', navName: 'Bernadette',
    title: 'CRUX — St. Bernadette', saintName: 'St. Bernadette',
    badge: '✦ Uncommon', feast: 'April 16', patron: 'Lourdes, the sick, those who doubt',
    bio: 'She dug in the mud for a spring that wasn\'t there yet. It has not stopped flowing since.',
    setNum: '036 / 052', backName: 'Bernadette Soubirous', backDates: '1844–1879 AD · Lourdes, France',
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
    slug: 'bvm', navName: 'Mary',
    title: 'CRUX — Blessed Virgin Mary', saintName: 'Blessed Virgin Mary',
    badge: '✦ Rare', feast: 'January 1 (Solemnity)', patron: 'All of humanity, the Church',
    bio: '"Do whatever he tells you." The last recorded words of Mary in Scripture — and perhaps the most important.',
    setNum: '001 / 052', backName: 'Mary, Mother of God', backDates: 'c. 18 BC – c. 40 AD · Nazareth',
    prayer: [
      'O Blessed Virgin Mary, Mother of God and our Mother, you who said yes to the impossible with complete trust — intercede for all who face what they cannot carry alone.',
      'Teach us your fiat: the surrender that does not know the cost but trusts the Giver. Pray for your children in every hour of need, and bring us always to your Son.',
    ],
    bioParagraphs: [
      'Mary of Nazareth was chosen from eternity to be the Mother of God — Theotokos, the God-bearer. Her yes to the angel Gabriel at the Annunciation set salvation history in motion. She bore the Word made flesh, watched him grow, and stood at the foot of his cross when all others fled.',
      'The Church has venerated Mary across every tradition and century, recognizing in her the fullest human cooperation with grace. Her apparitions — at Guadalupe, Lourdes, Fatima, and elsewhere — continue to call the world to prayer, penance, and peace. She is the New Eve, the Ark of the New Covenant, the Queen of Heaven.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Our Lady · Theotokos · Queen of Heaven · New Eve' },
      { label: 'Key Text',    value: 'Luke 1:26–56 · John 2:1–11 · John 19:25–27' },
      { label: 'Patron of',   value: 'All of humanity · The Church · Many nations' },
      { label: 'Symbols',     value: 'Blue mantle · White lily · Crescent moon · Crown of stars' },
      { label: 'Apparitions', value: 'Guadalupe · Lourdes · Fatima · Knock · Akita' },
    ],
    imgFile: '/Users/andrewcross/Documents/CRUX/Saint Cards/LEGENDARY/MaryGuadalupe001.jpg',
  },
];

// New cards use external image files in images/saints/{slug}.jpg
const NEW_CARDS = [
  {
    slug: 'peter', navName: 'Peter',
    title: 'CRUX — St. Peter', saintName: 'St. Peter',
    badge: '✦✦✦ Legendary', feast: 'June 29', patron: 'Fishermen, the papacy, Rome',
    bio: 'Jesus gave him a new name — Rock — and built His Church upon him.',
    setNum: '002 / 052', backName: 'Simon Peter', backDates: 'd. c. 64–68 AD · Rome',
    prayer: [
      'O St. Peter, Prince of the Apostles, you who confessed Christ as the Son of the Living God and were given the keys of the Kingdom — intercede for all who lead the Church, for those who struggle with failure, and for all who love Christ imperfectly but return to Him again and again.',
      'Remind us that the Rock of the Church was a man who denied his Lord three times and still received a threefold commission: Feed my sheep. Pray for those who lead and for those who follow, that both may keep their eyes on Christ across every storm.',
    ],
    bioParagraphs: [
      'Simon was a Galilean fisherman when Jesus called him from his nets with two words: Follow me. Jesus named him Cephas — Rock — and promised to build His Church on that foundation. Peter became the leader of the Twelve, the first to confess Christ as the Son of God, and the first to witness the empty tomb.',
      'Peter denied Jesus three times in the hours before the Crucifixion. After the Resurrection, Jesus asked him three times, "Do you love me?" — restoring him with the threefold commission to tend His flock. Peter preached at Pentecost, led the early Church in Jerusalem, and was eventually crucified upside-down in Rome, unwilling to die in the same posture as his Lord.',
    ],
    facts: [
      { label: 'Also Known', value: 'Cephas · Simon Bar-Jonah · Prince of Apostles' },
      { label: 'Key Text',   value: 'Matt 16:13–19 · John 21:15–19 · Acts 2' },
      { label: 'Patron of',  value: 'Popes · Fishermen · Rome · Net-makers' },
      { label: 'Symbols',    value: 'Two crossed keys · Rooster · Inverted cross' },
      { label: 'Martyrdom',  value: 'Crucified upside-down, c. 64–68 AD · Rome' },
    ],
  },
  {
    slug: 'paul', navName: 'Paul',
    title: 'CRUX — St. Paul', saintName: 'St. Paul',
    badge: '✦✦✦ Legendary', feast: 'June 29', patron: 'Missionaries, theologians, publishers',
    bio: 'He persecuted Christians with zeal — then met the Risen Christ on the road and never looked back.',
    setNum: '003 / 052', backName: 'Paul of Tarsus', backDates: 'c. 5–67 AD · Tarsus / Rome',
    prayer: [
      'O St. Paul, Apostle to the Gentiles, you who were knocked to the ground by the light of Christ and rose up to set the world ablaze — intercede for all missionaries, for all who have turned from darkness to light, and for all who carry the Gospel into places where it has never been heard.',
      'Teach us to know Christ and Him crucified. Help us count all else as loss for the surpassing worth of knowing Him. Give us your courage to preach in season and out of season, and to finish the race with faith.',
    ],
    bioParagraphs: [
      'Saul of Tarsus was a Pharisee and zealous persecutor of Christians. On the road to Damascus, he was struck blind by a blinding light and heard the voice of the Risen Christ: "Saul, why do you persecute me?" He was baptized, renamed Paul, and began one of history\'s most extraordinary missionary careers.',
      'Paul traveled across the Mediterranean world — Turkey, Greece, Rome — planting churches, writing letters that became the core of the New Testament, and enduring shipwreck, beating, imprisonment, and stoning. His letters to the Romans, Corinthians, Galatians, and others contain the deepest theological reflection in all of Scripture. He was beheaded in Rome under Nero.',
    ],
    facts: [
      { label: 'Also Known', value: 'Saul of Tarsus · Apostle to the Gentiles' },
      { label: 'Key Text',   value: 'Romans · Galatians · 1 Corinthians · Acts 9' },
      { label: 'Patron of',  value: 'Missionaries · Theologians · Publishers · Tent-makers' },
      { label: 'Symbols',    value: 'Sword · Book · Serpent · Rays of light' },
      { label: 'Martyrdom',  value: 'Beheaded, c. 67 AD · Rome under Nero' },
    ],
  },
  {
    slug: 'andrew', navName: 'Andrew',
    title: 'CRUX — St. Andrew', saintName: 'St. Andrew',
    badge: '✦✦✦ Legendary', feast: 'November 30', patron: 'Scotland, fishermen, Ukraine',
    bio: 'The first called — he immediately brought his brother Peter to Jesus.',
    setNum: '004 / 052', backName: 'Andrew the Apostle', backDates: 'd. c. 60 AD · Patras, Greece',
    prayer: [
      'O St. Andrew, first of the Apostles to be called, you who heard "Come and see" and stayed — and then went immediately to bring your brother — intercede for all who hear Christ\'s invitation and for all who lead others to Him.',
      'Teach us the grace of immediacy: to follow without delay, to share what we have found without embarrassment, and to trust that Christ can do great things with very small offerings. Pray for Scotland, Ukraine, and all who sail on uncertain seas.',
    ],
    bioParagraphs: [
      'Andrew was a fisherman from Bethsaida and a disciple of John the Baptist before he became one of the first Apostles. When Jesus called him on the shore of the Sea of Galilee, Andrew immediately left his nets — and then ran to find his brother Simon Peter: "We have found the Messiah." His first act as a disciple was to bring someone else.',
      'Andrew was present at the feeding of the five thousand, noting the boy\'s loaves and fish. He preached across Greece, Turkey, and possibly Russia after Pentecost. He was crucified in Patras on a diagonal cross (now called the Saltire) and reportedly preached from the cross for two days, unwilling to ask to be taken down. He is patron of Scotland, Russia, Ukraine, and Greece.',
    ],
    facts: [
      { label: 'Also Known', value: 'Andrew Protocletus — "First-Called"' },
      { label: 'Key Text',   value: 'John 1:35–42 · John 6:8–9 · Acts 1' },
      { label: 'Patron of',  value: 'Scotland · Ukraine · Russia · Greece · Fishermen' },
      { label: 'Symbols',    value: 'X-shaped (Saltire) cross · Fish · Net' },
      { label: 'Martyrdom',  value: 'Crucified on X-cross, c. 60 AD · Patras, Greece' },
    ],
  },
  {
    slug: 'philip', navName: 'Philip',
    title: 'CRUX — St. Philip', saintName: 'St. Philip',
    badge: '✦✦✦ Legendary', feast: 'May 3', patron: 'Uruguay, pastry chefs, hatmakers',
    bio: '"Lord, show us the Father and it is enough for us." Philip asked the question every soul asks.',
    setNum: '005 / 052', backName: 'Philip the Apostle', backDates: 'd. c. 80 AD · Hierapolis, Phrygia',
    prayer: [
      'O St. Philip, you who asked the question burning in every human heart — "Show us the Father" — and received the answer that defines Christianity: "Whoever has seen me has seen the Father" — intercede for all who seek God and all who doubt.',
      'Help us understand that to know Christ is to know the Father. Give us the courage to ask our honest questions and the faith to recognize the answer when it comes. Pray for all who teach the faith and for all who are still searching.',
    ],
    bioParagraphs: [
      'Philip was from Bethsaida, the same town as Peter and Andrew. When Jesus called him, Philip immediately found Nathanael (Bartholomew) and invited him: "Come and see." He appears at key moments in the Gospel — asking Jesus how to feed five thousand people, bringing Greek pilgrims to Jesus, and asking Him to "show us the Father."',
      'Christ\'s answer — "Have I been with you so long and you still do not know me, Philip? Whoever has seen me has seen the Father" — became one of the central Christological statements in the Gospels. Philip preached in Greece, Syria, and Phrygia after Pentecost. He was martyred at Hierapolis around 80 AD.',
    ],
    facts: [
      { label: 'Also Known', value: 'Philip of Bethsaida' },
      { label: 'Key Text',   value: 'John 1:43–46 · John 6:5–7 · John 14:8–11' },
      { label: 'Patron of',  value: 'Uruguay · Luxembourg · Pastry chefs · Hatmakers' },
      { label: 'Symbols',    value: 'Cross · Loaves of bread · Spear · Book' },
      { label: 'Martyrdom',  value: 'c. 80 AD · Hierapolis, Phrygia (modern Turkey)' },
    ],
  },
  {
    slug: 'bartholomew', navName: 'Bartholomew',
    title: 'CRUX — St. Bartholomew', saintName: 'St. Bartholomew',
    badge: '✦✦✦ Legendary', feast: 'August 24', patron: 'Armenia, tanners, leather workers',
    bio: '"In him there is no guile." Jesus saw Nathanael coming and named his soul before he could speak.',
    setNum: '006 / 052', backName: 'Bartholomew (Nathanael)', backDates: 'd. c. 71 AD · Armenia',
    prayer: [
      'O St. Bartholomew, Apostle who was seen and known before you saw — you in whom there was no guile — intercede for all who feel unseen, and for all who fear that if God truly knew them, He could not love them.',
      'Remind us that Christ knows us before we speak, loves us before we deserve it, and calls us by name. Pray for Armenia, the first Christian nation, to whom you first brought the Gospel, and for all who carry the faith into the hardest places.',
    ],
    bioParagraphs: [
      'Bartholomew is most likely the Nathanael of the Gospel of John — the man Philip brought to Jesus with the words "We have found the one Moses wrote about." Nathanael was skeptical: "Can anything good come from Nazareth?" Philip answered simply: "Come and see." When Jesus said, "Here is a true Israelite in whom there is no deceit," Nathanael was undone.',
      'After Pentecost, Bartholomew preached in India, Armenia, Ethiopia, and Mesopotamia. Armenia became the first Christian nation in 301 AD — a transformation attributed in part to his mission. He was martyred in Armenia, flayed alive and then beheaded or crucified. He is depicted in Michelangelo\'s Last Judgment holding his own skin.',
    ],
    facts: [
      { label: 'Also Known', value: 'Nathanael · Bartholomew of Cana' },
      { label: 'Key Text',   value: 'John 1:45–51 · Matt 10:3 · Acts 1:13' },
      { label: 'Patron of',  value: 'Armenia · Tanners · Leather workers · Bookbinders' },
      { label: 'Symbols',    value: 'Flaying knife · His own skin · Book' },
      { label: 'Martyrdom',  value: 'Flayed alive, c. 71 AD · Albanopolis, Armenia' },
    ],
  },
  {
    slug: 'matthew', navName: 'Matthew',
    title: 'CRUX — St. Matthew', saintName: 'St. Matthew',
    badge: '✦✦✦ Legendary', feast: 'September 21', patron: 'Tax collectors, accountants, bankers',
    bio: 'He sat at the most despised seat in town. Jesus walked by and said two words: Follow me.',
    setNum: '007 / 052', backName: 'Matthew Levi', backDates: 'd. c. 74 AD · Ethiopia or Persia',
    prayer: [
      'O St. Matthew, you who were called from the most unlikely place — not from a synagogue or the Temple but from a tax booth — intercede for all who think themselves too sinful, too compromised, or too far outside for Christ to call.',
      'Remind us that the call of Christ transforms what it touches. You left everything to follow, and the world received the Gospel. Pray for all who feel disqualified from grace, and for all who keep financial accounts with integrity.',
    ],
    bioParagraphs: [
      'Matthew was a tax collector in Capernaum — a position that made him rich, despised, and ceremonially unclean in the eyes of his neighbors. Tax collectors collaborated with Rome and were known to pocket extra above the required amount. When Jesus saw Matthew at his booth and said, "Follow me," Matthew got up and left everything — then threw a banquet so his outcast friends could meet Jesus.',
      'When the Pharisees complained that Jesus ate with sinners, He replied: "I have not come to call the righteous but sinners." Matthew became one of the Twelve and wrote the first Gospel, emphasizing Jesus as the fulfillment of the Jewish Scriptures. He preached in Judea, then in Ethiopia or Persia, where he was martyred.',
    ],
    facts: [
      { label: 'Also Known', value: 'Levi · Matthew the Evangelist' },
      { label: 'Key Text',   value: 'Matt 9:9–13 · Gospel of Matthew' },
      { label: 'Patron of',  value: 'Tax collectors · Accountants · Bankers · Bookkeepers' },
      { label: 'Symbols',    value: 'Winged man · Book · Sword · Money bag' },
      { label: 'Martyrdom',  value: 'c. 74 AD · Ethiopia or Persia' },
    ],
  },
  {
    slug: 'james-greater', navName: 'James',
    title: 'CRUX — St. James the Greater', saintName: 'St. James the Greater',
    badge: '✦✦✦ Legendary', feast: 'July 25', patron: 'Spain, pilgrims, laborers',
    bio: 'The first Apostle martyred. He and his brother were called Sons of Thunder — now the world walks to him.',
    setNum: '008 / 052', backName: 'James, Son of Zebedee', backDates: 'd. 44 AD · Jerusalem',
    prayer: [
      'O St. James, first of the Apostles to drink the cup of martyrdom, you who were among the inner circle who witnessed the Transfiguration — intercede for pilgrims and all who walk long roads toward God.',
      'Pray for Spain and for all who make the Camino to your shrine in Santiago de Compostela. Help us understand that the journey itself is the formation, and that arriving changed is the point. Give us holy boldness and the courage to drink whatever cup Christ offers.',
    ],
    bioParagraphs: [
      'James, son of Zebedee and brother of John, was a Galilean fisherman who left everything when Jesus called. He and John were nicknamed "Boanerges" — Sons of Thunder — for their fierce temperaments. James was part of the inner circle who witnessed the Transfiguration and accompanied Jesus in Gethsemane the night before His death.',
      'James was the first of the Twelve to be martyred, beheaded by King Herod Agrippa I around 44 AD. According to tradition, his body was miraculously transported to northwest Spain, where the great shrine of Santiago de Compostela was built over his relics. For a thousand years, pilgrims from across Europe have walked the Camino de Santiago to venerate him.',
    ],
    facts: [
      { label: 'Also Known', value: 'James Major · Son of Thunder · Santiago' },
      { label: 'Key Text',   value: 'Mark 1:19–20 · Mark 3:17 · Acts 12:1–2' },
      { label: 'Patron of',  value: 'Spain · Pilgrims · Laborers · Knights' },
      { label: 'Symbols',    value: 'Pilgrim\'s staff · Scallop shell · Sword' },
      { label: 'Martyrdom',  value: 'Beheaded, c. 44 AD · Jerusalem by Herod Agrippa' },
    ],
  },
  {
    slug: 'james-less', navName: 'James the Less',
    title: 'CRUX — St. James the Less', saintName: 'St. James the Less',
    badge: '✦✦✦ Legendary', feast: 'May 3', patron: 'Fullers, dying people, pharmacists',
    bio: '"Faith without works is dead." — He governed the first Church and wrote the words that still sting.',
    setNum: '009 / 052', backName: 'James of Jerusalem', backDates: 'd. c. 62 AD · Jerusalem',
    prayer: [
      'O St. James, bishop of Jerusalem, guardian of the first Church and kinsman of Christ — you who presided over the Council of Jerusalem and wrote the most practical letter in the New Testament — intercede for all pastors who must hold communities together across conflict.',
      'Help us live faith that works: not a feeling or a doctrine alone, but a way of life that cares for orphans and widows, that controls the tongue, and that shows mercy without partiality. Pray for all who are dying, and for all who keep the faith without applause.',
    ],
    bioParagraphs: [
      'James the Less — distinguished from James, son of Zebedee, by his smaller stature or later call — was a kinsman of Jesus and became the first bishop of Jerusalem after the Resurrection. He is the author of the Letter of James, which opens: "Consider it pure joy whenever you face trials." His letter is the most practical ethical document in the New Testament.',
      'He was known for spending so much time in prayer that his knees became like a camel\'s. He presided over the Jerusalem Council (Acts 15), which determined that Gentile converts did not need circumcision. He was martyred around 62 AD — thrown from the pinnacle of the Temple, then stoned and clubbed, reportedly still praying for his killers as he died.',
    ],
    facts: [
      { label: 'Also Known', value: 'James Minor · Bishop of Jerusalem · "Camel Knees"' },
      { label: 'Key Text',   value: 'Letter of James · Acts 15 · Galatians 1:19' },
      { label: 'Patron of',  value: 'Fullers · Pharmacists · Dying people · Jerusalem' },
      { label: 'Symbols',    value: 'Fuller\'s club · Book · Temple · Saw' },
      { label: 'Martyrdom',  value: 'Stoned, c. 62 AD · Jerusalem, at the Temple' },
    ],
  },
  {
    slug: 'simon-zealot', navName: 'Simon',
    title: 'CRUX — St. Simon the Zealot', saintName: 'St. Simon the Zealot',
    badge: '✦✦✦ Legendary', feast: 'October 28', patron: 'Sawyers, tanners, glassworkers',
    bio: 'His epithet followed him everywhere — a fire that was never put out, only redirected toward the Kingdom.',
    setNum: '010 / 052', backName: 'Simon the Zealot', backDates: 'd. c. 65 AD · Persia or Armenia',
    prayer: [
      'O St. Simon, called the Zealot — you whose passion for God was so fierce it became your name — intercede for all who burn with love for justice and truth, and help us direct that fire toward Christ and not against one another.',
      'Teach us that zeal becomes holy when it is laid at the feet of Jesus. Pray for all who carry a fire within them that the world does not understand, and help us spend it in service to the Gospel rather than our own agendas.',
    ],
    bioParagraphs: [
      'Simon the Zealot is one of the most mysterious of the Twelve. His epithet suggests he may have belonged to the Zealot movement — Jewish nationalists who opposed Roman occupation by any means necessary. That Jesus chose both Simon the Zealot and Matthew the tax collector (a Roman collaborator) for the same inner circle is a sign of the Kingdom\'s strange logic.',
      'Simon appears only in the lists of the Twelve — his name, and then silence. He is said to have traveled to Egypt, Persia, and Armenia with Jude Thaddaeus. The two are often depicted together, and their feast is shared on October 28. He was martyred in Persia, possibly by being sawn in half — the saw is his symbol.',
    ],
    facts: [
      { label: 'Also Known', value: 'Simon Kananaios · Simon Zelotes' },
      { label: 'Key Text',   value: 'Matt 10:4 · Mark 3:18 · Luke 6:15 · Acts 1:13' },
      { label: 'Patron of',  value: 'Sawyers · Tanners · Glassworkers · Curriers' },
      { label: 'Symbols',    value: 'Saw · Book · Fish · Oar' },
      { label: 'Martyrdom',  value: 'c. 65 AD · Persia, possibly with Jude Thaddaeus' },
    ],
  },
  {
    slug: 'jude', navName: 'Jude',
    title: 'CRUX — St. Jude Thaddaeus', saintName: 'St. Jude Thaddaeus',
    badge: '✦✦✦ Legendary', feast: 'October 28', patron: 'Desperate causes, hospitals, lost causes',
    bio: 'The Apostle the world forgot. The one they call on when everything else has failed.',
    setNum: '011 / 052', backName: 'Jude Thaddaeus', backDates: 'd. c. 65 AD · Persia',
    prayer: [
      'O St. Jude, Apostle and patron of desperate cases, you whose very name was avoided by early Christians lest they be confused with the traitor — intercede for all who have no one else to call, for all who have been waiting so long for a miracle that hope itself has grown thin.',
      'You are the patron of impossible causes not because God specializes in the desperate, but because no situation is beyond His reach. Pray for all who come to you as a last resort, that they may find not just relief but faith. Hear us.',
    ],
    bioParagraphs: [
      'Jude Thaddaeus — distinguished from Judas Iscariot by the name Thaddaeus — was an Apostle of whom the Gospels say almost nothing. He appears only in the lists of the Twelve and once in John, where he asks Jesus: "Lord, why do you intend to show yourself to us and not to the world?" His obscurity became the source of his patronage: because his name was avoided, invocations to Jude were truly a last resort.',
      'Jude wrote the short Letter of Jude — a fierce warning against false teachers who "pervert the grace of God into a license for immorality." He is traditionally linked with Simon the Zealot and is said to have preached and been martyred with him in Persia around 65 AD. His relics are venerated in St. Peter\'s Basilica. Millions pray novenas to him each year.',
    ],
    facts: [
      { label: 'Also Known', value: 'Thaddaeus · Lebbaeus · "The Forgotten Apostle"' },
      { label: 'Key Text',   value: 'Letter of Jude · John 14:22 · Luke 6:16' },
      { label: 'Patron of',  value: 'Desperate causes · Lost causes · Hospitals · Armenians' },
      { label: 'Symbols',    value: 'Axe · Club · Flame above head · Image of Christ' },
      { label: 'Martyrdom',  value: 'c. 65 AD · Persia, with Simon the Zealot' },
    ],
  },
  {
    slug: 'john-apostle', navName: 'John',
    title: 'CRUX — St. John the Apostle', saintName: 'St. John the Apostle',
    badge: '✦✦✦ Legendary', feast: 'December 27', patron: 'Love, theologians, authors',
    bio: '"Beloved disciple." He was the only Apostle who did not flee — and the only one who did not die a martyr.',
    setNum: '014 / 052', backName: 'John, Son of Zebedee', backDates: 'c. 6–100 AD · Ephesus',
    prayer: [
      'O St. John the Apostle, Beloved Disciple, you who rested your head on the heart of Christ at the Last Supper and received His Mother at the foot of the Cross — intercede for all who seek to love as Christ loves, and for all theologians who dare to speak of God.',
      'Teach us your one commandment — the commandment Jesus said was new: that we love one another as He has loved us. Help us remain in that love when it costs something, and to find in it the whole of the Gospel. Pray for all who read your words and all who are still learning what love means.',
    ],
    bioParagraphs: [
      'John, son of Zebedee and brother of James, was a Galilean fisherman whom Jesus called from his boat. He and James were nicknamed "Sons of Thunder." John became part of the inner circle — with Peter and James — present at the Transfiguration, in Gethsemane, and at the empty tomb. He is the only Apostle confirmed to have been present at the Crucifixion, where Jesus entrusted His mother to his care.',
      'John outlived all the other Apostles, dying of old age in Ephesus around 100 AD — the only one not martyred, though he survived being thrown into boiling oil under Domitian. He wrote the Gospel of John, three letters, and the Book of Revelation. His Gospel opens with the most theologically dense sentence in Scripture: "In the beginning was the Word, and the Word was with God, and the Word was God."',
    ],
    facts: [
      { label: 'Also Known', value: 'Beloved Disciple · John the Evangelist · Son of Thunder' },
      { label: 'Key Text',   value: 'Gospel of John · 1–3 John · Revelation' },
      { label: 'Patron of',  value: 'Love · Theologians · Authors · Publishers · Friendships' },
      { label: 'Symbols',    value: 'Eagle · Chalice with serpent · Book · Palm' },
      { label: 'Death',      value: 'Natural death, c. 100 AD · Ephesus — only Apostle not martyred' },
    ],
  },
  {
    slug: 'augustine', navName: 'Augustine',
    title: 'CRUX — St. Augustine of Hippo', saintName: 'St. Augustine of Hippo',
    badge: '✦✦ Rare', feast: 'August 28', patron: 'Theologians, brewers, those with bad habits',
    bio: '"Our heart is restless until it rests in Thee." — Written after years of running the other way.',
    setNum: '015 / 052', backName: 'Augustine of Hippo', backDates: '354–430 AD · Hippo Regius, North Africa',
    prayer: [
      'O St. Augustine, Doctor of Grace, you who lived fully in the world before you lived fully for God — and who wrote of both with unflinching honesty — intercede for all who know the truth but cannot yet live it, and for all who run from grace because they fear what it will cost them.',
      '"Late have I loved Thee, O Beauty ever ancient, ever new." Let that cry become ours. Pray for theologians and teachers, for all who wrestle with faith and desire, and for all who stand at the edge of conversion still holding back. Help us take the last step.',
    ],
    bioParagraphs: [
      'Augustine of Hippo was born in North Africa in 354. Brilliant, restless, and driven by desire, he spent his young adulthood pursuing pleasure, prestige, and various philosophies — including nine years in the Manichaean sect. His mother Monica prayed for his conversion for seventeen years without ceasing. In 386, sitting in a garden in Milan, he heard a child\'s voice: "Take and read." He opened Paul\'s letter to the Romans and was converted.',
      'Augustine became Bishop of Hippo in 396 and spent the next thirty-four years writing theology that would shape all of Western Christianity. His Confessions — the first spiritual autobiography in history — is still read today. His works on grace, free will, original sin, and the Trinity defined the categories of Christian thought for a millennium. He died in 430 as Vandals besieged his city.',
    ],
    facts: [
      { label: 'Also Known', value: 'Doctor of Grace · Augustine of Thagaste' },
      { label: 'Key Text',   value: 'Confessions · City of God · On the Trinity' },
      { label: 'Patron of',  value: 'Theologians · Brewers · Printers · Those with bad habits' },
      { label: 'Symbols',    value: 'Heart on fire · Book · Bishop\'s mitre · Quill' },
      { label: 'Doctor',     value: 'Doctor of the Church · Order of St. Augustine' },
    ],
  },
  {
    slug: 'aquinas', navName: 'Aquinas',
    title: 'CRUX — St. Thomas Aquinas', saintName: 'St. Thomas Aquinas',
    badge: '✦✦ Rare', feast: 'January 28', patron: 'Students, universities, theologians',
    bio: '"The Dumb Ox." His classmates mocked him. He became the greatest theologian in Catholic history.',
    setNum: '016 / 052', backName: 'Thomas Aquinas', backDates: '1225–1274 AD · Roccasecca, Italy',
    prayer: [
      'O St. Thomas Aquinas, Angelic Doctor, you who showed the world that faith and reason are not enemies but partners — intercede for all students, all teachers, and all who use their minds in service to God.',
      '"Grant me, O Lord my God, a mind to know You, a heart to seek You, wisdom to find You." Make that your prayer for us. Help us think carefully and love deeply, and give us the humility to know that all learning is a participation in Your knowing.',
    ],
    bioParagraphs: [
      'Thomas Aquinas was born to a noble Italian family who intended him for a prestigious Benedictine monastery. Instead he joined the radical new Dominican friars. His family kidnapped him and held him captive for a year to break his resolve. He outlasted them. At the University of Paris, his bulk and quietness earned him the nickname "Dumb Ox." His teacher Albert the Great said: "This ox will one day bellow so loud his voice will fill the world."',
      'Aquinas spent his life synthesizing Christian faith with Aristotelian philosophy in his massive Summa Theologiae — one of the most influential books in history. He wrote the hymns Tantum Ergo and Pange Lingua for the feast of Corpus Christi. Near the end of his life, after a mystical experience during Mass, he said: "All that I have written seems to me like straw compared to what I have seen." He died at 49.',
    ],
    facts: [
      { label: 'Also Known', value: 'Angelic Doctor · Dumb Ox · "The Common Doctor"' },
      { label: 'Key Text',   value: 'Summa Theologiae · Summa Contra Gentiles' },
      { label: 'Patron of',  value: 'Students · Universities · Theologians · Pencil-makers' },
      { label: 'Symbols',    value: 'Star on chest · Chalice · Book · Ox' },
      { label: 'Doctor',     value: 'Doctor of the Church · Dominican Order' },
    ],
  },
  {
    slug: 'teresa-avila', navName: 'Teresa',
    title: 'CRUX — St. Teresa of Ávila', saintName: 'St. Teresa of Ávila',
    badge: '✦✦ Rare', feast: 'October 15', patron: 'Spain, chess players, headache sufferers',
    bio: '"Let nothing disturb you. Let nothing frighten you. All things pass. God never changes." She lived it.',
    setNum: '017 / 052', backName: 'Teresa of Jesus', backDates: '1515–1582 AD · Ávila, Spain',
    prayer: [
      'O St. Teresa of Ávila, Doctor of the Church, you who mapped the interior life in The Interior Castle and who called prayer "an intimate friendship, a frequent heart-to-heart conversation with One who we know loves us" — intercede for all who pray without result, for all who are dry in their spiritual lives.',
      '"Nada te turbe, nada te espante." Let nothing disturb us. Let nothing frighten us. Teach us your confidence not in our own steadiness but in God\'s. Reform our prayer, reform our lives, and help us begin again every day with the same trust you carried.',
    ],
    bioParagraphs: [
      'Teresa de Ahumada entered a Carmelite convent at twenty-one and spent the next twenty years in spiritual mediocrity — neither fully committed to God nor fully to the world. Then, at forty, she underwent a profound second conversion, began experiencing intense mystical states, and heard God say: "I want you to converse now not with men but with angels." She became the most significant female mystic in Catholic history.',
      'Teresa founded seventeen reformed Carmelite convents across Spain in the face of fierce opposition — from the Church, from her own order, from the Inquisition. She traveled by ox-cart across Spain, writing theology from bumping roadside inns. Her Interior Castle, The Way of Perfection, and The Book of Her Life are foundational texts of Christian mysticism. In 1970, she became the first woman Doctor of the Church.',
    ],
    facts: [
      { label: 'Also Known', value: 'Teresa of Jesus · Doctor of Prayer' },
      { label: 'Key Text',   value: 'The Interior Castle · The Way of Perfection · Her Life' },
      { label: 'Patron of',  value: 'Spain · Chess · Headache sufferers · Carmelites' },
      { label: 'Symbols',    value: 'Heart with arrow · Book · Quill · Flaming dove' },
      { label: 'Doctor',     value: 'First female Doctor of the Church (1970)' },
    ],
  },
];

// Full circular nav chain across all cards (including Thomas which is pre-built)
const ALL_CARD_NAV = [
  { slug: 'bvm',          navName: 'Mary' },
  { slug: 'peter',        navName: 'Peter' },
  { slug: 'paul',         navName: 'Paul' },
  { slug: 'andrew',       navName: 'Andrew' },
  { slug: 'philip',       navName: 'Philip' },
  { slug: 'bartholomew',  navName: 'Bartholomew' },
  { slug: 'matthew',      navName: 'Matthew' },
  { slug: 'james-greater',navName: 'James' },
  { slug: 'james-less',   navName: 'James the Less' },
  { slug: 'simon-zealot', navName: 'Simon' },
  { slug: 'jude',         navName: 'Jude' },
  { slug: 'john-apostle', navName: 'John' },
  { slug: 'thomas',       navName: 'Thomas' },
  { slug: 'augustine',    navName: 'Augustine' },
  { slug: 'aquinas',      navName: 'Aquinas' },
  { slug: 'teresa-avila', navName: 'Teresa' },
  { slug: 'cecilia',      navName: 'Cecilia' },
  { slug: 'david',        navName: 'David' },
  { slug: 'clare',        navName: 'Clare' },
  { slug: 'bernadette',   navName: 'Bernadette' },
];

function attachNav(card) {
  const allIdx = ALL_CARD_NAV.findIndex(c => c.slug === card.slug);
  const prev = ALL_CARD_NAV[(allIdx - 1 + ALL_CARD_NAV.length) % ALL_CARD_NAV.length];
  const next = ALL_CARD_NAV[(allIdx + 1) % ALL_CARD_NAV.length];
  card.prevSlug = prev.slug;
  card.prevName = prev.navName;
  card.nextSlug = next.slug;
  card.nextName = next.navName;
}

ALPHA_CARDS.forEach(attachNav);
NEW_CARDS.forEach(attachNav);

function buildHTML(card, imgSrc) {
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

.card-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 0.4rem;
}

.nav-btn {
  font-family: 'Cinzel', serif;
  font-size: 0.5rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  text-decoration: none;
  padding: 0.55rem 0.9rem;
  border-radius: 5px;
  border: 1px solid rgba(212,165,116,0.18);
  color: rgba(212,165,116,0.55);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
}

.nav-btn:hover {
  color: rgba(212,165,116,0.95);
  border-color: rgba(212,165,116,0.4);
  background: rgba(212,165,116,0.06);
}

.nav-btn.nav-home {
  color: rgba(200,150,255,0.55);
  border-color: rgba(200,150,255,0.18);
}

.nav-btn.nav-home:hover {
  color: rgba(200,150,255,0.95);
  border-color: rgba(200,150,255,0.4);
  background: rgba(200,150,255,0.06);
}

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
  -webkit-transform-style: preserve-3d;
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

.card-front {
  cursor: pointer;
  touch-action: manipulation;
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
  padding: 0.55rem 0.9rem 0.6rem; cursor: pointer;
  border-bottom: 2px solid transparent; margin-bottom: -1px;
  transition: color 0.2s, border-color 0.2s; user-select: none;
  min-width: 64px; text-align: center;
  touch-action: manipulation; -webkit-tap-highlight-color: transparent;
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

    <!-- FRONT FACE -->
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

      <img class="holo-portrait" src="${imgSrc}" alt="${card.saintName}">
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

    <!-- BACK FACE -->
    <div class="card-face card-back">
      <div class="back-strip"></div>
      <div class="back-border"></div>
      <div class="back-foil"></div>
      <div class="back-vignette"></div>

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
          <button class="flip-back-btn" style="background:none;border:none;cursor:pointer;font-family:'Cinzel',serif;font-size:0.52rem;letter-spacing:2px;text-transform:uppercase;color:rgba(200,150,255,0.5);padding:0;transition:color 0.2s;" onmouseover="this.style.color='rgba(200,150,255,1)'" onmouseout="this.style.color='rgba(200,150,255,0.5)'">&#x21A9; Flip</button>
          <span class="back-footer-set">CRUX · Saints · Series I</span>
          <span class="back-footer-num">${card.setNum}</span>
        </div>
      </div>
    </div>

  </div>
</div>

<nav class="card-nav">
  <a class="nav-btn" href="crux-${card.prevSlug}-flip.html">&#8592; ${card.prevName}</a>
  <a class="nav-btn nav-home" href="crux-account.html">My Cards</a>
  <a class="nav-btn" href="crux-${card.nextSlug}-flip.html">${card.nextName} &#8594;</a>
</nav>

<script>
const scene     = document.getElementById('cardScene');
const hint      = document.getElementById('flipHint');
const frontFace = document.getElementById('holoCard');
const flipper   = scene.querySelector('.card-flipper');
const backFace  = scene.querySelector('.card-back');
let isFlipped   = false;

const rainbow  = frontFace.querySelector('.holo-rainbow');
const rainbow2 = frontFace.querySelector('.holo-rainbow-2');
const specular = frontFace.querySelector('.holo-specular');

function onTap(element, handler) {
  element.addEventListener('touchend', function(e) {
    e.preventDefault();
    handler(e);
  }, { passive: false });
  element.addEventListener('click', handler);
}

onTap(frontFace, () => {
  isFlipped = true;
  flipper.style.transform = '';
  scene.classList.add('flipped');
  hint.textContent = 'Tap ↩ to flip back';
  frontFace.style.pointerEvents = 'none';
  setTimeout(() => { if (isFlipped) frontFace.style.opacity = '0'; }, 360);
});

onTap(scene.querySelector('.flip-back-btn'), () => {
  isFlipped = false;
  frontFace.style.opacity = '';
  flipper.style.transform = '';
  scene.classList.remove('flipped');
  hint.textContent = 'Tap card to flip  ✦';
  frontFace.style.pointerEvents = 'auto';
  setTimeout(() => { if (!isFlipped) backFace.style.opacity = '0'; }, 360);
  setTimeout(() => { if (!isFlipped) backFace.style.opacity = ''; }, 720);
});

scene.querySelectorAll('.back-tab').forEach(tab => {
  onTap(tab, () => {
    const target = tab.dataset.panel;
    scene.querySelectorAll('.back-tab').forEach(t => t.classList.remove('active'));
    scene.querySelectorAll('.back-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('panel-' + target).classList.add('active');
  });
});

scene.addEventListener('mousemove', (e) => {
  if (isFlipped) return;
  const rect = scene.getBoundingClientRect();
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
  if (!isFlipped) flipper.style.transform = '';
  rainbow.style.transform  = '';
  rainbow2.style.transform = '';
  specular.style.background = '';
});
</script>

</body>
</html>`;
}

// Generate Alpha Pack cards (base64 images, updated nav)
for (const card of ALPHA_CARDS) {
  console.log('Building ' + card.slug + ' (alpha)...');
  const imgSrc = 'data:image/jpeg;base64,' + toBase64(card.imgFile);
  const html = buildHTML(card, imgSrc);
  const outPath = path.join(OUT_DIR, 'crux-' + card.slug + '-flip.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('  -> ' + outPath + ' (' + Math.round(html.length / 1024) + ' KB)');
}

// Generate new cards (external image paths)
for (const card of NEW_CARDS) {
  console.log('Building ' + card.slug + ' (new)...');
  const imgSrc = 'images/saints/' + card.slug + '.jpg';
  const html = buildHTML(card, imgSrc);
  const outPath = path.join(OUT_DIR, 'crux-' + card.slug + '-flip.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('  -> ' + outPath + ' (' + Math.round(html.length / 1024) + ' KB)');
}

console.log('\nDone.');
