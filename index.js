let cible1 = document.getElementById("versfrancs");
cible1.addEventListener("click", versFrancs);

function versFrancs(event) {
  let prix = document.getElementById("valeur").value;
  console.log(prix);
  let resultat = prix * 6.56;
  console.log(resultat);
  document.getElementById("resultat").value = resultat;
}
let cible2 = document.getElementById("verseuros");
cible2.addEventListener("click", versEuros);

function versEuros(event) {
  let prix = document.getElementById("valeur").value;
  console.log(prix);
  let resultat = prix / 6.56;
  console.log(resultat);
  document.getElementById("resultat").value = resultat;
}

let cible3 = document
  .getElementById("passwd")
  .addEventListener("input", verifier);

function verifier(event) {
  let motDePasse = document.getElementById("passwd").value.length;
  console.log(motDePasse);
  if (motDePasse < 5) {
    document.getElementById("msgPasswd").textContent = "Faible";
    document.getElementById("msgPasswd").style.color = "red";
  } else if (motDePasse <= 7) {
    document.getElementById("msgPasswd").textContent = "Moyen";
    document.getElementById("msgPasswd").style.color = "orange";
  } else if (motDePasse >= 8) {
    document.getElementById("msgPasswd").textContent = "Fort";
    document.getElementById("msgPasswd").style.color = "green";
  }
}
