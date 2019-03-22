$(document).ready(function () {

  AOS.init(); // Initialize Animation On Scroll

  new WOW().init(); //  Initialize wow animation

  var clipboard = new ClipboardJS('.copy'); // Initialize ClipboardJS
  clipboard.on('success', function(e) {
    $('#copy-hint').attr('aria-label', 'Copied'); // Hint changed from 'Copy to Clipboard' to 'Copied.'
    setTimeout(showCopy, 500);
    e.clearSelection();
  });

  showCopy = () => {
    $('#copy-hint').attr('aria-label', 'Copy');
  }


  // Burger icon onClick
  $('#burger-icon').click(function () {

    // Scrolling is prohibited when sidenav is displayed
    if ($('body').css('overflow') != 'hidden') {
      $('body').css('overflow', 'hidden');
    } else if ($('body').css('overflow') != 'initial') {
      $('body').css("overflow", "initial");
    }

    // Animation for burger icon
    $('#bar-1').toggleClass('transform-bar-1');
    $('#bar-2').toggleClass('transform-bar-2');
    $('#bar-3').toggleClass('transform-bar-3');


    // Show or Hide sidenav
    var toggleWidth = "";
    if ( $("#sidenav").width() != 0 ) {
      toggleWidth = "0px"
      $("#sidenav a").css({ opacity: 0 });
    } else {
      toggleWidth = "100%"
      $("#sidenav a").css({ opacity: 1 });
    }
    
    $('#sidenav').animate({ width: toggleWidth }, 100);

  });


  // SideNav link onClick
  $("#sidenav-home, #sidenav-about-me, #sidenav-projects, #sidenav-contact-me").click(function () {
    // Hide sidenav
    $('#sidenav').animate({ width: 0 }, 100);

    // Make the app scrollable again
    $('body').css({ "overflow": "initial" });

    // Transform back to the burger icon
    $('#bar-1').toggleClass('transform-bar-1');
    $('#bar-2').toggleClass('transform-bar-2');
    $('#bar-3').toggleClass('transform-bar-3');

  });


  // Burger icon on hover
  $("#burger-icon").hover( function() {
    $("#bar-1, #bar-2, #bar-3").toggleClass("burger-bar-hover");
  });


  // Particles animation
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 20,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#74819a"
      },
      "shape": {
        "type": "circle"
      },
      "opacity": {
        "value": 0.7,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 5,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#74819a",
        "opacity": 1,
        "width": 0.3
      },
      "move": {
        "enable": true,
        "speed": 0.3,
        "direction": "none",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1202.559045649142
        }
      }
    },
    "interactivity": {
      "detect_on": "window",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 300,
          "duration": 10
        }
      }
    },
    "retina_detect": true
  });
  
});