// var area.




var canvas = document.getElementById('tela'),
ctx = canvas.getContext("2d"),
fps = 30,
bollcolor = "#eeeeee", batcolor1="#0000ff",batcolor2="#ff0000" ,

bollX,bollY = (canvas.height-7)/2,bollR = 7,hw=590,
batW = 10, batH = 80 ,
bat1X = 7, bat1Y = (canvas.height-batH)/2,
bat2X = 583, bat2Y = (canvas.height-batH)/2,
xc = (canvas.width-590)/2,start = false;

 var x = Math.floor(Math.random()*2);
cima = false,baixo = false,cima2 = false, baixo2 = false,
vy=9;
vy_boll=0, j1 = 'Jogador 1', c1=0,j2 = 'Jogador 2', c2=0,


Not = document.getElementById('Not');



var jog1 = document.getElementById('j1'),
jog2 = document.getElementById('j2'),
p1 = document.getElementById('c1'),
p2 = document.getElementById('c2');


jog2.value = j2; jog1.value = j1;

var cont = 0, cont1 = 0;

var x = Math.floor(Math.random()*2);
var vx_boll;
if(x==1){bollX=24; vx_boll = 8;  }
else{ bollX=canvas.width-24 ;  vx_boll = -8;}

//touch button
var buttons= [];
for(var i = 1; i < 5; i++){
  buttons.push( document.getElementById('bt'+[i]));
}
// inicio
window.onload = function(){ 

   setInterval(roda_game,fps);
    document.addEventListener("keydown",eventDown,false);
      buttons[3].ontouchstart = function(){cima = true};
      buttons[3].ontouchend = function(){ cima = false};
      buttons[2].ontouchstart = function(){baixo = true};
      buttons[2].ontouchend = function(){ baixo = false};
      
      buttons[1].ontouchstart = function(){cima2 = true};
      buttons[1].ontouchend = function(){ cima2 = false};
      buttons[0].ontouchstart = function(){baixo2 = true};
      buttons[0].ontouchend = function(){ baixo2 = false};

}



  function eventDown(e){  
   if (e.keyCode == 40){ cima = true;}
  
   	if(e.keyCode == 38){ baixo = true;}


    if(e.keyCode == 83){cima2 = true;}

   if(e.keyCode == 87){baixo2 = true;}

 if(e.keyCode == 13){ if(cont==1 || cont1 == 1){ $('#menu').slideUp('1000'); cont=0; cont1 = 0; $('#nome').slideUp('1000'); 
}
    else{ start =true; if( vy_boll>0 || vy_boll < 0)vy_boll = 0;} 
}
 }

  function eventUp(e){
    if (e.keyCode == 40){ cima = false;}
  
   	if(e.keyCode == 38){ baixo = false;}
   
    
    if(e.keyCode == 83){cima2 = false;}

   if(e.keyCode == 87){baixo2 = false;}
  if(e.keyCode == 73){ help();}
  }



$(document).ready(function(){
  

})

function roda_game(){

	ctx.clearRect(0,0,canvas.width,canvas.height);
   
  //  ctx.beginPath();
  // ctx.arc(canvas.width/2,canvas.height/2,100,0,Math.PI*2);
  
  // ctx.stroke();
  // ctx.closePath();

  ctx.beginPath();
  ctx.arc(-100,canvas.height/2,220,0,Math.PI*2);
 ctx.color = "#ffffff";
  ctx.stroke();
  ctx.closePath();

ctx.beginPath();
  ctx.arc(700,canvas.height/2,220,0,Math.PI*2);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(canvas.width/2-2.5,canvas.height/2-2.5,5,0,Math.PI*2);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.arc(bollX,bollY,bollR,0,Math.PI*2);
  ctx.fillStyle = bollcolor;
  ctx.fill();
  ctx.closePath();



  ctx.beginPath();
 	ctx.rect(0,0,10,380);
 	ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
 	ctx.rect(590,0,10,380);
 	ctx.stroke();
  ctx.closePath();

   ctx.beginPath();
 	ctx.rect(0,0,600,5);
    ctx.fillStyle = '#353535';
    ctx.fill();
 ctx.closePath();

  ctx.beginPath();
 	ctx.rect(0,375,600,5);
  	ctx.fillStyle = '#353535';
    ctx.fill();
  ctx.closePath();

 //  ctx.beginPath();
 //  ctx.font = "bold 15px sans-serif";
 //  ctx.fillStyle = "#282828";
 //  ctx.fillText(j1+c1,10,15);
 //  ctx.closePath();

 //   ctx.beginPath();
 //  ctx.font = "bold 15px sans-serif";
 //  ctx.fillStyle = "#282828";
 //  ctx.fillText("DISOFT APPS",canvas.width/2-50,15);
 //  ctx.closePath();

 //   ctx.beginPath();
 //  ctx.font = "bold 15px sans-serif";
 //  ctx.fillStyle = "#282828";
 //  ctx.fillText(j2+c2,hw-100,15);
 //  ctx.closePath();



 

ctx.beginPath();
ctx.rect(bat1X,bat1Y,batW,batH);
ctx.fillStyle=batcolor1;
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(bat2X,bat2Y,batW,batH);
ctx.fillStyle=batcolor2;
ctx.fill();
ctx.closePath();

 
 if(start){
Move_bat();
Move_boll();

}
 
}



// Area para desnho

function Move_bat(){
 
 if(cima){ bat2Y +=vy;}
 if(baixo){ bat2Y -=vy;}
 if(cima2){ bat1Y+=vy;}
 if(baixo2){bat1Y-=vy}

 if(bat2Y < -50){ bat2Y = -50}
 
 if( bat2Y  > canvas.height-30){ bat2Y = canvas.height-30}

 	if(bat1Y < -50){ bat1Y = -50}
 
 if( bat1Y > canvas.height-30){ bat1Y = canvas.height-30}
}

Move_boll = function(){
   
   bollY+=vy_boll;
   bollX+=vx_boll;
 
   if( bollY +bollR*2 > canvas.height){ vy_boll=-vy_boll;}
   if( bollY < canvas.height - canvas.height+bollR+10){ vy_boll = -vy_boll}

    analize();

 	if( bollX > canvas.width - batW  ){ c1++; p1.value = c1;  start=false;  bollX=25;bollY = (canvas.height-7)/2; bat1Y = (canvas.height-batH)/2;
        bat2Y = (canvas.height-batH)/2;cima2 = false; cima = false; baixo2 = false; baixo= false; popup(1);}

    if(bollX < canvas.width-canvas.width + batW ){c2++; p2.value = c2; /*(alert("ponto para Jogador2")*/start= false ;bollX = canvas.width-24;bollY = (canvas.height-7)/2;  bat1Y = (canvas.height-batH)/2
       bat2Y = (canvas.height-batH)/2; cima2 = false; cima = false; baixo2 = false; baixo= false; popup(2);}
}




function batt(s){  
    Not.play();
   if(s == 'L'){  bat1X = 5; }
   if(s == 'R'){  bat2X = 585; }
   setTimeout(function(){ bat1X = 7;  bat2X = 583; },'100');
} 

// area de movimento

var entrada = document.getElementById('bt');
  $(document).ready(function(){ 
    var checkM = $('#ms');

     // $('#nome').hide();
     // $('#menu').hide();
      // $('#btR').hide();
      // $('#btL').hide();
       // $('#pop').hide();
      
       $('#ms').click(function(){  
            
          if(ms.checked == true){ Not.src ="son-bateu.mp3";Not.parentNode.appendChild(Not);    $('#pop').fadeIn('1000');  mensage.innerHTML = "Musica Ativado"; }
            else{Not.src ="som.mp3"; Not.parentNode.removeChild(Not); $('#pop').fadeIn('1000');  mensage.innerHTML = "Musica Desativado"; } 
            setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600')
          })
            

      $("#bt").click(function(){ 

      	if(entrada.checked == true){ $('#R').fadeIn('1000'); $('#L').fadeIn('1000');$('#pop').fadeIn('1000');  mensage.innerHTML = "Teclado Ativado";  }
      if(entrada.checked == false){ $('#R').fadeOut('1000');  $('#L').fadeOut('1000'); $('#pop').fadeIn('1000');  mensage.innerHTML = "Teclado Desativado"; 
 } 

    setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600') 
 })
  
  $('#cor').click(function(){ $('#menu').slideToggle('1000'); cont++;  if(cont==1){ $('#pop').css('top','-300px')}  if(cont > 2){cont=1}; $('#nome').slideUp('1000');  })



  $('#cor_change').click(function(){$('#menu').slideUp('1000'); mudar(); cont=0;})
  $('#name_change').click(function(){$('#nome').slideUp('1000');mudar_nome(); cont1 =0; })
  $('#tela').click(function(){ 

  	if(cont==1 || cont1 == 1){ $('#menu').slideUp('1000'); cont=0; cont1 = 0; $('#nome').slideUp('1000'); }
  	else{ start =true; if( vy_boll>0 || vy_boll < 0)vy_boll = 0;} 
  })

  $('#Nome').click(function(){ $('#nome').slideToggle('1000');  cont1++; if(cont1 > 2){cont1=1};  $('#menu').slideUp('1000');})

  $('#reniciar').click(function(){ reniciar(); })

  $('#comecar').click(function(){  comecar();})
  $('#comecar').mouseenter(function(){  $('#pop').fadeIn('1000');  mensage.innerHTML = "Informe o tempo";  setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600') })

    $('#reg').mouseenter(function(){ $('#pop').fadeIn('1000');  mensage.innerHTML = "Time view";  setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600')})

  $('#close').on({click: function(){ var x = confirm("Está pronto para sair do jogo?");  

                            if( x == true){ window.close();} 
                         },

                 mouseenter: function(){$('#pop').fadeIn('1000');  mensage.innerHTML = "Click para sair"; 

                 setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600')}
})


     
  })



mudar_nome = function(){
  if(jog2.value !="" && jog1.value !="" ) {jog1.value = nome1.value;  jog2.value = nome2.value;}
  if( jog1.value ==""|| jog2.value ==""){ jog1.value = j1;jog2.value = j2;}
  if( jog1.value ==""&&jog2.value !=""){jog1.value = j1;jog2.value = nome2.value; }
  if( jog2.value ==""&&jog1.value !=""){jog1.value = nome2.value;jog2.value = j2; }
 
}


  var mensage = document.getElementById('mensage');

function popup(tipo){

if(tipo == 1){ mensage.innerHTML = jog1.value +" fez ponto"; $('#pop').fadeIn('1000'); }
if(tipo == 2){ mensage.innerHTML = jog2.value +" fez ponto";  $('#pop').fadeIn('1000'); }

setTimeout(function(){$('#pop').fadeOut("1000")},"2000");
}

var corback = document.getElementById('cor1'),
corboll = document.getElementById('cor2'),
corbatle1 = document.getElementById('cor3'),
corbatle2 = document.getElementById('cor4'),
nome1 = document.getElementById('name1'),
nome2 = document.getElementById('name2');


mudar = function(){ canvas.style.background = corback.value;   bollcolor = corboll.value; batcolor1 = corbatle1.value; batcolor2 = corbatle2.value; jog1.style.color =corbatle1.value; jog2.style.color =corbatle2.value;  }



var tempo = document.getElementById('tempo'),c , t = "1000",
 m = document.getElementById('reg'), time;

function comecar(){ 

 reniciar();

time = setInterval(function(){ temp() },t);

         if(tempo.value > 5){ tempo.value = 5; 
                     $('#pop').fadeIn('1000');  mensage.innerHTML = "Tempo max. 5m"; 

                    setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600')
            } 

            if(tempo.value < 1){ tempo.value = 1; 
                     $('#pop').fadeIn('1000');  mensage.innerHTML = "Tempo min. 1m"; 

                    setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600')
            } 
  if( tempo.value >= 1 && tempo.value<= 5){ start = true; }

  c  = 60*tempo.value; 
  

}



function temp(){ 
  var aux;
    if ( c <= 0 ) ganhou();
    c > 60 ? aux = c/60 : aux = c; 
    c--; 
    m.innerHTML = aux.toFixed(0); 


   
 }

analize = function(){  
  
    if(bollX < canvas.width-canvas.width + batW +bat1X +bollR){

         if( bollY > bat1Y && bollY < bat1Y+27){vx_boll=-vx_boll; vy_boll=-8; batt('L');}

         if( bollY > bat1Y+27 && bollY < bat1Y+54){vx_boll=-vx_boll; vy_boll=0; batt('L');}

         if( bollY > bat1Y+54 && bollY < bat1Y+82){vx_boll=-vx_boll;vy_boll=8; batt('L');}

    }
   
    if(bollX > canvas.width - batW - 10 -bollR){ 

    	if( bollY > bat2Y && bollY < bat2Y+27){vx_boll=-vx_boll; vy_boll=-8; batt('R');}

     	if( bollY > bat2Y+27 && bollY < bat2Y+54){vx_boll=-vx_boll;vy_boll=0; batt('R');}

      	if( bollY > bat2Y+54 && bollY < bat2Y+82){vx_boll=-vx_boll;vy_boll =8; batt('R');}

   }

}

reniciar = function(){
  c = 0;
 clearInterval(time); 
  m.innerHTML="T";
 vy_boll = 0;
 start = false;
 c1 =0;
 c2 = 0;
 p2.value = 0;
 p1.value = 0;
 bollX,bollY = (canvas.height-7)/2,bollR = 7,hw=590,
batW = 10, batH = 80 ,
bat1X = 7, bat1Y = (canvas.height-batH)/2,
bat2X = 583, bat2Y = (canvas.height-batH)/2,
xc = (canvas.width-590)/2,start = false;
x = Math.floor(Math.random()*2);
if(x==1){bollX=24; vx_boll=8}
else{ bollX=canvas.width-24 ;vx_boll=-8}

}

ganhou = function(){
    c1 > c2 ? (alert(jog1.value+" ganhou, com "+c1+" pontos"+"\n"+"contra "+c2+" pontos de "+jog2.value)) : c2 > c1 ? (alert("O "+jog2.value+" ganhou, com "+c2+" pontos"+"\n"+"contra "+c1+" pontos de "+jog1.value)) : alert('Temos um empate!');

  clearInterval(time); 
   reniciar();
}

function help(){
 alert("DISOFT APPS \n Incio\n Para iniciar uma partida  livre click com o mouse na tela do jogo ou precione 'enter'.   \nControle\n Jogador1: para controlar use a tecla 'W' \n   para subir  e  use a tecla 'S' para descer"+ " \n Jogador2: para controlar use a tecla 'Seta Cima' para subir  \n    e use a tecla 'Seta Baixo' para descer.");


alert(" DISOFT APPS \n\n Os batedores verticais tem sistema de controle da bola, quando a bola bate no cento ela não sofre desvio e quando bate nos laterais a bola sofre um desvio  para o lado em que bateu.");
alert(" DISOFT APPS \n \n Use a opção 'iniciar' no menu para introduzir o tempo  de duraçao de uma partida e fica de olho no menu na letra 'T' para ver o tempo.");

   $('#pop').fadeIn('1000');  mensage.innerHTML = "press tecla 'i' para ajuda!"; 
   setTimeout(function(){ $('#pop').fadeOut('1000'); },'1600')

}
help();