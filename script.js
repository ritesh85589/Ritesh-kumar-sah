const questions = [
    // 1-10: Computer Fundamentals
    {
        question: "What is the brain of a computer?",
        options: ["RAM", "CPU", "ROM", "Hard Disk"],
        answer: 1
    },
    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Control Processing User"
        ],
        answer: 0
    },
    {
        question: "Which device is used to enter data?",
        options: ["Monitor", "Printer", "Keyboard", "Speaker"],
        answer: 2
    },
    {
        question: "Which memory is volatile?",
        options: ["ROM", "Hard Disk", "RAM", "DVD"],
        answer: 2
    },
    {
        question: "What is the full form of ROM?",
        options: [
            "Read Only Memory",
            "Random Only Memory",
            "Read Open Memory",
            "Run Only Machine"
        ],
        answer: 0
    },
    {
        question: "Which number system uses 0 and 1?",
        options: ["Decimal", "Binary", "Octal", "Hexadecimal"],
        answer: 1
    },
    {
        question: "Which is an output device?",
        options: ["Mouse", "Keyboard", "Scanner", "Monitor"],
        answer: 3
    },
    {
        question: "What is the smallest unit of data?",
        options: ["Byte", "Bit", "KB", "MB"],
        answer: 1
    },
    {
        question: "Which software manages computer hardware?",
        options: [
            "Operating System",
            "MS Word",
            "Web Browser",
            "Calculator"
        ],
        answer: 0
    },
    {
        question: "Which company developed Windows?",
        options: ["Google", "Apple", "Microsoft", "IBM"],
        answer: 2
    },

    // 11-20: Programming Languages
    {
        question: "Which language is used to create web page structure?",
        options: ["CSS", "HTML", "SQL", "Python"],
        answer: 1
    },
    {
        question: "Which language is used for web page styling?",
        options: ["HTML", "C", "CSS", "SQL"],
        answer: 2
    },
    {
        question: "Who developed JavaScript?",
        options: [
            "James Gosling",
            "Dennis Ritchie",
            "Brendan Eich",
            "Guido van Rossum"
        ],
        answer: 2
    },
    {
        question: "Which symbol is used for a single-line comment in JavaScript?",
        options: ["//", "#", "<!--", "**"],
        answer: 0
    },
    {
        question: "Which language is known for AI and Data Science?",
        options: ["HTML", "Python", "CSS", "XML"],
        answer: 1
    },
    {
        question: "Which keyword is used to define a function in Python?",
        options: ["function", "func", "def", "define"],
        answer: 2
    },
    {
        question: "Which of these is a loop in C?",
        options: ["for", "print", "include", "define"],
        answer: 0
    },
    {
        question: "Which extension is used for Python files?",
        options: [".html", ".css", ".py", ".java"],
        answer: 2
    },
    {
        question: "Which language is primarily used for Android development?",
        options: ["Kotlin", "HTML", "CSS", "SQL"],
        answer: 0
    },
    {
        question: "Which data type stores True or False?",
        options: ["Integer", "Boolean", "String", "Float"],
        answer: 1
    },

    // 21-30: Database and SQL
    {
        question: "What does DBMS stand for?",
        options: [
            "Database Management System",
            "Data Backup Management Software",
            "Digital Base Machine System",
            "Database Memory Service"
        ],
        answer: 0
    },
    {
        question: "Which language is used to manage relational databases?",
        options: ["HTML", "SQL", "CSS", "C++"],
        answer: 1
    },
    {
        question: "Which SQL command retrieves data?",
        options: ["INSERT", "DELETE", "SELECT", "UPDATE"],
        answer: 2
    },
    {
        question: "Which key uniquely identifies a record?",
        options: [
            "Foreign Key",
            "Primary Key",
            "Duplicate Key",
            "Alternate Value"
        ],
        answer: 1
    },
    {
        question: "Which SQL command is used to add new records?",
        options: ["INSERT", "SELECT", "DROP", "ALTER"],
        answer: 0
    },
    {
        question: "What is a row in a relational table called?",
        options: ["Field", "Record", "Column", "Database"],
        answer: 1
    },
    {
        question: "Which SQL command removes a table?",
        options: ["DELETE", "UPDATE", "DROP", "SELECT"],
        answer: 2
    },
    {
        question: "What is a foreign key used for?",
        options: [
            "To format data",
            "To create a relationship between tables",
            "To delete a database",
            "To sort records"
        ],
        answer: 1
    },
    {
        question: "Which database model uses tables?",
        options: [
            "Relational Model",
            "Hierarchical Model",
            "Network Model",
            "Object Model"
        ],
        answer: 0
    },
    {
        question: "What does DDL stand for?",
        options: [
            "Data Definition Language",
            "Data Display Language",
            "Database Design Logic",
            "Digital Data Link"
        ],
        answer: 0
    },

    // 31-40: Networking and Internet
    {
        question: "What does LAN stand for?",
        options: [
            "Local Area Network",
            "Large Access Network",
            "Long Area Node",
            "Local Access Number"
        ],
        answer: 0
    },
    {
        question: "Which device connects different networks?",
        options: ["Keyboard", "Router", "Monitor", "Printer"],
        answer: 1
    },
    {
        question: "What is the full form of IP?",
        options: [
            "Internet Protocol",
            "Internal Program",
            "Information Process",
            "Internet Provider"
        ],
        answer: 0
    },
    {
        question: "Which protocol is used to access web pages securely?",
        options: ["HTTP", "FTP", "HTTPS", "SMTP"],
        answer: 2
    },
    {
        question: "What does WWW stand for?",
        options: [
            "World Wide Web",
            "World Web Window",
            "Wide World Website",
            "Web World Work"
        ],
        answer: 0
    },
    {
        question: "Which topology uses a central hub or switch?",
        options: ["Bus", "Ring", "Star", "Mesh"],
        answer: 2
    },
    {
        question: "Which protocol is used to send emails?",
        options: ["SMTP", "HTTP", "FTP", "IP"],
        answer: 0
    },
    {
        question: "Which device converts digital signals to analog and vice versa?",
        options: ["Switch", "Modem", "Repeater", "Hub"],
        answer: 1
    },
    {
        question: "Which network covers a large geographical area?",
        options: ["LAN", "PAN", "WAN", "CAN"],
        answer: 2
    },
    {
        question: "How many layers are in the OSI model?",
        options: ["4", "5", "7", "8"],
        answer: 2
    },

    // 41-50: Data Science, Security and Software
    {
        question: "What is the full form of AI?",
        options: [
            "Automatic Information",
            "Artificial Intelligence",
            "Advanced Internet",
            "Applied Interface"
        ],
        answer: 1
    },
    {
        question: "What is Data Mining?",
        options: [
            "Deleting data",
            "Finding useful patterns in data",
            "Creating hardware",
            "Formatting a computer"
        ],
        answer: 1
    },
    {
        question: "Which technique is used to predict continuous values?",
        options: [
            "Classification",
            "Clustering",
            "Regression",
            "Sorting"
        ],
        answer: 2
    },
    {
        question: "Which algorithm is commonly used for clustering?",
        options: ["K-Means", "Linear Regression", "Naive Bayes", "Decision Tree"],
        answer: 0
    },
    {
        question: "What is the full form of EDA?",
        options: [
            "Electronic Data Application",
            "Exploratory Data Analysis",
            "Extended Database Access",
            "External Data Arrangement"
        ],
        answer: 1
    },
    {
        question: "Which of these is an example of malware?",
        options: ["Firewall", "Antivirus", "Virus", "Backup"],
        answer: 2
    },
    {
        question: "What is the main purpose of a firewall?",
        options: [
            "To increase screen brightness",
            "To monitor and control network traffic",
            "To create documents",
            "To store images"
        ],
        answer: 1
    },
    {
        question: "Which software is used to detect and remove computer viruses?",
        options: ["Antivirus", "Compiler", "Browser", "Text Editor"],
        answer: 0
    },
    {
        question: "What is the full form of SDLC?",
        options: [
            "Software Development Life Cycle",
            "System Data Link Control",
            "Software Design Language Code",
            "System Development Logic Cycle"
        ],
        answer: 0
    },
    {
        question: "Which testing checks individual software components?",
        options: [
            "System Testing",
            "Acceptance Testing",
            "Unit Testing",
            "Integration Testing"
        ],
        answer: 2
    }
];
const welcome = document.getElementById("welcome");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const review = document.getElementById("review");

const questionNumber = document.getElementById("questionNumber");
const questionText = document.getElementById("question");
const optionsBox = document.getElementById("options");
const timerText = document.getElementById("timer");
const progress = document.getElementById("progress");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");

let currentIndex = 0;
let userAnswers = [];
let timeLeft = 1500;
let timerInterval = null;
let submitted = false;

document.getElementById("startBtn").addEventListener("click", startQuiz);
prevBtn.addEventListener("click", () => changeQuestion(-1));
nextBtn.addEventListener("click", () => changeQuestion(1));
submitBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to submit the quiz?")) {
        finishQuiz();
    }
});

document.getElementById("restartBtn").addEventListener("click", startQuiz);
document.getElementById("restartReviewBtn").addEventListener("click", startQuiz);

document.getElementById("reviewBtn").addEventListener("click", showReview);

function startQuiz() {
    clearInterval(timerInterval);

    currentIndex = 0;
    userAnswers = Array(questions.length).fill(null);
    timeLeft = 1500;
    submitted = false;

    welcome.hidden = true;
    result.hidden = true;
    review.hidden = true;
    quiz.hidden = false;

    renderQuestion();
    updateTimer();

    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            finishQuiz();
        }
    }, 1000);
}

function renderQuestion() {
    const item = questions[currentIndex];

    questionNumber.textContent =
        `Question ${currentIndex + 1} of ${questions.length}`;

    questionText.textContent = item.question;
    optionsBox.replaceChildren();

    item.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "option";

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "answer";
        radio.value = index;
        radio.checked = userAnswers[currentIndex] === index;

        const text = document.createElement("span");
        text.textContent = option;

        radio.addEventListener("change", () => {
            userAnswers[currentIndex] = index;
            renderQuestion();
        });

        label.append(radio, text);

        if (radio.checked) {
            label.classList.add("selected");
        }

        optionsBox.appendChild(label);
    });

    prevBtn.disabled = currentIndex === 0;

    const isLast = currentIndex === questions.length - 1;
    nextBtn.hidden = isLast;
    submitBtn.hidden = !isLast;

    progress.style.width =
        `${((currentIndex + 1) / questions.length) * 100}%`;
}

function changeQuestion(direction) {
    const newIndex = currentIndex + direction;

    if (newIndex < 0 || newIndex >= questions.length) {
        return;
    }

    currentIndex = newIndex;
    renderQuestion();
}

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timerText.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function finishQuiz() {
    if (submitted) return;

    submitted = true;
    clearInterval(timerInterval);

    const score = questions.reduce((total, item, index) => {
        return total + (userAnswers[index] === item.answer ? 1 : 0);
    }, 0);

    const attempted = userAnswers.filter(answer => answer !== null).length;

    quiz.hidden = true;
    result.hidden = false;
    review.hidden = true;

    document.getElementById("score").textContent =
        `Your Score: ${score} / ${questions.length}`;

    document.getElementById("message").textContent =
        `Correct: ${score} | Incorrect: ${attempted - score} | Unanswered: ${questions.length - attempted} | Percentage: ${score * 10}%`;

    try {
        localStorage.setItem("lastQuizResult", JSON.stringify({
            score,
            total: questions.length,
            date: new Date().toLocaleString()
        }));
    } catch (error) {
        console.warn("Result could not be saved.", error);
    }
}

function showReview() {
    result.hidden = true;
    review.hidden = false;

    const reviewList = document.getElementById("reviewList");
    reviewList.replaceChildren();

    questions.forEach((item, index) => {
        const card = document.createElement("div");
        const heading = document.createElement("h3");
        heading.textContent = `${index + 1}. ${item.question}`;

        const yourAnswer = document.createElement("p");
        yourAnswer.textContent = "Your answer: " +
            (userAnswers[index] === null
                ? "Not answered"
                : item.options[userAnswers[index]]);

        const correctAnswer = document.createElement("p");
        correctAnswer.textContent =
            "Correct answer: " + item.options[item.answer];
        correctAnswer.className = "correct";

        if (userAnswers[index] !== item.answer) {
            yourAnswer.className = "incorrect";
        }

        card.append(heading, yourAnswer, correctAnswer);
        reviewList.appendChild(card);
    });
}