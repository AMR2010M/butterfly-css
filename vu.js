
var menubtn=document.getElementById('menu-btn');
var nav=document.getElementById('nav');
var list=document.getElementById('list');
if(window.getComputedStyle(menubtn).display == 'block'){
    list.style.display='none';
}

var ismenu=0;
nav.style.height='5rem';
menubtn.onclick=function(){
if(ismenu==0){
if(window.getComputedStyle(menubtn).display == 'block'){
    list.style.display='block';
}
nav.style.height='20rem';
ismenu=1;
}
else{
 if(window.getComputedStyle(menubtn).display == 'block'){
    list.style.display='none';
}
  nav.style.height='5rem';
  ismenu=0; 
}
}
window.onclick=function(){

}