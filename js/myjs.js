
            
            //Dropdown
           $(".dropbtn").click(function(){
               if($(".dropdown-content").hasClass("nodisplay")){
                   $(".dropdown-content").removeClass("nodisplay");
                   $(".dropdown-content").addClass("blockdisplay");
               }else{
                   $(".dropdown-content").removeClass("blockdisplay");
                   $(".dropdown-content").addClass("nodisplay");
               }
            });
            
            var dreher = 0;
            
            //Scroll 1
            $(".scroll1").click(function(){
                $('html, body').animate({
                    scrollTop: $(".firstitem").offset().top
                }, 1000);
                
                $("#blauesquadrat").css("transform", "rotate(0deg)");
            });
                    
            //Scroll 2
            $(".scroll2, #button1").click(function(){
                $('html, body').animate({
                    scrollTop: $("#hintergrund2").offset().top
                }, 1000);
                
                $("#blauesquadrat").css("transform", "rotate(360deg)");
                
                $("#hintergrund2").scrollTop(0);
            });
            
            
            //Scroll 3
            $(".scroll3").click(function(){
                $('html, body').animate({
                    scrollTop: $(".third").offset().top
                }, 1000);
                
                $("#blauesquadrat").css("transform", "rotate(720deg)");
            });
            
            
            //Scroll 4
            $(".scroll4, .fas fa-envelope").click(function(){
                $('html, body').animate({
                    scrollTop: $("#hintergrund4").offset().top
                }, 1000);
                
                $("#blauesquadrat").css("transform", "rotate(1080deg)");
            });
            
            /*Scroll 5
            $(".scroll5").click(function(){
                $('html, body').animate({
                    scrollTop: $("#hintergrund5").offset().top
                }, 1000);
                
                $("#blauesquadrat").css("transform", "rotate(1440deg)");
            });
            */
            
            //Blaues Quadratz dreht sich auf Click - macht dann aber nicht immer Sinn! deshabl deaktiviert
            /*document.getElementById("blauesquadrat").onclick = function() {
                document.getElementById("blauesquadrat").style.transform = "rotate(360deg)";
            }*/
            
            
            //ScrolUP und ScrollDown implementieren
            
            
            
            /*Obere Leiste kleiner und größer bei Scroll machen 
            
            $(window).scroll(function(){
                if(this.scrollY < 100){
                    $("#obereleiste").css({"height":"14%","background-color":"white"});
                }else {
                    $("#obereleiste").css({"height":"12%","background-color":"#c7e4ff"});
                }
            });
           
            */
            
            
            //Kleiner Zoom-In
            $(".container-l").hover(function(){
               if($(this).hasClass("zoom")){
                   $(this).removeClass("zoom");
               }else{
                   $(this).addClass("zoom");
               }
            });
            
            //Funktion, benutzbar, falls etwas in Sichtweite kommt
            (function() {

              'use strict';

              // define variables
              var items = document.querySelectorAll(".timeline li");

              // check if an element is in viewport
              // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
              function isElementInViewport(el) {
                var rect = el.getBoundingClientRect();
                return (
                  rect.top >= 0 &&
                  rect.left >= 0 &&
                  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
              }

              function callbackFunc() {
                for (var i = 0; i < items.length; i++) {
                  if (isElementInViewport(items[i])) {
                    items[i].classList.add("in-view");
                  }
                }
              }

              // listen for events
              window.addEventListener("load", callbackFunc);
              window.addEventListener("resize", callbackFunc);
              window.addEventListener("scroll", callbackFunc);

            })();
            
            
            //Come2Owl
            $(document).ready(function(){
              $(".owl-carousel").owlCarousel();
            });
            
            
            $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                center:true,
                dots:true,
                lazyLoad:false,
                autoplay:false,
                autoplayTimeout:5000,
                smartSpeed: 2500,
                autoplayHoverPause:true,
                items:1,
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            });
            
            
       