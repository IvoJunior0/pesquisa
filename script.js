function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa == ""){
        section.innerHTML = "Nenhum texto digitado!";
        return;
    }

    let resultados = "";
    let nome = "";
    let descricao = "";
    for (let dado of dados){
        nome = dado.nome.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += 
        `
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
        `
        }
    }
    if(!resultados) {
        resultados = "<p>Resultado não Encontrado</p>"
    }     
    section.innerHTML = resultados;
}
