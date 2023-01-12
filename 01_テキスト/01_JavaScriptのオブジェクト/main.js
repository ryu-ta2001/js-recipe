const hikakin = {
  name: "ヒカキン",
  age: 24,
  hobbies: ["ゲーム", "動画編集", "猫と遊ぶこと"],
  isHappy: true,
  address: {
    country: "日本",
    city: "東京",
  },
  sayHello: function () {
    console.log("ブンブンハロー YouTube")
  },
}

// 練習問題
// hikakin オブジェクトに入っている sayHello メソッドを実行してください。
hikakin.sayHello()

// [やってみよう]
// hikakin オブジェクト を真似して自分のプロフィールをオブジェクトで作ってください。
// オブジェクトにはたくさんのプロパティを追加してください。
const ryuta = {
  name: "青栁龍太",
  age: 21,
  hobbies: ["サッカー観戦", "筋トレ", "運動", "ドライブ"],
  isHappy: true,
  address: {
    country: "日本",
    city: "北海道",
  },
  getName: function () {
    console.log(this.name)
  },
  getAge: function () {
    console.log(this.age)
  },
}
ryuta.getName()
