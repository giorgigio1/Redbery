let select = document.querySelector('#list')

window.fetch('https://bootcamp-2022.devtest.ge/api/skills').then(res => res.json()).then(result => {
        result.map(lang => {
                let option = document.createElement('option')
                option.setAttribute('placeholder', lang.title)
                let text = document.createTextNode(lang.title)
                option.appendChild(text)
                select.appendChild(option)
        })
})

let getYear = document.querySelector('#getYear')
let inputs = document.querySelector('.inputs')

document.querySelector('#btn').addEventListener('click', e => {
        e.preventDefault()
        yearsValidation() ? createSkills(select.value, getYear.value) : alert('Invalid Year!')

        // if (yearsValidation2(select.value, getYear.value) === 'text') {
        //         document.querySelector('#errNumber').classList.remove('d-none')
        //         document.querySelector('#errOneTime').classList.add('d-none')
        // }
        // else if (yearsValidation2(select.value, getYear.value) === 'choosen') {
        //         document.querySelector('#errOneTime').classList.remove('d-none')
        //         document.querySelector('#errNumber').classList.add('d-none')
        // }
        // else if (yearsValidation2(select.value, getYear.value) === 'notChoosen') {
        //         createSkills(select.value, getYear.value)
        //         document.querySelector('#errOneTime').classList.add('d-none')
        //         document.querySelector('#errNumber').classList.add('d-none')
        // }
        // else if (yearsValidation2(select.value, getYear.value)) {
        //         createSkills(select.value, getYear.value)
        //         document.querySelector('#errOneTime').classList.add('d-none')
        //         document.querySelector('#errNumber').classList.add('d-none')
        // }
})   

function yearsValidation() {
        let selectedValue = document.querySelector(`#${select.value}`)
        return !(isNaN(getYear.value) || getYear.value.length === 0 || Number(getYear.value) <= 0 || selectedValue !== null)
}

// function yearsValidation2() {
//         let selectedValue = document.querySelector(`#${select.value}`)
//         if (isNaN(getYear.value) || getYear.value.length === 0 || Number(getYear.value) <= 0) return 'text'
//         if (selectedValue === null) return 'notChoosen'
//         if (selectedValue !== null) return 'choosen'
//         return true
// }

function createSkills(lang, year) {
        let p = document.createElement('p')
        p.setAttribute('id', lang)
        p.innerText = `${lang}  Years of experience: ${Number(year)}`
        let btnDelete = document.createElement('img')
        btnDelete.setAttribute('src', '/images/Remove.png')
        btnDelete.setAttribute('class', 'remove')
        let div = document.createElement('div')
        div.classList.add('skill')
        div.appendChild(p)
        div.appendChild(btnDelete)
        inputs.appendChild(div)
        btnDelete.addEventListener('click', e => {
                inputs.removeChild(div)
        })
}
