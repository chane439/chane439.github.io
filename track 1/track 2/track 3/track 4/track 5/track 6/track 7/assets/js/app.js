$('.nav-item').click(function(){
    var button_name = $(this).data('button');
    
    $ ('.about-text').removeClass('active');  
    $ ('.nav-item').removeClass('active');  
    $('.content').attr('class','column content');
    $(this).addClass('active'); 
    $('.content').addClass(button_name);

});