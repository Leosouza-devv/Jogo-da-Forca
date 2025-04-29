'use strict'

// (INICIO) CODIGO REFERENTE A PASSAGEM DE TELAS
let tela_inicial = document.getElementById('tela_inicial');
let modo_jogo = document.getElementById('modo_jogo');
let coletor_palavra = document.getElementById('coletor_palavra');
let como_funciona = document.getElementById('como_funciona');
let forca = document.getElementById('game');
let fim_game = document.getElementById('fim_game');

let alert1 = document.getElementById('alert1');
let alert2 = document.getElementById('alert2');

let rodape = document.getElementById('rodape_site');

let validador_modo_solo = false;

function game(tela_ativa, frase_fim_game, palavra_md_solo, tema_md_solo) {
    if (tela_ativa == 1) { // tela inicial (1)
        tela_inicial.style.display = 'flex';
        modo_jogo.style.display = 'none';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
        document.getElementById('dica_tema_txt').style.opacity = '0';
        document.getElementById('palavra').value = '';
        document.getElementById('tema').value = '';
    }

    if (tela_ativa == 2) { // tela modo de jogo (2)
        tela_inicial.style.display = 'none';
        modo_jogo.style.display = 'flex';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
        document.getElementById('dica_tema_txt').style.opacity = '0';
        document.getElementById('palavra').value = '';
        document.getElementById('tema').value = '';

        document.getElementById('dica_tema').style.background = '#3c3d41'; // retirando a cor ativada da dica e voltando para cor padrão

        // retirando a cor de tecla ativada e voltando para cor padrão
        for (let ind = 1; ind <= 26; ind++) {
            let tecla_ativada = document.getElementById('tecla_'+ind);
            tecla_ativada.style.background = '#3c3d41';
        }

        //pausando audio de vitoria ou perca do game
        let audio_ganhando = document.getElementById('audio_ganhando');
        audio_ganhando.pause();
        audio_ganhando.currentTime = 0;
        let audio_perdendo = document.getElementById('audio_perdendo');
        audio_perdendo.pause();
        audio_perdendo.currentTime = 0;
    }

    if (tela_ativa == 3) { // tela da coleta da palavra e da dica/tema (3)
        tela_inicial.style.display = 'none';
        modo_jogo.style.display = 'none';
        coletor_palavra.style.display = 'flex';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        alert1.style.display = 'none';
        alert2.style.display = 'none';
        document.documentElement.style.setProperty('--buttom_js', '#ffd490');
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
        document.getElementById('dica_tema_txt').style.opacity = '0';
    }

    if (tela_ativa == 4) {// tela de como funciona o game (4)
        tela_inicial.style.display = 'none';
        modo_jogo.style.display = 'none';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'flex';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
    }

    if (tela_ativa == 5) {// tela do game em si (5)

        let palavra = document.getElementById('palavra').value;
        palavra = palavra.toUpperCase();
        let tema = document.getElementById('tema').value;
        if (palavra && tema) {
            tela_inicial.style.display = 'none';
            modo_jogo.style.display = 'none';
            coletor_palavra.style.display = 'none';
            como_funciona.style.display = 'none';
            forca.style.display = 'flex';
            fim_game.style.display = 'none';
            rodape.style.display = 'none';
            Game_forca(palavra, tema);
            document.getElementById('palavra').value = '';
            document.getElementById('tema').value = '';
        

        } 
        else if(validador_modo_solo == true){
            tela_inicial.style.display = 'none';
            modo_jogo.style.display = 'none';
            coletor_palavra.style.display = 'none';
            como_funciona.style.display = 'none';
            forca.style.display = 'flex';
            fim_game.style.display = 'none';
            rodape.style.display = 'none';
            palavra = palavra_md_solo;
            tema = tema_md_solo;

            Game_forca(palavra, tema);
            validador_modo_solo = false; // desvalidando para se tornar possivel uma nova partida solo posteriomente

        }
        else {
            alert1.style.display = 'flex';
            alert2.style.display = 'flex';
            document.documentElement.style.setProperty('--buttom_js', '#f95050');
        }

    }



    if (tela_ativa == 7) { // tela do fim do game (7)
        tela_inicial.style.display = 'none';
        modo_jogo.style.display = 'none';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'flex';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
        let fim_game_txt = document.getElementById('fim_h2');
        fim_game_txt.innerHTML = frase_fim_game;
    }
}

function saida(confirmacao, abrir_saida){
    
    // pedido de confirmação para sair do game para a tela inicial
    
    let confirmacao_saida = document.getElementById('confirmacao_saida');
    


    if(abrir_saida == false){
        abrir_saida = true;//valor boleano que indica se a tela de confirmação está ou não ativa
        confirmacao_saida.style.display = 'flex';//tranforma o container visivel
        
    }

    if(confirmacao == true){
        game(1); //sai do game para a tela inicial
        abrir_saida = false;
        confirmacao_saida.style.display = 'none';
        letras_descobertas = 0;//reinicia quantidade de letras descobertas
        vidas = 7;//reinicia quantidade de vidas 
        img_forca_game.innerHTML = '<img src="fotos/vida_7.svg" alt="Imagem do jogo da forca" class="img_forca" >';
        teclasUsadas = new Set();//reinicia teclas usadas no game 
        

    }
    else if(confirmacao == false){
        abrir_saida = false;//valor boleano que indica se a tela de confirmação está ou não ativa  
        confirmacao_saida.style.display = 'none'; //oculta o container 
    }
    

}

// (FIM) CODIGO REFERENTE A PASSAGEM DE TELAS
//--------------------------------------------------------------------------------//
// (INICIO) CODIGO REFERENTE AO GAME EM SI

// CODIGO REFERENTE AO ARMAZENAMENTO DO TEMA NO ESPAÇO DE DICA/TEMA DO GAME
function Game_forca(palavra, tema) {
    palavra = palavra.toUpperCase();
    let abrir_tema = false;
    let dica_tema = document.getElementById('dica_tema');
    dica_tema.addEventListener('click', function () {
        let dica_tema_txt = document.getElementById('dica_tema_txt');
        dica_tema_txt.innerHTML = '<p>' + tema.replace(/\s+/g, " ").trim() + '</p><ion-icon name="caret-up-outline" id="seta"></ion-icon>';
        if (abrir_tema === false) {
            dica_tema_txt.style.opacity = '1';
            abrir_tema = true;
            dica_tema.style.background = '#038764';

        } else {
            dica_tema_txt.style.opacity = '0';
            abrir_tema = false;
            dica_tema.style.background = '#3c3d41';
        }
    });
    logica_game_forca(palavra);
}
//----------------------------------------------------------------------------------------------------------------------//
let array_palavra = []; // Array responsavel por armazenar porteriormente a palavra desmembrada em letras
let vidas = 7; 
let teclasUsadas = new Set();  // Nova variável para armazenar teclas já usadas

// Mapa de caracteres acentuados para suas versões sem acento
const acentosMap = {
    'Á': 'A', 'À': 'A', 'Â': 'A', 'Ã': 'A',
    'Ó': 'O', 'Ô': 'O', 'Õ': 'O',
    'É': 'E', 'Ê': 'E',
    'Í': 'I', 'Î': 'I',
    'Ú': 'U', 'Û': 'U',
    'Ç': 'C'
    
};

//CODIGO REFERENTE A CRIAÇÃO DO ESPAÇO DA PALAVRA OCULTA
function logica_game_forca(palavra) {
    vidas = 7;
    let palavra_S_espaço = palavra.replace(/\s+/g, " ").trim();
    let array = palavra_S_espaço.split('');
    let palavraOculta = document.getElementById('palavraOculta');
    palavraOculta.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        let letra_div = document.createElement('div');
        letra_div.classList.add('P_O');
        palavraOculta.appendChild(letra_div);
        let letra = document.createElement('p');
        letra.id = 'caracter' + i;
        if (array[i].toUpperCase() !== ' ') {
            letra.textContent = array[i];
            letra_div.appendChild(letra);
            letra.style.opacity = '0';
        } else {
            letra.textContent = '-';
            letra_div.appendChild(letra);
        }
    }
    array_palavra = array;

}
//----------------------------------------------------------------------------------------------------------------------//

//CODIGO REFERENTE A LOGICA DE JOGABILIDADE
let valor_elementos_array = 0; // espaço responsavel por armazenar a quantidade de letras presentes no array_palavra
let letras_descobertas = 0; // espaço responsavel por armazenar a quantidade de letras descobertas dentro do game

function teclado_palavraOculta(tecla, numero_tecla_pressionada) {
    // Verifica se a tecla já foi usada
    if (teclasUsadas.has(tecla.toUpperCase())) {
        //obs:PODEMOS COLOCAR UM SOM DE NEGAÇÃO
        return;  // Impede o clique na mesma tecla
    }
     
    teclasUsadas.add(tecla.toUpperCase());  // Marca a tecla como usada
    

    valor_elementos_array = 0;
    let letra_atual = '';


    for (let i = 0; i < array_palavra.length; i++) {
        if (array_palavra[i].toUpperCase() !== ' ') {
            valor_elementos_array += 1;
        }

        // Remover acentos utilizando o mapa
        let letraSemAcento = acentosMap[array_palavra[i].toUpperCase()] || array_palavra[i];
        if (tecla.toUpperCase() === letraSemAcento) {
            let letra = document.getElementById('caracter' + i); // Cria um ID numerado para cada letra da palavra oculta
            letra.style.opacity = '1';
            letra_atual = array_palavra[i];
            letras_descobertas += 1; // jogador acumula quantidade de letras que acertou, onde as mesmas serão analisadas para saber se o jogador ganhou o game

            //mudando a cor da tecla quando pressionada(cor alterada para quando for a letra)
            let tecla_pressionada = document.getElementById('tecla_'+numero_tecla_pressionada);
            tecla_pressionada.style.background = '#09ab80';
            
            // som de acerto
            let audio_acerto = document.getElementById('audio_tecla_certa');
            audio_acerto.currentTime = 0; //resetando som antes de dar play
            audio_acerto.volume = .4;
            audio_acerto.play();
            
        }
    }

    //Jogador perde uma vida para cada erro
    if (tecla.toUpperCase() !== acentosMap[letra_atual.toUpperCase()]  && vidas > 0 ) {
        if(tecla.toUpperCase() !== letra_atual.toLocaleUpperCase()){
            vidas -= 1;
            let img_forca_game = document.getElementById('img_forca_game');
    
            img_forca_game.innerHTML = '<img src="fotos/vida_'+vidas+'.svg" alt="Imagem do jogo da forca" class="img_forca" >';
            
            //mudando a cor da tecla quando pressionada(cor alterada para quando não for a letra)
            let tecla_pressionada = document.getElementById('tecla_'+numero_tecla_pressionada);
            tecla_pressionada.style.background = '#ab0944';

            // audio de dano
            let audio_dano = document.getElementById('audio_tecla_errada');
            audio_dano.currentTime = 0; //reseta som antes de dar play
            audio_dano.volume = .4;
            audio_dano.play();
        }
        

    }
    //Resultado caso jogador perca o jogo
    if (vidas === 0) {
        setTimeout(function(){
            letras_descobertas = 0;
            vidas = 7;
            teclasUsadas = new Set();
            img_forca_game.innerHTML = '<img src="fotos/vida_7.svg" alt="Imagem do jogo da forca" class="img_forca" >';
            game(7, 'Fim de jogo, você perdeu! <br><span> A palavra era "'+array_palavra.join('')+'"</span>');            
            //audio perdendo o game
            let audio_perdendo = document.getElementById('audio_perdendo');
            audio_perdendo.volume = .4;
            audio_perdendo.play();
        }, 1000);

        
    }
    //Resultado caso o jogador ganhe o jogo 
    else if (valor_elementos_array === letras_descobertas) {
        setTimeout(function(){
            letras_descobertas = 0;
            vidas = 7;
            teclasUsadas = new Set();
            img_forca_game.innerHTML = '<img src="fotos/vida_7.svg" alt="Imagem do jogo da forca" class="img_forca" >';
            game(7, 'Parabéns, você ganhou!');

            //audio ganhando o game 
            let audio_ganhando = document.getElementById('audio_ganhando');
            audio_ganhando.volume = .4;
            audio_ganhando.play();

        }, 1000);
        
    }

    
}


// (FIM) CODIGO REFERENTE AO GAME EM SI

//------------------------------------------------------------------------------------------------------------------------------//

//(INICIO) FUNÇÕES REFERENTES AOS DETALHES SONOROS DO GAME 


let audio = document.getElementById('audio_fundo');
audio.volume = 0;

function trilha() {
    audio.play();
    let icon_audio = document.getElementById('btn_audio');
    if (audio.volume != 0) {
        icon_audio.innerHTML = '<ion-icon name="volume-mute"></ion-icon>';
        audio.pause();
        audio.volume = 0;
    } else {
        icon_audio.innerHTML = '<ion-icon name="volume-high"></ion-icon>';
        audio.play();
        audio.volume = 1;
    }
}

function btn_som(){
    let audio_click = document.getElementById('audio_click');
    audio_click.currentTime = 0;
    audio_click.volume = .8;
    audio_click.play();

}


//(FIM) FUNÇÕES REFERENTES AOS DETALHES SONOROS DO GAME 
//FUNÇÃO RESPONSAVEL POR RANDONIZAR A PALAVRA E A DICA PARA O MODO SOLO 

function modo_solo(){
    //(INICIO) PALAVRAS REFERENTES AO MODO SOLO DO GAME 

    //300 palavras e dicas para o modo solo
    let palavras_dicas = [
        ["coragem", "Enfrentar o desconhecido"],
        ["oceano", "Abismo de água salgada"],
        ["arco", "Forma que projeta"],
        ["estrela", "Luz distante no céu"],
        ["viagem", "Mover-se para outro lugar"],
        ["dente", "Parte dura na boca"],
        ["festa", "Evento de celebração"],
        ["floresta", "Mundo verde e misterioso"],
        ["neve", "Frio que cobre tudo"],
        ["sorvete", "Delícia que derrete rápido"],
        ["radar", "Tecnologia que detecta objetos"],
        ["tartaruga", "Ser lento com casco"],
        ["vampiro", "Criatura que evita a luz"],
        ["eletricidade", "Energia invisível e potente"],
        ["trono", "Assento de poder"],
        ["avião", "Veículo que corta os céus"],
        ["caverna", "Refúgio subterrâneo e sombrio"],
        ["desafio", "Algo que testa limites"],
        ["peixe", "Ser que vive nas profundezas"],
        ["medalha", "Símbolo de honra conquistada"],
        ["escudo", "Defesa contra ataque"],
        ["outono", "Estação que prepara o inverno"],
        ["lago", "Espelho de água natural"],
        ["martelo", "Ferramenta de impacto"],
        ["foca", "Habitante das águas geladas"],
        ["túnel", "Caminho escuro e fechado"],
        ["moinho", "Transforma vento em força"],
        ["pinguim", "Ave que desliza na neve"],
        ["sabão", "Faz desaparecer a sujeira"],
        ["desenho", "Arte com linhas e formas"],
        ["bola", "Objeto de movimento constante"],
        ["computador", "Máquina que processa dados"],
        ["cachorro", "Companheiro fiel e protetor"],
        ["livro", "Repositório de sabedoria escrita"],
        ["sol", "Fonte de luz vital"],
        ["chuva", "Água que cai do céu"],
        ["piano", "Instrumento com teclas sonoras"],
        ["carro", "Veículo movido por motor"],
        ["tigre", "Predador ágil e silencioso"],
        ["escada", "Caminho de subida ou descida"],
        ["rocha", "Base sólida e duradoura"],
        ["bola", "Objeto que rola e quica"],
        ["escola", "Instituição que ensina saberes"],
        ["luz", "Ilumina tudo ao redor"],
        ["meditação", "Mente em estado de paz"],
        ["cavalo", "Criatura de corrida e força"],
        ["chave", "Desbloqueia portas e caminhos"],
        ["banco", "Onde guardamos riquezas"],
        ["fogo", "Fonte de calor e luz"],
        ["espelho", "Reflexo da realidade"],
        ["flor", "Beleza efêmera da natureza"],
        ["pilha", "Fonte de energia portátil"],
        ["música", "Harmonia de sons organizados"],
        ["guitarra", "Instrumento de cordas vibrantes"],
        ["computação", "Ciência que transforma dados"],
        ["fotografia", "Captura de momentos congelados"],
        ["festa", "Celebração de alegria e união"],
        ["relojoaria", "Onde o tempo é reparado"],
        ["tigre", "Felino de força letal"],
        ["árvore", "Gigante verde com raízes"],
        ["pato", "Ave aquática com bico largo"],
        ["calendário", "Marca o tempo e os dias"],
        ["média", "Valor intermediário de um conjunto"],
        ["janela", "Abertura para ver o mundo"],
        ["caneta", "Ferramenta que marca o papel"],
        ["flamengo", "Time de futebol popular"],
        ["mão", "Parte do corpo que segura"],
        ["moeda", "Dinheiro redondo e metálico"],
        ["mochila", "Bagagem de costas com utilidade"],
        ["macaco", "Ser brincalhão e ágil"],
        ["estrela", "Ponto luminoso distante"],
        ["sombra", "Área escura criada pela luz"],
        ["pimenta", "Especiaria que arde"],
        ["prato", "Recipiente de refeição"],
        ["bola", "Objeto de jogos e esportes"],
        ["fósforo", "Pequeno palito que acende"],
        ["mágica", "Ilusão de realidade"],
        ["geleia", "Doce de fruta gelificado"],
        ["cachoeira", "Água que cai em queda livre"],
        ["janela", "Abertura para o exterior"],
        ["relógio", "Marca a passagem do tempo"],
        // Adicionando mais até 100...
        ["planeta", "Corpo celeste em órbita"],
        ["cólera", "Raiva incontrolável"],
        ["pântano", "Terreno alagado e lamacento"],
        ["deserto", "Local sem vegetação"],
        ["pirâmide", "Estrutura triangular do Egito"],
        ["tornado", "Vento forte e destrutivo"],
        ["espectro", "Fenômeno luminoso misterioso"],
        ["sismo", "Movimento sísmico subterrâneo"],
        ["labirinto", "Caminho complicado e intrincado"],
        ["quimera", "Ser mitológico fantástico"],
        ["relâmpago", "Descarga elétrica atmosférica"],
        ["ciclone", "Sistema de vento giratório"],
        ["ressonância", "Vibração harmônica ou onda"],
        ["apogeu", "Ponto mais alto ou auge"],
        ["salvação", "Resgate de uma situação difícil"],
        ["oráculo", "Fonte de sabedoria misteriosa"],
        ["fluxo", "Movimento contínuo"],
        ["cobertor", "Proteção contra o frio"],
        ["polígono", "Figura com várias faces"],
        ["constelação", "Grupo de estrelas visíveis"],
        ["barroco", "Estilo artístico exagerado"],
        ["quartzito", "Tipo de rocha resistente"],
        ["quixote", "Sonhador com ideais elevados"],
        ["esquife", "Caixão funerário"],
        ["batismo", "Ritual de purificação religiosa"],
        ["simetria", "Equilíbrio nas formas"],
        ["infinito", "Sem fim, eterno"],
        ["vórtice", "Movimento espiral de água"],
        ["miragem", "Ilusão de ótica no deserto"],
        ["frágil", "Algo que quebra facilmente"],
        ["agora", "O presente, momento atual"],
        ["antigo", "Algo que pertence ao passado"],
        ["vanguarda", "Inovação, ponta da tecnologia"],
        ["projeção", "Imagem ampliada ou refletida"],
        ["filosofia", "Estudo das questões fundamentais"],
        ["herança", "Bens transmitidos de geração em geração"],
        ["idílio", "Período de paz e felicidade"],
        ["cataclismo", "Grande desastre natural"],
        ["tectônica", "Movimento das placas da Terra"],
        ["ecosfera", "Camada de vida na Terra"],
        ["dilema", "Problema sem solução simples"],
        ["labareda", "Chama forte e intensa"],
        ["extremidade", "Ponto mais distante ou final"],
        ["terremoto", "Abalo sísmico na Terra"],
        ["aura", "Campo energético ao redor"],
        ["magma", "Rochas derretidas subterrâneas"],
        ["romance", "Gênero literário amoroso"],
        ["abissal", "Profundezas extremas do mar"],
        ["bioma", "Ecossistema em grande escala"],
        ["ecosistema", "Conjunto de seres e ambiente"],
        ["nevoeiro", "Neblina espessa e densa"],
        ["colisão", "Impacto entre objetos"],
        ["áurea", "Período de grande sucesso"],
        ["têmpera", "Qualidade de ser resistente"],
        ["vivaz", "Cheio de vida e energia"],
        ["heráldica", "Estudo dos brasões e símbolos"],
        ["percepção", "Capacidade de perceber ou sentir"],
        ["prelúdio", "Primeira parte de uma obra"],
        ["corrente", "Fluxo contínuo de energia"],
        ["alteração", "Mudança ou modificação"],
        ["função", "Propósito ou tarefa definida"],
        ["indício", "Pista que leva a uma conclusão"],
        ["constância", "Qualidade de ser estável"],
        ["nebulosa", "Nuvem de gás e poeira no espaço"],
        ["vertigem", "Sensação de tontura"],
        ["gênese", "Origem ou início de algo"],
        ["ecossistema", "Interação entre seres e ambiente"],
        ["luminiscência", "Emissão de luz sem calor"],
        ["paradoxo", "Afirmação contraditória mas verdadeira"],
        ["génio", "Pessoa com grande inteligência"],
        ["instinto", "Comportamento inato e natural"]
        ["cristal", "Material que reflete luz com brilho"],
        ["maçã", "Fruto com casca vermelha ou verde"],
        ["corrida", "Atividade que envolve velocidade"],
        ["barulho", "Som perturbador ou forte"],
        ["relógio", "Instrumento que marca o tempo"],
        ["lagoa", "Corpo de água doce rodeado por terra"],
        ["luz", "Fenômeno físico de visibilidade"],
        ["geleia", "Doce espesso feito com frutas"],
        ["paz", "Estado de tranquilidade e harmonia"],
        ["fênix", "Ave mitológica que renasce das cinzas"],
        ["tempestade", "Fenômeno atmosférico violento"],
        ["magma", "Lava subterrânea em estado líquido"],
        ["carneiro", "Animal de lã e chifres enrolados"],
        ["vórtice", "Movimento circular de água ou ar"],
        ["labirinto", "Caminho complexo e confuso"],
        ["pântano", "Terreno alagado com vegetação densa"],
        ["relâmpago", "Descarga elétrica atmosférica"],
        ["piscina", "Local artificial para nadar"],
        ["roda", "Objeto circular que gira"],
        ["dúvida", "Incerteza, falta de certeza"],
        ["corredor", "Caminho estreito para se locomover"],
        ["catedral", "Igreja de grande porte"],
        ["túnel", "Caminho subterrâneo ou fechado"],
        ["gelo", "Água congelada"],
        ["lava", "Rochas fundidas expelidas por vulcões"],
        ["fantasma", "Entidade invisível ou sobrenatural"],
        ["foguete", "Veículo que viaja pelo espaço"],
        ["fósforo", "Palito que gera fogo"],
        ["maré", "Subida e descida das águas do mar"],
        ["vento", "Movimento do ar"],
        ["pedra", "Material sólido e durável"],
        ["buraco", "Abertura no solo"],
        ["serpente", "Animal rastejante e venenoso"],
        ["abismo", "Grande e profundo precipício"],
        ["fósforo", "Palito inflamável"],
        ["tigre", "Felino de grandes garras"],
        ["sol", "Fonte de luz e energia"],
        ["neve", "Cristais de água que caem do céu"],
        ["carne", "Parte comestível de um animal"],
        ["estrela", "Ponto brilhante no céu à noite"],
        ["reflexo", "Imagem projetada em uma superfície"],
        ["ferrugem", "Produto da oxidação do metal"],
        ["nevoeiro", "Neblina espessa que obscurece a visão"],
        ["fantasia", "Imaginário ou aparência fictícia"],
        ["relógio", "Instrumento usado para medir o tempo"],
        ["melodia", "Sequência musical agradável"],
        ["barco", "Embarcação para navegação"],
        ["caneta", "Instrumento de escrita"],
        ["banco", "Instituição financeira"],
        ["deserto", "Área com pouca vegetação e muita areia"],
        ["jogo", "Atividade competitiva ou recreativa"],
        ["espelho", "Superfície que reflete imagens"],
        ["fio", "Corda fina e comprida"],
        ["rocha", "Material sólido e natural"],
        ["grito", "Som forte e agudo"],
        ["mestre", "Especialista ou professor em alguma área"],
        ["sombra", "Área escura causada pela obstrução da luz"],
        ["água", "Substância líquida essencial para a vida"],
        ["neblina", "Mistura de água e ar que obscurece a visão"],
        ["reflexão", "Retorno da luz após atingir uma superfície"],
        ["vampiro", "Criatura mitológica que se alimenta de sangue"],
        ["pássaro", "Animal com penas e asas"],
        ["olho", "Órgão responsável pela visão"],
        ["maçã", "Fruto da macieira"],
        ["cachoeira", "Queda de água de grande altura"],
        ["borboleta", "Inseto com asas coloridas e delicadas"],
        ["sorvete", "Sobremesa congelada e doce"],
        ["música", "Composição de sons com ritmo"],
        ["espelho", "Superfície que reflete a luz"],
        ["piano", "Instrumento musical com teclas"],
        ["bloco", "Peça sólida e retangular"],
        ["abóbora", "Fruto de casca dura e interna esponjosa"],
        ["teatro", "Espaço para apresentações dramáticas"],
        ["mágico", "Pessoa que realiza truques ou feitiçaria"],
        ["sombra", "Área de escuridão gerada por obstrução da luz"],
        ["porcelana", "Material cerâmico fino e brilhante"],
        ["geleira", "Massa de gelo em movimento"],
        ["raio", "Descarga elétrica rápida e violenta"],
        ["ferramenta", "Instrumento usado para realizar um trabalho"],
        ["avião", "Veículo aéreo de transporte"],
        ["sol", "Estrela central do sistema solar"],
        ["roda", "Objeto circular que gira em torno de um eixo"],
        ["explosão", "Liberação súbita de energia"],
        ["cavalo", "Animal de grande porte utilizado em montaria"],
        ["galáxia", "Conjunto de estrelas, planetas e outros corpos celestes"],
        ["oceano", "Grande extensão de água salgada"],
        ["festa", "Evento de celebração com amigos ou familiares"],
        ["cachorro", "Animal doméstico conhecido por ser fiel"],
        ["sistema", "Conjunto de elementos interdependentes"],
        ["fotografia", "Arte de capturar imagens em filmes ou digitais"],
        ["ilha", "Território cercado por água"],
        ["caverna", "Espaço subterrâneo natural"],
        ["espelho", "Superfície que reflete imagens"],
        ["cavalo", "Animal de montaria e força"],
        ["moinho", "Máquina que transforma vento em energia"],
        ["sabão", "Produto usado para limpeza"],
        ["tigre", "Felino grande e predador"],
        ["luz", "Fenômeno físico que ilumina o ambiente"],
        ["tornado", "Vento em rotação com grande força"],
        ["escola", "Instituição dedicada ao ensino"],
        ["chuva", "Precipitação de água proveniente das nuvens"],
        ["dinossauro", "Animal pré-histórico extinto"],
        ["nuvem", "Acúmulo de vapor d'água suspenso no ar"],
        ["tigre", "Felino de grande porte"],
        ["caverna", "Espaço subterrâneo"],
        ["festa", "Celebração social"],
        ["arco-íris", "Fenômeno atmosférico colorido"],
        ["foguete", "Veículo espacial"],
        ["desafio", "Tarefa que exige esforço"],
        ["piano", "Instrumento musical com teclas"],
        ["túnel", "Passagem subterrânea"],
        ["fantasma", "Entidade sobrenatural"],
        ["moinho", "Equipamento para moer grãos"],
        ["atitude", "Comportamento ou postura"],
        ["ilusão", "Percepção falsa da realidade"],
        ["dinheiro", "Meio de troca usado em economias"],
        ["som", "Vibração que viaja pelo ar"],
        ["você", "Pessoa a quem se dirige a fala"]
        ["fornalha", "Lugar quente onde se aquece"],
        ["brisa", "Vento suave e leve"],
        ["mergulhador", "Pessoa que explora o fundo do mar"],
        ["chama", "Fogo intenso e vibrante"],
        ["fantasia", "Vestimenta para ocasiões especiais"],
        ["moinho", "Máquina que transforma grãos em pó"],
        ["espelho", "Objeto que reflete imagens"],
        ["trilha", "Caminho ou estrada estreita"],
        ["geada", "Cristais de gelo que se formam no solo"],
        ["balança", "Instrumento para medir peso"],
        ["vórtice", "Movimento giratório e rápido"],
        ["galho", "Ramo de uma árvore"],
        ["tartaruga", "Animal com casco e andar lento"],
        ["mestre", "Especialista em determinada área"],
        ["deserto", "Área sem vegetação e com areia"],
        ["luz", "Fenômeno que ilumina e permite a visão"],
        ["metálico", "Que possui propriedades de metal"],
        ["abismo", "Desfiladeiro profundo e perigoso"],
        ["vento", "Ar em movimento"],
        ["espécie", "Grupo de seres vivos semelhantes"],
        ["resina", "Substância viscosa extraída de plantas"],
        ["olho", "Órgão da visão"],
        ["tigre", "Felino selvagem e predador"],
        ["poça", "Acúmulo de água em um buraco no solo"],
        ["carro", "Veículo motorizado de transporte"],
        ["nuvem", "Formação de vapor d'água no céu"],
        ["sol", "Fonte de luz e calor para o planeta"],
        ["gigante", "Algo de tamanho imenso"],
        ["esfera", "Objeto com formato redondo"],
        ["fumaça", "Gás que sobe após queima"],
        ["rastro", "Marca deixada por algo em movimento"],
        ["túnel", "Passagem subterrânea ou aberta"],
        ["rocha", "Material sólido encontrado na natureza"],
        ["pássaro", "Animal com penas e asas"],
        ["prisma", "Corpo geométrico com faces poligonais"],
        ["chuva", "Precipitação de água no estado líquido"],
        ["parafuso", "Objeto cilíndrico com rosca"],
        ["joia", "Objeto de valor ornamental"],
        ["enigma", "Algo misterioso ou difícil de resolver"],
        ["fuga", "Ato de escapar ou sair rapidamente"],
        ["foguete", "Veículo lançado ao espaço"],
        ["caminho", "Direção ou trajeto a seguir"],
        ["neve", "Água congelada que cai do céu"],
        ["águia", "Ave de rapina e grande porte"],
        ["mágico", "Pessoa que realiza truques ou encantamentos"],
        ["relâmpago", "Descarga elétrica rápida e visível"],
        ["cavalo", "Animal de montaria com grande força"],
        ["oásis", "Área de vegetação em um deserto"],
        ["ferrugem", "Formação que ocorre quando o ferro oxida"],
        ["bordado", "Decoração feita com agulha e linha"],
        ["trevo", "Planta com quatro folhas, símbolo de sorte"],
        ["vampiro", "Criatura mitológica que se alimenta de sangue"],
        ["planeta", "Corpo celeste que orbita uma estrela"],
        ["guerrilha", "Tática de luta em pequenas unidades"],
        ["nevoeiro", "Nuvem baixa que reduz a visibilidade"],
        ["caverna", "Espaço subterrâneo natural"],
        ["pescador", "Pessoa que pesca no mar ou rios"],
        ["cobertura", "Camada ou proteção em cima de algo"],
        ["matéria", "Substância que compõe o universo"],
        ["gelo", "Água solidificada em baixa temperatura"],
        ["agora", "Momento presente"],
        ["lago", "Corpo de água doce"],
        ["corte", "Ato de cortar algo"],
        ["diamante", "Pedra preciosa e rara"],
        ["moeda", "Objeto metálico usado como meio de troca"],
        ["vórtice", "Movimento giratório e concentrado"],
        ["domínio", "Área de controle ou influência"],
        ["rocha", "Material natural sólido e durável"],
        ["festa", "Celebração em grupo"],
        ["arco", "Estrutura curva usada em esportes e armas"],
        ["galáxia", "Conjunto de estrelas, planetas e gás"],
        ["monstro", "Criatura mitológica ou assustadora"],
        ["foco", "Centro de atenção ou atividade"],
        ["inverno", "Estação do ano com temperaturas baixas"],
        ["floresta", "Grande área de vegetação densa"],
        ["neve", "Precipitação sólida de água"],
        ["roda", "Objeto circular que gira em torno de um eixo"],
        ["folha", "Parte da planta que realiza fotossíntese"],
        ["caminhão", "Veículo pesado de carga"],
        ["extinção", "Desaparecimento de uma espécie"],
        ["sabão", "Produto usado para limpeza"],
        ["colina", "Pequena elevação de terreno"],
        ["desafio", "Proposta difícil de realizar"],
        ["noite", "Período de escuridão diária"],
        ["luz", "Fenômeno natural que permite a visão"],
        ["tornado", "Vento rotacionando com grande força"],
        ["feitiço", "Magia ou encantamento"],
        ["sombra", "Área sombreada pela obstrução da luz"],
        ["cachoeira", "Queda d'água de grande altura"],
        ["horizonte", "Linha onde o céu encontra a terra"],
        ["atmosfera", "Camada de gases ao redor da Terra"],
        ["orvalho", "Gotas de água que se formam nas plantas pela manhã"],
        ["buraco", "Abertura ou cavidade no solo"],
        ["fenômeno", "Evento natural ou de grande impacto"],
        ["jogo", "Atividade lúdica com regras e objetivos"],
        ["maré", "Movimento das águas do mar"],
        ["canal", "Corpo de água artificial ou natural"],
        ["raio", "Feixe de luz gerado por uma descarga elétrica"],
        ["mistério", "Algo difícil de entender ou resolver"],
        ["estrada", "Caminho pavimentado para veículos"],
        ["esfera", "Objeto com formato arredondado"],
        ["brisa", "Vento suave e agradável"],
        ["cachorro", "Animal doméstico e fiel"],
        ["luz", "Fenômeno que permite a visão"],
        ["anel", "Objeto circular usado como adorno"],
        ["barco", "Embarcação usada para navegação"],
        ["nebulosa", "Nuvem de gás e poeira no espaço"],
        ["caneta", "Instrumento utilizado para escrever"],
        ["banco", "Instituição financeira"],
        ["infinito", "Sem fim, eterno"],
        ["estrela", "Ponto brilhante no céu"],
        ["rocha", "Material sólido natural"],
        ["piano", "Instrumento musical com teclas"],
        ["escudo", "Objetos usados para defesa"],
        ["cavalo", "Animal forte usado em montaria"],
        ["terremoto", "Movimento da Terra gerado por forças internas"],
        ["fogo", "Chama produzida pela combustão de algo"],
        ["mágico", "Pessoa que usa truques ou magia"],
        ["relógio", "Instrumento que marca as horas"],
        ["lagoa", "Corpo de água pequena e doce"],
        ["fornalha", "Forno usado para aquecer ou fundir materiais"],
        ["vampiro", "Ser que se alimenta de sangue"],
        ["flor", "Parte colorida das plantas"],
        ["abóbora", "Fruto com casca dura e sementes dentro"],
        ["nevoeiro", "Densa camada de umidade no ar"],
        ["barulho", "Som forte ou indesejado"],
        ["fios", "Fios de tecido ou metal"],
        ["pescador", "Pessoa que pesca para viver ou por esporte"],
        ["mestre", "Alguém muito experiente ou com grande conhecimento"]
    ];
        
    //(FIM) PALAVRAS REFERENTES AO MODO SOLO DO GAME 

    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(5,'',array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}



