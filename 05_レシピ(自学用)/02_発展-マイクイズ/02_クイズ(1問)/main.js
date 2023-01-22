const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const feedback = document.getElementById("feedback")

const quiz = {
  text: "これはどのサッカー選手の髪型でしょう？",
  image: "Fellainihair.jpg",
  choices: [
    {
      text: "ジダン",
      feedback: "残念！彼には髪がありません。",
    },
    {
      text: "サラー",
      feedback: "残念！彼のアフロはもっと小さいです。",
    },
    {
      text: "フェライニ",
      feedback: "正解！元ベルギー代表の彼は今、中国でプレーしているよ",
    },
  ],
}

const reloadQuiz = function () {
  quizText.textContent = "Q. " + quiz.text
  quizImage.src = "./images/" + quiz.image

  button1.textContent = quiz.choices[0].text
  button2.textContent = quiz.choices[1].text
  button3.textContent = quiz.choices[2].text
}

const choose = function (buttonNumber) {
  feedback.textContent = quiz.choices[buttonNumber].feedback
}

button1.onclick = function () {
  choose(0)
}
button2.onclick = function () {
  choose(1)
}
button3.onclick = function () {
  choose(2)
}

reloadQuiz()
