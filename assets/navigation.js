const smallLogo = document.querySelector(`[src*="small"]`);

let width = 0

console.log(smallLogo);

navWidthListener()

function navWidthListener() {
    width = window.innerWidth;
    if (width > 740) {
        smallLogo.setAttribute(`src`, `./assets/images/company-logo-small-white.svg`)
    } else if (width <= 740) {
        smallLogo.setAttribute(`src`, `./assets/images/company-logo-small.svg`)
    }
}

window.addEventListener(`resize`, navWidthListener);