const countriescon = document.querySelector(".countries");
const dropDown = document.querySelector(".dropDown");
const dropEl = document.querySelector(".drop");
const region = document.querySelectorAll(".region");
const search = document.querySelector(".search");
let theme = document.querySelector(".toggle");
let body = document.body;
let moon = document.querySelector(".moon");
let dropDownIcon = document.querySelector(".symbol");

async function getCountry() {
  const url = await fetch("https://restcountries.com/v2/all");
  const res = await url.json();

  res.forEach((val) => {
    showCountry(val);
  });
}
getCountry();
function showCountry(data) {
  const country = document.createElement("div");
  country.setAttribute("class", "country");
  country.innerHTML = `
       <div class="country-image">
                <img src="${data.flag}" alt="">
            </div>
            <div class="countryInformation">
                <h5 class="countryName">${data.name}</h5>
                <p><strong>population:</strong>${data.population}</p>
                <p class="regionName"><strong>Region:</strong>${data.region}</p>
                <p><strong>Capital:</strong>${data.capital}</p>
                
            </div>
       
       `;
  countriescon.appendChild(country);
}

dropDown.addEventListener("click", (f) => {
  dropEl.classList.toggle("showDropDown");
  dropEl.classList.remove("hidden");
  dropDownIcon.classList.toggle("fa-chevron-down");
  dropDownIcon.classList.toggle("fa-chevron-up");
});
const regionName = document.getElementsByClassName("regionName");
const countryName = document.getElementsByClassName("countryName");
region.forEach((val) => {

  val.addEventListener("click", (f) => {
    dropDownIcon.classList.toggle("fa-chevron-down");
  dropDownIcon.classList.toggle("fa-chevron-up");
  dropEl.classList.toggle("showDropDown");
    dropEl.classList.add("hidden");
    Array.from(regionName).forEach((Element) => {
      if (Element.innerText.includes(val.innerText) || val.innerText == "All") {
        Element.parentElement.parentElement.style.display = "grid";
      } else {
        Element.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

search.addEventListener("input", (f) => {
  Array.from(countryName).forEach((Element) => {
    if (Element.innerText.toLowerCase().includes(search.value.toLowerCase())) {
      Element.parentElement.parentElement.style.display = "grid";
    } else {
      Element.parentElement.parentElement.style.display = "none";
    }
  });
});

theme.addEventListener("click", (f) => {
  document.body.classList.toggle("dark");
  moon.classList.toggle("fas");
  dropDownIcon.classList.toggle("far");
});
