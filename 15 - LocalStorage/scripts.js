const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
// Parse seperates strings and makes them objects
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
  // Stringify combines object and makes a string
  localStorage.setItem('items', JSON.stringify(items));
  // After submit, empties input
  this.reset();
}

function toggleDone(e){
  if (!e.target.matches('input')) return; // Skips function unless input is clicked
  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
  populateList(items, itemsList);
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
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);
