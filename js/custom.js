           
               $('#slider2').owlCarousel({
                loop: true,
                smartSpeed: 2000,
                fluidSpeed: 500,
                margin: 10,
                // nav: true,
                autoplay: true,

                responsiveClass: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 2
                  }
                }
              })

//                $("#container").mousemove(function(e) {
//   parallaxIt(e, ".moving-img", -100);
//   parallaxIt(e, "img", -30);
// });

// function parallaxIt(e, target, movement) {
//   var $this = $("#container");
//   var relX = e.pageX - $this.offset().left;
//   var relY = e.pageY - $this.offset().top;

//   TweenMax.to(target, 1, {
//     x: (relX - $this.width() / 2) / $this.width() * movement,
//     y: (relY - $this.height() / 2) / $this.height() * movement
//   });
// }

            })
