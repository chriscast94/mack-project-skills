var anotherBtn = document.getElementById('cocktail-btn');

var cocktailTitle = document.getElementById('cocktail-title');

var cocktailInst = document.getElementById('instructions');

var cocktailImg = document.getElementById('cocktail-img');

var cocktailIng = document.getElementById('ingredients');

var homeButton = document.getElementById('home-button');

var test = document.getElementById('test');

const regex = /\s+/;



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
          " " + data.drinks[0].strIngredient1 + ',',
          " " + data.drinks[0].strIngredient2 + ',',
          " " + data.drinks[0].strIngredient3 + ',',
          " " + data.drinks[0].strIngredient4 + ',',
          " " + data.drinks[0].strIngredient5 + ',',
          " " + data.drinks[0].strIngredient6 + ',',
          " " + data.drinks[0].strIngredient7 + ',',
          " " + data.drinks[0].strIngredient8 + ',',
          " " + data.drinks[0].strIngredient9 + ',',
          " " + data.drinks[0].strIngredient10 + ',',
          " " + data.drinks[0].strIngredient11 + ',',
          " " + data.drinks[0].strIngredient12 + ',',
          " " + data.drinks[0].strIngredient13 + ',',
          " " + data.drinks[0].strIngredient14 + ',',
          " " + data.drinks[0].strIngredient15 + ',',
        ];

        console.log(ingredientList);

        
        var realIngredients = [];

        for (let i = 0; i < ingredientList.length; i++){
          //console.log(ingredientList[i]);

          if (ingredientList[i] !== " null," && " ,"){
            realIngredients.push(ingredientList[i]);
            
          }
        }
      
      
        console.log(realIngredients);

        

        var measurementList = [
          " " + data.drinks[0].strMeasure1,
          " " + data.drinks[0].strMeasure2,
          " " + data.drinks[0].strMeasure3,
          " " + data.drinks[0].strMeasure4,
          " " + data.drinks[0].strMeasure5,
          " " + data.drinks[0].strMeasure6,
          " " + data.drinks[0].strMeasure7,
          " " + data.drinks[0].strMeasure8,
          " " + data.drinks[0].strMeasure9,
          " " + data.drinks[0].strMeasure10,
          " " + data.drinks[0].strMeasure11,
          " " + data.drinks[0].strMeasure12,
          " " + data.drinks[0].strMeasure13,
          " " + data.drinks[0].strMeasure14,
          " " + data.drinks[0].strMeasure15,
        ];

        console.log(measurementList);

        var realMeasurements = [];

        for (let i = 0; i < measurementList.length; i++){

          if (measurementList[i] !== ' null'){
            realMeasurements.push(measurementList[i]);
            
          }          
        }
        console.log(realMeasurements);
        var mixedArray = [];

        for (let i = 0; i < realIngredients.length; i++){
          mixedArray[i*2] = realMeasurements[i];
          mixedArray[(i*2)+1] = realIngredients[i];
          //console.log(mixedArray);
        }
        console.log(mixedArray);
      

        // function mergeReal(ingredientList, measurementList) {
        //   let merged = [];
        //   let index1 = 0;
        //   let index2 = 0;
        //   let current = 0;
          
        //   while (current < (realIngredients.length + realMeasurements.length)) {
        //     let unmerged1 = realIngredients[index1];
        //     let unmerged2 = realMeasurements[index2];

        //     if (unmerged1 < unmerged2) {
        //       merged[]
        //     }
        //   }
        //}
        
        
        cocktailIng.innerHTML = "<strong>Ingredients: </strong>" + mixedArray.join('');
        

        
      })        
      
}

function cocktailClick() {
  window.location.href = '../index.html';
}

anotherBtn.addEventListener('click', getAPI);

homeButton.addEventListener('click', cocktailClick);
