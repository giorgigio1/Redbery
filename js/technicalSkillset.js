window.fetch("https://bootcamp-2022.devtest.ge/api/skills").then(res => res.json()).then(result => {
        // Sheni kodi aq gaushvi rac ginda ro qna
        // Resultshi geqneba dabrunebuli info api dan
        let select = document.querySelector('#list')
        result.map(lang => {
                let option = document.createElement('option')
                option.setAttribute("placeholder", lang.title)
                let text = document.createTextNode(lang.title)
                option.appendChild(text)
                select.appendChild(option)
        })
        })

const list = document.querySelector('#list');
const inputs = document.querySelector('.inputs');

document.querySelector('#btn').addEventListener('click', (e) => {
        e.preventDefault()
        console.log(e.target.id)
        let getYear = document.querySelector('#getYear').value
        yearValidation(getYear) ? createSkill(list.value, getYear) : notValid()
});

function yearValidation(value) {
        return !(isNaN(value) || value.length == 0 || Number(value) <= 0)
}

function createSkill(lang, years) {
        let span = document.createElement('p')
        span.innerText = `${lang}          Years of Experience: ${Number(years)}`
        let btnDelete = document.createElement('img')
        btnDelete.setAttribute('src', "/images/Remove.png")
        btnDelete.setAttribute('class', "remove")
        btnDelete.addEventListener('click', (e) => {
                inputs.removeChild(div)
        })
        const div = document.createElement('div')
        div.classList.add('skill')
        div.appendChild(span)
        div.appendChild(btnDelete)
        inputs.appendChild(div)
}

function notValid() {
        console.error('Invalid year!')
}



