var counter = 0;
var foods = new Array("1.jpg" , "2.jpg" , "3.jpg"); //put all the images here
var likedFoods = [];

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

