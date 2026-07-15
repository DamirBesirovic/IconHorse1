const changeSrcBtn = document.getElementById("changeSrcBtn");
const image = document.querySelector(".ikone img");
image.src = "https://icon.horse/icon/facebook.com";

changeSrcBtn.addEventListener("click", function () {
  const noviUrl = document.getElementById("linksajta").value.toLowerCase(); // Uzima value iz inputa
  if (noviUrl == "") {
    image.src = "https://icon.horse/icon/facebook.com"; //Ukoliko korisnik unese prazno polje vrati se
  } // img.src na placeholder value
  else {
    image.src = "https://icon.horse/icon/" + noviUrl; // Podesavanje img.src na novi value
  }
});

//Za neke searcheve se odbija response zbog CORB(Cross-Origin Read Blocking)
