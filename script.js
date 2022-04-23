gsap.registerPlugin(ScrollTrigger);

const images = gsap.utils.toArray('img');
const loader = document.querySelector('.loader--text');
const updateProgress = (instance) =>
loader.textContent = `${Math.round(instance.progressedCount * 100 / images.length)}%`;

const showDemo = () => {
  document.body.style.overflow = 'auto';
  document.scrollingElement.scrollTo(0, 0);
  gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

  gsap.utils.toArray('section').forEach((section, index) => {
    const w = section.querySelector('.wrapper');
    const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
    gsap.fromTo(w, { x }, {
      x: xEnd,
      scrollTrigger: {
        trigger: section,
        scrub: 0.5 } });


  });
};

imagesLoaded(images).on('progress', updateProgress).on('always', showDemo);





(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){

  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),

  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)

  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');



  ga('create', 'UA-46156385-1', 'cssscript.com');

  ga('send', 'pageview');


  // --- Config --- //
var purecookieTitle = "Cookies."; // Title
var purecookieDesc = "By using this website, you automatically accept that we use cookies."; // Description
var purecookieLink = '<a href="https://www.cssscript.com/privacy-policy/" target="_blank">What for?</a>'; // Cookiepolicy link
var purecookieButton = "Understood"; // Button text
// ---        --- //


function pureFadeIn(elem, display){
  var el = document.getElementById(elem);
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .02) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
};
function pureFadeOut(elem){
  var el = document.getElementById(elem);
  el.style.opacity = 1;

  (function fade() {
    if ((el.style.opacity -= .02) < 0) {
      el.style.display = "none";
    } else {
      requestAnimationFrame(fade);
    }
  })();
};

function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name+'=; Max-Age=-99999999;';
}

function cookieConsent() {
  if (!getCookie('purecookieDismiss')) {
    document.body.innerHTML += '<div class="cookieConsentContainer" id="cookieConsentContainer"><div class="cookieTitle"><a>' + purecookieTitle + '</a></div><div class="cookieDesc"><p>' + purecookieDesc + ' ' + purecookieLink + '</p></div><div class="cookieButton"><a onClick="purecookieDismiss();">' + purecookieButton + '</a></div></div>';
	pureFadeIn("cookieConsentContainer");
  }
}

function purecookieDismiss() {
  setCookie('purecookieDismiss','1',7);
  pureFadeOut("cookieConsentContainer");
}

window.onload = function() { cookieConsent(); };

