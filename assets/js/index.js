import Swup from "swup";
import SwupScrollPlugin from "@swup/scroll-plugin";
import SwupGtmPlugin from "@swup/gtm-plugin";
import SwupBodyClassPlugin from "@swup/body-class-plugin";
import SwupScriptsPlugin from "@swup/scripts-plugin";
import "lazysizes";
import "lazysizes/plugins/parent-fit/ls.parent-fit";
import "lazysizes/plugins/respimg/ls.respimg";
import sal from "sal.js";
import Rellax from "rellax";
import Flickity from "flickity";
import PhotoSwipe from "photoswipe";
import PhotoSwipeUI_Default from "photoswipe/dist/photoswipe-ui-default";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

// Swup initialization options
const options = {
  containers: ["#navigation", "#content"],
  plugins: [
    new SwupScrollPlugin({
      animateScroll: false,
      scrollFriction: 0.4,
      scrollAcceleration: 0.04,
      doScrollingRightAway: false,
    }),
    new SwupGtmPlugin(),
    new SwupBodyClassPlugin(),
    new SwupScriptsPlugin({
      head: false,
      body: false,
    }),
  ],
  animateHistoryBrowsing: true,
  preload: true,
  cache: true,
  linkSelector:
    'a[href^="' +
    window.location.origin +
    '"]:not([data-no-swup]):not(.modal-trigger), a[href^="/"]:not([data-no-swup]):not(.modal-trigger), a[href^="#"]:not([data-no-swup]):not(.modal-trigger)',
  skipPopStateHandling: function (event) {
    if (event.state && event.state.source === "swup") {
      return false;
    }
    return true;
  },
};

// Initialize Swup
const swup = new Swup(options);

// Listen for content replacement and re-initialize scripts
swup.on("contentReplaced", init);

// Initialization function for dynamic elements
function init() {
  const body = document.body;
  const navigation = document.getElementById("navigation");
  const navigationHeight = navigation.clientHeight;

  window.lazySizesConfig = window.lazySizesConfig || {};
  lazySizesConfig.expand = 1000;

  // Update viewport height unit
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  // Debounce function for resize event
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }
  var windowResize = debounce(function () {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }, 250);

  // Event listener for window resize
  window.addEventListener("resize", windowResize);

  // Set up initial console logs
  const setUp = () => {
    console.log("// built by brett lewis");
    console.log("// hello@brandlew.co");
  };
  setUp();

  if (document.querySelector("body").classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Initial check on page load
  if (document.querySelector("body").classList.contains("dark")) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  setTimeout(function () {
    document.querySelectorAll(".initial-black").forEach(function (element) {
      element.classList.remove("initial-black");
    });
  }, 2200);

  setTimeout(function () {
    document.querySelectorAll(".initial-black-bg").forEach(function (element) {
      element.classList.remove("initial-black-bg");
    });
  }, 2200);

  // Remove Sal animation delays that interfere with scroll animations
  setTimeout(function () {
    document
      .querySelectorAll(
        "#page-title h1, #page-title h2, #page-title h3, #page-title .loading, #project-header #header-image"
      )
      .forEach(function (element) {
        element.style.transitionDelay = "0s";
        element.style.transitionDuration = "0.33s";
      });
  }, 2200);

  // Sal Animations
  sal({
    once: false,
    threshold: 0.15,
  });

  // Rellax initialization
  const rellaxIn = document.querySelectorAll(".rellax");
  rellaxIn.forEach((el) => {
    const rellax = new Rellax(el, {
      speed: 4,
      center: true,
      relativeToWrapper: true,
      wrapper: el.parentElement,
      round: true,
      vertical: true,
      horizontal: false,
      breakpoints: [1200, 1600, 2000],
    });
    window.addEventListener("scroll", () => {
      rellax.refresh();
    });
  });

  // PhotoSwipe initialization
  if (document.querySelector("#gallery")) {
    var initPhotoSwipeFromDOM = function (gallerySelector) {
      var parseThumbnailElements = function (el) {
        var thumbElements = Array.prototype.slice.call(
            document.querySelectorAll(".figure")
          ),
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          imgEl,
          item;

        for (var i = 0; i < numNodes; i++) {
          figureEl = thumbElements[i];

          if (figureEl.nodeType !== 1) {
            continue;
          }

          linkEl = figureEl.children[0];
          imgEl = linkEl.children[0];

          if (linkEl.classList.contains("video")) {
            var videoID = linkEl.getAttribute("pid");
            var videoBg = linkEl.getAttribute("background");
            item = {
              html:
                "<div class='relative w-full h-full z-100'><iframe src='https://player.vimeo.com/video/" +
                videoID +
                "?title=0&amp;byline=0&amp;portrait=0&amp;loop=1&amp;background=" +
                videoBg +
                "' frameborder='0' allow='autoplay; fullscreen' allowfullscreen='' style='position:absolute;top:5%;left:5%;width:90%;height:90%;z-index:99;'></iframe><svg class='icon pointer h-8 w-8 m-4 text-black opacity-50 absolute spin' style='top: 50%; left: 50%; margin-top: -1rem; margin-left: -1rem;'><use xlink:href='#spinner'></use></svg></div>",
              pid: linkEl.getAttribute("pid"),
            };
          } else {
            item = {
              src: imgEl.getAttribute("data-src"),
              w: imgEl.naturalWidth * 2,
              h: imgEl.naturalHeight * 2,
              pid: linkEl.getAttribute("pid"),
            };
          }

          if (figureEl.children.length > 1) {
            item.title = figureEl.children[1].innerHTML;
          }

          if (linkEl.children.length > 0) {
            item.msrc = item.src;
          }

          item.el = figureEl;
          items.push(item);
        }

        return items;
      };

      var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
      };

      function galleryUiLaunch() {
        navigation.style.zIndex = 0;
        navigation.style.opacity = 0;
        navigation.style.display = "hidden";
        const figureIMG = document.querySelectorAll(".figure img");
        const figureVID = document.querySelectorAll(".figure a.video");
        body.classList.add("gallery-open");
        body.classList.remove("gallery-closed");
        figureIMG.forEach(function (element) {
          element.style.opacity = 0;
        });
        figureVID.forEach(function (element) {
          element.style.opacity = 0;
        });

        // Add gallery-video class if the initial slide is a video
        const pswp = document.querySelector(".pswp");
        if (pswp) {
          // Wait for PhotoSwipe to open, then check the current slide
          setTimeout(() => {
            const currSlide = pswp.querySelector(".pswp__item.active-wrapper");
            if (currSlide && currSlide.querySelector("iframe, .video")) {
              body.classList.add("gallery-video");
            } else {
              body.classList.remove("gallery-video");
            }
          }, 100);
        }
      }

      var onThumbnailsClick = function (e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);

        var eTarget = e.target || e.srcElement;

        var clickedListItem = closest(eTarget, function (el) {
          return el.tagName && el.tagName.toUpperCase() === "FIGURE";
        });

        if (!clickedListItem) {
          return;
        }

        var clickedGallery = document.querySelectorAll(".my-gallery")[0],
          childNodes = Array.prototype.slice.call(
            document.querySelectorAll(".figure")
          ),
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;

        for (var i = 0; i < numChildNodes; i++) {
          if (childNodes[i].nodeType !== 1) {
            continue;
          }

          if (childNodes[i] === clickedListItem) {
            index = nodeIndex;
            break;
          }
          nodeIndex++;
        }

        if (index >= 0) {
          openPhotoSwipe(index, clickedGallery);
        }
        return false;
      };

      var photoswipeParseHash = function () {
        var hash = window.location.hash.substring(1),
          params = {};

        if (hash.length < 5) {
          return params;
        }

        var vars = hash.split("&");
        for (var i = 0; i < vars.length; i++) {
          if (!vars[i]) {
            continue;
          }
          var pair = vars[i].split("=");
          if (pair.length < 2) {
            continue;
          }
          params[pair[0]] = pair[1];
        }

        if (params.gid) {
          params.gid = parseInt(params.gid, 10);
        }

        return params;
      };

      var openPhotoSwipe = function (
        index,
        galleryElement,
        disableAnimation,
        fromURL
      ) {
        var pswpElement = document.querySelectorAll(".pswp")[0],
          gallery,
          options,
          items;

        items = parseThumbnailElements(galleryElement);

        options = {
          galleryUID: galleryElement.getAttribute("data-pswp-uid"),
          history: false,
          bgOpacity: 0.5,
          closeOnScroll: false,
          closeOnVerticalDrag: true,
          preload: [2, 3],
          loadingIndicatorDelay: 0,
          getThumbBoundsFn: function (index) {
            var thumbnail = items[index].el.getElementsByTagName("a")[0],
              pageYScroll =
                window.pageYOffset || document.documentElement.scrollTop,
              rect = thumbnail.getBoundingClientRect();

            return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
          },
          fullscreenEl: false,
          zoomEl: false,
          shareEl: false,
          indexIndicatorSep: "/",
          loop: true,
        };

        if (fromURL) {
          if (options.galleryPIDs) {
            for (var j = 0; j < items.length; j++) {
              if (items[j].pid == index) {
                options.index = j;
                break;
              }
            }
          } else {
            options.index = parseInt(index, 10) - 1;
          }
        } else {
          options.index = parseInt(index, 10);
        }

        if (isNaN(options.index)) {
          return;
        }

        if (disableAnimation) {
          options.showAnimationDuration = 0;
        }

        const galleryClose = document.getElementById("pswp_close");
        galleryClose.addEventListener("click", () => {
          gallery.close();
        });

        gallery = new PhotoSwipe(
          pswpElement,
          PhotoSwipeUI_Default,
          items,
          options
        );
        gallery.listen("beforeChange", function () {
          var activeSlide = document.getElementsByClassName("active-slide");
          var activeWrapper = document.getElementsByClassName("active-wrapper");
          var activeBefore = document.getElementsByClassName("active-before");
          var activeAfter = document.getElementsByClassName("active-after");
          function removeActiveSlide() {
            while (activeSlide[0]) {
              activeSlide[0].classList.remove("active-slide");
            }
            while (activeWrapper[0]) {
              activeWrapper[0].classList.remove("active-wrapper");
            }
            while (activeBefore[0]) {
              activeBefore[0].classList.remove("active-before");
            }
            while (activeAfter[0]) {
              activeAfter[0].classList.remove("active-after");
            }
          }
          removeActiveSlide();
        });
        gallery.listen("afterChange", function () {
          var currentItem = gallery.currItem.container;
          var currentItemParent = gallery.currItem.container.parentNode;
          currentItem.classList.add("active-slide");
          currentItemParent.classList.add("active-wrapper");
          if (currentItemParent.previousElementSibling) {
            currentItemParent.previousElementSibling.classList.add(
              "active-before"
            );
          }
          if (currentItemParent.nextElementSibling) {
            currentItemParent.nextElementSibling.classList.add("active-after");
          }
          Element.prototype.documentOffsetTop = function () {
            return (
              this.offsetTop +
              (this.offsetParent ? this.offsetParent.documentOffsetTop() : 0)
            );
          };
          var topPos =
            document
              .getElementById(gallery.currItem.el.id)
              .documentOffsetTop() -
            window.innerHeight / 2;
          window.scrollTo({
            top: topPos,
            left: 0,
            behavior: "smooth",
          });
          modifyLinksForCaptionsInPhotoSwipe();

          // Add/remove gallery-video class based on current slide
          const currItem = gallery.currItem;
          if (
            currItem &&
            ((currItem.container &&
              currItem.container.querySelector("iframe")) ||
              (currItem.container &&
                currItem.container.querySelector(".video")) ||
              (currItem.html && currItem.html.includes("iframe")))
          ) {
            body.classList.add("gallery-video");
          } else {
            body.classList.remove("gallery-video");
          }

          // Detect if the active slide is a video (iframe)
          setTimeout(function () {
            // Find the current active slide in the DOM
            var pswpCurr = document.querySelector(
              ".pswp .pswp__item.pswp__item--current"
            );
            if (pswpCurr && pswpCurr.querySelector("iframe")) {
              body.classList.add("gallery-video");
            } else {
              body.classList.remove("gallery-video");
            }
          }, 50);
        });
        gallery.listen("close", function () {
          var topPos =
            document
              .getElementById(gallery.currItem.el.id)
              .documentOffsetTop() -
            window.innerHeight / 2;
          window.scrollTo({
            top: topPos,
            left: 0,
            behavior: "smooth",
          });
          navigation.style.zIndex = 110;
          navigation.style.transform = "translate3d(0, 0px, 0)";
          navigation.style.opacity = 1;
          navigation.style.display = "block";
          body.classList.remove("gallery-open");
          body.classList.add("gallery-closed");
          body.classList.remove("gallery-video");
          // Reinforce: Pause all Vimeo iframes on gallery close
          pauseAllVimeoIframes(document);
          const figureIMG = document.querySelectorAll(".figure img");
          figureIMG.forEach(function (element) {
            element.style.removeProperty("opacity");
          });
          const figureVID = document.querySelectorAll(".figure a.video");
          figureVID.forEach(function (element) {
            element.style.removeProperty("opacity");
          });
        });
        gallery.init();
      };

      var galleryElements = document.querySelectorAll(gallerySelector);

      for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute("data-pswp-uid", i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
      }

      var figureClick = document.querySelectorAll(".figure:not(.motion) a");
      figureClick.forEach((trigger) => {
        trigger.addEventListener("mouseenter", () => {
          setTimeout(function () {
            var preloadURL = trigger.getAttribute("href");
            var preloadIMG = new Image();
            preloadIMG.src = preloadURL;
          }, 20);
        });
        trigger.addEventListener("click", () => {
          galleryUiLaunch();
        });
      });

      var hashData = photoswipeParseHash();
      if (hashData.pid && hashData.gid) {
        openPhotoSwipe(
          hashData.pid,
          galleryElements[hashData.gid - 1],
          true,
          true
        );
      }
    };
    initPhotoSwipeFromDOM(".my-gallery");
  }

  function modifyLinksForCaptionsInPhotoSwipe() {
    var captionLinks = document.querySelectorAll(".pswp__caption .caption a");

    captionLinks.forEach(function (link) {
      link.setAttribute("data-no-swup", "");
      link.removeAttribute("target");
    });
  }

  function lazyloadToggle(e) {
    var lazydelay = e.getElementsByClassName("lazyload-delay");
    for (var i = 0; i < lazydelay.length; i++) {
      lazydelay[i].classList.add("lazyload");
    }
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  function navigationToggle() {
    var navToggle = document.getElementsByClassName("navToggle");
    Array.prototype.forEach.call(navToggle, function (nav) {
      nav.addEventListener("click", function (event) {
        nav.classList.toggle("toggle-active");
        navigation.classList.toggle("active");
      });
    });
  }
  navigationToggle();

  function removeActive() {
    navigation.classList.remove("active");
  }
  removeActive();

  const modalTriggers = document.querySelectorAll(".popup-trigger");
  modalTriggers.forEach((trigger) => {
    const { popupTrigger } = trigger.dataset;
    const popupModal = document.querySelector(
      `[data-popup-modal="${popupTrigger}"]`
    );
    const popupGalleryInit = popupModal.querySelector(".gallery_scroller");
    const popupList = popupModal.querySelector(".scrollbar");

    function launchModal() {
      history.pushState(
        "",
        document.title,
        window.location.pathname + "#" + popupTrigger
      );
      disablePageScroll(popupModal);
      if (popupList) {
        disablePageScroll(popupList);
      }
      lazyloadToggle(popupModal);
      if (popupGalleryInit) {
        var flkty = new Flickity(popupGalleryInit, {
          wrapAround: true,
          adaptiveHeight: true,
          percentPosition: false,
          draggable: ">1",
          accessibility: false,
          arrowShape:
            "m77.59 5.06-5.17-5.21-50 50 50 50 5.17-5.21-44.77-44.81z",
        });

        // Pause Vimeo videos on every Flickity slide change
        flkty.on("change", function () {
          pauseAllVimeoIframes(popupGalleryInit);
        });
      }
      navigation.classList.remove("active");
      navigation.style.opacity = 0;
      navigation.style.display = "none";
      popupModal.style.opacity = 1;
      popupModal.style.visibility = "visible";
      popupModal.classList.add("is--visible");

      var navToggle = document.getElementsByClassName("navToggle");
      Array.prototype.forEach.call(navToggle, function (nav) {
        nav.classList.remove("toggle-active");
      });
    }

    function closeModal() {
      history.pushState(
        "",
        document.title,
        window.location.pathname + window.location.search
      );
      enablePageScroll(popupModal);
      if (popupList) {
        enablePageScroll(popupList);
      }
      navigation.style.opacity = 1;
      navigation.style.display = "block";
      popupModal.style.opacity = 0;
      popupModal.style.visibility = "hidden";
      popupModal.classList.remove("is--visible");

      document.querySelectorAll(".modal-video").forEach((iframe) => {
        var player = new Vimeo.Player(iframe);
        player.pause();
      });
    }

    trigger.addEventListener("click", () => {
      launchModal();
    });

    popupModal
      .querySelector(".popup-modal__close")
      .addEventListener("click", () => {
        closeModal();
      });

    if (popupModal.querySelector(".exit-modal")) {
      popupModal.querySelector(".exit-modal").addEventListener("click", () => {
        closeModal();
        swup.scrollTo(document.body, 0);
      });
    }

    document.addEventListener("keyup", function (event) {
      if (event.defaultPrevented) {
        return;
      }
      var key = event.key || event.keyCode;
      if (key === "Escape" || key === "Esc" || key === 27) {
        closeModal();
      }
    });
  });

  const dynamicModal = document.getElementById("popup-modal-url");
  if (dynamicModal) {
    async function fetchAndDisplayContent(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const content = await response.text();
        dynamicModal.innerHTML = content;
      } catch (error) {
        console.error("Error fetching content:", error);
        dynamicModal.innerHTML = "<p>Error loading content.</p>";
      }
    }

    if (window.location.hash) {
      var locHash = window.location.hash.substring(1);
      var locButton = document.querySelector(
        `.modal-trigger[data-popup-trigger="${locHash}"]`
      );

      if (locButton) {
        const url = locButton.getAttribute("data-modal-trigger-url");
        fetchAndDisplayContent(url).then(() => {
          openDynamicModal(locHash);
        });
      }
    }

    function openDynamicModal() {
      dynamicModal.classList.add("show");
      dynamicModal.style.opacity = 1;
      dynamicModal.style.visibility = "visible";
      navigation.classList.remove("active");
      navigation.style.opacity = 0;
      navigation.style.display = "none";
      disablePageScroll(dynamicModal);
      const popupGalleryInit = dynamicModal.querySelector(".gallery_scroller");
      var flkty = new Flickity(popupGalleryInit, {
        wrapAround: true,
        adaptiveHeight: true,
        percentPosition: false,
        draggable: ">1",
        accessibility: false,
        arrowShape: "m77.59 5.06-5.17-5.21-50 50 50 50 5.17-5.21-44.77-44.81z",
      });

      flkty.on("change", function () {
        pauseAllVimeoIframes(popupGalleryInit);
      });

      function pauseOnClose() {
        pauseAllVimeoIframes(dynamicModal);
      }
      dynamicModal.querySelectorAll('.dynamic-modal-close, .exit-modal').forEach(btn => {
        btn.addEventListener('click', pauseOnClose);
      });
    }

    function closeDynamicModal() {
      dynamicModal.classList.remove("show");
      dynamicModal.style.opacity = 0;
      dynamicModal.style.visibility = "hidden";
      navigation.style.opacity = 1;
      navigation.style.display = "block";
      enablePageScroll(dynamicModal);
      history.pushState("", document.title, window.location.pathname);
      document.querySelectorAll(".modal-video").forEach((iframe) => {
        var player = new Vimeo.Player(iframe);
        player.pause();
      });
    }

    const dynamicModalTriggers = document.querySelectorAll(".modal-trigger");
    dynamicModalTriggers.forEach((trigger) => {
      trigger.addEventListener("click", async () => {
        const url = trigger.getAttribute("data-modal-trigger-url");
        const modalTriggerId = trigger.getAttribute("data-popup-trigger");
        history.pushState(
          "",
          document.title,
          window.location.pathname + "#" + modalTriggerId
        );
        await fetchAndDisplayContent(url);
        openDynamicModal();
      });
    });

    const dynamicCloseButton = dynamicModal.querySelector(
      ".dynamic-modal-close"
    );
    if (dynamicCloseButton) {
      dynamicCloseButton.addEventListener("click", () => {
        closeDynamicModal();
      });
    }

    dynamicModal.addEventListener("click", function (event) {
      if (event.target.matches(".dynamic-modal-close")) {
        closeDynamicModal();
      }
    });

    document.addEventListener("keyup", function (event) {
      if (
        event.key === "Escape" ||
        event.key === "Esc" ||
        event.keyCode === 27
      ) {
        if (dynamicModal.classList.contains("show")) {
          closeDynamicModal();
        }
      }
    });
  }

  var buttons = document.getElementsByClassName("toggle");
  Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function (event) {
      button.classList.toggle("active");
    });
  });

  const figureAll = document.querySelectorAll(".figure");
  figureAll.forEach((figureHovered) => {
    figureHovered.addEventListener("mouseenter", () => {
      figureAll.forEach(function (element) {
        element.classList.add("dimmed");
      });
    });
    figureHovered.addEventListener("mouseleave", () => {
      figureAll.forEach(function (element) {
        element.classList.remove("dimmed");
      });
    });
  });

  function value_limit(val, min, max) {
    return val < min ? min : val > max ? max : val;
  }

  const projectHeader = document.getElementById("project-header");
  const headerPointer = document.getElementById("header-pointer");
  const pageTitle = document.getElementById("page-title");
  const headerImage = document.getElementById("header-image");
  const featureImage = document.getElementById("feature-image");
  const pageDescription = document.getElementById("page-description");
  const metaContainer = document.getElementById("meta-container");
  const height = window.innerHeight;

  const startFade = height * 0.25; // 25% of viewport height
  const endFade = height * 0.5; // 75% of viewport height

  // Helper function to clamp values within a range
  function value_limit(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  // Function to check if the body does not have specific classes
  function isNotSpecialPage() {
    return (
      !document.body.classList.contains("page-overview") &&
      !document.body.classList.contains("page-current-works") &&
      !document.body.classList.contains("page-say-hello") &&
      !document.body.classList.contains("overview")
    );
  }

  // Function to check if the body has specific classes (for special pages)
  function isSpecialPage() {
    return (
      document.body.classList.contains("page-overview") ||
      document.body.classList.contains("page-current-works") ||
      document.body.classList.contains("page-say-hello") ||
      document.body.classList.contains("overview")
    );
  }

  // Set initial colors based on data-hue
  function setInitialColors() {
    const hue = navigation.getAttribute("data-hue");
    const defaultColor =
      hue === "black" ? "#000000" : hue === "white" ? "#FFFFFF" : "";
    const defaultBackgroundColor = ""; // Define your default background color if any

    document
      .querySelectorAll(".bun, .shift, .shift.nav-ig")
      .forEach(function (element) {
        if (element.classList.contains("bun")) {
          element.style.backgroundColor = defaultBackgroundColor;
        } else if (element.classList.contains("shift")) {
          element.style.color = defaultColor;
          if (element.classList.contains("nav-ig")) {
            element.style.fill = defaultColor;
          }
        }
      });

    document
      .querySelectorAll(
        "#page-title h1, #page-title h2, #page-title h3, .shift, #page-description"
      )
      .forEach(function (element) {
        element.style.color = defaultColor;
        element.style.fill = defaultColor;
      });

    document
      .querySelectorAll("#page-title .loading")
      .forEach(function (element) {
        element.style.backgroundColor = defaultBackgroundColor;
      });
  }

  // Call setInitialColors on page load
  setInitialColors();

  // Scroll and color update function
  function updateColors() {
    const scrollTop = window.scrollY; // Current scroll position

    // Get the initial color from the navigation element's data-hue attribute
    const hue = navigation.getAttribute("data-hue");
    const defaultColor =
      hue === "black" ? "#000000" : hue === "white" ? "#FFFFFF" : "";
    const defaultBackgroundColor = ""; // Define your default background color if any

    function setColor(color) {
      document
        .querySelectorAll(".bun, .shift, .shift.nav-ig")
        .forEach(function (element) {
          if (element.classList.contains("bun")) {
            element.style.backgroundColor = color || defaultBackgroundColor;
          } else if (element.classList.contains("shift")) {
            element.style.color = color || defaultColor;
            if (element.classList.contains("nav-ig")) {
              element.style.fill = color || defaultColor;
            }
          }
        });

      document
        .querySelectorAll(
          "#page-title h1, #page-title h2, #page-title h3, .shift, #page-description"
        )
        .forEach(function (element) {
          element.style.color = color || defaultColor;
          element.style.fill = color || defaultColor;
        });

      document
        .querySelectorAll("#page-title .loading")
        .forEach(function (element) {
          element.style.backgroundColor = color || defaultBackgroundColor;
        });
    }

    if (isSpecialPage()) {
      if (pageDescription) {
        pageDescription.classList.remove("opacity-0");
        pageDescription.classList.add("opacity-100");
        pageDescription.classList.remove("absolute");
      }
    }

    // Update colors based on scroll position and archive class
    if (scrollTop >= startFade) {
      if (document.body.classList.contains("dark")) {
        setColor("#FFFFFF");
      } else {
        setColor("#000000");
      }
      if (isNotSpecialPage()) {
        if (pageDescription) {
          pageDescription.classList.add("opacity-100");
          pageDescription.classList.remove("opacity-0");
        }
      }
    } else {
      // Reset to default colors based on data-hue
      setColor(defaultColor);
      if (isNotSpecialPage()) {
        if (pageDescription) {
          pageDescription.classList.add("opacity-0");
          pageDescription.classList.remove("opacity-100");
        }
      }
    }
  }

  // Event listeners for scroll and load
  window.addEventListener("scroll", updateColors);
  window.addEventListener("load", updateColors);

  // Initial call to set colors correctly on page load
  updateColors();

  function applyResponsiveWidth() {
    if (window.innerWidth >= 768) {
      if (isNotSpecialPage()) {
        if (pageDescription && metaContainer) {
          // Get the width of the meta-container
          var containerWidth = metaContainer.offsetWidth;

          // Set the width of the description to be the same as the meta-container
          pageDescription.style.maxWidth = containerWidth + "px";
        }
      } else {
        // Reset maxWidth if viewport width is below 768px
        if (pageDescription) {
          pageDescription.style.maxWidth = "";
        }
      }
    }
  }

  // Call the function initially and also on window resize
  applyResponsiveWidth();
  window.addEventListener("resize", applyResponsiveWidth);

  // Scroll Animations
  let scrollPos = 0;
  window.onscroll = function () {
    const scrollTop = window.pageYOffset;
    const windowY = scrollTop; // window.scrollY can be used here as well

    if (headerImage) {
      let opacity;
      if (scrollTop < startFade) {
        opacity = 1;
      } else if (scrollTop > endFade) {
        opacity = 0;
      } else {
        opacity = 1 - (scrollTop - startFade) / (endFade - startFade);
      }
      headerImage.style.opacity = value_limit(opacity, 0, 1).toFixed(2);
    }

    if (featureImage) {
      let opacity;
      if (scrollTop < startFade) {
        opacity = 1;
      } else if (scrollTop > endFade) {
        opacity = 0;
      } else {
        opacity = 1 - (scrollTop - startFade) / (endFade - startFade);
      }
      featureImage.style.opacity = value_limit(opacity, 0, 1).toFixed(2);
    }

    // Handle navigation and page title behaviors
    if (isNotSpecialPage()) {
      if (projectHeader) {
        if (windowY > window.innerHeight * 0.75) {
          if (windowY < scrollPos) {
            navigation.style.transform = "translate3d(0, 0, 0)";
          } else {
            navigation.style.transform =
              "translate3d(0, -" + navigationHeight + "px, 0)";
          }
        }
        if (pageTitle) {
          const pageTitleHeight = pageTitle.offsetHeight;
          let additionalHeight = 0;

          if (pageDescription) {
            const pageDescriptionHeight =
              pageDescription.offsetHeight + pageDescription.offsetHeight + 72; // 1rem in pixels (16px)
            additionalHeight = pageDescriptionHeight;
          }

          const totalHeight = pageTitleHeight + additionalHeight;
          const pageTitleBottom = (window.innerHeight - totalHeight) / 2; // Adjust to your viewport height calculation

          if (window.scrollY > pageTitleBottom) {
            pageTitle.classList.add("absolute");
            pageTitle.classList.remove("fixed");
            pageTitle.style.top = "auto";
            pageTitle.style.bottom = "0";
            pageTitle.style.transform = "translate3d(0, 0vh, 0)";
            if (headerPointer) {
              headerPointer.style.opacity = 0;
            }
            if (pageDescription) {
              pageDescription.classList.remove("absolute");
              pageDescription.classList.add("relative");
            }
          } else {
            pageTitle.classList.add("fixed");
            pageTitle.classList.remove("absolute");
            pageTitle.style.top = "50%";
            pageTitle.style.bottom = "auto";
            pageTitle.style.transform = "translate3d(0, -50%, 0)";
            if (headerPointer) {
              headerPointer.style.opacity = 1;
            }
            if (pageDescription) {
              pageDescription.classList.remove("relative");
              pageDescription.classList.add("absolute");
            }
          }
        }
      }
    }

    scrollPos = windowY;
  };

  if (document.querySelector("#current")) {
    var currentPage = document.getElementById("current");

    if (currentPage.previousElementSibling) {
      currentPage.previousElementSibling.classList.remove("hidden");
      currentPage.previousElementSibling.classList.add(
        "visible",
        "collection-prev"
      );
      currentPage.previousElementSibling.querySelector(".mobile").innerHTML =
        "Prev";
    }
    if (currentPage.nextElementSibling) {
      currentPage.nextElementSibling.classList.remove("hidden");
      currentPage.nextElementSibling.classList.add(
        "visible",
        "collection-next"
      );
      currentPage.nextElementSibling.querySelector(".mobile").innerHTML =
        "Next";
    }
  }

  navigation.style.opacity = "1";

  var overviewLink = document.querySelector(".nav-overview-container");

  overviewLink.addEventListener("click", function (event) {
    event.preventDefault();
    var dropdown = this.querySelector(".dropdown-content");
    var isHidden = dropdown.classList.contains("hidden");

    document.querySelectorAll(".dropdown-content").forEach(function (dropdown) {
      dropdown.classList.add("hidden");
    });

    if (isHidden) {
      dropdown.classList.remove("hidden");
    } else {
      dropdown.classList.add("hidden");
    }
  });

  document.addEventListener("click", function (event) {
    if (!event.target.closest(".nav-overview-container")) {
      document
        .querySelectorAll(".dropdown-content")
        .forEach(function (dropdown) {
          dropdown.classList.add("hidden");
        });
    }
  });

  (function () {
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      var href = link.getAttribute("href");

      if (link.closest(".caption")) {
        link.setAttribute("data-no-swup", "");
        link.removeAttribute("target");
      } else if (/^(https?:)?\/\//.test(href)) {
        link.target = "_blank";
      }
    }
  })();

  (function (document, window) {
    var styleText =
      "::-moz-focus-inner{border:0 !important;}:focus{outline: none !important;";
    var unfocus_style = document.createElement("STYLE");

    window.unfocus = function () {
      document.getElementsByTagName("HEAD")[0].appendChild(unfocus_style);

      document.addEventListener("mousedown", function () {
        unfocus_style.innerHTML = styleText + "}";
      });
      document.addEventListener("keydown", function () {
        unfocus_style.innerHTML = "";
      });
    };

    unfocus.style = function (style) {
      styleText += style;
    };

    unfocus();
  })(document, window);
}

// Initialize on page load
init();

function pauseAllVimeoIframes(context) {
  // Pause all Vimeo iframes in the given context (or document)
  const iframes = (context || document).querySelectorAll("iframe");
  iframes.forEach(function (iframe) {
    const src =
      iframe.getAttribute("src") || iframe.getAttribute("data-src") || "";
    if (src.includes("player.vimeo.com")) {
      // Use postMessage API directly for reliability
      try {
        iframe.contentWindow &&
          iframe.contentWindow.postMessage('{"method":"pause"}', "*");
      } catch (e) {}
      // Also try SDK if available
      if (typeof Vimeo !== "undefined" && Vimeo.Player) {
        try {
          const player = new Vimeo.Player(iframe);
          player.pause().catch(() => {});
        } catch (e) {}
      }
    }
  });
}

