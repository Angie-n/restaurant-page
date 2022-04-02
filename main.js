/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_images_location_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/location.jpg */ "./src/assets/images/location.jpg");
/* harmony import */ var _assets_images_chef_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/chef.jpg */ "./src/assets/images/chef.jpg");




function content() {
    const contact = (() => {
        let container = document.createElement("div");
        container.style.minHeight = "calc(100vh - " + document.getElementById("nav").clientHeight + "px)";
        container.style.width = "100vw";
        container.style.background = "url(" + _assets_images_location_jpg__WEBPACK_IMPORTED_MODULE_1__ + ")";
        container.style.backgroundSize = "cover";
        container.style.position = "relative";
        container.style.border = "1px solid white";
        _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.append(container);

        let infoContainer = document.createElement("div");
        infoContainer.style.borderRadius = "10px";
        infoContainer.style.margin = "20px";
        infoContainer.style.backgroundColor = "white";

        let title = document.createElement("h2");
        title.style.backgroundColor = _index_js__WEBPACK_IMPORTED_MODULE_0__.darkBase;
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
        chefImg.src = _assets_images_chef_jpg__WEBPACK_IMPORTED_MODULE_2__;
        let chefImgDimensions = "200px";
        chefImg.style.height = chefImgDimensions;
        chefImg.style.width = chefImgDimensions;
        chefImg.style.borderRadius = "50%";
        chefImg.style.border = "2px solid " + _index_js__WEBPACK_IMPORTED_MODULE_0__.baseColor;
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
            propLi.innerHTML = "<li style='font-size:1.6em; overflow-wrap:break-word; color:" + _index_js__WEBPACK_IMPORTED_MODULE_0__.darkBase + "'><span style='font-size:1.2em; font-weight: bold; color: black;'>" + prop + ":</span><br> " + mediaObj[prop] + "</li>";
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
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.generalStylings)();
        title.style.margin = "0";
    })();

    const footer = (() => {
        let attributions = ["<a href='https://www.freepik.com/photos/cutlery'>Cutlery photo created by master1305 - www.freepik.com</a>", "<a href='https://www.freepik.com/photos/home-decor'>Home decor photo created by vanitjan - www.freepik.com</a>"];
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)(attributions);
    })();
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_images_kibble_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/kibble.jpg */ "./src/assets/images/kibble.jpg");
/* harmony import */ var _assets_icons_paws_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/icons/paws.png */ "./src/assets/icons/paws.png");
/* harmony import */ var _assets_icons_ribbon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/ribbon.png */ "./src/assets/icons/ribbon.png");






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
        homeImg.src = _assets_images_kibble_jpg__WEBPACK_IMPORTED_MODULE_1__;
        homeImg.style.width = "100vw";
        homeImg.style.height = "calc(100vh - " + document.getElementById("nav").clientHeight + "px)";
        homeImg.style.objectFit = "cover";

        let homeImgText = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createBlackScreen)("calc(100vh - " + document.getElementById("nav").clientHeight + "px)", "100vw", "0.2");
        
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
        ribbonIcon.src = _assets_icons_ribbon_png__WEBPACK_IMPORTED_MODULE_3__;
        ribbonIcon.style.display = "none";
        ribbonIcon.style.position = "absolute";
        ribbonIcon.style.zIndex = 0;
        ribbonIcon.style.width = "130px";
        ribbonIcon.style.top = "-30px";
        ribbonIcon.style.left = "45px";
        btnDiv.append(ribbonIcon);

        imgBtn.onmouseover = () => {
            imgBtn.style.backgroundColor = _index_js__WEBPACK_IMPORTED_MODULE_0__.lightGray;
            ribbonIcon.style.display = "block";
            boneCircles.forEach(e => {e.style.backgroundColor = _index_js__WEBPACK_IMPORTED_MODULE_0__.lightGray})
        }   
        imgBtn.onmouseout = () => {
            imgBtn.style.backgroundColor = "white";
            ribbonIcon.style.display = "none";
            boneCircles.forEach(e => {e.style.backgroundColor = "white"})
        }     
        imgBtn.onclick = () => {
            let menu = document.getElementById("navMenu");
            _index_js__WEBPACK_IMPORTED_MODULE_0__.navbar.switchStyle(menu);
            _index_js__WEBPACK_IMPORTED_MODULE_0__.navbar.switchContent(menu);
        }
        
        btnDiv.append(imgBtn);

        homeImgText.append(imgTitle, btnDiv);

        homeImgDiv.append(homeImg, homeImgText);
        _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.append(homeImgDiv);
    })();

    const about = (() => {
        let container = document.createElement("div");
        container.style.backgroundColor = "white";
        container.style.display = "grid";
        container.style.gridTemplateColumns = "repeat(auto-fill, max(300px, 50%))"
        container.style.justifyContent = "center";
        container.style.height = "inherit";
        _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.append(container);

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
            pawIcon.src = _assets_icons_paws_png__WEBPACK_IMPORTED_MODULE_2__;
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
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.generalStylings)();
    })();

    const footer = (() => {
        let attributions = ["<a href='https://www.freepik.com/photos/pet-accessories'>Pet accessories photo created by freepik - www.freepik.com</a>", '<a href="https://www.flaticon.com/free-icons/paw" title="paw icons">Paw icons created by Creatype - Flaticon</a>', '<a href="https://www.flaticon.com/free-icons/ribbon" title="ribbon icons">Ribbon icons created by Freepik - Flaticon</a>'];
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)(attributions);
    })();
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "baseColor": () => (/* binding */ baseColor),
/* harmony export */   "contentDiv": () => (/* binding */ contentDiv),
/* harmony export */   "createBlackScreen": () => (/* binding */ createBlackScreen),
/* harmony export */   "createFooter": () => (/* binding */ createFooter),
/* harmony export */   "darkBase": () => (/* binding */ darkBase),
/* harmony export */   "generalStylings": () => (/* binding */ generalStylings),
/* harmony export */   "lightGray": () => (/* binding */ lightGray),
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _assets_icons_brand_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/icons/brand.png */ "./src/assets/icons/brand.png");





let body = document.getElementsByTagName("BODY")[0];
let contentDiv = document.getElementById("content");
let baseColor = "rgb(164, 226, 245)";
let lightGray = "rgb(220, 221, 222)";
let darkBase = "rgb(77, 169, 201)";

const bodyStyle = (() => {
    body.style.backgroundColor = baseColor;
    body.style.fontFamily = "Didot, Georgia";
    body.style.fontSize = "10px";
    body.style.minHeight = "100vh";
})();

const navbar = (() => {
    let container = document.createElement("div");
    container.id = "nav";
    container.style.backgroundColor = "white";
    container.style.width = "100vw";
    body.insertBefore(container, contentDiv);
    
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
    homeIcon.src = _assets_icons_brand_png__WEBPACK_IMPORTED_MODULE_3__;
    homeIcon.style.height = "80%";
    homeIcon.style.padding = "10px";
    nameDiv.append(homeIcon, nameTitle);
    
    let linksul = document.createElement("ul");
    linksul.classList.add("generalUl");
    linksul.style.display = "flex";
    linksul.style.justifyContent = "space-around";
    linksul.style.fontSize = "min(2em, 5vw)";
    linksul.style.borderTop = "2px dotted " + lightGray;
    let home = document.createElement("li");
    home.innerText = "Home";
    let menu = document.createElement("li");
    menu.innerText = "Menu";
    menu.id = "navMenu";
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
        links.forEach(e => {
            if(e.classList.contains("open"))styleUnopen(e);
        });
        styleOpen(e);
    }

    function switchContent(e) {
        contentDiv.innerHTML = "";
        if(e == home) _home_js__WEBPACK_IMPORTED_MODULE_0__.content();
        else if (e == contact) _contact_js__WEBPACK_IMPORTED_MODULE_2__.content();
        else _menu_js__WEBPACK_IMPORTED_MODULE_1__.content();
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
                switchStyle(e);
                switchContent(e);
            }
        }
    });
    container.append(nameDiv, linksul);
    return {switchStyle, switchContent}
})();

//container it is appended to should be position relative.
const createBlackScreen = (heightSize, widthSize, opacity) => {
    let blackScreen = document.createElement("div");
    blackScreen.style.height = heightSize;
    blackScreen.style.width = widthSize;
    blackScreen.style.backgroundColor = "rgba(0,0,0," + opacity + ")";
    blackScreen.style.display = "flex";
    blackScreen.style.flexDirection = "column";
    blackScreen.style.justifyContent = "center";
    blackScreen.style.alignItems = "center";
    blackScreen.style.position = "absolute";
    blackScreen.style.top = "0";
    blackScreen.style.left = "0";
    blackScreen.style.color = "white";
    return blackScreen;
}

const createFooter = (attributions) => {
    let div = document.createElement("div");
    div.style.minHeight = "100px";
    div.style.width = "100vw";
    div.style.backgroundColor = "rgb(50, 50, 50)";
    div.style.color = "white";
    div.style.textAlign = "center";
    div.innerHTML = "<h2 style='margin:0; padding-top: 5px;'>Attributions</h2>" + '<a href="https://www.flaticon.com/free-icons/dog" title="dog icons">Dog icons created by Freepik - Flaticon</a>';
    attributions.forEach((attr) => {
        div.innerHTML += "<br>" + attr;
    });
    let links = div.getElementsByTagName("a");
    Array.prototype.forEach.call(links, e => {
        e.style.color = "white";
    });
    contentDiv.append(div);
}

const generalStylings = () => {
    let generalH2 = document.getElementsByClassName("generalH2");
    Array.prototype.forEach.call(generalH2, e => {
        e.style.fontFamily = "cursive";
        e.style.fontSize = "3.8em";
        e.style.textAlign = "center";
        e.style.margin = "10px";
    });

    let generalP = document.getElementsByClassName("generalP");
    Array.prototype.forEach.call(generalP, e => {
        e.style.fontSize = "1.6em";
        e.style.textAlign = "center";
    });

    let generalUl = document.getElementsByClassName("generalUl");
    Array.prototype.forEach.call(generalUl, e => {
        e.style.listStyle = "none";
        e.style.padding = "0";
        e.style.margin = "0";
    });
};

_home_js__WEBPACK_IMPORTED_MODULE_0__.content();



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");
/* harmony import */ var _assets_images_kibble_with_paws_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/kibble-with-paws.jpg */ "./src/assets/images/kibble-with-paws.jpg");
/* harmony import */ var _assets_images_grass_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/grass.jpg */ "./src/assets/images/grass.jpg");
/* harmony import */ var _assets_images_meat_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/meat.jpg */ "./src/assets/images/meat.jpg");
/* harmony import */ var _assets_images_shoes_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/shoes.jpg */ "./src/assets/images/shoes.jpg");
/* harmony import */ var _assets_images_squirrel_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/squirrel.jpg */ "./src/assets/images/squirrel.jpg");
/* harmony import */ var _assets_images_stuffed_animal_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/stuffed-animal.jpg */ "./src/assets/images/stuffed-animal.jpg");








function content() {
    const menu = (() => {
        let container = document.createElement("div");
        container.style.display = "grid";
        container.style.justifyContent = "center";
        _index_js__WEBPACK_IMPORTED_MODULE_0__.contentDiv.append(container);

        function resizeContainer() {
            if(container.offsetWidth <= 640) {
                container.style.gridTemplateColumns = "90%";
            }
            else container.style.gridTemplateColumns = "repeat(auto-fill, clamp(320px, 50%, 600px))";
        };

        resizeContainer();
        window.addEventListener("resize", e => {resizeContainer()});

        const menuItem = (name, image, description) => {

            const styleSection = (s, m) => {
                s.style.position = "relative";
                s.style.height = "350px";
                s.style.color = "white";
                s.style.background = "url(" + image + ")";
                s.style.backgroundSize = "cover";
                s.style.display = "flex";
                s.style.flexDirection = "column";
                s.style.alignItems = "center";
                s.style.justifyContent = "space-between";
                s.style.margin = "15px";
                s.style.boxShadow = "2px 2px 5px black";
                s.style.borderRadius = "20px";

                const enterAnimation = (entries) => {
                    entries.forEach(entry => {
                        if(entry.isIntersecting) {
                            let start = Date.now();
                        let timer = setInterval(() => {
                        let timePassed = Date.now() - start;
                        if(timePassed >= 1000) {
                            clearInterval(timer);
                            return;
                        }
                        showDescription(timePassed);
                        })

                        function showDescription(timePassed) {
                            m.style.height = timePassed/25 + 20 + "px";
                            m.style.color = "rgba(256, 256, 256, " + 0.001*timePassed + ")";
                        } 
                        m.style.padding = "5px";
                        observer.unobserve(s);
                        }
                    });
                }

                let options = {
                    root: null,
                    rootMargin: '0px',
                    threshold: 0.9
                }

                let observer = new IntersectionObserver(enterAnimation, options);
                observer.observe(s);

                s.onmouseenter = () => {
                    s.style.boxShadow = "10px 10px 15px black";
                }

                s.onmouseleave = () => {
                    s.style.boxShadow = "2px 2px 5px black";
                }
            }

            const styleName = (n) => {
                n.style.fontFamily = "cursive";
                n.style.fontSize = "3em";
                n.style.height = "50px";
                n.style.borderBottomLeftRadius = "0";
                n.style.borderBottomRightRadius = "0";
            } 

            const styleDescription = (d) => {
                d.style.color = "rgba(0,0,0,0)";
                d.style.height = "0";
                d.style.fontSize = "min(1.6em, 4.2vw)";
                d.style.padding = "0px";
                d.style.borderTopLeftRadius = "0";
                d.style.borderTopRightRadius = "0";
            }

            const styleText = (n, d) => {
                let background = "rgba(0, 0, 0, 0.5)";
                let margin = "0";
                let padding = "5px";
                let width = "calc(100% - " + padding + " - 5px)";
                let textAlign = "center";
                let borderRadius = "20px";

                let element = n;
                for (let i = 0; i < 2; i++) {
                    if(i == 1) element = d;
                    element.style.background = background;
                    element.style.margin = margin;
                    element.style.padding = padding;
                    element.style.width = width;
                    element.style.textAlign = textAlign;
                    element.style.borderRadius = borderRadius;
                }
                styleName(n);
                styleDescription(d);
            }

            const addToDOM = () => {
                let section = document.createElement("div");
                let menuName = document.createElement("h3");
                menuName.textContent = name;
                let menuDescription = document.createElement("p");
                menuDescription.textContent = description;
                styleText(menuName, menuDescription);
                styleSection(section, menuDescription);
                section.append(menuName,menuDescription);
                container.append(section);
            }
            return {addToDOM};
        };

        const item1 =  menuItem("Owner's Meal", _assets_images_meat_jpg__WEBPACK_IMPORTED_MODULE_3__, "The greatest of bounties; get ready your puppy dog eyes and begging voice for a taste of the most delicious meals.");
        const item2 =  menuItem("Grass", _assets_images_grass_jpg__WEBPACK_IMPORTED_MODULE_2__, "Filled with the enticing aroma of dirt, bugs, rain and the occasional presents of other dogs.");
        const item3 =  menuItem("Bobby", _assets_images_stuffed_animal_jpg__WEBPACK_IMPORTED_MODULE_6__, "Gain confidence in your hunting abilities by trying to eat Bobby.");
        const item4 =  menuItem("Shoes", _assets_images_shoes_jpg__WEBPACK_IMPORTED_MODULE_4__, "The forbidden meal; a great way to practice stealth and get rid of any tooth itches.");
        const item5 =  menuItem("Squirrel", _assets_images_squirrel_jpg__WEBPACK_IMPORTED_MODULE_5__, "A rare treat; our establishment currently has caught an average of zero squirrels per year.");
        const item6 =  menuItem("Kibble", _assets_images_kibble_with_paws_jpg__WEBPACK_IMPORTED_MODULE_1__, "Strange crunchy stuff; we find more value in other meals. Unless someone wants some, then its all ours.");

        let menuArr = [item1, item2, item3, item4, item5, item6];
        menuArr.forEach(e => {
            e.addToDOM();
        });
    })();

    const footer = (() => {
        let attributions = [];
        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createFooter)(attributions);
    })();
}



/***/ }),

/***/ "./src/assets/icons/brand.png":
/*!************************************!*\
  !*** ./src/assets/icons/brand.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "65f7e8d5b329d59e71e4.png";

/***/ }),

/***/ "./src/assets/icons/paws.png":
/*!***********************************!*\
  !*** ./src/assets/icons/paws.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "db804709d774de1742bb.png";

/***/ }),

/***/ "./src/assets/icons/ribbon.png":
/*!*************************************!*\
  !*** ./src/assets/icons/ribbon.png ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5e72854fd20d4ffdefb.png";

/***/ }),

/***/ "./src/assets/images/chef.jpg":
/*!************************************!*\
  !*** ./src/assets/images/chef.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "479d6ce7422588ae2570.jpg";

/***/ }),

/***/ "./src/assets/images/grass.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/grass.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c3e13b2293601ccff3a5.jpg";

/***/ }),

/***/ "./src/assets/images/kibble-with-paws.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/kibble-with-paws.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b5050dd5bdb780b3dad8.jpg";

/***/ }),

/***/ "./src/assets/images/kibble.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/kibble.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc9e7c02617f4e98dcdb.jpg";

/***/ }),

/***/ "./src/assets/images/location.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/location.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "09cc918e6704ae64581e.jpg";

/***/ }),

/***/ "./src/assets/images/meat.jpg":
/*!************************************!*\
  !*** ./src/assets/images/meat.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c8bcbf7fc5b0b019f2c.jpg";

/***/ }),

/***/ "./src/assets/images/shoes.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/shoes.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f89d15afe4e36eb06e73.jpg";

/***/ }),

/***/ "./src/assets/images/squirrel.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/squirrel.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d55929c5c88ff4ba4ff4.jpg";

/***/ }),

/***/ "./src/assets/images/stuffed-animal.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/stuffed-animal.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "26e55c5f57eac028b453.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN4SkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvbnRlbnREaXYsIGJhc2VDb2xvciwgZGFya0Jhc2UsIGdlbmVyYWxTdHlsaW5ncywgY3JlYXRlRm9vdGVyfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2F0aW9uSW1nU3JjIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbG9jYXRpb24uanBnXCI7XG5pbXBvcnQgY2hlZkltZ1NyYyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2NoZWYuanBnXCI7XG5cbmZ1bmN0aW9uIGNvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGFjdCA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUubWluSGVpZ2h0ID0gXCJjYWxjKDEwMHZoIC0gXCIgKyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdlwiKS5jbGllbnRIZWlnaHQgKyBcInB4KVwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gXCJ1cmwoXCIgKyBsb2NhdGlvbkltZ1NyYyArIFwiKVwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvdmVyXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIHdoaXRlXCI7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKGNvbnRhaW5lcik7XG5cbiAgICAgICAgbGV0IGluZm9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbmZvQ29udGFpbmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgICAgICBpbmZvQ29udGFpbmVyLnN0eWxlLm1hcmdpbiA9IFwiMjBweFwiO1xuICAgICAgICBpbmZvQ29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcblxuICAgICAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGRhcmtCYXNlO1xuICAgICAgICB0aXRsZS5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgdGl0bGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gaW5mb0NvbnRhaW5lci5zdHlsZS5ib3JkZXJSYWRpdXM7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJDb250YWN0IFVzXCI7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoXCJnZW5lcmFsSDJcIik7XG5cbiAgICAgICAgbGV0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkluZm8uc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBtYWluSW5mby5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCJyZXBlYXQoYXV0by1maWxsLCBtYXgoMzAwcHgsIDUwJSkpXCI7XG4gICAgICAgIG1haW5JbmZvLnN0eWxlLnJvd0dhcCA9IFwiMjBweFwiO1xuICAgICAgICBtYWluSW5mby5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gICAgICAgIG1haW5JbmZvLnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcblxuICAgICAgICBsZXQgY2hlZkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoZWZDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBjaGVmQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICBjaGVmQ29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICBsZXQgY2hlZkltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBjaGVmSW1nLnNyYyA9IGNoZWZJbWdTcmM7XG4gICAgICAgIGxldCBjaGVmSW1nRGltZW5zaW9ucyA9IFwiMjAwcHhcIjtcbiAgICAgICAgY2hlZkltZy5zdHlsZS5oZWlnaHQgPSBjaGVmSW1nRGltZW5zaW9ucztcbiAgICAgICAgY2hlZkltZy5zdHlsZS53aWR0aCA9IGNoZWZJbWdEaW1lbnNpb25zO1xuICAgICAgICBjaGVmSW1nLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiNTAlXCI7XG4gICAgICAgIGNoZWZJbWcuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgXCIgKyBiYXNlQ29sb3I7XG4gICAgICAgIGxldCBjaGVmSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBjaGVmSW5mby5jbGFzc0xpc3QuYWRkKFwiZ2VuZXJhbFBcIik7XG4gICAgICAgIGNoZWZJbmZvLnRleHRDb250ZW50ID0gXCJQbGVhc2UgY2FsbC4gSSd2ZSBvbmx5IGJlZW4gYXJvdW5kIG15IGh1bWFuIGZvciAxNiBob3VycyB0b2RheS5cIjtcbiAgICAgICAgY2hlZkNvbnRhaW5lci5hcHBlbmQoY2hlZkltZywgY2hlZkluZm8pO1xuXG4gICAgICAgIGxldCBtZWRpYUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBtZWRpYVVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBtZWRpYVVsLmNsYXNzTGlzdC5hZGQoXCJnZW5lcmFsVWxcIik7XG4gICAgICAgIGxldCBtZWRpYU9iaiA9IHtcbiAgICAgICAgICAgIFwiUGhvbmUgTnVtYmVyXCI6IFwiKDAwMCkgMDAwLTAwMDBcIixcbiAgICAgICAgICAgIEVtYWlsOiBcInJlYWxkb2dlbWFpbEB3aGVyZXRoZW1haWxtYW4uY29tXCIsXG4gICAgICAgIH07XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gbWVkaWFPYmopIHtcbiAgICAgICAgICAgIGxldCBwcm9wTGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBwcm9wTGkuaW5uZXJIVE1MID0gXCI8bGkgc3R5bGU9J2ZvbnQtc2l6ZToxLjZlbTsgb3ZlcmZsb3ctd3JhcDpicmVhay13b3JkOyBjb2xvcjpcIiArIGRhcmtCYXNlICsgXCInPjxzcGFuIHN0eWxlPSdmb250LXNpemU6MS4yZW07IGZvbnQtd2VpZ2h0OiBib2xkOyBjb2xvcjogYmxhY2s7Jz5cIiArIHByb3AgKyBcIjo8L3NwYW4+PGJyPiBcIiArIG1lZGlhT2JqW3Byb3BdICsgXCI8L2xpPlwiO1xuICAgICAgICAgICAgbWVkaWFVbC5hcHBlbmQocHJvcExpKTtcbiAgICAgICAgfVxuICAgICAgICBtZWRpYUNvbnRhaW5lci5hcHBlbmQobWVkaWFVbCk7XG5cbiAgICAgICAgbGV0IGxvY2F0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbG9jYXRpb25Db250YWluZXIuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDNcIjtcbiAgICAgICAgbG9jYXRpb25Db250YWluZXIuaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzEzOTguNzI4OTI5NTE0ODEhMmQtNzkuOTQzNjk1NTc3NjU4NiEzZDQwLjQzMTU4NjI2OTUxNTQ2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODM0ZjEwYzk5YTVkZjI1JTNBMHhlMmUyZjVkYWExZTQwODFlITJzU3F1aXJyZWwlMjBIaWxsJTJDJTIwUGl0dHNidXJnaCUyQyUyMFBBITVlMCEzbTIhMXNlbiEyc3VzITR2MTY0ODgwNTcwOTM5NSE1bTIhMXNlbiEyc3VzXCIgc3R5bGU9XCJib3JkZXI6MDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMzAwcHhcIiBhbGxvd2Z1bGxzY3JlZW49XCJcIiBsb2FkaW5nPVwibGF6eVwiIHJlZmVycmVycG9saWN5PVwibm8tcmVmZXJyZXItd2hlbi1kb3duZ3JhZGVcIj48L2lmcmFtZT4nO1xuICAgICAgICBcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZSA9PiB7cmVzaXplQ29udGFpbmVyKCl9KTtcbiAgICAgICAgbGV0IHJlc2l6ZUNvbnRhaW5lciA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmKGNvbnRhaW5lci5vZmZzZXRXaWR0aCA8IDYwMCl7XG4gICAgICAgICAgICAgICAgbG9jYXRpb25Db250YWluZXIuc3R5bGUuZ3JpZENvbHVtbiA9IFwiMSAvIDJcIjtcbiAgICAgICAgICAgICAgICBtYWluSW5mby5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gXCI5MCVcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvY2F0aW9uQ29udGFpbmVyLnN0eWxlLmdyaWRDb2x1bW4gPSBcIjEgLyAzXCI7XG4gICAgICAgICAgICAgICAgbWFpbkluZm8uc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KGF1dG8tZmlsbCwgbWF4KDMwMHB4LCA1MCUpKVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWFpbkluZm8uYXBwZW5kKGNoZWZDb250YWluZXIsIG1lZGlhQ29udGFpbmVyLCBsb2NhdGlvbkNvbnRhaW5lcik7XG4gICAgICAgIGluZm9Db250YWluZXIuYXBwZW5kKHRpdGxlLCBtYWluSW5mbyk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQoaW5mb0NvbnRhaW5lcik7XG5cbiAgICAgICAgcmVzaXplQ29udGFpbmVyKCk7XG4gICAgICAgIGdlbmVyYWxTdHlsaW5ncygpO1xuICAgICAgICB0aXRsZS5zdHlsZS5tYXJnaW4gPSBcIjBcIjtcbiAgICB9KSgpO1xuXG4gICAgY29uc3QgZm9vdGVyID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGF0dHJpYnV0aW9ucyA9IFtcIjxhIGhyZWY9J2h0dHBzOi8vd3d3LmZyZWVwaWsuY29tL3Bob3Rvcy9jdXRsZXJ5Jz5DdXRsZXJ5IHBob3RvIGNyZWF0ZWQgYnkgbWFzdGVyMTMwNSAtIHd3dy5mcmVlcGlrLmNvbTwvYT5cIiwgXCI8YSBocmVmPSdodHRwczovL3d3dy5mcmVlcGlrLmNvbS9waG90b3MvaG9tZS1kZWNvcic+SG9tZSBkZWNvciBwaG90byBjcmVhdGVkIGJ5IHZhbml0amFuIC0gd3d3LmZyZWVwaWsuY29tPC9hPlwiXTtcbiAgICAgICAgY3JlYXRlRm9vdGVyKGF0dHJpYnV0aW9ucyk7XG4gICAgfSkoKTtcbn1cblxuZXhwb3J0IHtjb250ZW50fSIsImltcG9ydCB7Y29udGVudERpdiwgbGlnaHRHcmF5LCBuYXZiYXIsIGNyZWF0ZUJsYWNrU2NyZWVuLCBnZW5lcmFsU3R5bGluZ3MsIGNyZWF0ZUZvb3Rlcn0gZnJvbSBcIi4vaW5kZXguanNcIjtcblxuaW1wb3J0IGhvbWVJbWdTcmMgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9raWJibGUuanBnXCI7XG5pbXBvcnQgcGF3SWNvblNyYyBmcm9tIFwiLi9hc3NldHMvaWNvbnMvcGF3cy5wbmdcIjtcbmltcG9ydCByaWJib25JY29uU3JjIGZyb20gXCIuL2Fzc2V0cy9pY29ucy9yaWJib24ucG5nXCI7XG5cbmNvbnN0IHVuaXZlcnNhbFNlbGVjdG9yID0gKCgpID0+IHtcbiAgICBsZXQgYWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIipcIik7XG4gICAgYWxsLmZvckVhY2goZSA9PiB7XG4gICAgICAgIGUuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuICAgICAgICBlLnN0eWxlLm1hcmdpbiA9IFwiMFwiO1xuICAgIH0pO1xufSkoKTtcblxuZnVuY3Rpb24gY29udGVudCgpIHtcbiAgICBjb25zdCB3ZWxjb21lSW1nID0gKCgpID0+IHtcbiAgICAgICAgbGV0IGhvbWVJbWdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBob21lSW1nRGl2LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgICAgIGxldCBob21lSW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGhvbWVJbWcuc3JjID0gaG9tZUltZ1NyYztcbiAgICAgICAgaG9tZUltZy5zdHlsZS53aWR0aCA9IFwiMTAwdndcIjtcbiAgICAgICAgaG9tZUltZy5zdHlsZS5oZWlnaHQgPSBcImNhbGMoMTAwdmggLSBcIiArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmF2XCIpLmNsaWVudEhlaWdodCArIFwicHgpXCI7XG4gICAgICAgIGhvbWVJbWcuc3R5bGUub2JqZWN0Rml0ID0gXCJjb3ZlclwiO1xuXG4gICAgICAgIGxldCBob21lSW1nVGV4dCA9IGNyZWF0ZUJsYWNrU2NyZWVuKFwiY2FsYygxMDB2aCAtIFwiICsgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuYXZcIikuY2xpZW50SGVpZ2h0ICsgXCJweClcIiwgXCIxMDB2d1wiLCBcIjAuMlwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbWdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaW1nVGl0bGUuaW5uZXJIVE1MID0gXCI8c3BhbiBzdHlsZT0nZm9udC1mYW1pbHk6IERpZG90LEdlb3JnaWE7IGZvbnQtd2VpZ2h0OiAxMDA7Jz5TdXBlciBUYXN0ZSBXaXRob3V0IFN1cGVydmlzaW9uPC9zcGFuPlwiO1xuXG4gICAgICAgIGxldCBidG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidG5EaXYuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgIGJ0bkRpdi5zdHlsZS5tYXJnaW4gPSBcIjIwcHhcIjtcblxuICAgICAgICBsZXQgaW1nQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgaW1nQnRuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgaW1nQnRuLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgaW1nQnRuLnN0eWxlLmFsaWduSXRlbXMgPSBcImNlbnRlclwiO1xuICAgICAgICBpbWdCdG4uc3R5bGUuaGVpZ2h0ID0gXCI0MHB4XCI7XG4gICAgICAgIGltZ0J0bi5zdHlsZS53aWR0aCA9IFwiMjIwcHhcIjtcbiAgICAgICAgaW1nQnRuLnN0eWxlLmJvcmRlckNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBpbWdCdG4uc3R5bGUuZm9udEZhbWlseSA9IFwiRGlkb3QsIEdlb3JnaWFcIjtcbiAgICAgICAgaW1nQnRuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgaW1nQnRuLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMjBweFwiXG4gICAgICAgIGltZ0J0bi5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG5cbiAgICAgICAgbGV0IGJ0blRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgYnRuVGV4dC50ZXh0Q29udGVudCA9IFwiVklFVyBNRU5VXCI7XG4gICAgICAgIGJ0blRleHQuc3R5bGUuZm9udFNpemUgPSBcIjEuNWVtXCI7XG4gICAgICAgIGJ0blRleHQuc3R5bGUuekluZGV4ID0gMTtcbiAgICAgICAgaW1nQnRuLmFwcGVuZChidG5UZXh0KTtcblxuICAgICAgICBsZXQgYm9uZUNpcmNsZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib25lQ2lyY2xlMS5zdHlsZS50b3AgPSBcIi01cHhcIjtcbiAgICAgICAgYm9uZUNpcmNsZTEuc3R5bGUucmlnaHQgPSBcIi0xMHB4XCI7XG4gICAgICAgIGxldCBib25lQ2lyY2xlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJvbmVDaXJjbGUyLnN0eWxlLmJvdHRvbSA9IFwiMTVweFwiO1xuICAgICAgICBib25lQ2lyY2xlMi5zdHlsZS5yaWdodCA9IFwiLTEwcHhcIjtcbiAgICAgICAgbGV0IGJvbmVDaXJjbGUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm9uZUNpcmNsZTMuc3R5bGUuYm90dG9tID0gXCIxNXB4XCI7XG4gICAgICAgIGJvbmVDaXJjbGUzLnN0eWxlLmxlZnQgPSBcIi0xMHB4XCI7XG4gICAgICAgIGxldCBib25lQ2lyY2xlNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJvbmVDaXJjbGU0LnN0eWxlLnRvcCA9IFwiLTVweFwiO1xuICAgICAgICBib25lQ2lyY2xlNC5zdHlsZS5sZWZ0ID0gXCItMTBweFwiO1xuICAgICAgICBsZXQgYm9uZUNpcmNsZXMgPSBbYm9uZUNpcmNsZTEsIGJvbmVDaXJjbGUyLCBib25lQ2lyY2xlMywgYm9uZUNpcmNsZTRdO1xuICAgICAgICBib25lQ2lyY2xlcy5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIndoaXRlXCI7XG4gICAgICAgICAgICBlLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgZS5zdHlsZS53aWR0aCA9IFwiNDBweFwiO1xuICAgICAgICAgICAgZS5zdHlsZS5oZWlnaHQgPSBcIjQwcHhcIjtcbiAgICAgICAgICAgIGUuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcbiAgICAgICAgICAgIGUuc3R5bGUubWFyZ2luVG9wID0gXCIyMHB4XCI7XG4gICAgICAgIH0pO1xuICAgICAgICBidG5EaXYuYXBwZW5kKGJvbmVDaXJjbGUxLCBib25lQ2lyY2xlMiwgYm9uZUNpcmNsZTMsIGJvbmVDaXJjbGU0KTtcblxuICAgICAgICBsZXQgcmliYm9uSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICByaWJib25JY29uLnNyYyA9IHJpYmJvbkljb25TcmM7XG4gICAgICAgIHJpYmJvbkljb24uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICByaWJib25JY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICByaWJib25JY29uLnN0eWxlLnpJbmRleCA9IDA7XG4gICAgICAgIHJpYmJvbkljb24uc3R5bGUud2lkdGggPSBcIjEzMHB4XCI7XG4gICAgICAgIHJpYmJvbkljb24uc3R5bGUudG9wID0gXCItMzBweFwiO1xuICAgICAgICByaWJib25JY29uLnN0eWxlLmxlZnQgPSBcIjQ1cHhcIjtcbiAgICAgICAgYnRuRGl2LmFwcGVuZChyaWJib25JY29uKTtcblxuICAgICAgICBpbWdCdG4ub25tb3VzZW92ZXIgPSAoKSA9PiB7XG4gICAgICAgICAgICBpbWdCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbGlnaHRHcmF5O1xuICAgICAgICAgICAgcmliYm9uSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgYm9uZUNpcmNsZXMuZm9yRWFjaChlID0+IHtlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGxpZ2h0R3JheX0pXG4gICAgICAgIH0gICBcbiAgICAgICAgaW1nQnRuLm9ubW91c2VvdXQgPSAoKSA9PiB7XG4gICAgICAgICAgICBpbWdCdG4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICAgICAgcmliYm9uSWNvbi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgICAgICBib25lQ2lyY2xlcy5mb3JFYWNoKGUgPT4ge2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwifSlcbiAgICAgICAgfSAgICAgXG4gICAgICAgIGltZ0J0bi5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdk1lbnVcIik7XG4gICAgICAgICAgICBuYXZiYXIuc3dpdGNoU3R5bGUobWVudSk7XG4gICAgICAgICAgICBuYXZiYXIuc3dpdGNoQ29udGVudChtZW51KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgYnRuRGl2LmFwcGVuZChpbWdCdG4pO1xuXG4gICAgICAgIGhvbWVJbWdUZXh0LmFwcGVuZChpbWdUaXRsZSwgYnRuRGl2KTtcblxuICAgICAgICBob21lSW1nRGl2LmFwcGVuZChob21lSW1nLCBob21lSW1nVGV4dCk7XG4gICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKGhvbWVJbWdEaXYpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBhYm91dCA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZ3JpZFwiO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KGF1dG8tZmlsbCwgbWF4KDMwMHB4LCA1MCUpKVwiXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5oZWlnaHQgPSBcImluaGVyaXRcIjtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICBsZXQgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgaG91cnNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhvdXJzSGVhZGVyLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICAgICAgICBsZXQgaG91cnNJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGhvdXJzSW5mby5pbm5lckhUTUwgPSAnPGI+TW9uZGF5IHRvIEZyaWRheTwvYj46PC9zcGFuPiA2QU0gLSAxMFBNPGJyPjxiPlNhdHVyZGF5IHRvIFN1bmRheTwvYj46IDEwQU0gLSAxMlBNPGJyPjxicj48aT4qTm90ZTogT3BlbmluZyBob3VycyBtYXkgYmUgcG9zdHBvbmVkIGR1ZSB0byB1bmV4cGVjdGVkIGVuY291bnRlcnMgd2l0aCBzcXVpcnJlbHMgZHVyaW5nIHRoZSBjaGVmXFwncyBtb3JuaW5nIHdhbGtzOyBWaXNpdG9ycyBhcmUgZW5jb3VyYWdlZCB0byBqb2luIGNoZWYgaW4gaGF2aW5nIGEgdmlnb3JvdXMgZGlzY3Vzc2lvbiBkdXJpbmcgc3VjaCBvY2N1cnJlbmNlcy48L2k+JztcbiAgICAgICAgaG91cnNEaXYuYXBwZW5kKGhvdXJzSGVhZGVyLCBob3Vyc0luZm8pO1xuXG5cbiAgICAgICAgbGV0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGxvY2F0aW9uSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBsb2NhdGlvbkhlYWRlci50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgICAgICAgbGV0IGxvY2F0aW9uSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBsb2NhdGlvbkluZm8uaW5uZXJIVE1MID0gXCIxMjMgT3duZXIncyBIb21lIEF2ZW51ZSwgMTIzNDU2IGNpdHlXaXRoUGFya3M8YnI+IFwiO1xuICAgICAgICBsb2NhdGlvbkRpdi5hcHBlbmQobG9jYXRpb25IZWFkZXIsIGxvY2F0aW9uSW5mbyk7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChob3Vyc0RpdiwgbG9jYXRpb25EaXYpO1xuXG4gICAgICAgIGxldCBjb2x1bW5zID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkaXZcIik7XG4gICAgICAgIGNvbHVtbnMuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgICAgICBsZXQgcGF3SWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgICAgcGF3SWNvbi5zcmMgPSBwYXdJY29uU3JjO1xuICAgICAgICAgICAgcGF3SWNvbi5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICAgICAgICAgIHBhd0ljb24uc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgICAgICAgICAgcGF3SWNvbi5zdHlsZS53aWR0aCA9IFwibWluKDEwMCUsIDMwMHB4KVwiO1xuICAgICAgICAgICAgcGF3SWNvbi5zdHlsZS5oZWlnaHQgPSBcIjI1MHB4XCI7XG4gICAgICAgICAgICBwYXdJY29uLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgICAgICAgICAgcGF3SWNvbi5zdHlsZS56SW5kZXggPSBcIjBcIjtcbiAgICAgICAgICAgIGUuYXBwZW5kKHBhd0ljb24pO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ZS5zdHlsZS5oZWlnaHQgPSBTdHJpbmcoTWF0aC5tYXgoZS5vZmZzZXRIZWlnaHQsIHBhd0ljb24ub2Zmc2V0SGVpZ2h0KSArIFwicHhcIik7fSwgNTApO1xuICAgICAgICB9KTtcblxuICAgICAgICBsZXQgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiaDJcIik7XG4gICAgICAgIGgyLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBlLmNsYXNzTGlzdC5hZGQoXCJnZW5lcmFsSDJcIik7XG4gICAgICAgICAgICBlLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICAgICAgZS5zdHlsZS56SW5kZXggPSBcIjFcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwicFwiKTtcbiAgICAgICAgcC5mb3JFYWNoKGUgPT4ge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiZ2VuZXJhbFBcIik7XG4gICAgICAgICAgICBlLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgICAgICAgICAgZS5zdHlsZS56SW5kZXggPSBcIjFcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIGdlbmVyYWxTdHlsaW5ncygpO1xuICAgIH0pKCk7XG5cbiAgICBjb25zdCBmb290ZXIgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgYXR0cmlidXRpb25zID0gW1wiPGEgaHJlZj0naHR0cHM6Ly93d3cuZnJlZXBpay5jb20vcGhvdG9zL3BldC1hY2Nlc3Nvcmllcyc+UGV0IGFjY2Vzc29yaWVzIHBob3RvIGNyZWF0ZWQgYnkgZnJlZXBpayAtIHd3dy5mcmVlcGlrLmNvbTwvYT5cIiwgJzxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9wYXdcIiB0aXRsZT1cInBhdyBpY29uc1wiPlBhdyBpY29ucyBjcmVhdGVkIGJ5IENyZWF0eXBlIC0gRmxhdGljb248L2E+JywgJzxhIGhyZWY9XCJodHRwczovL3d3dy5mbGF0aWNvbi5jb20vZnJlZS1pY29ucy9yaWJib25cIiB0aXRsZT1cInJpYmJvbiBpY29uc1wiPlJpYmJvbiBpY29ucyBjcmVhdGVkIGJ5IEZyZWVwaWsgLSBGbGF0aWNvbjwvYT4nXTtcbiAgICAgICAgY3JlYXRlRm9vdGVyKGF0dHJpYnV0aW9ucyk7XG4gICAgfSkoKTtcbn1cblxuZXhwb3J0IHtjb250ZW50fSIsImltcG9ydCAqIGFzIGhvbWVNb2R1bGUgZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0ICogYXMgbWVudU1vZHVsZSBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgKiBhcyBjb250YWN0TW9kdWxlIGZyb20gXCIuL2NvbnRhY3QuanNcIjtcbmltcG9ydCBob21lSWNvblNyYyBmcm9tIFwiLi9hc3NldHMvaWNvbnMvYnJhbmQucG5nXCI7XG5cbmxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJCT0RZXCIpWzBdO1xubGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5sZXQgYmFzZUNvbG9yID0gXCJyZ2IoMTY0LCAyMjYsIDI0NSlcIjtcbmxldCBsaWdodEdyYXkgPSBcInJnYigyMjAsIDIyMSwgMjIyKVwiO1xubGV0IGRhcmtCYXNlID0gXCJyZ2IoNzcsIDE2OSwgMjAxKVwiO1xuXG5jb25zdCBib2R5U3R5bGUgPSAoKCkgPT4ge1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gYmFzZUNvbG9yO1xuICAgIGJvZHkuc3R5bGUuZm9udEZhbWlseSA9IFwiRGlkb3QsIEdlb3JnaWFcIjtcbiAgICBib2R5LnN0eWxlLmZvbnRTaXplID0gXCIxMHB4XCI7XG4gICAgYm9keS5zdHlsZS5taW5IZWlnaHQgPSBcIjEwMHZoXCI7XG59KSgpO1xuXG5jb25zdCBuYXZiYXIgPSAoKCkgPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRhaW5lci5pZCA9IFwibmF2XCI7XG4gICAgY29udGFpbmVyLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICBjb250YWluZXIuc3R5bGUud2lkdGggPSBcIjEwMHZ3XCI7XG4gICAgYm9keS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBjb250ZW50RGl2KTtcbiAgICBcbiAgICBsZXQgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbmFtZURpdi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgbmFtZURpdi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gICAgbmFtZURpdi5zdHlsZS5hbGlnbkNvbnRlbnQgPSBcImNlbnRlclwiO1xuICAgIG5hbWVEaXYuc3R5bGUuZm9udEZhbWlseSA9IFwiY3Vyc2l2ZVwiO1xuICAgIG5hbWVEaXYuc3R5bGUuZm9udFNpemUgPSBcIm1pbigxLjVlbSwgNHZ3KVwiO1xuICAgIG5hbWVEaXYuc3R5bGUuaGVpZ2h0ID0gXCI4MHB4XCI7XG4gICAgbGV0IG5hbWVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTsgXG4gICAgbmFtZVRpdGxlLmlubmVyVGV4dCA9IFwiQ2xhc3NpYyBDYW5pbmUgQ3Vpc2luZVwiO1xuICAgIGxldCBob21lSWNvbiA9IG5ldyBJbWFnZSgpO1xuICAgIGhvbWVJY29uLnNyYyA9IGhvbWVJY29uU3JjO1xuICAgIGhvbWVJY29uLnN0eWxlLmhlaWdodCA9IFwiODAlXCI7XG4gICAgaG9tZUljb24uc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgIG5hbWVEaXYuYXBwZW5kKGhvbWVJY29uLCBuYW1lVGl0bGUpO1xuICAgIFxuICAgIGxldCBsaW5rc3VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgIGxpbmtzdWwuY2xhc3NMaXN0LmFkZChcImdlbmVyYWxVbFwiKTtcbiAgICBsaW5rc3VsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBsaW5rc3VsLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJzcGFjZS1hcm91bmRcIjtcbiAgICBsaW5rc3VsLnN0eWxlLmZvbnRTaXplID0gXCJtaW4oMmVtLCA1dncpXCI7XG4gICAgbGlua3N1bC5zdHlsZS5ib3JkZXJUb3AgPSBcIjJweCBkb3R0ZWQgXCIgKyBsaWdodEdyYXk7XG4gICAgbGV0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG9tZS5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgICBsZXQgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBtZW51LmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICAgIG1lbnUuaWQgPSBcIm5hdk1lbnVcIjtcbiAgICBsZXQgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBjb250YWN0LmlubmVyVGV4dCA9IFwiQ29udGFjdFwiO1xuICAgIGxpbmtzdWwuYXBwZW5kKGhvbWUsIG1lbnUsIGNvbnRhY3QpO1xuICAgIGxldCBsaW5rcyA9IGxpbmtzdWwucXVlcnlTZWxlY3RvckFsbChcImxpXCIpO1xuXG4gICAgZnVuY3Rpb24gc3R5bGVPcGVuKGUpIHtcbiAgICAgICAgZS5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcbiAgICAgICAgZS5zdHlsZS5jb2xvciA9IGRhcmtCYXNlO1xuICAgICAgICBlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgZS5vbm1vdXNlb3ZlciA9IFwiXCI7XG4gICAgICAgIGUub25tb3VzZW91dCA9IFwiXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3R5bGVVbm9wZW4oZSkge1xuICAgICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJvcGVuXCIpO1xuICAgICAgICBlLnN0eWxlLmNvbG9yID0gXCJibGFja1wiO1xuICAgICAgICBlLm9ubW91c2VvdmVyID0gKCkgPT4ge2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbGlnaHRHcmF5fTtcbiAgICAgICAgZS5vbm1vdXNlb3V0ID0gKCkgPT4ge2Uuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ3aGl0ZVwifTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzd2l0Y2hTdHlsZShlKSB7XG4gICAgICAgIGxpbmtzLmZvckVhY2goZSA9PiB7XG4gICAgICAgICAgICBpZihlLmNsYXNzTGlzdC5jb250YWlucyhcIm9wZW5cIikpc3R5bGVVbm9wZW4oZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdHlsZU9wZW4oZSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3dpdGNoQ29udGVudChlKSB7XG4gICAgICAgIGNvbnRlbnREaXYuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgaWYoZSA9PSBob21lKSBob21lTW9kdWxlLmNvbnRlbnQoKTtcbiAgICAgICAgZWxzZSBpZiAoZSA9PSBjb250YWN0KSBjb250YWN0TW9kdWxlLmNvbnRlbnQoKTtcbiAgICAgICAgZWxzZSBtZW51TW9kdWxlLmNvbnRlbnQoKTtcbiAgICB9XG4gICAgXG4gICAgbGlua3MuZm9yRWFjaChlID0+IHtcbiAgICAgICAgbGV0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgZS5hcHBlbmQoYSk7XG4gICAgICAgIGUuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuICAgICAgICBlLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gICAgICAgIGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgaWYoZSAhPSBob21lKSB7c3R5bGVVbm9wZW4oZSk7fVxuICAgICAgICBlbHNlIHN0eWxlT3BlbihlKTtcbiAgICAgICAgZS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYoIWUuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BlblwiKSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaFN0eWxlKGUpO1xuICAgICAgICAgICAgICAgIHN3aXRjaENvbnRlbnQoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb250YWluZXIuYXBwZW5kKG5hbWVEaXYsIGxpbmtzdWwpO1xuICAgIHJldHVybiB7c3dpdGNoU3R5bGUsIHN3aXRjaENvbnRlbnR9XG59KSgpO1xuXG4vL2NvbnRhaW5lciBpdCBpcyBhcHBlbmRlZCB0byBzaG91bGQgYmUgcG9zaXRpb24gcmVsYXRpdmUuXG5jb25zdCBjcmVhdGVCbGFja1NjcmVlbiA9IChoZWlnaHRTaXplLCB3aWR0aFNpemUsIG9wYWNpdHkpID0+IHtcbiAgICBsZXQgYmxhY2tTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGJsYWNrU2NyZWVuLnN0eWxlLmhlaWdodCA9IGhlaWdodFNpemU7XG4gICAgYmxhY2tTY3JlZW4uc3R5bGUud2lkdGggPSB3aWR0aFNpemU7XG4gICAgYmxhY2tTY3JlZW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsMCwwLFwiICsgb3BhY2l0eSArIFwiKVwiO1xuICAgIGJsYWNrU2NyZWVuLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBibGFja1NjcmVlbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgICBibGFja1NjcmVlbi5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gICAgYmxhY2tTY3JlZW4uc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgYmxhY2tTY3JlZW4uc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgYmxhY2tTY3JlZW4uc3R5bGUudG9wID0gXCIwXCI7XG4gICAgYmxhY2tTY3JlZW4uc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgIGJsYWNrU2NyZWVuLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIHJldHVybiBibGFja1NjcmVlbjtcbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKGF0dHJpYnV0aW9ucykgPT4ge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRpdi5zdHlsZS5taW5IZWlnaHQgPSBcIjEwMHB4XCI7XG4gICAgZGl2LnN0eWxlLndpZHRoID0gXCIxMDB2d1wiO1xuICAgIGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYig1MCwgNTAsIDUwKVwiO1xuICAgIGRpdi5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICBkaXYuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBkaXYuaW5uZXJIVE1MID0gXCI8aDIgc3R5bGU9J21hcmdpbjowOyBwYWRkaW5nLXRvcDogNXB4Oyc+QXR0cmlidXRpb25zPC9oMj5cIiArICc8YSBocmVmPVwiaHR0cHM6Ly93d3cuZmxhdGljb24uY29tL2ZyZWUtaWNvbnMvZG9nXCIgdGl0bGU9XCJkb2cgaWNvbnNcIj5Eb2cgaWNvbnMgY3JlYXRlZCBieSBGcmVlcGlrIC0gRmxhdGljb248L2E+JztcbiAgICBhdHRyaWJ1dGlvbnMuZm9yRWFjaCgoYXR0cikgPT4ge1xuICAgICAgICBkaXYuaW5uZXJIVE1MICs9IFwiPGJyPlwiICsgYXR0cjtcbiAgICB9KTtcbiAgICBsZXQgbGlua3MgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJhXCIpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwobGlua3MsIGUgPT4ge1xuICAgICAgICBlLnN0eWxlLmNvbG9yID0gXCJ3aGl0ZVwiO1xuICAgIH0pO1xuICAgIGNvbnRlbnREaXYuYXBwZW5kKGRpdik7XG59XG5cbmNvbnN0IGdlbmVyYWxTdHlsaW5ncyA9ICgpID0+IHtcbiAgICBsZXQgZ2VuZXJhbEgyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImdlbmVyYWxIMlwiKTtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGdlbmVyYWxIMiwgZSA9PiB7XG4gICAgICAgIGUuc3R5bGUuZm9udEZhbWlseSA9IFwiY3Vyc2l2ZVwiO1xuICAgICAgICBlLnN0eWxlLmZvbnRTaXplID0gXCIzLjhlbVwiO1xuICAgICAgICBlLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgICAgIGUuc3R5bGUubWFyZ2luID0gXCIxMHB4XCI7XG4gICAgfSk7XG5cbiAgICBsZXQgZ2VuZXJhbFAgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2VuZXJhbFBcIik7XG4gICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChnZW5lcmFsUCwgZSA9PiB7XG4gICAgICAgIGUuc3R5bGUuZm9udFNpemUgPSBcIjEuNmVtXCI7XG4gICAgICAgIGUuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICB9KTtcblxuICAgIGxldCBnZW5lcmFsVWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2VuZXJhbFVsXCIpO1xuICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoZ2VuZXJhbFVsLCBlID0+IHtcbiAgICAgICAgZS5zdHlsZS5saXN0U3R5bGUgPSBcIm5vbmVcIjtcbiAgICAgICAgZS5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG4gICAgICAgIGUuc3R5bGUubWFyZ2luID0gXCIwXCI7XG4gICAgfSk7XG59O1xuXG5ob21lTW9kdWxlLmNvbnRlbnQoKTtcblxuZXhwb3J0IHtjb250ZW50RGl2LCBiYXNlQ29sb3IsIGRhcmtCYXNlLCBsaWdodEdyYXksIG5hdmJhciwgY3JlYXRlQmxhY2tTY3JlZW4sIGNyZWF0ZUZvb3RlciwgZ2VuZXJhbFN0eWxpbmdzfSIsImltcG9ydCB7Y29udGVudERpdiwgY3JlYXRlRm9vdGVyfSBmcm9tIFwiLi9pbmRleC5qc1wiO1xuaW1wb3J0IGtpYmJsZUltZ1NyYyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL2tpYmJsZS13aXRoLXBhd3MuanBnXCI7XG5pbXBvcnQgZ3Jhc3NJbWdTcmMgZnJvbSBcIi4vYXNzZXRzL2ltYWdlcy9ncmFzcy5qcGdcIjtcbmltcG9ydCBtZWF0SW1nU3JjIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvbWVhdC5qcGdcIjtcbmltcG9ydCBzaG9lc0ltZ1NyYyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3Nob2VzLmpwZ1wiO1xuaW1wb3J0IHNxdWlycmVsSW1nU3JjIGZyb20gXCIuL2Fzc2V0cy9pbWFnZXMvc3F1aXJyZWwuanBnXCI7XG5pbXBvcnQgc3R1ZmZlZEFuaW1hbEltZ1NyYyBmcm9tIFwiLi9hc3NldHMvaW1hZ2VzL3N0dWZmZWQtYW5pbWFsLmpwZ1wiO1xuXG5mdW5jdGlvbiBjb250ZW50KCkge1xuICAgIGNvbnN0IG1lbnUgPSAoKCkgPT4ge1xuICAgICAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImdyaWRcIjtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICAgICAgY29udGVudERpdi5hcHBlbmQoY29udGFpbmVyKTtcblxuICAgICAgICBmdW5jdGlvbiByZXNpemVDb250YWluZXIoKSB7XG4gICAgICAgICAgICBpZihjb250YWluZXIub2Zmc2V0V2lkdGggPD0gNjQwKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBcIjkwJVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBjb250YWluZXIuc3R5bGUuZ3JpZFRlbXBsYXRlQ29sdW1ucyA9IFwicmVwZWF0KGF1dG8tZmlsbCwgY2xhbXAoMzIwcHgsIDUwJSwgNjAwcHgpKVwiO1xuICAgICAgICB9O1xuXG4gICAgICAgIHJlc2l6ZUNvbnRhaW5lcigpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBlID0+IHtyZXNpemVDb250YWluZXIoKX0pO1xuXG4gICAgICAgIGNvbnN0IG1lbnVJdGVtID0gKG5hbWUsIGltYWdlLCBkZXNjcmlwdGlvbikgPT4ge1xuXG4gICAgICAgICAgICBjb25zdCBzdHlsZVNlY3Rpb24gPSAocywgbSkgPT4ge1xuICAgICAgICAgICAgICAgIHMuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgICAgICAgICAgICAgcy5zdHlsZS5oZWlnaHQgPSBcIjM1MHB4XCI7XG4gICAgICAgICAgICAgICAgcy5zdHlsZS5jb2xvciA9IFwid2hpdGVcIjtcbiAgICAgICAgICAgICAgICBzLnN0eWxlLmJhY2tncm91bmQgPSBcInVybChcIiArIGltYWdlICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgcy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IFwiY292ZXJcIjtcbiAgICAgICAgICAgICAgICBzLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgICAgICBzLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xuICAgICAgICAgICAgICAgIHMuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgICAgICAgICAgICAgcy5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwic3BhY2UtYmV0d2VlblwiO1xuICAgICAgICAgICAgICAgIHMuc3R5bGUubWFyZ2luID0gXCIxNXB4XCI7XG4gICAgICAgICAgICAgICAgcy5zdHlsZS5ib3hTaGFkb3cgPSBcIjJweCAycHggNXB4IGJsYWNrXCI7XG4gICAgICAgICAgICAgICAgcy5zdHlsZS5ib3JkZXJSYWRpdXMgPSBcIjIwcHhcIjtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGVudGVyQW5pbWF0aW9uID0gKGVudHJpZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0aW1lUGFzc2VkID0gRGF0ZS5ub3coKSAtIHN0YXJ0O1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGltZVBhc3NlZCA+PSAxMDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Rlc2NyaXB0aW9uKHRpbWVQYXNzZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hvd0Rlc2NyaXB0aW9uKHRpbWVQYXNzZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnN0eWxlLmhlaWdodCA9IHRpbWVQYXNzZWQvMjUgKyAyMCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtLnN0eWxlLmNvbG9yID0gXCJyZ2JhKDI1NiwgMjU2LCAyNTYsIFwiICsgMC4wMDEqdGltZVBhc3NlZCArIFwiKVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgICAgIG0uc3R5bGUucGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUocyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgICAgICAgICByb290TWFyZ2luOiAnMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwLjlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZW50ZXJBbmltYXRpb24sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUocyk7XG5cbiAgICAgICAgICAgICAgICBzLm9ubW91c2VlbnRlciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcy5zdHlsZS5ib3hTaGFkb3cgPSBcIjEwcHggMTBweCAxNXB4IGJsYWNrXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcy5vbm1vdXNlbGVhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHMuc3R5bGUuYm94U2hhZG93ID0gXCIycHggMnB4IDVweCBibGFja1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc3R5bGVOYW1lID0gKG4pID0+IHtcbiAgICAgICAgICAgICAgICBuLnN0eWxlLmZvbnRGYW1pbHkgPSBcImN1cnNpdmVcIjtcbiAgICAgICAgICAgICAgICBuLnN0eWxlLmZvbnRTaXplID0gXCIzZW1cIjtcbiAgICAgICAgICAgICAgICBuLnN0eWxlLmhlaWdodCA9IFwiNTBweFwiO1xuICAgICAgICAgICAgICAgIG4uc3R5bGUuYm9yZGVyQm90dG9tTGVmdFJhZGl1cyA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIG4uc3R5bGUuYm9yZGVyQm90dG9tUmlnaHRSYWRpdXMgPSBcIjBcIjtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlRGVzY3JpcHRpb24gPSAoZCkgPT4ge1xuICAgICAgICAgICAgICAgIGQuc3R5bGUuY29sb3IgPSBcInJnYmEoMCwwLDAsMClcIjtcbiAgICAgICAgICAgICAgICBkLnN0eWxlLmhlaWdodCA9IFwiMFwiO1xuICAgICAgICAgICAgICAgIGQuc3R5bGUuZm9udFNpemUgPSBcIm1pbigxLjZlbSwgNC4ydncpXCI7XG4gICAgICAgICAgICAgICAgZC5zdHlsZS5wYWRkaW5nID0gXCIwcHhcIjtcbiAgICAgICAgICAgICAgICBkLnN0eWxlLmJvcmRlclRvcExlZnRSYWRpdXMgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBkLnN0eWxlLmJvcmRlclRvcFJpZ2h0UmFkaXVzID0gXCIwXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHN0eWxlVGV4dCA9IChuLCBkKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGJhY2tncm91bmQgPSBcInJnYmEoMCwgMCwgMCwgMC41KVwiO1xuICAgICAgICAgICAgICAgIGxldCBtYXJnaW4gPSBcIjBcIjtcbiAgICAgICAgICAgICAgICBsZXQgcGFkZGluZyA9IFwiNXB4XCI7XG4gICAgICAgICAgICAgICAgbGV0IHdpZHRoID0gXCJjYWxjKDEwMCUgLSBcIiArIHBhZGRpbmcgKyBcIiAtIDVweClcIjtcbiAgICAgICAgICAgICAgICBsZXQgdGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICAgICAgICAgICAgICBsZXQgYm9yZGVyUmFkaXVzID0gXCIyMHB4XCI7XG5cbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudCA9IG47XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoaSA9PSAxKSBlbGVtZW50ID0gZDtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5tYXJnaW4gPSBtYXJnaW47XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZyA9IHBhZGRpbmc7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS50ZXh0QWxpZ24gPSB0ZXh0QWxpZ247XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuYm9yZGVyUmFkaXVzID0gYm9yZGVyUmFkaXVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdHlsZU5hbWUobik7XG4gICAgICAgICAgICAgICAgc3R5bGVEZXNjcmlwdGlvbihkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWRkVG9ET00gPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGxldCBtZW51TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgICAgICAgICAgICBtZW51TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IG1lbnVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICAgICAgICAgIG1lbnVEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgICAgIHN0eWxlVGV4dChtZW51TmFtZSwgbWVudURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzdHlsZVNlY3Rpb24oc2VjdGlvbiwgbWVudURlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICBzZWN0aW9uLmFwcGVuZChtZW51TmFtZSxtZW51RGVzY3JpcHRpb24pO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoc2VjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge2FkZFRvRE9NfTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCBpdGVtMSA9ICBtZW51SXRlbShcIk93bmVyJ3MgTWVhbFwiLCBtZWF0SW1nU3JjLCBcIlRoZSBncmVhdGVzdCBvZiBib3VudGllczsgZ2V0IHJlYWR5IHlvdXIgcHVwcHkgZG9nIGV5ZXMgYW5kIGJlZ2dpbmcgdm9pY2UgZm9yIGEgdGFzdGUgb2YgdGhlIG1vc3QgZGVsaWNpb3VzIG1lYWxzLlwiKTtcbiAgICAgICAgY29uc3QgaXRlbTIgPSAgbWVudUl0ZW0oXCJHcmFzc1wiLCBncmFzc0ltZ1NyYywgXCJGaWxsZWQgd2l0aCB0aGUgZW50aWNpbmcgYXJvbWEgb2YgZGlydCwgYnVncywgcmFpbiBhbmQgdGhlIG9jY2FzaW9uYWwgcHJlc2VudHMgb2Ygb3RoZXIgZG9ncy5cIik7XG4gICAgICAgIGNvbnN0IGl0ZW0zID0gIG1lbnVJdGVtKFwiQm9iYnlcIiwgc3R1ZmZlZEFuaW1hbEltZ1NyYywgXCJHYWluIGNvbmZpZGVuY2UgaW4geW91ciBodW50aW5nIGFiaWxpdGllcyBieSB0cnlpbmcgdG8gZWF0IEJvYmJ5LlwiKTtcbiAgICAgICAgY29uc3QgaXRlbTQgPSAgbWVudUl0ZW0oXCJTaG9lc1wiLCBzaG9lc0ltZ1NyYywgXCJUaGUgZm9yYmlkZGVuIG1lYWw7IGEgZ3JlYXQgd2F5IHRvIHByYWN0aWNlIHN0ZWFsdGggYW5kIGdldCByaWQgb2YgYW55IHRvb3RoIGl0Y2hlcy5cIik7XG4gICAgICAgIGNvbnN0IGl0ZW01ID0gIG1lbnVJdGVtKFwiU3F1aXJyZWxcIiwgc3F1aXJyZWxJbWdTcmMsIFwiQSByYXJlIHRyZWF0OyBvdXIgZXN0YWJsaXNobWVudCBjdXJyZW50bHkgaGFzIGNhdWdodCBhbiBhdmVyYWdlIG9mIHplcm8gc3F1aXJyZWxzIHBlciB5ZWFyLlwiKTtcbiAgICAgICAgY29uc3QgaXRlbTYgPSAgbWVudUl0ZW0oXCJLaWJibGVcIiwga2liYmxlSW1nU3JjLCBcIlN0cmFuZ2UgY3J1bmNoeSBzdHVmZjsgd2UgZmluZCBtb3JlIHZhbHVlIGluIG90aGVyIG1lYWxzLiBVbmxlc3Mgc29tZW9uZSB3YW50cyBzb21lLCB0aGVuIGl0cyBhbGwgb3Vycy5cIik7XG5cbiAgICAgICAgbGV0IG1lbnVBcnIgPSBbaXRlbTEsIGl0ZW0yLCBpdGVtMywgaXRlbTQsIGl0ZW01LCBpdGVtNl07XG4gICAgICAgIG1lbnVBcnIuZm9yRWFjaChlID0+IHtcbiAgICAgICAgICAgIGUuYWRkVG9ET00oKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGZvb3RlciA9ICgoKSA9PiB7XG4gICAgICAgIGxldCBhdHRyaWJ1dGlvbnMgPSBbXTtcbiAgICAgICAgY3JlYXRlRm9vdGVyKGF0dHJpYnV0aW9ucyk7XG4gICAgfSkoKTtcbn1cblxuZXhwb3J0IHtjb250ZW50fSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9