
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