var cocktailBtn = document.getElementById('cocktail-btn');
var recipeBtn = document.getElementById('recipe-btn');
var randomBtn = document.getElementById('random-btn');

function cocktailClick() {
    document.location.replace('cocktail-page/index-cocktail.html');
}

function recipeClick() {
    document.location.replace('recipe-page/index-food.html');
}

cocktailBtn.addEventListener('click', cocktailClick);
recipeBtn.addEventListener('click', recipeClick);
