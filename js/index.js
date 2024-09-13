
$('.icon').click(function(){
    let width=$('.options').outerWidth()
    let navleft=$('.slideNav').offset().left
    if(navleft==0){
        $('.slideNav').css({left: `-${width}px`, Transition : 'left 1s'})
    }else{
        $('.slideNav').css({left: '0px', Transition : 'left 1s'}) 
    }
})

// <!----------------------       sliderdown       ---------------------->  

$('.one').click(function(){
    if ($(".content-f" ).is( ":hidden")) 
     {
        $( ".content-f" ).slideDown( "slow" );
        $( ".content-s" ).hide( "slow" );
        $( ".content-t" ).hide( "slow" );
        $( ".content-h" ).hide( "slow" );

      } else {
        $( ".content-f" ).slideUp( "slow" );
    }
})
$('.two').click(function(){
    if ($(".content-s" ).is( ":hidden")) 
     {
        $( ".content-s" ).slideDown( "slow" );
        $( ".content-f" ).hide( "slow" );
        $( ".content-t" ).hide( "slow" );
        $( ".content-h" ).hide( "slow" );

      } else {
        $( ".content-s" ).slideUp( "slow" );
    }
})
$('.three').click(function(){
    if ($(".content-t" ).is( ":hidden")) 
     {
        $( ".content-t" ).slideDown( "slow" );
        $( ".content-s" ).hide( "slow" );
        $( ".content-f" ).hide( "slow" );
        $( ".content-h" ).hide( "slow" );

      } else {
        $( ".content-t" ).slideUp( "slow" );
    }
})
$('.four').click(function(){
    if ($(".content-h" ).is( ":hidden")) 
     {
        $( ".content-h" ).slideDown( "slow" );
        $( ".content-s" ).hide( "slow" );
        $( ".content-t" ).hide( "slow" );
        $( ".content-f" ).hide( "slow" );

      } else {
        $( ".content-h" ).slideUp( "slow" );
    }
})

 
/* <!----------------------       counter          ---------------------->    */

$(document).ready(function() {
    var countDownDate = new Date("July 31, 2025 15:37:25").getTime();

    var x = setInterval(function() {

        var now = new Date().getTime();
        var distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(x);
            $("#countdown").html("EXPIRED");
        } else {
            // Calculate days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $("#countdown").html(days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
        }
    }, 1000);
});

// <!----------------------      JOIN US         ---------------------->  

$(document).ready(function() {
   
    $('#inputField').on('input', function() {
        var maxLength = 100;
        var currentLength = $(this).val().length;
        var charactersLeft = maxLength - currentLength;

        $('#charCount').text( charactersLeft  );
        

    });
});
