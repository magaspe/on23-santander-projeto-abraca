   
const botao = document.querySelector('.botao')
      botao.addEventListener('click', submitForm);
     

function submitForm(e) {
e.preventDefault();

// alert ("EM BREVE ENTRAREMOS EM CONTATO COM VOCÊ")
// swal("Hello world!");

swal("Em Breve, vamos entrar em contato com você")

var name = getInputVal('nome');
var email = getInputVal('email');
var assunto = getInputVal('assunto');
var mensagem = getInputVal('mensagem');

saveMessage(name, email, assunto, mensagem);
document.getElementById('form').reset();
}

function getInputVal(id) {
return document.getElementById(id).value;
}


function saveMessage(name, email, assunto, mensagem) {
var newMessageRef = messagesRef.push();
newMessageRef.set({
  name: nome,
  email: email,
  assunto: assunto,
  mensagem: mensagem,
});
}

const messagesRef = firebase.database()
.ref('formulario');