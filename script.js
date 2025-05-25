// script.js
document.addEventListener("DOMContentLoaded", () => {
    const noteBox = document.getElementById("note-box");
    const annotations = document.querySelectorAll(".annotated");
  
    annotations.forEach(el => {
      el.addEventListener("click", () => {
        noteBox.innerText = el.dataset.note;
        noteBox.classList.remove("hidden");
      });
    });
  
    // Chiudi la nota cliccando fuori
    document.addEventListener("click", e => {
      if (!e.target.classList.contains("annotated") && !noteBox.contains(e.target)) {
        noteBox.classList.add("hidden");
      }
    });
  });  