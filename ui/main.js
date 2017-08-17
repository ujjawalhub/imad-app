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
          if(req.status === 200){
              var counter = req.responseText;
              var span = document.getElementById("count");
              span.innerHTML = counter.toString();
          }
      }  
    };
   req.open('GEt' , 'http://ujjawal2604.imad.hasura-app.io/counter' , true);
   req.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_bt')
submit.onclick = function (){
    var names= ['name1', 'name2', 'name3', 'name4']
    var list = '';
    for(var i= 0; i < names.length; i++){
        list += '<li>' + names + '</li>';
         }
     var ul = document.getElementById('namelist');
     ul.innerHTML = list;
     
}