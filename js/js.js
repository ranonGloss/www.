let body = document.querySelector('body')
let small = document.querySelector('small')

small.onclick = function(){
    body.classList.toggle('darkMode')
}

small.innerHTML= 'Dark'
