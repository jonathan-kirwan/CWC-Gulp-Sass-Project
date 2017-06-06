// Fix issue with anchor links not working due to AngularJS routing (ngRoute module)

// const a = window.location.href.indexOf('scroll=');
// const b = window.location.href.indexOf('&hkey=');
// const href = window.location.href.substring(a + 7, b)

// function scrollToAnchor() {
//     if (a != -1 && b != -1) {
//         const anchor = document.querySelector(`#${href}`);
//         anchor.scrollIntoView();
//     }
// };

// window.onload = scrollToAnchor();

jQuery(document).ready(function () {
    const anchor = window.location.href;
    const pos = getAnchor.search(/#\//);
    const newAnchor = getAnchor.slice(pos).split('/').join('');
    const el = document.querySelector(newAnchor);
    el.scrollIntoView();
});

// Show / Hide scroll to top of page link

const topLink = jQuery('.link__scroll-to-top');
const windowHeight = jQuery(window).height();
const scrollTop = jQuery(window).scrollTop();

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() >= windowHeight) {
        topLink.fadeIn();
    } else {
        topLink.fadeOut();
    }
})

// Anchor Menu Fade In / Fade Out Animation

var links = [];
links = document.querySelectorAll('.row--anchor-menu ul li');

if (links.length !== 0) {

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('mouseenter', hover, false);
    };
}

function hover() {
    var thisss = this;
    links.forEach(function (item) {
        item.setAttribute('class', 'fade-out');
        thisss.setAttribute('class', 'fade-in');
    });
}

// Change image for -1x when used in tagged lists

// 'use strict';

var imgs = jQuery('.row--tagged-list-item img');

if (jQuery(imgs).length) {
    for (i = 0; i < imgs.length; i++) {
        var src = imgs[i].src;
        var newSrc = src.replace(/-2x/g, '-1x');
        console.log(newSrc);

        imgs[i].setAttribute("src", '' + newSrc);
    }
}