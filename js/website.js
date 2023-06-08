const loadText = document.querySelector('.text')
const bg = document.querySelector('.bg')
const name = document.getElementById('name')
const container = document.getElementById('container')


let load = 0

let int

name.addEventListener('click', () => {
    console.log("CLICK")
    int = setInterval(text, 3)
    container.style.opacity = 1
})


function text(){
    load++
    bg.style.filter = `blur(${3 - .3*load}px)`
    loadText.style.opacity = `${1 - load/100}`

    if (load == 100){
        clearInterval(int)
    }
}


