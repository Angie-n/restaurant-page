import {contentDiv, lightGray, navbar, createBlackScreen, generalStylings, createFooter} from "./index.js";

import homeImgSrc from "./assets/images/kibble.jpg";
import pawIconSrc from "./assets/icons/paws.png";
import ribbonIconSrc from "./assets/icons/ribbon.png";

const universalSelector = (() => {
    let all = document.querySelectorAll("*");
    all.forEach(e => {
        e.style.padding = "0";
        e.style.margin = "0";
    });
})();

function content() {
    const welcomeImg = (() => {
        let homeImgDiv = document.createElement("div");
        homeImgDiv.style.position = "relative";

        let homeImg = new Image();
        homeImg.src = homeImgSrc;
        homeImg.style.width = "100vw";
        homeImg.style.height = "calc(100vh - " + document.getElementById("nav").clientHeight + "px)";
        homeImg.style.objectFit = "cover";

        let homeImgText = createBlackScreen("calc(100vh - " + document.getElementById("nav").clientHeight + "px)", "100vw", "0.2");
        
        let imgTitle = document.createElement("h2");
        imgTitle.innerHTML = "<span style='font-family: Didot,Georgia; font-weight: 100;'>Super Taste Without Supervision</span>";

        let btnDiv = document.createElement("div");
        btnDiv.style.position = "relative";
        btnDiv.style.margin = "20px";

        let imgBtn = document.createElement("button");
        imgBtn.style.display = "flex";
        imgBtn.style.justifyContent = "center";
        imgBtn.style.alignItems = "center";
        imgBtn.style.height = "40px";
        imgBtn.style.width = "220px";
        imgBtn.style.borderColor = "white";
        imgBtn.style.fontFamily = "Didot, Georgia";
        imgBtn.style.backgroundColor = "white";
        imgBtn.style.borderRadius = "20px"
        imgBtn.style.fontWeight = "bold";

        let btnText = document.createElement("span");
        btnText.textContent = "VIEW MENU";
        btnText.style.fontSize = "1.5em";
        btnText.style.zIndex = 1;
        imgBtn.append(btnText);

        let boneCircle1 = document.createElement("div");
        boneCircle1.style.top = "-5px";
        boneCircle1.style.right = "-10px";
        let boneCircle2 = document.createElement("div");
        boneCircle2.style.bottom = "15px";
        boneCircle2.style.right = "-10px";
        let boneCircle3 = document.createElement("div");
        boneCircle3.style.bottom = "15px";
        boneCircle3.style.left = "-10px";
        let boneCircle4 = document.createElement("div");
        boneCircle4.style.top = "-5px";
        boneCircle4.style.left = "-10px";
        let boneCircles = [boneCircle1, boneCircle2, boneCircle3, boneCircle4];
        boneCircles.forEach(e => {
            e.style.backgroundColor = "white";
            e.style.position = "absolute";
            e.style.width = "40px";
            e.style.height = "40px";
            e.style.borderRadius = "50%";
            e.style.marginTop = "20px";
        });
        btnDiv.append(boneCircle1, boneCircle2, boneCircle3, boneCircle4);

        let ribbonIcon = new Image();
        ribbonIcon.src = ribbonIconSrc;
        ribbonIcon.style.display = "none";
        ribbonIcon.style.position = "absolute";
        ribbonIcon.style.zIndex = 0;
        ribbonIcon.style.width = "130px";
        ribbonIcon.style.top = "-30px";
        ribbonIcon.style.left = "45px";
        btnDiv.append(ribbonIcon);

        imgBtn.onmouseover = () => {
            imgBtn.style.backgroundColor = lightGray;
            ribbonIcon.style.display = "block";
            boneCircles.forEach(e => {e.style.backgroundColor = lightGray})
        }   
        imgBtn.onmouseout = () => {
            imgBtn.style.backgroundColor = "white";
            ribbonIcon.style.display = "none";
            boneCircles.forEach(e => {e.style.backgroundColor = "white"})
        }     
        imgBtn.onclick = () => {
            let menu = document.getElementById("navMenu");
            navbar.switchStyle(menu);
            navbar.switchContent(menu);
        }
        
        btnDiv.append(imgBtn);

        homeImgText.append(imgTitle, btnDiv);

        homeImgDiv.append(homeImg, homeImgText);
        contentDiv.append(homeImgDiv);
    })();

    const about = (() => {
        let container = document.createElement("div");
        container.style.backgroundColor = "white";
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(auto-fill, max(300px, 50%))"
        container.style.justifyContent = "center";
        container.style.height = "inherit";
        contentDiv.append(container);

        let hoursDiv = document.createElement("div");
        let hoursHeader = document.createElement("h2");
        hoursHeader.textContent = "Hours";
        let hoursInfo = document.createElement("p");
        hoursInfo.innerHTML = '<b>Monday to Friday</b>:</span> 6AM - 10PM<br><b>Saturday to Sunday</b>: 10AM - 12PM<br><br><i>*Note: Opening hours may be postponed due to unexpected encounters with squirrels during the chef\'s morning walks; Visitors are encouraged to join chef in having a vigorous discussion during such occurrences.</i>';
        hoursDiv.append(hoursHeader, hoursInfo);


        let locationDiv = document.createElement("div");
        let locationHeader = document.createElement("h2");
        locationHeader.textContent = "Location";
        let locationInfo = document.createElement("p");
        locationInfo.innerHTML = "123 Owner's Home Avenue, 123456 cityWithParks<br> ";
        locationDiv.append(locationHeader, locationInfo);

        container.append(hoursDiv, locationDiv);

        let columns = container.querySelectorAll("div");
        columns.forEach(e => {
            e.style.position = "relative";
            let pawIcon = new Image();
            pawIcon.src = pawIconSrc;
            pawIcon.style.top = "0";
            pawIcon.style.left = "0";
            pawIcon.style.width = "min(100%, 300px)";
            pawIcon.style.height = "250px";
            pawIcon.style.position = "absolute";
            pawIcon.style.zIndex = "0";
            e.append(pawIcon);
            setTimeout(() => {e.style.height = String(Math.max(e.offsetHeight, pawIcon.offsetHeight) + "px");}, 50);
        });

        let h2 = document.querySelectorAll("h2");
        h2.forEach(e => {
            e.classList.add("generalH2");
            e.style.position = "relative";
            e.style.zIndex = "1";
        });

        let p = document.querySelectorAll("p");
        p.forEach(e => {
            e.classList.add("generalP");
            e.style.position = "relative";
            e.style.zIndex = "1";
        });
        generalStylings();
    })();

    const footer = (() => {
        let attributions = ["<a href='https://www.freepik.com/photos/pet-accessories'>Pet accessories photo created by freepik - www.freepik.com</a>", '<a href="https://www.flaticon.com/free-icons/paw" title="paw icons">Paw icons created by Creatype - Flaticon</a>', '<a href="https://www.flaticon.com/free-icons/ribbon" title="ribbon icons">Ribbon icons created by Freepik - Flaticon</a>'];
        createFooter(attributions);
    })();
}

export {content}