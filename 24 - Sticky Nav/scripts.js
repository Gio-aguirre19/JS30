const nav = document.querySelector("#main");
// Gets top of nav element
const topOfNav = nav.offsetTop;

function fixNav(){
  // console.log(topOfNav, window.scrollY);
  if (window.scrollY > topOfNav){
    // Gets height of nav element and adds it to top of body
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    // Setting Padding top back to zero
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav)
