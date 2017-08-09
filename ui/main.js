console.log('Loaded!');

var img = document.getElementById('qwe');
var marginLeft = 0;
function moveRight (){
    do {  marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
    }
    while(marginLeft == 800 + 'px' );
}
img.onclick = function (){
    var interval = setInterval(moveRight , 50);
};
