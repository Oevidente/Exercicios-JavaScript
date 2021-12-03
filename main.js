let txtNome = document.getElementById('txtnome');
let numIdade = document.querySelector('input#numidade');
 
 const limparCampos = () => { 
 const campos = document.querySelectorAll('input.entrada'); 
 campos.forEach(campo=>campo.value=''); 
 }


function adicionar() {
  let res = document.getElementById('res');
  
  if(txtNome.value === '' || numIdade.value === '') {
    alert ('Insira um valor!');
  } else {
    if(numIdade.value <= 0) {
      alert ('Idade inválida!');
    } else {
      res.innerHTML = ``;
      res.innerHTML += `<br>Seu nome é ${txtNome.value} e você tem ${numIdade.value} anos.`;
      limparCampos();
    }
  }
}