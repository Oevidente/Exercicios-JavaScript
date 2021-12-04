let txtNome = document.getElementById('txtnome');
let numIdade = document.querySelector('input#numidade');

function limparCampos() {
  let campos = document.querySelectorAll('input.entrada'); 
 campos.forEach(campo=>campo.value=''); 
}


function adicionar() {
  let res = document.getElementById('res');
  if(txtNome.value === '' || numIdade === '') {
    alert('Insira os valores de Nome e Idade!');
  } else {
    if(numIdade.value<= 0) {
      alert('Digite uma idade válida!')
    } else{
      res.innerHTML = '';
      res.innerHTML = `Seu nome é ${txtNome.value} e você tem ${numIdade.value} anos.`
    }
  }
  limparCampos();
}