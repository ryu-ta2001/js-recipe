const imageElement = document.getElementById("dog-image")

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => {
    console.dir(res)
    return res.json()
  })
  .then((data) => {
    console.dir(data)
    imageElement.src = data.message
  })
