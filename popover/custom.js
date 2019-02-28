let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    
    var zam = btn.getAttribute('title');
    console.log(zam);
    
    let container = document.querySelector('.container');   
    container.classList.toggle('active');   
    
    $("p.popover-msg").empty()
    $('<h3 class="zagolovok">'+zam+'</h3>').appendTo('.popover-msg');
    $('<p class="vnutText">'+'я получила заколовок и написала этот текст'+'</p>').appendTo('.popover-msg');
    $('<p class="vnutText2">'+'(и не изменилась в размере)'+'</p>').appendTo('.popover-msg');
    
    $('#myBtn').addClass('btnClck');
})

