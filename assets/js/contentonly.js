import Flickity from 'flickity';
import 'lazysizes';
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/respimg/ls.respimg";


function init() {
    const popupGalleryInit = document.querySelector(".gallery_scroller");
    var flkty = new Flickity(popupGalleryInit, {
      wrapAround: true,
      adaptiveHeight: true,
      percentPosition: false,
      draggable: ">1",
      accessibility: false,
      arrowShape: "m77.59 5.06-5.17-5.21-50 50 50 50 5.17-5.21-44.77-44.81z",
      setGallerySize: false
    });
}

init();
