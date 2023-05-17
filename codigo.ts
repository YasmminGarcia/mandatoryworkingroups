let cont = 0;

function login(){
  
  let usuario : HTMLInputElement | null = 
  document.querySelector('#usuario');

  let senha : HTMLInputElement | null = 
  document.querySelector('#senha');

  if(usuario?.value == "AlunosSESI2023" && senha?.value == "devsistemas"){
      
      window.location.href = "bemvindo.html";
  }

  else{

    alert("senha ou usuario incorreto")
    cont++;
    
  }

  if(cont == 5){

    window.location.href = "bloqueado.html";
  }

}