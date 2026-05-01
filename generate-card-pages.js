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
];

// New cards use external image files in images/saints/{slug}.jpg
const NEW_CARDS = [
  {
    slug: 'bvm', navName: 'Mary',
    title: 'CRUX — Blessed Virgin Mary', saintName: 'Blessed Virgin Mary',
    badge: '✦✦✦✦ Legendary', feast: 'January 1 (Solemnity)', patron: 'All of humanity, the Church',
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
  },
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
    slug: 'thomas', navName: 'Thomas',
    title: 'CRUX — St. Thomas the Apostle', saintName: 'St. Thomas the Apostle',
    badge: '✦✦✦ Legendary', feast: 'July 3', patron: 'Architects, India, those who doubt',
    bio: '"My Lord and my God." — The moment doubt became the deepest act of faith.',
    setNum: '012 / 052', backName: 'Thomas Didymus', backDates: 'd. c. 72 AD · Mylapore, India',
    prayer: [
      'O St. Thomas the Apostle, you who moved from doubt to the boldest confession of faith in the Gospels — "My Lord and my God" — intercede for all who struggle to believe, for all who need to see before they can trust.',
      'Teach us that honest doubt, brought before the living Christ, becomes the ground of deeper faith. You traveled farther than any other Apostle — all the way to India — carrying the Gospel to the ends of the earth. Pray for missionaries, for those who go where no one else will go, and for all of us in our moments of unbelief.',
    ],
    bioParagraphs: [
      'Thomas, called Didymus — "the Twin" — was one of the Twelve. He is remembered for his honest absence at the first resurrection appearance and his refusal to believe without seeing. When Christ appeared again and invited Thomas to touch His wounds, Thomas\'s doubt collapsed into the most complete confession of faith in the Gospels: "My Lord and my God." Jesus replied: "Blessed are those who have not seen and yet believed."',
      'Tradition holds that Thomas traveled farther than any other Apostle — all the way to India, where he founded seven churches along the Malabar Coast. The Thomas Christians of Kerala trace their lineage directly to him. He was martyred by spear in Mylapore, now Chennai, around 72 AD. His body was later transferred to Edessa. He is patron of architects because he built churches — and because he built his faith on solid ground.',
    ],
    facts: [
      { label: 'Also Known', value: 'Didymus · The Twin · Apostle to India' },
      { label: 'Key Text',   value: 'John 20:24–29 · John 11:16 · John 14:5' },
      { label: 'Patron of',  value: 'Architects · India · Sri Lanka · Those who doubt' },
      { label: 'Symbols',    value: 'Spear · Carpenter\'s square · Builder\'s tools' },
      { label: 'Martyrdom',  value: 'Spear, c. 72 AD · Mylapore, India — furthest traveled apostle' },
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
  {
    slug: 'joseph', navName: 'Joseph',
    title: 'CRUX — St. Joseph', saintName: 'St. Joseph',
    badge: '✦✦✦✦ Legendary', feast: 'March 19', patron: 'Universal Church, fathers, workers, the dying',
    bio: 'He received no visions, spoke no recorded words, and changed everything.',
    setNum: '013 / 052', backName: 'Joseph of Nazareth', backDates: 'c. 100 BC – c. 18 AD · Nazareth',
    prayer: [
      'O St. Joseph, silent and faithful guardian of the Holy Family, you who received the most impossible commands — flee to Egypt, trust what you cannot understand, raise a child who is not yours and yet is God — intercede for all fathers, all who protect the vulnerable, all who act without seeing the full picture.',
      'You are the patron of the dying because Jesus and Mary were with you at the end. Be with us at ours. Teach us the holiness of ordinary faithfulness: of rising each day, of protecting what has been given to us, of working without acclaim. Terror of demons, comfort of the afflicted — pray for us.',
    ],
    bioParagraphs: [
      'Joseph was a carpenter in Nazareth, a descendant of David, betrothed to Mary when he discovered she was pregnant. Preparing to divorce her quietly, he was visited by an angel: "Do not be afraid to take Mary as your wife." He obeyed immediately. He obeyed again when told to flee to Egypt. He raised the Son of God in a workshop and taught him a trade.',
      'Joseph never speaks in any Gospel. He acts, protects, listens, and disappears from the text. Pope Francis declared a Year of St. Joseph in 2020, calling him "a father in the shadows." He is patron of the universal Church — the largest organization in human history — entrusted to a man whose only words are silence.',
    ],
    facts: [
      { label: 'Also Known', value: 'Terror of Demons · Patron of a Happy Death' },
      { label: 'Key Text',   value: 'Matthew 1–2 · Luke 2 · Genesis 37–50 (typology)' },
      { label: 'Patron of',  value: 'Universal Church · Fathers · Workers · The Dying' },
      { label: 'Symbols',    value: 'Carpenter\'s square · Lily · Infant Jesus · Staff' },
      { label: 'Feast Days', value: 'March 19 (Spouse of Mary) · May 1 (Joseph the Worker)' },
    ],
  },
  {
    slug: 'joan-arc', navName: 'Joan',
    title: 'CRUX — St. Joan of Arc', saintName: 'St. Joan of Arc',
    badge: '✦✦ Rare', feast: 'May 30', patron: 'France, soldiers, prisoners, the ridiculed',
    bio: 'She was seventeen when she led an army. She was nineteen when they burned her. She never stopped.',
    setNum: '018 / 052', backName: 'Jeanne d\'Arc', backDates: '1412–1431 AD · Domrémy, France',
    prayer: [
      'O St. Joan of Arc, warrior and martyr, you who heard the voice of God when everyone around you heard only the voice of impossibility — intercede for all who are mocked for their faith, for all who are asked to do something far beyond their strength.',
      'You were condemned by a Church court and vindicated by a Church court, twenty-five years apart. You trusted God through both. Pray for all who suffer unjust judgment, for all who stand alone for the truth, and for all who wonder if God\'s voice is real. Help us recognize it and obey it as you did — without calculation, without fear.',
    ],
    bioParagraphs: [
      'Joan was a peasant girl from Domrémy who began hearing the voices of St. Michael, St. Catherine, and St. Margaret at age thirteen, telling her to drive the English from France and bring the Dauphin to coronation. She convinced military commanders, was given an army, and led the siege of Orléans to victory in nine days — reversing a siege that had held for months.',
      'Captured by the Burgundians and sold to the English, she was tried by a Church tribunal on charges of heresy and sorcery. She defended herself with astonishing theological precision. She was burned at the stake in Rouen at nineteen years old. Twenty-five years later, a retrial declared the original verdict fraudulent. She was canonized in 1920.',
    ],
    facts: [
      { label: 'Also Known', value: 'Maid of Orléans · La Pucelle' },
      { label: 'Key Text',   value: 'Trial of Condemnation Records (1431) · Trial of Nullification (1456)' },
      { label: 'Patron of',  value: 'France · Soldiers · Prisoners · Ridiculed believers' },
      { label: 'Symbols',    value: 'Armor · White banner · Sword · Fleur-de-lis' },
      { label: 'Canonized',  value: '1920 by Pope Benedict XV · Age at death: 19' },
    ],
  },
  {
    slug: 'ignatius', navName: 'Ignatius',
    title: 'CRUX — St. Ignatius of Loyola', saintName: 'St. Ignatius of Loyola',
    badge: '✦✦ Rare', feast: 'July 31', patron: 'Jesuits, soldiers, spiritual retreats, educators',
    bio: 'A cannonball shattered his leg. It was the best thing that ever happened to him.',
    setNum: '019 / 052', backName: 'Íñigo López de Loyola', backDates: '1491–1556 AD · Azpeitia, Spain',
    prayer: [
      'O St. Ignatius of Loyola, soldier turned pilgrim, you who learned to discern the spirits from a sickbed and gave the Church one of its greatest gifts — the Spiritual Exercises — intercede for all who are searching for God\'s will in their lives.',
      '"Teach us, good Lord, to serve you as you deserve: to give and not to count the cost, to fight and not to heed the wounds, to toil and not to seek for rest, to labor and not to ask for any reward, save that of knowing that we do your will." This is your prayer, Ignatius. Make it ours.',
    ],
    bioParagraphs: [
      'Ignatius was a Spanish nobleman and soldier who, while recovering from a cannonball wound at Pamplona, read the only books available: a life of Christ and lives of the saints. He noticed that worldly thoughts left him empty while thoughts of serving God left him with lasting peace. This observation became the foundation of Ignatian discernment.',
      'After a pilgrimage and a mystical experience at Manresa, he spent years studying theology and gathered companions. In 1540, Pope Paul III approved the Society of Jesus — the Jesuits. Ignatius spent his remaining years in Rome directing his order and writing the Constitutions. The Spiritual Exercises, a structured 30-day retreat, remains one of the most influential texts in Christian spirituality.',
    ],
    facts: [
      { label: 'Also Known', value: 'Íñigo · Pilgrim · Founder of the Jesuits' },
      { label: 'Key Text',   value: 'Spiritual Exercises · Autobiography · Constitutions of the SJ' },
      { label: 'Patron of',  value: 'Jesuits · Soldiers · Spiritual retreats · Educators' },
      { label: 'Symbols',    value: 'IHS monogram · Book · Armor · Pilgrim\'s staff' },
      { label: 'Canonized',  value: '1622 by Pope Gregory XV alongside Francis Xavier' },
    ],
  },
  {
    slug: 'catherine-siena', navName: 'Catherine',
    title: 'CRUX — St. Catherine of Siena', saintName: 'St. Catherine of Siena',
    badge: '✦✦ Rare', feast: 'April 29', patron: 'Europe, Italy, nurses, fire prevention',
    bio: 'She talked popes back from exile. She was thirty-three when she died. She never stopped writing.',
    setNum: '020 / 052', backName: 'Caterina di Jacopo di Benincasa', backDates: '1347–1380 AD · Siena, Italy',
    prayer: [
      'O St. Catherine of Siena, Doctor of the Church, you who received the stigmata, who dictated the Dialogue while in mystical ecstasy, and who rebuked a pope with the authority of a saint — intercede for all who love the Church deeply enough to tell it the truth.',
      '"Be who God meant you to be and you will set the world on fire." Teach us what it means to live entirely from the interior life — to serve the sick without disgust, to speak truth without cruelty, to love the Church without pretending it is perfect. Pray for us, that we may love God as recklessly as you did.',
    ],
    bioParagraphs: [
      'Catherine was the twenty-fourth of twenty-five children of a Sienese dyer. At six she had a vision of Christ; at seven she vowed her virginity; at sixteen she joined the Dominican tertiaries. She lived three years in solitary prayer, then emerged to serve plague victims in Siena\'s hospitals, caring personally for the dying and the most repulsive cases.',
      'She began dictating letters — nearly four hundred survive — to popes, cardinals, queens, and generals. She wrote to Pope Gregory XI in Avignon, calling him "Babbo" (daddy) and demanding he return to Rome. He did. She later helped end the Western Schism. She dictated The Dialogue of Divine Providence while in ecstatic prayer. She died at thirty-three, worn out by fasting and spiritual labor.',
    ],
    facts: [
      { label: 'Also Known', value: 'Seraphic Virgin · Doctor of the Church' },
      { label: 'Key Text',   value: 'The Dialogue of Divine Providence · ~380 surviving letters' },
      { label: 'Patron of',  value: 'Europe (co-patron) · Italy · Nurses · Fire prevention' },
      { label: 'Symbols',    value: 'Lily · Crown of thorns · Stigmata · Dominican habit · Quill' },
      { label: 'Doctor',     value: 'Doctor of the Church (1970) · Second female Doctor' },
    ],
  },
  {
    slug: 'kolbe', navName: 'Kolbe',
    title: 'CRUX — St. Maximilian Kolbe', saintName: 'St. Maximilian Kolbe',
    badge: '✦✦ Rare', feast: 'August 14', patron: 'Journalists, prisoners, families, drug addicts',
    bio: 'A stranger was chosen to die. Maximilian stood up and said: "Take me instead." They did.',
    setNum: '021 / 052', backName: 'Rajmund Kolbe', backDates: '1894–1941 AD · Zduńska Wola, Poland',
    prayer: [
      'O St. Maximilian Kolbe, martyr of charity, you who offered your life so that a stranger could live — a man you had never met, whose children needed their father — intercede for all who are imprisoned, persecuted, or forgotten.',
      'You said that the only love that matters is love that costs something. You proved it in Bunker 11 at Auschwitz. Lead the souls of the unborn, the addicted, the despairing — all those for whom you are patron — to the mercy of the God for whom you died singing. And pray for us, that we might love at least a fraction of the cost at which you loved.',
    ],
    bioParagraphs: [
      'Maximilian Kolbe was a Polish Franciscan friar who founded a publishing apostolate, launched the world\'s largest Catholic periodical, and established a radio station — all before the German invasion of Poland. In 1941 he was arrested by the Gestapo and sent to Auschwitz, where he continued his priestly ministry in secret.',
      'In July 1941, a prisoner escaped. The commandant selected ten men to die of starvation in reprisal. When one of the men cried out for his family, Fr. Kolbe stepped forward: "I am a Catholic priest. Let me take his place. I am old. He has a wife and children." He was accepted. After two weeks, still alive, he was killed by lethal injection on August 14, 1941.',
    ],
    facts: [
      { label: 'Also Known', value: 'Martyr of Charity · Prisoner 16670' },
      { label: 'Key Text',   value: 'Miles Immaculatae · Knight of the Immaculata periodical' },
      { label: 'Patron of',  value: 'Journalists · Prisoners · Families · Drug addicts' },
      { label: 'Symbols',    value: 'Franciscan habit · Rosary · Crown of martyrdom · Prison bars' },
      { label: 'Canonized',  value: '1982 by Pope John Paul II · Martyr of Charity' },
    ],
  },
  {
    slug: 'john-paul-ii', navName: 'John Paul II',
    title: 'CRUX — St. John Paul II', saintName: 'St. John Paul II',
    badge: '✦✦ Rare', feast: 'October 22', patron: 'Families, youth, World Youth Day',
    bio: '"Be not afraid." He said it on the first day. He meant it every day after.',
    setNum: '022 / 052', backName: 'Karol Józef Wojtyła', backDates: '1920–2005 AD · Wadowice, Poland',
    prayer: [
      'O St. John Paul II, shepherd of a generation, you who stood at the edge of history and said "Be not afraid" — not as a slogan but as a command drawn from the depths of the Gospel — intercede for the young people you so clearly loved, and for all who are afraid.',
      'You survived Nazi occupation, Soviet atheism, and an assassin\'s bullet. You asked us to open the doors of our hearts to Christ, wide. Help us to do that. Pray for families who are fracturing, for young people who have never heard the Gospel proposed as something worth living for, and for all who need to know that the human person is not a problem to be solved but a gift to be received.',
    ],
    bioParagraphs: [
      'Karol Wojtyła grew up in Poland under Nazi occupation, losing his mother, brother, and father before he was twenty-one. He studied theology secretly during the German occupation, was ordained a priest in 1946, became the Archbishop of Kraków, and in 1978 was elected Pope — the first non-Italian pope in 455 years. His pontificate lasted 26 years.',
      'He traveled to 129 countries, launched World Youth Day, wrote Theology of the Body, and played a decisive role in the fall of Communism in Eastern Europe. He survived an assassination attempt in 1981, later visiting his would-be assassin in prison and forgiving him personally. He was canonized in 2014 by Pope Francis, just nine years after his death.',
    ],
    facts: [
      { label: 'Also Known', value: 'JP2 · The Great · Totus Tuus' },
      { label: 'Key Text',   value: 'Theology of the Body · Fides et Ratio · Veritatis Splendor' },
      { label: 'Patron of',  value: 'Families · Youth · World Youth Day · Poland' },
      { label: 'Symbols',    value: 'White vestments · Papal cross · M (Marian initial)' },
      { label: 'Canonized',  value: '2014 by Pope Francis · 8th fastest canonization in history' },
    ],
  },
  {
    slug: 'patrick', navName: 'Patrick',
    title: 'CRUX — St. Patrick', saintName: 'St. Patrick',
    badge: '✦✦ Rare', feast: 'March 17', patron: 'Ireland, Nigeria, engineers',
    bio: 'He was kidnapped into slavery in Ireland. Then he went back. By choice.',
    setNum: '023 / 052', backName: 'Patricius Magonus Sucatus', backDates: 'c. 385–461 AD · Roman Britain / Ireland',
    prayer: [
      'O St. Patrick, Apostle of Ireland, you who were enslaved, escaped, and then heard in a dream the voices of the Irish people calling you back — intercede for all missionaries, for all who return to difficult places out of love, for all who carry the faith into hostile ground.',
      '"Christ with me, Christ before me, Christ behind me, Christ in me, Christ beneath me, Christ above me, Christ on my right, Christ on my left" — this is your Breastplate, Patrick. Let it be ours. Surround us with the presence of Christ as you surrounded Ireland with his name. Pray for all whose faith is newly lit and all who are trying to keep it burning.',
    ],
    bioParagraphs: [
      'Patrick was born in Roman Britain to a Christian family. At sixteen he was kidnapped by Irish raiders and spent six years as a slave herding sheep. He attributes his deepening faith to this period: "The love of God and his fear grew in me more and more, as did the faith." He eventually escaped and returned to Britain, but a dream called him back to Ireland.',
      'Ordained a bishop, he returned to Ireland around 432 AD and spent thirty years evangelizing a people who had enslaved him. He famously used the shamrock to explain the Trinity. He ordained hundreds of priests, established monasteries, and by the time of his death had transformed Ireland into one of the most intensely Catholic nations on earth.',
    ],
    facts: [
      { label: 'Also Known', value: 'Apostle of Ireland · Patricius' },
      { label: 'Key Text',   value: 'Confessio · Letter to Coroticus · St. Patrick\'s Breastplate' },
      { label: 'Patron of',  value: 'Ireland · Nigeria · Engineers · Excluded people' },
      { label: 'Symbols',    value: 'Shamrock · Serpent · Celtic cross · Baptismal font' },
      { label: 'Legacy',     value: 'Evangelized Ireland c. 432–461 AD · ~300 churches founded' },
    ],
  },
  {
    slug: 'carlo-acutis', navName: 'Carlo',
    title: 'CRUX — Bl. Carlo Acutis', saintName: 'Bl. Carlo Acutis',
    badge: '✦✦ Rare', feast: 'October 12', patron: 'Internet, youth, the sick',
    bio: '"The more Eucharist we receive, the more we will become like Jesus." He catalogued every miracle to prove it.',
    setNum: '024 / 052', backName: 'Carlo Acutis', backDates: '1991–2006 AD · London / Milan, Italy',
    prayer: [
      'O Blessed Carlo Acutis, teenage witness to the real presence of Christ in the Eucharist, you who used the internet not to waste your life but to give it away — intercede for all young people navigating a digital world that offers everything except what the heart actually needs.',
      'You said: "All people are born as originals, but many die as photocopies." Help us to be who God made us, not who the world tells us to be. You were fifteen when you built the website, fifteen when you got sick, fifteen when you offered your suffering for the Pope and the Church. Pray for all young people who are sick, and for all who have never encountered the Eucharist as a living person who loves them.',
    ],
    bioParagraphs: [
      'Carlo Acutis was born in London and raised in Milan. He was a normal Italian teenager — he played soccer, loved video games, and had a dog named Briciola. He also attended Mass daily, made the Rosary his daily prayer, and spent hours in Eucharistic adoration. He described the Eucharist as "my highway to heaven."',
      'At fourteen, he built a website cataloguing every verified Eucharistic miracle in Church history — a project requiring years of research and web development. He wanted the world to see the scientific evidence for what he already believed. At fifteen he was diagnosed with leukemia. He offered his suffering for the Pope and for the souls in purgatory. He died on October 12, 2006, and was beatified in 2020. His body, found incorrupt, rests in Assisi.',
    ],
    facts: [
      { label: 'Also Known', value: 'God\'s Influencer · The Millennial Saint' },
      { label: 'Key Text',   value: 'eucharisticmiracles.com (his website, still live)' },
      { label: 'Patron of',  value: 'Internet · Youth · The Sick · Web developers' },
      { label: 'Symbols',    value: 'Laptop · Monstrance · Soccer ball · Rosary' },
      { label: 'Beatified',  value: '2020 by Pope Francis · Expected canonization c. 2025' },
    ],
  },
  {
    slug: 'francis-assisi', navName: 'Francis',
    title: 'CRUX — St. Francis of Assisi', saintName: 'St. Francis of Assisi',
    badge: '✦ Uncommon', feast: 'October 4', patron: 'Ecology, animals, Italy, merchants',
    bio: 'He stripped off his clothes in the town square, handed them to his father, and walked away into the woods singing.',
    setNum: '025 / 052', backName: 'Giovanni di Pietro di Bernardone', backDates: '1181–1226 AD · Assisi, Italy',
    prayer: [
      'O St. Francis of Assisi, herald of the Great King, you who called the sun your brother and the moon your sister and death your sister too — intercede for all who love creation and cannot find its Creator, and for all who have given up everything and wonder if it was worth it.',
      '"Lord, make me an instrument of your peace." This is the prayer the world most associates with you — not a prayer for my comfort or my peace, but for my usefulness. You lived it entirely. Pray for the poor. Pray for the sick. Pray for the planet. And pray for us — that we might see, as you saw, the face of Christ in every creature and refuse to look away.',
    ],
    bioParagraphs: [
      'Francis Bernardone was the son of a wealthy Assisi cloth merchant, a young man who loved parties, war-games, and glory. A period of illness and imprisonment in Perugia broke something open in him. Returning to Assisi, he heard a crucifix say: "Francis, go repair my house which is falling into ruin." He took it literally, sold his father\'s cloth, and was publicly disowned.',
      'He rebuilt the little chapel of San Damiano by hand, then began preaching radical poverty and the Gospel of Christ. Companions gathered. He founded three orders — the Friars Minor, the Poor Clares, and the Third Order. In 1224 he received the stigmata on Mount La Verna, the first recorded instance in Christian history. He called his own body "Brother Ass" and treated it accordingly. He died at forty-four, dictating the Canticle of the Creatures.',
    ],
    facts: [
      { label: 'Also Known', value: 'Poverello · Il Serafico · Herald of the Great King' },
      { label: 'Key Text',   value: 'Canticle of the Creatures · Rule of the Friars Minor' },
      { label: 'Patron of',  value: 'Ecology · Animals · Italy · Merchants · Stowaways' },
      { label: 'Symbols',    value: 'Brown habit · Stigmata · Wolf · Birds · Tau cross' },
      { label: 'Canonized',  value: '1228 AD by Pope Gregory IX · Two years after death' },
    ],
  },
  {
    slug: 'therese', navName: 'Thérèse',
    title: 'CRUX — St. Thérèse of Lisieux', saintName: 'St. Thérèse of Lisieux',
    badge: '✦ Uncommon', feast: 'October 1', patron: 'Missions, France, florists, aviators',
    bio: '"My little way is the way of spiritual childhood, the way of trust and absolute surrender." She died at twenty-four. Heaven rained roses.',
    setNum: '026 / 052', backName: 'Marie-Françoise-Thérèse Martin', backDates: '1873–1897 AD · Alençon / Lisieux, France',
    prayer: [
      'O St. Thérèse of Lisieux, Little Flower, you who found in smallness not a defeat but a doctrine — that God lifts up those who cannot climb — intercede for all who feel too ordinary to be holy, too weak to be saints.',
      '"I will spend my heaven doing good on earth." You promised to let fall a shower of roses after your death, and you have kept the promise for over a hundred years. Pray for all the suffering. Pray for missionaries. Pray for those who are dying young and cannot understand why. And teach us your little way: the way of love in small things, done with great fidelity, until we are done.',
    ],
    bioParagraphs: [
      'Thérèse Martin was the youngest of nine children in a deeply devout Norman family. She entered the Carmelite convent at Lisieux at fifteen — she had to petition the Pope for special permission — and lived there until her death from tuberculosis at twenty-four. She was never a missionary, never led a religious order, never performed public works.',
      'She developed what she called the "Little Way" — a spirituality of doing small things with great love, trusting entirely in God\'s mercy rather than her own effort. Her autobiography, Story of a Soul, was edited and published after her death and became one of the most widely read spiritual books in history. She was declared a Doctor of the Church in 1997 — the third woman ever, and the youngest Doctor in Church history.',
    ],
    facts: [
      { label: 'Also Known', value: 'Little Flower · The Little Thérèse · Doctor of Love' },
      { label: 'Key Text',   value: 'Story of a Soul (L\'Histoire d\'une Âme)' },
      { label: 'Patron of',  value: 'Missions · France · Florists · Aviators · AIDS sufferers' },
      { label: 'Symbols',    value: 'Red roses · Crucifix · Carmelite habit · Quill' },
      { label: 'Doctor',     value: 'Doctor of the Church (1997) · Youngest Doctor ever at death age 24' },
    ],
  },
  {
    slug: 'benedict', navName: 'Benedict',
    title: 'CRUX — St. Benedict of Nursia', saintName: 'St. Benedict of Nursia',
    badge: '✦ Uncommon', feast: 'July 11', patron: 'Europe, monks, students, spelunkers, against poison',
    bio: 'He left Rome, climbed into a cave, and accidentally civilized the Western world. His Rule — written for a small monastery — held Europe together through the Dark Ages.',
    setNum: '031 / 052', backName: 'Benedictus de Nursia', backDates: '480–547 AD · Nursia, Italy',
    prayer: [
      'O St. Benedict of Nursia, Father of Western monasticism, Patron of Europe, you who fled the corruption of Rome and found God in silence and solitude — intercede for all who are overwhelmed by the noise of the world and cannot hear what matters.',
      '"Ora et Labora." Pray and work. Your Rule was not a document of retreat from the world but a structure for living fully inside it — every hour ordered, every task sanctified, every stranger welcomed as Christ. Pray for students. Pray for those who feel their lives have no order. Pray for Europe. And pray for us — that we might learn what you learned in that cave: that the most radical thing a person can do is stop, be still, and listen for God.',
    ],
    bioParagraphs: [
      'Benedict was born to a Roman noble family and sent to Rome for his education. Disgusted by the moral chaos of the city, he withdrew to the hills of Subiaco and lived for three years as a hermit in a cave. Disciples gathered. He founded twelve small monasteries and eventually established the great monastery of Monte Cassino around 529, which became the center of Western monasticism.',
      'His Rule of Saint Benedict — a short, practical document governing prayer, work, study, and hospitality — became the template for monastic life throughout Europe. During the collapse of the Roman Empire, Benedictine monasteries preserved literacy, agriculture, art, and the faith itself. Pope Paul VI named him Patron of Europe in 1964. The medal bearing his name is one of the most widely used sacramentals in the Catholic world.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Father of Western Monasticism · Patriarch of Monks' },
      { label: 'Key Text',    value: 'Rule of Saint Benedict (c. 516 AD) · still used by monasteries worldwide' },
      { label: 'Patron of',   value: 'Europe · Monks · Students · Spelunkers · Against poison · Kidney disease' },
      { label: 'Symbols',     value: 'Broken cup (poison) · Raven · Crozier · Rule · Benedict Medal' },
      { label: 'Patron',      value: 'Named Patron of Europe by Pope Paul VI, 1964' },
    ],
  },
  {
    slug: 'mother-teresa', navName: 'Mother Teresa',
    title: 'CRUX — Bl. Teresa of Calcutta', saintName: 'Bl. Teresa of Calcutta',
    badge: '✦✦ Rare', feast: 'September 5', patron: 'Missionaries of Charity, World Youth Day, dying people',
    bio: '"Not all of us can do great things. But we can do small things with great love." She did them for fifty years in the streets of Calcutta.',
    setNum: '032 / 052', backName: 'Anjezë Gonxhe Bojaxhiu', backDates: '1910–1997 AD · Skopje / Calcutta',
    prayer: [
      'O Blessed Teresa of Calcutta, apostle of the poorest of the poor, you who saw the face of Christ in every person the world had thrown away — intercede for all who serve the sick and dying, and for all who feel invisible.',
      'You said: "If you judge people, you have no time to love them." You had no time to judge anyone. You were too busy washing feet, holding hands, and staying with the people no one else would stay with. In your private letters, you wrote of years of spiritual darkness — of feeling nothing, of praying into silence — and you kept going anyway. Pray for all who serve without recognition. Pray for all who labor in the dark. And teach us what you learned on the streets of Calcutta: that love is not a feeling but a decision, made again and again in small things.',
    ],
    bioParagraphs: [
      'Agnes Bojaxhiu was born in Skopje to an Albanian family and felt called to the missions at age twelve. She joined the Sisters of Loreto at eighteen, was sent to India, and taught at a girls\' school in Calcutta for seventeen years. On September 10, 1946 — a date she called "Inspiration Day" — she heard a call within a call: to leave the convent and serve the poorest of the poor in the streets. She had no money, no organization, and no plan.',
      'She founded the Missionaries of Charity in 1950 with thirteen members. By her death in 1997, the order had over 4,500 sisters operating 610 missions in 123 countries. She received the Nobel Peace Prize in 1979 and donated the prize money to the poor. After her death, her private letters revealed decades of spiritual darkness — feeling no presence of God — which she had shared with almost no one. She was beatified in 2003 and is expected to be canonized.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Saint of the Gutters · The Angel of Mercy' },
      { label: 'Key Text',    value: 'Come Be My Light (her private letters, published posthumously)' },
      { label: 'Patron of',   value: 'Missionaries of Charity · Dying people · World Youth Day' },
      { label: 'Symbols',     value: 'White and blue sari · Rosary · The face of the poor' },
      { label: 'Beatified',   value: '2003 by Pope John Paul II · Nobel Peace Prize 1979' },
    ],
  },
  {
    slug: 'stephen', navName: 'Stephen',
    title: 'CRUX — St. Stephen', saintName: 'St. Stephen',
    badge: '✦✦ Rare', feast: 'December 26', patron: 'Deacons, stonemasons, casket makers',
    bio: 'He was the first to die for Christ. As they stoned him, he saw heaven open — and asked God to forgive the men throwing the stones.',
    setNum: '033 / 052', backName: 'Stephanos', backDates: 'c. 5–34 AD · Jerusalem',
    prayer: [
      'O St. Stephen, Protomartyr, first witness to shed blood for Christ — intercede for all who suffer for their faith today, and for all who are persecuted for standing for what is true.',
      'You were thirty years old, maybe younger. You were a deacon — chosen to serve tables, to care for the widows — and you ended up preaching the most comprehensive account of salvation history in the Book of Acts. And when they dragged you out to stone you, you did not curse them. You looked up and saw the Son of Man standing at the right hand of God, and you asked Him to forgive the men killing you. One of those men was Saul, who became Paul. Pray for all who die for their faith. Pray for the persecuted Church. And pray for us — that we might forgive as you forgave, with our last breath.',
    ],
    bioParagraphs: [
      'Stephen was one of the first seven deacons ordained by the Apostles to care for the Greek-speaking widows in the Jerusalem community. The Acts of the Apostles describes him as "full of grace and power, doing great wonders and signs among the people." He engaged in public debate with members of several synagogues and was brought before the Sanhedrin on charges of blasphemy.',
      'His defense before the council — a sweeping account of salvation history from Abraham through Moses to the Prophets, ending with the charge that Israel had always rejected its deliverers and had now handed over the Righteous One — provoked a furious response. He was dragged out of the city and stoned. As he died, he saw a vision of the risen Christ standing at the right hand of God, and prayed: "Lord, do not hold this sin against them." Among those watching was a young Pharisee named Saul of Tarsus.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Protomartyr · First Martyr of the Church' },
      { label: 'Key Text',    value: 'Acts 6–7 · The longest speech in the Book of Acts' },
      { label: 'Patron of',   value: 'Deacons · Stonemasons · Casket makers · Headache sufferers' },
      { label: 'Symbols',     value: 'Stones · Palm of martyrdom · Deacon\'s dalmatic · Open sky' },
      { label: 'Feast',       value: 'December 26 — the day after Christmas, the first blood shed for Christ' },
    ],
  },
  {
    slug: 'john-cross', navName: 'John of the Cross',
    title: 'CRUX — St. John of the Cross', saintName: 'St. John of the Cross',
    badge: '✦✦ Rare', feast: 'December 14', patron: 'Contemplatives, mystics, Spanish poets',
    bio: 'He was imprisoned by his own Carmelite brothers in a tiny cell for nine months. In the dark, he wrote the greatest mystical poetry in any language.',
    setNum: '027 / 052', backName: 'Juan de Yepes Álvarez', backDates: '1542–1591 AD · Fontiveros, Spain',
    prayer: [
      'O St. John of the Cross, Doctor of the Dark Night, you who found God not in consolation but in desolation — intercede for all who are in the darkness right now and cannot feel God anywhere.',
      '"In the evening of life, we will be judged on love alone." You said this from inside a prison cell. Pray for those who have given everything and seem to have received nothing in return. Pray for those in spiritual dryness. Pray for those who have lost their way. And remind us that the dark night is not the absence of God but the nearness of God — that the One who seems farthest away is burning closest.',
    ],
    bioParagraphs: [
      'Juan de Yepes was born into poverty in Castile and spent his childhood in an orphanage after his father died. He joined the Carmelites and met Teresa of Ávila, who enlisted him in her reform of the order — the return to strict poverty and contemplative prayer. His Carmelite brothers, resisting the reform, seized him and imprisoned him in Toledo in a cell six feet wide for nine months.',
      'In that cell, in the dark, he composed the opening stanzas of the Spiritual Canticle. Released, he wrote the Dark Night of the Soul and The Ascent of Mount Carmel — systematic accounts of the contemplative path that remain the definitive Catholic mystical theology. He spent his final years in obscurity, stripped of his offices by the same order he had reformed. He died in 1591, asking the friars to read him the Song of Songs.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Doctor of the Dark Night · Doctor Mysticus' },
      { label: 'Key Text',    value: 'Dark Night of the Soul · Spiritual Canticle · Ascent of Mount Carmel' },
      { label: 'Patron of',   value: 'Contemplatives · Mystics · Spanish poets · Those in spiritual darkness' },
      { label: 'Symbols',     value: 'Quill · Flame · Dark cell · Cross · Song of Songs scroll' },
      { label: 'Doctor',      value: 'Doctor of the Church (1926) · Co-reformer of the Carmelites with Teresa of Ávila' },
    ],
  },
  {
    slug: 'francis-xavier', navName: 'Francis Xavier',
    title: 'CRUX — St. Francis Xavier', saintName: 'St. Francis Xavier',
    badge: '✦✦ Rare', feast: 'December 3', patron: 'Missions, India, Japan, Navarre, Australia',
    bio: 'He baptized over 30,000 people in eleven years, crossing the Indian Ocean, the Bay of Bengal, and the South China Sea. He died alone on a beach in sight of China.',
    setNum: '028 / 052', backName: 'Francisco de Jaso y Azpilicueta', backDates: '1506–1552 AD · Kingdom of Navarre',
    prayer: [
      'O St. Francis Xavier, Apostle of the Indies and Japan, you who carried the Gospel to the ends of the earth with nothing but a crucifix, a breviary, and the burning conviction that souls were worth dying for — intercede for all missionaries today.',
      'You covered more ground than any apostle since Paul. You wrote letters home from the edge of the world, describing the people you loved and the mission you could not finish alone. You died at forty-six, in sight of China, unable to cross the last water. Pray for those who labor in the mission field and see little fruit. Pray for the Church in Asia. And pray for all of us — that we might feel, as you felt, that every soul is worth crossing an ocean for.',
    ],
    bioParagraphs: [
      'Francisco de Jaso was a Navarrese nobleman studying philosophy in Paris when his roommate Ignatius of Loyola began asking him: "Francisco, what does it profit a man to gain the whole world and lose his soul?" He became one of the original seven Jesuits, taking his vows with Ignatius at Montmartre in 1534. In 1541 he boarded a ship for India and never came home.',
      'In eleven years he traveled to Goa, the Pearl Fishery Coast, Sri Lanka, the Moluccas, and Japan — learning languages, adapting to cultures, and baptizing tens of thousands. He spent two years in Japan establishing a Christian community and left it thriving. He was on his way to China when he fell ill on the island of Shangchuan and died on December 3, 1552, with his face turned toward the mainland he never reached. He was canonized with Ignatius in 1622.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Apostle of the Indies · Apostle of Japan · The Great Missionary' },
      { label: 'Key Text',    value: 'Letters from Asia (1542–1552) · still read by Jesuit missionaries' },
      { label: 'Patron of',   value: 'Missions · India · Japan · Navarre · Australia · Borneo' },
      { label: 'Symbols',     value: 'Ship · Crucifix · Crab · Torch · Globe · Jesuit IHS monogram' },
      { label: 'Canonized',   value: '1622 AD by Pope Gregory XV · Same day as Ignatius of Loyola' },
    ],
  },
  {
    slug: 'dominic', navName: 'Dominic',
    title: 'CRUX — St. Dominic', saintName: 'St. Dominic',
    badge: '✦✦ Rare', feast: 'August 8', patron: 'Astronomers, the Dominican Republic, falsely accused',
    bio: 'He walked into the heresy capital of southern France with nothing but Scripture and his voice, and preached for twenty years until the truth held.',
    setNum: '029 / 052', backName: 'Domingo de Guzmán', backDates: '1170–1221 AD · Caleruega, Castile',
    prayer: [
      'O St. Dominic, Founder of the Order of Preachers, you who gave your life to the truth and carried it into the places where it was most violently rejected — intercede for all who preach the Gospel in the face of opposition.',
      'You slept on the ground, fasted for months, and wept at night for souls you had not yet met. You saw heresy not as an enemy to be crushed but as an error to be corrected with charity and argument. Pray for preachers. Pray for teachers. Pray for those who defend the faith in classrooms and in public squares. And pray for us — that we might love truth as you loved it: not as a weapon but as a gift, given freely to all who will receive it.',
    ],
    bioParagraphs: [
      'Domingo de Guzmán was a Spanish canon who accompanied his bishop on a mission through southern France in 1203 and encountered the Albigensian heresy — a dualist movement that denied the goodness of creation and the Incarnation. He spent a night in debate with an innkeeper and was converted to a mission: not crusade but preaching. He gave away everything, walked barefoot, and began to talk.',
      'He preached throughout the Languedoc for twelve years, founding the Order of Preachers in 1216 with papal approval from Honorius III. The Dominicans were the first religious order built specifically around study and preaching — their constitutions required intellectual formation as a condition of ministry. Tradition credits him with spreading the Rosary, which he is said to have received from the Virgin Mary in a vision at Prouille. He died in Bologna in 1221, surrounded by his brothers.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Hammer of Heretics · Founder of the Dominicans · Apostle of Truth' },
      { label: 'Key Text',    value: 'Nine Ways of Prayer of St. Dominic · Dominican Constitutions' },
      { label: 'Patron of',   value: 'Astronomers · Falsely accused · Dominican Republic · Preachers' },
      { label: 'Symbols',     value: 'Black and white habit · Lily · Dog with torch · Star · Rosary' },
      { label: 'Canonized',   value: '1234 AD by Pope Gregory IX · Thirteen years after death' },
    ],
  },
  {
    slug: 'thomas-more', navName: 'Thomas More',
    title: 'CRUX — St. Thomas More', saintName: 'St. Thomas More',
    badge: '✦✦ Rare', feast: 'June 22', patron: 'Lawyers, statesmen, politicians, difficult marriages',
    bio: '"The king\'s good servant, but God\'s first." He was the second most powerful man in England. He chose a prison cell over a lie.',
    setNum: '030 / 052', backName: 'Sir Thomas More', backDates: '1478–1535 AD · London, England',
    prayer: [
      'O St. Thomas More, patron of statesmen and lawyers, you who served your king faithfully in everything that was not God\'s — intercede for all who hold public office and face pressure to compromise what they know to be true.',
      'You were funny. You were brilliant. You were the best lawyer in England and the most honest man at court. And when the moment came — when the king demanded that you call a lie the truth — you simply went quiet. You did not argue. You did not denounce. You went to the Tower and waited. Pray for all politicians and judges under pressure. Pray for all who know the right thing and are afraid to do it. And pray for us — that we might hold as you held: cheerfully, without bitterness, to the end.',
    ],
    bioParagraphs: [
      'Thomas More was a lawyer, humanist scholar, and close friend of Erasmus who rose to become Lord Chancellor of England under Henry VIII — the highest judicial office in the land. He was brilliant, witty, devout, and incorruptible. His home in Chelsea was a gathering place for scholars; his family life was by all accounts warm and joyful. He wrote Utopia at thirty-eight.',
      'When Henry VIII sought an annulment of his marriage to Catherine of Aragon and required his officers to swear to the Act of Succession acknowledging him as Supreme Head of the Church, More refused. He resigned the Chancellorship, was imprisoned in the Tower of London for fifteen months, and was beheaded on Tower Hill on July 6, 1535. His last words were that he died "the king\'s good servant, but God\'s first." He was canonized in 1935, four hundred years after his death.',
    ],
    facts: [
      { label: 'Also Known',  value: 'Man for All Seasons · Lord Chancellor of England' },
      { label: 'Key Text',    value: 'Utopia (1516) · A Dialogue of Comfort Against Tribulation (written in the Tower)' },
      { label: 'Patron of',   value: 'Lawyers · Statesmen · Politicians · Difficult marriages · Adopted children' },
      { label: 'Symbols',     value: 'Gold chain of office · Axe · Tower of London · Legal scroll · Crucifix' },
      { label: 'Canonized',   value: '1935 AD by Pope Pius XI · Martyred 1535 · 400-year cause' },
    ],
  },
  {
    slug: 'perpetua', navName: 'Perpetua',
    title: 'CRUX — St. Perpetua', saintName: 'St. Perpetua',
    badge: '✦ Uncommon', feast: 'March 7', patron: 'Martyrs, expectant mothers',
    bio: 'She kept a diary in prison. The last entry ends the night before she died.',
    setNum: '037 / 060', backName: 'Vibia Perpetua', backDates: 'c. 181–203 AD · Carthage, North Africa',
    prayer: [
      'O St. Perpetua, martyr of Carthage, you who walked into the arena as a young mother with the peace of one who knows where she is going — intercede for all mothers, for those facing death, and for all who choose faithfulness over survival.',
      'Your courage shames our small fears. Teach us that the faith worth dying for is the faith worth living for every ordinary day. Pray for all who face persecution and all who are far from home.',
    ],
    bioParagraphs: [
      'Perpetua was a young noblewoman of Carthage, a nursing mother and a catechumen, when she was arrested for her Christian faith around 203 AD. She kept a prison diary — one of the oldest surviving texts written by a Christian woman — recording her visions, her father\'s desperate pleas to recant, and her absolute refusal.',
      'In prison she had a vision of climbing a bronze ladder lined with swords to a garden where a white-haired shepherd offered her milk. She was executed in the arena at Carthage with her slave Felicity, who gave birth two days before their death. Early accounts say Perpetua guided the trembling sword of an executioner to her own throat, dying on her own terms.',
    ],
    facts: [
      { label: 'Also Known', value: 'Perpetua of Carthage · Vibia Perpetua' },
      { label: 'Key Text',   value: 'The Passion of Perpetua and Felicity, c. 203 AD' },
      { label: 'Patron of',  value: 'Martyrs · Expectant mothers · Cattle ranchers' },
      { label: 'Symbols',    value: 'Bronze ladder · Sheep · Palm of martyrdom' },
      { label: 'Martyrdom',  value: 'Killed in the arena, March 7, 203 AD · Carthage' },
    ],
  },
  {
    slug: 'polycarp', navName: 'Polycarp',
    title: 'CRUX — St. Polycarp', saintName: 'St. Polycarp',
    badge: '✦ Uncommon', feast: 'February 23', patron: 'Bishops, the early Church',
    bio: '"Eighty-six years I have served Him and He has done me no wrong. How can I blaspheme my King who saved me?"',
    setNum: '038 / 060', backName: 'Polycarp of Smyrna', backDates: 'c. 69–155 AD · Smyrna, Asia Minor',
    prayer: [
      'O St. Polycarp, bishop and martyr, disciple of the Apostle John, you who carried the living memory of those who had touched the Lord — intercede for all who hold fast to the faith handed down from the beginning.',
      'You answered the demand to renounce Christ with eighty-six years of faithfulness in a single breath. Teach us that loyalty to Christ is not a single dramatic act but the accumulation of every ordinary day. Pray for all bishops and for all who are old and faithful.',
    ],
    bioParagraphs: [
      'Polycarp was a disciple of the Apostle John and became Bishop of Smyrna, making him a living link between the Apostles and the early Church. He knew people who had walked with Jesus. His letter to the Philippians and his witness in martyrdom anchored the Christian tradition at a moment when it was still forming.',
      'When the Roman proconsul demanded he curse Christ and be spared, Polycarp replied with one of the most famous sentences in Christian history: "Eighty-six years I have served Him, and He has done me no wrong. How can I blaspheme my King who saved me?" He was burned alive at the stadium in Smyrna around 155 AD. The flames reportedly arched around him before a soldier stabbed him.',
    ],
    facts: [
      { label: 'Also Known', value: 'Polycarp of Smyrna · Bishop and Martyr' },
      { label: 'Key Text',   value: 'Letter to the Philippians · Martyrdom of Polycarp, c. 155' },
      { label: 'Patron of',  value: 'Bishops · The early Church · Smyrna' },
      { label: 'Symbols',    value: 'Flames · Dove · Bishop\'s vestments' },
      { label: 'Martyrdom',  value: 'Burned alive, c. 155 AD · Stadium of Smyrna' },
    ],
  },
  {
    slug: 'lucy', navName: 'Lucy',
    title: 'CRUX — St. Lucy', saintName: 'St. Lucy',
    badge: '✦ Uncommon', feast: 'December 13', patron: 'The blind, writers, the sick',
    bio: 'Her name means light. She was killed in the darkest week of the year. The Church put her feast there on purpose.',
    setNum: '039 / 060', backName: 'Lucia of Syracuse', backDates: 'c. 283–304 AD · Syracuse, Sicily',
    prayer: [
      'O St. Lucy, martyr of light, you who gave away your dowry to the poor and consecrated your life to Christ against every pressure — intercede for all who face darkness, all who are losing their sight, and all who need the courage to say no.',
      'Teach us that the light you carry is not our own but Christ\'s alone. Pray for all who suffer in their eyes or in their souls, and lead us through the darkest seasons toward the dawn that never fades.',
    ],
    bioParagraphs: [
      'Lucy was a young noblewoman of Syracuse in Sicily who consecrated her virginity to God and gave her dowry to the poor. When her rejected suitor reported her to the Roman governor during the Diocletianic persecution, she was condemned. According to tradition, soldiers attempting to move her could not shift her — not even with oxen — until she was killed.',
      'The most famous legend says her eyes were gouged out, yet she miraculously continued to see; she is often depicted holding her eyes on a dish. Her name, from the Latin lux (light), combined with her feast on December 13 — historically the longest night of the year in the Julian calendar — made her a symbol of light conquering darkness across Scandinavia and the Mediterranean alike.',
    ],
    facts: [
      { label: 'Also Known', value: 'Lucia of Syracuse · Santa Lucia' },
      { label: 'Key Text',   value: 'Acts of Lucy · Roman Martyrology' },
      { label: 'Patron of',  value: 'The blind · Writers · Throat ailments · Sicily' },
      { label: 'Symbols',    value: 'Eyes on a dish · Lamp · Palm · Sword at throat' },
      { label: 'Martyrdom',  value: 'Throat cut, December 13, 304 AD · Syracuse, Sicily' },
    ],
  },
  {
    slug: 'brigid', navName: 'Brigid',
    title: 'CRUX — St. Brigid of Ireland', saintName: 'St. Brigid of Ireland',
    badge: '✦ Uncommon', feast: 'February 1', patron: 'Ireland, dairy workers, poets, travelers',
    bio: 'She multiplied food, sheltered the poor, and wove the first cross from rushes at a dying man\'s bedside.',
    setNum: '040 / 060', backName: 'Brigid of Kildare', backDates: 'c. 451–525 AD · Leinster, Ireland',
    prayer: [
      'O St. Brigid, Mary of the Gaels, you who gave everything away and kept giving — intercede for all who are generous, all who serve the poor, and all who wonder if there will be enough.',
      'You founded monasteries and schools, cared for the sick and the stranger, and turned impossibility into daily grace. Pray for Ireland, for all who weave the cross into their ordinary lives, and for all who need to see that abundance comes from giving, not from hoarding.',
    ],
    bioParagraphs: [
      'Brigid of Kildare was born around 451 AD, the daughter of a pagan chieftain and a Christian slave woman. From childhood she gave away food to the poor with such constancy that her father tried to sell her. Legend says she gave away his jeweled sword to a leper, and when he asked why, she replied: "If I had the power I would give it all away for the glory of God."',
      'She founded a double monastery at Kildare — for both men and women — that became a center of learning, art, and hospitality that shaped Irish Christianity for centuries. She is credited with weaving the first Brigid\'s Cross from rushes at the deathbed of a pagan chieftain to explain the Christian faith. She is one of Ireland\'s three patron saints alongside Patrick and Columba.',
    ],
    facts: [
      { label: 'Also Known', value: 'Mary of the Gaels · Brigid of Kildare' },
      { label: 'Key Text',   value: 'Life of Brigid by Cogitosus, c. 650 AD' },
      { label: 'Patron of',  value: 'Ireland · Dairy workers · Poets · Travelers · Children' },
      { label: 'Symbols',    value: 'Brigid\'s Cross · Flame · Cow · Cloak' },
      { label: 'Death',      value: 'c. 525 AD · Kildare, Ireland' },
    ],
  },
  {
    slug: 'scholastica', navName: 'Scholastica',
    title: 'CRUX — St. Scholastica', saintName: 'St. Scholastica',
    badge: '✦ Uncommon', feast: 'February 10', patron: 'Nuns, education, convulsive children',
    bio: 'She prayed for a storm to keep her brother one more night. God answered her prayer and refused his.',
    setNum: '041 / 060', backName: 'Scholastica of Nursia', backDates: 'c. 480–547 AD · Nursia, Italy',
    prayer: [
      'O St. Scholastica, sister of St. Benedict, you who loved God with such directness that He answered your prayer over your brother\'s — intercede for all who love deeply, all who long for more time with those they hold dear.',
      'Teach us that love for God and love for others are not in competition. Remind us that tears shed in faith can open the floodgates of heaven. Pray for all dedicated to God\'s service, and for all who grieve the distance between them and those they love.',
    ],
    bioParagraphs: [
      'Scholastica was the twin sister of St. Benedict of Nursia, the father of Western monasticism. She consecrated her life to God from childhood and founded a monastery for women near Monte Cassino, where she and her brother would meet once a year to pray and discuss holy things.',
      'On their last meeting, when Benedict was about to leave for the night, Scholastica asked him to stay longer. He refused, citing his rule. She bowed her head and prayed — and a sudden violent storm prevented him from leaving. He said: "God forgive you — what have you done?" She replied: "I asked you and you refused. I asked God and He granted it." She died three days later, and Benedict saw her soul ascending to heaven as a dove.',
    ],
    facts: [
      { label: 'Also Known', value: 'Scholastica of Nursia · Twin of St. Benedict' },
      { label: 'Key Text',   value: 'Dialogues of Pope Gregory the Great, Book II, c. 593' },
      { label: 'Patron of',  value: 'Nuns · Education · Convulsive children · Rain' },
      { label: 'Symbols',    value: 'White dove · Book · Lily · Storm' },
      { label: 'Death',      value: 'c. 547 AD · Plombariola, near Monte Cassino, Italy' },
    ],
  },
  {
    slug: 'bonaventure', navName: 'Bonaventure',
    title: 'CRUX — St. Bonaventure', saintName: 'St. Bonaventure',
    badge: '✦ Uncommon', feast: 'July 15', patron: 'Workers, theologians',
    bio: 'Aquinas asked what library produced his learning. He pointed to the crucifix: "That is my library."',
    setNum: '042 / 060', backName: 'Giovanni di Fidanza', backDates: '1221–1274 AD · Bagnoregio, Italy',
    prayer: [
      'O St. Bonaventure, Seraphic Doctor, you who united profound learning with burning love — intercede for all who seek God through the mind, and for all who study theology without the love that makes it come alive.',
      'Teach us the truth you lived: that true wisdom begins and ends at the cross. Help us find in Christ crucified the source of all knowledge worth having. Pray for theologians, philosophers, and all who search for God in the life of the mind.',
    ],
    bioParagraphs: [
      'Bonaventure was born in 1221 in Tuscany and joined the Franciscans, studying at Paris under Alexander of Hales alongside Thomas Aquinas. When Aquinas visited Bonaventure\'s study and asked what library had produced his learning, Bonaventure pointed to the crucifix.',
      'He became Minister General of the Franciscans and reformed the Order with firm kindness. His masterwork, The Mind\'s Road to God, traces the soul\'s ascent through creation to union with the Trinity. He was made a cardinal and attended the Second Council of Lyon, where he died in 1274. He was declared a Doctor of the Church in 1588.',
    ],
    facts: [
      { label: 'Also Known', value: 'Seraphic Doctor · Minister General of the Franciscans' },
      { label: 'Key Text',   value: 'The Mind\'s Road to God · Breviloquium · Life of Francis' },
      { label: 'Patron of',  value: 'Theologians · Workers · Franciscans' },
      { label: 'Symbols',    value: 'Cardinal\'s hat · Crucifix · Book · Seraph' },
      { label: 'Death',      value: 'July 15, 1274 AD · Lyon, France · Council of Lyon' },
    ],
  },
  {
    slug: 'martin-tours', navName: 'Martin',
    title: 'CRUX — St. Martin of Tours', saintName: 'St. Martin of Tours',
    badge: '✦ Uncommon', feast: 'November 11', patron: 'Soldiers, France, beggars',
    bio: 'He cut his military cloak in half to cover a shivering beggar. That night he dreamed it was Christ.',
    setNum: '043 / 060', backName: 'Martin of Tours', backDates: 'c. 316–397 AD · Pannonia / Tours, Gaul',
    prayer: [
      'O St. Martin, soldier and bishop, you who saw Christ in the beggar before you knew it was Him — intercede for all soldiers, all who struggle to leave violence behind, and all who learn mercy by living it.',
      'Teach us to give before we understand the full cost, to see Christ in those who inconvenience us, and to trust that half a cloak given in love is more than a whole cloak kept for comfort. Pray for France, for all who serve, and for all who are cold.',
    ],
    bioParagraphs: [
      'Martin was born to a Roman military officer in Pannonia (modern Hungary) and became a soldier himself. At the gates of Amiens in winter, he met a naked beggar and cut his military cloak in half to share it. That night he dreamed of Christ wearing the half-cloak and heard Him say to the angels: "Martin, still only a catechumen, has clothed me." Martin was baptized immediately.',
      'He refused further military service — "I am a soldier of Christ; it is not lawful for me to fight" — and eventually became Bishop of Tours in 371. He founded one of the first monasteries in the West at Ligugé and preached tirelessly across Gaul. He died in 397, exhausted from tireless service. More churches are dedicated to him in France than to any other saint.',
    ],
    facts: [
      { label: 'Also Known', value: 'Martin of Tours · Apostle of Gaul' },
      { label: 'Key Text',   value: 'Life of Martin by Sulpicius Severus, c. 397' },
      { label: 'Patron of',  value: 'France · Soldiers · The poor · Beggars · Innkeepers' },
      { label: 'Symbols',    value: 'Half-cloak · Goose · Beggar · Bishop\'s crozier' },
      { label: 'Death',      value: 'November 8, 397 AD · Candes-Saint-Martin, Gaul' },
    ],
  },
  {
    slug: 'nicolas', navName: 'Nicholas',
    title: 'CRUX — St. Nicholas of Myra', saintName: 'St. Nicholas of Myra',
    badge: '✦ Uncommon', feast: 'December 6', patron: 'Children, sailors, the falsely accused',
    bio: 'He threw bags of gold through a poor man\'s window at night — so quietly that no one would know.',
    setNum: '044 / 060', backName: 'Nicholas of Myra', backDates: 'c. 270–343 AD · Patara / Myra, Lycia',
    prayer: [
      'O St. Nicholas, bishop and wonder-worker, you who gave in secret and defended the defenseless without counting the cost — intercede for all children, for the poor, and for all who are falsely accused.',
      'Teach us to give without needing to be known for it. Remind us that true charity is the kind that seeks no credit. Pray for all who are in danger, and for those who have nothing this winter.',
    ],
    bioParagraphs: [
      'Nicholas was born to wealthy Christian parents in Patara (modern Turkey) who died in an epidemic when he was young. He gave his entire inheritance to those in need, anonymously. His most famous act: learning that a poor man could not afford dowries for his three daughters, he threw bags of gold through the man\'s window three nights in a row — one for each daughter. This is the origin of stockings by the fireplace.',
      'Nicholas became Bishop of Myra and attended the Council of Nicaea in 325. He was venerated across both East and West for miracles at sea, protection of the innocent, and extraordinary generosity. His name is the root of Santa Claus — a centuries-long transformation that does not diminish who he actually was: a bishop who gave everything away and asked for nothing in return.',
    ],
    facts: [
      { label: 'Also Known', value: 'Nicholas of Myra · Nikolaos · Origin of Santa Claus' },
      { label: 'Key Text',   value: 'Life of Nicholas by Methodius of Constantinople, c. 800' },
      { label: 'Patron of',  value: 'Children · Sailors · The poor · Russia · Pawnbrokers' },
      { label: 'Symbols',    value: 'Three golden balls · Bags of gold · Anchor · Bishop\'s vestments' },
      { label: 'Death',      value: 'c. 343 AD · Myra, Lycia (modern Turkey)' },
    ],
  },
  {
    slug: 'rose-lima', navName: 'Rose',
    title: 'CRUX — St. Rose of Lima', saintName: 'St. Rose of Lima',
    badge: '✦ Uncommon', feast: 'August 23', patron: 'The Americas, Peru, gardeners',
    bio: 'The first saint of the Americas cut her hair and rubbed pepper on her face so no one would call her beautiful.',
    setNum: '045 / 060', backName: 'Isabel Flores de Oliva', backDates: '1586–1617 AD · Lima, Peru',
    prayer: [
      'O St. Rose of Lima, first saint of the Americas, you who accepted suffering not as punishment but as participation in the Passion of Christ — intercede for all of Latin America, for those who bear pain they did not choose, and for all who find the love of God in the darkest places.',
      'Teach us that true beauty is interior, that the path to God sometimes runs through fire, and that radical love for Christ makes the impossible ordinary. Pray for Peru, for all who are poor and forgotten, and for all who carry heavy crosses.',
    ],
    bioParagraphs: [
      'Rose was born Isabel de Flores in Lima, Peru in 1586, a child so beautiful that neighbors called her Rose. Troubled by the attention her beauty attracted, she cut her hair and rubbed pepper on her face to disfigure it. She became a Dominican tertiary and spent her life in intense prayer, penance, and care for the poor and sick of Lima, working from a hermitage in her family\'s garden.',
      'Her mystical life included extraordinary suffering — visions, spiritual desolation, and physical illness she accepted as participation in Christ\'s Passion. She cared for the indigenous poor, the sick, and enslaved people when Lima had no social services. She died at thirty-one in 1617 and was canonized in 1671 — the first person born in the Americas to be canonized.',
    ],
    facts: [
      { label: 'Also Known', value: 'Isabel Flores de Oliva · Rose of the New World' },
      { label: 'Key Text',   value: 'Life of St. Rose by Leonard Hansen, 1664' },
      { label: 'Patron of',  value: 'Peru · Americas · Philippines · Gardeners · Florists' },
      { label: 'Symbols',    value: 'Roses · Crown of thorns · Anchor · Dominican habit' },
      { label: 'Death',      value: 'August 24, 1617 AD · Lima, Peru · Age 31' },
    ],
  },
  {
    slug: 'aloysius', navName: 'Aloysius',
    title: 'CRUX — St. Aloysius Gonzaga', saintName: 'St. Aloysius Gonzaga',
    badge: '✦ Uncommon', feast: 'June 21', patron: 'Youth, students, AIDS patients',
    bio: 'He gave up a principality to become a Jesuit. Then he died at 23 washing plague victims.',
    setNum: '046 / 060', backName: 'Luigi Gonzaga', backDates: '1568–1591 AD · Castiglione delle Stiviere, Italy',
    prayer: [
      'O St. Aloysius, patron of youth, you who chose a pallet over a palace and died in a hospital at twenty-three — intercede for all young people, for all students, and for all who are sick and dying alone.',
      'Teach us that the highest form of nobility is service, and that giving up what the world values is not loss but freedom. Pray for all who are young and searching, and for all who pour themselves out in love for the sick.',
    ],
    bioParagraphs: [
      'Aloysius Gonzaga was the eldest son of the Marquis of Castiglione, heir to a powerful Italian noble family. At sixteen, after a spiritual crisis, he renounced his inheritance entirely and entered the Society of Jesus over his father\'s fierce objection. He embraced rigorous penances and had to be reined in by his spiritual director, St. Robert Bellarmine.',
      'When a plague devastated Rome in 1591, Aloysius volunteered to nurse the sick at the hospital of San Sisto, carrying patients on his back and washing their wounds. He contracted the plague himself and died on June 21, 1591, at the age of twenty-three. He is the patron of youth and, in the twentieth century, of AIDS patients.',
    ],
    facts: [
      { label: 'Also Known', value: 'Luigi Gonzaga · Patron of Youth' },
      { label: 'Key Text',   value: 'Life of Aloysius by Virginia Conti, 1606' },
      { label: 'Patron of',  value: 'Youth · Students · Jesuit novices · AIDS patients' },
      { label: 'Symbols',    value: 'Lily · Crown of thorns · Skull · Jesuit habit' },
      { label: 'Death',      value: 'June 21, 1591 AD · Rome · Age 23 · Plague' },
    ],
  },
  {
    slug: 'dominic-savio', navName: 'Dominic Savio',
    title: 'CRUX — St. Dominic Savio', saintName: 'St. Dominic Savio',
    badge: '✦ Uncommon', feast: 'March 9', patron: 'Youth, choirboys, juvenile delinquents',
    bio: '"Death rather than sin." He wrote it at age twelve and lived it at fifteen.',
    setNum: '047 / 060', backName: 'Domenico Savio', backDates: '1842–1857 AD · Riva di Chieri, Italy',
    prayer: [
      'O St. Dominic Savio, youngest non-martyr to be canonized, you who lived with such intensity at so young an age — intercede for all children and teenagers, for all who are trying to be holy in ordinary schools and ordinary towns.',
      'Teach us that holiness is not reserved for adults or for dramatic moments. Remind us that God calls the young with the same urgency as the old. Pray for all students, and for every young person who wants to be good but does not know how.',
    ],
    bioParagraphs: [
      'Dominic Savio was born in 1842 near Turin and came under the influence of Don Bosco at the Oratory of St. Francis de Sales at age twelve. He was immediately different: when Don Bosco asked what he brought to the school, he replied: "I bring a heart that wants to belong completely to God." His motto, chosen at his first communion: "Death rather than sin."',
      'He organized the Company of the Immaculate Conception among his peers to support each other in virtue, and intervened in fights at school with a calm authority that made older boys back down. He fell ill with pleurisy and died just before his fifteenth birthday in 1857. Don Bosco wrote his biography. He was canonized in 1954 — the youngest non-martyr saint at that time.',
    ],
    facts: [
      { label: 'Also Known', value: 'Domenico Savio · Student of Don Bosco' },
      { label: 'Key Text',   value: 'Life of Dominic Savio by Don Bosco, 1859' },
      { label: 'Patron of',  value: 'Youth · Choirboys · Juvenile delinquents · Falsely accused' },
      { label: 'Symbols',    value: 'Lily · Book · Oratory of Don Bosco · Crucifix' },
      { label: 'Death',      value: 'March 9, 1857 AD · Mondonio, Italy · Age 14' },
    ],
  },
  {
    slug: 'kateri', navName: 'Kateri',
    title: 'CRUX — St. Kateri Tekakwitha', saintName: 'St. Kateri Tekakwitha',
    badge: '✦ Uncommon', feast: 'July 14', patron: 'Native Americans, ecologists, Canada',
    bio: 'She converted against her tribe\'s wishes, walked alone to a Christian settlement, and died at 24. After death, her smallpox scars disappeared.',
    setNum: '048 / 060', backName: 'Kateri Tekakwitha', backDates: '1656–1680 AD · Ossernenon / Sault Saint-Louis',
    prayer: [
      'O St. Kateri Tekakwitha, Lily of the Mohawks, you who found Christ without a church building, without family support, and against every social pressure — intercede for all Native peoples, for all converts who stand alone, and for all who seek God in the midst of nature.',
      'You showed that the Gospel is not a European possession but belongs to every people in every land. Pray for all indigenous communities, for all who have been displaced and wounded by history, and for those who find God beneath open skies.',
    ],
    bioParagraphs: [
      'Kateri was born in 1656 at Ossernenon (Auriesville, New York) to a Mohawk chief father and a Christian Algonquin mother. A smallpox epidemic killed her parents and baby brother when she was four, leaving her severely scarred and with impaired vision. She converted to Christianity at age twenty over fierce opposition from her tribe, then fled to a Christian Mohawk settlement near Montreal.',
      'There she lived a life of extraordinary prayer, penance, and contemplation, making a vow of perpetual virginity — revolutionary in her culture. She died at twenty-four on April 17, 1680. Witnesses reported that minutes after her death her smallpox scars completely vanished, leaving her face clear and peaceful. She was canonized by Pope Benedict XVI in 2012 — the first Native North American saint.',
    ],
    facts: [
      { label: 'Also Known', value: 'Lily of the Mohawks · Kateri of the Mohawks' },
      { label: 'Key Text',   value: 'Life by Father Claude Chauchetière, c. 1685' },
      { label: 'Patron of',  value: 'Native Americans · Ecology · Environment · Canada' },
      { label: 'Symbols',    value: 'Turtle · Lily · Cross · Birch tree' },
      { label: 'Death',      value: 'April 17, 1680 AD · Sault Saint-Louis, Quebec · Age 24' },
    ],
  },
  {
    slug: 'elizabeth-ann', navName: 'Elizabeth Ann',
    title: 'CRUX — St. Elizabeth Ann Seton', saintName: 'St. Elizabeth Ann Seton',
    badge: '✦ Uncommon', feast: 'January 4', patron: 'Catholic schools, widows',
    bio: 'A widowed Protestant mother of five, she converted to Catholicism and built the Catholic school system in America.',
    setNum: '049 / 060', backName: 'Elizabeth Ann Bayley Seton', backDates: '1774–1821 AD · New York City',
    prayer: [
      'O St. Elizabeth Ann Seton, first American-born saint, you who lost everything — husband, wealth, social standing — and built something new from the wreckage — intercede for all widows, for all parents raising children alone, and for all who have had to start over.',
      'Teach us that God does not waste suffering but shapes it into mission. Pray for Catholic schools and the teachers who carry them, for all who educate the young in the faith, and for all who have found their vocation through loss.',
    ],
    bioParagraphs: [
      'Elizabeth Ann Bayley was born in 1774 in New York City into an Anglican family of social prominence. She married William Seton and they had five children. When her husband\'s business collapsed, they sailed to Italy hoping sea air would cure his tuberculosis. He died in Livorno in 1803. During her return home, exposure to Italian Catholicism — particularly the Real Presence in the Eucharist — transformed her. She converted in 1805.',
      'She moved to Baltimore and opened a school for poor girls, founding the Sisters of Charity — the first American religious community. She went on to establish the first free Catholic school in America and the first American Catholic orphanage. She died at forty-six in 1821, having built the infrastructure of Catholic education in the United States from nothing. Canonized 1975.',
    ],
    facts: [
      { label: 'Also Known', value: 'Mother Seton · First American-Born Saint' },
      { label: 'Key Text',   value: 'Journals and Letters of Elizabeth Seton · 1805–1821' },
      { label: 'Patron of',  value: 'Catholic schools · Widows · Loss of parents · Seafarers' },
      { label: 'Symbols',    value: 'School · Widow\'s veil · Cross · Book' },
      { label: 'Death',      value: 'January 4, 1821 AD · Emmitsburg, Maryland · Age 46' },
    ],
  },
  {
    slug: 'charles-lwanga', navName: 'Charles Lwanga',
    title: 'CRUX — St. Charles Lwanga', saintName: 'St. Charles Lwanga',
    badge: '✦ Uncommon', feast: 'June 3', patron: 'African youth, Catholic Action',
    bio: 'He protected young pages from the king\'s immorality. They were burned alive at Namugongo. As the fire rose he said: "It burns, but it is nothing."',
    setNum: '050 / 060', backName: 'Charles Lwanga', backDates: 'c. 1865–1886 AD · Buganda, Uganda',
    prayer: [
      'O St. Charles Lwanga and companions, martyrs of Uganda, you who died to protect the young and to keep faith with Christ in a land that had barely heard His name — intercede for all of Africa, for all young people facing corruption in power, and for all who die for the faith today.',
      'Your courage at Namugongo shames every easy compromise. Teach us that fidelity is not passive but sometimes demands the supreme cost. Pray for Uganda, for African Christianity, and for all who stand between the powerful and the vulnerable.',
    ],
    bioParagraphs: [
      'Charles Lwanga was the chief of the royal pages at the court of Kabaka Mwanga II of Buganda. When King Mwanga began targeting young Catholic and Anglican pages who refused his sexual advances, Charles protected them and baptized several catechumens the night before their arrest.',
      'In May 1886, Mwanga ordered the execution of all pages who called themselves Christian. Twenty-two young men — ranging in age from thirteen to thirty — were marched over forty miles to Namugongo, then burned alive on June 3, 1886. Charles, bound with reeds, reportedly said: "It burns, but it is nothing compared to the fires of hell." He was canonized by Pope Paul VI in 1964 — the first canonization of Black African martyrs.',
    ],
    facts: [
      { label: 'Also Known', value: 'Charles Lwanga and 21 Companions · Martyrs of Uganda' },
      { label: 'Key Text',   value: 'Roman Martyrology · June 3, 1886 · Namugongo records' },
      { label: 'Patron of',  value: 'African youth · Catholic Action · Uganda' },
      { label: 'Symbols',    value: 'Flame · Palm · Reeds · Ugandan landscape' },
      { label: 'Martyrdom',  value: 'Burned alive, June 3, 1886 · Namugongo, Uganda · Age ~21' },
    ],
  },
  {
    slug: 'maria-goretti', navName: 'Maria Goretti',
    title: 'CRUX — St. Maria Goretti', saintName: 'St. Maria Goretti',
    badge: '✦ Uncommon', feast: 'July 6', patron: 'Youth, chastity, victims of assault',
    bio: 'She forgave her killer from her deathbed at age 11. He converted in prison after a vision of her — then stood beside her mother at her canonization.',
    setNum: '051 / 060', backName: 'Maria Teresa Goretti', backDates: '1890–1902 AD · Corinaldo / Netuno, Italy',
    prayer: [
      'O St. Maria Goretti, martyr of purity and patron of victims, you who forgave the one who killed you and prayed for his salvation from your deathbed — intercede for all who have been harmed, for all who struggle to forgive, and for all young people facing violence.',
      'Teach us the courage to say no, and the greater courage to forgive. Remind us that mercy is not weakness but the most powerful force in human history. Pray for all survivors of assault, for all who carry wounds that will not heal, and for all who need to know that God sees them.',
    ],
    bioParagraphs: [
      'Maria Goretti was born in 1890 in the Marche region of Italy. Her father died of malaria when she was nine, leaving her mother with six children and almost nothing. The family shared a farmhouse with the Serenelli family, whose eighteen-year-old son Alessandro became obsessed with Maria.',
      'On July 5, 1902, Alessandro attacked her. She refused and said: "No! It is a sin — God does not want it!" He stabbed her fourteen times. She died the following day, but before she died she said she forgave Alessandro and hoped to see him in heaven. He was sentenced to thirty years. After eight years he claimed Maria appeared to him in a vision handing him flowers. He converted, became a lay brother, and attended her canonization in 1950 — standing beside her mother, who was also present.',
    ],
    facts: [
      { label: 'Also Known', value: 'Maria Teresa Goretti · Martyr of Purity' },
      { label: 'Key Text',   value: 'Testimony of Alessandro Serenelli · 1950 canonization record' },
      { label: 'Patron of',  value: 'Youth · Chastity · Victims of assault · Teenage girls' },
      { label: 'Symbols',    value: 'White lily · Knife · Palm · Simple dress' },
      { label: 'Martyrdom',  value: 'Stabbed July 5, died July 6, 1902 · Netuno, Italy · Age 11' },
    ],
  },
  {
    slug: 'gemma', navName: 'Gemma',
    title: 'CRUX — St. Gemma Galgani', saintName: 'St. Gemma Galgani',
    badge: '✦ Uncommon', feast: 'April 11', patron: 'Students, pharmacists, back pain sufferers',
    bio: 'She received the stigmata at 21 and was told by her spiritual directors to pray it would stop. It kept coming back.',
    setNum: '052 / 060', backName: 'Gemma Umberta Pia Galgani', backDates: '1878–1903 AD · Camigliano, Italy',
    prayer: [
      'O St. Gemma Galgani, mystic and stigmatist, you who bore the wounds of Christ with such intensity that your spiritual directors barely knew what to do with you — intercede for all who suffer inexplicably, for all who carry hidden wounds, and for all who feel that God asks too much.',
      'Teach us that suffering joined to Christ\'s Passion is never wasted. Pray for all who are in pain today, for all students and pharmacists who care for the sick, and for all who long to give everything but do not know how.',
    ],
    bioParagraphs: [
      'Gemma Galgani was born in 1878 in Tuscany. By the time she was a young adult, she had lost most of her family to tuberculosis, been gravely ill herself with spinal meningitis, and exhausted her hope of entering religious life. In 1899, after a novena to St. Gabriel Possenti, she was reportedly cured. Then the mystical phenomena began.',
      'She began receiving the stigmata — the wounds of Christ — in 1899, with marks on her hands, feet, and side that bled every Thursday and Friday. Her ecstasies were witnessed by many and investigated by theologians. She was told by her spiritual directors to pray that it would stop. It didn\'t. She died of tuberculosis at age twenty-five on April 11, 1903. Canonized in 1940, she remains one of the most extraordinary mystics of the modern Church.',
    ],
    facts: [
      { label: 'Also Known', value: 'The Passion Flower of Lucca · Stigmatist of Lucca' },
      { label: 'Key Text',   value: 'Autobiography of Gemma Galgani · Letters, 1899–1903' },
      { label: 'Patron of',  value: 'Students · Pharmacists · Back pain · Loss of parents' },
      { label: 'Symbols',    value: 'Stigmata · White lily · Crown of thorns · Passion symbols' },
      { label: 'Death',      value: 'April 11, 1903 AD · Lucca, Italy · Age 25 · Tuberculosis' },
    ],
  },
  {
    slug: 'pier-giorgio', navName: 'Pier Giorgio',
    title: 'CRUX — Bl. Pier Giorgio Frassati', saintName: 'Bl. Pier Giorgio Frassati',
    badge: '✦✦ Rare', feast: 'July 4', patron: 'Youth, mountain climbers, students',
    bio: 'He scaled the Alps for fun and carried the poor on his back by night. His family didn\'t know either thing until he died.',
    setNum: '053 / 060', backName: 'Pier Giorgio Frassati', backDates: '1901–1925 AD · Turin, Italy',
    prayer: [
      'O Blessed Pier Giorgio Frassati, man of the Beatitudes, you who hid your charity so well that your family only discovered it at your funeral — intercede for all young people, for all who love the mountains, and for all who serve the poor without needing credit.',
      'Teach us that holiness is not grim but joyful, not isolated but deeply human. Remind us that the Eucharist is the source of every true adventure. Pray for all who are young and searching, and for all who give quietly in a world that demands recognition.',
    ],
    bioParagraphs: [
      'Pier Giorgio Frassati was born in 1901 in Turin to a wealthy and prominent family — his father was founder of La Stampa newspaper and later Italian ambassador to Germany. Pier Giorgio was intensely social, athletic, and funny, known for mountain climbing and elaborate pranks. He was also deeply Eucharistic: attending daily Mass, praying the rosary, and belonging to the Third Order of St. Dominic.',
      'Unknown to his family, he spent enormous amounts of his own money on the poor and sick of Turin, visiting slums, delivering food, giving away his coat and trolley money. When he died of polio at twenty-four — contracted from the poor he visited — the wealthy funeral his family expected was overwhelmed by thousands of the poor coming to mourn a man they knew and his family did not. Beatified by John Paul II in 1990, who called him "a man of the Beatitudes."',
    ],
    facts: [
      { label: 'Also Known', value: 'Man of the Beatitudes · Verso l\'Alto — "Toward the Heights"' },
      { label: 'Key Text',   value: 'Letters of Pier Giorgio Frassati · Biography by Luciana Frassati' },
      { label: 'Patron of',  value: 'Youth · Mountain climbers · Students · Third Order Dominicans' },
      { label: 'Symbols',    value: 'Mountain · Rope · Dominican habit · Eucharist' },
      { label: 'Death',      value: 'July 4, 1925 AD · Turin, Italy · Polio · Age 24' },
    ],
  },
  {
    slug: 'edith-stein', navName: 'Edith Stein',
    title: 'CRUX — St. Edith Stein', saintName: 'St. Teresa Benedicta of the Cross',
    badge: '✦✦ Rare', feast: 'August 9', patron: 'Europe, martyrs, converts',
    bio: 'She was a Jewish philosopher, an atheist, a Husserl student, a Carmelite nun, and a martyr at Auschwitz. She found God reading Teresa of Avila all night.',
    setNum: '054 / 060', backName: 'Edith Stein · Sr. Teresa Benedicta of the Cross', backDates: '1891–1942 AD · Breslau / Auschwitz',
    prayer: [
      'O St. Teresa Benedicta of the Cross, martyr of truth and love, you who followed reason all the way to the Cross and followed the Cross all the way to the end — intercede for all intellectuals, for all Jews, and for all who seek God through the mind.',
      'Teach us that truth and faith are not enemies. Pray for the conversion of hearts hardened by ideology, for all who died in the Holocaust, and for Europe, which you loved and which failed you.',
    ],
    bioParagraphs: [
      'Edith Stein was born in Breslau in 1891 into an observant Jewish family. She became one of the most brilliant philosophers of her era, earning a doctorate under Edmund Husserl and becoming his assistant at Freiburg. She had lost her faith as a teenager. One night she picked up the autobiography of Teresa of Avila at random and read it through until dawn. At the end she said: "That is the truth." She was baptized in 1922.',
      'She taught and wrote widely, advocating for women and opposing National Socialism. She eventually entered the Carmelite order as Sister Teresa Benedicta of the Cross. When the Nazis invaded the Netherlands in 1942, she and her sister Rosa were arrested and deported to Auschwitz. She died in the gas chambers on August 9, 1942. She was canonized in 1998 and declared co-patroness of Europe by Pope John Paul II.',
    ],
    facts: [
      { label: 'Also Known', value: 'Teresa Benedicta of the Cross · Edith Stein' },
      { label: 'Key Text',   value: 'The Science of the Cross · Finite and Eternal Being' },
      { label: 'Patron of',  value: 'Europe · Martyrs · Converts · Germany · Loss of parents' },
      { label: 'Symbols',    value: 'Cross · Star of David · Carmelite habit · Philosophical texts' },
      { label: 'Martyrdom',  value: 'Auschwitz gas chamber, August 9, 1942 · Poland · Age 50' },
    ],
  },
  {
    slug: 'padre-pio', navName: 'Padre Pio',
    title: 'CRUX — St. Padre Pio', saintName: 'St. Pio of Pietrelcina',
    badge: '✦✦ Rare', feast: 'September 23', patron: 'Capuchins, stress relief, civil defense',
    bio: 'He bore the stigmata for fifty years, heard confessions for twelve hours a day, and told penitents their sins before they spoke.',
    setNum: '055 / 060', backName: 'Francesco Forgione · Padre Pio', backDates: '1887–1968 AD · Pietrelcina / San Giovanni Rotondo',
    prayer: [
      'O St. Pio of Pietrelcina, priest and confessor, you who carried the wounds of Christ for fifty years without complaint — intercede for all who are suffering, all who are struggling with sin, and all who are afraid to go to confession.',
      '"Pray, hope, and don\'t worry." Give us this simplicity. Teach us to trust God with the future we cannot control. Pray for all who are in pain — physical or spiritual — and bring us to the Sacrament of Reconciliation where Christ waits for us.',
    ],
    bioParagraphs: [
      'Francesco Forgione was born in 1887 in Pietrelcina, a poor village in southern Italy. He entered the Capuchin Franciscans and was ordained in 1910. On September 20, 1918, while praying before a crucifix, he received the stigmata — the five wounds of Christ in his hands, feet, and side. He bore them visibly for fifty years, until they closed completely two days before his death.',
      'He spent up to twelve hours a day in the confessional and was known for reading souls — telling penitents their sins before they confessed them. Reports of bilocation, miraculous healings, and the odor of sanctity surrounded his life. He founded the Casa Sollievo della Sofferenza hospital in San Giovanni Rotondo. Despite Vatican investigations that restricted his ministry at times, his spiritual children numbered in the millions. He died in 1968 and was canonized in 2002.',
    ],
    facts: [
      { label: 'Also Known', value: 'Padre Pio · Pio of Pietrelcina · The Stigmatist of Gargano' },
      { label: 'Key Text',   value: 'Letters of Padre Pio · Epistolario, Vols. I–IV' },
      { label: 'Patron of',  value: 'Capuchin Franciscans · Stress relief · Civil defense' },
      { label: 'Symbols',    value: 'Stigmata · Capuchin habit · Fingerless gloves · Confessional' },
      { label: 'Death',      value: 'September 23, 1968 AD · San Giovanni Rotondo, Italy · Age 81' },
    ],
  },
  {
    slug: 'miguel-pro', navName: 'Miguel Pro',
    title: 'CRUX — Bl. Miguel Pro', saintName: 'Bl. Miguel Agustín Pro',
    badge: '✦ Uncommon', feast: 'November 23', patron: 'Mexico, persecuted Christians',
    bio: 'He was shot by firing squad in Mexico City. His last words, arms spread wide: "¡Viva Cristo Rey!"',
    setNum: '056 / 060', backName: 'Miguel Agustín Pro Juárez', backDates: '1891–1927 AD · Guadalupe, Mexico',
    prayer: [
      'O Blessed Miguel Pro, martyr of Mexico, you who disguised yourself as a beggar, a chauffeur, a mechanic — anything to reach the people who needed the sacraments — intercede for all priests facing persecution, for Mexico, and for all who serve God in secret.',
      'Your joy in the face of death shames every small fear. Teach us to live for Christ with the same delight you brought to every disguise and every dangerous Mass. Pray for the Church in Mexico and for all who cry "¡Viva Cristo Rey!" with their lives.',
    ],
    bioParagraphs: [
      'Miguel Pro was born in 1891 in Guadalupe, Mexico and entered the Society of Jesus. Anti-clerical laws forced him to complete seminary training abroad. He was ordained in 1925 and returned to Mexico in 1926 — just as the Cristero War began and all public religious practice was banned.',
      'For a year he served the Church in secret, using disguises to celebrate Mass, hear confessions, and bring the sacraments to those who could not find them. He was arrested on a false accusation. On November 23, 1927, he was executed by firing squad without trial, his arms extended in a cross as he cried "¡Viva Cristo Rey!" The government photographed the execution as propaganda; the photos became icons of courage.',
    ],
    facts: [
      { label: 'Also Known', value: 'Miguel Agustín Pro Juárez · Martyr of Mexico' },
      { label: 'Key Text',   value: 'Vatican beatification record, 1988 · Execution photographs, 1927' },
      { label: 'Patron of',  value: 'Mexico · Persecuted Christians · Jesuit martyrs' },
      { label: 'Symbols',    value: 'Arms outstretched · Mexican flag · Priest\'s stole · Disguises' },
      { label: 'Martyrdom',  value: 'Shot by firing squad, November 23, 1927 · Mexico City · Age 36' },
    ],
  },
  {
    slug: 'oscar-romero', navName: 'Romero',
    title: 'CRUX — St. Oscar Romero', saintName: 'St. Oscar Arnulfo Romero',
    badge: '✦ Uncommon', feast: 'March 24', patron: 'El Salvador, the Americas, persecuted Christians',
    bio: 'He was shot at the altar during Mass. His homilies were so dangerous the government jammed the radio signals.',
    setNum: '057 / 060', backName: 'Oscar Arnulfo Romero y Galdámez', backDates: '1917–1980 AD · Ciudad Barrios / San Salvador',
    prayer: [
      'O St. Oscar Romero, archbishop and martyr, you who became the voice of the voiceless when every other voice had been silenced — intercede for the poor of El Salvador, for all who are persecuted for justice, and for all who preach truth at personal cost.',
      'Teach us that the Church\'s first option must be for those the world has forgotten. Pray for El Salvador and all of Central America, for all who work for justice in dangerous places, and for all priests who celebrate Mass wondering if it will be their last.',
    ],
    bioParagraphs: [
      'Oscar Romero was born in 1917 in rural El Salvador. He was considered a safe, conservative choice when appointed Archbishop of San Salvador in 1977 — and indeed, he arrived cautious. Then his friend, Jesuit priest Rutilio Grande, was assassinated by right-wing death squads for organizing the rural poor. Romero went to see the body and came back transformed.',
      'For the next three years, he was the single most prominent voice for the poor and the murdered of El Salvador, broadcasting weekly homilies the government attempted to jam. On March 23, 1980, he called on soldiers to disobey orders to kill their own people. The next evening, March 24, he was shot through the heart at the altar of a small chapel during Mass. He was canonized in 2018.',
    ],
    facts: [
      { label: 'Also Known', value: 'Oscar of the Americas · Voice of the Voiceless · San Romero' },
      { label: 'Key Text',   value: 'Homilies of Archbishop Romero · 1977–1980 · Vatican Radio Archive' },
      { label: 'Patron of',  value: 'El Salvador · Americas · Persecuted Christians · The poor' },
      { label: 'Symbols',    value: 'Chalice · Altar · Microphone · Cross' },
      { label: 'Martyrdom',  value: 'Shot at the altar, March 24, 1980 · San Salvador · Age 62' },
    ],
  },
  {
    slug: 'jacinta', navName: 'Jacinta',
    title: 'CRUX — St. Jacinta Marto', saintName: 'St. Jacinta Marto',
    badge: '✦ Uncommon', feast: 'February 20', patron: 'The sick, victims of war, children',
    bio: 'She was seven when Our Lady appeared. She accepted suffering so generously that her mother thought she had lost her mind.',
    setNum: '058 / 060', backName: 'Jacinta de Jesus Marto', backDates: '1910–1920 AD · Aljustrel, Fátima, Portugal',
    prayer: [
      'O St. Jacinta, little seer of Fátima, you who saw the vision of hell and offered yourself in reparation without being asked — intercede for all children, for all who suffer from war and sickness, and for all who want to console the Heart of Mary.',
      'Remind us that the great question of our lives is whether we love God enough to let Him use us. Pray for the conversion that Our Lady asked for, for peace in the world, and for the smallest and most forgotten among us.',
    ],
    bioParagraphs: [
      'Jacinta Marto was seven years old in May 1917 when the Virgin Mary appeared to her, her brother Francisco, and their cousin Lucia at Fátima. From that day forward, her life was marked by an intensity of prayer and sacrifice that astonished everyone around her.',
      'She became consumed with the conversion of sinners and offering her suffering in reparation for those who offend God. When she fell ill with pleurisy and tuberculosis, she refused what could ease her pain, offering it deliberately. She died alone in a Lisbon hospital on February 20, 1920, at age nine. She was canonized along with her brother Francisco by Pope Francis in 2017.',
    ],
    facts: [
      { label: 'Also Known', value: 'Jacinta of Fátima · Seer of Fátima' },
      { label: 'Key Text',   value: 'Fátima in Lucia\'s Own Words · Jacinta by Lucia dos Santos' },
      { label: 'Patron of',  value: 'The sick · Those who suffer · Victims of war · Children' },
      { label: 'Symbols',    value: 'Rosary · White lily · Angel · Blue mantle of Mary' },
      { label: 'Death',      value: 'February 20, 1920 AD · Lisbon, Portugal · Age 9' },
    ],
  },
  {
    slug: 'francisco', navName: 'Francisco',
    title: 'CRUX — St. Francisco Marto', saintName: 'St. Francisco Marto',
    badge: '✦ Uncommon', feast: 'February 20', patron: 'The sick, hidden prayer, reparation',
    bio: '"I want to console Our Lord." Everything he did at Fátima came from that one desire.',
    setNum: '059 / 060', backName: 'Francisco de Jesus Marto', backDates: '1908–1919 AD · Aljustrel, Fátima, Portugal',
    prayer: [
      'O St. Francisco, little seer of Fátima, you who were the most silent of the three and whose only wish was to console the God who is so often offended — intercede for all who are hidden and quiet, for all who pray without being seen, and for all who carry God\'s grief in their hearts.',
      'Teach us your simplicity: to love God not for what we receive but for who He is. Pray for the intentions of the Immaculate Heart of Mary, for the conversion of sinners, and for all who are too young and too sick and too forgotten.',
    ],
    bioParagraphs: [
      'Francisco Marto was eight years old in May 1917 when he saw the Virgin Mary at Fátima along with his sister Jacinta and cousin Lucia. Unlike them, Francisco could not hear the Lady speak — he only saw her. And yet something in what he saw changed him completely. He spent most of his remaining life in the church or in the hills, praying the rosary in silence.',
      'Francisco never preached about Fátima. His desire was single and simple: to console the Hidden Jesus in the tabernacle, who he felt was sad and unloved. When he fell ill with influenza in the epidemic of 1918, he accepted it quietly. He died on April 4, 1919, at age eleven, having received his First Communion only days before. He was canonized alongside his sister Jacinta by Pope Francis in 2017.',
    ],
    facts: [
      { label: 'Also Known', value: 'Francisco of Fátima · Seer of Fátima' },
      { label: 'Key Text',   value: 'Fátima in Lucia\'s Own Words · Francisco by Lucia dos Santos' },
      { label: 'Patron of',  value: 'The sick · Reparation · Hidden prayer · Portugal' },
      { label: 'Symbols',    value: 'Rosary · Angel · Sun · Cave of Loca do Cabeço' },
      { label: 'Death',      value: 'April 4, 1919 AD · Aljustrel, Portugal · Age 11' },
    ],
  },
  {
    slug: 'jose-sanchez', navName: 'José',
    title: 'CRUX — St. José Sánchez del Río', saintName: 'St. José Sánchez del Río',
    badge: '✦ Uncommon', feast: 'February 10', patron: 'Youth, Mexico, Cristero martyrs',
    bio: 'He was 14. They skinned the soles of his feet and forced him to walk to his grave. He carved "Viva Cristo Rey" in the dirt with his own blood.',
    setNum: '060 / 060', backName: 'José Luis Sánchez del Río', backDates: '1913–1928 AD · Sahuayo, Michoacán, Mexico',
    prayer: [
      'O St. José, Cristero martyr, you who were only a boy and yet died with the courage of a thousand soldiers — intercede for all young people facing injustice, for Mexico, and for all who are asked to pay a price no child should have to pay.',
      'Remind us that age is no barrier to heroism, and that Christ\'s name cried out in blood is a prayer that does not go unanswered. Pray for all who suffer persecution today, for the youth of Mexico, and for all who carry a country\'s grief in their hearts.',
    ],
    bioParagraphs: [
      'José Sánchez del Río was born in 1913 in Sahuayo, Michoacán, during the Mexican Revolution. When the Cristero War broke out against the anti-Catholic government, he begged his mother\'s permission to join the resistance. He was fourteen. Initially denied a gun, he served as a flag bearer, drawing enemy fire so Cristero fighters could reload.',
      'When his commander\'s horse was shot, José gave his own horse and was captured. In prison he was tortured — guards cut the skin from the soles of his feet and forced him to walk through the town to his execution site, watching his footprints fill with blood. He refused to renounce his faith. He traced "Viva Cristo Rey" in the dirt with his own blood. He was shot on February 10, 1928. He was fourteen years old. Canonized by Pope Francis in 2016.',
    ],
    facts: [
      { label: 'Also Known', value: 'Joselito · The Boy Martyr of Mexico' },
      { label: 'Key Text',   value: 'Beatification record 2005 · Canonization 2016 · Cristero War accounts' },
      { label: 'Patron of',  value: 'Youth · Mexico · Cristero martyrs · Flag bearers' },
      { label: 'Symbols',    value: 'Cristero flag · Bare feet · Bloody cross · Mexico' },
      { label: 'Martyrdom',  value: 'Shot February 10, 1928 · Sahuayo, Mexico · Age 14' },
    ],
  },
];

// Full circular nav chain across all cards (including Thomas which is pre-built)
const ALL_CARD_NAV = [
  { slug: 'bvm',            navName: 'Mary' },
  { slug: 'joseph',         navName: 'Joseph' },
  { slug: 'peter',          navName: 'Peter' },
  { slug: 'paul',           navName: 'Paul' },
  { slug: 'andrew',         navName: 'Andrew' },
  { slug: 'philip',         navName: 'Philip' },
  { slug: 'bartholomew',    navName: 'Bartholomew' },
  { slug: 'matthew',        navName: 'Matthew' },
  { slug: 'james-greater',  navName: 'James' },
  { slug: 'james-less',     navName: 'James the Less' },
  { slug: 'simon-zealot',   navName: 'Simon' },
  { slug: 'jude',           navName: 'Jude' },
  { slug: 'john-apostle',   navName: 'John' },
  { slug: 'thomas',         navName: 'Thomas' },
  { slug: 'augustine',      navName: 'Augustine' },
  { slug: 'aquinas',        navName: 'Aquinas' },
  { slug: 'teresa-avila',   navName: 'Teresa' },
  { slug: 'joan-arc',       navName: 'Joan' },
  { slug: 'ignatius',       navName: 'Ignatius' },
  { slug: 'catherine-siena',navName: 'Catherine' },
  { slug: 'kolbe',          navName: 'Kolbe' },
  { slug: 'john-paul-ii',   navName: 'John Paul II' },
  { slug: 'patrick',        navName: 'Patrick' },
  { slug: 'carlo-acutis',   navName: 'Carlo' },
  { slug: 'francis-assisi', navName: 'Francis' },
  { slug: 'therese',        navName: 'Thérèse' },
  { slug: 'benedict',       navName: 'Benedict' },
  { slug: 'mother-teresa',  navName: 'Mother Teresa' },
  { slug: 'stephen',        navName: 'Stephen' },
  { slug: 'john-cross',     navName: 'John of the Cross' },
  { slug: 'francis-xavier', navName: 'Francis Xavier' },
  { slug: 'dominic',        navName: 'Dominic' },
  { slug: 'thomas-more',    navName: 'Thomas More' },
  { slug: 'cecilia',        navName: 'Cecilia' },
  { slug: 'david',          navName: 'David' },
  { slug: 'clare',          navName: 'Clare' },
  { slug: 'bernadette',     navName: 'Bernadette' },
  { slug: 'perpetua',       navName: 'Perpetua' },
  { slug: 'polycarp',       navName: 'Polycarp' },
  { slug: 'lucy',           navName: 'Lucy' },
  { slug: 'brigid',         navName: 'Brigid' },
  { slug: 'scholastica',    navName: 'Scholastica' },
  { slug: 'bonaventure',    navName: 'Bonaventure' },
  { slug: 'martin-tours',   navName: 'Martin' },
  { slug: 'nicolas',        navName: 'Nicholas' },
  { slug: 'rose-lima',      navName: 'Rose' },
  { slug: 'aloysius',       navName: 'Aloysius' },
  { slug: 'dominic-savio',  navName: 'Dominic Savio' },
  { slug: 'kateri',         navName: 'Kateri' },
  { slug: 'elizabeth-ann',  navName: 'Elizabeth Ann' },
  { slug: 'charles-lwanga', navName: 'Charles Lwanga' },
  { slug: 'maria-goretti',  navName: 'Maria Goretti' },
  { slug: 'gemma',          navName: 'Gemma' },
  { slug: 'pier-giorgio',   navName: 'Pier Giorgio' },
  { slug: 'edith-stein',    navName: 'Edith Stein' },
  { slug: 'padre-pio',      navName: 'Padre Pio' },
  { slug: 'miguel-pro',     navName: 'Miguel Pro' },
  { slug: 'oscar-romero',   navName: 'Romero' },
  { slug: 'jacinta',        navName: 'Jacinta' },
  { slug: 'francisco',      navName: 'Francisco' },
  { slug: 'jose-sanchez',   navName: 'José' },
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

let navigating = false;
function navTo(url) {
  if (navigating) return;
  navigating = true;
  document.body.style.transition = 'opacity 0.12s ease';
  document.body.style.opacity = '0';
  setTimeout(function() { window.location.href = url; }, 120);
}

window.addEventListener('keydown', function(e) {
  if (e.key === 'ArrowLeft')  { e.preventDefault(); navTo('crux-${card.prevSlug}-flip.html'); }
  if (e.key === 'ArrowRight') { e.preventDefault(); navTo('crux-${card.nextSlug}-flip.html'); }
  if (e.key === 'Escape')     { e.preventDefault(); navTo('crux-account.html'); }
});
</script>

<script type="module">
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const app = initializeApp({
  apiKey: "AIzaSyCq2cyJUMIA9pGWz9PZ8VPdw1hi0-iv3cU",
  authDomain: "crux-faith-formation.firebaseapp.com",
  projectId: "crux-faith-formation",
  storageBucket: "crux-faith-formation.firebasestorage.app",
  messagingSenderId: "838141015985",
  appId: "1:838141015985:web:2655e570663e182d75ef90"
});

const auth = getAuth(app);
const db   = getFirestore(app);
const ADMIN_UIDS = ['ratIiHiOj6Qnd2nHRvQsLBiQj953'];
const THIS_CARD  = '${card.slug}';

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = 'crux-account.html';
    return;
  }
  if (ADMIN_UIDS.includes(user.uid)) return;

  const snap  = await getDoc(doc(db, 'userProgress', user.uid));
  const owned = snap.exists() ? (snap.data().cardsOwned || []) : [];
  if (!owned.includes(THIS_CARD)) showLocked();
});

function showLocked() {
  document.getElementById('flipHint').style.display = 'none';
  document.querySelector('.card-nav').style.display = 'none';
  const scene = document.getElementById('cardScene');
  scene.style.cursor = 'default';
  scene.innerHTML = \`
    <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;
      justify-content:center;background:#0c0a07;border-radius:18px;gap:1.2rem;padding:2rem;
      text-align:center;border:1px solid rgba(255,255,255,0.08);
      box-shadow:0 8px 50px rgba(0,0,0,0.8);">
      <div style="font-size:1.8rem;opacity:0.2;">✦</div>
      <div style="font-family:'Cinzel',serif;font-size:0.55rem;letter-spacing:3px;
        text-transform:uppercase;color:rgba(255,255,255,0.25);">Card Locked</div>
      <div style="font-family:'EB Garamond',serif;font-size:0.88rem;
        color:rgba(255,255,255,0.2);line-height:1.7;max-width:200px;">
        Open packs to discover this saint.
      </div>
      <a href="crux-pack-store.html" style="font-family:'Cinzel',serif;font-size:0.5rem;
        letter-spacing:2px;text-transform:uppercase;padding:0.6rem 1.2rem;
        border:1px solid rgba(212,165,116,0.3);color:rgba(212,165,116,0.65);
        border-radius:4px;text-decoration:none;margin-top:0.25rem;
        transition:color 0.2s,border-color 0.2s;"
        onmouseover="this.style.color='rgba(212,165,116,1)';this.style.borderColor='rgba(212,165,116,0.6)'"
        onmouseout="this.style.color='rgba(212,165,116,0.65)';this.style.borderColor='rgba(212,165,116,0.3)'">
        Open Packs →
      </a>
    </div>
  \`;
}
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

// ─────────────────────────────────────────────
// MODULE CARDS — awarded on module completion,
// not in the pack pool, stored in moduleCards[]
// ─────────────────────────────────────────────

const MODULE_CARDS = [
  {
    slug:       'sc',
    abbrev:     'SC',
    title:      'CRUX — Sacrosanctum Concilium · Vatican II',
    moduleName: 'Sacrosanctum Concilium',
    category:   'Vatican II · Constitution',
    badge:      '✦✦ Rare',
    rarity:     'rare',
    accentRgb:  '130,170,255',
    stripColors:'rgba(60,100,180,0.9), rgba(100,150,240,1), rgba(150,195,255,1), rgba(100,150,240,1), rgba(60,100,180,0.9)',
    quote:      '"The liturgy is the summit toward which the activity of the Church is directed; at the same time it is the font from which all her power flows." — SC 10',
    setNum:     'M-001',
    moduleUrl:  'core-beliefs.html',
    backName:   'On the Sacred Liturgy',
    backDates:  'Promulgated December 4, 1963',
    summary:    'The first document of Vatican II called for active, conscious, full participation by the faithful in Mass — and authorized the use of vernacular languages alongside Latin for the first time in the Roman Rite.',
    highlights: [
      { label: 'Core Reform',   value: 'Mass in the vernacular; full, conscious, active participation' },
      { label: 'Preserved',     value: 'Latin and Gregorian chant retain their rightful place' },
      { label: 'Key Principle', value: 'Liturgy is source and summit of all Christian life' },
      { label: 'Promulgated',   value: 'December 4, 1963 · First document of Vatican II' },
    ],
    verse: '"Sing to the Lord a new song." — Psalm 96:1',
  },
  {
    slug:       'lg',
    abbrev:     'LG',
    title:      'CRUX — Lumen Gentium · Vatican II',
    moduleName: 'Lumen Gentium',
    category:   'Vatican II · Constitution',
    badge:      '✦✦✦ Epic',
    rarity:     'epic',
    accentRgb:  '180,100,255',
    stripColors:'rgba(100,40,160,0.9), rgba(155,70,230,1), rgba(195,120,255,1), rgba(155,70,230,1), rgba(100,40,160,0.9)',
    quote:      '"The Church, in Christ, is in the nature of a sacrament — a sign and instrument of communion with God and of unity among all people." — LG 1',
    setNum:     'M-002',
    moduleUrl:  'core-beliefs.html',
    backName:   'On the Church',
    backDates:  'Promulgated November 21, 1964',
    summary:    'Lumen Gentium reframed how the Church understands itself — not primarily as a hierarchy but as the whole People of God, with bishops sharing authority with the Pope through collegiality.',
    highlights: [
      { label: 'Key Image',    value: 'Church as "People of God" — not just institution' },
      { label: 'Collegiality', value: 'Bishops share in governing the universal Church with the Pope' },
      { label: 'The Laity',   value: 'All the baptized share Christ\'s priestly, prophetic, kingly mission' },
      { label: 'Promulgated', value: 'November 21, 1964 · Longest document of Vatican II' },
    ],
    verse: '"You are a chosen race, a royal priesthood, a holy nation." — 1 Peter 2:9',
  },
  {
    slug:       'dv',
    abbrev:     'DV',
    title:      'CRUX — Dei Verbum · Vatican II',
    moduleName: 'Dei Verbum',
    category:   'Vatican II · Constitution',
    badge:      '✦✦ Rare',
    rarity:     'rare',
    accentRgb:  '130,170,255',
    stripColors:'rgba(60,100,180,0.9), rgba(100,150,240,1), rgba(150,195,255,1), rgba(100,150,240,1), rgba(60,100,180,0.9)',
    quote:      '"Sacred Scripture is the speech of God as it is put down in writing under the breath of the Holy Spirit." — DV 9',
    setNum:     'M-003',
    moduleUrl:  'core-beliefs.html',
    backName:   'On Divine Revelation',
    backDates:  'Promulgated November 18, 1965',
    summary:    'Dei Verbum affirmed that Scripture and Tradition are not two separate sources but one sacred deposit of the Word of God — and called all Catholics to read Scripture regularly for the first time.',
    highlights: [
      { label: 'Key Teaching', value: 'Scripture and Tradition: one sacred deposit of God\'s Word' },
      { label: 'Historic Shift',value: 'Catholics encouraged to read Scripture personally and regularly' },
      { label: 'Inspiration',   value: 'God is true author; human authors used their own faculties fully' },
      { label: 'Promulgated',   value: 'November 18, 1965 · Most debated document of the Council' },
    ],
    verse: '"Your word is a lamp to my feet and a light to my path." — Psalm 119:105',
  },
  {
    slug:       'gs',
    abbrev:     'GS',
    title:      'CRUX — Gaudium et Spes · Vatican II',
    moduleName: 'Gaudium et Spes',
    category:   'Vatican II · Constitution',
    badge:      '✦✦✦✦ Legendary',
    rarity:     'legendary',
    accentRgb:  '212,165,116',
    stripColors:'#8B6914, #d4a574, #f0c987, #d4a574, #8B6914',
    quote:      '"The joys and hopes, the griefs and anxieties of the people of this age are the joys and hopes, the griefs and anxieties of the followers of Christ." — GS 1',
    setNum:     'M-004',
    moduleUrl:  'core-beliefs.html',
    backName:   'On the Church in the Modern World',
    backDates:  'Promulgated December 7, 1965',
    summary:    'The first Church document written not to Catholics but to all humanity — affirming human dignity, the common good, marriage, culture, and peace. Gaudium et Spes is the Church turning outward.',
    highlights: [
      { label: 'Audience',      value: 'Written to all humanity — not just Catholics' },
      { label: 'Human Dignity', value: 'Every person made in God\'s image; dignity is inviolable' },
      { label: 'Modern Topics', value: 'Marriage, family, culture, economics, war, and peace' },
      { label: 'Promulgated',   value: 'December 7, 1965 · Last and longest Vatican II document' },
    ],
    verse: '"Go into all the world and proclaim the good news." — Mark 16:15',
  },
];

function buildModuleHTML(card, imgSrc) {
  const highlightsHTML = card.highlights.map((h, i) =>
    `          <div class="mod-fact-row"><span class="mod-fact-label">${h.label}</span><span class="mod-fact-value">${h.value}</span></div>${i < card.highlights.length - 1 ? '\n          <div class="mod-fact-row"><div class="mod-fact-divider"></div></div>' : ''}`
  ).join('\n');

  const a = card.accentRgb;

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
}

.card-nav {
  display: flex; align-items: center; justify-content: center;
  gap: 0.6rem; margin-top: 0.4rem;
}

.nav-btn {
  font-family: 'Cinzel', serif; font-size: 0.5rem; letter-spacing: 1.5px;
  text-transform: uppercase; text-decoration: none;
  padding: 0.55rem 0.9rem; border-radius: 5px;
  border: 1px solid rgba(212,165,116,0.18); color: rgba(212,165,116,0.55);
  transition: color 0.2s, border-color 0.2s, background 0.2s;
  touch-action: manipulation; -webkit-tap-highlight-color: transparent;
  white-space: nowrap;
}
.nav-btn:hover { color: rgba(212,165,116,0.95); border-color: rgba(212,165,116,0.4); background: rgba(212,165,116,0.06); }

.card-scene { width: 300px; height: 420px; perspective: 1000px; cursor: pointer; }

.card-flipper {
  width: 100%; height: 100%; position: relative;
  transform-style: preserve-3d; -webkit-transform-style: preserve-3d;
  transition: transform 0.72s cubic-bezier(0.45, 0.05, 0.2, 1.0);
}

.card-scene.flipped .card-flipper { transform: rotateY(180deg); }

.card-face {
  position: absolute; inset: 0; border-radius: 18px; overflow: hidden;
  backface-visibility: hidden; -webkit-backface-visibility: hidden;
}

/* ── FRONT ── */
.card-front {
  background: linear-gradient(160deg, #0b0e1f 0%, #080a16 60%, #0d0c18 100%);
  cursor: pointer; touch-action: manipulation;
  box-shadow:
    0 0 0 1.5px rgba(212,165,116,0.2),
    0 0 0 3px rgba(212,165,116,0.08),
    0 8px 50px rgba(0,0,0,0.8),
    0 0 40px rgba(212,165,116,0.06);
}

.mod-portrait {
  position: absolute; inset: 0; width: 100%; height: 100%;
  object-fit: cover; object-position: center; z-index: 1;
}

.mod-darken {
  position: absolute; inset: 0; z-index: 2;
  background: linear-gradient(
    to bottom,
    rgba(8,10,22,0) 0%,
    rgba(8,10,22,0) 38%,
    rgba(8,10,22,0.7) 58%,
    rgba(8,10,22,0.95) 70%,
    rgba(8,10,22,1) 100%
  );
}

.mod-gold-strip {
  position: absolute; top: 0; left: 0; right: 0; height: 4px; z-index: 20;
  background: linear-gradient(90deg, ${card.stripColors});
  background-size: 200% 100%;
  animation: gold-sweep 4s linear infinite;
}
@keyframes gold-sweep { 0% { background-position: 0% 0; } 100% { background-position: 200% 0; } }

.mod-border {
  position: absolute; inset: 4px; border-radius: 14px; z-index: 19;
  border: 1px solid rgba(${a},0.2);
  box-shadow: inset 0 0 30px rgba(${a},0.04);
  animation: gold-glow 5s ease-in-out infinite alternate;
}
@keyframes gold-glow {
  0%   { border-color: rgba(${a},0.15); box-shadow: inset 0 0 30px rgba(${a},0.03); }
  100% { border-color: rgba(${a},0.35); box-shadow: inset 0 0 30px rgba(${a},0.08); }
}

.mod-corner { position: absolute; z-index: 18; width: 28px; height: 28px; }
.mc-tl { top:10px; left:10px; }
.mc-tr { top:10px; right:10px; transform:scaleX(-1); }
.mc-bl { bottom:10px; left:10px; transform:scaleY(-1); }
.mc-br { bottom:10px; right:10px; transform:scale(-1,-1); }

.mod-watermark {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; opacity: 0.04; pointer-events: none; z-index: 1;
}
.mod-watermark svg { width: 220px; height: 220px; }

.mod-foil {
  position: absolute; inset: 0; z-index: 2; mix-blend-mode: overlay; opacity: 0.15;
  background-image: repeating-linear-gradient(105deg,
    transparent 0px, transparent 3px,
    rgba(212,165,116,0.08) 3px, rgba(212,165,116,0.08) 4px
  );
  pointer-events: none;
}

.mod-content {
  position: absolute; bottom: 0; left: 0; right: 0; z-index: 15;
  display: flex; flex-direction: column;
  align-items: center; justify-content: flex-end;
  padding: 0 1.2rem 1.1rem;
  text-align: center;
}

.mod-category {
  font-family: 'Cinzel', serif; font-size: 0.46rem; font-weight: 600;
  letter-spacing: 3px; text-transform: uppercase;
  color: rgba(212,165,116,0.5); margin-bottom: 0.9rem;
}

.mod-ornament { display: flex; align-items: center; gap: 0.5rem; width: 100%; margin-bottom: 1rem; }
.mod-ornament-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(${a},0.3), transparent); }
.mod-ornament-diamond { font-size: 0.5rem; color: rgba(${a},0.4); }

.mod-name {
  font-family: 'Cinzel', serif; font-size: 1.05rem; font-weight: 900;
  color: rgba(255,245,225,0.9); letter-spacing: 1px; line-height: 1.2;
  text-shadow: 0 0 30px rgba(${a},0.4), 0 2px 8px rgba(0,0,0,0.8);
  margin-bottom: 0.6rem;
}

.mod-quote {
  font-family: 'EB Garamond', serif; font-size: 0.7rem; font-style: italic;
  color: rgba(230,210,175,0.55); line-height: 1.5;
  border-left: 2px solid rgba(${a},0.25); padding-left: 0.75rem;
  text-align: left; margin-bottom: 0.6rem;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
}

.mod-footer {
  width: 100%; display: flex; align-items: center; justify-content: space-between;
  padding-top: 0.75rem; border-top: 1px solid rgba(${a},0.15);
  margin-top: 1rem;
}
.mod-badge {
  font-family: 'Cinzel', serif; font-size: 0.44rem; letter-spacing: 2px;
  text-transform: uppercase; color: rgba(${a},0.7);
}
.mod-set {
  font-family: 'Cinzel', serif; font-size: 0.44rem; letter-spacing: 1.5px;
  color: rgba(${a},0.4);
}

/* ── BACK ── */
.card-back {
  transform: rotateY(180deg);
  background: linear-gradient(160deg, #0b0e1f 0%, #080a16 60%, #0d0c18 100%);
  display: flex; flex-direction: column;
  box-shadow:
    0 0 0 1.5px rgba(212,165,116,0.2),
    0 0 0 3px rgba(212,165,116,0.08),
    0 8px 50px rgba(0,0,0,0.8);
}

.back-gold-strip {
  height: 4px; flex-shrink: 0;
  background: linear-gradient(90deg, ${card.stripColors});
  background-size: 200% 100%;
  animation: gold-sweep 4s linear infinite;
}

.back-gold-border {
  position: absolute; inset: 4px; border-radius: 14px; pointer-events: none;
  border: 1px solid rgba(${a},0.15);
  animation: gold-glow 5s ease-in-out infinite alternate; z-index: 10;
}

.back-mod-watermark {
  position: absolute; inset: 0; display: flex; align-items: center;
  justify-content: center; opacity: 0.035; pointer-events: none; z-index: 1;
}
.back-mod-watermark svg { width: 200px; height: 200px; }

.mod-back-content {
  position: relative; z-index: 20; flex: 1; display: flex;
  flex-direction: column; padding: 1.25rem 1.2rem 1rem; overflow: hidden;
}

.mod-back-header { text-align: center; margin-bottom: 0.75rem; flex-shrink: 0; }
.mod-back-title {
  font-family: 'Cinzel', serif; font-size: 0.72rem; font-weight: 700;
  letter-spacing: 2.5px; text-transform: uppercase;
  color: rgba(${a},0.85);
  text-shadow: 0 0 16px rgba(${a},0.3); line-height: 1.3;
}
.mod-back-dates {
  font-family: 'EB Garamond', serif; font-size: 0.7rem; font-style: italic;
  color: rgba(${a},0.35); margin-top: 0.15rem;
}

.mod-back-ornament { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; flex-shrink: 0; }
.mod-back-ornament-line { flex: 1; height: 1px; background: linear-gradient(90deg, transparent, rgba(${a},0.2), transparent); }
.mod-back-ornament-diamond { font-size: 0.55rem; color: rgba(${a},0.3); letter-spacing: 3px; }

.mod-back-summary {
  font-family: 'EB Garamond', serif; font-size: 0.8rem;
  color: rgba(230,210,175,0.7); line-height: 1.65;
  margin-bottom: 0.85rem;
}

.mod-facts-label {
  font-family: 'Cinzel', serif; font-size: 0.42rem; letter-spacing: 2px;
  text-transform: uppercase; color: rgba(${a},0.4); margin-bottom: 0.5rem; flex-shrink: 0;
}

.mod-fact-row {
  display: grid; grid-template-columns: auto 1fr;
  gap: 0.2rem 0.55rem; margin-bottom: 0.4rem; align-items: start;
}
.mod-fact-label {
  font-family: 'Cinzel', serif; font-size: 0.4rem; letter-spacing: 1.5px;
  text-transform: uppercase; color: rgba(${a},0.5); padding-top: 3px; white-space: nowrap;
}
.mod-fact-value {
  font-family: 'EB Garamond', serif; font-size: 0.76rem;
  color: rgba(230,210,175,0.75); line-height: 1.4;
}
.mod-fact-divider { grid-column: 1/-1; height: 1px; background: rgba(212,165,116,0.08); margin: 0.15rem 0; }

.mod-verse {
  font-family: 'EB Garamond', serif; font-size: 0.74rem; font-style: italic;
  color: rgba(${a},0.45); line-height: 1.55; margin-top: auto;
  padding-top: 0.6rem; border-top: 1px solid rgba(${a},0.1);
}

.mod-back-scroll {
  flex: 1; overflow-y: auto; scrollbar-width: none; min-height: 0;
}
.mod-back-scroll::-webkit-scrollbar { display: none; }

.mod-back-footer {
  flex-shrink: 0; display: flex; align-items: center; justify-content: space-between;
  padding-top: 0.5rem; margin-top: 0.4rem;
  border-top: 1px solid rgba(${a},0.1);
}
.mod-back-footer-set { font-family:'Cinzel',serif; font-size:0.42rem; letter-spacing:2px; text-transform:uppercase; color:rgba(${a},0.25); }
.mod-back-footer-num { font-family:'Cinzel',serif; font-size:0.42rem; letter-spacing:1px; color:rgba(${a},0.25); }
</style>
</head>
<body>

<div class="flip-hint" id="flipHint">Tap card to flip &nbsp;✦</div>

<div class="card-scene" id="cardScene">
  <div class="card-flipper">

    <!-- FRONT -->
    <div class="card-face card-front" id="modCardFront">
      <div class="mod-gold-strip"></div>
      <div class="mod-border"></div>

      <svg class="mod-corner mc-tl" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(212,165,116,0.45)" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M2 2 L9 9" stroke="rgba(212,165,116,0.2)" stroke-width="0.7"/>
        <circle cx="2" cy="2" r="2" fill="rgba(212,165,116,0.35)"/>
        <circle cx="14" cy="2" r="1.2" fill="rgba(212,165,116,0.2)"/>
        <circle cx="2" cy="14" r="1.2" fill="rgba(212,165,116,0.2)"/>
      </svg>
      <svg class="mod-corner mc-tr" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(212,165,116,0.45)" stroke-width="1.2" stroke-linecap="round"/>
        <path d="M2 2 L9 9" stroke="rgba(212,165,116,0.2)" stroke-width="0.7"/>
        <circle cx="2" cy="2" r="2" fill="rgba(212,165,116,0.35)"/>
        <circle cx="14" cy="2" r="1.2" fill="rgba(212,165,116,0.2)"/>
        <circle cx="2" cy="14" r="1.2" fill="rgba(212,165,116,0.2)"/>
      </svg>
      <svg class="mod-corner mc-bl" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(212,165,116,0.45)" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="2" cy="2" r="2" fill="rgba(212,165,116,0.35)"/>
      </svg>
      <svg class="mod-corner mc-br" viewBox="0 0 28 28" fill="none">
        <path d="M2 14 L2 2 L14 2" stroke="rgba(212,165,116,0.45)" stroke-width="1.2" stroke-linecap="round"/>
        <circle cx="2" cy="2" r="2" fill="rgba(212,165,116,0.35)"/>
      </svg>

${imgSrc ? `      <img class="mod-portrait" src="${imgSrc}" alt="${card.moduleName}">
      <div class="mod-darken"></div>` : ''}
      <div class="mod-watermark">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="5" x2="50" y2="95" stroke="#d4a574" stroke-width="3"/>
          <line x1="5" y1="35" x2="95" y2="35" stroke="#d4a574" stroke-width="3"/>
          <circle cx="50" cy="50" r="44" stroke="#d4a574" stroke-width="1.5" stroke-dasharray="4 6"/>
          <circle cx="50" cy="50" r="30" stroke="#d4a574" stroke-width="0.8"/>
          <text x="50" y="78" text-anchor="middle" font-family="serif" font-size="10" fill="#d4a574" letter-spacing="4">CRUX</text>
        </svg>
      </div>
      <div class="mod-foil"></div>

      <div class="mod-content">
        <div class="mod-category">${card.category}</div>
        <div class="mod-name">${card.moduleName}</div>
        <div class="mod-quote">${card.quote}</div>
        <div class="mod-footer">
          <span class="mod-badge">${card.badge} · Module</span>
          <span class="mod-set">${card.setNum}</span>
        </div>
      </div>
    </div>

    <!-- BACK -->
    <div class="card-face card-back">
      <div class="back-gold-strip"></div>
      <div class="back-gold-border"></div>
      <div class="back-mod-watermark">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="50" y1="5" x2="50" y2="95" stroke="#d4a574" stroke-width="3"/>
          <line x1="5" y1="35" x2="95" y2="35" stroke="#d4a574" stroke-width="3"/>
          <circle cx="50" cy="50" r="44" stroke="#d4a574" stroke-width="1.5" stroke-dasharray="4 6"/>
          <circle cx="50" cy="50" r="30" stroke="#d4a574" stroke-width="0.8"/>
          <text x="50" y="78" text-anchor="middle" font-family="serif" font-size="10" fill="#d4a574" letter-spacing="4">CRUX</text>
        </svg>
      </div>

      <div class="mod-back-content">
        <div class="mod-back-header">
          <div class="mod-back-title">${card.backName}</div>
          <div class="mod-back-dates">${card.backDates}</div>
        </div>

        <div class="mod-back-ornament">
          <div class="mod-back-ornament-line"></div>
          <div class="mod-back-ornament-diamond">◆ ◆ ◆</div>
          <div class="mod-back-ornament-line"></div>
        </div>

        <div class="mod-back-scroll">
          <div class="mod-back-summary">${card.summary}</div>

          <div class="mod-facts-label">Key Constitutions</div>
${highlightsHTML}

          <div class="mod-verse">${card.verse}</div>
        </div>

        <div class="mod-back-footer">
          <button class="flip-back-btn" style="background:none;border:none;cursor:pointer;font-family:'Cinzel',serif;font-size:0.5rem;letter-spacing:2px;text-transform:uppercase;color:rgba(${a},0.4);padding:0;transition:color 0.2s;" onmouseover="this.style.color='rgba(${a},0.9)'" onmouseout="this.style.color='rgba(${a},0.4)'">&#x21A9; Flip</button>
          <span class="mod-back-footer-set">CRUX · Modules · Series I</span>
          <span class="mod-back-footer-num">${card.setNum}</span>
        </div>
      </div>
    </div>

  </div>
</div>

<nav class="card-nav">
  <a class="nav-btn" href="${card.moduleUrl}">&#8592; Back to Module</a>
  <a class="nav-btn" href="crux-account.html">My Collection</a>
</nav>

<script>
const scene     = document.getElementById('cardScene');
const hint      = document.getElementById('flipHint');
const frontFace = document.getElementById('modCardFront');
const flipper   = scene.querySelector('.card-flipper');
const backFace  = scene.querySelector('.card-back');
let isFlipped   = false;

function onTap(element, handler) {
  element.addEventListener('touchend', function(e) { e.preventDefault(); handler(e); }, { passive: false });
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

scene.addEventListener('mousemove', (e) => {
  if (isFlipped) return;
  const rect = scene.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top)  / rect.height;
  if (x < 0 || x > 1 || y < 0 || y > 1) return;
  flipper.style.transform = 'rotateX(' + ((y - 0.5) * -18) + 'deg) rotateY(' + ((x - 0.5) * 18) + 'deg)';
});

scene.addEventListener('mouseleave', () => { if (!isFlipped) flipper.style.transform = ''; });

window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') { e.preventDefault(); document.body.style.transition = 'opacity 0.12s ease'; document.body.style.opacity = '0'; setTimeout(function() { window.location.href = 'crux-account.html'; }, 120); }
});
</script>

<script type="module">
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';
import { getFirestore, doc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

const app = initializeApp({
  apiKey: "AIzaSyCq2cyJUMIA9pGWz9PZ8VPdw1hi0-iv3cU",
  authDomain: "crux-faith-formation.firebaseapp.com",
  projectId: "crux-faith-formation",
  storageBucket: "crux-faith-formation.firebasestorage.app",
  messagingSenderId: "838141015985",
  appId: "1:838141015985:web:2655e570663e182d75ef90"
});

const auth = getAuth(app);
const db   = getFirestore(app);
const ADMIN_UIDS  = ['ratIiHiOj6Qnd2nHRvQsLBiQj953'];
const THIS_MODULE = '${card.slug}';

onAuthStateChanged(auth, async (user) => {
  if (!user) { window.location.href = 'crux-account.html'; return; }
  if (ADMIN_UIDS.includes(user.uid)) return;

  const snap  = await getDoc(doc(db, 'userProgress', user.uid));
  const owned = snap.exists() ? (snap.data().moduleCards || []) : [];
  if (!owned.includes(THIS_MODULE)) showLocked();
});

function showLocked() {
  document.getElementById('flipHint').style.display = 'none';
  document.querySelector('.card-nav').style.display = 'none';
  const scene = document.getElementById('cardScene');
  scene.style.cursor = 'default';
  scene.innerHTML = \`
    <div style="width:100%;height:100%;display:flex;flex-direction:column;align-items:center;
      justify-content:center;background:linear-gradient(160deg,#0b0e1f,#080a16);border-radius:18px;
      gap:1.2rem;padding:2rem;text-align:center;border:1px solid rgba(${a},0.12);
      box-shadow:0 8px 50px rgba(0,0,0,0.8);">
      <div style="font-size:1.5rem;color:rgba(${a},0.2);">◆</div>
      <div style="font-family:'Cinzel',serif;font-size:0.55rem;letter-spacing:3px;
        text-transform:uppercase;color:rgba(${a},0.3);">Module Not Completed</div>
      <div style="font-family:'EB Garamond',serif;font-size:0.88rem;
        color:rgba(${a},0.25);line-height:1.7;max-width:200px;">
        Complete the ${card.moduleName} module to earn this card.
      </div>
      <a href="${card.moduleUrl}" style="font-family:'Cinzel',serif;font-size:0.5rem;
        letter-spacing:2px;text-transform:uppercase;padding:0.6rem 1.2rem;
        border:1px solid rgba(${a},0.25);color:rgba(${a},0.6);
        border-radius:4px;text-decoration:none;"
        onmouseover="this.style.color='rgba(${a},1)';this.style.borderColor='rgba(${a},0.5)'"
        onmouseout="this.style.color='rgba(${a},0.6)';this.style.borderColor='rgba(${a},0.25)'">
        Go to Module →
      </a>
    </div>
  \`;
}
</script>

</body>
</html>`;
}

// Generate module cards (image optional — drop {slug}.jpg in images/module-cards/)
for (const card of MODULE_CARDS) {
  console.log('Building module-' + card.slug + '...');
  const imgFile = path.join(OUT_DIR, 'images/module-cards/' + card.slug + '.jpg');
  const imgSrc  = fs.existsSync(imgFile) ? 'images/module-cards/' + card.slug + '.jpg' : null;
  if (imgSrc) console.log('  (image found)');
  const html = buildModuleHTML(card, imgSrc);
  const outPath = path.join(OUT_DIR, 'crux-module-' + card.slug + '-flip.html');
  fs.writeFileSync(outPath, html, 'utf8');
  console.log('  -> ' + outPath + ' (' + Math.round(html.length / 1024) + ' KB)');
}

console.log('\nDone.');
