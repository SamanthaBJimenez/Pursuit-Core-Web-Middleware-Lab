document.addEventListener("DOMContentLoaded", () => {

  let input = document.querySelector("input")
  let button = document.querySelector("button")
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

})
