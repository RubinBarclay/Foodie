import showRecipe from './recipe.js';

function genResults(meals) {
  const results = document.createElement('div');

  meals.forEach(meal => {
    const result = document.createElement('div');
    result.classList.add('result');
    result.onclick = () => showRecipe(meal);
    results.appendChild(result);

    const image = document.createElement('img');
    image.classList.add('result__image');
    image.setAttribute('src', meal.strMealThumb + '/preview');
    image.setAttribute('alt', meal.strMeal);
    result.appendChild(image);

    const name = document.createElement('h2');
    name.classList.add('result__name');
    name.innerText = meal.strMeal;
    result.appendChild(name);
  
    const tags = document.createElement('h3');
    tags.classList.add('result__tags');
    tags.innerText = meal.strArea ? meal.strArea + ', ' + meal.strCategory : null; // categories obj doesn't have these values
    result.appendChild(tags);
    
    result.addEventListener('click', () => showRecipe(meal.idMeal));
  })
  
  return results;
}

export default genResults;