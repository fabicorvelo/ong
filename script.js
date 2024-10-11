// Mostra a splash screen por 5 segundos e depois exibe o menu principal
window.onload = function() {
    setTimeout(function() {
        // Esconde a tela de splash
        document.getElementById('splash-screen').style.display = 'none';
        // Mostra o menu principal
        document.getElementById('menu').style.display = 'flex';
    }, 5000);
};

// Funções para cada opção do menu
document.getElementById('option1').addEventListener('click', function() {
    alert('Cadastrar Produto selecionado!');
});

document.getElementById('option2').addEventListener('click', function() {
    alert('Entrada de Produto selecionado!');
});

document.getElementById('option3').addEventListener('click', function() {
    alert('Saída de Produto selecionado!');
});

document.getElementById('option4').addEventListener('click', function() {
    alert('Estoque selecionado!');
});

document.getElementById('option5').addEventListener('click', function() {
    alert('Próximo de Vencimento selecionado!');
});

document.getElementById('option6').addEventListener('click', function() {
    alert('Vencidos selecionado!');
});
