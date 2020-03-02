window.onload = startup;

window.addEventListener('DOMContentLoaded', () => {
  const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  console.log(userPrefersDark ? "dark mode thing":"light mode");

  if (localStorage.getItem("dark") == null) {
    localStorage.setItem("dark", "false");
  } else if (localStorage.getItem("dark") == "true") {
    document.body.style.backgroundColor == "rgba(28, 28, 30, 1)";
  };

  if (userPrefersDark) {
    localStorage.setItem("dark", "true")
  }

  document.getElementById("personaInfoCollaps").style.display = "none";
  document.getElementById("jobCollaps").style.display = "none";
  document.getElementById("educationCollaps").style.display = "none";
  document.getElementById("knowlageCollaps").style.display = "none";


});

function startup() {
  if (localStorage.getItem("dark") == "true") {
    localStorage.setItem("dark", "true");
    document.documentElement.classList.toggle('theme--dark');
    document.getElementById('theme').classList.toggle('c-toggle--active');
  }
  
  document.body.classList.add('notransition');

  document.getElementById("personaInfo").addEventListener("click", () => {
    hideData("personaInfo");
  });

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

  let bDay = new Date(document.getElementById("bday").innerHTML); 
  let now = new Date();
  let age = Math.round((now - bDay) / (365 * 1000 * 3600 * 24));
  
  document.getElementById("age").innerHTML = age;
};

document.getElementById('theme').addEventListener('click', () => {
  darkmode();
});

feather.replace();

function hideData(data) {
  let element = document.getElementsByClassName(data)[0];
  let elementCollaps = data + "Collaps";

  if (element.style.display != "none") {
    // Hide
    for (let i = 0; i < document.getElementsByClassName(data).length; i++) {
      document.getElementsByClassName(data)[i].style.display = "none"
    };
    document.getElementById(elementCollaps).style.display = "";
  } else {
    // Show
    for (let i = 0; i < document.getElementsByClassName(data).length; i++) {
      document.getElementsByClassName(data)[i].style.display = ""
    };
    document.getElementById(elementCollaps).style.display = "none";
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
    let todayDate = new Date();
    let dateBetween = (endDate - startDate) / (1000 * 3600 * 24);

    if (endDateHTML == "D.D") {

      dateBetween = Math.round((todayDate - startDate) / (1000 * 3600 * 24));

      if (dateBetween < 364) {
        document.getElementsByClassName("dateEnd")[index].innerHTML = "";
        document.getElementsByClassName("dateStart")[index].innerHTML = dateBetween + 1 + ((dateBetween + 1) == 1 ? " dag" : " dager");
      } else {
        document.getElementsByClassName("dateEnd")[index].innerHTML = "";
        document.getElementsByClassName("dateStart")[index].innerHTML =  (Math.round(dateBetween / 365)) + (Math.round(dateBetween / 365) == 1 ? " år" : " år");
      }

      

    } else if (dateBetween < 364) {

      document.getElementsByClassName("dateEnd")[index].innerHTML = "";
      document.getElementsByClassName("dateStart")[index].innerHTML = dateBetween + 1 + ((dateBetween + 1) == 1 ? " dag" : " dager");
    } else {
      //console.log(Math.round(dateBetween / 365))
      document.getElementsByClassName("dateEnd")[index].innerHTML = "";
      document.getElementsByClassName("dateStart")[index].innerHTML =  (Math.round(dateBetween / 365)) + (Math.round(dateBetween / 365) == 1 ? " år" : " år");
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