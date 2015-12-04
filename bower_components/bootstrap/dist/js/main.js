var btn_blue = document.querySelector('.btn-primary-outline');
btn_blue.addEventListener('click', loadBlueImage);

function loadBlueImage() {

    var img = document.querySelectorAll('.img-rounded');
    for (var i = 0; i < 3; i++) {
        img[i].setAttribute('src', 'img/image-blue.svg');
    }
}

var btn_gray = document.querySelector('.btn-secondary-outline');
btn_gray.addEventListener('click', loadGrayImage);

function loadGrayImage() {

    var img = document.querySelectorAll('.img-rounded');
    for (var i = 0; i < 3; i++) {
        img[i].setAttribute('src', 'img/image.svg');
    }
}

var btn_green = document.querySelector('.btn-success-outline');
btn_green.addEventListener('click', loadGreenImage);

function loadGreenImage() {

    var img = document.querySelectorAll('.img-rounded');
    for (var i = 0; i < 3; i++) {
        img[i].setAttribute('src', 'img/image-green.svg');
    }
}

var btn_orange = document.querySelector('.btn-warning-outline');
btn_orange.addEventListener('click', loadOrangeImage);

function loadOrangeImage() {

    var img = document.querySelectorAll('.img-rounded');
    for (var i = 0; i < 3; i++) {
        img[i].setAttribute('src', 'img/image-orange.svg');
    }
}

var btn_red = document.querySelector('.btn-danger-outline');
btn_red.addEventListener('click', loadRedImage);

function loadRedImage() {

    var img = document.querySelectorAll('.img-rounded');
    for (var i = 0; i < 3; i++) {
        img[i].setAttribute('src', 'img/image-red.svg');
    }
}