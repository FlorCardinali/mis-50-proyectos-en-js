const nav_open = document.getElementById('open')
const nav_close = document.getElementById('close')
const container = document.querySelector('.container')

nav_open.addEventListener('click', () => 
container.classList.add('show-nav'))

nav_close.addEventListener('click', () => 
container.classList.remove('show-nav'))