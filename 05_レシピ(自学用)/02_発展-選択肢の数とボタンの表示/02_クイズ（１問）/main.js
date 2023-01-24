const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この星の名前は何でしょう？",
  image: "Ganymede.jpg",
  choices: [
    {
      text: "ゴリアテ",
      feedback:
        "残念！ゴリアテは、旧約聖書に登場するダビデに石で殺される巨人だよ。",
    },
    {
      text: "ゼニガメ",
      feedback: "残念！ゼニガメは、クサガメまたはニホンイシガメの幼体だよ。",
    },
    {
      text: "ガニメデ",
      feedback: "正解！ガニメデは、木星の第三惑星だよ！",
    },
  ],
}

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 問題文表示
  quizText.textContent = "Q. " + quiz.text

  // 画像表示
  quizImage.src = "./images/" + quiz.image

  // ボタン作成
  createChoice(quiz)
}

// ボタン作成関数
const createChoice = function (obj) {
  const choice = []
  for (let i = 0; i < obj.choices.length; i++) {
    choice.push(document.createElement("button"))
    choice[i].textContent = obj.choices[i].text
    choicesContainer.append(choice[i])
    choice[i].onclick = function () {
      choose(i)
    }

    console.log(choice[i].textContent)
  }
}

const choose = function (choiceNumber) {
  // フィードバック表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

reloadQuiz()
