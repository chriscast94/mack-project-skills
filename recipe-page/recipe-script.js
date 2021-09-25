var homeBtn = document.getElementById("home-button");
var recipeBtn = document.getElementById("food-btn");
const regex = /\s+/;

// Calls API and develops ingredients list and instruction
function getApi() {
    var requestURL = "https://www.themealdb.com/api/json/v1/1/random.php";

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            var ingredientArea = document.getElementById("ingredients");
            var instructionsArea = document.getElementById("instructions");
            var recipeName = document.getElementById("food-title");

            // Creates image
            var recipeImage = document.getElementById("food-img");
            recipeImage.src = data.meals[0].strMealThumb + "/preview";


            // Ingredients list items and measurements
            var filteredIngredients = [];
            var filteredMeasurements = [];

            var ingredientList = [
                " " + data.meals[0].strIngredient1,
                " " + data.meals[0].strIngredient2,
                " " + data.meals[0].strIngredient3,
                " " + data.meals[0].strIngredient4,
                " " + data.meals[0].strIngredient5,
                " " + data.meals[0].strIngredient6,
                " " + data.meals[0].strIngredient7,
                " " + data.meals[0].strIngredient8,
                " " + data.meals[0].strIngredient9,
                " " + data.meals[0].strIngredient10,
                " " + data.meals[0].strIngredient11,
                " " + data.meals[0].strIngredient12,
                " " + data.meals[0].strIngredient13,
                " " + data.meals[0].strIngredient14,
                " " + data.meals[0].strIngredient15,
                " " + data.meals[0].strIngredient16,
                " " + data.meals[0].strIngredient17,
                " " + data.meals[0].strIngredient18,
                " " + data.meals[0].strIngredient19,
                " " + data.meals[0].strIngredient20
            ];

            for (let i = 0; i < ingredientList.length; i++) {
                if (ingredientList[i] !== " " || null) {
                    filteredIngredients.push(ingredientList[i]);
                }
            }
            console.log(filteredIngredients);

            var measurementsList = [
                " " + data.meals[0].strMeasure1,
                " " + data.meals[0].strMeasure2,
                " " + data.meals[0].strMeasure3,
                " " + data.meals[0].strMeasure4,
                " " + data.meals[0].strMeasure5,
                " " + data.meals[0].strMeasure6,
                " " + data.meals[0].strMeasure7,
                " " + data.meals[0].strMeasure8,
                " " + data.meals[0].strMeasure9,
                " " + data.meals[0].strMeasure10,
                " " + data.meals[0].strMeasure11,
                " " + data.meals[0].strMeasure12,
                " " + data.meals[0].strMeasure13,
                " " + data.meals[0].strMeasure14,
                " " + data.meals[0].strMeasure15,
                " " + data.meals[0].strMeasure16,
                " " + data.meals[0].strMeasure17,
                " " + data.meals[0].strMeasure18,
                " " + data.meals[0].strMeasure19,
                " " + data.meals[0].strMeasure20,
            ];

            for (let i = 0; i < measurementsList.length; i++) {
                if (measurementsList[i] !== " ") {
                    filteredMeasurements.push(measurementsList[i]);
                }
            }
            console.log(filteredMeasurements);

            var mixedArray = [];
            for (i = 0; i < filteredMeasurements.length; i++) {
                mixedArray[i * 2] = filteredMeasurements[i];
                mixedArray[(i * 2) + 1] = filteredIngredients[i];
            }
            console.log(mixedArray);

            recipeName.innerHTML = data.meals[0].strMeal;
            instructionsArea.innerHTML = data.meals[0].strInstructions;
            ingredientArea.innerHTML = mixedArray;

        });
}

function goHome() {
    window.location.href = "../index.html"
}

recipeBtn.addEventListener("click", getApi);

homeBtn.addEventListener("click", goHome);

