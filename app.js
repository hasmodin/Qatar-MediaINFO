let sideBar = document.querySelector(".sidebar");
let menuBtn = document.querySelector('.menu-btn');

let closeBtn = document.querySelector(".close-sidebar");

const showSideBar = () => {
    menuBtn.addEventListener('click', () => {
       
        sideBar.style.display = 'flex';
    })
}

showSideBar();


const closeSideBar = () => {
    closeBtn.addEventListener('click', () => {
        
        sideBar.style.display = 'none';
    })
}


closeSideBar();


let favoriteBtn = document.querySelector(".fav-btn");

let showFavBtn = document.querySelector(".showfavbtn");

const showFavoriteBtn = () => {

    favoriteBtn.addEventListener('mouseover', () => {
        
        showFavBtn.style.display = "block";
    })
}

showFavoriteBtn();

const closeFavBtn = () => {
    favoriteBtn.addEventListener("mouseout", () => {
        showFavBtn.style.display = "none";
    })
}

closeFavBtn();


