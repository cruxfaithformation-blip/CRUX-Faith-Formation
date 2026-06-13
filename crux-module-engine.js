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
const PILLAR_CARD_NAMES = {
    'pillar1': 'The Transfiguration',
    'pillar2': 'The Last Supper',
    'pillar3': 'The Sermon on the Mount',
    'pillar4': 'The Garden of Gethsemane',
};
const PILLAR_CARD_URLS = {
    'pillar1': 'crux-pillar1-flip.html',
    'pillar2': 'crux-pillar2-flip.html',
    'pillar3': 'crux-pillar3-flip.html',
    'pillar4': 'crux-pillar4-flip.html',
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

function renderQuiz() {
    quizAnswers = {};
    quizSubmitted = false;
    const container = document.getElementById('quizQuestions');
    const letters = ['A', 'B', 'C', 'D'];

    container.innerHTML = currentModule.quiz.map((q, qi) => `
        <div class="question-block" id="qblock${qi}">
            <div class="question-num">Question ${qi + 1} of ${currentModule.quiz.length}</div>
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

    currentModule.quiz[qi].options.forEach((_, i) => {
        const btn = document.getElementById(`opt${qi}_${i}`);
        btn.classList.remove('selected');
    });
    document.getElementById(`opt${qi}_${oi}`).classList.add('selected');
    updateSubmitBtn();
}

function updateSubmitBtn() {
    const allAnswered = currentModule.quiz.every((_, i) => quizAnswers[i] !== undefined);
    document.getElementById('submitQuizBtn').disabled = !allAnswered;
}

function submitQuiz() {
    quizSubmitted = true;
    let correct = 0;

    currentModule.quiz.forEach((q, qi) => {
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
    const total = currentModule.quiz.length;
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
    const name = PILLAR_CARD_NAMES[cardId] || cardId;
    const url  = PILLAR_CARD_URLS[cardId]  || 'crux-account.html';

    const el = document.createElement('div');
    el.id = 'pillarCardAward';
    el.style.cssText = 'margin:1.2rem 0 0.5rem;padding:1rem 1.2rem;border:1px solid rgba(212,165,116,0.35);border-radius:10px;background:linear-gradient(135deg,rgba(212,165,116,0.06),rgba(212,165,116,0.02));text-align:center;opacity:0;transition:opacity 0.5s ease';
    el.innerHTML =
        '<div style="font-family:\'Cinzel\',serif;font-size:0.5rem;letter-spacing:3px;text-transform:uppercase;color:rgba(212,165,116,0.6);margin-bottom:0.4rem">✦ Pillar Complete</div>' +
        '<div style="font-family:\'Playfair Display\',serif;font-size:1rem;font-weight:700;color:rgba(212,165,116,0.9);margin-bottom:0.5rem">' + name + '</div>' +
        '<div style="font-family:\'Inter\',sans-serif;font-size:0.75rem;color:rgba(255,245,225,0.45);margin-bottom:0.8rem;line-height:1.5">You\'ve completed all modules in this Pillar and earned a new card.</div>' +
        '<a href="' + url + '" style="font-family:\'Cinzel\',serif;font-size:0.48rem;letter-spacing:2px;text-transform:uppercase;padding:0.5rem 1.1rem;border:1px solid rgba(212,165,116,0.35);color:rgba(212,165,116,0.8);border-radius:5px;text-decoration:none">View Card →</a>';

    const xpEl = document.getElementById('xpAwardDisplay');
    if (xpEl) xpEl.insertAdjacentElement('afterend', el);
    else {
        const screen = document.querySelector('.completion-screen');
        if (screen) screen.appendChild(el);
    }
    setTimeout(() => { el.style.opacity = '1'; }, 50);
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
