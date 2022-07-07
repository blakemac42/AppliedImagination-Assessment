$( document ).ready(function() {
        
// PRICE SLIDER
$(".slider")

.slider({ 
    min: 0, 
    max: 700, 
    range: true, 
    values: [20, 500] 
})
                    
.slider("pips", {
    rest: "label"
})
                    
.slider("float");



// EVENT INPUT BEHAVIOR

$('.filter-btn').on('click', function () {
    $('.filter-btn').removeClass('active');
    $(this).addClass('active');
});


});
     