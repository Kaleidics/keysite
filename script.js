//always start at the first image
let slideIndex = 1;

//display image at location slideIndex
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// function goPrev() {
//     document.getElementsByClassName("prev").addEventListener("click", plusSlides(-1));
// }

// function goNext() {
//     document.getElementsByClassName("next").addEventListener("click", plusSlides(1));
// }

// function triggerDotOne() {
//     document.getElementsByClassName("first").addEventListener("click", currentSlide(1));
// }

// function triggerDotTwo() {
//     document.getElementsByClassName("two").addEventListener("click", currentSlide(2));
// }

// function triggerDotThree() {
//     document.getElementsByClassName("three").addEventListener("click", currentSlide(3));
// }



function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    console.log('first',slides);
    let dots = document.getElementsByClassName("dot");
    console.log(dots);
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    console.log(slides[1], slideIndex);
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


