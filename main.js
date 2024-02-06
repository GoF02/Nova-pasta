document.getElementById('validarBtn').addEventListener('click', function() {
    var numeroA = parseFloat(document.getElementById('numeroA').value);
    var numeroB = parseFloat(document.getElementById('numeroB').value);

    if (isNaN(numeroA) || isNaN(numeroB)) {
        exibirMensagem('Por favor, insira ambos os números.', 'erro');
        return;
    }

    if (numeroB > numeroA) {
        exibirMensagem('Formulário válido!', 'sucesso');
      limparCampos(); // Limpa os campos se a validação for bem-sucedida
    } else {
        exibirMensagem('O número B deve ser maior que o número A.', 'erro');
    }
    });

    function exibirMensagem(mensagem, tipo) {
    var mensagemElemento = document.getElementById('mensagemErro');
    mensagemElemento.innerText = mensagem;
    mensagemElemento.classList.remove('sucesso', 'erro');
    mensagemElemento.classList.add(tipo);
    }

    function limparCampos() {
    document.getElementById('numeroA').value = '';
    document.getElementById('numeroB').value = '';
    }