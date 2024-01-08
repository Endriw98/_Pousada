var i = 0;
var bt0 = document.getElementById("bt0");
var bt1 = document.getElementById("bt1");
var bt2 = document.getElementById("bt2");
var bt3 = document.getElementById("bt3");
var bt4 = document.getElementById("bt4");
var menu = document.getElementById("menu");
var ativo = false;
var ativoFts = false;
let contagem;
let milissegundos = 0;
let segundos = 0;
var principal = document.getElementById("Principal");
var larguraP = window.getComputedStyle(principal);




bt0.addEventListener('click', () =>{
    
    if (ativo == false) {
        mostrar();
        ativo = true;
    }else if (ativo == true) {
        esconder();
       
        ativo = false;
    }

    
});


function mostrarBotoes() {
   
    bt1.style.animation = '5s';
    bt1.style.transitionDuration = '5s';
    
    bt1.style.position = 'relative';
    bt1.style.opacity = '1';

    
    bt2.style.position = 'relative';
    bt2.style.transitionDuration = '2s';

    
    bt3.style.position = 'relative';
    bt3.style.transitionDuration = '2s';

    
    bt4.style.position = 'relative';

    setTimeout(()=>{
        bt1.style.display = 'block';
        bt2.style.display = 'block';
        bt3.style.display = 'block';
        bt4.style.display = 'block';
    },1000)
}
function mostrar() {
    bt0.style.display = 'block';
    bt0.style.position = 'relative';
    //tempo();
   
    menu.style.width = '600px';
    menu.style.transitionDuration = '1s';
    menu.style.borderRadius = '0px 30px 30px 0px';
    menu.style.left = '0px';
    mostrarBotoes();
    if(larguraP.getPropertyValue('width') == '600px'){
        bt0.style.display = 'block';
        bt0.style.position = 'relative';       
        menu.style.width = '600px';
        menu.style.transitionDuration = '1s';
        menu.style.borderRadius = '0px 30px 30px 0px';
        menu.style.left = '0px';
    }
    
}
function esconder() {
    
    milissegundos = 0;
    segundos = 0;
    
     //clearInterval(contagem);
     
     bt1.style.transitionDuration = '1s';
     bt2.style.transitionDuration = '1s';
     bt3.style.transitionDuration = '1s';
     bt4.style.transitionDuration = '1s';
 
     bt1.style.display = 'none';
     bt2.style.display = 'none';
     bt3.style.display = 'none';
     bt4.style.display = 'none';
    
     
     menu.style.transition = 'width 0.5s ease';
     menu.style.width = '110px';
     menu.style.borderRadius = '0px 30px 30px 0px';
     menu.style.left = '0px';
     
     
        
     
 }
 function inicio(){
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}
function contatos(){
    window.scroll({
        top: 1000,
        left: 0,
        behavior: "smooth"
    });
}
function flats() {
    alert("Escolha um dos apartamentos");
    if (ativoFts == false) {
        document.getElementById('opcoes').style.display = "block";
        document.getElementById('opcoes').style.marginLeft = '500px';
        document.getElementById('opcoes').style.marginTop = '100px';
        document.getElementById('opcoes').style.color = 'azure';
        ativoFts = true;
    } else if (ativoFts == true) {
        document.getElementById('opcoes').style.display = "none";
        ativoFts = false;
    }
}
function exit(){
    if(ativoFts == true){
        document.getElementById('opcoes').style.display = 'none';
        ativoFts = false;
    }
    
}







