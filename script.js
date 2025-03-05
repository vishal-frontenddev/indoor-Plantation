let nav = document.querySelector(".bottom-header-middle")
let hamb = document.querySelector(".categories i")


let num = 0;

hamb.addEventListener ("click", () => {

    if (num == 0) {
        nav.style.top = 0
        num = 1
        hamb.setAttribute("class", "fa-solid fa-xmark") 
    }

    else {
        nav.style.top = "-100%"
        num = 0
        hamb.setAttribute("class", "fa-solid fa-bars") 
    }

})

