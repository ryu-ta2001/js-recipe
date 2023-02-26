const formula = document.getElementById("formula")
const calcButton = document.getElementById("calc-button")
const resultDisplay = document.getElementById("result-display")

const numberMap = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const calculate = function () {
  let kou = [] // 数式の項が入る配列
  let operator = [] // 数式の演算子が入る配列
  toArray(kou, operator)
  while (operator.length != 0) {
    let opeIndex_tim = operator.indexOf("*")
    let opeIndex_div = operator.indexOf("/")
    let opeIndex = -1
    if (opeIndex_tim !== -1 && opeIndex_div !== -1) {
      opeIndex = opeIndex_tim < opeIndex_div ? opeIndex_tim : opeIndex_div
    } else if (opeIndex_tim !== -1 && !(opeIndex_div !== -1)) {
      opeIndex = opeIndex_tim
    } else if (!(opeIndex_tim !== -1) && opeIndex_div !== -1) {
      opeIndex = opeIndex_div
    }
    if (opeIndex !== -1) {
      if (operator[opeIndex] === "*") {
        kou[opeIndex] = kou[opeIndex] * kou[opeIndex + 1]
        kou.splice(opeIndex + 1, 1)
        operator.splice(opeIndex, 1)
      } else if (operator[opeIndex] === "/") {
        kou[opeIndex] = kou[opeIndex] / kou[opeIndex + 1]
        kou.splice(opeIndex + 1, 1)
        operator.splice(opeIndex, 1)
      }
    } else {
      // ここにはoperatorの中に * も, / もなくなったら入る
      if (operator[0] === "+") {
        kou[0] = kou[0] + kou[1]
        kou.splice(1, 1)
        operator.splice(0, 1)
      } else if (operator[0] === "-") {
        kou[0] = kou[0] - kou[1]
        kou.splice(1, 1)
        operator.splice(0, 1)
      }
    }
  }
  resultDisplay.textContent = kou[0]
}

const toArray = function (kou, operator) {
  let temp = []
  for (let i = 0; i < formula.value.length; i++) {
    if (numberMap.includes(formula.value[i])) {
      // input タグのvalueは数字も文字列になってるから
      temp.push(formula.value[i])
    } else {
      operator.push(formula.value[i])
      kou.push(Number(temp.join("")))
      temp = []
    }
  }
  kou.push(Number(temp.join("")))
  temp = []
  // ここまででkouには項が、opetatorには演算子が入っている
}
calcButton.onclick = function () {
  calculate()
}
