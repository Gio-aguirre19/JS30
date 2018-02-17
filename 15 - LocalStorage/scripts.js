const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e){
  // Prevents from refreshing page (default)
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  // After submit, empties input
  this.reset();
}

addItems.addEventListener('submit', addItem);
