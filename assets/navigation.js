const smallLogo = document.querySelector(`[src*="small"]`);
const headerSection = document.querySelector(`header`);
const navUl = document.querySelector(`#nav-links`)
let width = 0

navWidthListener()

function navWidthListener() {
    width = window.innerWidth;
    if (width > 740) {
        smallLogo.setAttribute(`src`, `./assets/images/company-logo-small-white.svg`)
    } else if (width <= 740) {
        smallLogo.setAttribute(`src`, `./assets/images/company-logo-small.svg`);

    }
}

function navBarExpansion() {
    smallLogo.classList.toggle(`nav-closed`)
    smallLogo.classList.toggle(`nav-open`)
    headerSection.classList.toggle(`closed`);
    headerSection.classList.toggle(`open`);
}

window.addEventListener(`resize`, navWidthListener);
smallLogo.addEventListener(`click`, navBarExpansion);


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems);
});

let planetsInformation = document.querySelector(`#dropdown-planets`);
let logPlanetTester = planetsInformation.children[0].textContent
console.log(logPlanetTester);
