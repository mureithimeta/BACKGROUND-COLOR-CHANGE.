button = document.getElementById("change");f


button.addEventListener('click', function(){
  let canvas = document.getElementById("background");  
  var context = canvas.getContext("2d");

  var getRandomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
  
  context.fillStyle = getRandomColor;
  context.fillRect(0,0, canvas.width, canvas.height);
})

