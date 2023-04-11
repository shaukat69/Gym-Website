
let toggleMenu = () => {
    let menuList = document.getElementById("menu-list");
    if(menuList.style.display === "block"){
        menuList.style.display = 'none'
        document.getElementById("xmark").style.display = "none"
        document.getElementById("bars").style.display = "block"
    }else{
        menuList.style.display = 'block'
        document.getElementById("xmark").style.display = "block"
        document.getElementById("bars").style.display = "none"
    }
}