<?php
// Exibe tofas as variáveis enviadas via Post ao PHP
//  var_dump($_POST);

// Criara uma variável em PHP
$titulo = $_POST['titulo'];
$autor = $_POST['autor'];
$categoria = $_POST['categoria'];
$valor = $_POST['valor'];

// Conexao com o banco de dados
$servidor = 'localhost';
$usuario = 'root';
$senha = '';
$bancodados = 'db_livraria';

try {
  // Definindo as configurções de conexão com o banco de dados
  $conexao = new PDO("mysql:host=$servidor;dbname=$bancodados;charset=utf8", $usuario, $senha);
  // seta o modo de erro do PDO para exception 
  $conexao->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // querry de inserção de dados no DB MySQL
  $sql = "INSERT INTO tb_livros(titulo,autor,id_categoria,valor)VALUES('$titulo','$autor',$categoria,$valor)";

  // prepara a execução da query sql apache_child_terminate
  $comando = $conexao->prepare($sql);

  // executa a query preparada acima
  $comando->execute();

  // Criar um array para resposta ao usuário
  $resposta = array("Resposta" => "OK", "Mensagem" => "Cadastro realizado com sucesso!");
 
} catch (PDOException $e) {
  // Aqui e tratado o erro e retornado ao usuário
  $resposta = array("Resposta" => "Erro", "Mensagem" =>$e->getMessage());
}
 // onverte o array resposta em JSON
  // JSON_UNESCAPED_UNICODE = Manter a arquivo com mapa de carater padrão
$json = json_encode($resposta, JSON_UNESCAPED_UNICODE);

echo $json;
// Final da conexao
