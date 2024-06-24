let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// home page flip cards java script

function flipCard() {
  var card = document.getElementById('card');
  card.classList.toggle('flip');
}
function flipCard1() {
  var card = document.getElementById('card1');
  card.classList.toggle('flip');
}
function flipCard2() {
  var card = document.getElementById('card2');
  card.classList.toggle('flip');
}
function flipCard3() {
  var card = document.getElementById('card3');
  card.classList.toggle('flip');
}




// contact page javascript
// form javascript

