console.log('Loaded!');

var img = document.getElementById('qwe');
var marginLeft = 0;
function moveRight (){
   do{ marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
} while(marginLeft === 40);
}
img.onclick = function (){
    var interval = setInterval(moveRight , 50);
};

var button = document.getElementById("counter");
button.onclick = function(){
    
    
    
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};