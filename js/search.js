// import showRecipe from './recipe.js';
import genResults from './results.js';

async function searchMeal(event) {
  const input = event.target.value; 
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + input);
  const data = await response.json();

  console.log(data);

  let results = genResults(data.meals);

  document.querySelector('#results').innerHTML = '';
  document.querySelector('#results').appendChild(results);
}

document.getElementById('search').oninput = searchMeal;