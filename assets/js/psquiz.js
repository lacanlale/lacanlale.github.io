const quizData = [
    {
        question: "You spot a snack across from you. What did you catch?",
        options: [
            { text: "An ant", frogtype: "Fire" },
            { text: "A fly", frogtype: "Water" },
            { text: "A dragonfly", frogtype: "Earth" },
            { text: "A spider", frogtype: "Air" }
        ]
    },
    {
        question: "Last question: Where did all of this happen?",
        options: [
            { text: "Oasis in a dessert", frogtype: "Fire" },
            { text: "Up in the trees of a foreset", frogtype: "Water" },
            { text: "At a pond in a rainy city", frogtype: "Earth" }
        ]
    }
];

const resultsData = {
    Pacman: {
        title: "South American horned frog AKA Pacman Frog",
        desc: "You are passionate, driven, and full of raw energy. You lead with your heart and spark action wherever you go!"
    },
    Bull: {
        title: "American Bullfrog",
        desc: "You are intuitive, deeply empathetic, and highly adaptable. You understand emotions and naturally flow around obstacles."
    },
    Flying: {
        title: "Flying Frog",
        desc: "You are intuitive, deeply empathetic, and highly adaptable. You understand emotions and naturally flow around obstacles."
    },
    Humming: {
        title: "The Dotted Humming Frog",
        desc: "You are intuitive, deeply empathetic, and highly adaptable. You understand emotions and naturally flow around obstacles."
    },
    Burrowing: {
        title: "Burrowing Frog",
        desc: "You are grounded, reliable, and practical. People rely on your stability, and you build steady foundations for success."
    },
    Dart: {
        title: "Poison Dart Frog",
        desc: "You are intellectual, curious, and deeply creative. You value your freedom and love exploring abstract concepts."
    }
};

let currentQuestionIndex = 0;
let scoreTracker = { Fire: 0, Water: 0, Earth: 0, Air: 0 };

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const quizCard = document.getElementById("quiz-card");
const resultsCard = document.getElementById("results-card");
const personalityTitle = document.getElementById("personality-title");
const personalityDesc = document.getElementById("personality-desc");
const restartBtn = document.getElementById("restart-btn");

function loadQuestion() {
    const currentQuizItem = quizData[currentQuestionIndex];
    questionText.textContent = currentQuizItem.question;
    optionsContainer.innerHTML = ""; // Clear old buttons

    currentQuizItem.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.classList.add("option-btn");
        button.addEventListener("click", () => handleAnswer(option.frogtype));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(frogtype) {
    scoreTracker[frogtype]++;
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizCard.classList.add("hidden");
    resultsCard.classList.remove("hidden");

    let topFrogtype = "Fire"; 
    let maxScore = -1;

    for (const frogtype in scoreTracker) {
        if (scoreTracker[frogtype] > maxScore) {
            maxScore = scoreTracker[frogtype];
            topFrogtype = frogtype;
        }
    }

    personalityTitle.textContent = resultsData[topFrogtype].title;
    personalityDesc.textContent = resultsData[topFrogtype].desc;
}

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    scoreTracker = { Fire: 0, Water: 0, Earth: 0, Air: 0 };
    resultsCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    loadQuestion();
});

loadQuestion();
