document.getElementById('menubutton').addEventListener('click', function() {
				var nav = document.getElementById("mainnav");
				var style = window.getComputedStyle(nav); // to get the style from the stylesheet

				nav.classList.toggle('expand');
});
function dropdown(){
	var dropdownContent = document.getElementById("dropdown-content");
	dropdownContent.classList.toggle('flexdropdown');

}
window.onload = function(){
 setTimeout(function(){
   document.getElementById("ad").style.display = "block";
 }, 5000);
};
function closeDiv(){
	document.getElementById("ad").style.display = "none";
}
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}