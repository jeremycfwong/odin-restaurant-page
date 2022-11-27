import { renderContact } from "./contact";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderHeader } from "./header";
import { toggleSelected } from "./header";
import './style.css';


function initPage(){
    renderHeader()
    document.getElementById('home').addEventListener('click', (e)=>{
        toggleSelected(e.target.id)
        renderHome()
    })

    document.getElementById('menu').addEventListener('click',(e)=>{
        toggleSelected(e.target.id)
        renderMenu()
    }) 

    document.getElementById('contact').addEventListener('click',(e)=>{
        toggleSelected(e.target.id)
        renderContact()
    }) 

    toggleSelected('home')
    renderHome()
}

initPage()