function renderHeader(){
    var navBar = document.getElementById('nav')
    var homeButton = document.createElement('button')
    homeButton.setAttribute('id', 'home')
    homeButton.textContent = 'Home'

    var menuButton = document.createElement('button')
    menuButton.setAttribute('id', 'menu')
    menuButton.textContent = 'Menu'

    var contactButton = document.createElement('button')
    contactButton.setAttribute('id', 'contact')
    contactButton.textContent = 'Contact'

    navBar.replaceChildren(homeButton, menuButton, contactButton)
}

export {renderHeader}