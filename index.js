document.addEventListener("DOMContentLoaded", () => {

  let input = document.querySelector("input")
  // let submit = document.querySelector("#submit")
  let ul = document.querySelector("ul")
  let animalForm = document.querySelector("#animalForm")
  
  animalForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    ul.innerHTML = ""
    let results = await axios.get(`http://localhost:3000/animal/${input.value}`)
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    li1.innerText = results.data.status
    li2.innerText = results.data.message
    ul.appendChild(li1)
    ul.appendChild(li2)
  })

  let numberForm = document.querySelector("#numberForm")
  let floorNum = document.querySelector("#floor")
  let ceilNum = document.querySelector("#ceiling")
  let para = document.querySelector("p")

  numberForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    para.innerHTML = ""
    let results = await axios.get(`http://localhost:3000/random/${floor.value}/${ceiling.value}`)
    para.innerHTML = results.data.randPick
  })

})
