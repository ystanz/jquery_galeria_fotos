$(document).ready(function() {
    $('header button').click(function() {   
        $('form').slideDown()
    })

    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val(); // para recuperar o valor do input, no jQuery usa apenas .val(); pois é uma função
        const novoItem = $('<li style="display: none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`
            <div class="overlay-image-link">
                <a href="${enderecoDaNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                    Ver imagem em tamanho real
                </a>
            </div>
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000); //função de fazer surgir suavemente o elemento
        $('#endereco-imagem-nova').val(''); //dessa forma o campo é limpo após clicar no botão adicionar
    })
})