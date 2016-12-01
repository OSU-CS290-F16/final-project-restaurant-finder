var counter = 0;
var foods = new Array("meme", "creme", "ice", "baby", "AHHHHHHHH");
var likedFoods = [];

function iLike() {
	 foods[counter] = likedFoods[likedFoods.length];
	 counter ++;
}
function iNope() {
	counter++;
}
function showFoods() {
	for(i=0; i<likedFoods.length; i++) {
		return likedFoods[i];
	}
}
userLike.addEventListener("click", iLike);
userNope.addEventListener("click", iNope);
userDone.addEventListener("click", showFoods);

