/* ===== Minor and Electives page ===== */
document.addEventListener("DOMContentLoaded", function () {

  /* ---------- 1. CURRICULUM OVERLAY ---------- */
  /* Computer Science is taken from your design. The other subjects use
     placeholder semester names: edit the text inside the quotes to change them. */
  var curriculum = {
    "computer-science": {
      title: "Computer Science",
      sems: [
        "Principles of computers and information technology",
        "Web Technologies",
        "PHP and MySQL",
        "Go Programming",
        "Web Development using Python",
        "Minor Track Project"
      ]
    },
    "maths-statistics": {
      title: "Maths and Statistics",
      sems: ["Foundations of Mathematics", "Probability Basics", "Descriptive Statistics", "Data Interpretation", "Statistical Modelling", "Minor Track Project"]
    },
    "social-psychology": {
      title: "Social Psychology",
      sems: ["Introduction to Psychology", "Human Behaviour", "Perception and Cognition", "Social Influence", "Group Dynamics", "Minor Track Project"]
    },
    "sanskrit": {
      title: "Sanskrit",
      sems: ["Introduction to Sanskrit", "Grammar and Structure", "Classical Texts", "Sanskrit Literature", "Philosophy and Wisdom", "Minor Track Project"]
    },
    "journalism": {
      title: "Journalism",
      sems: ["Introduction to Journalism", "News Writing", "Media Ethics", "Broadcast and Digital Media", "Feature and Documentary", "Minor Track Project"]
    },
    "travel-tourism": {
      title: "Travel and Tourism",
      sems: ["Introduction to Tourism", "Global Destinations", "Cultural Heritage", "Hospitality Basics", "Tour Planning", "Minor Track Project"]
    },
    "management": {
      title: "Management",
      sems: ["Principles of Management", "Organisational Behaviour", "Marketing Basics", "Business Strategy", "Entrepreneurship", "Minor Track Project"]
    },
    "economics": {
      title: "Economics",
      sems: ["Introduction to Economics", "Microeconomics", "Macroeconomics", "Markets and Policy", "Development Economics", "Minor Track Project"]
    },
    "design": {
      title: "Design",
      sems: ["Design Fundamentals", "Visual Communication", "Form and Function", "Design Thinking", "Creative Practice", "Minor Track Project"]
    },
    "interior-spaces": {
      title: "Interior Spaces",
      sems: ["Introduction to Interiors", "Space Planning", "Materials and Light", "Furniture Basics", "Interior Styling", "Minor Track Project"]
    },
    "animation": {
      title: "Animation",
      sems: ["Principles of Animation", "Storyboarding", "2D Animation", "Character Design", "Motion Graphics", "Minor Track Project"]
    },
    "fashion": {
      title: "Fashion",
      sems: ["Introduction to Fashion", "Fabric and Textiles", "Style and Trends", "Garment Construction", "Fashion Illustration", "Minor Track Project"]
    }
  };

  var overlay = document.getElementById("curriculumOverlay");
  var modalTitle = document.getElementById("modalTitle");
  var modalBody = document.getElementById("modalBody");
  var modalClose = document.getElementById("modalClose");

  function openCurriculum(key) {
    var data = curriculum[key];
    if (!data) { return; }
    modalTitle.textContent = data.title;
    modalBody.innerHTML = "";
    data.sems.forEach(function (course, i) {
      var row = document.createElement("div");
      row.className = "cur-row";
      var left = document.createElement("div");
      left.className = "cur-sem";
      left.textContent = "Semester " + (i + 1);
      var right = document.createElement("div");
      right.className = "cur-course";
      right.textContent = course;
      row.appendChild(left);
      row.appendChild(right);
      modalBody.appendChild(row);
    });
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeCurriculum() {
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  document.querySelectorAll(".view-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openCurriculum(btn.getAttribute("data-subject"));
    });
  });
  modalClose.addEventListener("click", closeCurriculum);
  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) { closeCurriculum(); }
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeCurriculum(); closeVidya(); }
  });

  /* ---------- 2. QUIZ ---------- */
  var questions = [
    { q: "1. What's your major? (Choose one)",
      options: [
        { t: "Product design", m: ["Interior Spaces", "Design"] },
        { t: "Graphic design", m: ["Animation", "Journalism"] },
        { t: "UI/UX Design", m: ["Computer Science", "Social Psychology"] }
      ] },
    { q: "2. What do you enjoy the most?",
      options: [
        { t: "Solving logical problems", m: ["Computer Science", "Maths and Statistics"] },
        { t: "Telling stories", m: ["Journalism", "Animation"] },
        { t: "Understanding people", m: ["Social Psychology", "Management"] }
      ] },
    { q: "3. Which project sounds the most exciting?",
      options: [
        { t: "Building an app", m: ["Computer Science"] },
        { t: "Planning a space or a style", m: ["Interior Spaces", "Fashion"] },
        { t: "Researching a culture", m: ["Sanskrit", "Travel and Tourism"] }
      ] },
    { q: "4. How do you like to learn?",
      options: [
        { t: "With data and numbers", m: ["Maths and Statistics", "Economics"] },
        { t: "With visuals and making", m: ["Design", "Animation", "Fashion"] },
        { t: "With discussion and reading", m: ["Sanskrit", "Journalism", "Social Psychology"] }
      ] },
    { q: "5. Where do you see yourself?",
      options: [
        { t: "Leading a team", m: ["Management", "Economics"] },
        { t: "Exploring the world", m: ["Travel and Tourism", "Sanskrit"] },
        { t: "Creating something new", m: ["Design", "Computer Science", "Animation"] }
      ] }
  ];

  var quizQuestion = document.getElementById("quizQuestion");
  var quizOptions = document.getElementById("quizOptions");
  var quizDots = document.getElementById("quizDots");
  var quizNext = document.getElementById("quizNext");
  var current = 0;
  var chosen = [];

  function renderDots() {
    quizDots.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
      var d = document.createElement("span");
      if (i === current) { d.className = "active"; }
      quizDots.appendChild(d);
    }
  }

  function renderQuestion() {
    var item = questions[current];
    quizQuestion.textContent = item.q;
    quizOptions.className = "quiz-options";
    quizOptions.innerHTML = "";
    item.options.forEach(function (opt, idx) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "quiz-option";
      b.textContent = opt.t;
      if (chosen[current] === idx) { b.classList.add("selected"); }
      b.addEventListener("click", function () {
        chosen[current] = idx;
        quizOptions.querySelectorAll(".quiz-option").forEach(function (x) { x.classList.remove("selected"); });
        b.classList.add("selected");
        quizNext.disabled = false;
      });
      quizOptions.appendChild(b);
    });
    quizNext.disabled = chosen[current] === undefined;
    quizNext.style.display = "";
    quizNext.textContent = current === questions.length - 1 ? "See result" : "Next";
    renderDots();
  }

  function showResult() {
    var score = {};
    chosen.forEach(function (idx, qi) {
      questions[qi].options[idx].m.forEach(function (name) {
        score[name] = (score[name] || 0) + 1;
      });
    });
    var best = Object.keys(score).sort(function (a, b) { return score[b] - score[a]; });
    var top = best.slice(0, 2);
    quizQuestion.textContent = "Your result";
    quizOptions.className = "quiz-result";
    quizOptions.innerHTML = "We suggest exploring <strong>" + top.join("</strong> or <strong>") +
      "</strong> as your minor. Click View curriculum on the cards above to see the semesters.<br>";
    var again = document.createElement("button");
    again.type = "button";
    again.textContent = "Retake quiz";
    again.addEventListener("click", function () {
      current = 0;
      chosen = [];
      renderQuestion();
    });
    quizOptions.appendChild(again);
    quizNext.style.display = "none";
    quizDots.innerHTML = "";
    for (var i = 0; i < questions.length; i++) {
      var d = document.createElement("span");
      d.className = "active";
      quizDots.appendChild(d);
    }
  }

  quizNext.addEventListener("click", function () {
    if (chosen[current] === undefined) { return; }
    if (current < questions.length - 1) {
      current++;
      renderQuestion();
    } else {
      showResult();
    }
  });
  renderQuestion();

  /* ---------- 3. VIDYA ASSISTANT ---------- */
  var vidyaBtn = document.getElementById("vidyaBtn");
  var vidyaPanel = document.getElementById("vidyaPanel");
  var vidyaClose = document.getElementById("vidyaClose");
  var vidyaForm = document.getElementById("vidyaForm");
  var vidyaText = document.getElementById("vidyaText");
  var vidyaMessages = document.getElementById("vidyaMessages");

  function openVidya() {
    vidyaPanel.classList.add("open");
    vidyaPanel.setAttribute("aria-hidden", "false");
  }
  function closeVidya() {
    vidyaPanel.classList.remove("open");
    vidyaPanel.setAttribute("aria-hidden", "true");
  }
  function addMsg(text, who) {
    var m = document.createElement("div");
    m.className = "msg " + who;
    m.textContent = text;
    vidyaMessages.appendChild(m);
    vidyaMessages.scrollTop = vidyaMessages.scrollHeight;
  }

  vidyaBtn.addEventListener("click", function (e) {
    e.stopPropagation();
    if (vidyaPanel.classList.contains("open")) { closeVidya(); } else { openVidya(); }
  });
  vidyaClose.addEventListener("click", closeVidya);
  vidyaPanel.addEventListener("click", function (e) { e.stopPropagation(); });
  document.addEventListener("click", function () { closeVidya(); });

  vidyaForm.addEventListener("submit", function (e) {
    e.preventDefault();
    var text = vidyaText.value.trim();
    if (!text) { return; }
    addMsg(text, "user");
    vidyaText.value = "";
    setTimeout(function () {
      addMsg("Thank you for your question! Our admissions team will help you with the details shortly.", "bot");
    }, 500);
  });
});