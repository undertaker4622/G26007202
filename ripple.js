$(document).ready(function() {
    $(".container").on("mousemove", function(e) {
        let ripple = $("<div class='ripple-effect'></div>");
        $(this).append(ripple);
        
        ripple.css({
            top: e.clientY - $(this).offset().top,
            left: e.clientX - $(this).offset().left
        });
        
        setTimeout(function() {
            ripple.remove();
        }, 1000);
    });
});