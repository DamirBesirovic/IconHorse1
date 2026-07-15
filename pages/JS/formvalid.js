const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
var lang = localStorage.getItem("language");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const usernameValue = username.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue === "") {
    if (lang === "en") {
      setError(username, "Username is required");
    } else {
      setError(username, "Korisnicko ime ne sme biti prazno");
    }
  }
  // else {
  //   setSuccess(username);
  // }

  if (emailValue === "") {
    if (lang === "en") {
      setError(email, "Email is required");
    } else {
      setError(email, "Email ne sme biti prazan");
    }
  } else if (!isValidEmail(emailValue)) {
    if (lang === "en") {
      setError(email, "Provide a valid email address");
    } else {
      setError(email, "Unesite validnu email adresu");
    }
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    if (lang === "en") {
      setError(password, "Password is required");
    } else {
      setError(password, "Sifra ne sme biti prazna");
    }
  } else {
    setSuccess(password);
  }

  //-----------------------------------za naloge------------------------
  // 
  //--------------------------------------------------------------------

  if (usernameValue && passwordValue && emailValue) {
    fetch("https://medzidjasarovic.github.io/IconHorse/accounts.json")
      .then((res) => res.json())
      .then((data) => {
        const unetiPass = hex_md5(passwordValue);
        console.log(unetiPass);
        var korisnici = data.users;

        korisnici = korisnici.filter((el) => {
          return el.username == usernameValue;
        });

        // do ovde radi

        if (korisnici.length >= 1) {
          let flag = true;
          for (let i = 0; i < korisnici.length; i++) {
            if (korisnici[i].password == unetiPass) {
              localStorage.setItem("loggedIn", true);
              flag = !flag;
              location.href = "index.html";

              break;
            }
            break;
          }
          if (flag) {
            if (lang === "en") {
              setError(password, "Wrong password");
              setSuccess(username);
            } else {
              setError(password, "Pogresna sifra");
              setSuccess(username);
            }
          }
        } else {
          if (lang === "en") {
            setError(username, "Wrong username");
            setError(password, "Doesent match any user");
          } else {
            setError(username, "Pogresno korisnicko ime");
            setError(password, "Ne postoji korisnik");
          }
        }
      });
  }
};
