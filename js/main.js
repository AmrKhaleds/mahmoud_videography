$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
            $('body').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
            $('body').removeClass("sticky");
        }
    });


    // toggle menu/navbar script 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});
