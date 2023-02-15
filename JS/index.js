
let content = document.getElementById('social');
let btn = document.getElementById('social_btn');


function show() {
    content.style.display = "block";

}

function hide() {
    content.style.display = "none";

}
btn.addEventListener('mouseover', show);
btn.addEventListener('click', hide);

