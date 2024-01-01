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




   // for (let i = 0; i < boxes.length; i++){
  // boxes[i].parentNode.removeChild(boxes[i])
//}

btnChange = document.querySelector(".change")

btnChange.addEventListener("click",function newGrid() {
    let boxes = document.querySelectorAll(".box")
    let newDimensions = +prompt("Number of squares per side(max 100)")
    if (newDimensions > 0 && newDimensions <= 100){
           for (let i = 0; i < boxes.length; i++){
        boxes[i].parentNode.removeChild(boxes[i])
}
    
        for (let i = 0; i < newDimensions*newDimensions; i++){
            box = document.createElement("div")
            box.classList.add("box")
            let x = newDimensions;
            box.style.width = `calc(100%/${x})`
            box.style.height = `calc(100%/${x})`
            container.appendChild(box)
            box.addEventListener("mouseenter", (e) => {
                e.target.style.backgroundColor = "black"
            })
            } 
    } else {
        alert("Invalid input")
    }
} )
