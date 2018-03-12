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

    $('.view_all-btn').click(()=>{
        $('.gallery-container').css({
            'transform':'translateX(-120%)' 
        });
        move_home_btn();
    })

    $('#contact').click(()=>{
        $('.social-icon').css({
            'opacity':1
        });

        console.log(123);
    })
});