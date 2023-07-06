const toggle = (popupID) => {
    let blur = document.getElementById('main_versatile');
    blur.classList.toggle('active');
    let popup = document.getElementById(popupID);
    popup.classList.toggle('active');
};
