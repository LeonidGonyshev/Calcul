const buttonsNumber = document.querySelectorAll('.btn-num')
const buttonsStr = document.querySelectorAll('.btn')
const write = document.querySelector('#write')
const answer = document.querySelector('#answer')
let text = 0
const addStr = (item) => (
    item.addEventListener('click', (event) => {
        text = event.currentTarget.dataset.meaning
        if (text === '='){
            const result = eval(write.textContent)
            answer.textContent = result
        }
        write.textContent += text
        if (text === 'del'){
            write.textContent = ''
        }
}))
document.addEventListener('keydown', (e) => {
    if (e.key === 'Shift'){
        text += ''
    }else if (e.key === 'Backspace'){
        console.log(write.textContent.slice(0, -1));
        write.textContent = write.textContent.slice(0, -1)
    }else if (e.code === 'Enter') {
        e.preventDefault()
        const result = eval(write.textContent)
        answer.textContent = result
    }
    else {
        text = e.key
        write.textContent += text
    }
    
    
})
const addNumber = (item) => (
    item.addEventListener('click', (event) => {
        text = +event.currentTarget.dataset.meaning
        write.textContent += text
    })
)
buttonsNumber.forEach(addNumber)
buttonsStr.forEach(addStr)