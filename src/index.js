import * as homeModule from "./home.js";
import homeIconSrc from "./assets/icons/brand.png";

let contentDiv = document.getElementById("content");
let baseColor = "rgb(164, 226, 245)";
let lightGray = "rgb(220, 221, 222)";
let darkBase = "rgb(77, 169, 201)";
export {contentDiv, baseColor, lightGray}

const body = (() => {
    let body = document.getElementsByTagName("BODY")[0];
    body.style.backgroundColor = baseColor;
    body.style.fontFamily = "Didot, Georgia";
    body.style.fontSize = "10px";
    body.style.minHeight = "100vh";
})();

const navbar = (() => {
    let container = document.createElement("div");
    container.style.backgroundColor = "white";
    container.style.width = "100vw";
    contentDiv.appendChild(container);
    
    let nameDiv = document.createElement("div");
    nameDiv.style.display = "flex";
    nameDiv.style.justifyContent = "center";
    nameDiv.style.alignContent = "center";
    nameDiv.style.fontFamily = "cursive";
    nameDiv.style.fontSize = "min(1.5em, 4vw)";
    nameDiv.style.height = "80px";
    let nameTitle = document.createElement("h1"); 
    nameTitle.innerText = "Classic Canine Cuisine";
    let homeIcon = new Image();
    homeIcon.src = homeIconSrc;
    homeIcon.style.height = "80%";
    homeIcon.style.padding = "10px";
    nameDiv.append(homeIcon, nameTitle);
    
    let linksul = document.createElement("ul");
    linksul.style.display = "flex";
    linksul.style.justifyContent = "space-around";
    linksul.style.fontSize = "min(2em, 5vw)";
    linksul.style.borderTop = "2px dotted " + lightGray;
    let home = document.createElement("li");
    home.innerText = "Home";
    let menu = document.createElement("li");
    menu.innerText = "Menu";
    let contact = document.createElement("li");
    contact.innerText = "Contact";
    linksul.append(home, menu, contact);
    let links = linksul.querySelectorAll("li");

    function styleOpen(e) {
        e.classList.add("open");
        e.style.color = darkBase;
        e.style.backgroundColor = "white";
        e.onmouseover = "";
        e.onmouseout = "";
    }

    function styleUnopen(e) {
        e.classList.remove("open");
        e.style.color = "black";
        e.onmouseover = () => {e.style.backgroundColor = lightGray};
        e.onmouseout = () => {e.style.backgroundColor = "white"};
    }

    function switchStyle(e) {
        if(e.classList.contains("open")) styleUnopen(e);
        else styleOpen(e);
    }
    
    links.forEach(e => {
        let a = document.createElement("a");
        e.append(a);
        e.style.padding = "10px";
        e.style.width = "100%";
        e.style.textAlign = "center";
        if(e != home) {styleUnopen(e);}
        else styleOpen(e);
        e.onclick = () => {
            if(!e.classList.contains("open")) {
                links.forEach(e => {if(e.classList.contains("open"))switchStyle(e);});
                switchStyle(e);
            }
        }
    });

    container.append(nameDiv, linksul);
})();

homeModule.content();

const listSelector = (() => {
    let lists = document.querySelectorAll("ul");
    lists.forEach(e => {
        e.style.listStyle = "none";
        e.style.padding = "0";
        e.style.margin = "0";
    });
})();

