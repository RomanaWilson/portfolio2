bottommenu_content_height = "34rem";


// bottom menu animation
$(function() {
    $('#bottommenu_toggle').click(
    function(){
        if ($('#bottommenu').get(0).style.marginBottom == bottommenu_content_height) {
        $('#bottommenu').stop().animate({'marginBottom':'0px'}, 300);
        } else {
        $('#bottommenu').stop().animate({'marginBottom':bottommenu_content_height}, 500);
        }
    }
    );
});


// Button Animation

var animate_buttons = (function(){
    var buttons = document.querySelectorAll('.animated-button');
    buttons.forEach(button => {

        // Scroll
        window.addEventListener("scroll", function() {
            var rect = button.getBoundingClientRect();
            var run = false;
            // console.log(rect.top);

            if (rect.bottom < document.documentElement.clientHeight && run == false) {
                // button.addEventListener('animationend', function(){
                //     button.classList.remove("animate"); 
                // });

                var speed = 2.25;

                switch (true) {
                    case button.classList.contains("relay-1"):
                        speed *= 2;
                        button.style.animationName = "animatedRelay1";
                        break;
                    case button.classList.contains("relay-2"):
                        speed *= 2;
                        button.style.animationName = "animatedRelay2";
                        break;
                    default:
                        button.style.animationName = "animatedBackground";
                } 
                button.style.animationDuration = speed + "s";
                button.classList.add("animated");
                run = true;
            }

        }, false);
    });
})();




// Slider
carousel = (function(){
    var box = document.querySelector('.prototype');
    var slider = box.querySelector('.slider');
    var next = box.querySelector('.next');
    var prev = box.querySelector('.previous');
    var items = box.querySelectorAll('.slider li');
    var counter = 0;
    var amount = items.length;
    var current = items[0];

    box.classList.add('active');

    function navigate(direction) {
        current.classList.remove('current');
        counter = counter + direction;
        if (direction === -1 && counter < 0) { 
            counter = amount - 1; 
        }
        if (direction === 1 && !items[counter]) { 
            counter = 0;
        }
        current = items[counter];
        current.classList.add('current');
    }

    var xDown = null;                                                        

    function getTouches(ev) {
        return ev.touches ||             // browser API
                ev.originalEvent.touches; // jQuery
    }   

    function handleTouchStart(ev) {
        const firstTouch = getTouches(ev)[0];                                      
        xDown = firstTouch.clientX;                                      
    };   

    function handleTouchMove(ev) {
        if ( ! xDown ) {
            return;
        }

        var xUp = ev.touches[0].clientX;                                    
        var xDiff = xDown - xUp;

        if ( xDiff > 0 ) {
            navigate(-1);
        } else {
            navigate(1);
        }                       
        
        /* reset values */
        xDown = null;
    };                                             

    next.addEventListener('click', function() {
        navigate(1);
    });
    prev.addEventListener('click', function() {
        navigate(-1);
    });
    navigate(0);
    slider.addEventListener('touchstart', handleTouchStart, false);
    slider.addEventListener('touchmove', handleTouchMove, false);
    
})();

// Browser Version
check_browser = (function(){

    browser = function() {
        var ua=navigator.userAgent,tem,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || []; 
        if(/trident/i.test(M[1])){
            tem=/\brv[ :]+(\d+)/g.exec(ua) || []; 
            return {name:'IE',version:(tem[1]||'')};
            }   
        if(M[1]==='Chrome'){
            tem=ua.match(/\bOPR|Edge\/(\d+)/)
            if(tem!=null)   {return {name:'Opera', version:tem[1]};}
            }   
        M=M[2]? [M[1], M[2]]: [navigator.appName, navigator.appVersion, '-?'];
        if((tem=ua.match(/version\/(\d+)/i))!=null) {M.splice(1,1,tem[1]);}
        return {
        name: M[0],
        version: M[1]
        };
    }

    switch (browser.name) {
        case "Firefox":
            if (browser.version > 42) {
                break;
            }
    
        default:
            location.replace("https://www.w3schools.com");
    }

})();