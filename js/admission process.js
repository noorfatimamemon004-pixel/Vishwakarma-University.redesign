document.addEventListener("DOMContentLoaded", function () {
  var fab = document.getElementById("vidyaFab");
  var panel = document.getElementById("vidyaPanel");
  var closeBtn = document.getElementById("vidyaClose");
  var messages = document.getElementById("vidyaMessages");
  var input = document.getElementById("vidyaInput");
  var sendBtn = document.getElementById("vidyaSend");

  function openChat() {
    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");
    input.focus();
  }

  function closeChat() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
  }

  function addMessage(text, who) {
    var div = document.createElement("div");
    div.className = "vidya-msg " + who;
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  function sendMessage() {
    var text = input.value.trim();
    if (text === "") return;
    addMessage(text, "user");
    input.value = "";
    setTimeout(function () {
      addMessage("Thank you for your question! An admissions counsellor will get back to you soon. For urgent queries, please call +91 9590300911.", "bot");
    }, 600);
  }

  // Open / close with the floating button
  fab.addEventListener("click", function (e) {
    e.stopPropagation();
    if (panel.classList.contains("open")) {
      closeChat();
    } else {
      openChat();
    }
  });

  // Close with the cross
  closeBtn.addEventListener("click", closeChat);

  // Clicking inside the panel should not close it
  panel.addEventListener("click", function (e) {
    e.stopPropagation();
  });

  // Click anywhere outside closes it
  document.addEventListener("click", closeChat);

  // Escape closes it
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeChat();
  });

  // Send with button or Enter
  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  // View More toggle
  var moreBtn = document.getElementById("viewMoreBtn");
  var moreText = document.getElementById("moreText");
  moreBtn.addEventListener("click", function (e) {
    e.preventDefault();
    moreText.classList.toggle("show");
    moreBtn.textContent = moreText.classList.contains("show") ? "View Less" : "View More";
  });

  // Download PDF (no real PDF yet)
  document.getElementById("downloadBtn").addEventListener("click", function () {
    alert("The admission checklist PDF will be available soon.");
  });
});