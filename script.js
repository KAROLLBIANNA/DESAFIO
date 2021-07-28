

function cadastro() {
	// pega os campos por id
	var nome = window.document.getElementById("txtNome");
	var cpf = window.document.getElementById("txtCPF");
	var endereco = window.document.getElementById("txtEndereco");
	var numero = window.document.getElementById("txtNumero");
	var celular = window.document.getElementById("txtCelular");
	
	// verifica se o tamanho do valor do campo � igual a zero -> significa que n�o digitou nada
	if (nome.value.length == 0)
	{
		alert("Por favor, informe o campo nome!");
		nome.focus(); // direcionar o foco do mouse para o campo nome
		return false; // n�o vai executar o submit
	} else if (cpf.value.length == 0) {  // se o campo CPF est� vazio
		alert("Por favor, informe o campo CPF!");
		cpf.focus();
		return false;
	} else if (endereco.value.length == 0) { // se o tamanho do conte�do do campo endereco for vazio
		alert("Por favor, informe o campo Endereco!");
		endereco.focus();
		return false;
	} else if (numero.value.length == 0) { // se o numero for vazio
		alert("Por favor, informe o campo Numero !");
		numero.focus();
		return false;
	} else if (celular.value.length == 0) { // se o celular estiver vazio7
		alert("Por favor, informe o campo Celular");
		celular.focus();
		return false;
	} else {	// se preencheu todos os campos  - ok
	 
		alert("Obrigado(a) por efetuar nosso cadastro!");
		return true; // vai executar o submit
	}
    
}

// Fun��o JavaScript para limpar o conte�do de todos os campos
function funcaoLimpar() {
	window.document.getElementById("txtNome").value = "";
	window.document.getElementById("txtCPF").value = "";
	window.document.getElementById("txtRG").value = "";
	window.document.getElementById("rdGenero").selectIndex = -1; // limpar um radioButton
	window.document.getElementById("txtEndereco").value = "";
	window.document.getElementById("txtNumero").value = "";
	window.document.getElementById("txtBairro").value = "";
	window.document.getElementById("txtCidade").value = "";
	window.document.getElementById("txtCEP").value = "";
	window.document.getElementById("txtTelefone").value = "";
	window.document.getElementById("txtCelular").value = "";
	window.document.getElementById("chkAcessibilidade").checked = false;
	window.document.getElementById("selectDeficiencia").selectIndex = -1;
	window.document.getElementById("txtRotina_inclusiva").value = "";
}
/*
 A fun��o Mascara tera como valores no argumento os dados inseridos no input (ou no evento onkeypress)
 onkeypress="mascara(this, '## ####-####')"
 onkeypress = chama uma fun��o quando uma tecla � pressionada, no exemplo acima, chama a fun��o mascara e define os valores do argumento na fun��o
 O primeiro valor � o this, � o Apontador/Indicador da Mascara, o '## ####-####' � o modelo / formato da mascara
 no exemplo acima o # indica os n�meros, e o - (hifen) o caracter que ser� inserido entre os n�meros, ou seja, no exemplo acima o telefone ficara assim: 11-4000-3562
 para o celular de s�o paulo o modelo dever� ser assim: '## #####-####' [11 98563-1254]
 para o RG '##.###.###.# [40.123.456.7]
 para o CPF '###.###.###.##' [789.456.123.10]
 Ou seja esta mascara tem como objetivo inserir o hifen ou espa�o autom�ticamente quando o usu�rio inserir o n�mero do celular, cpf, rg, etc 

 lembrando que o hifen ou qualquer outro caracter � contado tambem, como: 11-4561-6543 temos 10 n�meros e 2 hifens, por isso o valor de maxlength ser� 12
 <input type="text" name="telefone" onkeypress="mascara(this, '## ####-####')" maxlength="12">
 neste c�digo n�o � possivel inserir () ou [], apenas . (ponto), - (hif�n) ou espa�o
 */

 function mascara(t, mask){
	 var i = t.value.length;
	 var saida = mask.substring(1,0);
	 var texto = mask.substring(i)
	 if (texto.substring(0,1) != saida){
		t.value += texto.substring(0,1);
	 }
 }