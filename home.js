var slideIndex = 0;

// Function to show the next slide
function showSlides() {
  var slides = document.getElementsByClassName("slide");
  var dots = document.getElementsByClassName("dot");

  // Hide all slides
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";

  // Update the dot
  dots[slideIndex].classList.add("active");

  // Increase the slide index
  slideIndex++;

  // If the slide index is greater than the number of slides,
  // reset it to 0
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }

  // Schedule the next slide to be shown after 2 seconds
  setTimeout(showSlides, 2000);
}

// Initialize the slideshow
showSlides();

// Click event handler for the dots
document.getElementsByClassName("dot").forEach(function(dot) {
  dot.onclick = function() {
    // Get the index of the dot that was clicked
    var index = dot.classList.indexOf("active");

    // Set the slide index to the index of the clicked dot
    slideIndex = index;

    // Show the slide at the specified index
    showSlides();
  };
});
