// ─────────────────────────────────────────────────────────
// crux-module-engine.js
// Shared engine for all CRUX standalone module pages.
// Each module HTML file defines its own MODULE object and
// calls initModule() on DOMContentLoaded.
// ─────────────────────────────────────────────────────────

// ── STATE ──────────────────────────────────────────────────
let currentModule = null;
let currentLevel = 'beginner';
let currentStep = 'lesson'; // lesson | reading | quiz | complete
let quizAnswers = {};
let quizSubmitted = false;
let userProgressData = {};

// ── PILLAR CARD REWARDS ────────────────────────────────────
const PILLAR_MODULES = {
    'pillar1': ['trinity', 'jesus', 'mary', 'prodigal_son', 'bible_geography'],
    'pillar2': ['sacraments', 'mass_real_presence', 'reconciliation'],
    'pillar3': ['conscience', 'fruits_holy_spirit', 'ten_commandments', 'beatitudes'],
    'pillar4': ['lords_prayer'],
};
const PILLAR_CARD_DATA = {
    'pillar1': {
        name:   'The Transfiguration',
        pillar: 'Pillar I  ·  What We Believe',
        img:    'images/module-cards/pillar1.jpg',
        quote:  '“This is my beloved Son, with whom I am well pleased; listen to him.” — Matthew 17:5',
        set:    'P-001',
        url:    'crux-pillar1-flip.html',
    },
    'pillar2': {
        name:   'The Last Supper',
        pillar: 'Pillar II  ·  What We Celebrate',
        img:    'images/module-cards/pillar2.jpg',
        quote:  '“Take, eat; this is my body.” — Matthew 26:26',
        set:    'P-002',
        url:    'crux-pillar2-flip.html',
    },
    'pillar3': {
        name:   'The Sermon on the Mount',
        pillar: 'Pillar III  ·  How We Live',
        img:    'images/module-cards/pillar3.jpg',
        quote:  '“Blessed are the pure in heart, for they shall see God.” — Matthew 5:8',
        set:    'P-003',
        url:    'crux-pillar3-flip.html',
    },
    'pillar4': {
        name:   'The Garden of Gethsemane',
        pillar: 'Pillar IV  ·  How We Pray',
        img:    'images/module-cards/pillar4.jpg',
        quote:  '“Not my will, but yours, be done.” — Luke 22:42',
        set:    'P-004',
        url:    'crux-pillar4-flip.html',
    },
    'pillar5': {
        name:   'The Great Commission',
        pillar: 'Pillar V  ·  Who We Are',
        img:    'images/module-cards/pillar5.jpg',
        quote:  '“Go therefore and make disciples of all nations.” — Matthew 28:19',
        set:    'P-005',
        url:    'crux-pillar5-flip.html',
    },
};

// ── INIT ───────────────────────────────────────────────────
function goToPracticeGames() {
    if (currentModule) {
        window.location.href = 'crux-games.html?module=' + currentModule.id;
    }
}

function loadModule(moduleId) {
    currentModule = (window.MODULES || {})[moduleId];
    if (!currentModule) {
        document.getElementById('loadingState').style.display = 'none';
        document.getElementById('landingScreen').style.display = 'block';
        return;
    }

    document.title = `CRUX — ${currentModule.title}`;

    // Show UI, hide landing (landingScreen only exists in crux-modules.html)
    document.getElementById('loadingState').style.display = 'none';
    const landingEl = document.getElementById('landingScreen');
    if (landingEl) landingEl.style.display = 'none';
    document.getElementById('stepIndicator').style.display = 'flex';
    document.getElementById('moduleHeader').style.display = 'block';
    document.getElementById('levelToggleWrap').style.display = 'block';
    document.getElementById('panelLesson').classList.add('active');

    // Populate header
    document.getElementById('gradeTag').textContent = currentModule.gradeTag;
    document.getElementById('topicTag').textContent = currentModule.topic;
    document.getElementById('moduleTitle').textContent = currentModule.title;
    document.getElementById('moduleSubtitle').textContent = currentModule.subtitle;

    // Render lesson content
    renderLesson();
    renderReading();
    renderQuiz();
    updateProgress();
}

// ── LEVEL TOGGLE ───────────────────────────────────────────
function setLevel(level) {
    currentLevel = level;
    document.getElementById('btnBeginner').classList.toggle('active', level === 'beginner');
    document.getElementById('btnTheologian').classList.toggle('active', level === 'theologian');
    renderLesson();
    renderReading();
    if (!quizSubmitted) renderQuiz();
}

// ── RENDER FUNCTIONS ───────────────────────────────────────
function renderLesson() {
    document.getElementById('lessonContent').innerHTML =
        currentModule.lesson[currentLevel];
}

function renderReading() {
    document.getElementById('readingContent').innerHTML =
        currentModule.reading[currentLevel];
}

function currentQuiz() {
    const q = currentModule.quiz;
    return (q && q[currentLevel]) ? q[currentLevel] : (Array.isArray(q) ? q : []);
}

function renderQuiz() {
    quizAnswers = {};
    quizSubmitted = false;
    const container = document.getElementById('quizQuestions');
    const letters = ['A', 'B', 'C', 'D'];
    const quiz = currentQuiz();

    container.innerHTML = quiz.map((q, qi) => `
        <div class="question-block" id="qblock${qi}">
            <div class="question-num">Question ${qi + 1} of ${quiz.length}</div>
            <div class="question-text">${q.q}</div>
            <div class="options-list">
                ${q.options.map((opt, oi) => `
                    <button class="option-btn" id="opt${qi}_${oi}"
                        onclick="selectAnswer(${qi}, ${oi})"
                        data-qi="${qi}" data-oi="${oi}">
                        <span class="option-letter">${letters[oi]}</span>
                        ${opt}
                    </button>
                `).join('')}
            </div>
            <div class="answer-feedback" id="feedback${qi}"></div>
        </div>
    `).join('');

    updateSubmitBtn();
}

function selectAnswer(qi, oi) {
    if (quizSubmitted) return;
    quizAnswers[qi] = oi;

    currentQuiz()[qi].options.forEach((_, i) => {
        const btn = document.getElementById(`opt${qi}_${i}`);
        btn.classList.remove('selected');
    });
    document.getElementById(`opt${qi}_${oi}`).classList.add('selected');
    updateSubmitBtn();
}

function updateSubmitBtn() {
    const allAnswered = currentQuiz().every((_, i) => quizAnswers[i] !== undefined);
    document.getElementById('submitQuizBtn').disabled = !allAnswered;
}

function submitQuiz() {
    quizSubmitted = true;
    let correct = 0;

    currentQuiz().forEach((q, qi) => {
        const chosen = quizAnswers[qi];
        const isCorrect = chosen === q.correct;
        if (isCorrect) correct++;

        q.options.forEach((_, oi) => {
            const btn = document.getElementById(`opt${qi}_${oi}`);
            btn.disabled = true;
            btn.classList.remove('selected');
            if (oi === q.correct) btn.classList.add('correct');
            else if (oi === chosen && !isCorrect) btn.classList.add('incorrect');
        });

        const fb = document.getElementById(`feedback${qi}`);
        fb.style.display = 'block';
        fb.className = `answer-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        fb.textContent = isCorrect
            ? `✓ Correct! ${q.explanation}`
            : `✗ The correct answer is "${q.options[q.correct]}." ${q.explanation}`;
    });

    document.getElementById('panelQuiz').scrollIntoView({ behavior: 'smooth' });

    const submitBtn = document.getElementById('submitQuizBtn');
    submitBtn.disabled = true;
    setTimeout(() => {
        submitBtn.textContent = 'See My Results →';
        submitBtn.classList.remove('btn-gold');
        submitBtn.disabled = false;
        submitBtn.onclick = () => showCompletion(correct);
    }, 1800);
}

// ── NAVIGATION ─────────────────────────────────────────────
function goToLesson() { setStep('lesson'); }
function goToReading() { setStep('reading'); }
function goToQuiz() { setStep('quiz'); }

function setStep(step) {
    currentStep = step;
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));

    const panelMap = {
        lesson: 'panelLesson',
        reading: 'panelReading',
        quiz: 'panelQuiz',
        complete: 'panelComplete'
    };

    document.getElementById(panelMap[step]).classList.add('active');
    updateStepIndicator(step);
    updateProgress();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateStepIndicator(step) {
    const steps = ['lesson', 'reading', 'quiz'];
    const idx = steps.indexOf(step);

    steps.forEach((s, i) => {
        const el = document.getElementById(`step${i + 1}`);
        el.className = 'step';
        if (i < idx) el.classList.add('complete');
        else if (i === idx) el.classList.add('active');

        if (i < steps.length - 1) {
            const line = document.getElementById(`line${i + 1}`);
            line.className = 'step-line' + (i < idx ? ' complete' : '');
        }
    });
}

function updateProgress() {
    const stepProgress = { lesson: 15, reading: 50, quiz: 80, complete: 100 };
    document.getElementById('progressFill').style.width =
        (stepProgress[currentStep] || 0) + '%';
}

// ── COMPLETION ─────────────────────────────────────────────
async function showCompletion(correct) {
    const total = currentQuiz().length;
    const pct = Math.round((correct / total) * 100);
    const xp = currentModule.xpReward;

    document.getElementById('scoreNum').textContent = `${correct}/${total}`;
    document.getElementById('completionTitle').textContent =
        pct === 100 ? 'Perfect Score! 🎉' :
        pct >= 80 ? 'Well Done!' :
        pct >= 60 ? 'Good Effort!' : 'Keep Studying!';

    document.getElementById('completionMessage').textContent =
        pct === 100
            ? `You answered every question correctly. Outstanding work on "${currentModule.title}."`
            : `You scored ${correct} out of ${total} on the quiz. Review the lesson and try again to improve your score.`;

    const gamesBtn = document.getElementById('practiceGamesBtn');
    if (gamesBtn) gamesBtn.style.display = 'inline-flex';

    if (currentModule.nextModule && (window.MODULES || {})[currentModule.nextModule]) {
        const nextBtn = document.getElementById('nextModuleBtn');
        nextBtn.style.display = 'inline-flex';
        nextBtn.textContent = `Next: ${window.MODULES[currentModule.nextModule].title} →`;
    }

    if (window.currentUser && pct >= 60) {
        document.getElementById('xpAwardDisplay').style.display = 'inline-flex';
        document.getElementById('xpEarned').textContent = xp;
        await awardXP(xp);
    }

    setStep('complete');
    saveProgress(correct, total);
}

async function awardXP(amount) {
    if (!window.currentUser || !window.db) return;
    const { doc, getDoc, setDoc, updateDoc, serverTimestamp } = window.fsModules;
    const uid = window.currentUser.uid;

    try {
        const ref = doc(window.db, 'userProgress', uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
            const data = snap.data();
            const completed = data.completedModules || [];
            if (completed.includes(currentModule.id)) return;

            const current = data.totalXP || 0;
            const currentQuizXP = data.xpFromQuizzes || 0;
            await updateDoc(ref, {
                totalXP: current + amount,
                xpFromQuizzes: currentQuizXP + amount,
                lastActivity: serverTimestamp()
            });
            document.getElementById('xpDisplay').textContent = current + amount;
        } else {
            await setDoc(ref, {
                totalXP: amount,
                xpFromQuizzes: amount,
                lastActivity: serverTimestamp(),
                userId: uid
            });
            document.getElementById('xpDisplay').textContent = amount;
        }
        document.getElementById('xpChip').style.display = 'inline-flex';
    } catch (e) {
        console.error('Error awarding XP:', e);
    }
}

async function saveProgress(correct, total) {
    if (!window.currentUser || !window.db) return;
    const { doc, getDoc, setDoc, updateDoc, collection, addDoc, serverTimestamp } = window.fsModules;
    const uid = window.currentUser.uid;
    const passed = (correct / total) >= 0.6;

    try {
        await addDoc(collection(window.db, 'moduleProgress'), {
            userId: uid,
            moduleId: currentModule.id,
            moduleTitle: currentModule.title,
            level: currentLevel,
            score: correct,
            total: total,
            passed: passed,
            completedAt: serverTimestamp()
        });
    } catch (e) {
        console.error('Error saving module progress:', e);
    }

    if (!passed) return;

    try {
        const ref = doc(window.db, 'userProgress', uid);
        const snap = await getDoc(ref);

        if (snap.exists()) {
            const existing = snap.data().completedModules || [];
            if (!existing.includes(currentModule.id)) {
                const newCompleted = [...existing, currentModule.id];
                await updateDoc(ref, {
                    completedModules: newCompleted,
                    lastActivity: serverTimestamp()
                });
                const awarded = await checkAndAwardPillarCard(newCompleted, uid);
                if (awarded) showPillarCardAward(awarded);
            }
        } else {
            const newCompleted = [currentModule.id];
            await setDoc(ref, {
                totalXP: 0,
                completedModules: newCompleted,
                lastActivity: serverTimestamp(),
                userId: uid
            });
            const awarded = await checkAndAwardPillarCard(newCompleted, uid);
            if (awarded) showPillarCardAward(awarded);
        }
    } catch (e) {
        console.error('Error stamping completed module:', e);
    }
}

async function loadUserProgress() {
    if (!window.currentUser || !window.db) return;
    const { doc, getDoc } = window.fsModules;
    const uid = window.currentUser.uid;

    try {
        const snap = await getDoc(doc(window.db, 'userProgress', uid));
        if (snap.exists()) {
            const xp = snap.data().totalXP || 0;
            document.getElementById('xpDisplay').textContent = xp;
            document.getElementById('xpChip').style.display = 'inline-flex';
        }
    } catch (e) {
        console.error('Error loading user progress:', e);
    }
}

function loadNextModule() {
    if (currentModule.nextModule) {
        window.location.href = `crux-modules.html?module=${currentModule.nextModule}`;
    }
}

function reviewAnswers() {
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    document.getElementById('panelQuiz').classList.add('active');
    updateStepIndicator('quiz');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    document.getElementById('submitQuizBtn').style.display = 'none';
    const backBtn = document.querySelector('#panelQuiz .nav-bar .btn-secondary');
    if (backBtn) {
        backBtn.textContent = '← Back to Results';
        backBtn.onclick = () => setStep('complete');
    }
}

async function checkAndAwardPillarCard(completedModules, uid) {
    if (!window.db) return null;
    const { doc, getDoc, updateDoc } = window.fsModules;

    for (const [cardId, required] of Object.entries(PILLAR_MODULES)) {
        if (!required.every(id => completedModules.includes(id))) continue;
        try {
            const ref = doc(window.db, 'userProgress', uid);
            const snap = await getDoc(ref);
            if (!snap.exists()) continue;
            const existing = snap.data().moduleCards || [];
            if (existing.includes(cardId)) continue;
            await updateDoc(ref, { moduleCards: [...existing, cardId] });
            return cardId;
        } catch (e) {
            console.error('Error awarding pillar card:', e);
        }
    }
    return null;
}

function showPillarCardAward(cardId) {
    const d = PILLAR_CARD_DATA[cardId];
    if (!d) return;

    // Inject Cinzel + EB Garamond if not already loaded (module pages only ship Playfair+Inter)
    if (!document.getElementById('pca-fonts')) {
        const lnk = document.createElement('link');
        lnk.id = 'pca-fonts';
        lnk.rel = 'stylesheet';
        lnk.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap';
        document.head.appendChild(lnk);
    }

    // Inject keyframes + component styles once
    if (!document.getElementById('pca-styles')) {
        const s = document.createElement('style');
        s.id = 'pca-styles';
        s.textContent =
            '@keyframes pca-fade-in{from{opacity:0}to{opacity:1}}' +
            '@keyframes pca-card-drop{from{opacity:0;transform:scale(0.72) translateY(40px)}to{opacity:1;transform:scale(1) translateY(0)}}' +
            '@keyframes pca-text-up{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}' +
            '@keyframes pca-sweep{0%{background-position:0% 0}100%{background-position:200% 0}}' +
            '@keyframes pca-glow-pulse{0%,100%{box-shadow:0 0 30px rgba(212,165,116,0.12),0 0 0 1.5px rgba(212,165,116,0.22),0 12px 60px rgba(0,0,0,0.9)}50%{box-shadow:0 0 70px rgba(212,165,116,0.38),0 0 0 1.5px rgba(212,165,116,0.55),0 12px 60px rgba(0,0,0,0.9)}}' +
            '#pca-overlay{position:fixed;inset:0;z-index:9999;background:rgba(4,6,14,0.92);display:flex;flex-direction:column;align-items:center;justify-content:center;gap:1.1rem;padding:2rem 1.5rem;animation:pca-fade-in 0.4s ease forwards}' +
            '#pca-label{font-family:"Cinzel",serif;font-size:0.5rem;letter-spacing:5px;text-transform:uppercase;color:rgba(212,165,116,0.5);text-align:center;animation:pca-text-up 0.5s ease 0.05s both}' +
            '#pca-card-wrap{animation:pca-card-drop 0.7s cubic-bezier(0.18,0.9,0.32,1.1) 0.2s both}' +
            '.pca-card{width:256px;height:358px;border-radius:16px;position:relative;overflow:hidden;cursor:default;animation:pca-glow-pulse 2.8s ease-in-out 0.9s infinite}' +
            '.pca-card-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center top}' +
            '.pca-card-darken{position:absolute;inset:0;background:linear-gradient(to bottom,rgba(8,10,22,0) 0%,rgba(8,10,22,0) 36%,rgba(8,10,22,0.7) 56%,rgba(8,10,22,0.96) 70%,rgba(8,10,22,1) 100%)}' +
            '.pca-gold-strip{position:absolute;top:0;left:0;right:0;height:4px;z-index:20;background:linear-gradient(90deg,rgba(140,100,40,0.9),rgba(180,130,60,1),rgba(232,201,160,1),rgba(212,165,116,1),rgba(232,201,160,1),rgba(180,130,60,1),rgba(140,100,40,0.9));background-size:200% 100%;animation:pca-sweep 3s linear infinite}' +
            '.pca-card-border{position:absolute;inset:4px;border-radius:12px;border:1px solid rgba(212,165,116,0.25);z-index:19;pointer-events:none}' +
            '.pca-card-content{position:absolute;bottom:0;left:0;right:0;z-index:15;padding:0 1rem 0.95rem;text-align:center}' +
            '.pca-card-category{font-family:"Cinzel",serif;font-size:0.41rem;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;color:rgba(212,165,116,0.5);margin-bottom:0.75rem}' +
            '.pca-orn{display:flex;align-items:center;gap:0.4rem;margin-bottom:0.75rem}.pca-orn-line{flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(212,165,116,0.28),transparent)}.pca-orn-dia{font-size:0.44rem;color:rgba(212,165,116,0.38)}' +
            '.pca-card-name{font-family:"Cinzel",serif;font-size:0.88rem;font-weight:900;color:rgba(255,245,225,0.92);letter-spacing:0.5px;line-height:1.2;text-shadow:0 0 28px rgba(212,165,116,0.4),0 2px 8px rgba(0,0,0,0.8);margin-bottom:0.45rem}' +
            '.pca-card-quote{font-family:"EB Garamond",serif;font-size:0.63rem;font-style:italic;color:rgba(230,210,175,0.48);line-height:1.5;border-left:2px solid rgba(212,165,116,0.22);padding-left:0.6rem;text-align:left;margin-bottom:0.45rem;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden}' +
            '.pca-card-footer{display:flex;align-items:center;justify-content:space-between;padding-top:0.55rem;border-top:1px solid rgba(212,165,116,0.13)}' +
            '.pca-card-badge{font-family:"Cinzel",serif;font-size:0.38rem;letter-spacing:2px;text-transform:uppercase;color:rgba(212,165,116,0.7)}' +
            '.pca-card-set{font-family:"Cinzel",serif;font-size:0.38rem;letter-spacing:1.5px;color:rgba(212,165,116,0.38)}' +
            '#pca-headline{font-family:"Playfair Display",serif;font-size:1.3rem;font-weight:700;color:rgba(255,245,225,0.92);text-align:center;line-height:1.3;text-shadow:0 0 30px rgba(212,165,116,0.25);animation:pca-text-up 0.5s ease 0.75s both}' +
            '#pca-sub{font-family:"EB Garamond",serif;font-size:0.9rem;font-style:italic;color:rgba(230,210,175,0.45);text-align:center;line-height:1.6;animation:pca-text-up 0.5s ease 0.9s both}' +
            '#pca-btns{display:flex;gap:0.75rem;animation:pca-text-up 0.5s ease 1.05s both}' +
            '.pca-btn-primary{font-family:"Cinzel",serif;font-size:0.48rem;letter-spacing:2px;text-transform:uppercase;padding:0.65rem 1.3rem;background:linear-gradient(135deg,rgba(212,165,116,0.14),rgba(212,165,116,0.07));border:1px solid rgba(212,165,116,0.4);color:rgba(212,165,116,0.9);border-radius:6px;text-decoration:none;cursor:pointer;transition:background 0.2s,border-color 0.2s}' +
            '.pca-btn-primary:hover{background:linear-gradient(135deg,rgba(212,165,116,0.22),rgba(212,165,116,0.12));border-color:rgba(212,165,116,0.65)}' +
            '.pca-btn-secondary{font-family:"Cinzel",serif;font-size:0.48rem;letter-spacing:2px;text-transform:uppercase;padding:0.65rem 1.3rem;background:transparent;border:1px solid rgba(255,245,225,0.1);color:rgba(255,245,225,0.32);border-radius:6px;cursor:pointer;transition:color 0.2s,border-color 0.2s}' +
            '.pca-btn-secondary:hover{color:rgba(255,245,225,0.55);border-color:rgba(255,245,225,0.22)}';
        document.head.appendChild(s);
    }

    const userName = (window.auth && window.auth.currentUser && window.auth.currentUser.displayName)
        ? window.auth.currentUser.displayName.split(' ')[0]
        : '';
    const greeting = userName ? 'Congratulations, ' + userName + '.' : 'Congratulations.';

    const overlay = document.createElement('div');
    overlay.id = 'pca-overlay';
    overlay.innerHTML =
        '<div id="pca-label">✦ &nbsp; Pillar Complete &nbsp; ✦</div>' +
        '<div id="pca-card-wrap">' +
            '<div class="pca-card">' +
                '<img class="pca-card-img" src="' + d.img + '" alt="' + d.name + '">' +
                '<div class="pca-card-darken"></div>' +
                '<div class="pca-gold-strip"></div>' +
                '<div class="pca-card-border"></div>' +
                '<div class="pca-card-content">' +
                    '<div class="pca-card-category">' + d.pillar + '</div>' +
                    '<div class="pca-orn"><div class="pca-orn-line"></div><span class="pca-orn-dia">✦</span><div class="pca-orn-line"></div></div>' +
                    '<div class="pca-card-name">' + d.name + '</div>' +
                    '<div class="pca-card-quote">' + d.quote + '</div>' +
                    '<div class="pca-card-footer">' +
                        '<span class="pca-card-badge">✦✦✦ Epic &nbsp;·&nbsp; Pillar</span>' +
                        '<span class="pca-card-set">' + d.set + '</span>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>' +
        '<div id="pca-headline">' + greeting + '</div>' +
        '<div id="pca-sub">You\'ve earned a new card for your collection.</div>' +
        '<div id="pca-btns">' +
            '<a class="pca-btn-primary" href="' + d.url + '">View Card →</a>' +
            '<button class="pca-btn-secondary" onclick="document.getElementById(\'pca-overlay\').remove()">Continue</button>' +
        '</div>';

    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });
}

// ── PUBLIC INIT ────────────────────────────────────────────
// Called by each module's inline <script> on DOMContentLoaded
function initModule(moduleData) {
    // Make the module available globally as MODULES[id]
    // so all engine functions (loadModule, etc.) work unchanged
    window.MODULES = window.MODULES || {};
    window.MODULES[moduleData.id] = moduleData;
    loadModule(moduleData.id);
}
