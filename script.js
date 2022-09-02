//enter page transition
function showPage() {
    document.querySelector('.invisible').classList.add('visible');
    document.querySelector('.invisible').classList.remove('invisible');
    document.querySelectorAll('body')[0].setAttribute('style', 'background-image: linear-gradient\(' + sessionStorage.getItem('color1') + ',' + sessionStorage.getItem('color2') + '\)');
    document.querySelectorAll('#projects-body')[0].setAttribute('style', 'background-image: linear-gradient\(' + sessionStorage.getItem('color1') + ',' + sessionStorage.getItem('color2') + ',' + sessionStorage.getItem('color1') + '\) !important');
}

//exit page transition  
function leavePage(url) {
    document.querySelector('.visible').classList.add('invisible');
    document.querySelector('.visible').classList.remove('visible');
    setTimeout(() => { window.location.replace(url) }, 1000);
}


//menu toggle
document.getElementById('menu-icon').onclick = () => {
    if (document.getElementById('nav').classList.contains('nav-show')) {
        document.getElementById('nav').classList.remove('nav-show');
        document.getElementById('menu-icon').classList.remove('nav-show');
    } else {
        document.getElementById('nav').classList.add('nav-show')
        document.getElementById('menu-icon').classList.add('nav-show');
    }
};

//background change
let newGradients = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    gradients = [];
    colorHex = "#";

    //first color
    for (let i = 0; i < 6; i++) {
        //letter or num
        let randNum = Math.floor(Math.random() * 2) + 1;

        if (randNum == 1) { //add random letter
            colorHex = colorHex + letters[Math.floor(Math.random() * 5)]
        } else { //add random number
            let newrand = Math.floor(Math.random() * 9) + 1;
            console.log(newrand);
            colorHex = colorHex + newrand;
        }
        // console.log(colorHex);
    }
    sessionStorage.setItem('color1', colorHex)
    colorHex = "#";


    //second color
    for (let i = 0; i < 6; i++) {
        //letter or num
        let randNum = Math.floor(Math.random() * 2) + 1;

        if (randNum == 1) { //add random letter
            colorHex = colorHex + letters[Math.floor(Math.random() * 5)]
        } else { //add random number
            let newrand = Math.floor(Math.random() * 9) + 1;
            console.log(newrand);
            colorHex = colorHex + newrand;
        }
        // console.log(colorHex)
    }
    gradients.push(colorHex);
    sessionStorage.setItem('color2', colorHex)
        // return colorHex;
}


//background change
if (document.getElementsByTagName('body')[0].id == "home-body") {
    document.querySelectorAll('#home-content')[0].onclick = () => {
        newGradients();
        document.querySelectorAll('body')[0].setAttribute('style', 'background-image: linear-gradient\(' + sessionStorage.getItem('color1') + ',' + sessionStorage.getItem('color2') + '\)');
    }
}

//projects page details toggle
function showDetails(el, carousel, link, img) {
    console.log(el)
    console.log(carousel)
    console.log(link)
    console.log(img)

    let popup = document.querySelector('.project-details-wrapper');

    //get elements from card
    let title = el.querySelector('.desc h3').innerText;
    let text = el.querySelector('.desc p').innerText;
    let numTags = el.querySelector('.tag-wrapper').children.length;

    //set elements
    popup.querySelector('.desc h3').innerText = title;
    popup.querySelector('.desc p').innerText = text;
    popup.querySelector('img').setAttribute('src', img)
    if (link != '') {
        popup.querySelector('.visit-button').setAttribute('style', "display:block;");
        popup.querySelector('.visit-button').setAttribute('href', link)
    } else {
        popup.querySelector('.visit-button').setAttribute('style', "display:none;");
    }

    //show popup
    popup.setAttribute('style', 'display: block;')

    //tags
    popup.querySelector('.tag-wrapper').innerHTML = "";
    let tagArr = Array.from(el.querySelector('.tag-wrapper').children);
    tagArr.forEach((t) => {
        popup.querySelector('.tag-wrapper').innerHTML = popup.querySelector('.tag-wrapper').innerHTML + t.outerHTML;
    })


    // set if carousel needed
    if (carousel) {
        popup.querySelectorAll('.carousel span').forEach(e => e.setAttribute('style', 'display:block;'))
    } else {
        popup.querySelectorAll('.carousel span').forEach(e => e.setAttribute('style', 'display:none;'))
    }

}

//close project details popup
function closePopup() {
    document.querySelector('.project-details-wrapper').setAttribute('style', 'display: none;')
}

//total images in carousel (for portfolio)
const portfolioTotal = 6;

function nextImg(projName) {
    let total;
    //get image number from img source
    let num = Number(document.querySelector('.project-details-wrapper .proj-img').getAttribute('src').split('/').slice(-1)[0].split('.')[0]);
    if (projName == 'portfolio') {
        total = portfolioTotal;
    } //add other cases for other projects

    //setting new image
    if (num < total) {
        document.querySelector('.project-details-wrapper .proj-img').setAttribute('src', 'img/portfolio/' + (num + 1) + '.png');
    } else {
        document.querySelector('.project-details-wrapper .proj-img').setAttribute('src', 'img/portfolio/1.png');
    }
}

function prevImg(projName) {
    let total;
    //get image number from img source
    let num = Number(document.querySelector('.project-details-wrapper .proj-img').getAttribute('src').split('/').slice(-1)[0].split('.')[0]);
    if (projName == 'portfolio') {
        total = portfolioTotal;
    } //add other cases for other projects

    //setting new image
    if (num > 1) {
        document.querySelector('.project-details-wrapper .proj-img').setAttribute('src', 'img/portfolio/' + (num - 1) + '.png');
    } else {
        document.querySelector('.project-details-wrapper .proj-img').setAttribute('src', '/img/portfolio/' + total + '.png');
    }
}