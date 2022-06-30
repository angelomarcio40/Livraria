// Forma de função padrão
// function Cadastrar(){}


// Criar uma função em JavaScript
// Formato ES6 baseado em Arrow Function

// Função que realiza o cadastro do Livro
const cadastrar = () => {

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
    if (titulo == '') {
        alert('Digite o título do livro')
        return
    }

    // verifica se a variável autor está  um alerta
    //  Se verdadeiro (estiver sem preencher) irá exibir
    if (autor == '') {
        alert('Digite o autor do livro')
        return
    }

    // verifica se a variável categoria está  um alerta
    //  Se verdadeiro (estiver sem preencher) irá exibir
    if (categoria == '') {
        alert('Escolha a cate4goria')
        return
    }

    // verifica se a variável valor está  um alerta
    //  Se verdadeiro (estiver sem preencher) irá exibir
    if (valor == '') {
        alert('Digite o valor do livro')
    }

    // Envio dos dados usando o FETCH ao Backend
    fetch('backend/cadastrar_livro.php', {
        method: 'POST',
        body: `titulo=${titulo}&autor=${autor}&categoria=${categoria}&valor=${valor}`,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    }).then(function (response) {
        response.json().then(resposta => {
            // Aqui é onde iremos receber e tratar a resposta do PHP
            if (resposta.Resposta == 'OK') {
                Swal.fire(
                    'Atenção!',
                    resposta.Mensagem,
                    'success'
                )
            } else {
                Swal.fire(
                    'Atenção!',
                    resposta.Mensagem,
                    'error'
                )
            }

            // Swal.fire(
             // 'Atenção',
            //  resposte.Mensagem,
            // resposta.Resposta == "OK" ? 'sucess' : 'error')
            // Resetar o formulário - limpar os campos
            document.getElementById('form_cadastrar').reset()
        })
    })
}
// Final função cadastrar

// Inicio da função listar
const listar = () =>{
    fetch('backend/listar-livro.php')  
    .then(response => response.json())
    .then(resposta =>{
        // aqui será manipulado o HTML com os dados retornados  pleo PHP em formato JSON
        // O JS monta  o HTML de forma dinâmica, através de um laço(repetição)

        // limpa a div que irá armazenar a lista de livros
        document.getElementById('lista-livros-grid').innerHTML = ``

        for(let cont = 0;cont < resposta.length;cont++){
            document.getElementById('lista-livros-grid').innerHTML += `
        <figure>
            <img class="livros-img" src="img/livro-faltando.png" alt="Imagem do livro">
            <figcaption>
                <h4>${resposta[cont]['titulo']}</h4>
                <h6>${resposta[cont]['autor']}</h6>
                <small>${resposta[cont]['id_categoria']}</small>
                <h5>${resposta[cont]['valor']}</h5>
                <button class="btn-comprar">Comprar</button>
            </figcaption>
        </figure>
        `
        }
    })
}
// Final da função listar