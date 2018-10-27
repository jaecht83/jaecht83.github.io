//this is for the carousel.
var slideIndex = 0;
showSlides();

	function showSlides() {
	    var i;
	    var slides = document.getElementsByClassName("mySlides");
	    for (i = 0; i < slides.length; i++) {
	        slides[i].style.display = "none"; 
	    }
	    slideIndex++;
	    if (slideIndex > slides.length) {slideIndex = 1} 
	    slides[slideIndex-1].style.display = "block"; 
	    setTimeout(showSlides, 3000); // Change image every 2 seconds
		}

//Add a button in your navigation that will toggle the visibility of your actual site navigation.

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/* The "responsive" class is added to the topnav with JavaScript when the user clicks on the icon. This class makes the topnav look good on small screens (display the links vertically instead of horizontally) */
	function myFunction() {
	    var x = document.getElementById("myTopnav");
	    if (x.className === "topnav") {
	        x.className += " responsive";
	    } else {
	        x.className = "topnav";
	    }
	}

//Add a button and collapsible description to your portfolio projects so when the user clicks the button the descriptions expand and collapse.

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

//Create a modal box that pops up with your bio information whenever a button or link is pressed.



