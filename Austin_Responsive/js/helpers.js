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

// Images

// 'use strict';

'use strict';

var imgs = jQuery('.row--tagged-list-item img');

if (!jQuery(imgs).length) {
    for (i = 0; i < imgs.length; i++) {
        var src = imgs[i].src;
        var newSrc = src.replace(/-2x/g, '-1x');
        console.log(newSrc);

        imgs[i].setAttribute("src", '' + newSrc);
    }
}