var foods = new Array("BaguetteCurry.jpg", "BaguetteSandwich.jpg", "Block15Burger.jpg", "Block15Fires.jpg", "Block15FriedJalapeno.jpg", "Block15MagicMushroom.jpg", "DelAlmaAlmondCake.jpg", "DelAlmaHalibut.jpg", "DelAlmaPatatas.jpg", "DelAlmaRibs.jpg",
 "DelAlmaStake.jpg", "DelAlmaTacos.jpg", "DelAlmaTresLeches.jpg", "FrancescosGelatoIceCream.jpg", "LaughingPlanetCafeHarvest.jpg", "LaughingPlanetCafeSalad.jpg", "NataliaCristoforosSandwich.jpg", "NearlyNormalsBurrito.jpg", "NearlyNormalsNachos.jpg", "NearlyNormalsSalad.jpg", "NearlyNormalsSpaghetti.jpg",
  "NearlyNormalsTacos.jpg", "NearlyNormalsTostada.jpg", "RoxyDawgsFries.jpg", "RoxyDawgsHotDog.jpg");
var likedFoods = [];
var counter = 0;

function iLike() {
	console.log("ilike");
	//TODO remove the previous image

	
	var image = document.createElement("img");
	image.src = 'images/' + foods[counter];
	image.setAttribute("id", "currentImage");
	var div = document.getElementById('imageLocation');
	div.appendChild(image);
	
	if(counter > 0){
		var oldElem = document.getElementById("currentImage");
		delete oldElem;
	}
	
	likedFoods[likedFoods.length] = foods[counter]; 
	counter ++;
}
function iNope() {
	console.log("iNope");
	counter++;
}
function showFoods() {
	for(i=0; i<likedFoods.length; i++) {
		var img = document.createElement("img");
		img.src = likedFoods[i];
		var div = document.getElementById('img');
		div.appendChild(img);
		//TODO add descriptions for each picture 
	}
}

var userLike = document.getElementById('likeButton');
userLike.addEventListener('click', iLike);

var userDislike = document.getElementById('dislikeButton');
userDislike.addEventListener('click', iNope);

var userDone = document.getElementById('doneButton');
userDone.addEventListener('click', showFoods);

