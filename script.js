const open = document.getElementById('open')
const closed = document.getElementById('close')
const container = document.querySelector('.conatiner')

open.addEventListener('click', () => container.classList.add('show-nav'))

close.addEventListener('click', () => container.classList.remove('show-nav'))