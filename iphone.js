var bar = document.getElementById('bar'),
    active = document.getElementById('active'),
    colors = document.getElementById('colors'),
    image = document.getElementById('image'),
    header_bg = document.getElementById('header_bg'),
    setting = document.getElementById('setting'),
    bgscroll = document.getElementById('sec1');

bar.onclick = function (){
    active.classList.toggle('active');
    colors.classList.remove('colorsactive');
}    
setting.onclick = function(){
    colors.classList.toggle('colorsactive');
    active.classList.remove('active');
}

function fun(color,source){
image.setAttribute('src',source);
header_bg.style.backgroundColor = color;
};

window.ondblclick = function(){
    active.classList.remove('active');
    colors.classList.remove('colorsactive');
}
window.onscroll = function (){

    if(scrollY >= 300){
    bgscroll.style.opacity = '1';
    bgscroll.style.margin = '7rem 0rem';
}
}