const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const searchInput = document.querySelector('.search');
const suggestion = document.querySelector('.suggestions');

// Making an empty array to put items in
const cities = [];

fetch(endpoint)
  // Converting fetched data to json 
  .then(blob => blob.json())
  // Pushing data into cities array
  .then(data => cities.push(...data));

function findMatches(wordMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatches() {
  const matchArray = findMatches(this.value, cities);
  const html = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    // Adding highlights to input for city name
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    // Adding highlights to input for state name
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `
    // Joining map into a string
  }).join('');
  if (searchInput.value == '') {
    suggestion.innerHTML = '';
  } else if (searchInput.value != '') {
    suggestion.innerHTML = html;
  }
}

function selectInput(e) {
  if (searchInput.value != '') {
    searchInput.value = this.querySelector('.name').innerText || e.target.innerText;
    // console.log(this.querySelector(".name").innerText);
    suggestion.innerHTML = '';
  }
};


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
suggestion.addEventListener('click', selectInput);