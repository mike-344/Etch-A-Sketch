const container = document.querySelector(".container")

for (let i = 0; i < 16*16; i++){
const box = document.createElement("div")
box.classList.add("box")
let x = 970/16;
box.style.width = "calc(100%/16)"
box.style.height = "calc(100%/16)"
container.appendChild(box)
} 