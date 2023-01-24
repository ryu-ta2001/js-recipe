const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

addButton.onclick = function () {
  if (memoInput.value !== "") {
    // メモカード作成
    const memo = createMemo(memoInput.value)
    memoContainer.append(memo)
    memoInput.value = ""
  }
}

const createMemo = function (text) {
  const memo = document.createElement("div")
  memo.className = "memo"
  // メモのテキスト部分
  const memoText = document.createElement("div")
  memoText.textContent = text
  memo.append(memoText)

  // 削除ボタン
  const deleteButton = document.createElement("button")
  deleteButton.textContent = "削除"
  deleteButton.onclick = function () {
    memo.remove()
  }
  memo.append(deleteButton)
  return memo
}
