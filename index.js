var input = document.querySelector('.input') // Get the first element in the document with class="input"
var container = document.querySelector('.container')
var addButton = document.querySelector('.add-btn')

// var x = document.querySelectorAll(".example");
// Get all elements in the document with class="example":

class item {
  constructor(itemName) {
    this.createDiv(itemName)
  }

  createDiv(itemName) {
    let itemBox = document.createElement('div')
    itemBox.classList.add('todo-item')

    let input = document.createElement('input')
    input.type = 'text'
    input.value = itemName
    // input.disabled = true
    input.classList.add('item-input')

    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox')

    let editButton = document.createElement('button')
    editButton.innerText = 'Edit'
    editButton.classList.add('edit-btn')

    let removeButton = document.createElement('button')
    removeButton.innerText = 'Remove'

    container.appendChild(itemBox)

    itemBox.appendChild(checkbox)
    itemBox.appendChild(input)
    itemBox.appendChild(editButton)
    itemBox.appendChild(removeButton)

    checkbox.addEventListener('click', (e) => {
      this.checked(input)
    })

    editButton.addEventListener('click', () => {
      this.edit(input)
    })

    removeButton.addEventListener('click', () => {
      this.remove(itemBox)
    })
  }

  checked(input) {
    input.classList.toggle('line-through');
  }

  edit(input) {
    input.disabled = !input.disabled
  }

  remove(itemBox) {
    container.removeChild(itemBox)
  }
}

function addTodoItem() {
  if(input.value) {
    new item(input.value)
    input.value = ''
  }
}

addButton.addEventListener('click', addTodoItem)
window.addEventListener('keydown', (e) => {
  if(e.which === 13) {
    addTodoItem()
  }
})