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

//nav bar, stopPropagation(), preventDefault()
const navBar = document.querySelectorAll('.nav-link')
navBar.forEach(element => {
    element.addEventListener('click', event => {
        if (element.style.color === 'red') {
            element.style.color = 'black'
            element.style.fontStyle = 'normal'
        } else {
            element.style.color = 'red'
            element.style.fontStyle = 'italic'
        }
        event.preventDefault()
        event.stopPropagation()
    })
})


const header = document.querySelector('.main-navigation')

header.addEventListener('click', event => {
    header.style.backgroundColor = 'green'
    event.stopPropagation()
})

//copy and cut
document.addEventListener('copy', () => {
    const logoHeading = document.querySelector('.main-navigation div')
    let logo = document.createElement('h1')
    logo.textContent = 'COPYCAT 😡 '
    let logoThing = logo.cloneNode(true)
    logoHeading.appendChild(logoThing)
})
document.addEventListener('cut', () => {
    const funBusHeading = document.querySelector('.intro')
    let funbus = document.createElement('h2')
    funbus.textContent = 'CUTTER 😡 '
    let cutter = funbus.cloneNode(true)
    funBusHeading.appendChild(cutter)
})

//keydown
const everything = document.querySelector('body')
document.addEventListener('keydown', () => {
    if (everything.style.backgroundColor === 'white') {
        everything.style.backgroundColor = 'Cornsilk'
    } else {
        everything.style.backgroundColor = 'white' /*why wont the opposite work?*/
    }
})

//dbl click
const allImages = document.querySelectorAll('img')

allImages.forEach(element => {
    element.addEventListener('dblclick', () => {
        element.style.transform = 'scale(1.2)'
    })
});

//scroll
const welcomeTitle = document.querySelectorAll('h2')
welcomeTitle.forEach(element => {
    document.addEventListener('scroll', () => {
        element.style.fontStyle = 'oblique'
        element.style.fontSize = '5rem'
    })
});

//aux click
const yellowBus = document.querySelector('.intro img')
yellowBus.addEventListener('auxclick', () => {
        yellowBus.style.transform = 'scale (1.5)'
        yellowBus.style.transition = 'all 0.5s'
})

const buttons = document.querySelectorAll('.btn')

buttons.forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.color = 'black'
        element.style.fontSize = '2.3rem'
    })
    element.addEventListener('mouseup', () => {
        element.style.color = 'pink'
        element.style.fontSize = '1.8rem'
    })
});