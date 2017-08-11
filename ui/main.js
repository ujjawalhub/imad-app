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
var counter = 0;
var button = document.getElementById("counter");
button.onclick = function(){
    
    var req = new XMLHttpRequest();
    req.onreadystatechange = function (){
      if(req.readyState === XMLHttpRequest.DONE){
          if(req.Status === 200){
              var counter = req.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }  
    };
    
   req.open('GEt' , 'http://ujjawal2604.imad.hasura-app.io/counter' , true);
   req.send(null);
    
};