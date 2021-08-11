$(function() { 
 $(document).on("click", "a#listar_pizzas", function() {
 getListarPizzas(); 
 }); 
 $(document).on("click", "a#novo_pizzas", function() {
 getFormularioInclusao(); 
 }); 
 $(document).on("click", "button#salvar_pizzas", function() {
 if (validaDados()) { 
 salvarPizzas(); 
 } 
 }); 
 $(document).on("click", "a#confirma_excluir", function() {
 confirmaExclusao(this); 
 }); 
 $(document).on("click", "button#excluir", function() {
 excluirPizzas();
 });
 
  $(document).on("click", "a#editar_pizzas", function() {
 getEditarPizzas(this); 
 }); 
 $(document).on("click", "button#salvar_pizzas_edicao", function() {
 if (validaDados()) { 
 salvarPizzasEdicao(); 
 } 
 }); 
 $(document).on("focus", "input#nome", function() {
 $("input").removeClass('error').next('span').remove(); 
 }); 
}); 
 //[...]
function getListarPizzas() {  
 $.post('crud2.php', {
 acao : 'listar_pizzas' 
 }, function(dados) { 
 criaListagemTabela(dados); 
 }, "json"); 
} 


//[...] 
function criaListagemTabela(jsonDados) {
 var tabela = '<div class="table-responsive">';
 tabela += '<table class="table table-hover table-bordered"><thead><tr>';
 tabela += '<th scope="col">codigo</th><th scope="col">Nome</th>' 
 tabela += '<th scope="col">descricao</th><th scope="col">valor</th>'; 
 tabela += '<th scope="col"></th><th scope="col"></th></tr></thead><tbody>'; 
 
$.each( 
 jsonDados, 
 function(indice, pizzas) {
 tabela += '<tr>'; 
 tabela += '<td>' + pizzas.codigo + '</td>'; 
 tabela += '<td>' + pizzas.nome + '</td>'; 
 tabela += '<td>' + pizzas.descricao + '</td>'; 
 tabela += '<td>' + pizzas.valor + '</td>';  
 tabela += '<td><a href="javascript:void(0);" id="editar_pizzas" pizzas_codigo="' 
 + pizzas.codigo 
 + '" class="btn btn-success btn-xs"><i class="glyphicon glyphicon-pencil"></i></a></td>';
 tabela += '<td><a href="javascript:void(0);" id="confirma_excluir" pizzas_codigo="' 
 + pizzas.codigo 
 + '" class="btn btn-danger btn-xs"><i class="glyphicon glyphicon-trash"></i></a></td>';
 tabela += '</tr>'; 
 }); 
 tabela += '</tbody></table></div>'; 
 $('div#conteudo').html(tabela);
} 

//[...]

function getFormularioInclusao() {
 var form = '<form class="form-horizontal">';
form += '<div class="form-group">';
 form += '<label for="codigo" class="col-sm-2 control-label glyphicon glyphicon-user"></label>'; 
 form += '<div class="col-sm-8">'; 
 form += '<input type="text" class="form-control" codigo="codigo" placeholder="Codigo*" required>'; 
 form += '</div>'; 
 form += '</div>'; 
 form += '<div class="form-group">';
 form += '<label for="nome" class="col-sm-2 control-label glyphicon glyphicon-user"></label>'; 
 form += '<div class="col-sm-8">'; 
 form += '<input type="text" class="form-control" codigo="nome" placeholder="Nome*" required>'; 
 form += '</div>'; 
 form += '</div>'; 
 form += '<div class="form-group">'; 
 form += '<label for="descricao" class="col-sm-2 control-label glyphicon glyphicon-phone"></label>'; 
 form += '<div class="col-sm-8">'; 
 form += '<input type="text" class="form-control" codigo="descricao" placeholder="Descricao">'; 
 form += '</div>'; 
 form += '</div>'; 
 form += '<div class="form-group">'; 
 form += '<label for="valor" class="col-sm-2 control-label glyphicon glyphicon-envelope"></label>'; 
 form += '<div class="col-sm-8">'; 
 form += '<input type="number" class="form-control" codigo="valor" placeholder="Valor">'; 
 form += '</div>'; 
 form += '</div>';  
 form += '<div class="form-group">'; 
 form += '<div class="col-sm-offset-2 col-sm-10">'; 
 form += '<button type="button" codigo="salvar_pizzas" class="btn btn-primary">Salvar</button>'; 
 form += '</div>'; 
 form += '</div>'; 
 form += '</form>'; 
 $('div#conteudo').html(form);
}

//[...] 
function salvarPizzas() { 
 var Pizzas = new Object();
Pizzas.codigo=$('input#codigo').val();
 Pizzas.nome = $('input#nome').val(); 
 Pizzas.descricao = $('input#descricao').val(); 
 Pizzas.valor = $('input#valor').val(); 
 var pizzasJson = JSON.stringify(Pizzas);
 $.post('crud2.php', {
 acao : 'adicionar_pizzas',
contato : pizzasJson 
 }, function(dado) { 
 getListarPizzas(); 
 }, "json")
}

//[...] 
function confirmaExclusao(elemento) {
 $("#excluir_pizzas_modal").modal("show"); 
 $("#excluir_pizzas_modal input#pizzas_codigo").val(
 $(elemento).attr('pizzas_codigo')); 
} 
function excluirPizzas() { 
 var Pizzas = new Object();
 Pizzas.codigo = $("#excluir_pizzas_modal input#pizzas_codigo").val(); 
 var pizzasJson = JSON.stringify(Pizzas); 
 $.post('crud2.php', {
 acao : 'excluir_pizzas', 
 pizzas : pizzasJson 
 }, function(dado) { 
 getListarPizzas();
$("#excluir_pizzas_modal").modal("hide"); 
 }, "json"); 
}

//[...] 
function getEditarPizzas(elemento) {
 var Pizzas = new Object(); 
 Pizzas.codigo = $(elemento).attr('pizzas_codigo'); 
 var pizzasJson = JSON.stringify(Pizzas);   
 $.post('crud2.php', { 
 acao : 'buscar_pizzas', 
 pizzas : pizzasJson 
 }, function(dado) { 
 getFormularioEdicao(dado);   
 }, "json"); 
} 
function getFormularioEdicao(jsonDado) {
 var form = '<form class="form-horizontal">'; 
 $ 
 .each(
jsonDado, 
 function(indice, pizzas) { 
 form += '<div class="form-group">'; 
 form += '<input type="hidden" id="pizzas_codigo" value="' 
 + pizzas.codigo + '">'; 
 form += '<label for="nome" class="col-sm-2 control-label glyphicon glyphicon-user"></label>'; 
 form += '<div class="col-sm-8">'; 
 form += '<input type="text" class="form-control" id="nome" placeholder="Nome*" value="' 
 + pizzas.nome + '" required>'; 
 form += '</div>'; 
 form += '</div>'; 
 form += '<div class="form-group">'; 
 form += '<label for="descricao" class="col-sm-2 control-label glyphicon glyphicon-phone"></label>'; 
 form += '<div class="col-sm-8">'; 
 form += '<input type="text" class="form-control" id="descricao" placeholder="Descricao" value="' 
 + pizzas.descricao + '">'; 
 form += '</div>'; 
 form += '</div>'; 
 form += '<div class="form-group">'; 
 form += '<label for="valor" class="col-sm-2 control-label glyphicon glyphicon-envelope"></label>'; 
 form += '<div class="col-sm-8">'; 
 form += '<input type="number" class="form-control" id="valor" placeholder="Valor" value="' 
 + pizzas.valor + '">'; 
 form += '</div>'; 
 form += '</div>'; 
 form += '<div class="form-group">'; 
 form += '<div class="col-sm-offset-2 col-sm-10">'; 
 form += '<button type="button" id="salvar_pizzas_edicao" class="btn btn-primary">Salvar</button>'; 
 form += '</div>'; 
 form += '</div>'; 
 }); 
 form += '</form>'; 
 $('div#conteudo').html(form); 
} 
function salvarPizzasEdicao() {  
 var Pizzas = new Object(); 
// Pizzas.codigo = $('input#pizzas_codigo').val();
Pizzas.nome = $('input#nome').val(); 
 Pizzas.descricao = $('input#descricao').val(); 
 Pizzas.valor = $('input#valor').val(); 
  
 var pizzasJson = JSON.stringify(Pizzas); 
 $.post('crud2.php', { 
 acao : 'editar_pizzas', 
 pizzas : pizzasJson 
 }, function(dado) { 
 getListarPizzas();  
 }, "json"); 
} 

//[...] 
function validaDados() {
 if ($("#nome").val().trim().length == 0) { 
 $("#nome").addClass('error').after( 
 '<span class="error">Por favor, preencha esse campo.</span>'); 
 return false; 
 } 
 return true; 
}

