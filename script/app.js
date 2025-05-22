$(document).ready(function(){
    let move_home_btn = function(){

        $('#my_name').css({
            'transform':'translateY(-500rem)',
            'transition':'all 5s ease'
        });

        $('#quotes').css({
            'opacity':0,
            'transition':'all 1s ease'
        });
      
        $('.view_all-container').css({
            'transform':'translateY(500rem)',
            'transition':'all 5s ease'
        });
        
    }

    $('.view_all-btn').click(function(event){ // Changed to function(event) to access 'this'
        event.preventDefault();
        $('.gallery-container').css({
            'transform':'translateX(-120%)' 
        });
        move_home_btn();
        
        // Store 'this' to use inside setTimeout
        var $this = $(this); 
        setTimeout(function() {
            window.location.href = $this.attr('href');
        }, 5000);
    })

    $('#contact').click(()=>{
        $('.social-icon').css({
            'opacity':1,
            'transform':'translateX(0)'
        });

        console.log(123);
    })
});