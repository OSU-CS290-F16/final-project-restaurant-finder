var foods = new Array("BaguetteCurry.jpg", "BaguetteSandwich.jpg", "Block15Burger.jpg", "Block15Fires.jpg", "Block15FriedJalapeno.jpg", "Block15MagicMushroom.jpg", "DelAlmaAlmondCake.jpg", "DelAlmaHalibut.jpg", "DelAlmaPatatas.jpg", "DelAlmaRibs.jpg",
 "DelAlmaStake.jpg", "DelAlmaTacos.jpg", "DelAlmaTresLeches.jpg", "FrancescosGelatoIceCream.jpg", "LaughingPlanetCafeHarvest.jpg", "LaughingPlanetCafeSalad.jpg", "NataliaCristoforosSandwich.jpg", "NearlyNormalsBurrito.jpg", "NearlyNormalsNachos.jpg", "NearlyNormalsSalad.jpg", "NearlyNormalsSpaghetti.jpg",
  "NearlyNormalsTacos.jpg", "NearlyNormalsTostada.jpg", "RoxyDawgsFries.jpg", "RoxyDawgsHotDog.jpg");
var likedFoods = [];
var counter = 0;

function iLike() {
	 foods[counter] = likedFoods[likedFoods.length];
	 counter ++;
	 //display foods[counter]
}
function iNope() {
	counter++;
	//display foods[counter]
}
function showFoods() {
	for(i=0; i<likedFoods.length; i++) {
		//display foods[counter]
	}
}

var userLike = document.getElementById('likeButton');
userLike.addEventListener('click', iLike);

var userDislike = document.getElementById('dislikeButton');
userDislike.addEventListener('click', iNope);

var userDone = document.getElementById('doneButton');
userDone.addEventListener('click', showFoods);

