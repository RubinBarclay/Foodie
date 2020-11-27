/*
first letter: /search.php?f=
general search: /search.php?s=
random: /random.php
*/



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
    image.setAttribute('src', meal.strMealThumb);
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

function showRecipe(meal) {
  const recipe = document.createElement('article');
  recipe.classList.add('recipe');

  const image = document.createElement('img');
  image.classList.add('recipe__image');
  image.setAttribute('src', meal.strMealThumb);
  image.setAttribute('alt', meal.strMeal);

  const heading = document.createElement('h1');
  heading.classList.add('recipe__heading');
  heading.innerText = meal.strMeal;

  const tags = document.createElement('h2');
  tags.classList.add('recipe__tags');
  tags.innerText = meal.strArea + ', ' + meal.strCategory;

  const instructions = document.createElement('p');
  instructions.classList.add('recipe__instructions');
  instructions.innerText = meal.strInstructions;

  recipe.appendChild(image);
  recipe.appendChild(heading);
  recipe.appendChild(tags);
  recipe.appendChild(instructions);

  document.querySelector('.content').innerHTML = '';  
  document.querySelector('.content').appendChild(recipe);  
}

document.getElementById('search').oninput = searchMeal;