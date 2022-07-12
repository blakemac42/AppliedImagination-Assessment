$( document ).ready(function() {

    // EVENT SIZE SLIDER
    $(".slider")

    .slider({ 
    min: 0, 
    max: 700, 
    range: true, 
    values: [0, 700] 
    })
            
    .slider("pips", {
    rest: "label"
    })
            
    .slider("float");

    // INTERACTIVE BEHAVIOR

    $('.filter-btn').on('click', function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');
    });

    $('.hero-btn').on('click', function () {
        $('.hero-btn').removeClass('active');
        $(this).addClass('active');
    });

});
