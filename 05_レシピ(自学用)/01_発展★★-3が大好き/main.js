const threelover = function (number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) console.log(n + "!!!!!!")
    else if (String(n).includes("3")) console.log(n + "!!!!!!")
    // Stringで数値→文字列に変換, .includesメソッドで文字列中に指定された文字列が含まれているか判定
    else console.log(n)
  }
}

threelover(100)
