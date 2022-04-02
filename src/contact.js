import {contentDiv, baseColor, darkBase, generalStylings, createFooter} from "./index.js";
import locationImgSrc from "./assets/images/location.jpg";
import chefImgSrc from "./assets/images/chef.jpg";

function content() {
    const contact = (() => {
        let container = document.createElement("div");
        container.style.minHeight = "calc(100vh - " + document.getElementById("nav").clientHeight + "px)";
        container.style.width = "100vw";
        container.style.background = "url(" + locationImgSrc + ")";
        container.style.backgroundSize = "cover";
        container.style.position = "relative";
        container.style.border = "1px solid white";
        contentDiv.append(container);

        let infoContainer = document.createElement("div");
        infoContainer.style.borderRadius = "10px";
        infoContainer.style.margin = "20px";
        infoContainer.style.backgroundColor = "white";

        let title = document.createElement("h2");
        title.style.backgroundColor = darkBase;
        title.style.color = "white";
        title.style.borderRadius = infoContainer.style.borderRadius;
        title.textContent = "Contact Us";
        title.classList.add("generalH2");

        let mainInfo = document.createElement("div");
        mainInfo.style.display = "grid";
        mainInfo.style.gridTemplateColumns = "repeat(auto-fill, max(300px, 50%))";
        mainInfo.style.rowGap = "20px";
        mainInfo.style.justifyContent = "center";
        mainInfo.style.padding = "10px";

        let chefContainer = document.createElement("div");
        chefContainer.style.display = "flex";
        chefContainer.style.flexDirection = "column";
        chefContainer.style.alignItems = "center";
        let chefImg = new Image();
        chefImg.src = chefImgSrc;
        let chefImgDimensions = "200px";
        chefImg.style.height = chefImgDimensions;
        chefImg.style.width = chefImgDimensions;
        chefImg.style.borderRadius = "50%";
        chefImg.style.border = "2px solid " + baseColor;
        let chefInfo = document.createElement("p");
        chefInfo.classList.add("generalP");
        chefInfo.textContent = "Please call. I've only been around my human for 16 hours today.";
        chefContainer.append(chefImg, chefInfo);

        let mediaContainer = document.createElement("div");
        let mediaUl = document.createElement("ul");
        mediaUl.classList.add("generalUl");
        let mediaObj = {
            "Phone Number": "(000) 000-0000",
            Email: "realdogemail@wherethemailman.com",
        };
        for (let prop in mediaObj) {
            let propLi = document.createElement("li");
            propLi.innerHTML = "<li style='font-size:1.6em; overflow-wrap:break-word; color:" + darkBase + "'><span style='font-size:1.2em; font-weight: bold; color: black;'>" + prop + ":</span><br> " + mediaObj[prop] + "</li>";
            mediaUl.append(propLi);
        }
        mediaContainer.append(mediaUl);

        let locationContainer = document.createElement("div");
        locationContainer.style.gridColumn = "1 / 3";
        locationContainer.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31398.72892951481!2d-79.9436955776586!3d40.43158626951546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8834f10c99a5df25%3A0xe2e2f5daa1e4081e!2sSquirrel%20Hill%2C%20Pittsburgh%2C%20PA!5e0!3m2!1sen!2sus!4v1648805709395!5m2!1sen!2sus" style="border:0; width: 100%; height: 300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
        
        window.addEventListener("resize", e => {resizeContainer()});
        let resizeContainer = () => {
            if(container.offsetWidth < 600){
                locationContainer.style.gridColumn = "1 / 2";
                mainInfo.style.gridTemplateColumns = "90%";
            }
            else {
                locationContainer.style.gridColumn = "1 / 3";
                mainInfo.style.gridTemplateColumns = "repeat(auto-fill, max(300px, 50%))";
            }
        }

        mainInfo.append(chefContainer, mediaContainer, locationContainer);
        infoContainer.append(title, mainInfo);
        container.append(infoContainer);

        resizeContainer();
        generalStylings();
        title.style.margin = "0";
    })();

    const footer = (() => {
        let attributions = ["<a href='https://www.freepik.com/photos/cutlery'>Cutlery photo created by master1305 - www.freepik.com</a>", "<a href='https://www.freepik.com/photos/home-decor'>Home decor photo created by vanitjan - www.freepik.com</a>"];
        createFooter(attributions);
    })();
}

export {content}