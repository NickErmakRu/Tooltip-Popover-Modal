let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    
    $('.okno').addClass('box');
    
//    $('body').addClass('color');
    
//    $('#myBtn').addClass('displayNone');
    
    $('.container').addClass('container-swap');
    
    $('.mymodal-content').removeClass('displayNone');
})




let closer = document.querySelector('.fas');

closer.addEventListener('click', function() {
    
    $('.mymodal-content').addClass('displayNone');
    $('.okno').removeClass('box');
    $('.container').removeClass('container-swap');
})

let closer2 = document.querySelector('.btnFooter');

closer2.addEventListener('click', function() {
    
    $('.mymodal-content').addClass('displayNone');
    $('.okno').removeClass('box');
    $('.container').removeClass('container-swap');
})


