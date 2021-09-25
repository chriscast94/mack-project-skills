var cocktailBtn = document.getElementById('cocktail-btn');
var recipeBtn = document.getElementById('recipe-btn');
var randomBtn = document.getElementById('random-btn');

function cocktailClick() {
    //document.location.replace('cocktail-page/index-cocktail.html');
    window.location.href = 'cocktail-page/index-cocktail.html';
}

function recipeClick() {
    //document.location.replace('recipe-page/index-food.html');
    window.location.href = 'recipe-page/index-food.html';
}

//Array of both functions
var randomClick = [
    cocktailClick,
    recipeClick,
]

cocktailBtn.addEventListener('click', cocktailClick);
recipeBtn.addEventListener('click', recipeClick);

//event listener to randomly choose function from randomClick array
randomBtn.addEventListener('click', function() {
    randomClick[Math.floor(Math.random() * randomClick.length)]();
});
