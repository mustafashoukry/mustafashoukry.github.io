$(document).ready(function(){
  $(".menu li a").click(function(){
    $("#toggle").click();
  });
  
  /*changing active state between li*/

  $(function(){
      $('.header #nav a').filter(function(){return this.href==location.href}).parent().addClass("current").siblings().removeClass("current")
      $('.header #nav a').click(function(){
        $(this).parent().addClass("current").siblings().removeClass("current")	
      })
    })


  function myFunction(x) {
    if (x.matches) { // If media query matches
      $(".text p").html("I graduated from new Cairo academy as an electrical <br> power engineer with a general grade excellence and <br> I have an experience in web development since 2015.");
    }
    else{
      $(".text p").text("I graduated from new Cairo academy as an electrical power engineer with a general grade excellence and I have an experience in web development since 2015.");
    }
  }
  var x = window.matchMedia("(min-width:48em)")
  myFunction(x)
  x.addListener(myFunction)

  var y = new Date().getFullYear();
  document.getElementById("year").innerHTML = y;
  
  /* Scroll Nav*/

 // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
  
});
