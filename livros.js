var dados = JSON.parse(`[
    {
        "nome":"Arquitetura Limpa",
        "autor":"Roberto C. Martin",
        "descricao":"As regras universais de arquitetura de software aumentam dramaticamente a produtividade dos desenvolvedores ao longo da vida dos sistemas de software..."
    },
    {
        "nome":"Código Limpo",
        "autor":"Roberto C. Martin",
        "descricao":"Mesmo um código ruim pode funcionar. Mas se ele não for limpo, pode acabar com uma empresa de desenvolvimento. Perdem-se a cada ano horas incontáveis recursos..."
    },
    {
        "nome":"Roube como um Artista",
        "autor":"Austin Kleon",
        "descricao":"Coleção Pitch Deck. Plataforma para jovens negócios. Verdadeiro manifesto ilustrado de como ser criativo na era digital. Roube como um artista, do designer e escritor..."
    },
    {
        "nome":"Siga em Frente",
        "autor":"Austin Kleon",
        "descricao":"Em seus livros anteriores, os best-sellers Roube como um artista e Mostre seu trabalho!, Austin Kleon deu aos seus leitores a chave para liberar a criatividade e o que é preciso para..."
    }
]`);

let localLivros = localStorage.getItem("livros");
    console.log(localLivros);
    if ( localLivros == null || localLivros.length == 0) {
        localStorage.setItem("livros",  JSON.stringify(dados));
    }

    dados = JSON.parse(localStorage.getItem("livros"));
    console.log(dados);

    let dadosApresentacao = dados;

//--------------------------------------------------------------------------------LIVROS CADASTRADOS-----------------------------------------------------------------------------------------------------------------

function listaLivros(){
   
        let livros = localStorage.getItem("livros");
            livros = JSON.parse(livros);
            livros.forEach(livro =>{
                document.write("<div class = livrosCadastrados>");
                document.write("<div class = livro>");
                document.write("<h1>"+livro.nome+"</h1>");
                document.write("<h2>por: <span>"+livro.autor+" (Autor)</span></h2>");
                document.write("<p>"+livro.descricao+"</p>");
                document.write("<div class = button>");
                document.write("<button class = buttonStatus id = color onclick = 'click'>Disponível</button>");
                document.write("</div>");
                document.write("</div>");
                document.write("</div>");
        });
}

//--------------------------------------------------------------------------------CAMPO DE PESQUISA-----------------------------------------------------------------------------------------------------------------

function atualizarTela() {
    let divDados = document.getElementById("dadosTela");
    console.log(divDados);
    console.log(divDados.firstChild); 

    while(divDados.firstChild) {
        divDados.removeChild(divDados.firstChild);
    }

    let paineis = "";

    if (dadosApresentacao.length > 0) {
        dadosApresentacao.forEach(function(item){

            paineis += "<div class = livrosCadastrados>";
            paineis += "<div class = livro>";
            paineis += "<h1>"+item.nome+"</h1>";
            paineis += "<h2>por: <span>"+item.autor+" (Autor)</span></h2>";
            paineis += "<p>"+item.descricao+"</p>";
            paineis += "<div class = button>";
            paineis += "<button class = buttonStatus id = color onclick = 'click'>Disponível</button>";
            paineis += "</div>";
            paineis += "</div>";
            paineis += "</div>";
            });
        divDados.innerHTML = paineis;
    } else {
            paineis += "<div class = livrosCadastrados>";
            paineis += "<div class = livro>";
            paineis += "<h1>Nenhum livro encontrado</h1>";
            paineis += "</div>";
            paineis += "</div>";
            divDados.innerHTML = paineis;
        }
}   
atualizarTela();

function pesquisar() {
    let campoPesquisa = document.getElementById("pesquisa").value;
    console.log(campoPesquisa);

    dadosApresentacao = dados.filter( e => e.nome.toUpperCase().indexOf(campoPesquisa.toUpperCase()) > -1 );
    console.log(dadosApresentacao);
    atualizarTela();
};

//--------------------------------------------------------------------------------MUDAR COR DO BOTÃO AO CLICAR-----------------------------------------------------------------------------------------------------------------

function click(){
    let buttons = document.querySelectorAll('#color');
    buttons.forEach((item) => {
        item.addEventListener('click', () => {
            const currentColor = item.style.backgroundColor;
            console.log(currentColor)
            if (currentColor == 'rgb(201, 48, 44)') {
                item.style.backgroundColor='#6a6af9'
            } else {
                item.style.backgroundColor='#c9302c'
                item.textContent("Indisponível")
            }
        });
    });
};
click();

