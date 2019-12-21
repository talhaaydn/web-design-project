// Başladı - W3Schools'tan alındı. 
// https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp
function collapseNavbar() {
    var navigationBar = document.getElementById("navigation-bar");
    if (navigationBar.className === "navbar") {
        navigationBar.className += " responsive";
    } else {
        navigationBar.className = "navbar";
    }
}  
// Bitti - W3Schools'tan alındı. 

// Başladı - W3Schools'tan alındı. 
// https://www.w3schools.com/howto/howto_js_slideshow.asp
if (document.getElementsByClassName("carousel").length > 0) {
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("carousel");
        if (n > slides.length) 
            slideIndex = 1;
        if (n < 1) 
            slideIndex = slides.length;
            
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
    }
}
// Bitti - W3Schools'tan alındı. 

// Başladı - W3Schools'tan alındı. 
// https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
var topButton = document.getElementById("goToTopButton");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}
function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// Bitti - W3Schools'tan alındı. 

if(video = document.getElementById('video')) {
    function playVideo() { 
        video.play(); 
    } 

    function pauseVideo() { 
        video.pause(); 
    }

    function rewind() {
        video.currentTime -= 5;
    }

    function fastForward() {
        video.currentTime += 5;
    }    
}



