import { renderContact } from "./contact";
import { renderHome } from "./home";
import { renderMenu } from "./menu";
import { renderHeader } from "./header";
import './style.css';


function initPage(){
    renderHeader()
    document.getElementById('home').addEventListener('click', ()=>{
        renderHome()
    })

    document.getElementById('menu').addEventListener('click',()=>{
        renderMenu()
    }) 

    document.getElementById('contact').addEventListener('click',()=>{
        renderContact()
    }) 

    renderHome()
}

initPage()