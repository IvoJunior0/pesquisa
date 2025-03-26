function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao = "";
    // Comando se quiser mostrar todos os produtos
    if (campoPesquisa == "/all") {
        dados.forEach((dado) => {
            nome = dado.nome.toLocaleLowerCase();
            descricao = dado.descricao.toLocaleLowerCase();
            resultados += `
            <div class="item-resultado">
                <div class="content">
                    <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <span>R$${dado.preco},00</span>
                </div>
                <div class="imagem">
                    <img src="./imgs/${dado.src}" alt="" srcset="">
                </div>
            </div>
            `;
        });
        section.innerHTML = resultados;
        return;
    }
    if (campoPesquisa == ""){
        resultados = 
        `
            <p><b>ERRO!</b></p>
            <p>Por favor, <b>digite o nome</b> do filme procurado.</p>
        `;
        section.innerHTML = resultados;
        return;
    }

    // Priorizando o mostrar resultados correspondentes ao título do filme buscado.
    // Após isso, mostrar outros resultados de busca.
    let resultadosArray = [];
    dados.forEach((dado) => {
        nome = dado.nome.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        let itemHTML = `
        <div class="item-resultado">
            <div class="content">
                <h2><a href="#" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <span>R$${dado.preco},00</span>
            </div>
            <div class="imagem">
                <img src="./imgs/${dado.src}" alt="" srcset="">
            </div>
        </div>
        `;

        if (nome.includes(campoPesquisa)) { // Coloca no começo 
            resultadosArray.unshift(itemHTML);
        } else if (descricao.includes(campoPesquisa)) { // Coloca no final
            resultadosArray.push(itemHTML);
        }
    });
    resultados = resultadosArray.join("");

    if(!resultados) {
        resultados = 
        `
            <p><b>ERRO!</b></p>
            <p>Resultado <b>não encontrado</b>. Por favor, digite novamente.</p>
        `;
    }     
    section.innerHTML = resultados;
}