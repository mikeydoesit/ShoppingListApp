var ul = document.getElementById('list')
var li;


var addIngredientButton = document.getElementById('add')
var removeIngredientButton = document.getElementById('remove')
var clearListButton = document.getElementById('clear')

addIngredientButton.addEventListener('click', addIngredient)
removeIngredientButton.addEventListener('click', removeIngredient)
clearListButton.addEventListener('click', clearList)


function addIngredient() {
  console.log('Added item');
}

function removeIngredient() {
  li = ul.children
for (let i = 0; i < li.length; i++) {
  while (li[i] && li[i].children[0].checked) {
    ul.removeChild(li[i])
  }
 }
}

function clearList() {
  li = ul.children

  for (var i = 0; i < li.length; i++) {
    while (li[i] && li[i].children[0]) {
      ul.removeChild(li[i])
    }

  }

}
