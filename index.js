let countEl = document.getElementById("count-el")
let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
  count += 1 //   count = count + 1
  countEl.textContent = count
}

function save() {
  // let countStr = " " + count + " -"
  // saveEl.innerText += countStr ------ innerText can`t return hidden elemets (space included)

  // Better way to solve this
  let countStr = count + " - "
  saveEl.textContent += countStr

  countEl.textContent = 0
  count = 0
}

