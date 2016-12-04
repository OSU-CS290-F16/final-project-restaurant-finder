// Neutral food images array (neither liked or passed).
var foods = new Array("BaguetteCurry.jpg", "BaguetteSandwich.jpg", "Block15Burger.jpg", "Block15Fires.jpg", "Block15FriedJalapeno.jpg", "Block15MagicMushroom.jpg", "DelAlmaAlmondCake.jpg", "DelAlmaHalibut.jpg", "DelAlmaPatatas.jpg", "DelAlmaRibs.jpg",
 "DelAlmaStake.jpg", "DelAlmaTacos.jpg", "DelAlmaTresLeches.jpg", "FrancescosGelatoIceCream.jpg", "LaughingPlanetCafeHarvest.jpg", "LaughingPlanetCafeSalad.jpg", "NataliaCristoforosSandwich.jpg", "NearlyNormalsBurrito.jpg", "NearlyNormalsNachos.jpg", "NearlyNormalsSalad.jpg", "NearlyNormalsSpaghetti.jpg",
  "NearlyNormalsTacos.jpg", "NearlyNormalsTostada.jpg", "RoxyDawgsFries.jpg", "RoxyDawgsHotDog.jpg");

// Liked foods array.
var likedFoods = [];

// Food image counter.
var counter = 0;

var image = document.createElement("img");
image.src = 'images/' + foods[counter];
image.setAttribute("id", "currentImage");
var div = document.getElementById('imageLocation');
div.appendChild(image);
likedFoods[likedFoods.length] = foods[counter];
counter++;

// iLiked function will move images to likedFoods array and bring up new image. 
function iLike() {
	console.log("ilike");	
	//var image = document.getElementById("currentImage");
	image.src = 'images/' + foods[counter];

	likedFoods[likedFoods.length] = foods[counter]; 
	counter ++;
}

// iNope will remove image and bring up new image.
function iNope() {
	console.log("iNope");
	//var image = document.getElementById("currentImage");
	image.src = 'images/' + foods[counter];
	counter++;

} // Will show the food images to be liked or passed. 
function showFoods() {
	console.log("showFoods");
	var temp = document.getElementById('currentImage');
	temp.parentNode.removeChild(temp);
	for(i=0; i<likedFoods.length-1; i++) {
		var image2 = document.createElement("img");
		console.log("Image source = " + image2.src);
		image2.src = "images/" + likedFoods[i];
		image2.setAttribute("id", "doneImage");
		var div = document.getElementById('imageLocation');
		div.appendChild(image2);
		//TODO add descriptions for each picture 
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

