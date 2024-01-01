const container = document.querySelector(".container")
let box;
for (let i = 0; i < 16*16; i++){
box = document.createElement("div")
box.classList.add("box")
let x = 16;
box.style.width = `calc(100%/${x})`
box.style.height = `calc(100%/${x})`
container.appendChild(box)
box.addEventListener("mouseenter", (e) => {
    e.target.style.backgroundColor = "black"
})
} 

let boxes = document.querySelectorAll(".box")

//for (let i = 0; i < boxes.length; i++){
  //  boxes[i].parentNode.removeChild(boxes[i])
//}