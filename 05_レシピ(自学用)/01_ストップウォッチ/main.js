const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0
let timer = null
const counter = function () {
  count += 1
  display.textContent = count / 100
}

button.onclick = function () {
  if (timer === null) {
    timer = setInterval(counter, 10)
    button.textContent = "stop"
  } else {
    button.textContent = "start"
    clearInterval(timer)
    timer = null
  }
}
