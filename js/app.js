

let mouseCursor = document.querySelector('.cursor');

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}

// SELECT THE CARD DIV AND ADD AN EVENT LISTENER TO THEM
let project_card = document.querySelectorAll('.project-card');

project_card.forEach( div => {
    div.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow');
        
    });
    div.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow')
    });
}); 
