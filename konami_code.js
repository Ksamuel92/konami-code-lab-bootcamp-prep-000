const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let index = 0; //establish index
  
  document.body.addEventListener("keydown", function(e) { //add eventlistener for keydown event
    const key = e.key; //assign event.key to the key variable
    
    if (key === codes[index]) { // if key (read: key pressed) is equal to the 0 index, add to index
      index++;
      if (index === codes.length) //if index reaches the end of the codes array, alert user
      {
        alert("Hurray!");
        
        index = 0;
      }
    } else {
      index = 0;
    }
  });
}  
  