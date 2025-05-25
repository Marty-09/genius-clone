// scripts/github.js

// ⚠️ Inserisci il token manualmente nella console del browser per motivi di sicurezza
let GITHUB_TOKEN = ""; // <-- non inserire mai il token qui!

const USERNAME = "Marty-09"; // cambia se il tuo username è diverso
const REPO = "genius-clone"; // cambia se hai chiamato diversamente la repo
const BRANCH = "main";

async function createFile(path, content, message) {
  if (!GITHUB_TOKEN) {
    alert("⚠️ Devi prima inserire il GITHUB_TOKEN nella console del browser.");
    return;
  }

  const url = `https://api.github.com/repos/${USERNAME}/${REPO}/contents/${path}`;
  const data = {
    message: message || `Aggiunta file ${path}`,
    content: btoa(unescape(encodeURIComponent(content))),
    branch: BRANCH,
  };

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const json = await res.json();
  if (res.ok) {
    alert("✅ Pagina creata con successo!");
    location.href = `/${REPO}/${path.replace(".md", ".html")}`;
  } else {
    console.error(json);
    alert("❌ Errore nella creazione della pagina.");
  }
}