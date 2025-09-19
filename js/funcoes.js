function alterarQtd(id, operacao) {
    const qtdElement = document.getElementById(`qtd_${id}`);
    const valorElement = document.getElementById(`valor_${id}`);
    const totalElement = document.getElementById(`total_${id}`);

    let quantidade = parseInt(qtdElement.textContent);
    const preco = parseFloat(valorElement.textContent);

    if (operacao === '+') {
        quantidade++;
    } else if (operacao === '-' && quantidade > 0) {
        quantidade--;
    }

    qtdElement.textContent = quantidade;
    const total = quantidade * preco;
    totalElement.textContent = total;

    // Chame a função para atualizar o subtotal após cada mudança
    soma();
}

function soma() {
    let subtotal = 0;
    // Seleciona todos os elementos cujo ID começa com 'total_'
    const totalElements = document.querySelectorAll('[id^="total_"]'); 

    totalElements.forEach(element => {
        subtotal += parseFloat(element.textContent);
    });

    const subtotalElement = document.getElementById('subtotal');
    if (subtotalElement) {
        subtotalElement.textContent = subtotal;
    }
}