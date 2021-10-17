let calcula = window.document.querySelector('input#calcular')
let select = document.querySelector('select#tab')
calcula.addEventListener("click", calc, false)
calcula.addEventListener("mouseenter", bottomStyle, false)
calcula.addEventListener("mouseout", bottomStyle2, false)
function bottomStyle() {
    calcula.style.background = '#0c7c0c'
}

function bottomStyle2() {
    calcula.style.background = '#0a9a0a'
}

function calc() {
    let n = window.document.querySelector('input#number')
    select.innerHTML = ''
    if (n.value.length == 0) {
        alert('Digite um número para calcular.')
    }

    else {
        number = Number(n.value)
        for (count = 1; count <= 10; count++) {
            let item = document.createElement('option')
            item.text += `${number} * ${count} = ${number * count}`
            item.value = `tab${count}`
            select.appendChild(item)
        }
    }
}