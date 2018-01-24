const panel = document.querySelectorAll(".panel");

function hover(){
  this.classList.toggle('open');
}

panel.forEach(panel => panel.addEventListener('click', hover));
