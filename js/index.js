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

////Navigation region
let aTags = document.querySelectorAll("nav a");

aTags[0].textContent = siteContent["nav"]["nav-item-1"]; //services
aTags[1].textContent = siteContent["nav"]["nav-item-2"]; //product
aTags[2].textContent = siteContent["nav"]["nav-item-3"]; //Vision
aTags[3].textContent = siteContent["nav"]["nav-item-4"]; //Features
aTags[4].textContent = siteContent["nav"]["nav-item-5"]; //About
aTags[5].textContent = siteContent["nav"]["nav-item-6"]; //Contact


////Images section
//Circle Logo image
let ctaImage = document.querySelector("#cta-img");
ctaImage.setAttribute('src', siteContent["cta"]["img-src"]);

//Main rectangle image
let mainImg = document.querySelector("#middle-img");
mainImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

////CTA TOP section

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let ctaMain = document.querySelector(".cta-text h1");
ctaMain.innerHTML = siteContent["cta"]["h1"];
//USE innerHTML to account for the <br> tag in the Text


////Content on TOP

let textTop = document.querySelectorAll(".top-content .text-content");

textTop[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
textTop[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
textTop[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
textTop[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

////Bottom content
let textBottom = document.querySelectorAll(".bottom-content .text-content");

textBottom[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
textBottom[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];
textBottom[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
textBottom[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
textBottom[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
textBottom[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];


////Contact Section
//h4 header
let mainContact = document.querySelector(".contact h4");
mainContact.textContent = siteContent["contact"]["contact-h4"];


//p section // Select All
let contentContact = document.querySelectorAll(".contact p");

contentContact[0].textContent = siteContent["contact"]["address"];
contentContact[1].textContent = siteContent["contact"]["phone"];
contentContact[2].textContent = siteContent["contact"]["email"];

////Footer Section

let footer = document.querySelector("footer");
footer.textContent = siteContent["footer"]["copyright"];

//Change Styles of Text

aTags[0].style.color = "green";
aTags[1].style.color = "green";
aTags[2].style.color = "green";
aTags[3].style.color = "green";
aTags[4].style.color = "green";
aTags[5].style.color = "green";


//Changing the HTML

let nav = document.querySelector("nav"); //here, we select the container which will hold the new item

let appendNew = document.createElement("a"); // here we make a the new element for that will be added
appendNew.textContent = "AppendSection";
appendNew.style.color = "blue";
nav.appendChild(appendNew);

let prependNew = document.createElement("a");
prependNew.textContent = "PrependSection";
prependNew.style.color = "red";
nav.prepend(prependNew);
