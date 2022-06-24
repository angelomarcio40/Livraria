// Forma de função padrão
// function Cadastrar(){}


// Criar uma função em JavaScript
// Formato ES6 baseado em Arrow Function

// Função que realiza o cadastro do Livro
const cadastrar = () =>{

    // Declara a variável titulo e captura o valor preenchido pelo usuário
    let titulo = document.getElementById('titulo').value
    // Declara a variável autor e captura o valor preenchido pelo usuário
    let autor = document.getElementById('autor').value
    // Declara a variável categporia e captura o valor preenchido pelo usuário
    let categoria = document.getElementById('categoria').value
    // Declara a variável valor e captura o valor preenchido pelo usuário
    let valor = document.getElementById('valor').value

    // verifica se a variável titulo está  um alerta
    //  Se verdadeiro (estiver sem preencher) irá exibir
    if(titulo == ''){
        alert('Digite o título do livro')
        return
    }

    // verifica se a variável autor está  um alerta
    //  Se verdadeiro (estiver sem preencher) irá exibir
    if(autor == ''){
        alert('Digite o autor do livro')
        return
    }

    // verifica se a variável categoria está  um alerta
    //  Se verdadeiro (estiver sem preencher) irá exibir
    if(categoria == ''){
        alert('Escolha a cate4goria')
        return
    }

    // verifica se a variável valor está  um alerta
    //  Se verdadeiro (estiver sem preencher) irá exibir
    if(valor == ''){
        alert('Digite o valor do livro')
    }
    
    // Envio dos dados usando o FETCH ao Backend
    fetch('backend/cadastrar_livro.php',{
        method:'POST',
        body:`titulo=${titulo}&autor=${autor}&categoria=${categoria}&valor=${valor}`,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then(function(response){
        response.json().then(resposta=>{
            // Aqui é onde iremos receber e tratar a resposta do PHP
            Swal.fire(
                'Atenção!',
                resposta.Mensagem,
                'success'
              )

            // Resetar o formulário - limpar os campos
            document.getElementById('form_cadastrar').reset()
        })
    })
}