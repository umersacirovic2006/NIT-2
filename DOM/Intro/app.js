const introDiv = document.querySelector("#pocetak");
const id = document.getElementById("pocetak")

// const klasa = document.getElementsByClassName("neka-klasa")
const klasa = document.querySelectorAll(".neka-klasa")

console.log(klasa);

console.log(id);

console.log(introDiv);

introDiv.style.height = "20vh"
introDiv.style.background = "red";

introDiv.textContent = "Ovo je promena iz .js fajla";

introDiv.innerHTML = "<p>Nesto drugo</p>";

