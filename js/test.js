// showStars(5)

// function showStars(rows) {
//     for (let i = 0; i < rows; i++) {
//         let star = ''
//         for (let j = 0; j <= i; j++) 
//             star += '*';
//         console.log(star)
//     }
// }




// showPrimes(20)

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++) {
//         if (isPrime(number)) console.log(number)
//     }
// }

// function isPrime(number) {
//     for (let factory = 2; factory < number; factory++) 
//         if (number % factory === 0) 
//             return false
//     return true
// }




// const numbers = arrayFromRange(1, 4)

// console.log(numbers)

// function arrayFromRange(min, max) {
//     let arr = []
//     for (let i = min; i <= max; i++) 
//         arr.push(i)
    
//     return arr
// }



// const numbers = [1, 2, 3, 4, 5]

// console.log(includes(numbers, 11))

// function includes(array, searchElement) {
//     for (let element of array) {
//         if (element === searchElement) 
//         return true
//     return false 
//     }
// }



// const numbers = [1, 2,1,2, 3, 4]

// const output = except(numbers, [1, 2])

// console.log(output)

// function except(array, excluded) {
//     let newArr = []
//     for (let number of array) 
//         if (!excluded.includes(number)) 
//             newArr.push(number)
//     return newArr
// }





// const numbers = [1, 2, 3, 4]

// const output = move(numbers, 0, 4)

// console.log(output)

// function move(array, index, offset) {
//     const position = index + offset
//     if (position >= array.length || position < 0) {
//         console.error('Invalid Position!')    
//     }

//     let output = [...array]
//     const element = output.splice(index, 1)[0]
//     output.splice(position, 0, element)
//     return output
// }




// const numbers = [1,1,3, 2, 3, 4, 5, 6]

// const count = countOccurrences(numbers, 3)

// console.log(count)

// function countOccurrences(array, searchelement) {
//     // let sum = 0;
//     // for (let number of array) 
//     //     if (number === searchelement) 
//     //         sum++
//     // return sum;

//     return array.reduce((accumulator, value) => {
//         const occurrence = (value === searchelement) ? 1 : 0
//         return accumulator + occurrence
//     }, 0)
// }




// const numbers = [1, 22, 33, 4, 5, 6]

// const max = getMax(numbers)

// console.log(max)

// function getMax(array) {
//     // let max = array[0]
//     // for (let number of array) 
//     //     if (number > max) 
//     //         max = number
//     // return max

//     if (array.length < 1) return undefined
//     return array.reduce((a, b) => a > b ? a : b)
// }




// const movies = [
//     { title: 'a', year: 2018, raiting: 4.5 },
//     { title: 'b', year: 2018, raiting: 4.7 },
//     { title: 'c', year: 2018, raiting: 3 },
//     { title: 'd', year: 2017, raiting: 4.5 },
// ]

// const output = movies
//     .filter(a => a.year === 2018 && a. raiting > 4)
//     .sort((a, b) => a.raiting - b.raiting)
//     .reverse()
//     .map(a => a.title)
//     .join()

// console.log(output)




// console.log(sum([1, 2, 3, 4]))

// function sum(...array) {
//     if (array.length ===1 && Array.isArray(array[0])) 
//         array = [...array[0]]

//     return array.reduce((a, b) => a + b)
// }



// const circle = {
//     radius: 1,
//     get area() {
//         return Math.PI * this.radius * this.radius
//     },
//     set area(number) {
//         this.radius = number
//     }
// }

// console.log(circle.area)
// circle.area = 2

// console.log(circle.area)




// try {
//     const numbers = [1,1, 2, 3, 4]
//     const count = countOccurrences(null, 1)
//     console.log(count)
// }
// catch (e) {
//     console.log(e.message)
// }

// function countOccurrences(array, searchElement) {
//     if (!Array.isArray(array)) 
//         throw new Error('Invalid array!')

//     return array.reduce((accumulator, current) => {
//         const occurrence = (current == searchElement) ? 1 : 0
//         return accumulator + occurrence
//     }, 0)
// }


// let select = document.querySelector('#list')
// window.fetch("https://bootcamp-2022.devtest.ge/api/skills").then(res => res.json()).then(result => {
//         result.map(lang => {
//                 let option = document.createElement('option')
//                 option.setAttribute("placeholder", lang.title)
//                 let text = document.createTextNode(lang.title)
//                 option.appendChild(text)
//                 select.appendChild(option)
//         })
//         })

        
//         document.querySelector('#btn').addEventListener('click', (e) => {
//             e.preventDefault()
//             console.log(e.target.id)
//             let getYear = document.querySelector('#getYear').value
//             yearValidation(getYear) ? createSkill(select.value, getYear) : notValid()
//         });
        
//         function yearValidation(value) {
//             return !(isNaN(value) || value.length == 0 || Number(value) <= 0)
//         }
        
// const inputs = document.querySelector('.inputs');

// function createSkill(lang, years) {
//         let p = document.createElement('p')
//         p.innerText = `${lang}          Years of Experience: ${Number(years)}`
//         let btnDelete = document.createElement('img')
//         btnDelete.setAttribute('src', "/images/Remove.png")
//         btnDelete.setAttribute('class', "remove")
//         const div = document.createElement('div')
//         div.classList.add('skill')
//         div.appendChild(p)
//         div.appendChild(btnDelete)
//         inputs.appendChild(div)
//         btnDelete.addEventListener('click', (e) => {
//                 inputs.removeChild(div)
//         })
// }

// function notValid() {
//         console.error('Invalid year!')
// }






// const cars = [
//     {title: 'bmw', years: 2015},
//     {title: 'audi', years: 2012},
//     {title: 'mercedes', years: 2013},
// ]

// console.log(cars)
// console.log(cars.sort((a, b) => (a.title > b.title) ? 1 : -1))
// // console.log(cars.sort((a, b) => a.years - b.years))
// // console.log(cars.sort((a, b) => {
// //     if (a.title > b.title) return 1
// //     if (a.title < b.title) return -1
// //     return 0
// // }))



// let table = ['cat', 'dog', 'elephant', 'bee', 'ant']
// console.log(table.sort())

// let test = 'A'
// console.log(test)
// console.log(test.toLowerCase())





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}






