/* ===== Program Structure page: semester tabs ===== */
document.addEventListener("DOMContentLoaded", function () {

  /* To change a subject or course code, edit the text inside the quotes below.
     Each line is: ["course code", "subject name"] */
  var semesters = {
    1: [
      ["1234", "Design principles"],
      ["1234", "Design Principles & Elements"],
      ["1234", "Minor"],
      ["1234", "Skill enhancement course"],
      ["1234", "English"],
      ["1234", "Open elective"],
      ["1234", "Exploration of Materials"]
    ],
    2: [
      ["1234", "Form, Space and Structure"],
      ["1234", "Design Process"],
      ["1234", "Minor"],
      ["1234", "Sketching & Conceptualisation(Skill enhancement course)"],
      ["1234", "Environmental studies (AEC)"],
      ["1234", "Open elective"],
      ["1234", "Indian Arts for Design"],
      ["1234", "IKS- Indian Thoughts and Traditions (Value education course)"]
    ],
    3: [
      ["1234", "Storytelling"],
      ["1234", "Cognitive Ergonomics/ Ergonomics for Visual Communication Ergonomics for Products Design"],
      ["1234", "Minor"],
      ["1234", "Calligraphy and Typography (Skill enhancement course)"],
      ["1234", "Environmental studies (AEC)"],
      ["1234", "Open elective"],
      ["1234", "Ethnography"],
      ["1234", "Field Project Social Immersion (Value education course)"]
    ],
    4: [
      ["1234", "Packaging & Interaction"],
      ["1234", "Introduction to Visual Tools (Wireframing & Prototyping) /Semiotics/ Semantics"],
      ["1234", "Minor"],
      ["1234", "Hindi (AEC)"],
      ["1234", "Methods/ Grid & Layout/ Sustainable Design"],
      ["1234", "Problem Analysis Field Project Ecological Immersion (Value education course)"]
    ]
  };

  var tabs = document.querySelectorAll(".sem-tab");
  var rowsBox = document.getElementById("semRows");

  function showSemester(num) {
    var data = semesters[num];
    if (!data) { return; }

    rowsBox.innerHTML = "";
    data.forEach(function (item) {
      var row = document.createElement("div");
      row.className = "row";

      var code = document.createElement("div");
      code.className = "col-code";
      code.textContent = item[0];

      var name = document.createElement("div");
      name.className = "col-name";
      name.textContent = item[1];

      row.appendChild(code);
      row.appendChild(name);
      rowsBox.appendChild(row);
    });

    tabs.forEach(function (t) {
      var isActive = t.getAttribute("data-sem") === String(num);
      t.classList.toggle("active", isActive);
      t.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      if (tab.disabled) { return; }
      showSemester(tab.getAttribute("data-sem"));
    });
  });

  showSemester(1);
});