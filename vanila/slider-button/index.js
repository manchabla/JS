const buttonContainer = document.getElementById("button-container");
const button = document.getElementById("button");

let posX,posY = 0

button.draggable = true;

button.onmousedown = (event) => {
  //console.log('event :>> ', event);
   console.log("X", event.screenX, "Y", event.screenY);
   posX = event.screenX
   posY = event.screenY
   
   document.onmouseup = (event) => {
     console.log('mouseUp :>> ', event);
     // button.style.left = posX - 580
   };
};

