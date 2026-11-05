
document.addEventListener("DOMContentLoaded", function () {

    const sections = document.querySelectorAll(".specialisation-section");

    sections.forEach(function (section) {

        const minorButton = section.querySelector(".minor-toggle");
        const backButton = section.querySelector(".back-to-major");

        const majorContent = section.querySelector(".major-content");
        const minorContent = section.querySelector(".minor-content");

        // Make sure all required elements exist
        if (!minorButton || !backButton || !majorContent || !minorContent) {
            console.error("Specialisation interaction elements missing.");
            return;
        }

        // Initial state
        minorContent.hidden = true;
        minorContent.style.display = "none";

        // SHOW RECOMMENDED MINORS
        minorButton.addEventListener("click", function (event) {

            event.preventDefault();

            majorContent.style.display = "none";

            minorContent.hidden = false;
            minorContent.style.display = "block";

            minorButton.setAttribute("aria-expanded", "true");

        });

        // BACK TO MAJOR
        backButton.addEventListener("click", function (event) {

            event.preventDefault();

            minorContent.style.display = "none";
            minorContent.hidden = true;

            majorContent.style.display = "";

            minorButton.setAttribute("aria-expanded", "false");

        });

    });

});
