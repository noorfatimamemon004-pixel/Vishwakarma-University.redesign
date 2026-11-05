
document.addEventListener("DOMContentLoaded", function () {

    /* ======================================
       CURRICULUM MODAL
    ====================================== */

    const modal = document.getElementById("curriculumModal");
    const modalTitle = document.getElementById("me-modal-title");
    const modalContent = document.getElementById("me-modal-content");
    const closeButton = document.querySelector(".me-modal-close");
    const curriculumButtons = document.querySelectorAll(
        ".me-view-curriculum"
    );

    if (modal && modalTitle && modalContent && closeButton) {

        const curricula = {

            "computer-science": {
                title: "Computer Science",
                subjects: [
                    "Principles of computers and information technology",
                    "Web Technologies",
                    "PHP and MySQL",
                    "Go Programming",
                    "Web Development using Python",
                    "Minor Track Project"
                ]
            }

        };

        let previouslyFocusedElement = null;

        function openModal(curriculumId, triggerButton) {

            const curriculum = curricula[curriculumId];

            modalTitle.textContent = curriculum
                ? curriculum.title
                : triggerButton.closest(".me-subject-card")
                    .querySelector("h4").textContent;

            modalContent.replaceChildren();

            if (curriculum) {

                curriculum.subjects.forEach(function (subject, index) {

                    const row = document.createElement("div");
                    row.className = "me-semester-row";

                    const semester = document.createElement("div");
                    semester.className = "me-semester";
                    semester.textContent = "Semester " + (index + 1);

                    const subjectName = document.createElement("div");
                    subjectName.className = "me-semester-subject";
                    subjectName.textContent = subject;

                    row.appendChild(semester);
                    row.appendChild(subjectName);
                    modalContent.appendChild(row);

                });

            } else {

                const note = document.createElement("p");
                note.className = "me-curriculum-note";
                note.textContent =
                    "The curriculum details for this subject will be added here.";

                modalContent.appendChild(note);

            }

            previouslyFocusedElement = triggerButton;

            modal.classList.add("is-open");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";

            closeButton.focus();

        }

        function closeModal() {

            modal.classList.remove("is-open");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";

            if (previouslyFocusedElement) {
                previouslyFocusedElement.focus();
            }

        }

        curriculumButtons.forEach(function (button) {

            button.addEventListener("click", function () {

                openModal(button.dataset.curriculum, button);

            });

        });

        closeButton.addEventListener("click", closeModal);

        // Close when clicking outside the white modal panel
        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                closeModal();
            }

        });

        // Close when pressing Escape
        document.addEventListener("keydown", function (event) {

            if (
                event.key === "Escape" &&
                modal.classList.contains("is-open")
            ) {
                closeModal();
            }

        });

    }


    /* ======================================
       QUIZ: FIRST QUESTION
    ====================================== */

    const majorOptions = document.querySelectorAll(
        'input[name="me-major"]'
    );

    const quizNext = document.querySelector(".me-quiz-next");
    const quizFeedback = document.querySelector(".me-quiz-feedback");

    majorOptions.forEach(function (option) {

        option.addEventListener("change", function () {

            if (quizNext) {
                quizNext.disabled = false;
            }

            if (quizFeedback) {
                quizFeedback.textContent = "";
            }

        });

    });

    if (quizNext) {

        quizNext.addEventListener("click", function () {

            const selectedMajor = document.querySelector(
                'input[name="me-major"]:checked'
            );

            if (!selectedMajor) {
                return;
            }

            if (quizFeedback) {
                quizFeedback.textContent =
                    "Your major selection is " +
                    selectedMajor.value +
                    ". The remaining quiz questions can be added next.";
            }

        });

    }

});
