
const gif = "https://media.giphy.com/media/9LCjaYOlADRRapavyP/giphy.gif"
const btn = document.createElement("button")
document.body.append(btn)
btn.innerText = "Click Me!"
btn.style.width = "30px"
btn.style.height = "20px"
btn.style.float = "right"
const img = document.createElement("img")
const text = document.createElement("h1")
document.body.append(text)
text.innerText = "Change this text"
btn.addEventListener("click", ()=>{
    img.src = gif;
    document.body.append(img)
    img.style.display = "flex"
})

img.addEventListener("mouseout", ()=> {
    img.style.display = "none"
})
text.addEventListener("mouseover", ()=> {
    text.innerText = "I have been changed"
})
text.addEventListener("mouseout", ()=> {
    text.innerText = "Change this text"
})

const form = document.getElementById("form")
const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const ul = document.createElement("ul")
document.body.append(ul)
var count = 0

fname.addEventListener("click", ()=> {
    fname.value = ""
})
lname.addEventListener("click", ()=>{
    lname.value = ""
})


form.addEventListener("submit", (e)=>{
    count++
    e.preventDefault()
    console.log(count)
    // const showName = document.createElement("h3")
    // document.body.append(showName)
    // showName.innerText = fname.value + " " + lname.value
    const li = document.createElement("li")
    const btn = document.createElement("button")
    ul.append(li, btn)
    btn.innerText = "Delete"
    li.innerText = fname.value + " " + lname.value
    li.addEventListener("click", ()=>{
        li.remove()
        ul.removeChild(btn)
    })
    btn.addEventListener("click", ()=>{
        li.remove()
    })


    console.log(count)
    })








