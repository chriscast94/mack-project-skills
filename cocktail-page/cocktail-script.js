var anotherBtn = document.getElementById('cocktail-btn');

var cocktailTitle = document.getElementById('cocktail-title');

var cocktailInst = document.getElementById('instructions');

var cocktailImg = document.getElementById('cocktail-img');

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
        cocktailInst.innerHTML = data.drinks[0].strInstructions;
        
        cocktailImg.src = data.drinks[0].strDrinkThumb + "/preview";
        
        
        
      })

      
}

anotherBtn.addEventListener('click', getAPI)