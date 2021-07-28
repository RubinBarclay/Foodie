import genResults from './results.js';

async function searchMeal(event) {
  const input = event.target.value; 
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + input);
  const data = await response.json();

  let results;

  if (!input) {
    // Clear results and show placeholder
    results = document.createElement('h2');
    results.classList.add('search__placeholder');
    results.innerText = 'Search for your favorite meal';
  } else if (data.meals) {
    // Remove emoji if present
    let noResultEmoji = document.querySelector('#no-results');
    noResultEmoji ? noResultEmoji.remove : null;

    results = genResults(data.meals);
  } else {
    // Show emoji when no meals found
    results = document.createElement('span');
    results.classList.add('search__no-results');
    results.innerText = '(╥_╥)';
  }

  document.querySelector('#results').innerHTML = '';
  document.querySelector('#results').appendChild(results);
}

document.getElementById('search').oninput = searchMeal;