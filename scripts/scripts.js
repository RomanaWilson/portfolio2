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





