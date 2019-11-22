window.onload = startup;

function startup() {
  document.getElementsByClassName("jobHead")[0].addEventListener("click", function() {
    hideData("jobData");
  });
  document.getElementsByClassName("educationHead")[0].addEventListener("click", function() {
    hideData("educationData");
  });
  document.getElementsByClassName("knowlageHead")[0].addEventListener("click", function() {
    hideData("knowlageData");
  });


};

function hideData(data) {
  let element = document.getElementsByClassName(data)[0];
  //console.log("element = " + data + "Style = " + element.style.display);



  if (element.style.display != "none") {
    console.log("show");
    element.style.display = "none";
  } else {
    console.log("hidden");
    element.style.display = "";
  }
}