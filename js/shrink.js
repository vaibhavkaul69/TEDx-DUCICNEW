window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar-top").style.padding = "15px 10px";

  } 
}