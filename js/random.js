import showRecipe from './recipe.js';

window.onload = async function () {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/random.php');
  const data = await response.json();

  showRecipe(data.meals[0]);
}