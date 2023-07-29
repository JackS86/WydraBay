console.log("skrypt dodany")

let SELEKTOR_LARGE_PICTURE = '[data-kind-picture="goal"]';
let SELEKTOR_TITLE_PICTURE = '[data-kind-picture="title"]';
let SELEKTOR_MINIATURA_PICTURE = '[data-kind-picture="trigger"]';
let CLASS_HIDE_LARGE_PICTURE = 'hide-large-image-responsive';
const KEY_ESC = 27;


let changePic = (urlPicture, textTittle) => {
    'use strict';
    let largeImage = document.querySelector(SELEKTOR_LARGE_PICTURE);
   largeImage.setAttribute('src', urlPicture);
   let changeTitle = document.querySelector(SELEKTOR_TITLE_PICTURE);
   changeTitle.textContent = textTittle;

}
changePic('pictures/Lisa.jpg','Chwila wytchnienia');

function picMiniatura(miniatura) {
    'use strict';
    return miniatura.getAttribute('data-url-picture');
}
function titleMiniatura(miniatura) {
    'use strict';
    return miniatura.getAttribute('data-title-picture');
}
let changePicByMiniatura = (miniatura) => {
'use strict';
changePic(picMiniatura(miniatura), titleMiniatura(miniatura));
}
function addServiceClickByMiniatura(miniatura) {
    'use strict';
    miniatura.addEventListener('click', function(zdarzenie){
    zdarzenie.preventDefault();
    changePicByMiniatura(miniatura);    
    showLargeImage();   
    });
}
function readTableMiniatures() {
    'use strict';
    let miniatures = document.querySelectorAll(SELEKTOR_MINIATURA_PICTURE);
    let tableMiniatures = [].slice.call(miniatures);
    return tableMiniatures;
}
function hideLargeImage() {
    'use strict';
    document.body.classList.add(CLASS_HIDE_LARGE_PICTURE);
}

function showLargeImage() {
    'use strict';
    document.body.classList.remove(CLASS_HIDE_LARGE_PICTURE);
}

function addServiceKey() {
    'use strict';
    document.body.addEventListener('keyup', function(event) {
        event.preventDefault();
        if (event.keyCode === KEY_ESC) {
            console.log(event.keyCode);
            hideLargeImage();
        }

    });
}

function initializeEvents(){
    'use strict';
    let miniatures = readTableMiniatures();
    miniatures.forEach(addServiceClickByMiniatura);
    addServiceKey();
}


initializeEvents();

