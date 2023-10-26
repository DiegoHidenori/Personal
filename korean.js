const toggle = (popupID) => {
    let blur = document.getElementById('main_versatile');
    blur.classList.toggle('active');
    let popup = document.getElementById(popupID);
    popup.classList.toggle('active');
};
const main_visibility = (selection) => {
    let selectionVisibility = document.getElementById(selection);
    if (selectionVisibility.style.visibility === "hidden"){
        selectionVisibility.style.visibility = "visible";
    }
    else {
        selectionVisibility.style.visibility = "hidden";
    }
};
