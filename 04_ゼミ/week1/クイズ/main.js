// 問題文
//ボタン 3つ
//FBテキスト

//要素の宣言
// const display = document.getElementById("display")

const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const fbtext = document.getElementById("fbtext")

const button = [button1, button2, button3]
const fbTexts = ["外れ！", "外れ！", "正解！！"]
//fbテキストを配列

//クリックされたらFB変える
for (let n = 0; n < button.length; n++) {
  button[n].onclick = function () {
    fbtext.textContent = fbTexts[n]
  }
}
