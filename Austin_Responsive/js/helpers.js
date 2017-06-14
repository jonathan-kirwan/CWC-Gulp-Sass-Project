// Fix issue with anchor links not working due to AngularJS routing (ngRoute module)

jQuery(document).ready(function () {
    const anchor = window.location.href;
    const pos = anchor.search(/#\//);
    if (pos != -1) {
        const newAnchor = anchor.slice(pos).split('/').join('');
        const el = document.querySelector(newAnchor);
        el.scrollIntoView();
    }
});

/// This is a secondary script to handle broken links in main menu (problem is that they do not 
/// seem to fire after the first function above has activated)
/// Will need to return this and rewrite it in a more efficient way

var allmylinks = document.querySelectorAll('.rsmColumnWrap .rsmList > .rsmItem > .rsmLink');
//allmylinks;
for (let i = 0; i < allmylinks.length; i++) {

    allmylinks[i].addEventListener("click", function clickey() {
        //console.log( "clicked" );
        const anchor1 = allmylinks[i].href;
        const pos1 = anchor1.search(/#\//);
        if (pos1 != -1) {
            const newAnchor1 = anchor1.slice(pos1)
                .split('/')
                .join('');
            const el1 = document.querySelector(newAnchor1);
            el1.scrollIntoView();
        }
    }, false);
}

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