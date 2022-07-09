$( document ).ready(function() {
        
// EVENT SIZE SLIDER
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


// on change on every filter field 

// $("#event-search").on('input', function() {
//     let location = $(this).val();
//     console.log(location)
// })



// ajax interceptor 

// on change event, fire ajax (post request?), have that typed input set as a piece of data 

});
     