const inputElement = document.getElementById("input-todo")
const container = document.getElementById("cards-container")
const addButton = document.getElementById("add-button")

addButton.onclick = function () {
  // カード作成
  const card = createCard(inputElement.value)
  container.append(card)

  // 入力欄空にする
  inputElement.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function (text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分の作成
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンの作成
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  return card
}
