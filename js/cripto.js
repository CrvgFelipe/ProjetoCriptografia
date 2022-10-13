var CampoMsg = document.getElementById('campoMsg');
var seletor = document.querySelector('#seletor');
var escolhaNum = document.getElementById('escolhaNum');
var botaocod = document.getElementById('codificar');
var botaodecod = document.getElementById('decodificar');
var alfabeto = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz";
var submit = document.querySelector('#submit');
var respostaMsg = document.querySelector('.respostaMsg')
var radioCodificar = document.querySelector('#radioCodificar');
var radioDecodificar = document.getElementById('radioDecodificar')
var radio = document.querySelector('.opcaoradio');


seletor.addEventListener("change", function () {

    
    if(seletor.value == 'cifraDeCesar') {
        escolhaNum.style.display = 'block';
    
        
    }else if (seletor.value == 'base64') {
        escolhaNum.style.display = 'none';
    
    }else {
        alert('Selecione uma opção')
    }
    })



  botaocod.addEventListener("click", function () {
     submit.style.display = 'block';
     submit.value = 'Codificar'

  })

  botaodecod.addEventListener("click", function () {
    submit.style.display = 'block';
    submit.value = 'Decodificar'

 })


 //Cifra de Cesar// 
   



function codCesar() {
  var elementoDaMensagem = campoMsg.value;
  var mensagemMinuscula = elementoDaMensagem.toLowerCase();
  var transformarNumero = (Number(escolhaNum.value) % 26);
  var mensagemCodificada = '';

  for(var i = 0; i < mensagemMinuscula.length; i++){
     for(var j =0; j < alfabeto.length; j++){
       if(mensagemMinuscula[i] == alfabeto[j]){
         mensagemCodificada += alfabeto [j + transformarNumero]
         break;
     } else if (mensagemMinuscula[i] == ' ') {
         mensagemCodificada += ' ';
         break;
     }
    }
  

}
return mensagemCodificada
}


  function decCesar() {
    var elementoDaMensagem = campoMsg.value;
    var mensagemMinuscula = elementoDaMensagem.toLowerCase()
    var transformarNumero = (Number(escolhaNum.value) % 26)
    var mensagemCodificada = '';
  
    for(var i = 0; i < mensagemMinuscula.length; i++){
       for(var j = alfabeto.length - 1; j >= 0; j--){
         if(mensagemMinuscula[i] == alfabeto[j]){
           mensagemCodificada += alfabeto [j - transformarNumero]
           break;
       } else if (mensagemMinuscula[i] == ' ') {
           mensagemCodificada += ' ';
           break;
       }
      }
      
  
  }
  return mensagemCodificada
}
  

/* Base64 */

function codBase(){
    let mensagem = document.querySelector('#campoMsg').value
    let codificado = btoa(mensagem)
    return codificado
}

function decBase(){
    let mensagem = document.querySelector('#campoMsg').value
    let decodificado = atob(mensagem)
    return decodificado
}




submit.addEventListener('click', function(e){
    e.preventDefault();
    if(botaocod.checked && seletor.value === "base64"){
        
        respostaMsg.innerText = codBase();
    } else if(botaodecod.checked && seletor.value === "base64"){
        
        respostaMsg.innerText = decBase();
    } else if(botaocod.checked && seletor.value === "cifraDeCesar"){
        
        respostaMsg.innerText = codCesar()
    } else if(botaodecod.checked && seletor.value === "cifraDeCesar"){
        
        respostaMsg.innerText = decCesar()
    } else{
        respostaMsg.innerText = "Ops...Digite novamente."
    }
})
