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
});
