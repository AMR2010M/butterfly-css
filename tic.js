
var cell1=document.getElementById('cell1');
var cell2=document.getElementById('cell2');
var cell3=document.getElementById('cell3');
var cell4=document.getElementById('cell4');
var cell5=document.getElementById('cell5');
var cell6=document.getElementById('cell6');
var cell7=document.getElementById('cell7');
var cell8=document.getElementById('cell8');
var cell9=document.getElementById('cell9');
var player=0;

aria=[0,0,0,0,0,0,0,0,0];
window.onclick=function(){
    if(aria[0]==aria[1]&&aria[1]==aria[2]&&aria[0]!=0){
       if(player==1){
        alert('x won ')
       }
       else if(player==1){
        alert('o won')
       }
    }
    else if(aria[3]==aria[4]&&aria[5]==aria[4]&&aria[4]!=0){
          if(player==1){
        alert('x won ')
       }
       else{
        alert('o won')
       }
     
    }
    
      else if(aria[6]==aria[7]&&aria[7]==aria[8]&&aria[8]!=0){
            if(player==1){
        alert('x won ')
       }
       else{
        alert('o won')
       }
       }
       else if(aria[0]==aria[4]&&aria[4]==aria[8]&&aria[8]!=0){
            if(player==1){
        alert('x won ')
       }
       else{
        alert('o won')
       }
       }
       else if(aria[2]==aria[4]&&aria[4]==aria[6]&&aria[6]!=0){
            if(player==1){
        alert('x won ')
       }
       else{
        alert('o won')
       }
       }
    
     else if(aria[1]==aria[4]&&aria[4]==aria[7]&&aria[7]!=0){
          if(player==1){
        alert('x won ')
       }
       else{
        alert('o won')
       }
     
    }
     else if(aria[0]==aria[3]&&aria[3]==aria[6]&&aria[6]!=0){
          if(player==1){
        alert('x won ')
       }
       else{
        alert('o won')
       }
     
    }
     else if(aria[2]==aria[5]&&aria[8]==aria[5]&&aria[8]!=0){
          if(player==1){
        alert('x won ')
       }
       else{
        alert('o won')
       }
     
    }
}
var cellnum=0;
cell1.onclick=function(){
cellnum=1;
    var x=document.getElementById('x1')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o1');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   else{
    console.log('cheating!')
   }
}
cell2.onclick=function(){
    cellnum=2
           var x=document.getElementById('x2')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o2');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   else{
    console.log('cheating!')
   }
   

}
cell3.onclick=function(){
    cellnum=3;
          var x=document.getElementById('x3')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o3');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   else{
    console.log('cheating!')
   }
   
}
cell4.onclick=function(){
    cellnum=4;
    var x=document.getElementById('x4')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o4');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   else{
    console.log('cheating!')
   }
    
}
cell5.onclick=function(){
    cellnum=5;
         var x=document.getElementById('x5')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o5');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   else{
    console.log('cheating!')
   }
   
}
cell6.onclick=function(){
    cellnum=6;
          var x=document.getElementById('x6')
        if(player==0&&aria[cellnum-1]==0){
            x.style.backgroundColor='black';
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o6');
             var x=document.getElementById('x6')
            o.style.display="block";
            x.style.display='none';
            player=0;
                aria[cellnum-1]=2;
        }
   else{
    console.log('cheating!')
   }
   
}
cell7.onclick=function(){
    cellnum=7;
        var x=document.getElementById('x7')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o7');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   
}
cell8.onclick=function(){
    cellnum=8;
  var x=document.getElementById('x8')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o8');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   
}

cell9.onclick=function(){
    cellnum=9;
     var x=document.getElementById('x9')
        if(player==0&&aria[cellnum-1]==0){
            x.style.display="block";
            player=1;
            aria[cellnum-1]=1;
            console.log(aria[cellnum-1]);
        }
        else if(player==1&&aria[cellnum-1]==0){
            var o=document.getElementById('o9');
            o.style.display="block";
            player=0;
             aria[cellnum-1]=2;
        }
   

}
var place=document.getElementsByClassName('place');

var player=0;
   