'use strict';

// Polyfill

// forEach() was added to the ECMA-262 standard in the 5th edition; as such it may not be present in other implementations of the standard. You can work around this by inserting the following code at the beginning of your scripts, allowing use of forEach() in implementations that don't natively support it. This algorithm is exactly the one specified in ECMA-262, 5th edition, assuming Object and TypeError have their original values and that callback.call() evaluates to the original value of Function.prototype.call().

// Production steps of ECMA-262, Edition 5, 15.4.4.18
// Reference: http://es5.github.io/#x15.4.4.18
if (!Array.prototype.forEach) {

    Array.prototype.forEach = function (callback /*, thisArg*/ ) {

        var T, k;

        if (this == null) {
            throw new TypeError('this is null or not defined');
        }

        // 1. Let O be the result of calling toObject() passing the
        // |this| value as the argument.
        var O = Object(this);

        // 2. Let lenValue be the result of calling the Get() internal
        // method of O with the argument "length".
        // 3. Let len be toUint32(lenValue).
        var len = O.length >>> 0;

        // 4. If isCallable(callback) is false, throw a TypeError exception. 
        // See: http://es5.github.com/#x9.11
        if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
        }

        // 5. If thisArg was supplied, let T be thisArg; else let
        // T be undefined.
        if (arguments.length > 1) {
            T = arguments[1];
        }

        // 6. Let k be 0.
        k = 0;

        // 7. Repeat while k < len.
        while (k < len) {

            var kValue;

            // a. Let Pk be ToString(k).
            //    This is implicit for LHS operands of the in operator.
            // b. Let kPresent be the result of calling the HasProperty
            //    internal method of O with argument Pk.
            //    This step can be combined with c.
            // c. If kPresent is true, then
            if (k in O) {

                // i. Let kValue be the result of calling the Get internal
                // method of O with argument Pk.
                kValue = O[k];

                // ii. Call the Call internal method of callback with T as
                // the this value and argument list containing kValue, k, and O.
                callback.call(T, kValue, k, O);
            }
            // d. Increase k by 1.
            k++;
        }
        // 8. return undefined.
    };
}

// Fix issue with anchor links not working due to AngularJS routing (ngRoute module)

jQuery(document).ready(function () {
    var anchor = window.location.href;
    var pos = anchor.search(/#\//);
    if (pos != -1) {
        var newAnchor = anchor.slice(pos).split('/').join('');
        var el = document.querySelector(newAnchor);
        el.scrollIntoView();
    }
});

// Wrap Text on Member Ind Details Page

jQuery("[id*='MemberIndDetails'] .Label:contains('(c1000 word limit)')").html(function (_, html) {
    return html.replace(/(\(c1000 word limit\))/g, '<small>$1</small>');
});

/// This is a secondary script to handle broken links in main menu (problem is that they do not 
/// seem to fire after the first function above has activated)
/// Will need to return this and rewrite it in a more efficient way

var primaryMenuLinks = document.querySelectorAll('.rsmColumnWrap .rsmList > .rsmItem > .rsmLink');
//allmylinks;

var _loop = function _loop(i) {

    primaryMenuLinks[i].addEventListener("click", function primaryMenuLinkClick() {
        //console.log( "clicked" );
        var anchor1 = primaryMenuLinks[i].href;
        var pos1 = anchor1.search(/#\//);
        if (pos1 != -1) {
            var newAnchor1 = anchor1.slice(pos1).split('/').join('');
            var el1 = document.querySelector(newAnchor1);
            if (el1 != null) {
                el1.scrollIntoView();
            }
        }
    }, false);
};

for (var i = 0; i < primaryMenuLinks.length; i++) {
    _loop(i);
}

// Show / Hide scroll to top of page link

var topLink = jQuery('.link__scroll-to-top');
var windowHeight = jQuery(window).height();
var scrollTop = jQuery(window).scrollTop();

jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() >= windowHeight) {
        topLink.fadeIn();
    } else {
        topLink.fadeOut();
    }
});

// Anchor Menu Fade In / Fade Out Animation

var searchAnchors = document.querySelectorAll('.row--anchor-menu ul li');

searchAnchors.forEach(function (element) {
    element.addEventListener('mouseover', function () {
        for (let i = 0; i < searchAnchors.length; i++) {
            searchAnchors[i].setAttribute('class', 'fade-out');;
        }
        element.setAttribute('class', 'fade-in');
    }, false)
}, this);

searchAnchors.forEach(function (element) {
    element.addEventListener('mouseout', function () {
        // element.setAttribute('class', 'fade-out');
        for (let i = 0; i < searchAnchors.length; i++) {
            searchAnchors[i].setAttribute('class', '');;
        }
    }, false)
}, this);

// Change image for -1x when used in tagged lists

var imgs = jQuery('.row--tagged-list-item img');

if (jQuery(imgs).length) {
    for (i = 0; i < imgs.length; i++) {
        var src = imgs[i].src;
        var newSrc = src.replace(/-2x/g, '-1x');
        console.log(newSrc);

        imgs[i].setAttribute("src", '' + newSrc);
    }
}