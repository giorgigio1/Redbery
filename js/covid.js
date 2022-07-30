$(function() {
    $( "#date_ex" ).datepicker();
    $( "#date_ex2" ).datepicker();
});
        

let office = document.querySelector('#office')
let home = document.querySelector('#home')
let hybrid = document.querySelector('#hybrid')

office.addEventListener('click', () => {
    home.checked = false
    hybrid.checked = false
})

home.addEventListener('click', () => {
    office.checked = false
    hybrid.checked = false
})

hybrid.addEventListener('click', () => {
    office.checked = false
    home.checked = false
})


let covidYes = document.querySelector('#covidYes')
let covidNo = document.querySelector('#covidNo')
let covidWhen = document.querySelector('.art3')

covidYes.addEventListener('click', () => {
    covidWhen.classList.remove('d-none')
    covidNo.checked = false
})

covidNo.addEventListener('click', () => {
    covidWhen.classList.add('d-none')
    covidYes.checked = false
})


let vaccinatedYes = document.querySelector('#vaccinatedYes')
let vaccinatedNo = document.querySelector('#vaccinatedNo')
let vaccinatedWhen = document.querySelector('.art5')

vaccinatedYes.addEventListener('click', () => {
    vaccinatedWhen.classList.remove('d-none')
    vaccinatedNo.checked = false
})

vaccinatedNo.addEventListener('click', () => {
    vaccinatedWhen.classList.add('d-none')
    vaccinatedYes.checked = false
})