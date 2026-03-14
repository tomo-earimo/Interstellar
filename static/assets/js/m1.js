// main.js
let qp;

try {
qp = window.top.location.pathname === "/d";
} catch {
try {
qp = window.parent.location.pathname === "/d";
} catch {
qp = false;
}
}

document.addEventListener("DOMContentLoaded", () => {

const nav = document.querySelector(".f-nav");

if (nav) {
const themeId = localStorage.getItem("theme");
let LogoUrl = "/assets/media/favicon/main.png";
if (themeId === "Inverted") {
LogoUrl = "/assets/media/favicon/main-inverted.png";
}
const html = `       <div id="icon-container">         <a class="icon" href="/./"><img alt="nav" id="INImg" src="${LogoUrl}"/></a>       </div>       <div class="f-nav-right">         <a class="navbar-link" href="/./a"><i class="fa-solid fa-gamepad navbar-icon"></i><an>&#71;&#97;</an><an>&#109;&#101;&#115;</an></a>         <a class="navbar-link" href="/./b"><i class="fa-solid fa-phone navbar-icon"></i><an>&#65;&#112;</an><an>&#112;&#115;</an></a>
        ${qp ? "" : '<a class="navbar-link" href="/./d"><i class="fa-solid fa-laptop navbar-icon"></i><an>&#84;&#97;</an><an>&#98;&#115;</an></a>'}         <a class="navbar-link" href="/./c"><i class="fa-solid fa-gear navbar-icon settings-icon"></i><an>&#83;&#101;&#116;</an><an>&#116;&#105;&#110;&#103;</an></a>       </div>`;
nav.innerHTML = html;
}

if (localStorage.getItem("dy") === null || localStorage.getItem("dy") === undefined) {
localStorage.setItem("dy", "false");
}

const themeid = localStorage.getItem("theme");
const themeEle = document.createElement("link");
themeEle.rel = "stylesheet";
const themes = {
catppuccinMocha: "/assets/css/themes/catppuccin/mocha.css?v=00",
catppuccinMacchiato: "/assets/css/themes/catppuccin/macchiato.css?v=00",
catppuccinFrappe: "/assets/css/themes/catppuccin/frappe.css?v=00",
catppuccinLatte: "/assets/css/themes/catppuccin/latte.css?v=00",
Inverted: "/assets/css/themes/colors/inverted.css?v=00",
sky: "/assets/css/themes/colors/sky.css?v=00",
};

if (themes[themeid]) {
themeEle.href = themes[themeid];
document.body.appendChild(themeEle);
} else {
const customThemeEle = document.createElement("style");
customThemeEle.textContent = localStorage.getItem(`theme-${themeid}`);
document.head.appendChild(customThemeEle);
}

const icon = document.getElementById("tab-favicon");
const name = document.getElementById("t");
const selectedValue = localStorage.getItem("selectedOption");

function setCloak(nameValue, iconUrl) {
const customName = localStorage.getItem("CustomName");
const customIcon = localStorage.getItem("CustomIcon");

```
let FinalNameValue = nameValue;
let finalIconUrl = iconUrl;

if (customName) {
  FinalNameValue = customName;
}
if (customIcon) {
  finalIconUrl = customIcon;
}

if (finalIconUrl) {
  icon.setAttribute("href", finalIconUrl);
  localStorage.setItem("icon", finalIconUrl);
}
if (FinalNameValue) {
  name.textContent = FinalNameValue;
  localStorage.setItem("name", FinalNameValue);
}
```

}

const options = {
Google: { name: "Google", icon: "/assets/media/favicon/google.png" },
Drive: { name: "My Drive - Google Drive", icon: "/assets/media/favicon/drive.png" },
Classroom: { name: "Home", icon: "/assets/media/favicon/classroom.png" },
Gmail: { name: "Gmail", icon: "/assets/media/favicon/gmail.png" },
Desmos: { name: "Desmos | Graphing Calculator", icon: "/assets/media/favicon/desmos.ico" },
Wikipedia: { name: "Wikipedia", icon: "/assets/media/favicon/wikipedia.png" }
};

if (options[selectedValue]) {
setCloak(options[selectedValue].name, options[selectedValue].icon);
}

const eventKey = JSON.parse(localStorage.getItem("eventKey")) || ["Ctrl", "E"];
const pLink = localStorage.getItem("pLink") || "https://classroom.google.com/";
let pressedKeys = [];

document.addEventListener("keydown", event => {
pressedKeys.push(event.key);
if (pressedKeys.length > eventKey.length) {
pressedKeys.shift();
}
if (eventKey.every((key, index) => key === pressedKeys[index])) {
window.location.href = pLink;
pressedKeys = [];
}
});

const savedBackgroundImage = localStorage.getItem("backgroundImage");
if (savedBackgroundImage) {
document.body.style.backgroundImage = `url('${savedBackgroundImage}')`;
}
});
