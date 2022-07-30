let devtalkYes = document.querySelector('#devtalkYes')
let devtalkNo = document.querySelector('#devtalkNo')
let text = document.querySelector('.art2')

devtalkYes.addEventListener('click', () => {
    text.classList.remove('d-none')
    devtalkNo.checked = false
})

devtalkNo.addEventListener('click', () => {
    text.classList.add('d-none')
    devtalkYes.checked = false
})