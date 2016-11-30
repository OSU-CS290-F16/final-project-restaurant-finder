//JS file for functionality 
var counter = 1;

imgClickAndChange.onclick = function(){
    if(counter == 0){
        document.getElementById("imgClickAndChange").src = "http://www.clipartbest.com/cliparts/RiA/66K/RiA66KbMT.png";
        counter++;
    }
    else if(counter == 1){
        document.getElementById("imgClickAndChange").src = "http://www.wpclipart.com/education/animal_numbers/animal_number_2.png";
        counter++;
    }
    else if(counter == 2){
        document.getElementById("imgClickAndChange").src = "http://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Number_3_in_yellow_rounded_square.svg/512px-Number_3_in_yellow_rounded_square.svg.png";
        counter = 0;
    }
};
