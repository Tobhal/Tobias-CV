window.addEventListener('DOMContentLoaded', () => {
  let language = navigator.language || navigator.userLanguage;

  console.log(language);
 
  if (language == "en") {
    window.location.replace("https://www.hallingstad.me/tobias/index-en.html");
    //  window.location = "https://www.hallingstad.me/tobias/index-en.html";
  } else {
    window.location.replace("https://www.hallingstad.me/tobias/index-no.html");
    //  window.location = "https://www.hallingstad.me/tobias/index-no.html";
  }
});