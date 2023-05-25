var codProduto = 1;
var listaProdutos = [];
function adicionarProduto() {
    produto = obterDados();
    //console.log(produto)
    if (validaEntrada(produto)) {
        adicionar(produto)
    }
    listarProdutos(listaProdutos);
}
function listarProdutos(listaDeProdutos) {
    let tbody = document.getElementById("tbody");
    tbody.innerText = '';
    listaDeProdutos.forEach(produtos => {
        let tr = tbody.insertRow();
        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_preco = tr.insertCell();
        let td_acoes = tr.insertCell();
        td_id.innerText = produtos.idProduto;
        td_produto.innerText = produtos.nomeProduto;
        td_preco.innerText = produtos.precoProduto;
        td_id.classList.add('center');
        let imgEdit = document.createElement('img')
        imgEdit.src = 'img/editar.png';
        imgEdit.setAttribute("onclick", "alterar()")

        let imgDelete = document.createElement('img')
        imgDelete.src = 'img/bin.png';

        imgDelete.setAttribute("onclick", "deletar(" + produtos.idProduto
            + ")")

        td_acoes.appendChild(imgEdit);
        td_acoes.appendChild(imgDelete);
        td_acoes.classList.add('center');
        console.log(listaProdutos)
    });
    limparProduto()
}
function adicionar(produto) {
    listaProdutos.push(produto);
    codProduto++;
    console.log(listaProdutos)
}
function obterDados() {
    let produto = {}
    produto.idProduto = codProduto;
    produto.nomeProduto =
        document.getElementById('produto').value;
    produto.precoProduto =
        document.getElementById('preco').value;
    return produto;
}
function validaEntrada(produtoEntrada) {
    let msg = '';
    //vamos desconstruir o objeto
    let { nomeProduto: nome, precoProduto: preco } =
        produtoEntrada
    if (nome == '') {
        msg += "Informe o nome do Produto\n";
    }
    if (preco == '') {
        msg += "Informe o Preço do Produto\n";
    }
    if (msg != '') {
        alert(msg)
        return false
    }
    return true
}
function deletar(id) {
    listaProdutos.forEach((produtos, indice) => {
        if (produtos.idProduto == id) {
            listaProdutos.splice(indice, 1)
            tbody.deleteRow(indice)
        }
    })
}
function alterar() {
    alert("Funcao nao disponivel");
}
function limparProduto() {
    document.getElementById('produto').value = '';
    document.getElementById('preco').value = '';
}