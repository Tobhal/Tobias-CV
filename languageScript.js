window.addEventListener('DOMContentLoaded', () => {
  let language = navigator.language || navigator.userLanguage;

  if (language == "no") {
    window.location.replace("https://www.hallingstad.me/tobias/index-no.html");
  } else {
    window.location.replace("https://www.hallingstad.me/tobias/index-en.html");
  }
});