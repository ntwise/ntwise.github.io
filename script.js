import { jobs } from "./data.js";

let jobSection = document.querySelector(".job-offers");
let renderList = [];

let heading = document.querySelector(".job-description-text");
let left = document.querySelector(".job-desc-left");
let right = document.querySelector(".job-desc-right");

let filterSystem = document.querySelector(".filter-bar");

let searchBar = document.querySelector("search-bar");
showList();

function showList() {
  renderList = [];
  for (let i in jobs) {
    createItem(i);
  }
  renderList.forEach(function (i) {
    jobSection.insertAdjacentHTML("beforeend", i);
  });
}

// Create an event listener class and put that into an option.
// function called showListDescription

// take the name of the element being itself then its going to use that name and put that into the template which will reference the information however we will only need to do this once
buttonEvent();
function buttonEvent() {
  let buttons = document.querySelectorAll(".card-button");
  buttons.forEach(function (button) {
    button.addEventListener("click", () => {
      let name = button.getAttribute("name");
      console.log("clicked");
      showListDescription(name);
    });
  });
}

function showListDescription(name) {
  let num1 = Number(name);
  console.log(name);

  let jobDescriptionleft = `<h3>Description</h3>
  <p>${jobs[num1]["Description-1"]}<br/><br/> ${jobs[num1]["Description-2"]}
  </p>`;

  let jobDescriptionright = `<h4>Skills Required</h4><br>
  <ul>
    <li>${jobs[num1].Skills[0]}</li>
    <li>${jobs[num1].Skills[1]}</li>
    <li>${jobs[num1].Skills[2]}</li>
    <li>${jobs[num1].Skills[3]}</li>
    <li>${jobs[num1].Skills[4]}</li>
  </ul>`;

  let topheading = `<h3>${jobs[num1]["Job-Name"]}</h3>
  <span>${jobs[num1]["Job-Detail"]}</span>`;

  console.log(topheading);
  console.log(jobs[num1]["Job-Name"]);

  left.innerHTML = jobDescriptionleft;
  right.innerHTML = jobDescriptionright;
  heading.innerHTML = topheading;
}

filterSystem.addEventListener("change", () => {
  filterList(filterSystem.value);
});

function filterList(option) {
  console.log(option);
  if (option == "All") {
    jobSection.innerHTML = "";
    renderList = [];
    showList();
    buttonEvent();
  } else if (option == "Web-End") {
    renderList = [];
    createItem(0);
    createItem(1);
    createItem(2);
    jobSection.innerHTML = "";
    renderList.forEach(function (i) {
      jobSection.insertAdjacentHTML("beforeend", i);
    });
    buttonEvent();
  } else if (option == "UI/UX") {
    jobSection.innerHTML = "";
    renderList = [];
    createItem(3);
    createItem(7);
    renderList.forEach(function (i) {
      jobSection.insertAdjacentHTML("beforeend", i);
    });
    buttonEvent();
  } else {
    jobSection.innerHTML = "";
    renderList = [];
    createItem(4);
    createItem(5);
    createItem(6);
    renderList.forEach(function (i) {
      jobSection.insertAdjacentHTML("beforeend", i);
    });
    buttonEvent();
  }
}

function createItem(i) {
  let jobItem = `<li class="listItem">
    <div class="job-card">
      <div class="card-details">
        <span class="job-title">Job Title</span>
      <span>${jobs[i]["Job-Name"]}</span>
      <span> ${jobs[i]["Job-Detail"]} </span>
      </div>
      <p>"${jobs[i].Quote}"</p>
      <button type="button" name="${i}" class="card-button">See Details</button>
    </div>
  </li>`;

  renderList.push(jobItem);
}
