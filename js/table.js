function changeFirstLineWidth() {
    const width_elem = document.getElementById("bookmarks");
    const elem = document.getElementById("desktop-bookmarks");
    const elem_mob = document.getElementById("mobile-bookmarks");
    const boundingRect = width_elem.getBoundingClientRect();
    const width_of_elem = boundingRect.width;
    elem.style.width = width_of_elem;
    elem_mob.style.width = width_of_elem;
}

window.onresize = changeFirstLineWidth;

let chosen = ".first-line__reading";

document.getElementById("readed").onclick = function() { 
    myFuncReaded(".first-line__readed"); 
};

document.getElementById("reading").onclick = function() { 
    myFuncReaded(".first-line__reading"); 
};

document.getElementById("plan").onclick = function() { 
    myFuncReaded(".first-line__plan"); 
};

document.getElementById("favorites").onclick = function() { 
    myFuncReaded(".first-line__favorites"); 
};

function myFuncReaded(element) {
    document.querySelector(chosen).classList.remove("first-line__active");
    document.querySelector(element).classList.add("first-line__active"); 
    chosen = element;
}