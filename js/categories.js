import genResults from './results.js';

async function showCategory(categoryName) {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=' + categoryName);
  const data = await response.json();

  console.log(data);

  let results = genResults(data.meals);

  let container = document.createElement('div');
  container.classList.add('categories__results');
  container.appendChild(results);

  document.querySelector('.content').innerHTML = '';
  document.querySelector('.content').appendChild(container);
}

function categoryCard(category) {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = document.createElement('img');
  image.classList.add('card__image');
  image.setAttribute('src', category.strCategoryThumb);
  card.appendChild(image);

  const name = document.createElement('h2');
  name.classList.add('card__name');
  name.innerText = category.strCategory;
  card.appendChild(name);

  card.addEventListener('click', () => showCategory(category.strCategory));
  
  return card;
}

window.onload = async function() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
  const data = await response.json();

  console.log(data);
  for (let category of data.categories) {
    document.querySelector('.categories').appendChild(categoryCard(category));
  }
}