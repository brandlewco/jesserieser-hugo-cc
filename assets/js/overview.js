// external js: isotope.pkgd.js
import imagesLoaded from "imagesloaded";

// init Isotope
var grid = document.querySelector(".filter-container");
var iso;

const navigation = document.getElementById("navigation");
const navigationHeight = navigation.clientHeight;
const filterWrapper = document.getElementById("filter-container");
const filterContainer = document.getElementById("filters");
const filter = document.getElementById("filter");
const filterLoading = document.getElementById("filter-loading");
const gumroadContainer = document.querySelector(".gumroad-scroll-container");


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
        filterContainer.style.transform = "translate3d(0, 0, 0)";
      }
      else if (scrollTop < scrollPos && window.scrollY > 1) {
        navigation.style.transform = "translate3d(0, 0, 0)";
        filterContainer.style.transform = "translate3d(0," + navigationHeight + "px, 0)";
      } else if (window.scrollY > 1) {
        navigation.style.transform = "translate3d(0, -" + navigationHeight + "px, 0)";
        filterContainer.style.transform = "translate3d(0, 0, 0)";
      }
      scrollPos = windowY;
    };



    function addFilter(filter) {
      if (filters.indexOf(filter) == -1) {
        filters.push(filter);
      }
    }

    function removeFilter(filter) {
      var index = filters.indexOf(filter);
      if (index != -1) {
        filters.splice(index, 1);
      }
    }

    function getHashFilter() {
      // get filter=filterName
      var matches = location.hash.match(/filter=([^&]+)/i);
      var hashFilter = matches && matches[1];
      return hashFilter && decodeURIComponent(hashFilter);
    }

    function removeHash() {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
    }

    function clearActiveClass() {
      const filterClearClass = Array.from(
        document.querySelectorAll(".button.is-checked")
      );
      for (const element of filterClearClass) {
        element.classList.remove("is-checked");
      }
    }

    function resetFilters() {
      filters = {};
      iso.arrange({
        filter: "*",
      });
    }

    // const filtersClear = document.getElementById("all");
    // filtersClear.addEventListener("click", function() {
    //   removeHash();
    //   clearActiveClass();
    //   resetFilters();
    // });

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
      const filters = items.dataset.filter.split(",");
      const filtersTheme = items.dataset.theme;
      var current = 0;
      // var slides = items.getElementsByTagName("img");
      var fader;

      // unset after initial load
      // for (var i = 0; i < slides.length; i++) {
      //   slides[0].style.removeProperty("opacity");
      // }

      // function faderTimer() {
      //   for (var i = 0; i < slides.length; i++) {
      //     slides[i].style.opacity = 0;
      //     slides[i].style.transitionDelay = "0.25s";
      //   }
      //   current = current != slides.length - 1 ? current + 1 : 0;
      //   slides[current].style.opacity = 1;
      //   fader = setTimeout(faderTimer, 1000);
      // }

      // // start a crossfade animation by looping the images
      // function crossfade() {
      //   faderTimer();
      // }

      // // clear timeout and reset styles
      // function stopCrossfade() {
      //   clearTimeout(fader);
      //   current = 0;
      //   slides[0].style.removeProperty("opacity");
      //   slides[1].style.removeProperty("opacity");
      //   slides[2].style.removeProperty("opacity");
      //   slides[3].style.removeProperty("opacity");
      // }

      items.addEventListener("mouseenter", () => {
        // crossfade
        // crossfade();
        items.classList.add("hover-animate");
        filters.forEach(function(element) {
          var filterActive = document.getElementById(element);
          if (filterActive) {
            filterActive.style.color = filtersTheme;
            // filterActive.style.color = "#000";
          }
        });
      });
      items.addEventListener("mouseleave", () => {
        // stopCrossfade();
        items.classList.remove("hover-animate");
        // void items.offsetWidth; // trigger a DOM reflow
        filters.forEach(function(element) {
          var filterActive = document.getElementById(element);
          if (filterActive) {
            // filterActive.style.color = null;
            filterActive.style.color = null;
          }
        });
      });
    });

    const catButtons = document.querySelectorAll(".button");
    catButtons.forEach((catFilter) => {
      catFilter.addEventListener("mouseenter", () => {
        var catDataFilter = catFilter.getAttribute("data-filter");
        var splitFilter = catDataFilter.replace(/^\./, "");
        const filterItems = document.querySelectorAll(".filter-item");
        filterItems.forEach(function(element) {
          if (element.classList.contains(splitFilter)) {
            element.classList.add("active");
          } else {
            element.classList.remove("active");
          }
        });
      });


      catFilter.addEventListener("mouseleave", () => {
        const filterItems = document.querySelectorAll(".filter-item");
        filterItems.forEach(function(element) {
          element.classList.add("active");
        });
      });
    });
    // console.log(catButtons);



    const windowHeight = window.innerHeight;
    console.log(windowHeight);
    if (windowHeight < 801) {
      catToggle.classList.remove("active");
      catToggle.classList.add("is-checked");
      categories.classList.remove("opened");
    }


    const filterError = document.getElementById("filter-error");
    const filterArchive = document.getElementById("filter-archive");
  }, 500);
});
