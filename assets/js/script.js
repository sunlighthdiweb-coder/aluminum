window.onload = function() {
    
    // I-verify kung naka-load ang jQuery bago mag-execute
    if (typeof jQuery == 'undefined') {
        console.error("jQuery is not loaded! Load More function cannot run.");
        return; // Hihinto ang script kung walang jQuery
    }

    // Gagamit na tayo ng jQuery dito
    (function ($) {
        'use strict';
        
        // 1. I-RESET ANG VIEW: Itago ulit ang lahat ng items na may class na 'hidden-product'
        $('.hidden-product').hide();
        
        var itemsToShowPerClick = 12; // 12 items (6 sa taas, 6 sa baba)
        
        // 2. LOAD MORE LOGIC
        $("#loadMoreButton").on('click', function(e) {
            e.preventDefault(); 
            
            // Ipakita ang susunod na 12 na nakatago
            $('.hidden-product:hidden').slice(0, itemsToShowPerClick).slideDown(500, function() {
                
              
                if (typeof WOW !== 'undefined' && $(window).width() > 767) {
                    new WOW().init(); 
                }
            }); 
            
            // 3. Titingnan kung wala nang natira
            if ($('.hidden-product:hidden').length === 0) {
                $("#loadMoreButton").fadeOut('slow'); 
            }
        });

    })(jQuery);
};