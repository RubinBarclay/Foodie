import showRecipe from './recipe.js';

async function searchMeal(event) {
  const input = event.target.value; 
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + input);
  const data = await response.json();

  console.log(data);

  const results = document.createElement('div');

  data.meals.forEach(meal => {
    const result = document.createElement('div');
    result.classList.add('search__result');
    result.onclick = () => showRecipe(meal);

    const image = document.createElement('img');
    image.setAttribute('src', meal.strMealThumb + '/preview');
    image.setAttribute('alt', meal.strMeal);

    const heading = document.createElement('h2');
    heading.innerText = meal.strMeal;
  
    const tags = document.createElement('h3');
    tags.innerText = meal.strArea + ', ' + meal.strCategory;

    result.appendChild(image);
    result.appendChild(heading);
    result.appendChild(tags);

    results.appendChild(result);
  })

  document.querySelector('#results').innerHTML = '';
  document.querySelector('#results').appendChild(results);
}

document.getElementById('search').oninput = searchMeal;