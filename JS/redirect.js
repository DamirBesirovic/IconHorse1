document.addEventListener("DOMContentLoaded", (event) => {
  const btns = document.getElementsByClassName("hbtn");

  // Debugging da bi proverili koliko ima elemenata nadjenih sa klasom hbtn , treba da ih bude 4
  console.log("dugmici nadjeni:", btns.length);

  if (btns.length >= 4) {
    // Icons button
    btns[0].addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !localStorage.getItem("loggedIn") ||
        localStorage.getItem("loggedIn") === "false"
      ) {
        console.log("User not logged in. Redirecting to login.");
        location.href = "../pages/login.html";
      } else {
        console.log("User logged in. Redirecting to icons.");
        location.href = "../pages/icons.html";
        localStorage.setItem("page", "icons");
      }
    });

    // About us button
    btns[1].addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !localStorage.getItem("loggedIn") ||
        localStorage.getItem("loggedIn") === "false"
      ) {
        console.log("User not logged in. Redirecting to login.");
        location.href = "../pages/login.html";
      } else {
        console.log("User logged in. Redirecting to about.");
        location.href = "../pages/about.html";
        localStorage.setItem("page", "about");
      }
    });

    // Contact us button
    btns[2].addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !localStorage.getItem("loggedIn") ||
        localStorage.getItem("loggedIn") === "false"
      ) {
        console.log("User not logged in. Redirecting to login.");
        location.href = "../pages/login.html";
      } else {
        console.log("User logged in. Redirecting to contact.");
        location.href = "../pages/contact.html";
        localStorage.setItem("page", "contact");
      }
    });

    // Start now button
    btns[3].addEventListener("click", (e) => {
      e.preventDefault();
      if (
        !localStorage.getItem("loggedIn") ||
        localStorage.getItem("loggedIn") === "false"
      ) {
        console.log("User not logged in. Redirecting to login.");
        location.href = "../pages/login.html";
      } else {
        console.log("User logged in. Redirecting to icons.");
        location.href = "../pages/icons.html";
        localStorage.setItem("page", "icons");
      }
    });
  } else {
    console.error("Not enough buttons with class 'hbtn' found.");
  }
});
