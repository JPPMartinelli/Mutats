var header_1 = {
    props: ['telaatual'],
    template: `<nav id="opcoes_header">
        <div class="opcao_header" :class="{opcao_header_atual: telaatual == 'inicio'}">Início</div>
        <div class="opcao_header"><a class="titulo" href="sobre_nos.html">Sobre nós</a></div>
        <div class="opcao_header" @click="appVM.show_opcoes_header = !show_opcoes_header"><a class="titulo" href="eventos.html">Eventos</a></div>
        <div class="opcao_header">Transparência</div>
    </nav>`
}