const display = document.getElementById("display")
const plusOne = document.getElementById("plus-one")
const minusOne = document.getElementById("minus-one")
const twoTimes = document.getElementById("two-times")

let count = 0
plusOne.onclick = function () {
  count += 1
  display.textContent = count
}

minusOne.onclick = function () {
  count -= 1
  display.textContent = count
}

twoTimes.onclick = function () {
  count *= 2
  display.textContent = count
}
