// Production steps of ECMA-262, Edition 6, 22.1.2.1
if (!Array.from) {
    Array.from = (function () {
      var toStr = Object.prototype.toString;
      var isCallable = function (fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };
      var toInteger = function (value) {
        var number = Number(value);
        if (isNaN(number)) { return 0; }
        if (number === 0 || !isFinite(number)) { return number; }
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };
      var maxSafeInteger = Math.pow(2, 53) - 1;
      var toLength = function (value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };
  
      // The length property of the from method is 1.
      return function from(arrayLike/*, mapFn, thisArg */) {
        // 1. Let C be the this value.
        var C = this;
  
        // 2. Let items be ToObject(arrayLike).
        var items = Object(arrayLike);
  
        // 3. ReturnIfAbrupt(items).
        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined');
        }
  
        // 4. If mapfn is undefined, then let mapping be false.
        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;
        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          }
  
          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 2) {
            T = arguments[2];
          }
        }
  
        // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).
        var len = toLength(items.length);
  
        // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method 
        // of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).
        var A = isCallable(C) ? Object(new C(len)) : new Array(len);
  
        // 16. Let k be 0.
        var k = 0;
        // 17. Repeat, while k < len… (also steps a - h)
        var kValue;
        while (k < len) {
          kValue = items[k];
          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
          k += 1;
        }
        // 18. Let putStatus be Put(A, "length", len, true).
        A.length = len;
        // 20. Return A.
        return A;
      };
    }());
  }


jQuery( document ).ready(function() {
    var scenes = Array.from(document.querySelectorAll('[data-scene="scene"]'));
    scenes.map(scene => {new Parallax(scene, {
            pointerEvents: true,
            relativeInput: true,
        });
    })

    let tl = new TimelineMax();

    tl
    .set('#site-logo',{left:'-12rem'})
    .set('#toggleMenu', {right:'-6rem'})
    .set('.header__circle--primary', {left:'-32.25rem'})
    .set('.header__circle--accent', {top:'-67.75rem'})
    .set('.header__circle--dark', {top:'-188.875rem'})
    .to('.preloader-wrap', 0.6, {opacity:0})
    .to('.header__circle--accent', 0.6, {top:'-57.75rem', ease: Power2.easeOut, delay: 0.4})
    .to('.header__circle--dark', 0.6, {top:'-178.875rem', ease: Power2.easeOut, delay: -0.5})
    .to('.header__circle--primary', 0.8, {left:'-12.25rem', ease: Power2.easeOut, delay:-0.7})
    .to('#site-logo', 0.6, {left:'2rem', ease: Power2.easeOut,  delay: -0.4})
    .to('#toggleMenu', 0.6, {right:'2rem',  ease: Power2.easeOut, delay:-0.6})
    .set('.preloader-wrap',{display:'none'})

});

$(".toggle-menu").click(function () {
    if(/MSIE \d|Trident.*rv:/.test(navigator.userAgent)){
        console.log('IE');
        document.querySelector('.toggle-menu').classList.toggle('is-active');
        document.querySelector('.header-nav').classList.toggle('is-active');
    }else{
    $(".toggle-menu,.header-nav").toggleClass("is-active");
    }
});