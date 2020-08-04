// Your code goes here

//fun bus logo
const funBusLogo = document.querySelector('.logo-heading')

funBusLogo.addEventListener('mouseenter', () => {
    funBusLogo.style.transform = 'scale(1.5)'
    funBusLogo.style.transition = 'all 0.3s'
})

funBusLogo.addEventListener('mouseleave', () => {
    funBusLogo.style.transform = 'scale(1.0)'
})

//nav bar
const navBar = document.querySelectorAll('.nav-link')
navBar.forEach(element => {
    element.addEventListener('click', () => {
        if(element.style.color === 'red'){
            element.style.color = 'black'
            element.style.fontStyle = 'normal'
        }else{
        element.style.color = 'red'
        element.style.fontStyle = 'italic'
    }
    })
})

//