var cocktailBtn = document.getElementById('cocktail-btn');
var cocktailtitle = document.getElementById('cocktail-title');
var cocktailInst = document.getElementById('instructions');
var cocktailImg = document.getElementById('cocktail-img');
var homebutton = document.getElementById('home-button');
var cocktailIng = document.getElementById('ingredients')


function getApi(event) {
  event.preventDefault();
  var requestUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      cocktailtitle.innerHTML = data.drinks[0].strDrink;
      cocktailIng.innerHTML = data.drinks[0].strIngredient1;
      cocktailInst.innerHTML = data.drinks[0].strInstructions;
      cocktailImg.src = data.drinks[0].strDrinkThumb + '/preview';



    })
}

cocktailBtn.addEventListener('click', getApi);

function homeBtn() {
  document.location.replace('index.html');
}


homebutton.addEventListener('click', homeBtn);