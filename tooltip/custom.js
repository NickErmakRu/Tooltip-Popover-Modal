let btn = document.querySelector('button');

btn.addEventListener('mouseover', function() {
    
    var zam = btn.getAttribute('title');
    
    let container = document.querySelector('.container');   
    container.classList.toggle('active');   
    
    $("p.tooltip-msg").empty()
    $('<h3 class="zagolovok">'+zam+'</h3>').appendTo('.tooltip-msg');
    $('<p class="vnutText">'+'я получила заколовок и написала этот текст'+'</p>').appendTo('.tooltip-msg');
    $('<p class="vnutText2">'+'(и не сдвинулась с места)'+'</p>').appendTo('.tooltip-msg');
    
})


btn.addEventListener('mouseout', function() {
    
    let container = document.querySelector('.container');   
    container.classList.toggle('active');   
    
    $("p.tooltip-msg").empty()

})
