
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


//Navigation background

let aTags = document.querySelectorAll("nav a");

//let aTags = document.querySelectorAll("nav a");

aTags[0].textContent = siteContent['nav']['nav-item-1'];
aTags[1].textContent = siteContent['nav']['nav-item-2'];
aTags[2].textContent = siteContent['nav']['nav-item-3'];
aTags[3].textContent = siteContent['nav']['nav-item-4'];
aTags[4].textContent = siteContent['nav']['nav-item-5'];
aTags[5].textContent = siteContent['nav']['nav-item-6'];

//CTA section
// let ctaImage = document.querySelector("#cta-img");
// ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

const ctaImg = document.getElementById('cta-img');
ctaImg.src = siteContent['cta']['img-src'];

const header = document.querySelector('.cta-text h1');
header.textContent = siteContent['cta']['h1'];

const button = document.querySelector('.cta-text button');
button.textContent = siteContent['cta']['button'];

//half page top Content Title
const textContentTop = document.querySelectorAll('.top-content h4');
textContentTop[0].textContent = siteContent['main-content']['features-h4'];
textContentTop[1].textContent = siteContent['main-content']['about-h4'];
//half page top Content Paragraph
const paragraphContentTop = document.querySelectorAll('.top-content p');
paragraphContentTop[0].textContent = siteContent['main-content']['features-content'];
paragraphContentTop[1].textContent = siteContent['main-content']['about-content'];

//Middle Image
const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

// let mainImg = document.querySelector("#middle-img");
// mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//half page bottom Content Title
const bottomText = document.querySelectorAll('.bottom-content h4')
bottomText[0].textContent = siteContent['main-content']['services-h4'];
bottomText[1].textContent = siteContent['main-content']['product-h4'];
bottomText[2].textContent = siteContent['main-content']['vision-h4'];
//half page bottom Content Paragraph
const bottomTextParagraph = document.querySelectorAll('.bottom-content p')
bottomTextParagraph[0].textContent = siteContent['main-content']['services-content'];
bottomTextParagraph[1].textContent = siteContent['main-content']['product-content'];
bottomTextParagraph[2].textContent = siteContent['main-content']['vision-content'];

// let textTop = document.querySelectorAll(".top-content .text-content");
// textTop[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
// textTop[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
// textTop[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
// textTop[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];



//Contact info
const contactMain = document.querySelector('.contact h4');
contactMain.textContent = siteContent['contact']['contact-h4'];

const contactMainParagraph = document.querySelectorAll('.contact p');
contactMainParagraph[0].textContent = siteContent['contact']['address'];
contactMainParagraph[1].textContent = siteContent['contact']['phone'];
contactMainParagraph[2].textContent = siteContent['contact']['email'];


//Created new Footer for testing added Footer with Append
const newFooter = document.createElement('footer');
newFooter.textContent = siteContent['footer']['copyright'];
const body = document.querySelector('body');
body.append(newFooter);

//Navigation to green
aTags.forEach((element) => {
  element.style.backgroundColor = 'darkgreen';
})

const navBar = document.querySelectorAll('nav');
navBar.forEach((element) => {
  element.style.backgroundColor = 'lightgreen';
})

//Prepend item
const newTitle = document.createElement('h1');
newTitle.textContent = 'Ali Sheikh';
newTitle.style.backgroundColor = 'blue';
newTitle.style.color = 'white';
newTitle.style.textAlign = 'center';
newTitle.style.fontSize = '2rem';
body.prepend(newTitle);

let nav = document.querySelector("nav"); //here, we select the container which will hold the new item

let appendNew = document.createElement("a"); // here we make a the new element for that will be added
appendNew.textContent = "Append Section";
appendNew.style.color = "blue";
nav.appendChild(appendNew);

let prependNew = document.createElement("a");
prependNew.textContent = "Prepend Section";
prependNew.style.color = "red";
nav.prepend(prependNew);
