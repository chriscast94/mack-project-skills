var anotherBtn = document.getElementById('cocktail-btn');

var cocktailTitle = document.getElementById('cocktail-title');

var cocktailInst = document.getElementById('instructions');

var cocktailImg = document.getElementById('cocktail-img');

var cocktailIng = document.getElementById('ingredients');

var homeButton = document.getElementById('home-button');



function getAPI(event) {
    event.preventDefault();
    var randomDrinkURL = "https://www.thecocktaildb.com/api/json/v1/1/random.php"

    fetch(randomDrinkURL)
      .then(function (response){
          console.log(response.status);
          return response.json();
      })
      .then(function (data){
        console.log(data);

        cocktailTitle.innerHTML = data.drinks[0].strDrink;
        cocktailInst.innerHTML = "<strong>Instructions: </strong>" + data.drinks[0].strInstructions;
        
        cocktailImg.src = data.drinks[0].strDrinkThumb + "/preview";   
        
        var ingredientList = [
          " " + data.drinks[0].strIngredient1,
          " " + data.drinks[0].strIngredient2,
          " " + data.drinks[0].strIngredient3,
          " " + data.drinks[0].strIngredient4,
          " " + data.drinks[0].strIngredient5,
          " " + data.drinks[0].strIngredient6,
          " " + data.drinks[0].strIngredient7,
          " " + data.drinks[0].strIngredient8,
          " " + data.drinks[0].strIngredient9,
          " " + data.drinks[0].strIngredient10,
          " " + data.drinks[0].strIngredient11,
          " " + data.drinks[0].strIngredient12,
          " " + data.drinks[0].strIngredient13,
          " " + data.drinks[0].strIngredient14,
          " " + data.drinks[0].strIngredient15,
        ];

        console.log(ingredientList);

        var realIngredients = [];

        for (let i = 0; i < ingredientList.length; i++){
          //console.log(ingredientList[i]);

          if (ingredientList[i] !== ' null'){
            realIngredients.push(ingredientList[i]);
          }
        }
      
      
        console.log(realIngredients);

        cocktailIng.innerHTML = "<strong>Ingredients: </strong>" + realIngredients;

      })        
      
}

function cocktailClick() {
  window.location.href = 'mack-project-skills/index.html';
}

anotherBtn.addEventListener('click', getAPI);

homeButton.addEventListener('click', cocktailClick);
