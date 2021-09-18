var cocktailBtn = document.getElementById('cocktail-btn');
var recipeBtn = document.getElementById('recipe-btn');
var randomBtn = document.getElementById('random-btn');

function cocktailClick() {
    document.location.replace('cocktail-page/index-cocktail.html');
}

cocktailBtn.addEventListener('click', cocktailClick);
