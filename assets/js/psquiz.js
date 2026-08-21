const quizData = [
    {
        question: "First question: Do you think you'd be cozier at home or with friends?",
        options: [
            { 
                text: "At home", 
                weights: [
                    "Pacman",
                    "Burrowing",
                    "Bull",
                    "Flying"
                ] 
            },
            { 
                text: "With friends", 
                weights: ["Humming", "Dart"]
            }
        ]
    },
    {
        question: "Do you think you communicate better through your expressions or through your words?",
        options: [
            { 
                text: "Expressions", 
                weights: [
                    "Pacman",
                    "Burrowing",
                    "Bull",
                    "Flying",
                    "Humming" 
                ] 
            },
            { 
                text: "Words", 
                weights: ["Pacman", "Dart"]
            }
        ]
    },
    {
        question: "What kind of clothes do you like?",
        options: [
            { 
                text: "Flashy with designs", 
                weights: [
                    "Pacman",
                    "Flying",
                    "Dart"
                ] 
            },
            { 
                text: "Netural tones", 
                weights: [
                    "Bull",
                    "Humming",
                    "Burrowing"
                ]
            }
        ]
    },
    {
        question: "Smooth or textured?",
        options: [
            { 
                text: "Smooth", 
                weights: [
                    "Flying",
                    "Dart"
                ] 
            },
            { 
                text: "Textured", 
                weights: [
                    "Bull",
                    "Humming",
                    "Burrowing",
                    "Pacman"
                ]
            }
        ]
    },
    {
        question: "Ability",
        options: [
            { text: "To soar", weights: ["Flying"] },
            { text: "To hide", weights: ["Pacman", "Burrowing"] },
            { text: "To group up", weights: ["Dart", "Humming"] },
            { text: "To fight", weights: ["Bull"] }
        ]
    },
    {
        question: "Which of the bugs would you try to catch as a snack?",
        options: [
            {
                text: "An ant", 
                weights: [
                    "Dart", 
                    "Humming", 
                    "Flying", 
                    "Burrowing"
                ] 
            },
            { text: "A worm", weights: ["Pacman"] },
            { text: "A mouse", weights: ["Bull"] }
        ]
    },
    {
        question: "Last question: Which of these would you want to call home?",
        options: [
            { text: "Rocky deserts", weights: ["Pacman", "Humming", "Burrowing"] },
            { text: "A forest", weights: ["Dart", "Flying"] },
            { text: "At a pond in a rainy city", weights: ["Bull"] }
        ]
    }
];

const resultsData = {
    Pacman: {
        title: "South American horned frog AKA Pacman Frog",
        desc: ""
    },
    Bull: {
        title: "American Bullfrog",
        desc: ""
    },
    Flying: {
        title: "Flying Frog",
        desc: ""
    },
    Humming: {
        title: "The Dotted Humming Frog",
        desc: ""
    },
    Burrowing: {
        title: "Burrowing Frog",
        desc: ""
    },
    Dart: {
        title: "Poison Dart Frog",
        desc: ""
    }
};

let currentQuestionIndex = 0;
let scoreTracker = { 
    Pacman: 0, 
    Bull: 0, 
    Flying: 0, 
    Humming: 0,
    Burrowing: 0,
    Dart: 0
};

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
        button.addEventListener("click", () => handleAnswer(option.weights));
        optionsContainer.appendChild(button);
    });
}

function handleAnswer(weights) {
    for (const category of weights) {
        scoreTracker[category]++;
    }
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

    const { maxVal, keys } = Object.entries(scoreTracker).reduce(
      (acc, [key, val]) => {
        if (val > acc.maxVal) {
          return { maxVal: val, keys: [key] };
        }
        if (val === acc.maxVal) {
          acc.keys.push(key);
        }
        return acc;
      },
      { maxVal: -Infinity, keys: [] }
    );

    let results = [];
    for (const group of keys) {
        results.push(resultsData[group].title);
    }
    personalityTitle.textContent = results.join(", ");
    // personalityDesc.textContent = resultsData[topFrogtype].desc;
}

restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    scoreTracker = { 
        Pacman: 0, 
        Bull: 0, 
        Flying: 0, 
        Humming: 0,
        Burrowing: 0,
        Dart: 0
    };
    resultsCard.classList.add("hidden");
    quizCard.classList.remove("hidden");
    loadQuestion();
});

loadQuestion();
