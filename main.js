// input


// List variables
var ul = document.getElementById('list')
var li;

// Buttons
var addIngredientButton = document.getElementById('add')
var removeIngredientButton = document.getElementById('remove')
var clearListButton = document.getElementById('clear')

// Event Listeners
addIngredientButton.addEventListener('click', addIngredient)
removeIngredientButton.addEventListener('click', removeIngredient)
clearListButton.addEventListener('click', clearList)

// Functions
//Add
function addIngredient() {
  var input = document.getElementById('input')
  var newIngredient = input.value
  ul = document.getElementById('list')
  var textnode = document.createTextNode(newIngredient)

  if (newIngredient === '') {
    // return false;
    var parentNode = document.querySelector('.controls')
    var inputWarning = document.createElement('p')
    var inputWarningText = document.createTextNode('Enter an ingredient')
    inputWarning.appendChild(inputWarningText)
    parentNode.insertBefore(inputWarning, input)
  } else {
    // create li
    li = document.createElement('li');

    // create checkbox
    var checkbox = document.createElement('input')
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'check');

    // create label
    var label = document.createElement('label')

    //add these elements on page
    ul.appendChild(label)
    li.appendChild(checkbox)
    label.appendChild(textnode)
    li.appendChild(label)
    ul.insertBefore(li, ul.childNodes[0])

    setTimeout(() => {
      li.className = 'visual';
    }, 2);

    input.value = ''
  }
}

// Remove selected ingredients
function removeIngredient() {
  li = ul.children
for (let i = 0; i < li.length; i++) {
  while (li[i] && li[i].children[0].checked) {
    ul.removeChild(li[i])
    }
  }
}

// Clear the whole List
function clearList() {
  li = ul.children

  for (var i = 0; i < li.length; i++) {
    while (li[i] && li[i].children[0]) {
      ul.removeChild(li[i])
    }
  }
}
