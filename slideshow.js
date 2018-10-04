var i = 0;
var images = [];
var time = 3000;


//img list

images[0] = "haircuts/hc-02.png";

images [1] = "haircuts/hc-03.png";

images[2] = "haircuts/hc-04.png";

images[3] = "haircuts/hc-05.png";

images[4] = "haircuts/hc-06.png";

//function to change images

function changeImg(){
   document.slide.src = images[i];

   if(i < images.length - 1){
     i++;
   } else{
     i = 0;
   }

   setTimeout("changeImg()", time);
}

window.onload = changeImg;
