var icon = document.getElementById('skills-img');

icon.addEventListener('mouseenter',runEvent);
icon.addEventListener('mouseleave',runEvent);

function runEvent(e){
    console.log('Event Type: '+e.type);

    if(e.type == 'mouseenter'){
        icon.style.boxShadow = "10px 20px 30px yellow";
    }
    else{
        icon.style.boxShadow = "";
    }

}