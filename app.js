// console.log('working')

const images = document.querySelectorAll('img');


let imgWidth;
let imgHeight;

images.forEach(img => {
     imgWidth = img.naturalWidth;
     imgHeight = img.naturalHeight;
    console.log(`width: ${imgWidth} height: ${imgHeight}`);
    // img.setAttribute('loading', 'lazy')
    // img.setAttribute('width', `${imgWidth}`)
    // img.setAttribute('height', `${imgHeight}`)
    // console.log(img)

    const setAttribute = ((ele, eleAttribute) => {
        // console.log(ele)
        for (let i in eleAttribute) {
           ele.setAttribute(i, eleAttribute[i])
        }
    })
    
    setAttribute(img, {
        "loading": "lazy",
        "width": `${imgWidth}`,
        "height": `${imgHeight}`,
    })
    
})

// MOBILE HEADER
let closeHandler = document.querySelector('.closeHandler');
let sideHeader = document.querySelector('.side-header')
let showHandler = document.querySelector('.hamburger');

showHandler.addEventListener('click', showMenuHandler)
function showMenuHandler() {
    sideHeader.className += " showMenu";
    sideHeader.classList.remove("hideMenu")
}

closeHandler.addEventListener("click", closeMenuHandler)

function closeMenuHandler() {
    sideHeader.className += " hideMenu";
    sideHeader.classList.remove("showMenu")
}
