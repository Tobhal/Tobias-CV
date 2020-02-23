window.onload = startup;

window.addEventListener('DOMContentLoaded', (event) => {
  if (localStorage.getItem("dark") == null) {
    localStorage.setItem("dark", "false");
  }
});

function startup() {
  if (localStorage.getItem("dark") == "true") {
    localStorage.setItem("dark", "true");
    document.documentElement.classList.toggle('theme--dark');
    document.getElementById('theme').classList.toggle('c-toggle--active');
  }

  document.getElementById("job").addEventListener("click", function() {
    hideData("job");
  });
  document.getElementById("education").addEventListener("click", function() {
    hideData("education");
  });
  document.getElementById("knowlage").addEventListener("click", function() {
    hideData("knowlage");
  });

  let element = document.getElementsByClassName("date")
  for (let i = 0; i < element.length; i++) {
    element[i].addEventListener("click", function(){
      changeDateInfo(element, i);
    });
    localStorage.setItem("date" + i, "true");
  };

  document.getElementById("themeButton").addEventListener("click", function () {
    darkmode();
  });
};

document.getElementById('theme').addEventListener('click', () => {
  darkmode();
});

feather.replace();

function hideData(data) {
  let element = document.getElementsByClassName(data)[0];

  if (element.style.display != "none") {
    console.log("show");
    for (let i = 0; i < document.getElementsByClassName(data).length; i++) {
      document.getElementsByClassName(data)[i].style.display = "none"
    };
  } else {
    console.log("hidden");
    for (let i = 0; i < document.getElementsByClassName(data).length; i++) {
      document.getElementsByClassName(data)[i].style.display = ""
    };
  };
};

function changeDateInfo(element, index) {
  //console.log(element + index);
  //console.log(document.getElementsByClassName("dateStart")[index].innerHTML + " " + document.getElementsByClassName("dateEnd")[index].innerHTML);
  let startDateHTML = document.getElementsByClassName("dateStart")[index].innerHTML;
  let endDateHTML = document.getElementsByClassName("dateEnd")[index].innerHTML;

  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  let date = "date" + index;
  let dateStart = "startDate" + index;
  let dateEnd = "endDate" + index;

  if (localStorage.getItem(date) == "true") {
    localStorage.setItem("startDate" + index, startDateHTML);
    localStorage.setItem("endDate" + index, endDateHTML);
    
    let startDate = new Date(startDateHTML);
    let endDate = new Date(endDateHTML);
    let dateBetween = (endDate - startDate) / (1000 * 3600 * 24);

    if (dateBetween < 364) {
      document.getElementsByClassName("dateEnd")[index].innerHTML = "";
      document.getElementsByClassName("dateStart")[index].innerHTML = dateBetween + 1 + ((dateBetween + 1) == 1 ? " day" : " days");
    } else {
      //console.log(Math.round(dateBetween / 365))
      document.getElementsByClassName("dateEnd")[index].innerHTML = "";
      document.getElementsByClassName("dateStart")[index].innerHTML =  (Math.round(dateBetween / 365)) + (Math.round(dateBetween / 365) == 1 ? " year" : " years");
    }
    
    localStorage.setItem(date, "false");
  } else if (localStorage.getItem("date" + index) == "false") {
    let startDate = localStorage.getItem(dateStart);
    let endDate = localStorage.getItem(dateEnd);

    if (startDate == endDate) {
      document.getElementsByClassName("dateStart")[index].innerHTML = startDate;
    } else {
      document.getElementsByClassName("dateStart")[index].innerHTML = startDate;
      document.getElementsByClassName("dateEnd")[index].innerHTML = endDate
    }

    localStorage.setItem(date, "true");
  }
};

function darkmode(darkmode) {   // Change the site to dark mode or not. you can define a true (dark mode) of false (white mode), if not the it will just change color.
  if (darkmode == null) {   // checks if there is a defined true/false. If not then flip the color.
    localStorage.getItem("dark") == "true" ? localStorage.setItem("dark", "false") : localStorage.setItem("dark", "true");
    document.documentElement.classList.toggle('theme--dark');
    document.getElementById('theme').classList.toggle('c-toggle--active');

  } else if (darkmode == true && localStorage.getItem("dark") == "false") {
    localStorage.setItem("dark", "true");
    document.documentElement.classList.toggle('theme--dark');
    document.getElementById('theme').classList.toggle('c-toggle--active');

  } else if (darkmode == false && localStorage.getItem("dark") == "true") {
    localStorage.setItem("dark", "false");
    document.documentElement.classList.toggle('theme--dark');
    document.getElementById('theme').classList.toggle('c-toggle--active');
  };
};

function genConstraints() {
  var constraints = [];
  document.querySelectorAll('input[type="checkbox"]:checked').forEach(item => {
    constraints.push(item.value);
  });
  return constraints;
}