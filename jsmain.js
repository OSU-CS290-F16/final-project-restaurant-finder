// Neutral food images array (neither liked or passed).
//var jsonfile = require('jsonfile');
var foods = new Array("BaguetteCurry.jpg", "BaguetteSandwich.jpg", "Block15Burger.jpg", "Block15Fires.jpg", "Block15FriedJalapeno.jpg", "Block15MagicMushroom.jpg", "DelAlmaAlmondCake.jpg", "DelAlmaHalibut.jpg", "DelAlmaPatatas.jpg", "DelAlmaRibs.jpg",
 "DelAlmaStake.jpg", "DelAlmaTacos.jpg", "DelAlmaTresLeches.jpg", "FrancescosGelatoIceCream.jpg", "LaughingPlanetCafeHarvest.jpg", "LaughingPlanetCafeSalad.jpg", "NataliaCristoforosSandwich.jpg", "NearlyNormalsBurrito.jpg", "NearlyNormalsNachos.jpg", "NearlyNormalsSalad.jpg", "NearlyNormalsSpaghetti.jpg",
  "NearlyNormalsTacos.jpg", "NearlyNormalsTostada.jpg", "RoxyDawgsFries.jpg", "RoxyDawgsHotDog.jpg");

// Liked foods array.
var likedFoods = [];

// Food image counter.
var counter = 0;

	var buttonLike = document.getElementById('likeButton');
 	var buttonDislike = document.getElementById('dislikeButton');

 function shuffleArray(array) {									//Durstenfeld shuffle
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}


shuffleArray(foods);

var image = document.createElement("img");
image.src = 'images/' + foods[counter];
image.setAttribute("id", "currentImage");
var div = document.getElementById('imageLocation');
div.appendChild(image);
counter++;

// iLiked function will move images to likedFoods array and bring up new image.
function iLike() {
	console.log("ilike");
//	var image = document.getElementById("currentImage");
	image.src = 'images/' + foods[counter];

	likedFoods[likedFoods.length] = foods[counter-1];
	counter++;
  // var file = "/data.json";
  // var obj = foods[counter-1].substring(0, likedFoods[i].length - 4);
  // jsonfile.writeFile(file, obj, {like: 1});

	if(counter > foods.length)
	{
		showFoods();
	}
}

// iNope will remove image and bring up new image.
function iNope() {
	console.log("iNope");
//	var image = document.getElementById("currentImage");
	image.src = 'images/' + foods[counter];
	counter++;

	if(counter > foods.length)
	{
		showFoods();
	}

} // Will show the food images to be liked or passed.
function showFoods() {
	console.log("showFoods");
	var temp = document.getElementById('currentImage');

	buttonLike.style.display = 'none';
	buttonDislike.style.display = 'none';

	temp.parentNode.removeChild(temp);
	for(i=0; i<likedFoods.length; i++) {
		var image2 = document.createElement("img");
		console.log("Image source = " + image2.src);
		image2.src = "images/" + likedFoods[i];
		image2.setAttribute("id", "doneImage");
		var div = document.getElementById('imageLocation');
		div.appendChild(image2);
		var description = document.createElement('a');
   	description.innerHTML = likedFoods[i].substring(0, likedFoods[i].length - 4);
    description.href = '/data/' + likedFoods[i].substring(0, likedFoods[i].length - 4);
    div.appendChild(description);

	} // end for
} // End showFoods function.

// Listener for mouse click on like button.
var userLike = document.getElementById('likeButton');
userLike.addEventListener('click', iLike);

// Listener for mouse click on nope/pass button.
var userDislike = document.getElementById('dislikeButton');
userDislike.addEventListener('click', iNope);

// Listener for mouse click on done button.
var userDone = document.getElementById('doneButton');
userDone.addEventListener('click', showFoods);
