// 必要な要素たち
const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")
const nextQuiz = document.getElementById("next-quiz")

let quizNum = 0
// クイズの内容
const quizzes = [
  {
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
  },
  {
    text: "いま、何問目？",
    image: "Two.jpeg",
    choices: [
      {
        text: "１",
        feedback: "残念！ひとつ少ないよ。",
      },
      {
        text: "２",
        feedback: "正解！１でも３でもないよ！",
      },
      {
        text: "３",
        feedback: "残念！ひとつ多いよ。",
      },
    ],
  },
  {
    text: "この城の名前は？",
    image: "maruoka.png",
    choices: [
      {
        text: "丸岡城",
        feedback: "正解！どこからどうみても丸岡城だね。",
      },
      {
        text: "丸亀城",
        feedback: "残念！どこからどうみても丸亀城ではないよ。",
      },
      {
        text: "丸子城",
        feedback: "残念！どこからどうみても丸子城ではないよ。",
      },
    ],
  },
]

// quiz を画面に表示する関数
const reloadQuiz = function () {
  // 次の問題へを消す
  nextQuiz.classList.add("hidden")

  // 問題文表示
  quizText.textContent = "Q. " + quizzes[quizNum].text

  // 画像表示
  quizImage.src = "./images/" + quizzes[quizNum].image

  // ボタン作成
  createChoice(quizzes[quizNum])
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

    // console.log(choice[i].textContent)
  }
}

const choose = function (choiceNumber) {
  // フィードバック表示
  feedback.textContent = quizzes[quizNum].choices[choiceNumber].feedback

  // 次の問題へを出す処理
  if (feedback.textContent.includes("正解") && quizNum !== quizzes.length - 1) {
    nextQuiz.classList.remove("hidden")
  }
}

nextQuiz.onclick = function () {
  choicesContainer.textContent = ""
  feedback.textContent = ""
  quizNum++
  reloadQuiz()
}

reloadQuiz()
