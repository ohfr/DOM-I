const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);


let nav = document.querySelectorAll('a');
nav.forEach((el, i)=> {
  el.textContent = siteContent['nav'][`nav-item-${i+1}`];
  el.style.color = 'green';
});

let mainNav = document.querySelector('nav');

let firstA = document.createElement('a');
firstA.setAttribute('href', '#');
firstA.textContent = 'Survey';
firstA.style.color = 'green';
mainNav.prepend(firstA);

let secondA = document.createElement('a');
secondA.setAttribute('href', '#');
secondA.textContent = 'Suggestions';
secondA.style.color = 'green';
mainNav.appendChild(secondA);



let mainImg = document.getElementById('cta-img');
mainImg.setAttribute('src', siteContent['cta']['img-src']);

let h1 = document.querySelector('h1');
h1.textContent = siteContent['cta']['h1'];

let button = document.querySelector('button');
button.textContent = siteContent['cta']['button'];

let h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent  = siteContent['main-content']['vision-h4'];
h4[5].textContent = siteContent['contact']['contact-h4']

let pTags = document.querySelectorAll('p');
pTags[0].textContent = siteContent['main-content']['features-content'];
pTags[1].textContent = siteContent['main-content']['about-content'];
pTags[2].textContent = siteContent['main-content']['services-content'];
pTags[3].textContent = siteContent['main-content']['product-content'];
pTags[4].textContent = siteContent['main-content']['vision-content'];
pTags[5].textContent = siteContent['contact']['address'];
pTags[6].textContent = siteContent['contact']['phone'];
pTags[7].textContent = siteContent['contact']['email'];
pTags[8].textContent = siteContent['footer']['copyright'];


let midImg = document.getElementById('middle-img');
midImg.setAttribute('src', siteContent['main-content']['middle-img-src']);







