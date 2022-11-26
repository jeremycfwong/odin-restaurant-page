function renderHeader(){
    var navBar = document.getElementById('header')
    var logo = document.createElement('div')
    logo.setAttribute('id','logo')
    logo.textContent = "Fancy Restaurant"

    var nav = document.createElement('div')
    nav.setAttribute('id','nav')


    var homeButton = document.createElement('button')
    homeButton.setAttribute('id', 'home')
    homeButton.textContent = 'Home'

    var menuButton = document.createElement('button')
    menuButton.setAttribute('id', 'menu')
    menuButton.textContent = 'Menu'

    var contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contact')
    contactButton.textContent = 'Contact'

    nav.replaceChildren(homeButton,menuButton,contactButton)
    navBar.replaceChildren(logo, nav)
}

export {renderHeader}