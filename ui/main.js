console.log('Loaded!');
var marginLeft = 0;
var img = document.getElementById('qwe');
function moveRight (){
    var marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function (){
    var interval = setInterval(moveRight , 50);
};