// Splits the flat quiz: [...] in each module into quiz: { beginner: [...], theologian: [...] }
// Run once from CRUX Deploy directory: node scripts/split-quizzes.js

const fs   = require('fs');
const path = require('path');
const BASE = path.join(__dirname, '..');

// ── BEGINNER QUESTION SETS ─────────────────────────────────────────────────
const BEGINNER = {

'crux-module-trinity': [
    { q: "How many Persons are there in the Holy Trinity?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "There is one God, but He exists as three Persons: the Father, the Son (Jesus), and the Holy Spirit." },
    { q: "Which Person of the Trinity came to earth as a human being to save us?", options: ["God the Father", "God the Son (Jesus)", "The Holy Spirit", "An angel"], correct: 1, explanation: "God the Son — Jesus — became human and lived among us. This is what we mean when we say God became man." },
    { q: "What does the Holy Spirit do in our lives?", options: ["He created the universe", "He came to earth as Jesus", "He lives in our hearts and helps us follow Jesus", "He wrote the Bible by himself"], correct: 2, explanation: "The Holy Spirit lives in our hearts and helps us follow Jesus. He was given to us at Pentecost and comes to us through Baptism and Confirmation." },
    { q: "Complete the verse: \"Baptizing them in the name of the Father and of the Son and of the _____.\" — Matthew 28:19", options: ["Church", "Pope", "Holy Spirit", "Apostles"], correct: 2, explanation: "Jesus commands baptism in the name of all three Persons of the Trinity — showing us that God is Father, Son, and Holy Spirit." },
    { q: "Who created everything and loves us like a perfect parent?", options: ["God the Son", "God the Father", "The Holy Spirit", "The angels"], correct: 1, explanation: "God the Father created everything and loves us with a perfect parental love. Jesus taught us to call God 'Our Father.'" }
],

'crux-module-jesus': [
    { q: "What does the Catholic Church teach about who Jesus is?", options: ["A great teacher who became God", "An angel sent from heaven", "True God and true man — fully divine and fully human", "A prophet who spoke for God"], correct: 2, explanation: "The Church teaches that Jesus is both fully God and fully human at the same time — not half of each, but completely both." },
    { q: "Which Person of the Holy Trinity is Jesus?", options: ["God the Father", "God the Son", "The Holy Spirit", "All three at once"], correct: 1, explanation: "Jesus is the Second Person of the Trinity — God the Son — who has existed forever and entered human history by becoming man." },
    { q: "In what town did Jesus grow up?", options: ["Jerusalem", "Bethlehem", "Jericho", "Nazareth"], correct: 3, explanation: "Jesus grew up in Nazareth, which is why he is often called 'Jesus of Nazareth.' He was born in Bethlehem but raised in Nazareth." },
    { q: "Jesus is like us in every way except one. What is that exception?", options: ["He never got tired", "He never felt sad", "He never sinned", "He never got hungry"], correct: 2, explanation: "Jesus experienced everything we experience — tiredness, hunger, sadness — but he never sinned. He is fully human and fully without sin." },
    { q: "\"And the Word became _____ and lived among us.\" — John 1:14", options: ["Spirit", "Light", "Flesh", "Bread"], correct: 2, explanation: "\"The Word became flesh\" means that God himself became a human being in Jesus Christ. This is the heart of what Christians believe." }
],

'crux-module-mary': [
    { q: "Who is Mary?", options: ["A prophetess who lived before Jesus", "The mother of Jesus", "One of the twelve apostles", "An angel who appeared to the shepherds"], correct: 1, explanation: "Mary is the mother of Jesus. Because Jesus is God, Mary is called the Mother of God — or Theotokos in Greek." },
    { q: "Which angel appeared to Mary and asked her to be the mother of the Son of God?", options: ["Michael", "Raphael", "Gabriel", "Uriel"], correct: 2, explanation: "The Angel Gabriel appeared to Mary with the message: 'Hail, full of grace, the Lord is with you!' This moment is called the Annunciation." },
    { q: "When Catholics ask Mary to pray for them, what are they doing?", options: ["Worshipping Mary as a god", "Asking her to intercede for them, like asking a friend to pray", "Replacing prayer to God with prayer to Mary", "Saying she is more powerful than God"], correct: 1, explanation: "Catholics don't worship Mary — they ask her to pray for them. It's the same as asking a friend to pray for you, except Mary is in heaven and closer to God than anyone." },
    { q: "What does the title 'Theotokos' mean?", options: ["Blessed Virgin", "Queen of Heaven", "Mother of God", "Star of the Sea"], correct: 2, explanation: "Theotokos is a Greek word meaning 'God-bearer' or 'Mother of God.' Because Jesus is God, his mother Mary is rightly called the Mother of God." },
    { q: "Catholics believe Mary was preserved from original sin from the very beginning of her life. This teaching is called the:", options: ["Assumption", "Annunciation", "Immaculate Conception", "Perpetual Virginity"], correct: 2, explanation: "The Immaculate Conception means Mary was kept free from original sin from the moment of her conception, so she would be a worthy mother for Jesus." }
],

'crux-module-prodigal-son': [
    { q: "Who was Jesus talking to when he told the Parable of the Prodigal Son?", options: ["His disciples alone", "A crowd of poor people", "The Pharisees and scribes, who were angry that Jesus welcomed sinners", "Roman soldiers"], correct: 2, explanation: "Jesus told this parable to the Pharisees — the most religiously serious people of the day — who were furious that he kept welcoming tax collectors and sinners." },
    { q: "When the younger son runs out of money and hits rock bottom, what does he decide to do?", options: ["Ask his brother for help", "Return home and ask his father to take him back as a servant", "Stay where he is and work harder", "Find a new family to live with"], correct: 1, explanation: "The son 'comes to himself,' realizes how bad things are, and decides to return home. He rehearses an apology and heads back, expecting nothing more than to work as a servant." },
    { q: "When the father sees his son returning from far away, what does he do?", options: ["He waits for the son to come and apologize first", "He closes the door and refuses to see him", "He runs to his son, embraces him, and kisses him", "He sends a servant to bring the son back"], correct: 2, explanation: "The father doesn't wait. He sees his son from far away and RUNS — which was undignified for a wealthy man of that time. He embraces him before the son even finishes his apology." },
    { q: "In the parable, who does the father represent?", options: ["The Jewish religious leaders", "God and his mercy toward sinners", "A wealthy landowner in Galilee", "Joseph, the father of Jesus"], correct: 1, explanation: "The father represents God. His running to embrace his son before any explanation shows us how God responds when a sinner turns and comes home." },
    { q: "At the end of the parable, the older brother refuses to come inside and celebrate. What does his reaction represent?", options: ["The joy of the angels when a sinner repents", "The attitude of the disciples toward outsiders", "The attitude of the Pharisees — those who follow the rules but resent God's mercy to others", "Pride in keeping the commandments"], correct: 2, explanation: "The older brother stands for the Pharisees — people who followed the rules but couldn't understand why God would celebrate the return of someone who had failed so badly." }
],

'crux-module-geography': [
    { q: "What is true about the places mentioned in the Bible?", options: ["They are fictional locations made up by the authors", "They are real places, most of which still exist today", "They are based on Greek and Roman myths", "They only existed in ancient times"], correct: 1, explanation: "Every story in the Bible happened in a real place — real cities, real rivers, real mountains — most of which still exist today and have people living in them right now." },
    { q: "In the Exodus, God's people were slaves in which country?", options: ["Babylon", "Rome", "Egypt", "Persia"], correct: 2, explanation: "God's people — the Israelites — were enslaved in Egypt. Moses led them out through the desert toward the land God had promised them." },
    { q: "Who led the Israelites out of Egypt in the Exodus?", options: ["Abraham", "David", "Joshua", "Moses"], correct: 3, explanation: "Moses led the Israelites out of Egypt. God worked miraculous signs through Moses — including parting the Red Sea — to free his people from slavery." },
    { q: "Knowing the geography of the Bible helps us understand that the stories are:", options: ["Myths and legends passed down from ancient times", "Real historical events that happened in real places", "Symbolic stories with no connection to history", "Only relevant to people living in the Middle East"], correct: 1, explanation: "When you know where a Bible story happened, it stops feeling like a fairy tale and starts feeling like history. Because it IS history." },
    { q: "The lesson organizes the Bible's geography into different time periods. What are these called?", options: ["Chapters", "Eras", "Covenants", "Testaments"], correct: 1, explanation: "The lesson divides the geography of the Bible into 'eras' — different time periods, each with their own key locations, characters, and events." }
],

'crux-module-sacraments': [
    { q: "How many sacraments did Jesus give the Church?", options: ["Three", "Five", "Seven", "Twelve"], correct: 2, explanation: "Jesus gave the Church seven sacraments — one for each major moment of our spiritual life, from birth into God's family through death." },
    { q: "Which sacrament washes away sin and makes us members of God's family?", options: ["Confirmation", "Baptism", "Eucharist", "Holy Orders"], correct: 1, explanation: "Baptism is the first sacrament. It washes away sin, makes us children of God, and brings us into the Church — God's family." },
    { q: "In which sacrament do we receive Jesus himself in Holy Communion?", options: ["Reconciliation", "Anointing of the Sick", "Matrimony", "Eucharist"], correct: 3, explanation: "In the Eucharist, we receive Jesus himself — his body and blood — in Holy Communion. It is the source and summit of the Christian life." },
    { q: "What is a sacrament?", options: ["A prayer said in Latin", "An outward sign that gives us God's grace on the inside", "A rule the Church requires us to follow", "A gift we give to God during Mass"], correct: 1, explanation: "A sacrament is an outward sign — something we can see, hear, or touch — that gives us God's grace on the inside. Jesus instituted all seven sacraments." },
    { q: "In which sacrament are our sins forgiven by God through a priest?", options: ["Baptism", "Confirmation", "Anointing of the Sick", "Reconciliation"], correct: 3, explanation: "In Reconciliation (also called Confession), we confess our sins to a priest and God forgives us through him. Jesus gave this authority to the apostles in John 20:23." }
],

'crux-module-mass': [
    { q: "At the Last Supper, what did Jesus say when he held up the bread?", options: ["\"This bread represents my body.\"", "\"Think of this as a symbol of me.\"", "\"This is my body, which will be given up for you.\"", "\"Eat this bread in memory of what I taught you.\""], correct: 2, explanation: "Jesus said 'This is my body' — not 'this represents my body.' Catholics take him at his word: the bread truly becomes his body." },
    { q: "The Last Supper took place during which Jewish meal?", options: ["The Feast of Tabernacles", "The Passover meal", "The Feast of Weeks", "The Sabbath dinner"], correct: 1, explanation: "Jesus shared a Passover meal with his disciples on the night before he died. He transformed that ancient Jewish meal into something entirely new." },
    { q: "What did Jesus command his disciples to do at the Last Supper?", options: ["\"Remember me when you pray.\"", "\"Gather together every week.\"", "\"Do this in memory of me.\"", "\"Teach others what I have shown you.\""], correct: 2, explanation: "\"Do this in memory of me.\" Every time the priest celebrates Mass, the Church is obeying this direct command of Jesus." },
    { q: "Catholics believe that at Mass, the bread and wine truly become the Body and Blood of Jesus. This is called:", options: ["A symbolic meal", "The Real Presence", "A commemoration", "A recreation"], correct: 1, explanation: "The Church teaches that Jesus is truly and really present in the Eucharist — not symbolically. The bread and wine truly become his body and blood." },
    { q: "Jesus said: \"This is the cup of my blood, the blood of the new and _______ covenant.\"", options: ["Ancient", "Holy", "Eternal", "Perfect"], correct: 2, explanation: "Jesus called his blood 'the blood of the new and eternal covenant' — connecting the Eucharist to the sacrifice he was about to make on the cross." }
],

'crux-module-reconciliation': [
    { q: "In Luke 15, when the father sees his son still far away, what does he do?", options: ["He waits at home for the son to arrive", "He sends a servant to meet him", "He is filled with compassion and runs to embrace him", "He asks the son to explain himself first"], correct: 2, explanation: "The father runs — before a word is spoken, before any explanation is made. This is the image Jesus gives us of how God responds when a sinner turns and comes home." },
    { q: "Reconciliation is another name for which sacrament?", options: ["Baptism", "Confirmation", "Confession", "Anointing of the Sick"], correct: 2, explanation: "Reconciliation, Confession, and Penance are all names for the same sacrament — the one where God forgives our sins through the priest." },
    { q: "Who actually forgives our sins in Confession?", options: ["The priest, acting on his own authority", "God, working through the priest", "The bishop who ordained the priest", "The Pope"], correct: 1, explanation: "God forgives our sins — the priest acts in God's name. Jesus gave this authority to the apostles: 'Whose sins you forgive are forgiven.' (John 20:23)" },
    { q: "What must we bring to Confession for it to be valid?", options: ["A written list of every sin we can remember", "Genuine sorrow for our sins and a desire to change", "A donation to the parish", "A note from our parents or teacher"], correct: 1, explanation: "We need genuine sorrow — called contrition — and a firm intention to try not to sin again. Without true sorrow, the sacrament cannot work." },
    { q: "The Parable of the Prodigal Son teaches us that God's mercy is:", options: ["Available only to people who have never sinned seriously", "Given only after we have fully made up for what we did wrong", "Always waiting for us — God moves toward us the moment we turn back to him", "Earned by completing our penance first"], correct: 2, explanation: "The father runs before the son even speaks. God's mercy doesn't wait for us to earn it — it comes toward us the moment we turn back to him." }
],

'crux-module-conscience': [
    { q: "What is conscience?", options: ["A feeling of guilt that fades over time", "The inner voice God gave us to judge right from wrong", "The rules the Church gives us to follow", "Our emotions about what we want to do"], correct: 1, explanation: "Conscience is the voice of God speaking in our hearts — our ability to judge whether an action is good or evil. It is a gift from God built into every human being." },
    { q: "True or false: conscience means \"whatever I feel like doing.\"", options: ["True — my conscience is personal, so I decide what's right for me", "False — a conscience can be wrong, dulled, or manipulated", "True — God made us free, so our feelings guide us", "False — only priests can tell us what our conscience should say"], correct: 1, explanation: "Conscience is NOT just 'whatever I feel like.' A conscience can be wrong if you were taught badly, dulled if you keep ignoring it, or manipulated by peer pressure or culture." },
    { q: "What happens to your conscience if you keep ignoring it?", options: ["It gets stronger and louder over time", "It becomes more accurate and reliable", "It gets quieter — it becomes dulled by being repeatedly ignored", "Nothing — conscience stays exactly the same no matter what"], correct: 2, explanation: "If you keep ignoring your conscience, it gets quieter over time. This is why the Church teaches us to form our conscience well and listen to it." },
    { q: "Which of the following is a sign that your conscience is working?", options: ["You feel confused about everything that is right and wrong", "You feel guilty after doing something you knew was wrong", "You feel the same way whether you do good or evil", "You stop caring about other people's feelings"], correct: 1, explanation: "Feeling guilty after doing something wrong — or at peace after doing something good — are signs that your conscience is working as God designed it." },
    { q: "According to the Church, what should we do to have a well-formed conscience?", options: ["Follow our feelings, since God made us emotional beings", "Learn what the Church teaches and measure our judgments against it", "Do whatever seems right to the majority of people around us", "Only listen to our conscience when it agrees with what we want"], correct: 1, explanation: "A well-formed conscience is shaped by learning what is truly good and true — including what God has revealed through Scripture and the Church's teaching." }
],

'crux-module-fruits': [
    { q: "The Fruits of the Holy Spirit are not rules to follow. What are they?", options: ["Gifts we earn through hard work and prayer", "Signs of what a person's life looks like when the Holy Spirit is at work on the inside", "Special abilities given only to saints", "Miracles that prove someone is holy"], correct: 1, explanation: "The Fruits are what a person's life naturally starts to look like when the Holy Spirit is living and growing on the inside — like fruit that grows on a healthy tree." },
    { q: "Which of the following IS listed as a Fruit of the Holy Spirit in Galatians 5:22-23?", options: ["Courage", "Intelligence", "Peace", "Strength"], correct: 2, explanation: "Galatians 5:22-23 lists: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control. Peace is on the list — courage and strength are not." },
    { q: "Galatians 5:22-23 says 'fruit' (singular), not 'fruits' (plural). What does this tell us?", options: ["There is only one Fruit of the Spirit — love", "All the fruits grow together from one source: the Holy Spirit", "Paul made a grammar mistake in the original Greek", "Only the most holy people receive all the fruits"], correct: 1, explanation: "Paul uses the singular 'fruit' because all the qualities on the list come from one source — the Holy Spirit. They're not separate items on a checklist; they're one harvest." },
    { q: "The lesson compares the Fruits of the Holy Spirit to apples on an apple tree. What is the point of that comparison?", options: ["Both require a lot of hard work to produce", "Just as a tree produces fruit naturally from what's inside it, a person produces spiritual fruit naturally when the Spirit lives in them", "Apples and spiritual fruits are both things we can give to other people", "Apple trees and Christians both need the same kind of care to survive"], correct: 1, explanation: "The apple tree didn't follow a checklist — it produced fruit because of what was happening inside it. When the Holy Spirit lives in us, these fruits grow naturally from the inside out." },
    { q: "Which of the following is NOT listed as a Fruit of the Holy Spirit in Galatians 5:22-23?", options: ["Patience", "Kindness", "Anger", "Gentleness"], correct: 2, explanation: "Anger is not a Fruit of the Spirit. The nine fruits Paul lists are: love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, and self-control." }
],

'crux-module-commandments': [
    { q: "Before God gave the Ten Commandments, what had he already done for his people?", options: ["He gave them the Promised Land", "He rescued them from slavery in Egypt", "He sent them a king to rule over them", "He destroyed their enemies in battle"], correct: 1, explanation: "God rescued his people from slavery in Egypt BEFORE giving them the Commandments. The rules came from a relationship — not the other way around." },
    { q: "God begins the Ten Commandments: \"I am the Lord your God, who brought you out of Egypt, out of the _____.\"", options: ["Wilderness", "River", "House of slavery", "Land of sin"], correct: 2, explanation: "God introduces himself as a rescuer, not a lawgiver. 'The house of slavery' — the Commandments are a gift to a people God already saved, not a price tag for his help." },
    { q: "When a lawyer asked Jesus which commandment was greatest, Jesus summed them all up in two. The first is to love God. The second is to love your:", options: ["Family", "Neighbor", "Country", "Church"], correct: 1, explanation: "Jesus said all the Law and the Prophets hang on two commandments: love God with all your heart, and love your neighbor as yourself. Every commandment flows from these two." },
    { q: "The Ten Commandments are divided into two groups. The first group is about our relationship with God. The second group is about:", options: ["Prayer and worship", "Our relationship with other people", "How to treat the poor", "Keeping the Sabbath holy"], correct: 1, explanation: "The first group (commandments 1-3) is about loving God. The second group (commandments 4-10) is about loving our neighbor. Together they teach us how to love." },
    { q: "God gave the Ten Commandments as a gift — after he rescued his people, not before. What does this tell us about God?", options: ["He only helps people who follow his rules", "He saved his people first, then gave them a way to live in that freedom", "The Commandments are the most important thing in the Bible", "God is a strict judge who punishes anyone who fails"], correct: 1, explanation: "The rescue came first. God saved his people from Egypt because he loved them — and THEN gave them the Commandments as a guide for living as a freed people." }
],

'crux-module-beatitudes': [
    { q: "Where was Jesus when he taught the Beatitudes?", options: ["In the Temple in Jerusalem", "On a boat on the Sea of Galilee", "On a hillside, with a crowd gathered around him", "In the synagogue at Nazareth"], correct: 2, explanation: "Jesus sat down on a hillside and began to teach. This is called the Sermon on the Mount — the Beatitudes are the opening of that sermon." },
    { q: "The word 'blessed' in the Beatitudes is best understood as:", options: ["Rich and powerful", "Favored by God and truly happy", "Safe from suffering", "Popular and respected"], correct: 1, explanation: "Blessed means more than just 'happy' — it means favored by God, on the right path, living the way God designed us to live. It's a deep and lasting happiness." },
    { q: "Which of the following is one of the Beatitudes Jesus actually said?", options: ["\"Blessed are the strong, for they shall win.\"", "\"Blessed are the popular, for they shall be known.\"", "\"Blessed are the meek, for they shall inherit the earth.\"", "\"Blessed are the rich, for they shall have comfort.\""], correct: 2, explanation: "Jesus blesses the meek — not the powerful. This is the upside-down logic of the Kingdom: what the world calls weak, God calls blessed." },
    { q: "Why does Jesus call people 'blessed' who the world would consider to be losing?", options: ["Because suffering is good and we should seek it out", "Because the Kingdom of God runs on completely different rules than the world does", "Because God wants us to be unhappy in this life", "Because those people secretly have power the world cannot see"], correct: 1, explanation: "The Kingdom of God has its own logic. What the world values — power, wealth, popularity — doesn't determine who is blessed. God's economy looks completely different." },
    { q: "The Beatitudes are NOT a strategy for getting ahead in the world. What ARE they?", options: ["A checklist of virtues to practice every day", "A portrait of what a person looks like when they are truly living as a follower of Christ", "A set of promises God makes only to perfect people", "A list of rules for how to treat other people"], correct: 1, explanation: "The Beatitudes describe a certain kind of person — not a checklist to complete. They paint a portrait of what a life shaped by the Kingdom of God actually looks like." }
],

'crux-module-lords-prayer': [
    { q: "What prompted the disciples to ask Jesus to teach them to pray?", options: ["They had never prayed before", "They saw Jesus praying and wanted to learn how he did it", "A Pharisee challenged them to pray better", "Jesus told them they were doing it wrong"], correct: 1, explanation: "The disciples saw Jesus praying and asked: 'Lord, teach us to pray.' Jesus didn't give a long lecture — he gave them a prayer." },
    { q: "Another name for the Lord's Prayer is:", options: ["The Hail Mary", "The Glory Be", "The Our Father", "The Apostles' Creed"], correct: 2, explanation: "The Lord's Prayer is also called the Our Father, because that is how it begins. Christians have prayed it every day for two thousand years." },
    { q: "How many petitions (parts) does the Lord's Prayer have?", options: ["Three", "Five", "Seven", "Ten"], correct: 2, explanation: "The Lord's Prayer has seven petitions. The first three are about God — his name, his kingdom, his will. The last four are about our needs — bread, forgiveness, protection from evil." },
    { q: "Jesus teaches us to begin the Lord's Prayer by calling God:", options: ["Our Creator", "Our Father", "Our King", "Our Judge"], correct: 1, explanation: "Jesus teaches us to call God 'Father' — not a distant ruler, but a loving parent. This is one of the most radical things Jesus ever revealed about who God is." },
    { q: "In the Lord's Prayer, what is a 'trespass'?", options: ["Walking on someone's private property", "A sin or wrongdoing — something we've done that hurt God or others", "A failure to pray every day", "An act of charity we forgot to do"], correct: 1, explanation: "'Forgive us our trespasses' means forgive us our sins. And the prayer immediately reminds us: we also need to forgive those who have wronged us." }
]

}; // end BEGINNER

// ── SCRIPT ────────────────────────────────────────────────────────────────
let changed = 0;
let skipped = 0;

Object.entries(BEGINNER).forEach(([module, beginnerQs]) => {
    const file = path.join(BASE, module + '.html');
    if (!fs.existsSync(file)) { console.log('MISSING: ' + file); skipped++; return; }

    let src = fs.readFileSync(file, 'utf8');

    // Find quiz: [ position
    const marker = 'quiz: [';
    const markerIdx = src.indexOf(marker);
    if (markerIdx === -1) { console.log('NO QUIZ ARRAY: ' + module); skipped++; return; }

    // Check if already split
    if (src.includes('quiz: {\n') || src.includes('quiz: {')) {
        console.log('ALREADY SPLIT: ' + module); skipped++; return;
    }

    // Extract the existing array by bracket matching
    const arrStart = markerIdx + 'quiz: '.length; // position of '['
    let depth = 0, arrEnd = -1;
    for (let i = arrStart; i < src.length; i++) {
        if (src[i] === '[') depth++;
        else if (src[i] === ']') { depth--; if (depth === 0) { arrEnd = i + 1; break; } }
    }
    if (arrEnd === -1) { console.log('BRACKET MISMATCH: ' + module); skipped++; return; }

    const existingArray = src.slice(arrStart, arrEnd); // the raw [...] string

    // Serialize beginner questions with consistent indentation (12 spaces inside array)
    const indent = '            ';
    const serialized = beginnerQs.map(q => {
        const opts = JSON.stringify(q.options);
        return indent + '{\n' +
               indent + '    q: ' + JSON.stringify(q.q) + ',\n' +
               indent + '    options: ' + opts + ',\n' +
               indent + '    correct: ' + q.correct + ',\n' +
               indent + '    explanation: ' + JSON.stringify(q.explanation) + '\n' +
               indent + '}';
    }).join(',\n');

    // Build the indented theologian array (re-indent the existing one)
    const theologianArray = existingArray
        .replace(/^\[/, '')
        .replace(/\]$/, '')
        .trim();

    const newQuiz =
        'quiz: {\n' +
        '            beginner: [\n' +
        serialized + '\n' +
        '            ],\n' +
        '            theologian: [\n' +
        '            ' + theologianArray.split('\n').join('\n            ').trimEnd() + '\n' +
        '            ]\n' +
        '        }';

    const newSrc = src.slice(0, markerIdx) + newQuiz + src.slice(arrEnd);
    fs.writeFileSync(file, newSrc, 'utf8');
    console.log('OK: ' + module);
    changed++;
});

console.log('\nDone. Changed: ' + changed + '  Skipped: ' + skipped);
