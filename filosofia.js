function definir_topo_imagem(x){
    x.style.top = (document.body.clientHeight * 0.1) +'px';
  }
 
   function definir_tamanho_topo(x){
    x.style.width = (document.body.clientWidth * 1.2) + 'px';
    x.style.left = (document.body.clientWidth * -0.01) + 'px';
    x.style.top = (document.body.clientWidth * -0.02) + 'px';
   } 
   function definir_tamanho_entrada(x){
    x.style.width = (document.body.clientWidth * 1.1) + 'px';
    x.style.top   = (document.body.clientWidth * -0.02) + 'px';
   }
   function definir_esquerda_entrada(x){
   x.style.left = (document.body.clientWidth * 0.06) + 'px';
   }
   function definir_esquerda_texto(x){
    x.style.left = (document.body.clientWidth * 0.6) + 'px';
    }
   function definir_esquerda_menu(x){
    x.style.left = (document.body.clientWidth * 0.60) + 'px';
    }

    $(document).ready(function() {
 var botao = $('.btn1');
 var dropDown = $('.ul_materias');    

    botao.on('click', function(event){
        dropDown.stop(true,true).slideToggle();
        event.stopPropagation();
    });
});
$(document).ready(function() {
    var botao = $('.btn2');
    var dropDown = $('.ul_fale');    
   
       botao.on('click', function(event){
           dropDown.stop(true,true).slideToggle();
           event.stopPropagation();
       });
   });
  
  