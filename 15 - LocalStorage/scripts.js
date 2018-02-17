const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
  // Prevents from refreshing page (default)
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  // Adding items to local storage in 'items' json
  localStorage.setItem('items', JSON.stringify(items));
  // After submit, empties input
  this.reset();
}

function populateList(plates = [], platesList){
  // Maps through plates and join it together to make one string
  // Populates items list section
  platesList.innerHTML = plates.map((plate, i) => {
    return `
      <li>
        <input type='checkbox' data-index=${i} id='item-${i}' ${plate.done ? 'checked' : ''} />
        <label for='item-${i}'>${plate.text}</label>
      </li>
    `
  }).join('');
}

addItems.addEventListener('submit', addItem);

populateList(items, itemsList);
