import {contentDiv, baseColor, lightGray, createBlackScreen} from "./index.js";
import boneIconSrc from "./assets/icons/bone.png";
import kibbleImgSrc from "./assets/images/kibble-with-paws.jpg";
import grassImgSrc from "./assets/images/grass.jpg";
import meatImgSrc from "./assets/images/meat.jpg";
import shoesImgSrc from "./assets/images/shoes.jpg";
import squirrelImgSrc from "./assets/images/squirrel.jpg";
import stuffedAnimalImgSrc from "./assets/images/stuffed-animal.jpg";

function content() {
    const menu = (() => {
        let container = document.createElement("div");
        container.style.display = "grid";
        container.style.justifyContent = "center";
        contentDiv.append(container);

        function resizeContainer() {
            if(container.offsetWidth <= 640) {
                container.style.gridTemplateColumns = "90%";
            }
            else container.style.gridTemplateColumns = "repeat(auto-fill, clamp(320px, 50%, 600px))";
        };

        resizeContainer();
        window.addEventListener("resize", e => {resizeContainer()});

        const menuHeader = (text) => {
            let background = boneIconSrc;

            const styleDiv = (d) => {
                d.style.position = "relative";
                d.style.height = "100px";
                d.style.display = "flex";
                d.style.justifyContent = "center";
            }

            const styleImg = (i) => {
                i.style.position = "absolute";
                i.style.height = "100px";
                i.style.width = "300px";
                i.style.margin = "auto";

            }

            const addToDOM = () => {
                let div = document.createElement("div");
                styleDiv(div);
                let headerImg = new Image();
                headerImg.src = background;
                styleImg(headerImg);
                let header = document.createElement("h2");
                header.textContent = text;
                div.append(header, headerImg);
                contentDiv.insertBefore(div, container);
            }

            return {addToDOM};
        }

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

        const item1 =  menuItem("Owner's Meal", meatImgSrc, "The greatest of bounties; get ready your puppy dog eyes and begging voice for a taste of the most delicious meals.");
        const item2 =  menuItem("Grass", grassImgSrc, "Filled with the enticing aroma of dirt, bugs, rain and the occasional presents of other dogs.");
        const item3 =  menuItem("Bobby", stuffedAnimalImgSrc, "Gain confidence in your hunting abilities by trying to eat Bobby.");
        const item4 =  menuItem("Shoes", shoesImgSrc, "The forbidden meal; a great way to practice stealth and get rid of any tooth itches.");
        const item5 =  menuItem("Squirrel", squirrelImgSrc, "A rare treat; our establishment currently has caught an average of zero squirrels per year.");
        const item6 =  menuItem("Kibble", kibbleImgSrc, "Strange crunchy stuff; we find more value in other meals. Unless someone wants some, then its all ours.");

        let menuArr = [item1, item2, item3, item4, item5, item6];
        menuArr.forEach(e => {
            e.addToDOM();
        });

    })();
}

export {content}