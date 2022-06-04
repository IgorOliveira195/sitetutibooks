function validarLivro(idnome, iddescricao, idautor){
    let nome = document.getElementById(idnome).value;
    let descricao = document.getElementById(iddescricao).value;
    let autor = document.getElementById(idautor).value;

    if(nome =='')
        alert("Por favor, informe o nome do livro");
    
    else if(descricao == '')
        alert("Por favor, informe a descrição do livro");
    
    else if(autor == '')
        alert("Por favor, informe o autor do livro");
    
    else cadastrarLivro(nome, descricao, autor);
}

function cadastrarLivro(nome, descricao, autor){
    let novoLivro = {nome: nome, descricao: descricao, autor:autor};
    let livros = localStorage.getItem("livros");
        if (livros == null) livros = [];
        else livros = JSON.parse(livros);
        livros.push(novoLivro);
        localStorage.setItem("livros",  JSON.stringify(livros))
        alert("O livro "+ nome +" foi cadastrado com sucesso !!!");
        location.reload();
}

