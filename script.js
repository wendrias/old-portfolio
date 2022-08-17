//enter page transition
function showPage() {
    document.querySelector('.invisible').classList.add('visible');
    document.querySelector('.invisible').classList.remove('invisible');
    document.querySelectorAll('body')[0].setAttribute('style', 'background-image: linear-gradient\(' + sessionStorage.getItem('color1') + ',' + sessionStorage.getItem('color2') + '\)');
    document.querySelectorAll('#projects-body')[0].setAttribute('style', 'background-image: linear-gradient\(' + sessionStorage.getItem('color1') + ',' + sessionStorage.getItem('color2') + ',' + sessionStorage.getItem('color1') + '\) !important');
    document.querySelectorAll('nav')[0].setAttribute('style', "background: " + sessionStorage.getItem('color1') + ";");
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
        document.querySelectorAll('nav')[0].setAttribute('style', "background: " + sessionStorage.getItem('color2') + "!important;");
    } else {
        document.getElementById('nav').classList.add('nav-show')
        document.getElementById('menu-icon').classList.add('nav-show');
        document.querySelectorAll('nav')[0].setAttribute('style', "background: " + sessionStorage.getItem('color1') + ";");
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

// function setBackground() {

// }

if (document.getElementsByTagName('body')[0].id == "home-body") {
    document.querySelectorAll('#home-content')[0].onclick = () => {
        newGradients();
        document.querySelectorAll('body')[0].setAttribute('style', 'background-image: linear-gradient\(' + sessionStorage.getItem('color1') + ',' + sessionStorage.getItem('color2') + '\)');
    }
}