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
    window.open('page1.html', 'mywindow');
  }, 1000);
}
  
document.addEventListener('mousemove',update)
document.addEventListener('touchmove',update)

window.addEventListener('load', function(){
  var element = document.querySelector(".door.page1door");
  element.addEventListener("click", goToPage1.bind(event, element));

  var element = document.querySelector(".door.page2door");
  element.addEventListener("click", goToPage2.bind(event, element));


});

