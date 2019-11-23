window.onload = startup;

function startup() {
  document.getElementById("main").addEventListener("click", function() {
    hideData("main");
  });
  document.getElementById("education").addEventListener("click", function() {
    hideData("education");
  });
  document.getElementById("knowlage").addEventListener("click", function() {
    hideData("knowlage");
  });
};



function hideData(data) {
  let element = document.getElementsByClassName(data)[0];

  if (element.style.display != "none") {
    console.log("show");
    for (let i = 0; i < document.getElementsByClassName("main").length; i++) {
      document.getElementsByClassName(data)[i].style.display = "none"
    };
  } else {
    console.log("hidden");
    for (let i = 0; i < document.getElementsByClassName("main").length; i++) {
      document.getElementsByClassName(data)[i].style.display = ""
    };
  }
}