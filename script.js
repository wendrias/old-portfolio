//enter page transition
function showPage() {
    document.querySelector('.invisible').classList.add('visible');
    document.querySelector('.invisible').classList.remove('invisible');

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
let newGradient = () => {
    const letters = ['A', 'B', 'C', 'D', 'E', 'F'];
    let colorHex = "#";

    //letter or num
    for (let i = 0; i < 6; i++) {
        let randNum = Math.floor(Math.random() * 2) + 1;
        console.log(randNum);

        if (randNum == 1) { //add random letter
            colorHex = colorHex + letters[Math.floor(Math.random() * 5)]
        } else { //add random number
            let newrand = Math.floor(Math.random() * 9) + 1;
            console.log(newrand);
            colorHex = colorHex + newrand;
        }
        console.log(colorHex)
    }
    return colorHex;
}

if (document.getElementsByTagName('body')[0].id == "home-body") {
    document.querySelectorAll('#home-content')[0].onclick = () => {
        document.querySelectorAll('body')[0].setAttribute('style', 'background-image: linear-gradient\(' + newGradient() + ',' + newGradient() + '\)');
    }
}