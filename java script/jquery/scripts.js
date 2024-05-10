$(".dark-btn").click(
  function(){
    $(".box").toggleClass("dark");
    $("body").toggleClass("dark");
  }
);

$(".spin-btn").click(
  function(){
    $(".box").toggleClass("spin");
  }
);

$(".reveal-btn").click(
  function(){
    // $(".chair").addClass("reveal");
    $(".chair").css("display", "block");
    // $(".reveal-btn").css("display", "none");
    $(".reveal-btn").hide();
  }
);

$( function() {
  $( ".draggable" ).draggable({ 
    containment: ".container"
  });
} );

let slideIndex = 0;

$(document).ready(function() {
  showSlides();

  $('.prev').click(function() {
    moveSlide(-1);
  });

  $('.next').click(function() {
    moveSlide(1);
  });
});

function showSlides() {
  const slides = $('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  slides.hide();
  slides.eq(slideIndex).show();
}

function moveSlide(n) {
  slideIndex += n;
  showSlides();
}

// Automatically move slides
setInterval(function() {
  moveSlide(1);
}, 5000); // Adjust timing as needed

