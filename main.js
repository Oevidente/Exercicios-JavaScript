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
      let radSex = document.getElementsByName('radsex');
      console.log(radSex.value)
      let idSex;
      let verificaSexo = () => {
          if(radSex[0].checked) {
            idSex = "homem";
          } else{
             if(radSex[1].checked) {
            idSex = 'mulher';
          } else {
            idSex = 'pessoa não binária';
          }
        }
      }
      verificaSexo();
      res.innerHTML = ``;
      res.innerHTML += `<br>Seu nome é ${txtNome.value}, você tem ${numIdade.value} anos e é ${idSex}.`;
      limparCampos();
    }
  }
}