document.getElementById('menu-icon').onclick = () => {
    if (document.getElementById('nav').classList.contains('nav-show')) {
        document.getElementById('nav').classList.remove('nav-show');

        document.getElementById('menu-icon').classList.remove('nav-show');
    } else {
        document.getElementById('nav').classList.add('nav-show')
        document.getElementById('menu-icon').classList.add('nav-show');
    }
}

function showPage() {
    document.querySelector('.invisible').classList.add('visible');
    document.querySelector('.invisible').classList.remove('invisible');
}