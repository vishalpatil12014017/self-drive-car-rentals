var slides1 = document.querySelector('.promo1')
var slides2 = document.querySelector('.promo2')
var slides3 = document.querySelector('.promo3')

var slides_arr = [slides1, slides2, slides3]



var time = 2000;
var i = 0;

function changeImg() {
    slides3.style.display = "none"
    slides1.style.display = "none"
    slides2.style.display = "none"


    slides_arr[i].style.display = "block"
    if (i < slides_arr.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}
window.onload = changeImg;

document.getElementById('signup').addEventListener('click', function() {
    document.querySelector('.cont').style.display = "flex"
})

document.querySelector(".close").addEventListener("click", function() {
    document.querySelector('.cont').style.display = "none"
})