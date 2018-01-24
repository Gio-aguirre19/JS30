const panel = document.querySelectorAll(".panel");

function hover(){
  // console.log(this.classList);
  this.classList.toggle('open');
}

function openActive(e){
  // Check what properties are transitioning
  // console.log(e.propertyName)
  // Some browsers use flex, some use flex-grow
  // Cover both bases by using includes('flex')
  console.log(this.classList);
  if (e.propertyName.includes('flex')){
    if (this.classList.contains('open-active')) {
      this.classList.remove('open-active');
    } else {
      this.classList.add('open-active');
    }
  }
}

panel.forEach(panel => panel.addEventListener('mouseenter', hover));
panel.forEach(panel => panel.addEventListener('mouseleave', hover));
panel.forEach(panel => panel.addEventListener('transitionend', openActive));
