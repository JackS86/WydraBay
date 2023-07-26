console.log("skrypt dodany")

let SELEKTOR_LARGE_PICTURE = '[data-kind-picture="goal"]';
let SELEKTOR_TITLE_PICTURE = '[data-kind-picture="title"]';
let SELEKTOR_MINIATURA_PICTURE = '[data-kind-picture="trigger"]';
// let SELEKTOR_URL_PICTURE = "[data-url-picture]";
// let SELEKTOR_TITLE_TWO_PICTURE = "[data-title-picture]";

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
    });
}

