<?php
// Exibe tofas as variáveis enviadas via Post ao PHP
//  var_dump($_POST);

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
    $sql = "SELECT * FROM tb_livros WHERE ativo = 1";

    // prepara a execução da query sql apache_child_terminate
    $comando = $conexao->prepare($sql);

    // executa a query preparada acima
    $comando->execute();

    // essa linha irá tratar os daos do retorno do SELECT executado no banco de dados, somente é usada nesse caso, em INSERT, UPDATE, DELETE não tem necessidade
    $resposta = $comando->fetchAll(PDO::FETCH_ASSOC);

    
} catch (PDOException $e) {
    // Aqui e tratado o erro e retornado ao usuário
    $resposta = array("Resposta" => "Erro", "Mensagem" => $e->getMessage());
}
// onverte o array resposta em JSON
// JSON_UNESCAPED_UNICODE = Manter a arquivo com mapa de carater padrão
$json = json_encode($resposta, JSON_UNESCAPED_UNICODE);

echo $json;
// Final da conexao
