// external js: isotope.pkgd.js
import imagesLoaded from "imagesloaded";

// init Isotope
var grid = document.querySelector(".filter-container");

const navigation = document.getElementById("navigation");
const navigationHeight = navigation.clientHeight;
const filterWrapper = document.getElementById("filter-container");
const filterContainer = document.getElementById("filters");
const filter = document.getElementById("filter");
const filterLoading = document.getElementById("filter-loading");


imagesLoaded(grid, function() {
  setTimeout(function() {
    filter.style.opacity = 1;
    filterLoading.style.opacity = 0;

    let scrollPos = 0;
    window.onscroll = function() {
      // document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
      var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
      const windowY = window.scrollY;
      if (window.scrollY === 0) {
        navigation.style.transform = "translate3d(0, 0, 0)";
      }
      else if (scrollTop < scrollPos && window.scrollY > 1) {
        navigation.style.transform = "translate3d(0, 0, 0)";
      } else if (window.scrollY > 1) {
        navigation.style.transform = "translate3d(0, -" + navigationHeight + "px, 0)";
      }
      scrollPos = windowY;
    };

    const collectionPreview = document.querySelectorAll(".collection-preview");
    collectionPreview.forEach((preview) => {
      var slides = preview.getElementsByTagName("img");
      var current = 0;
      var fader;
      for (var i = 0; i < slides.length; i++) {
        slides[0].style.removeProperty("opacity");
      }

      function faderTimer() {
        for (var i = 0; i < slides.length; i++) {
          slides[i].style.opacity = 0;
          slides[i].style.transitionDelay = "0.25s";
        }
        current = current != slides.length - 1 ? current + 1 : 0;
        slides[current].style.opacity = 1;
        fader = setTimeout(faderTimer, 1000);
      }

      // start a crossfade animation by looping the images
      function crossfade() {
        faderTimer();
      }

      // clear timeout and reset styles
      function stopCrossfade() {
        clearTimeout(fader);
        current = 0;
        slides[0].style.removeProperty("opacity");
        slides[1].style.removeProperty("opacity");
        slides[2].style.removeProperty("opacity");
        slides[3].style.removeProperty("opacity");
      }

      preview.addEventListener("mouseenter", () => {
        // crossfade
        crossfade();
      });
      preview.addEventListener("mouseleave", () => {
        stopCrossfade();
      });

    });

    const filterItems = document.querySelectorAll(".filter-item");
    filterItems.forEach((items) => {
      var current = 0;
      var fader;

      items.addEventListener("mouseenter", () => {
        items.classList.add("hover-animate");
      });
      items.addEventListener("mouseleave", () => {
        items.classList.remove("hover-animate");
      });
    });
  }, 500);
});
