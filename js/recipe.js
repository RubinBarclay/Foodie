function showRecipe(meal) {
  const recipe = document.createElement('article');
  recipe.classList.add('recipe');

  const sideInfo = document.createElement('div');
  sideInfo.classList.add('recipe__side');
  recipe.appendChild(sideInfo);

  const image = document.createElement('img');
  image.classList.add('recipe__image');
  image.setAttribute('src', meal.strMealThumb);
  image.setAttribute('alt', meal.strMeal);
  sideInfo.appendChild(image);

  const ingredients = document.createElement('ul');
  ingredients.classList.add('recipe__ingredients');
  for (let i = 1; i <= 20; i++) {
    if (meal['strIngredient' + i] && meal['strIngredient' + i] !== ' ') {
      const li = document.createElement('li');
      li.innerText = meal['strMeasure' + i] + ' ' + meal['strIngredient' + i];
      ingredients.appendChild(li);
    } else {
      break;
    }
  }
  sideInfo.appendChild(ingredients);

  const heading = document.createElement('h1');
  heading.classList.add('recipe__heading');
  heading.innerText = meal.strMeal;
  recipe.appendChild(heading);

  const tags = document.createElement('h2');
  tags.classList.add('recipe__tags');
  tags.innerText = meal.strArea + ', ' + meal.strCategory;
  recipe.appendChild(tags);

  const instructions = document.createElement('p');
  instructions.classList.add('recipe__instructions');
  instructions.innerText = meal.strInstructions;
  recipe.appendChild(instructions);

  document.querySelector('.content').innerHTML = '';  
  document.querySelector('.content').appendChild(recipe);  
}

export default showRecipe;