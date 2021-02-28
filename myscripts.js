function update(e){
  var x = e.clientX || e.touches[0].clientX
  var y = e.clientY || e.touches[0].clientY

  document.documentElement.style.setProperty('--cursorX', x + 'px')
  document.documentElement.style.setProperty('--cursorY', y + 'px')
}


function toggleDoor(element) {
  element.classList.toggle("doorOpen");
}

function goToPage1(element) {
  element.classList.toggle("doorOpen");
  setTimeout(function(){
    window.open('page1.html', 'mywindow');
  }, 1000);
}

function goToPage2(element) {
  element.classList.toggle("doorOpen");
  setTimeout(function(){
    window.open('page2.html', 'mywindow');
  }, 1000);
}
  
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

window.addEventListener('load', function(){
  var randomNum = Math.floor(Math.random() * (10 - 1) + 1); 
  //* TO ADD DOORS*//
  var door1 = document.querySelector(".door.page1door");
  var door2 = document.querySelector(".door.page2door");

  var doors = [
    door1,
    door2,
  ];

  var pageMethods = [
    goToPage1,
    goToPage2,
  ];
//* Door stuff^*//
  var shuffledArray = shuffleArray(pageMethods);

  for (i = 0; i < shuffledArray.length; i++) {
    doors[i].addEventListener("click", pageMethods[i].bind(event, doors[i]));
  }

});

function shuffleArray(d) {
  for (var c = d.length - 1; c > 0; c--) {
    var b = Math.floor(Math.random() * (c + 1));
    var a = d[c];
    d[c] = d[b];
    d[b] = a;
  }
  return d
};

