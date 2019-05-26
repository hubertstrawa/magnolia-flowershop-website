let links = document.querySelectorAll('.main-nav nav ul li a');
let arr = Array.from(links);

arr.forEach(i => {
    i.addEventListener('click', () => {
        document.querySelector('.nav-toggle').checked = false;
    })
})