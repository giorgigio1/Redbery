document.querySelector('#submit').addEventListener('click', e => {
    e.preventDefault()
    fetch('thanks.html')
    .then(response=> response.text())
    .then(text=> document.querySelector('body').innerHTML = text);

    setTimeout(() => {
        fetch('langing.html')
        .then(response=> response.text())
        .then(text=> document.querySelector('body').innerHTML = text);
    }, 3000)
})


