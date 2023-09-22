

const box1 = document.createElement("div")
document.body.appendChild(box1)
box1.classList.add("box1")

const box2 = document.createElement("div")
box1.appendChild(box2)
box2.classList.add("box2")

const Button1 = document.createElement("button")
box1.appendChild(Button1)
Button1.innerHTML = ""
Button1.classList.add('Button1')

let counter = 0
const result = document.createElement("h1")
result.classList.add('result')
result.innerText = counter
box2.appendChild(result)

const Button2 = document.createElement("button")
box1.appendChild(Button2)
Button2.innerHTML = ""
Button2.classList.add('Button2')

Button2.addEventListener("click", () => {
    counter = counter = 0
    result.innerText = counter
})

Button1.addEventListener("click", () => {
    counter = counter + 1
    result.innerText = counter

    if (counter == 33) {
        window.navigator.vibrate([200, 200, 200, 200, 200, 200])
    } else if (counter == 66) {
        window.navigator.vibrate([200, 200, 200, 200, 200, 200])
    } else if (counter == 99) {
        window.navigator.vibrate([200, 200, 200, 200, 200, 200])
    }
})

