const genkiFunction = function () {
  let number = 0
  let timer1 = null
  const genki = function () {
    number += 1
    if (number % 3 === 0) {
      console.log(number + "!!!!")
    } else {
      console.log(number)
    }

    if (number > 300) {
      // clearIntervalをgenkiの外に出すとカウント止まらない(genki関数が繰り返されるからその外に出ないから)
      clearInterval(timer1)
    }
  }

  timer1 = setInterval(genki, 1000)
}

genkiFunction()
