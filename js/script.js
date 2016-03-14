var nomeUsuario = document.getElementById('name');
var idadeUsuario = document.getElementById('age');

var formUsuario = document.getElementById('form1');

formUsuario.addEventListener('submit', function(){
	console.log(nomeUsuario);
	alert('Ola ' + nomeUsuario.value + ' Voce tem ' + idadeUsuario.value + ' Anos')
});

/*coldpen.io -- site bacana
Utilizar modal javascript e nao ALERT 
*/