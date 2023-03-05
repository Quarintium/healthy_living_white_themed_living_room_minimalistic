const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav_btn')
const navBtnImg = document.querySelector('#nav_btn_img')

navBtn.onclick = () => {
    if (nav.classList.toggle('open')){
        navBtnImg.src = "./img/icons/NAV_CLOSE.svg";
        navBtnImg.alt = "X";
    }else{
        navBtnImg.src = "./img/icons/NAV_OPEN.svg";
        navBtnImg.alt = "=";
    }
}