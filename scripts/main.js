'use strict'
// ----------------------------------------------------------------------------------------

// (INICIO) CODIGO REFERENTE A PASSAGEM DE TELAS
let tela_inicial = document.getElementById('tela_inicial');
let modo_jogo = document.getElementById('modo_jogo');
let categoria = document.getElementById('categoria');
let coletor_palavra = document.getElementById('coletor_palavra');
let como_funciona = document.getElementById('como_funciona');
let forca = document.getElementById('game');
let fim_game = document.getElementById('fim_game');
let outros_games = document.getElementById('outros_games');



let alert1 = document.getElementById('alert1');
let alert2 = document.getElementById('alert2');

let rodape = document.getElementById('rodape_site');
// ano copy - Rodapé do site
document.getElementById('ano_copy').textContent = new Date().getFullYear();


let validador_modo_solo = false;

function game(tela_ativa, frase_fim_game, palavra_md_solo, tema_md_solo) {
    if (tela_ativa == 1) { // tela inicial (1)
        tela_inicial.style.display = 'flex';
        modo_jogo.style.display = 'none';
        categoria.style.display = 'none';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        outros_games.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
        document.getElementById('dica_tema_txt').style.opacity = '0';
        document.getElementById('palavra').value = '';
        document.getElementById('tema').value = '';
    }

    if (tela_ativa == 2) { // tela modo de jogo (2)
        tela_inicial.style.display = 'none';
        modo_jogo.style.display = 'flex';
        categoria.style.display = 'none';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        outros_games.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
        document.getElementById('dica_tema_txt').style.opacity = '0';
        document.getElementById('palavra').value = '';
        document.getElementById('tema').value = '';

        document.getElementById('dica_tema').style.background = '#3c3d41'; // retirando a cor ativada da dica e voltando para cor padrão

        // retirando a cor de tecla ativada e voltando para cor padrão
        for (let ind = 1; ind <= 26; ind++) {
            let tecla_ativada = document.getElementById('tecla_' + ind);
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
        categoria.style.display = 'none';
        coletor_palavra.style.display = 'flex';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        outros_games.style.display = 'none';
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
        categoria.style.display = 'none';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'flex';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        outros_games.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
    }

    if (tela_ativa == 5) {
        tela_inicial.style.display = 'none';
        modo_jogo.style.display = 'none';
        categoria.style.display = 'flex'
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        outros_games.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';

    }

    if (tela_ativa == 6) {// tela do game em si (5)

        let palavra = document.getElementById('palavra').value;
        palavra = palavra.toUpperCase();
        let tema = document.getElementById('tema').value;
        if (palavra && tema) {
            tela_inicial.style.display = 'none';
            modo_jogo.style.display = 'none';
            categoria.style.display = 'none';
            coletor_palavra.style.display = 'none';
            como_funciona.style.display = 'none';
            forca.style.display = 'flex';
            fim_game.style.display = 'none';
            outros_games.style.display = 'none';
            rodape.style.display = 'none';
            Game_forca(palavra, tema);
            document.getElementById('palavra').value = '';
            document.getElementById('tema').value = '';


        }
        else if (validador_modo_solo == true) {
            tela_inicial.style.display = 'none';
            modo_jogo.style.display = 'none';
            categoria.style.display = 'none';
            coletor_palavra.style.display = 'none';
            como_funciona.style.display = 'none';
            forca.style.display = 'flex';
            fim_game.style.display = 'none';
            outros_games.style.display = 'none';
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
        categoria.style.display = 'none';
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'flex';
        outros_games.style.display = 'none';
        rodape.style.display = 'flex';
        rodape.style.position = 'relative';
        let fim_game_txt = document.getElementById('fim_h2');
        fim_game_txt.innerHTML = frase_fim_game;
    }

    // Outros games 

    if (tela_ativa == 8) {

        tela_inicial.style.display = 'none';
        modo_jogo.style.display = 'none';
        categoria.style.display = 'none'
        coletor_palavra.style.display = 'none';
        como_funciona.style.display = 'none';
        forca.style.display = 'none';
        fim_game.style.display = 'none';
        outros_games.style.display = 'flex';


        rodape.style.display = 'flex';
        rodape.style.position = 'relative';


    }

}






// ----------------------------------------------------------------------------------------
// Função responsavel pelo olho ocultista
let visivel = false;

function toggle() {
    
    visivel = !visivel;
    const palavra = document.getElementById("palavra");
    const dica = document.getElementById("tema");
    const olho = document.getElementById("olho");
    olho.innerHTML = `
      
        <ion-icon name="eye"></ion-icon>

    `;
    if (visivel) {
        palavra.style.webkitTextSecurity = "none";
        dica.style.webkitTextSecurity = "none";
        olho.innerHTML = `
      
        <ion-icon name="eye"></ion-icon>

    `;
    } else {
        palavra.style.webkitTextSecurity = "disc";
        dica.style.webkitTextSecurity = "disc";
        olho.innerHTML = `
        <ion-icon name="eye-off" style="color:#ab0944;"></ion-icon>
    `;
    }
}
toggle();
// ----------------------------------------------------------------------------------------

function saida(confirmacao, abrir_saida) {

    // pedido de confirmação para sair do game para a tela inicial

    let confirmacao_saida = document.getElementById('confirmacao_saida');



    if (abrir_saida == false) {
        abrir_saida = true;//valor boleano que indica se a tela de confirmação está ou não ativa
        confirmacao_saida.style.display = 'flex';//tranforma o container visivel

    }

    if (confirmacao == true) {
        game(1); //sai do game para a tela inicial
        abrir_saida = false;
        confirmacao_saida.style.display = 'none';
        letras_descobertas = 0;//reinicia quantidade de letras descobertas
        vidas = 7;//reinicia quantidade de vidas 
        img_forca_game.innerHTML = '<img src="fotos/vida_7.svg" alt="Imagem do jogo da forca" class="img_forca" >';
        teclasUsadas = new Set();//reinicia teclas usadas no game 


    }
    else if (confirmacao == false) {
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

        // Código responsavel por previnir que ' ', '-' e '_' contabilizem como letras, evitando a má experiencia na jogatina (se nao = (' ', -, _) execute o código)
        //código responsavel por ocultar as letras da palavra oculta 
        if ((array[i].toUpperCase() !== ' ') && (array[i].toUpperCase() !== '-') && (array[i].toUpperCase() !== '_')) {
            letra.textContent = array[i];
            letra_div.appendChild(letra);
            letra.style.opacity = '0';
        }
        // código responsavel por adicionar "-" aos espaços em branco
        else {
            // o uso de "-"" ou "_" pelo usuario ou pré selecionada pelo banco de palavras serve para palavras compostas 
            if ((array[i].toUpperCase() == '-') || (array[i].toUpperCase() == '_')) {
                letra.textContent = '-';
            }
            // caso o usuario ou a pré seleção do banco de palavras desejar apenas dar um espaço deve-se aparecer "_"
            else {
                letra.textContent = '__';
            }

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
        // Código responsavel por previnir que ' ', '-' e '_' contabilizem como letras, evitando a má experiencia na jogatina
        if ((array_palavra[i].toUpperCase() !== ' ') && (array_palavra[i].toUpperCase() !== '-') && (array_palavra[i].toUpperCase() !== '_')) {
            valor_elementos_array += 1;
        }

        // código responsavel por realizar a lógica de acertos do jogo
        let letraSemAcento = acentosMap[array_palavra[i].toUpperCase()] || array_palavra[i]; // Remover acentos utilizando o mapa
        if (tecla.toUpperCase() === letraSemAcento) {
            let letra = document.getElementById('caracter' + i); // Cria um ID numerado para cada letra da palavra oculta
            letra.style.opacity = '1';
            letra_atual = array_palavra[i];
            letras_descobertas += 1; // jogador acumula quantidade de letras que acertou, onde as mesmas serão analisadas para saber se o jogador ganhou o game

            //mudando a cor da tecla quando pressionada(cor alterada para quando for a letra)
            let tecla_pressionada = document.getElementById('tecla_' + numero_tecla_pressionada);
            tecla_pressionada.style.background = '#09ab80';

            // som de acerto
            let audio_acerto = document.getElementById('audio_tecla_certa');
            audio_acerto.currentTime = 0; //resetando som antes de dar play
            audio_acerto.volume = .4;
            audio_acerto.play();

        }
    }

    // código responsavel pela lógica de erros do jogo ( jogador perde uma vida para cada erro)
    if (tecla.toUpperCase() !== acentosMap[letra_atual.toUpperCase()] && vidas > 0) {
        if (tecla.toUpperCase() !== letra_atual.toLocaleUpperCase()) {
            vidas -= 1;
            let img_forca_game = document.getElementById('img_forca_game');

            img_forca_game.innerHTML = '<img src="fotos/vida_' + vidas + '.svg" alt="Imagem do jogo da forca" class="img_forca" >';

            //mudando a cor da tecla quando pressionada(cor alterada para quando não for a letra)
            let tecla_pressionada = document.getElementById('tecla_' + numero_tecla_pressionada);
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
        setTimeout(function () {
            letras_descobertas = 0;
            vidas = 7;
            teclasUsadas = new Set();
            img_forca_game.innerHTML = '<img src="fotos/vida_7.svg" alt="Imagem do jogo da forca" class="img_forca" >';
            game(7, 'Fim de jogo, você perdeu! <br><span> A palavra era "' + array_palavra.join('') + '"</span>');
            //audio perdendo o game
            let audio_perdendo = document.getElementById('audio_perdendo');
            audio_perdendo.volume = .4;
            audio_perdendo.play();
        }, 1000);


    }
    //Resultado caso o jogador ganhe o jogo 
    else if (valor_elementos_array === letras_descobertas) {
        setTimeout(function () {
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

function btn_som() {
    let audio_click = document.getElementById('audio_click');
    audio_click.currentTime = 0;
    audio_click.volume = .8;
    audio_click.play();

}


//(FIM) FUNÇÕES REFERENTES AOS DETALHES SONOROS DO GAME 


// função responsavel por escolher o modo de jogo 

function categoria_de_jogo(categoria) {

    switch (categoria) {

        // modo aleatório
        case 1:
            aleatorio();
            break;

        // modo história do brasil 
        case 2:
            historia();
            break;

        // modo geografia 
        case 3:
            geografia();
            break;

        // modo geopolitica
        case 4:
            geopolitica();
            break;

        // modo de matematica 
        case 5:
            matematica();
            break;

        // modo  de filosofia
        case 6:
            filosofia();
            break;

        // modo de TI/Programação
        case 7:
            ti_programacao();
            break;

        // modo de cibersegurança
        case 8:
            ciberseguranca();
            break;

        // modo de cultura pop
        case 9:
            cultura_pop();
            break;

    }


}




//FUNÇÃO RESPONSAVEL POR RANDONIZAR A PALAVRA E A DICA PARA O MODO SOLO 

function aleatorio() {

    let numero = Math.floor(Math.random() * 8) + 2;

    categoria_de_jogo(numero);
}



/* 
------------------------------------------------------------------------------------------
CATEGORIA DE HISTÓRIA
------------------------------------------------------------------------------------------
*/

function historia() {

    // banco de palavras
    let palavras_dicas = [
        ["faraó", "Governante divino do Egito antigo"],
        ["pirâmide", "Tumba monumental erguida no deserto"],
        ["gladiador", "Lutador romano do Coliseu"],
        ["coliseu", "Arena de espetáculos do Império Romano"],
        ["cruzada", "Guerra santa medieval"],
        ["feudalismo", "Sistema de terras e vassalos"],
        ["monarquia", "Governo de um rei ou rainha"],
        ["república", "Governo do povo sem rei"],
        ["democracia", "Poder nascido em Atenas"],
        ["olimpíada", "Jogos sagrados da Grécia antiga"],
        ["espartano", "Guerreiro rigoroso de Esparta"],
        ["troiano", "Habitante da cidade de Troia"],
        ["ilíada", "Épico grego de Homero sobre a guerra"],
        ["minotauro", "Monstro metade homem metade touro"],
        ["labirinto", "Construção sem saída de Creta"],
        ["legião", "Unidade militar romana"],
        ["senado", "Assembleia de anciãos em Roma"],
        ["cônsul", "Magistrado supremo de Roma"],
        ["tribuno", "Representante do povo romano"],
        ["patrícia", "Classe nobre romana"],
        ["plebe", "Classe popular de Roma"],
        ["escravo", "Pessoa sem liberdade na antiguidade"],
        ["abolição", "Fim legal da escravidão"],
        ["colonização", "Ocupação de terras por potências estrangeiras"],
        ["mercantilismo", "Acúmulo de metais como riqueza nacional"],
        ["capitalismo", "Sistema baseado na propriedade privada"],
        ["castelo", "Fortaleza da nobreza medieval"],
        ["cavaleiro", "Nobre guerreiro a cavalo"],
        ["escudeiro", "Aprendiz de cavaleiro"],
        ["armadura", "Proteção metálica medieval"],
        ["catedral", "Grande templo do cristianismo"],
        ["papa", "Chefe máximo da Igreja Católica"],
        ["bíblia", "Livro sagrado do cristão"],
        ["alcorão", "Livro sagrado do islã"],
        ["minarete", "Torre de onde se chama à oração islâmica"],
        ["califado", "Estado islâmico governado por um califa"],
        ["vikings", "Guerreiros e navegadores nórdicos"],
        ["runas", "Alfabeto místico nórdico"],
        ["odin", "Principal deus nórdico"],
        ["ragnarok", "Fim do mundo na mitologia nórdica"],
        ["samurai", "Guerreiro nobre japonês"],
        ["shogun", "Líder militar supremo do Japão feudal"],
        ["ninja", "Espião e assassino furtivo japonês"],
        ["katana", "Espada curva japonesa"],
        ["xintoísmo", "Religião tradicional japonesa"],
        ["imperador", "Soberano de um império"],
        ["sultão", "Governante do mundo islâmico medieval"],
        ["vizir", "Ministro principal do sultão"],
        ["mesopotâmia", "Terra entre dois rios berço da civilização"],
        ["suméria", "Primeira civilização com escrita"],
        ["babilônia", "Cidade do código de Hamurabi"],
        ["assíria", "Império guerreiro da Mesopotâmia"],
        ["persa", "Povo do maior império da antiguidade"],
        ["macedônia", "Terra natal de Alexandre, o Grande"],
        ["alexandre", "General que conquistou o mundo antigo"],
        ["helenismo", "Cultura grega espalhada pelo mundo"],
        ["acrópole", "Colina sagrada de Atenas"],
        ["partenon", "Templo dedicado à deusa Atena"],
        ["sócrates", "Filósofo condenado a beber cicuta"],
        ["platão", "Discípulo de Sócrates e mestre de Aristóteles"],
        ["aristóteles", "Filósofo tutor de Alexandre"],
        ["epicuro", "Filósofo grego do prazer moderado"],
        ["estoicismo", "Filosofia da resistência e virtude"],
        ["cícero", "Grande orador romano"],
        ["césar", "Ditador romano assassinado nas ides de março"],
        ["bruto", "Um dos assassinos de Júlio César"],
        ["augusto", "Primeiro imperador romano"],
        ["nero", "Imperador romano associado ao incêndio de Roma"],
        ["calígula", "Imperador romano famoso pela tirania"],
        ["cleopatra", "Última rainha do Egito ptolomaico"],
        ["cartago", "Rival de Roma destruída no Mediterrâneo"],
        ["aníbal", "General cartaginês que cruzou os Alpes"],
        ["espartaco", "Escravo que liderou uma revolta em Roma"],
        ["reforma", "Movimento de Lutero contra a Igreja"],
        ["lutero", "Monge que desafiou o papa em 1517"],
        ["calvino", "Reformador protestante de Genebra"],
        ["indulgência", "Perdão do pecado vendido pela Igreja"],
        ["concílio", "Assembleia de líderes da Igreja"],
        ["inquisição", "Tribunal eclesiástico para julgar hereges"],
        ["heresia", "Crença contrária ao dogma oficial"],
        ["mártir", "Pessoa morta por suas crenças"],
        ["cruzado", "Guerreiro cristão das expedições ao Oriente"],
        ["templário", "Ordem de cavaleiros medievais"],
        ["renascimento", "Período de reviver a cultura clássica"],
        ["humanismo", "Filosofia que coloca o homem no centro"],
        ["leonardo", "Gênio do Renascimento italiano"],
        ["michelangelo", "Escultor da Pietà e do teto da Sistina"],
        ["rafael", "Pintor italiano da Escola de Atenas"],
        ["galileu", "Astrônomo condenado pela Igreja"],
        ["copérnico", "Propôs que a Terra gira em torno do Sol"],
        ["newton", "Descobriu a lei da gravidade"],
        ["iluminismo", "Movimento da razão e das luzes no século XVIII"],
        ["voltaire", "Filósofo iluminista crítico da Igreja"],
        ["rousseau", "Teórico do contrato social"],
        ["montesquieu", "Teórico da separação dos poderes"],
        ["bastilha", "Prisão cuja queda marcou a Revolução Francesa"],
        ["guilhotina", "Instrumento de execução da Revolução Francesa"],
        ["jacobino", "Facção radical da Revolução Francesa"],
        ["girondino", "Facção moderada da Revolução Francesa"],
        ["napoleão", "General francês que se tornou imperador"],
        ["waterloo", "Batalha da derrota final de Napoleão"],
        ["restauração", "Retorno das monarquias após Napoleão"],
        ["liberalismo", "Doutrina da liberdade individual"],
        ["nacionalismo", "Ideologia de valorização da nação"],
        ["socialismo", "Doutrina da propriedade coletiva"],
        ["marxismo", "Teoria de Marx sobre luta de classes"],
        ["anarquismo", "Ideologia contra o Estado e o poder"],
        ["comunismo", "Sistema de propriedade coletiva total"],
        ["fascismo", "Ideologia autoritária e nacionalista"],
        ["nazismo", "Fascismo alemão de Hitler"],
        ["holocausto", "Genocídio de judeus pelos nazistas"],
        ["gulag", "Campo de trabalho forçado soviético"],
        ["totalitarismo", "Sistema onde o Estado controla tudo"],
        ["ditadura", "Governo de um único líder com poder absoluto"],
        ["golpe", "Tomada ilegal do poder"],
        ["cortina de ferro", "Fronteira simbólica da Europa dividida"],
        ["muro", "Construção que dividiu Berlim"],
        ["otan", "Aliança militar ocidental"],
        ["descolonização", "Processo de independência das colônias"],
        ["apartheid", "Segregação racial na África do Sul"],
        ["mandela", "Líder anti-apartheid que virou presidente"],
        ["gandhi", "Líder da independência indiana pela paz"],
        ["nehru", "Primeiro ministro da Índia independente"],
        ["mao", "Líder da revolução comunista chinesa"],
        ["stalin", "Ditador soviético responsável por milhões de mortes"],
        ["lenine", "Líder da Revolução Russa de 1917"],
        ["trotski", "Revolucionário russo exilado por Stalin"],
        ["kennedy", "Presidente americano assassinado em Dallas"],
        ["lincoln", "Presidente que aboliu a escravidão nos EUA"],
        ["washington", "Primeiro presidente dos Estados Unidos"],
        ["jefferson", "Autor da Declaração de Independência americana"],
        ["colonialismo", "Dominação de países por potências europeias"],
        ["mercenário", "Soldado que luta por dinheiro"],
        ["tratado", "Acordo formal entre nações"],
        ["armistício", "Acordo para cessar o fogo"],
        ["rendição", "Ato de se entregar ao inimigo"],
        ["embargo", "Proibição comercial entre países"],
        ["sanção", "Punição econômica a um país"],
        ["imperialismo", "Expansão do poder de um país sobre outros"],
        ["hegemonia", "Domínio de uma nação sobre outras"],
        ["soberania", "Poder supremo de um Estado"],
        ["diplomacia", "Arte de negociar entre nações"],
        ["embaixador", "Representante de um país em outro"],
        ["arqueologia", "Ciência que estuda o passado por objetos"],
        ["papiro", "Material de escrita do Egito antigo"],
        ["hieróglifo", "Escrita sagrada egípcia"],
        ["cuneiforme", "Escrita dos sumérios em argila"],
        ["especiaria", "Produto que movia o comércio medieval"],
        ["caravela", "Navio português das grandes navegações"],
        ["bússola", "Instrumento de orientação dos navegadores"],
        ["astrolábio", "Instrumento de medição para navegar"],
        ["catequese", "Ensino cristão aos povos colonizados"],
        ["jesuíta", "Membro da Companhia de Jesus"],
        ["missão", "Posto de evangelização jesuíta"],
        ["bandeirante", "Explorador do interior do Brasil colonial"],
        ["sesmaria", "Concessão de terras no Brasil colonial"],
        ["engenho", "Fazenda produtora de açúcar colonial"],
        ["quilombo", "Comunidade de escravizados fugitivos"],
        ["zumbi", "Líder do Quilombo dos Palmares"],
        ["palmares", "Maior comunidade quilombola do Brasil"],
        ["inconfidência", "Revolta colonial brasileira de 1789"],
        ["tiradentes", "Líder mártir da Inconfidência Mineira"],
        ["independência", "Separação política de uma metrópole"],
        ["regência", "Período de governo em nome de um menor"],
        ["abdicação", "Renúncia voluntária ao trono"],
        ["cabanagem", "Revolta popular na Amazônia colonial"],
        ["balaiada", "Revolta no Maranhão do século XIX"],
        ["farroupilha", "Revolução separatista no Sul do Brasil"],
        ["sabinada", "Revolta separatista na Bahia"],
        ["praieira", "Revolta liberal em Pernambuco"],
        ["federação", "Sistema de estados autônomos unidos"],
        ["marechal", "Posto militar de mais alto escalão"],
        ["deodoro", "Marechal proclamador da República no Brasil"],
        ["bragança", "Dinastia real portuguesa e brasileira"],
        ["regente", "Quem governa em nome de outrem"],
        ["abolicionista", "Pessoa que lutava pelo fim da escravidão"],
        ["escravidão", "Sistema de trabalho forçado e sem liberdade"],
        ["tráfico", "Comércio de pessoas escravizadas"],
        ["senzala", "Alojamento de escravizados na fazenda"],
        ["quilombola", "Habitante de um quilombo"],
        ["liberto", "Escravo que obteve alforria"],
        ["alforria", "Ato de libertar um escravo"],
        ["café", "Produto que dominou a economia brasileira"],
        ["fazendeiro", "Grande proprietário rural"],
        ["oligarquia", "Governo de poucos ricos"],
        ["coronel", "Líder político local do interior"],
        ["coronelismo", "Poder político dos coronéis rurais"],
        ["tenentismo", "Movimento de revolta de oficiais jovens"],
        ["vargas", "Presidente que dominou a política brasileira por décadas"],
        ["estado novo", "Ditadura de Vargas de 1937 a 1945"],
        ["integralismo", "Movimento fascista brasileiro"],
        ["populismo", "Política que apela diretamente ao povo"],
        ["trabalhismo", "Ideologia de defesa dos direitos dos trabalhadores"],
        ["clt", "Legislação trabalhista criada na era Vargas"],
        ["jk", "Presidente que construiu Brasília"],
        ["brasília", "Nova capital do Brasil inaugurada em 1960"],
        ["anistia", "Perdão político a exilados e presos"],
        ["constituição", "Lei máxima de um país"],
        ["impeachment", "Processo de cassação de um mandato"],
        ["reforma agrária", "Redistribuição de terras rurais"],
        ["latifúndio", "Grande propriedade rural improdutiva"],
        ["seca", "Fenômeno climático que desertificou o sertão"],
        ["cangaço", "Banditismo social do sertão nordestino"],
        ["lampião", "Líder cangaceiro mais famoso do Brasil"],
        ["contestado", "Guerra camponesa no sul do Brasil"],
        ["canudos", "Comunidade de sertanejos massacrada na Bahia"],
        ["conselheiro", "Líder religioso de Canudos"],
        ["sertanejo", "Habitante do sertão nordestino"],
        ["migração", "Deslocamento de pessoas para outro lugar"],
        ["retirante", "Quem foge da seca em busca de sobrevivência"],
        ["industrialização", "Processo de criação de indústrias"],
        ["proletariado", "Classe trabalhadora industrial"],
        ["burguesia", "Classe proprietária dos meios de produção"],
        ["vapor", "Energia que impulsionou a Revolução Industrial"],
        ["locomotiva", "Máquina que transformou o transporte terrestre"],
        ["ferrovia", "Linha de trem que conectou o mundo moderno"],
        ["telégrafo", "Primeiro meio de comunicação à distância"],
        ["boxer", "Revolta chinesa contra o imperialismo"],
        ["meiji", "Modernização do Japão no século XIX"],
        ["pan eslavismo", "Movimento de união dos povos eslavos"],
        ["sarajevo", "Cidade onde foi assassinado Francisco Ferdinando"],
        ["trincheira", "Sistema de defesa da Primeira Guerra Mundial"],
        ["versalhes", "Tratado que culpou a Alemanha pela guerra"],
        ["weimar", "República alemã entre as guerras mundiais"],
        ["inflação", "Desvalorização extrema da moeda alemã pós guerra"],
        ["depressão", "Crise econômica global dos anos 1930"],
        ["new deal", "Política americana de recuperação econômica"],
        ["roosevelt", "Presidente americano do New Deal"],
        ["keynesianismo", "Teoria econômica de intervenção do Estado"],
        ["eixo", "Aliança entre Alemanha, Itália e Japão na Segunda Guerra"],
        ["aliados", "Países que combateram o Eixo"],
        ["normandia", "Região francesa do maior desembarque da história"],
        ["hiroshima", "Cidade japonesa destruída pela bomba atômica"],
        ["nagasaki", "Segunda cidade atingida pela bomba atômica"],
        ["onu", "Organização criada para manter a paz mundial"],
        ["mccarthismo", "Caça às bruxas anticomunista nos EUA"],
        ["sputnik", "Primeiro satélite artificial da história"],
        ["armstrong", "Primeiro homem a pisar na Lua"],
        ["vietnam", "Guerra entre comunismo e capitalismo na Ásia"],
        ["watergate", "Escândalo que derrubou o presidente Nixon"],
        ["détente", "Período de distensão na guerra fria"],
        ["gorbachev", "Líder soviético que dissolveu a URSS"],
        ["perestroika", "Reestruturação econômica soviética"],
        ["glasnost", "Transparência política na URSS"],
        ["reunificação", "União das duas Alemanhas em 1990"],
        ["globalização", "Integração econômica e cultural mundial"],
        ["neoliberalismo", "Política de privatizações e mercado livre"],
        ["terrorismo", "Uso do medo como arma política"],
        ["afeganistão", "País invadido pelos EUA após 2001"],
        ["iraque", "País invadido pelo EUA em 2003"],
        ["primavera árabe", "Série de revoltas no mundo árabe"],
        ["refugiado", "Pessoa forçada a deixar seu país"],
        ["crise climática", "Aquecimento global como desafio histórico"],
        ["pandemia", "Epidemia de escala mundial"],
        ["gripe espanhola", "Pandemia que matou milhões após 1918"],
        ["varíola", "Doença erradicada pela vacinação em 1980"],
        ["peste negra", "Epidemia que dizimou a Europa medieval"],
        ["quarentena", "Isolamento para conter doenças"],
        ["enciclopédia", "Obra que reuniu o saber iluminista"],
        ["diderot", "Editor da grande Enciclopédia francesa"],
        ["deísmo", "Crença numa divindade sem dogmas religiosos"],
        ["teocracia", "Governo baseado em leis religiosas"],
        ["laicismo", "Separação entre Estado e religião"],
        ["sufrágio", "Direito de votar em eleições"],
        ["sufragista", "Militante pelo direito ao voto feminino"],
        ["feminismo", "Movimento pelos direitos das mulheres"],
        ["greve", "Paralisação de trabalhadores por direitos"],
        ["sindicato", "Organização coletiva de trabalhadores"],
        ["manifesto", "Documento político de declaração de princípios"],
        ["revolução", "Mudança radical de um sistema político"],
        ["rebelião", "Levante armado contra o poder estabelecido"],
        ["motim", "Revolta de soldados ou marinheiros"],
        ["guerrilha", "Combate irregular de pequenos grupos"],
        ["partisão", "Combatente irregular na Segunda Guerra"],
        ["resistência", "Movimento clandestino contra ocupação"],
        ["colaboracionismo", "Cooperação com o inimigo ocupante"],
        ["exílio", "Afastamento forçado do próprio país"],
        ["censura", "Controle oficial da informação"],
        ["propaganda", "Difusão de ideias para influenciar massas"],
        ["panfleto", "Texto de agitação política"],
        ["imprensa", "Invenção que democratizou o conhecimento"],
        ["gutenberg", "Inventor da tipografia moderna"],
        ["incunábulo", "Livro impresso antes de 1501"],
        ["manuscrito", "Texto escrito à mão antes da imprensa"],
        ["monge", "Religioso responsável pela cópia de textos medievais"],
        ["scriptorium", "Local onde monges copiavam manuscritos"],
        ["universidade", "Instituição de saber surgida na Idade Média"],
        ["medicina", "Ciência que curou epidemias históricas"],
        ["alquimia", "Precursora da química na Idade Média"],
        ["astrologia", "Antecessora da astronomia moderna"],
        ["mapamundi", "Mapa do mundo das explorações medievais"],
        ["tratado de tordesilhas", "Acordo que dividiu o mundo entre Portugal e Espanha"],
        ["vasco da gama", "Navegador que chegou à Índia pelo mar"],
        ["pedro álvares cabral", "Navegador que chegou ao Brasil em 1500"],
        ["fernão de magalhães", "Navegador da primeira volta ao mundo"],
        ["francis drake", "Corsário inglês que circum-navegou o globo"],
        ["colombo", "Navegador que chegou à América em 1492"],
        ["azteca", "Civilização mesoamericana conquistada por Cortez"],
        ["inca", "Civilização andina conquistada por Pizarro"],
        ["maia", "Civilização americana com calendário avançado"],
        ["tenochtitlan", "Capital do Império Azteca"],
        ["cuzco", "Capital do Império Inca"],
        ["eldorado", "Lenda de cidade de ouro buscada no Novo Mundo"],
        ["conquista", "Dominação espanhola das Américas"],
        ["encomienda", "Sistema de trabalho forçado indígena"],
        ["dizimação", "Destruição em massa de populações indígenas"],
        ["sincretismo", "Fusão de diferentes crenças religiosas"],
        ["candomblé", "Religião afro-brasileira de resistência cultural"],
        ["umbanda", "Religião brasileira de origem africana"],
        ["aldeia", "Agrupamento indígena ou medieval"],
        ["tributo", "Imposto pago ao soberano ou conquistador"],
        ["câmara", "Órgão legislativo local colonial"],
        ["ouvidoria", "Órgão de justiça no Brasil colonial"],
        ["provedor", "Administrador colonial português"],
        ["capitania", "Divisão administrativa do Brasil colonial"],
        ["vice reino", "Divisão administrativa do império espanhol"],
        ["tropeiro", "Comerciante que levava mercadorias no lombo de mulas"],
        ["mineração", "Atividade econômica que criou as cidades coloniais"],
        ["derrama", "Cobrança forçada de impostos no Brasil"],
        ["intendente", "Funcionário fiscal da coroa portuguesa"],
        ["iluminado", "Participante de sociedade secreta do século XVIII"]
    ];


    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}



/* 
------------------------------------------------------------------------------------------
CATEGORIA DE GEOGRAFIA
------------------------------------------------------------------------------------------
*/

function geografia() {

    // banco de palavras

    let palavras_dicas = [
        ["continente", "Grande massa de terra do planeta"],
        ["oceano", "Enorme extensão de água salgada"],
        ["montanha", "Elevação natural do terreno"],
        ["planície", "Terreno plano e extenso"],
        ["planalto", "Elevação de superfície plana e ampla"],
        ["vale", "Depressão entre montanhas"],
        ["vulcão", "Abertura que expele lava da Terra"],
        ["terremoto", "Tremor da crosta terrestre"],
        ["tsunami", "Onda gigante causada por tremor submarino"],
        ["erosão", "Desgaste do solo pela água e vento"],
        ["sedimento", "Material depositado pela água ou vento"],
        ["delta", "Depósito de sedimentos na foz de um rio"],
        ["estuário", "Foz larga onde o rio encontra o mar"],
        ["afluente", "Rio que deságua em outro rio"],
        ["bacia hidrográfica", "Área drenada por um rio e seus afluentes"],
        ["nascente", "Ponto de origem de um rio"],
        ["foz", "Ponto onde o rio deságua"],
        ["cachoeira", "Queda d'água em desnível"],
        ["lago", "Massa de água cercada de terra"],
        ["lagoa", "Pequena massa de água próxima ao mar"],
        ["pântano", "Terreno alagadiço e de difícil acesso"],
        ["manguezal", "Ecossistema costeiro de água salobra"],
        ["recife", "Formação rochosa ou de coral no mar"],
        ["arquipélago", "Conjunto de ilhas próximas"],
        ["península", "Porção de terra cercada de água por três lados"],
        ["cabo", "Ponta de terra que avança para o mar"],
        ["golfo", "Reentrância do mar no continente"],
        ["baía", "Reentrância menor do mar na costa"],
        ["estreito", "Passagem estreita entre duas massas de água"],
        ["canal", "Via de água artificial ou natural"],
        ["latitude", "Distância angular ao norte ou sul do equador"],
        ["longitude", "Distância angular a leste ou oeste de Greenwich"],
        ["meridiano", "Linha imaginária de polo a polo"],
        ["paralelo", "Linha imaginária paralela ao equador"],
        ["equador", "Linha imaginária que divide a Terra ao meio"],
        ["trópico", "Linha que delimita a zona tropical"],
        ["polo", "Extremidade norte ou sul da Terra"],
        ["hemisfério", "Metade da esfera terrestre"],
        ["fuso horário", "Divisão da Terra em 24 zonas de tempo"],
        ["cartografia", "Arte e ciência de fazer mapas"],
        ["escala", "Relação entre o mapa e a realidade"],
        ["legenda", "Explicação dos símbolos de um mapa"],
        ["topografia", "Representação do relevo em mapas"],
        ["curva de nível", "Linha que une pontos de mesma altitude"],
        ["projeção", "Método de representar a Terra em plano"],
        ["atlas", "Coleção de mapas geográficos"],
        ["globo", "Representação esférica da Terra"],
        ["bússola", "Instrumento que aponta para o norte"],
        ["GPS", "Sistema de localização por satélite"],
        ["sensoriamento", "Técnica de observação da Terra por satélite"],
        ["clima", "Condições atmosféricas de longo prazo"],
        ["tempo", "Condições atmosféricas momentâneas"],
        ["temperatura", "Grau de calor do ar"],
        ["precipitação", "Chuva, neve ou granizo que cai"],
        ["umidade", "Quantidade de vapor d'água no ar"],
        ["pressão atmosférica", "Força do ar sobre a superfície"],
        ["vento", "Movimento de massas de ar"],
        ["ciclone", "Sistema de baixa pressão atmosférica"],
        ["anticiclone", "Sistema de alta pressão atmosférica"],
        ["furacão", "Ciclone tropical de grande intensidade"],
        ["tufão", "Furacão que ocorre no Pacífico"],
        ["tornado", "Coluna de ar em rotação violenta"],
        ["seca", "Período prolongado sem chuvas"],
        ["inundação", "Alagamento causado por excesso de chuva"],
        ["neve", "Precipitação de cristais de gelo"],
        ["granizo", "Precipitação de pedras de gelo"],
        ["geada", "Congelamento da umidade do solo"],
        ["nevoeiro", "Camada de vapor d'água rente ao solo"],
        ["nuvem", "Massa de vapor d'água condensado"],
        ["raio", "Descarga elétrica atmosférica"],
        ["aurora boreal", "Fenômeno luminoso nos polos"],
        ["bioma", "Região com flora e fauna características"],
        ["floresta", "Densa vegetação arbórea"],
        ["savana", "Vegetação tropical com chuvas sazonais"],
        ["deserto", "Região árida com baixíssima precipitação"],
        ["tundra", "Vegetação rasteira das regiões polares"],
        ["taiga", "Floresta de coníferas das regiões frias"],
        ["cerrado", "Bioma brasileiro de vegetação xerófita"],
        ["pantanal", "Maior planície alagável do mundo"],
        ["pampa", "Campo plano do sul do Brasil e Argentina"],
        ["caatinga", "Vegetação semiárida do nordeste do Brasil"],
        ["amazônia", "Maior floresta tropical do mundo"],
        ["mata atlântica", "Floresta costeira brasileira muito devastada"],
        ["mangue", "Planta adaptada à água salobra costeira"],
        ["coral", "Organismo marinho formador de recifes"],
        ["biodiversidade", "Variedade de espécies de um ecossistema"],
        ["ecossistema", "Conjunto de seres vivos e seu ambiente"],
        ["habitat", "Ambiente natural de uma espécie"],
        ["extinção", "Desaparecimento de uma espécie"],
        ["desmatamento", "Remoção intensa da cobertura vegetal"],
        ["queimada", "Fogo usado para limpar áreas florestais"],
        ["reflorestamento", "Plantio de árvores em áreas degradadas"],
        ["sustentabilidade", "Uso consciente dos recursos naturais"],
        ["aquecimento global", "Aumento da temperatura média da Terra"],
        ["efeito estufa", "Retenção de calor pela atmosfera"],
        ["camada de ozônio", "Escudo que protege a Terra da radiação UV"],
        ["poluição", "Contaminação do ambiente por resíduos"],
        ["acidificação", "Aumento da acidez dos oceanos"],
        ["geleira", "Massa de gelo que se move lentamente"],
        ["iceberg", "Bloco de gelo flutuante no mar"],
        ["degelo", "Fusão das calotas polares"],
        ["solo", "Camada superficial da crosta terrestre"],
        ["lençol freático", "Água subterrânea armazenada no solo"],
        ["aquífero", "Reservatório natural de água subterrânea"],
        ["minério", "Rocha com mineral de valor econômico"],
        ["petróleo", "Combustível fóssil líquido do subsolo"],
        ["carvão", "Combustível fóssil sólido"],
        ["gás natural", "Combustível fóssil no estado gasoso"],
        ["energia solar", "Energia obtida da luz do sol"],
        ["energia eólica", "Energia obtida do vento"],
        ["energia hidrelétrica", "Energia gerada pela força da água"],
        ["biomassa", "Matéria orgânica usada como energia"],
        ["recurso natural", "Bem da natureza usado pelo homem"],
        ["reserva", "Área protegida de exploração intensa"],
        ["parque nacional", "Área de proteção ambiental do Estado"],
        ["corrente marinha", "Fluxo de água no oceano"],
        ["maré", "Variação do nível do mar pela atração lunar"],
        ["salinidade", "Concentração de sal na água do mar"],
        ["plataforma continental", "Parte submersa do continente"],
        ["abissal", "Relativo às grandes profundezas do oceano"],
        ["fossa", "Depressão profunda no fundo do oceano"],
        ["dorsais", "Cadeias de montanhas no fundo do oceano"],
        ["tectônica", "Movimento das placas da crosta terrestre"],
        ["placa tectônica", "Grande bloco rígido da crosta terrestre"],
        ["subducção", "Mergulho de uma placa sob outra"],
        ["falha", "Fratura na crosta terrestre"],
        ["magma", "Rocha derretida no interior da Terra"],
        ["lava", "Magma que atinge a superfície"],
        ["cratera", "Abertura no topo de um vulcão"],
        ["ignea", "Rocha formada pelo resfriamento do magma"],
        ["sedimentar", "Rocha formada por camadas de sedimentos"],
        ["metamórfica", "Rocha transformada por calor e pressão"],
        ["fóssil", "Resto de ser vivo preservado em rocha"],
        ["estratigrafia", "Estudo das camadas de rocha"],
        ["era geológica", "Divisão do tempo da história da Terra"],
        ["pangeia", "Supercontinente original da Terra"],
        ["deriva continental", "Movimento lento dos continentes"],
        ["africa", "Continente mais extenso em diversidade"],
        ["asia", "Maior continente do mundo"],
        ["europa", "Menor continente habitado"],
        ["oceania", "Continente de ilhas do Pacífico"],
        ["antártida", "Continente coberto de gelo no polo sul"],
        ["américas", "Continentes do novo mundo"],
        ["sahara", "Maior deserto quente do mundo"],
        ["himalaia", "Cadeia montanhosa com o pico mais alto"],
        ["everest", "Ponto mais alto da superfície terrestre"],
        ["andes", "Maior cadeia montanhosa das Américas"],
        ["alpes", "Montanhas que cruzam a Europa central"],
        ["pirineus", "Montanhas entre França e Espanha"],
        ["urais", "Montanhas que dividem Europa e Ásia"],
        ["atlas", "Cadeia montanhosa do norte da África"],
        ["kilimanjaro", "Ponto mais alto da África"],
        ["amazonas", "Rio de maior volume de água do mundo"],
        ["nilo", "Rio mais longo do mundo"],
        ["mississipi", "Grande rio da América do Norte"],
        ["yang tsé", "Maior rio da China"],
        ["ganges", "Rio sagrado da Índia"],
        ["reno", "Rio industrial da Europa central"],
        ["danúbio", "Rio que atravessa vários países europeus"],
        ["volga", "Maior rio da Europa"],
        ["congo", "Rio de grande vazão na África Central"],
        ["paraná", "Grande rio da América do Sul"],
        ["são francisco", "Rio da integração nacional brasileira"],
        ["tocantins", "Rio que corta o Brasil central"],
        ["titicaca", "Lago de grande altitude nos Andes"],
        ["cáspio", "Maior lago do mundo"],
        ["mediterrâneo", "Mar interior entre Europa e África"],
        ["báltico", "Mar de baixa salinidade no norte da Europa"],
        ["caspiano", "Mar fechado entre Europa e Ásia"],
        ["morto", "Mar de altíssima salinidade no Oriente Médio"],
        ["vermelho", "Mar que separa África e Arábia"],
        ["caribe", "Mar tropical entre as Américas"],
        ["patagônia", "Região ventosa do extremo sul americano"],
        ["sibéria", "Vasta região gelada da Ásia"],
        ["saara", "Deserto que domina o norte africano"],
        ["gobi", "Deserto da Ásia central"],
        ["atacama", "Deserto mais árido do mundo no Chile"],
        ["sahel", "Zona semiárida ao sul do Saara"],
        ["steppes", "Pradaria seca da Ásia central"],
        ["pampas", "Planície fértil da América do Sul"],
        ["grande barreira", "Maior recife de corais do mundo"],
        ["galápagos", "Arquipélago de grande biodiversidade"],
        ["maldivas", "Arquipélago do Oceano Índico"],
        ["madagascar", "Grande ilha ao largo da África"],
        ["nova zelândia", "Ilhas do Pacífico sul com fauna única"],
        ["islândia", "Ilha de vulcões e géiseres no Atlântico Norte"],
        ["groenlandia", "Maior ilha do mundo coberta de gelo"],
        ["cuba", "Maior ilha do Caribe"],
        ["java", "Ilha mais populosa da Indonésia"],
        ["borneo", "Ilha partilhada por três países"],
        ["suez", "Canal que liga o Mediterrâneo ao Mar Vermelho"],
        ["panamá", "Canal que liga os oceanos Atlântico e Pacífico"],
        ["gibraltar", "Estreito entre Europa e África"],
        ["bósforo", "Estreito que liga Europa e Ásia em Istambul"],
        ["malaca", "Estreito estratégico do Sudeste Asiático"],
        ["drake", "Passagem entre América do Sul e Antártida"],
        ["índia", "Subcontinente peninsular da Ásia"],
        ["china", "País mais populoso do mundo"],
        ["rússia", "Maior país em extensão territorial"],
        ["brasil", "Maior país da América do Sul"],
        ["canadá", "Segundo maior país do mundo"],
        ["austrália", "País e continente ao mesmo tempo"],
        ["estados unidos", "Maior economia do mundo ocidental"],
        ["fronteira", "Limite territorial entre países"],
        ["território", "Espaço geográfico de uma nação"],
        ["capital", "Cidade sede do governo de um país"],
        ["metrópole", "Grande cidade centro de uma região"],
        ["megalópole", "Enorme região urbana interligada"],
        ["conurbação", "Fusão de cidades que cresceram juntas"],
        ["densidade demográfica", "Número de habitantes por quilômetro quadrado"],
        ["urbanização", "Processo de crescimento das cidades"],
        ["êxodo rural", "Migração do campo para a cidade"],
        ["imigração", "Chegada de pessoas de outro país"],
        ["emigração", "Saída de pessoas para outro país"],
        ["diáspora", "Dispersão de um povo pelo mundo"],
        ["assentamento", "Comunidade instalada em nova área"],
        ["favela", "Área urbana de habitação precária"],
        ["segregação", "Separação espacial por renda ou raça"],
        ["gentrificação", "Valorização urbana que expulsa moradores"],
        ["especulação", "Alta de preços imobiliários sem razão produtiva"],
        ["zoneamento", "Divisão de cidades por uso do solo"],
        ["saneamento", "Sistema de água e esgoto urbano"],
        ["transporte", "Sistema de circulação de pessoas e bens"],
        ["porto", "Terminal marítimo de cargas"],
        ["aeroporto", "Terminal de aviação civil"],
        ["rodovia", "Estrada pavimentada para veículos"],
        ["hidrovia", "Via de transporte fluvial"],
        ["ferrovia", "Linha de transporte sobre trilhos"],
        ["comércio", "Troca de mercadorias entre regiões"],
        ["exportação", "Venda de produtos para outros países"],
        ["importação", "Compra de produtos de outros países"],
        ["balança comercial", "Diferença entre exportações e importações"],
        ["PIB", "Soma de tudo que um país produz"],
        ["IDH", "Índice de desenvolvimento humano"],
        ["pobreza", "Condição de carência de recursos básicos"],
        ["desigualdade", "Diferença na distribuição de renda"],
        ["globalização", "Integração econômica entre países"],
        ["terceirização", "Transferência de produção para países mais baratos"],
        ["agronegócio", "Complexo econômico do campo industrializado"],
        ["monocultura", "Plantio de uma única espécie em larga escala"],
        ["policultura", "Cultivo de várias espécies no mesmo espaço"],
        ["irrigação", "Abastecimento artificial de água para culturas"],
        ["transgênico", "Organismo com genes modificados"],
        ["agrotóxico", "Substância química usada na lavoura"],
        ["pecuária", "Criação de animais em larga escala"],
        ["pesca", "Extração de recursos marinhos"],
        ["aquicultura", "Criação de organismos aquáticos"],
        ["silvicultura", "Cultivo planejado de florestas"],
        ["extrativismo", "Retirada direta de recursos da natureza"],
        ["garimpo", "Extração artesanal de minerais"],
        ["siderurgia", "Produção de ferro e aço"],
        ["refino", "Processamento do petróleo bruto"],
        ["termoelétrica", "Usina que gera energia por combustão"],
        ["nuclear", "Energia obtida pela fissão do átomo"],
        ["maré motriz", "Energia obtida pelo movimento das marés"],
        ["geotérmica", "Energia do calor interno da Terra"],
        ["reciclagem", "Reaproveitamento de materiais descartados"],
        ["lixo", "Resíduo sólido produzido pela sociedade"],
        ["aterro sanitário", "Local de disposição controlada de lixo"],
        ["poluição hídrica", "Contaminação de rios, lagos e oceanos"],
        ["poluição sonora", "Excesso de ruído no ambiente urbano"],
        ["ilha de calor", "Temperatura elevada no centro urbano"],
        ["inversão térmica", "Aprisionamento de poluentes rente ao solo"],
        ["smog", "Névoa poluente das grandes cidades"],
        ["chuva ácida", "Precipitação contaminada por gases industriais"],
        ["protocolo de Kyoto", "Acordo de redução de emissões de carbono"],
        ["acordo de Paris", "Tratado climático global de 2015"],
        ["COP", "Conferência das partes sobre o clima"],
        ["Pantanal", "Planície alagável com fauna exuberante"],
        ["marajó", "Maior ilha fluviomarítima do mundo"],
        ["Chapada Diamantina", "Planalto de beleza cênica na Bahia"],
        ["Chapada dos Veadeiros", "Planalto de cerrado no coração do Brasil"],
        ["Lençóis Maranhenses", "Dunas e lagoas do litoral nordestino"],
        ["Fernando de Noronha", "Arquipélago de proteção ambiental no Brasil"],
        ["trópico de Capricórnio", "Paralelo que passa pelo sul do Brasil"],
        ["trópico de Câncer", "Paralelo que delimita o norte tropical"],
        ["círculo polar ártico", "Linha que define a região do Ártico"],
        ["linha internacional de data", "Meridiano onde o dia muda"],
        ["Greenwich", "Cidade onde passa o meridiano zero"],
        ["projeção de Mercator", "Mapa que distorce os polos"],
        ["projeção de Peters", "Mapa que respeita as áreas reais"],
        ["SIG", "Sistema de informação geográfica"],
        ["georreferenciamento", "Associação de dados a coordenadas geográficas"],
        ["imagem de satélite", "Foto da Terra tirada do espaço"],
        ["drone", "Veículo aéreo usado em mapeamento"],
        ["IBGE", "Instituto que faz o censo brasileiro"],
        ["censo", "Contagem oficial da população"],
        ["natalidade", "Taxa de nascimentos em uma população"],
        ["mortalidade", "Taxa de mortes em uma população"],
        ["expectativa de vida", "Tempo médio de vida de uma população"],
        ["envelhecimento", "Aumento da proporção de idosos na sociedade"],
        ["pirâmide etária", "Gráfico que mostra a distribuição de idades"],
        ["bônus demográfico", "Período de alta proporção de adultos ativos"]
    ];


    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}

/* 
------------------------------------------------------------------------------------------
CATEGORIA DE GEOPOLITICA
------------------------------------------------------------------------------------------
*/

function geopolitica() {

    // banco de palavras

    let palavras_dicas = [
        ["geopolítica", "Estudo da influência do espaço no poder dos Estados"],
        ["soberania", "Poder supremo de um Estado sobre seu território"],
        ["território", "Espaço geográfico controlado por um Estado"],
        ["fronteira", "Limite que separa dois Estados"],
        ["Estado", "Organização política com território e povo"],
        ["nação", "Povo unido por cultura, língua e história"],
        ["governo", "Conjunto de instituições que exercem o poder"],
        ["diplomacia", "Arte de negociar entre países"],
        ["embaixada", "Representação oficial de um país em outro"],
        ["cônsul", "Representante diplomático de menor escalão"],
        ["tratado", "Acordo formal entre dois ou mais países"],
        ["aliança", "União de países com objetivos comuns"],
        ["bloco", "Grupo de países com interesses compartilhados"],
        ["hegemonia", "Predominância de um poder sobre outros"],
        ["imperialismo", "Expansão do poder de um país sobre outros"],
        ["colonialismo", "Dominação política e econômica de territórios"],
        ["neocolonialismo", "Dominação indireta de países formalmente independentes"],
        ["multipolaridade", "Mundo com vários centros de poder"],
        ["unipolaridade", "Mundo com um único centro de poder dominante"],
        ["bipolaridade", "Divisão do mundo em dois blocos rivais"],
        ["guerra fria", "Tensão entre EUA e URSS sem conflito direto"],
        ["OTAN", "Aliança militar do Ocidente criada em 1949"],
        ["Pacto de Varsóvia", "Aliança militar do bloco soviético"],
        ["ONU", "Organização para manter a paz e segurança mundiais"],
        ["Conselho de Segurança", "Órgão máximo de decisão da ONU"],
        ["veto", "Poder de bloquear decisões no Conselho da ONU"],
        ["resolução", "Decisão formal aprovada pela ONU"],
        ["sanção", "Punição econômica ou política a um país"],
        ["embargo", "Proibição de comércio com um país"],
        ["boicote", "Recusa coletiva de relações com um país"],
        ["intervenção", "Ação militar ou política em outro Estado"],
        ["ingerência", "Interferência nos assuntos internos de outro país"],
        ["autodeterminação", "Direito dos povos de escolher seu governo"],
        ["separatismo", "Movimento pela independência de uma região"],
        ["irredentismo", "Reivindicação de territórios de outro Estado"],
        ["balcanização", "Fragmentação de um território em partes menores"],
        ["expansionismo", "Política de ampliação territorial de um Estado"],
        ["anexação", "Incorporação de um território por outro Estado"],
        ["ocupação", "Controle militar de um território estrangeiro"],
        ["protetorado", "Território sob tutela de outro Estado"],
        ["mandato", "Território administrado sob supervisão internacional"],
        ["colônia", "Território dominado por uma potência estrangeira"],
        ["metrópole", "País que domina uma colônia"],
        ["descolonização", "Processo de independência das colônias"],
        ["não alinhamento", "Política de neutralidade na guerra fria"],
        ["neutralidade", "Posição de não participar em conflitos"],
        ["isolacionismo", "Política de afastamento das questões mundiais"],
        ["multilateralismo", "Cooperação entre muitos países"],
        ["unilateralismo", "Ação de um país sem consultar aliados"],
        ["bilateralismo", "Acordo entre dois países"],
        ["poder duro", "Influência baseada em força militar e econômica"],
        ["poder brando", "Influência baseada em cultura e diplomacia"],
        ["poder inteligente", "Combinação de poder duro e brando"],
        ["deterrência", "Inibição do ataque pelo medo de retaliação"],
        ["equilíbrio de poder", "Distribuição que impede a dominação de um só"],
        ["corrida armamentista", "Competição por superioridade militar"],
        ["proliferação nuclear", "Espalhamento de armas atômicas pelo mundo"],
        ["bomba atômica", "Arma de destruição em massa baseada em fissão"],
        ["bomba de hidrogênio", "Arma termonuclear mais poderosa que a atômica"],
        ["MAD", "Destruição mútua garantida como dissuasão nuclear"],
        ["tratado de não proliferação", "Acordo para limitar armas nucleares"],
        ["desarmamento", "Redução ou eliminação de arsenais militares"],
        ["armistício", "Acordo de cessação temporária de hostilidades"],
        ["rendição", "Ato formal de se entregar ao inimigo"],
        ["capitulação", "Rendição com condições negociadas"],
        ["guerra assimétrica", "Conflito entre forças de poder desigual"],
        ["guerrilha", "Tática de combate irregular de pequenos grupos"],
        ["terrorismo", "Uso do medo como instrumento político"],
        ["jihadismo", "Extremismo islâmico que usa a violência"],
        ["Estado Islâmico", "Grupo jihadista que proclamou califado"],
        ["Al-Qaeda", "Rede terrorista responsável pelo 11 de setembro"],
        ["conflito étnico", "Guerra baseada em rivalidades entre grupos"],
        ["genocídio", "Extermínio sistemático de um grupo étnico"],
        ["limpeza étnica", "Expulsão forçada de grupos de um território"],
        ["refugiado", "Pessoa que foge de guerra ou perseguição"],
        ["deslocado", "Pessoa que abandona sua casa por conflito"],
        ["asilo político", "Proteção concedida a perseguidos políticos"],
        ["extradição", "Entrega de um criminoso a outro país"],
        ["espionagem", "Coleta secreta de informações de outro Estado"],
        ["contraespionagem", "Defesa contra atividades de espionagem"],
        ["guerra cibernética", "Conflito travado em redes digitais"],
        ["desinformação", "Difusão intencional de informações falsas"],
        ["propaganda", "Manipulação da opinião pública pelo Estado"],
        ["influência", "Capacidade de moldar decisões de outros"],
        ["lobby", "Pressão organizada sobre decisões políticas"],
        ["cúpula", "Reunião de líderes de Estado"],
        ["G7", "Grupo das sete maiores economias avançadas"],
        ["G20", "Fórum das vinte maiores economias do mundo"],
        ["BRICS", "Aliança de economias emergentes"],
        ["SCO", "Organização de cooperação de Xangai"],
        ["ASEAN", "Bloco de países do Sudeste Asiático"],
        ["União Europeia", "Bloco político e econômico europeu"],
        ["zona do euro", "Países que adotaram o euro como moeda"],
        ["Brexit", "Saída do Reino Unido da União Europeia"],
        ["Mercosul", "Bloco comercial da América do Sul"],
        ["ALBA", "Aliança bolivariana para os povos da América"],
        ["Liga Árabe", "Organização dos países de língua árabe"],
        ["União Africana", "Organização política dos países africanos"],
        ["CELAC", "Comunidade de Estados latino-americanos"],
        ["OEA", "Organização dos Estados Americanos"],
        ["FMI", "Fundo que regula a economia global"],
        ["Banco Mundial", "Instituição que financia desenvolvimento"],
        ["OMC", "Organização que regula o comércio mundial"],
        ["OCDE", "Clube dos países ricos e democráticos"],
        ["zona de livre comércio", "Área sem tarifas entre países membros"],
        ["tarifa", "Taxa cobrada sobre produtos importados"],
        ["protecionismo", "Política de proteger a indústria nacional"],
        ["dumping", "Venda de produtos abaixo do custo para dominar mercado"],
        ["guerra comercial", "Conflito econômico por tarifas e restrições"],
        ["yuan", "Moeda chinesa que disputa espaço global"],
        ["dolarização", "Uso do dólar americano como moeda local"],
        ["reserva internacional", "Estoque de moedas estrangeiras de um país"],
        ["dívida externa", "Débito de um país com credores estrangeiros"],
        ["ajuste estrutural", "Reformas impostas pelo FMI como condição"],
        ["austeridade", "Corte de gastos públicos como política econômica"],
        ["privatização", "Venda de empresas estatais ao setor privado"],
        ["recurso estratégico", "Bem essencial para o poder de um Estado"],
        ["petróleo", "Recurso que molda alianças e conflitos geopolíticos"],
        ["lítio", "Metal essencial para baterias e disputa geopolítica"],
        ["terras raras", "Minerais essenciais para tecnologia moderna"],
        ["água", "Recurso cuja escassez gera conflitos regionais"],
        ["segurança alimentar", "Garantia de acesso a alimentos para a população"],
        ["corredor marítimo", "Rota estratégica de comércio pelos mares"],
        ["Mar do Sul da China", "Região marítima de tensão geopolítica"],
        ["Ártico", "Região polar disputada por potências do norte"],
        ["Antártida", "Continente gelado regulado por tratado internacional"],
        ["espaço aéreo", "Território vertical de soberania de um Estado"],
        ["espaço sideral", "Região além da atmosfera disputada por potências"],
        ["satélite militar", "Artefato espacial com uso estratégico"],
        ["GPS", "Sistema de navegação controlado pelos EUA"],
        ["GLONASS", "Sistema de navegação russo equivalente ao GPS"],
        ["China", "Potência que desafia a hegemonia americana"],
        ["Estados Unidos", "Maior potência militar e econômica global"],
        ["Rússia", "Potência nuclear herdeira da URSS"],
        ["Europa", "Bloco que busca autonomia estratégica"],
        ["Índia", "Democracia emergente entre as maiores potências"],
        ["Turquia", "Potência regional entre Oriente e Ocidente"],
        ["Irã", "Estado que desafia a ordem regional do Oriente Médio"],
        ["Israel", "Estado em conflito permanente no Oriente Médio"],
        ["Arábia Saudita", "Monarquia que domina a produção de petróleo"],
        ["Paquistão", "Potência nuclear instável da Ásia do Sul"],
        ["Coreia do Norte", "Estado hermético com programa nuclear"],
        ["Taiwan", "Ilha autônoma reivindicada pela China"],
        ["Ucrânia", "País no centro da disputa entre Rússia e Ocidente"],
        ["Kosovo", "Estado reconhecido por uns e contestado por outros"],
        ["Palestina", "Território em disputa no Oriente Médio"],
        ["Caxemira", "Região disputada entre Índia e Paquistão"],
        ["Tibete", "Região autônoma controlada pela China"],
        ["Xinjiang", "Região chinesa com minoria uigure sob repressão"],
        ["Hong Kong", "Território com autonomia reduzida pela China"],
        ["Crimeia", "Península ucraniana anexada pela Rússia"],
        ["Donbass", "Região leste da Ucrânia em conflito"],
        ["Síria", "País devastado por guerra civil e intervenções"],
        ["Líbano", "Estado com poder fragmentado entre facções"],
        ["Iêmen", "País em guerra por procuração entre Arábia e Irã"],
        ["Líbia", "Estado fragmentado após queda de Kadafi"],
        ["Mali", "País africano com presença militar estrangeira"],
        ["Sahel", "Faixa africana de instabilidade e jihadismo"],
        ["Venezuela", "País com crise e disputa geopolítica na América"],
        ["Cuba", "Ilha socialista em embargo americano desde 1962"],
        ["Nicarágua", "País centroamericano com regime autoritário"],
        ["Bolívia", "País com disputas sobre lítio e geopolítica"],
        ["disputa territorial", "Conflito por posse de terra entre países"],
        ["reclamação", "Reivindicação formal de um território"],
        ["zona econômica exclusiva", "Área marítima de exploração de um país"],
        ["plataforma continental", "Extensão submersa de um território"],
        ["lei do mar", "Convenção internacional sobre direitos oceânicos"],
        ["pirataria", "Ataque a embarcações em alto mar"],
        ["contrabando", "Comércio ilegal que atravessa fronteiras"],
        ["tráfico", "Comércio ilegal de drogas ou pessoas"],
        ["lavagem de dinheiro", "Ocultação da origem de recursos ilegais"],
        ["paraíso fiscal", "País que atrai capital com baixa tributação"],
        ["offshore", "Conta ou empresa em jurisdição estrangeira"],
        ["corrupção", "Desvio de recursos públicos por agentes do Estado"],
        ["kleptocratica", "Governo onde líderes roubam recursos do Estado"],
        ["autocracia", "Sistema onde um líder governa sem limitações"],
        ["oligarquia", "Poder concentrado em pequeno grupo privilegiado"],
        ["plutocracia", "Poder exercido pelos mais ricos"],
        ["teocracia", "Governo baseado em leis e líderes religiosos"],
        ["democracia liberal", "Sistema com eleições livres e direitos garantidos"],
        ["democracia iliberal", "Sistema com eleições mas restrições a direitos"],
        ["populismo", "Apelo ao povo contra uma elite estabelecida"],
        ["autoritarismo", "Sistema de poder concentrado sem oposição livre"],
        ["regime híbrido", "Sistema que mistura elementos democráticos e autoritários"],
        ["estado falido", "País sem controle do território ou do monopólio da força"],
        ["narcoestado", "País controlado ou infiltrado pelo tráfico de drogas"],
        ["golpe de Estado", "Tomada ilegal e violenta do poder"],
        ["contrarrevolução", "Reação ao processo revolucionário"],
        ["guerra proxy", "Conflito entre potências travado por terceiros"],
        ["financiamento externo", "Apoio financeiro de outro país a um ator interno"],
        ["mudança de regime", "Substituição do governo por influência externa"],
        ["neoconservadorismo", "Doutrina americana de promoção da democracia pela força"],
        ["doutrina Monroe", "Política americana de exclusão europeia das Américas"],
        ["doutrina Truman", "Contenção do comunismo como política americana"],
        ["plano Marshall", "Reconstrução europeia pelo dinheiro americano"],
        ["cortina de ferro", "Fronteira simbólica que dividiu a Europa"],
        ["détente", "Política de distensão entre EUA e URSS"],
        ["glasnost", "Abertura política na URSS sob Gorbachev"],
        ["perestroika", "Reestruturação econômica soviética"],
        ["fim da história", "Tese de Fukuyama sobre vitória da democracia liberal"],
        ["choque de civilizações", "Tese de Huntington sobre conflitos culturais"],
        ["ordem mundial", "Conjunto de regras que organizam as relações entre países"],
        ["nova ordem", "Reorganização do poder após o fim da guerra fria"],
        ["mundo pós-ocidental", "Contexto de declínio relativo do Ocidente"],
        ["ascensão da China", "Crescimento do poder chinês no século XXI"],
        ["iniciativa do cinturão", "Projeto chinês de infraestrutura global"],
        ["diplomacia da armadilha", "Crítica ao endividamento causado por projetos chineses"],
        ["contenção", "Política de limitar o poder de um rival"],
        ["engajamento", "Política de incluir um rival nas instituições globais"],
        ["pivot para a Ásia", "Reorientação estratégica americana para o Pacífico"],
        ["AUKUS", "Aliança militar entre EUA, Reino Unido e Austrália"],
        ["QUAD", "Diálogo de segurança entre EUA, Japão, Índia e Austrália"],
        ["Indo-Pacífico", "Região estratégica que conecta dois oceanos"],
        ["NATO expansion", "Alargamento da aliança atlântica para o leste"],
        ["escudo antimíssil", "Sistema de defesa que altera o equilíbrio nuclear"],
        ["hipersônico", "Míssil de velocidade extrema e trajetória imprevisível"],
        ["drone", "Veículo aéreo não tripulado usado em conflitos"],
        ["guerra eletrônica", "Interferência em sistemas de comunicação inimigos"],
        ["inteligência artificial", "Tecnologia que transforma a guerra moderna"],
        ["vigilância em massa", "Monitoramento digital de populações pelo Estado"],
        ["deepfake", "Manipulação de vídeo usada em desinformação"],
        ["hacktivismo", "Ataques digitais com motivação política"],
        ["infraestrutura crítica", "Sistemas essenciais vulneráveis a ataques"],
        ["resiliência", "Capacidade de um Estado de resistir a crises"],
        ["transição energética", "Mudança de combustíveis fósseis para renováveis"],
        ["diplomacia climática", "Negociações internacionais sobre o meio ambiente"],
        ["acordo de Paris", "Pacto global para limitar o aquecimento"],
        ["segurança energética", "Garantia de acesso a fontes de energia"],
        ["gasoduto", "Infraestrutura estratégica de transporte de gás"],
        ["Nord Stream", "Gasoduto que ligava Rússia à Alemanha"],
        ["dependência energética", "Vulnerabilidade gerada por importação de energia"],
        ["bioterrorismo", "Uso de agentes biológicos como arma"],
        ["pandemia", "Doença com impacto geopolítico global"],
        ["vacina", "Recurso geopolítico disputado entre potências"],
        ["diplomacia vacinal", "Uso de vacinas para ganhar influência política"],
        ["crise migratória", "Fluxo em massa de refugiados com impacto político"],
        ["muro", "Barreira física para conter fluxos migratórios"],
        ["xenofobia", "Hostilidade a estrangeiros com motivação política"],
        ["identidade nacional", "Sentimento de pertença que sustenta o Estado"],
        ["etnonacionalismo", "Nacionalismo baseado em identidade étnica"],
        ["população indígena", "Grupos originários com direitos territoriais"],
        ["minoria", "Grupo em desvantagem dentro de um Estado"],
        ["diaspora", "Comunidade de migrantes no exterior com influência política"],
        ["soft power cultural", "Uso da cultura para projetar influência global"],
        ["Hollywood", "Instrumento de projeção do poder brando americano"],
        ["Confúcio", "Instituto chinês de diplomacia cultural"],
        ["religião", "Fator que molda alianças e conflitos geopolíticos"],
        ["vaticano", "Estado com influência diplomática global pela fé"],
        ["islã político", "Uso da religião muçulmana como ideologia de Estado"],
        ["sionismo", "Movimento pelo Estado judeu em Israel"],
        ["panarabismo", "Ideal de unidade política dos povos árabes"],
        ["primavera árabe", "Onda de revoltas populares no mundo árabe"],
        ["contrarrevolução", "Reação conservadora às revoltas populares"],
        ["militarização", "Aumento do poder e presença das forças armadas"],
        ["privatização da guerra", "Uso de empresas militares privadas em conflitos"],
        ["mercenário", "Combatente pago para lutar em conflitos alheios"],
        ["Wagner", "Grupo paramilitar russo usado em conflitos externos"],
        ["base militar", "Instalação estrangeira em território de outro país"],
        ["projeção de força", "Capacidade de atuar militarmente além das fronteiras"],
        ["porta-aviões", "Símbolo máximo do poder naval de uma potência"],
        ["nuclear", "Arma que define o status de grande potência"],
        ["tratado START", "Acordo de redução de arsenais nucleares"],
        ["CPI", "Tribunal internacional para crimes de guerra"],
        ["Haia", "Sede da corte internacional de justiça"],
        ["direito internacional", "Conjunto de normas que regem as relações entre países"],
        ["jus cogens", "Normas imperativas do direito internacional"],
        ["responsabilidade de proteger", "Doutrina de intervenção em casos de atrocidades"],
        ["soberania westfaliana", "Princípio de não interferência nos assuntos internos"],
        ["paz de Vestfália", "Tratados de 1648 que fundaram o sistema de Estados"],
        ["teoria da dependência", "Visão do subdesenvolvimento como resultado do sistema global"],
        ["centro e periferia", "Modelo de desigualdade econômica mundial"],
        ["sul global", "Países em desenvolvimento do hemisfério sul"],
        ["norte global", "Países ricos e industrializados"],
        ["cooperação sul-sul", "Parceria entre países em desenvolvimento"],
        ["ajuda internacional", "Recursos transferidos de países ricos a países pobres"],
        ["condicionamento", "Exigências políticas atreladas à ajuda externa"],
        ["zona tampão", "Território que separa dois rivais geopolíticos"],
        ["estado vassalo", "País formalmente soberano mas dependente de outro"],
        ["influência regional", "Poder de moldar decisões em uma área geográfica"],
        ["potência emergente", "País que ganha relevância no cenário global"],
        ["revisionsimo", "Postura de questionar a ordem internacional estabelecida"],
        ["status quo", "Ordem existente que alguns defendem e outros contestam"]
    ];


    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}

/* 
------------------------------------------------------------------------------------------
CATEGORIA DE MATEMÁTICA
------------------------------------------------------------------------------------------
*/

function matematica() {

    // banco de palavras


    let palavras_dicas = [
        ["número", "Símbolo que representa uma quantidade"],
        ["algarismo", "Símbolo usado para escrever números"],
        ["zero", "Número que representa ausência de quantidade"],
        ["inteiro", "Número sem parte fracionária"],
        ["natural", "Número inteiro positivo ou zero"],
        ["racional", "Número que pode ser escrito como fração"],
        ["irracional", "Número que não pode ser expresso como fração"],
        ["real", "Conjunto que inclui racionais e irracionais"],
        ["imaginário", "Número baseado na raiz de número negativo"],
        ["complexo", "Número com parte real e parte imaginária"],
        ["par", "Número divisível por dois"],
        ["ímpar", "Número não divisível por dois"],
        ["primo", "Número divisível apenas por um e por si mesmo"],
        ["composto", "Número com mais de dois divisores"],
        ["múltiplo", "Resultado da multiplicação de um número por inteiro"],
        ["divisor", "Número que divide outro sem resto"],
        ["fator", "Número que multiplica outro em uma operação"],
        ["produto", "Resultado de uma multiplicação"],
        ["quociente", "Resultado de uma divisão"],
        ["resto", "Sobra de uma divisão inteira"],
        ["soma", "Resultado de uma adição"],
        ["diferença", "Resultado de uma subtração"],
        ["adição", "Operação de juntar quantidades"],
        ["subtração", "Operação de retirar uma quantidade de outra"],
        ["multiplicação", "Operação de adição repetida"],
        ["divisão", "Operação de repartir em partes iguais"],
        ["potência", "Resultado de uma base elevada a um expoente"],
        ["base", "Número que é multiplicado por si mesmo na potência"],
        ["expoente", "Indica quantas vezes a base é multiplicada"],
        ["raiz", "Operação inversa da potenciação"],
        ["quadrado", "Potência de expoente dois"],
        ["cubo", "Potência de expoente três"],
        ["logaritmo", "Expoente ao qual uma base deve ser elevada"],
        ["fração", "Representação de parte de um todo"],
        ["numerador", "Parte de cima de uma fração"],
        ["denominador", "Parte de baixo de uma fração"],
        ["decimal", "Número com vírgula separando parte inteira"],
        ["porcentagem", "Fração com denominador cem"],
        ["proporção", "Igualdade entre duas razões"],
        ["razão", "Comparação entre duas quantidades por divisão"],
        ["regra de três", "Método para resolver proporções"],
        ["média", "Soma dos valores dividida pela quantidade"],
        ["mediana", "Valor central de um conjunto ordenado"],
        ["moda", "Valor que mais aparece em um conjunto"],
        ["variância", "Medida de dispersão dos dados em relação à média"],
        ["desvio padrão", "Raiz da variância dos dados"],
        ["probabilidade", "Chance de um evento ocorrer"],
        ["evento", "Resultado possível de um experimento"],
        ["espaço amostral", "Conjunto de todos os resultados possíveis"],
        ["combinação", "Agrupamento sem importar a ordem"],
        ["permutação", "Agrupamento onde a ordem importa"],
        ["arranjo", "Agrupamento ordenado de elementos distintos"],
        ["fatorial", "Produto de todos os inteiros até um número"],
        ["coeficiente", "Número que multiplica uma variável"],
        ["variável", "Símbolo que representa valor desconhecido"],
        ["constante", "Valor fixo em uma expressão"],
        ["equação", "Igualdade com uma ou mais incógnitas"],
        ["inequação", "Desigualdade matemática com incógnita"],
        ["incógnita", "Valor desconhecido em uma equação"],
        ["solução", "Valor que satisfaz uma equação"],
        ["sistema", "Conjunto de equações resolvidas juntas"],
        ["polinômio", "Soma de monômios com variáveis e expoentes"],
        ["monômio", "Expressão com um único termo"],
        ["binômio", "Polinômio com dois termos"],
        ["trinômio", "Polinômio com três termos"],
        ["grau", "Maior expoente de uma expressão polinomial"],
        ["raiz da equação", "Valor que zera uma expressão polinomial"],
        ["delta", "Discriminante da fórmula de Bhaskara"],
        ["Bhaskara", "Fórmula para resolver equações do segundo grau"],
        ["fatoração", "Decomposição de expressão em fatores"],
        ["produto notável", "Expressão de fatoração com padrão fixo"],
        ["identidade", "Igualdade válida para qualquer valor"],
        ["função", "Relação que associa cada entrada a uma saída"],
        ["domínio", "Conjunto dos valores de entrada de uma função"],
        ["imagem", "Conjunto dos valores de saída de uma função"],
        ["gráfico", "Representação visual de uma função"],
        ["eixo", "Linha de referência em um plano cartesiano"],
        ["abscissa", "Coordenada horizontal de um ponto"],
        ["ordenada", "Coordenada vertical de um ponto"],
        ["origem", "Ponto onde os eixos se cruzam no plano"],
        ["inclinação", "Ângulo de uma reta em relação ao eixo"],
        ["coeficiente angular", "Mede a inclinação de uma reta"],
        ["coeficiente linear", "Onde a reta corta o eixo vertical"],
        ["função linear", "Função cujo gráfico é uma reta"],
        ["função afim", "Função do primeiro grau com dois termos"],
        ["função quadrática", "Função do segundo grau com parábola"],
        ["parábola", "Curva gerada por função do segundo grau"],
        ["vértice", "Ponto máximo ou mínimo de uma parábola"],
        ["função exponencial", "Função onde a variável está no expoente"],
        ["função logarítmica", "Inversa da função exponencial"],
        ["função trigonométrica", "Função baseada em razões de triângulo"],
        ["seno", "Razão entre cateto oposto e hipotenusa"],
        ["cosseno", "Razão entre cateto adjacente e hipotenusa"],
        ["tangente", "Razão entre seno e cosseno"],
        ["cossecante", "Inverso do seno"],
        ["secante", "Inverso do cosseno"],
        ["cotangente", "Inverso da tangente"],
        ["radiano", "Unidade de medida de ângulo"],
        ["grau", "Unidade de medida angular baseada em 360"],
        ["pi", "Razão entre circunferência e diâmetro do círculo"],
        ["círculo", "Conjunto de pontos equidistantes do centro"],
        ["circunferência", "Linha que delimita o círculo"],
        ["raio", "Distância do centro à borda do círculo"],
        ["diâmetro", "Corda que passa pelo centro do círculo"],
        ["corda", "Segmento que une dois pontos da circunferência"],
        ["arco", "Parte da circunferência entre dois pontos"],
        ["setor circular", "Fatia do círculo entre dois raios"],
        ["segmento circular", "Região entre corda e arco"],
        ["ângulo", "Abertura entre dois semiretas com origem comum"],
        ["ângulo reto", "Ângulo de noventa graus"],
        ["ângulo agudo", "Ângulo menor que noventa graus"],
        ["ângulo obtuso", "Ângulo maior que noventa graus"],
        ["ângulo raso", "Ângulo de cento e oitenta graus"],
        ["ângulo suplementar", "Par de ângulos que somam cento e oitenta graus"],
        ["ângulo complementar", "Par de ângulos que somam noventa graus"],
        ["bissetriz", "Reta que divide um ângulo ao meio"],
        ["triângulo", "Polígono com três lados"],
        ["quadrilátero", "Polígono com quatro lados"],
        ["pentágono", "Polígono com cinco lados"],
        ["hexágono", "Polígono com seis lados"],
        ["heptágono", "Polígono com sete lados"],
        ["octógono", "Polígono com oito lados"],
        ["polígono", "Figura plana fechada com lados retos"],
        ["regular", "Polígono com todos os lados e ângulos iguais"],
        ["perímetro", "Soma de todos os lados de uma figura"],
        ["área", "Medida da superfície de uma figura"],
        ["apótema", "Distância do centro ao lado de polígono regular"],
        ["diagonal", "Segmento que une vértices não adjacentes"],
        ["triângulo equilátero", "Triângulo com três lados iguais"],
        ["triângulo isósceles", "Triângulo com dois lados iguais"],
        ["triângulo escaleno", "Triângulo com todos os lados diferentes"],
        ["triângulo retângulo", "Triângulo com um ângulo de noventa graus"],
        ["hipotenusa", "Lado oposto ao ângulo reto"],
        ["cateto", "Lado que forma o ângulo reto"],
        ["Pitágoras", "Teorema que relaciona os lados do triângulo retângulo"],
        ["semelhança", "Figuras com mesma forma e tamanhos proporcionais"],
        ["congruência", "Figuras com mesma forma e mesmo tamanho"],
        ["homotetia", "Transformação que amplia ou reduz uma figura"],
        ["translação", "Deslocamento de uma figura sem rotação"],
        ["reflexão", "Espelhamento de uma figura"],
        ["rotação", "Giro de uma figura em torno de um ponto"],
        ["simetria", "Equilíbrio entre partes de uma figura"],
        ["eixo de simetria", "Linha que divide figura em partes iguais"],
        ["escala", "Razão entre medida real e medida representada"],
        ["retângulo", "Quadrilátero com quatro ângulos retos"],
        ["quadrado", "Retângulo com quatro lados iguais"],
        ["paralelogramo", "Quadrilátero com lados opostos paralelos"],
        ["losango", "Paralelogramo com quatro lados iguais"],
        ["trapézio", "Quadrilátero com um par de lados paralelos"],
        ["volume", "Medida do espaço ocupado por um sólido"],
        ["cubo geométrico", "Sólido com seis faces quadradas iguais"],
        ["paralelepípedo", "Sólido com seis faces retangulares"],
        ["pirâmide", "Sólido com base poligonal e faces triangulares"],
        ["cone", "Sólido com base circular e vértice"],
        ["cilindro", "Sólido com duas bases circulares paralelas"],
        ["esfera", "Sólido com todos os pontos equidistantes do centro"],
        ["prisma", "Sólido com duas bases paralelas e faces laterais"],
        ["poliedro", "Sólido limitado por faces planas"],
        ["face", "Superfície plana de um sólido"],
        ["aresta", "Segmento de intersecção entre duas faces"],
        ["vértice geométrico", "Ponto de encontro das arestas de um sólido"],
        ["Euler", "Fórmula que relaciona faces, vértices e arestas"],
        ["planificação", "Abertura de um sólido em superfície plana"],
        ["superfície", "Medida total das faces de um sólido"],
        ["distância", "Comprimento entre dois pontos"],
        ["ponto médio", "Ponto que divide segmento em partes iguais"],
        ["mediatriz", "Reta perpendicular ao segmento no ponto médio"],
        ["perpendicular", "Retas que formam ângulo reto entre si"],
        ["paralela", "Retas que nunca se encontram"],
        ["secante", "Reta que cruza outra em um ponto"],
        ["tangente geométrica", "Reta que toca a curva em um único ponto"],
        ["plano", "Superfície plana e ilimitada"],
        ["ponto", "Localização no espaço sem dimensão"],
        ["reta", "Sequência infinita de pontos em uma direção"],
        ["segmento", "Parte limitada de uma reta"],
        ["semirreta", "Parte da reta com origem e sem fim"],
        ["vetor", "Segmento com direção e sentido"],
        ["módulo do vetor", "Comprimento de um vetor"],
        ["produto escalar", "Multiplicação de vetores com resultado numérico"],
        ["produto vetorial", "Multiplicação de vetores com resultado vetorial"],
        ["matriz", "Tabela de números organizada em linhas e colunas"],
        ["determinante", "Valor associado a uma matriz quadrada"],
        ["transposta", "Matriz com linhas e colunas trocadas"],
        ["inversa", "Matriz que multiplicada pela original dá identidade"],
        ["identidade", "Matriz com uns na diagonal e zeros fora"],
        ["sistema linear", "Conjunto de equações do primeiro grau"],
        ["eliminação", "Método para resolver sistemas lineares"],
        ["substituição", "Outro método para resolver sistemas lineares"],
        ["Cramer", "Regra para resolver sistemas por determinantes"],
        ["progressão aritmética", "Sequência com diferença constante entre termos"],
        ["progressão geométrica", "Sequência com razão constante entre termos"],
        ["razão da PA", "Diferença constante entre termos consecutivos"],
        ["razão da PG", "Quociente constante entre termos consecutivos"],
        ["termo geral", "Fórmula que dá qualquer termo da progressão"],
        ["soma da PA", "Fórmula da soma dos termos de progressão aritmética"],
        ["soma da PG", "Fórmula da soma dos termos de progressão geométrica"],
        ["sequência", "Lista ordenada de elementos matemáticos"],
        ["série", "Soma dos termos de uma sequência"],
        ["limite", "Valor que uma função se aproxima infinitamente"],
        ["continuidade", "Propriedade de função sem saltos ou buracos"],
        ["derivada", "Taxa de variação instantânea de uma função"],
        ["integral", "Área sob a curva de uma função"],
        ["cálculo", "Ramo da matemática de derivadas e integrais"],
        ["regra da cadeia", "Método para derivar funções compostas"],
        ["regra do produto", "Método para derivar produto de funções"],
        ["regra do quociente", "Método para derivar divisão de funções"],
        ["máximo", "Maior valor de uma função em um intervalo"],
        ["mínimo", "Menor valor de uma função em um intervalo"],
        ["ponto de inflexão", "Onde a concavidade da curva muda"],
        ["concavidade", "Curvatura de uma função para cima ou para baixo"],
        ["assíntota", "Reta que a função se aproxima mas não toca"],
        ["intervalo", "Conjunto de números entre dois valores"],
        ["conjunto", "Agrupamento de elementos com propriedade comum"],
        ["elemento", "Cada objeto pertencente a um conjunto"],
        ["pertinência", "Relação entre elemento e conjunto"],
        ["subconjunto", "Conjunto cujos elementos pertencem a outro"],
        ["união", "Conjunto de elementos de um ou de outro conjunto"],
        ["interseção", "Conjunto de elementos comuns a dois conjuntos"],
        ["complementar", "Elementos que não pertencem a um conjunto"],
        ["diagrama de Venn", "Representação visual de conjuntos"],
        ["lógica", "Estudo das regras de raciocínio válido"],
        ["proposição", "Afirmação que pode ser verdadeira ou falsa"],
        ["negação", "Inversão do valor lógico de uma proposição"],
        ["conjunção", "Conectivo lógico do e"],
        ["disjunção", "Conectivo lógico do ou"],
        ["condicional", "Proposição do tipo se então"],
        ["bicondicional", "Proposição do tipo se e somente se"],
        ["tautologia", "Proposição sempre verdadeira"],
        ["contradição", "Proposição sempre falsa"],
        ["teorema", "Afirmação matemática demonstrada como verdadeira"],
        ["axioma", "Afirmação aceita como verdadeira sem prova"],
        ["postulado", "Princípio básico assumido sem demonstração"],
        ["corolário", "Resultado derivado de um teorema"],
        ["lema", "Resultado auxiliar usado na prova de um teorema"],
        ["demonstração", "Prova lógica de um teorema"],
        ["indução", "Prova que generaliza a partir de casos específicos"],
        ["abdução", "Raciocínio que parte do resultado para a causa"],
        ["dedução", "Raciocínio do geral para o particular"],
        ["hipótese", "Condição assumida no início de uma prova"],
        ["tese", "Conclusão a ser provada em um teorema"],
        ["absurdo", "Método de prova por contradição"],
        ["contraposição", "Provar o inverso para validar o original"],
        ["notação científica", "Forma de escrever números muito grandes ou pequenos"],
        ["algarismos significativos", "Dígitos relevantes em uma medição"],
        ["arredondamento", "Aproximação de um número a um valor próximo"],
        ["truncamento", "Corte dos dígitos sem arredondar"],
        ["estimativa", "Cálculo aproximado de um valor"],
        ["ordem de grandeza", "Potência de dez mais próxima de um número"],
        ["unidade", "Valor padrão de medida"],
        ["metro", "Unidade de comprimento do sistema internacional"],
        ["quilograma", "Unidade de massa do sistema internacional"],
        ["segundo", "Unidade de tempo do sistema internacional"],
        ["conversão", "Mudança de uma unidade para outra"],
        ["escala de temperatura", "Relação entre Celsius, Fahrenheit e Kelvin"],
        ["geometria analítica", "Estudo de figuras por coordenadas"],
        ["equação da reta", "Expressão que define uma reta no plano"],
        ["equação da circunferência", "Expressão que define uma circunferência"],
        ["cônica", "Curva gerada pela intersecção de cone com plano"],
        ["elipse", "Cônica com dois focos e soma de distâncias constante"],
        ["hipérbole", "Cônica com diferença de distâncias constante"],
        ["foco", "Ponto especial que define uma cônica"],
        ["excentricidade", "Medida que classifica o tipo de cônica"],
        ["estatística", "Ciência de coletar e analisar dados"],
        ["população", "Conjunto total estudado na estatística"],
        ["amostra", "Subconjunto representativo da população"],
        ["frequência", "Quantas vezes um valor aparece nos dados"],
        ["histograma", "Gráfico de barras para distribuição de dados"],
        ["quartil", "Divisão dos dados em quatro partes iguais"],
        ["percentil", "Divisão dos dados em cem partes iguais"],
        ["correlação", "Relação entre duas variáveis estatísticas"],
        ["regressão", "Modelo que prevê uma variável a partir de outra"],
        ["distribuição normal", "Curva em sino da estatística"],
        ["binomial", "Distribuição de probabilidade com dois resultados"],
        ["Poisson", "Distribuição de eventos raros em intervalo fixo"],
        ["teorema central do limite", "Lei que justifica a distribuição normal"],
        ["intervalo de confiança", "Faixa provável de um parâmetro populacional"],
        ["hipótese nula", "Afirmação padrão testada na estatística"],
        ["valor p", "Probabilidade de resultado extremo sob hipótese nula"],
        ["significância", "Nível de certeza aceito em um teste estatístico"],
        ["erro tipo um", "Rejeitar hipótese nula verdadeira"],
        ["erro tipo dois", "Aceitar hipótese nula falsa"],
        ["número de Euler", "Base do logaritmo natural, aproximadamente 2,718"],
        ["número áureo", "Proporção especial aproximada de 1,618"],
        ["sequência de Fibonacci", "Série onde cada termo é a soma dos dois anteriores"],
        ["fractal", "Figura com padrão que se repete em qualquer escala"],
        ["topologia", "Estudo das propriedades que resistem à deformação"],
        ["teoria dos grafos", "Estudo de redes e conexões entre pontos"],
        ["grafo", "Estrutura de vértices conectados por arestas"],
        ["árvore", "Grafo sem ciclos que conecta todos os vértices"],
        ["algoritmo", "Sequência de passos para resolver um problema"],
        ["recursão", "Processo que se define em termos de si mesmo"],
        ["iteração", "Repetição de um processo para chegar ao resultado"],
        ["número de ouro", "Razão que aparece frequentemente na natureza"],
        ["sólido de Platão", "Poliedro convexo regular com faces iguais"],
        ["icosaedro", "Sólido de Platão com vinte faces triangulares"],
        ["dodecaedro", "Sólido de Platão com doze faces pentagonais"],
        ["tetraedro", "Sólido com quatro faces triangulares"],
        ["octaedro", "Sólido com oito faces triangulares"]
    ];

    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}

/* 
------------------------------------------------------------------------------------------
CATEGORIA DE FILOSOFIA
------------------------------------------------------------------------------------------
*/

function filosofia() {

    // banco de palavras


    let palavras_dicas = [
        ["filosofia", "Amor à sabedoria e busca pelo conhecimento"],
        ["metafísica", "Estudo do ser e da realidade além do físico"],
        ["epistemologia", "Teoria do conhecimento e seus limites"],
        ["ética", "Estudo dos princípios que guiam o agir humano"],
        ["estética", "Filosofia do belo e da arte"],
        ["lógica", "Ciência das regras do pensamento válido"],
        ["ontologia", "Estudo da natureza do ser"],
        ["axiologia", "Estudo dos valores e do que é valioso"],
        ["fenomenologia", "Estudo da experiência consciente tal como vivida"],
        ["hermenêutica", "Arte e teoria da interpretação de textos"],
        ["dialética", "Método de busca da verdade por opostos"],
        ["retórica", "Arte de persuadir pelo discurso"],
        ["sofística", "Uso do argumento para vencer sem buscar verdade"],
        ["ceticismo", "Dúvida sistemática sobre a possibilidade do conhecimento"],
        ["relativismo", "Visão de que verdades dependem do contexto"],
        ["dogmatismo", "Aceitação de verdades sem questionamento crítico"],
        ["racionalismo", "Doutrina que privilegia a razão como fonte do saber"],
        ["empirismo", "Doutrina que privilegia a experiência como fonte do saber"],
        ["idealismo", "Visão de que a realidade é mental ou espiritual"],
        ["materialismo", "Visão de que só a matéria é real"],
        ["dualismo", "Divisão da realidade em dois princípios opostos"],
        ["monismo", "Visão de que tudo se reduz a um único princípio"],
        ["pluralismo", "Visão de que a realidade tem múltiplos princípios"],
        ["realismo", "Crença na existência independente do mundo externo"],
        ["nominalismo", "Visão de que universais são apenas nomes"],
        ["universalismo", "Ideia de que princípios valem para todos os seres"],
        ["particularismo", "Ideia de que verdades dependem do caso específico"],
        ["transcendência", "O que está além da experiência possível"],
        ["imanência", "O que está contido na própria realidade"],
        ["absoluto", "O que é incondicionado e perfeito"],
        ["infinito", "O que não tem limite ou fim"],
        ["finitude", "Condição de ser limitado e mortal"],
        ["contingência", "O que poderia ser diferente do que é"],
        ["necessidade", "O que não pode ser de outro modo"],
        ["possibilidade", "O que pode vir a ser ou não ser"],
        ["substância", "O que existe por si mesmo e sustenta qualidades"],
        ["acidente", "Qualidade que pode ou não pertencer a um ser"],
        ["essência", "O que faz uma coisa ser o que ela é"],
        ["existência", "O fato de algo ser real e estar no mundo"],
        ["forma", "Princípio que organiza e define uma coisa"],
        ["matéria", "Substrato indeterminado que recebe a forma"],
        ["causa", "O que produz ou explica um efeito"],
        ["efeito", "Resultado necessário de uma causa"],
        ["teleologia", "Estudo das causas finais e propósitos"],
        ["determinismo", "Doutrina de que tudo é causado necessariamente"],
        ["livre-arbítrio", "Capacidade de escolher sem determinação externa"],
        ["compatibilismo", "Posição que une determinismo e liberdade"],
        ["fatalismo", "Crença de que o destino é inevitável"],
        ["causalidade", "Relação necessária entre causa e efeito"],
        ["tempo", "Dimensão em que os eventos se sucedem"],
        ["espaço", "Dimensão em que os corpos se localizam"],
        ["identidade", "O que torna algo igual a si mesmo"],
        ["diferença", "O que distingue um ser de outro"],
        ["mudança", "Passagem de um estado a outro"],
        ["permanência", "O que resiste à mudança e persiste"],
        ["ser", "Tema central da metafísica ocidental"],
        ["nada", "Ausência total de ser"],
        ["devir", "Processo contínuo de mudança e transformação"],
        ["uno", "O que é indiviso e sem multiplicidade"],
        ["múltiplo", "O que é composto de muitos elementos"],
        ["verdade", "Correspondência entre pensamento e realidade"],
        ["falsidade", "Não correspondência entre ideia e realidade"],
        ["certeza", "Estado de conhecimento sem dúvida possível"],
        ["dúvida", "Suspensão do juízo diante da incerteza"],
        ["crença", "Aceitar algo como verdadeiro"],
        ["conhecimento", "Crença verdadeira e justificada"],
        ["opinião", "Crença sem justificação suficiente"],
        ["saber", "Conhecimento refletido e fundamentado"],
        ["ignorância", "Ausência de conhecimento sobre algo"],
        ["consciência", "Experiência subjetiva de si e do mundo"],
        ["autoconsciência", "Capacidade de refletir sobre si mesmo"],
        ["subjetividade", "O que pertence ao sujeito que conhece"],
        ["objetividade", "O que existe independente do sujeito"],
        ["intersubjetividade", "Dimensão partilhada entre sujeitos"],
        ["percepção", "Apreensão do mundo pelos sentidos"],
        ["intuição", "Conhecimento imediato sem raciocínio discursivo"],
        ["abstração", "Processo de separar qualidades de um objeto"],
        ["conceito", "Representação geral e abstrata de algo"],
        ["ideia", "Conteúdo da mente que representa algo"],
        ["juízo", "Afirmação ou negação de algo sobre algo"],
        ["raciocínio", "Sequência de juízos que leva a uma conclusão"],
        ["argumento", "Conjunto de premissas que apoiam uma conclusão"],
        ["premissa", "Afirmação da qual parte um argumento"],
        ["conclusão", "Afirmação derivada das premissas"],
        ["dedução", "Raciocínio do geral para o particular"],
        ["indução", "Raciocínio do particular para o geral"],
        ["abdução", "Raciocínio que busca a melhor explicação"],
        ["falácia", "Argumento logicamente inválido ou enganoso"],
        ["paradoxo", "Afirmação que contradiz a intuição ou si mesma"],
        ["antinomia", "Contradição entre princípios igualmente válidos"],
        ["aporia", "Impasse filosófico sem solução aparente"],
        ["silogismo", "Argumento dedutivo com duas premissas e conclusão"],
        ["sofisma", "Argumento falacioso construído para enganar"],
        ["tautologia", "Proposição verdadeira por sua própria forma"],
        ["contradição", "Proposição que é sempre falsa"],
        ["contingente", "Proposição que pode ser verdadeira ou falsa"],
        ["necessário", "Proposição que não pode ser falsa"],
        ["analítico", "Juízo cujo predicado está contido no sujeito"],
        ["sintético", "Juízo que acrescenta algo ao conceito do sujeito"],
        ["a priori", "Conhecimento independente da experiência"],
        ["a posteriori", "Conhecimento derivado da experiência"],
        ["fenômeno", "O que aparece à consciência"],
        ["noumeno", "A coisa em si além da aparência"],
        ["imperativo", "Mandamento moral que obriga a agir"],
        ["imperativo categórico", "Dever moral incondicional de Kant"],
        ["dever", "Obrigação moral independente das consequências"],
        ["virtude", "Excelência do caráter que leva ao bem agir"],
        ["vício", "Hábito que se opõe à virtude"],
        ["bem", "O que é desejável e valioso em si mesmo"],
        ["mal", "O que é prejudicial ou moralmente errado"],
        ["justo", "O que está em conformidade com a justiça"],
        ["injusto", "O que viola os princípios da equidade"],
        ["direito", "O que é devido a alguém segundo norma"],
        ["dever moral", "Obrigação ética que se impõe à vontade"],
        ["autonomia", "Capacidade de dar a si mesmo a lei moral"],
        ["heteronomia", "Sujeição a uma lei externa ao sujeito"],
        ["liberdade", "Ausência de coerção e capacidade de autorrealização"],
        ["responsabilidade", "Dever de responder pelos próprios atos"],
        ["culpa", "Sentimento de ter transgredido uma norma moral"],
        ["punição", "Resposta social à transgressão moral"],
        ["perdão", "Renúncia à punição e à mágoa causada"],
        ["solidariedade", "Laço de compromisso com o outro"],
        ["altruísmo", "Preocupação genuína com o bem do outro"],
        ["egoísmo", "Prioridade absoluta do interesse próprio"],
        ["utilitarismo", "Ética que busca o maior bem para o maior número"],
        ["consequencialismo", "Ética que julga atos pelos resultados"],
        ["deontologia", "Ética do dever independente das consequências"],
        ["contratualismo", "Moralidade baseada em acordo entre pessoas"],
        ["naturalismo", "Derivação de valores a partir da natureza"],
        ["emotivismo", "Visão de que juízos morais expressam emoções"],
        ["niilismo", "Negação de qualquer valor ou sentido"],
        ["existencialismo", "Filosofia que parte da existência humana concreta"],
        ["absurdo", "Conflito entre busca de sentido e silêncio do mundo"],
        ["angústia", "Sentimento de liberdade e responsabilidade infinitas"],
        ["autenticidade", "Viver segundo escolhas próprias sem má-fé"],
        ["má-fé", "Autoengano sobre a própria liberdade"],
        ["ser-no-mundo", "Condição humana de estar sempre situada"],
        ["facticidade", "Dimensão de dado e limitado da existência"],
        ["transcendência existencial", "Capacidade de projetar-se além do dado"],
        ["alteridade", "A realidade irredutível do outro"],
        ["intersubjetividade", "Relação constitutiva entre sujeitos"],
        ["reconhecimento", "Necessidade de ser visto pelo outro"],
        ["alienação", "Separação do sujeito de si mesmo ou do produto"],
        ["ideologia", "Sistema de ideias que mascara relações de poder"],
        ["emancipação", "Liberação de formas de opressão e dominação"],
        ["poder", "Capacidade de influenciar ações de outros"],
        ["dominação", "Exercício de poder sobre o outro contra sua vontade"],
        ["resistência", "Oposição ativa a formas de opressão"],
        ["hegemonia", "Dominação cultural e intelectual de um grupo"],
        ["discurso", "Prática linguística que produz e organiza sentido"],
        ["desconstrução", "Leitura que expõe tensões em um texto"],
        ["estruturalismo", "Análise que busca estruturas subjacentes"],
        ["pós-estruturalismo", "Crítica das estruturas fixas e dos centros"],
        ["modernidade", "Época marcada pela razão e pelo progresso"],
        ["pós-modernidade", "Questionamento das grandes narrativas modernas"],
        ["iluminismo", "Movimento filosófico da razão e das luzes"],
        ["progresso", "Crença na melhoria contínua da humanidade"],
        ["tradição", "Conjunto de práticas e saberes transmitidos"],
        ["ruptura", "Quebra com o que vinha antes"],
        ["revolução", "Transformação radical de uma ordem estabelecida"],
        ["conservadorismo", "Valorização da tradição e da ordem"],
        ["liberalismo", "Filosofia política da liberdade individual"],
        ["comunitarismo", "Crítica liberal que valoriza a comunidade"],
        ["republicanismo", "Filosofia da liberdade como não dominação"],
        ["anarquismo", "Filosofia da abolição de toda forma de Estado"],
        ["socialismo", "Teoria da propriedade coletiva dos meios"],
        ["marxismo", "Filosofia crítica baseada na luta de classes"],
        ["feminismo", "Filosofia da igualdade e emancipação das mulheres"],
        ["ecologia política", "Filosofia dos direitos da natureza"],
        ["bioética", "Ética aplicada às questões da vida e da medicina"],
        ["eutanásia", "Tema bioético sobre o direito de morrer dignamente"],
        ["aborto", "Debate filosófico sobre vida, autonomia e direito"],
        ["clonagem", "Questão ética sobre os limites da biotecnologia"],
        ["inteligência artificial", "Desafio filosófico sobre mente e máquina"],
        ["transumanismo", "Filosofia de superação dos limites humanos pela tecnologia"],
        ["singularidade", "Ponto hipotético em que a IA supera o humano"],
        ["pessoa", "Ser com dignidade e valor em si mesmo"],
        ["dignidade", "Valor incondicional do ser humano"],
        ["direitos humanos", "Direitos universais de toda pessoa"],
        ["cidadania", "Condição de membro de uma comunidade política"],
        ["democracia", "Sistema onde o povo exerce o poder"],
        ["tirania", "Governo que viola os direitos dos cidadãos"],
        ["justiça", "Dar a cada um o que lhe é devido"],
        ["equidade", "Tratamento justo considerando as diferenças"],
        ["igualdade", "Ausência de privilégios injustificados"],
        ["liberdade negativa", "Ausência de interferência externa"],
        ["liberdade positiva", "Capacidade efetiva de realizar escolhas"],
        ["tolerância", "Aceitação da diferença sem aprovação necessária"],
        ["pluralismo", "Convivência legítima de visões diversas"],
        ["cosmopolitismo", "Pertencimento à humanidade além do Estado"],
        ["patriotismo", "Amor à pátria como valor político"],
        ["soberania popular", "O povo como fonte legítima do poder"],
        ["contrato social", "Fundamento fictício da ordem política legítima"],
        ["estado de natureza", "Condição hipotética antes da sociedade política"],
        ["bem comum", "Interesse que transcende o individual"],
        ["esfera pública", "Espaço de debate racional entre cidadãos"],
        ["opinião pública", "Conjunto de posições partilhadas socialmente"],
        ["mídia", "Veículo de formação e deformação da opinião"],
        ["comunicação", "Troca simbólica entre sujeitos"],
        ["linguagem", "Sistema de signos que estrutura o pensamento"],
        ["signo", "Unidade mínima de significação"],
        ["significado", "Conteúdo conceitual de um signo"],
        ["significante", "Forma sensível do signo"],
        ["símbolo", "Signo que representa por convenção"],
        ["metáfora", "Transferência de sentido entre domínios"],
        ["narrativa", "Estrutura temporal de sentido"],
        ["mito", "Narrativa simbólica que explica a origem"],
        ["logos", "Razão e discurso como princípio ordenador"],
        ["mythos", "Pensamento narrativo e simbólico"],
        ["razão", "Faculdade de pensar de modo ordenado"],
        ["emoção", "Estado afetivo que orienta a ação"],
        ["paixão", "Estado emocional intenso que arrebata"],
        ["vontade", "Faculdade de querer e de agir"],
        ["desejo", "Tendência para o que se percebe como bem"],
        ["prazer", "Experiência agradável buscada naturalmente"],
        ["dor", "Experiência desprazerosa que se quer evitar"],
        ["felicidade", "Estado de realização plena do ser humano"],
        ["eudaimonia", "Florescimento humano na filosofia grega"],
        ["hedonismo", "Doutrina que coloca o prazer como bem supremo"],
        ["ascetismo", "Prática de renunciar ao prazer para elevar o espírito"],
        ["estoicismo", "Filosofia da virtude e da indiferença ao externo"],
        ["epicurismo", "Filosofia do prazer moderado e da amizade"],
        ["cinismo", "Rejeição das convenções sociais em nome da natureza"],
        ["escepticismo", "Suspensão do juízo diante da incerteza radical"],
        ["neoplatonismo", "Filosofia de Plotino sobre o uno e a emanação"],
        ["escolástica", "Filosofia medieval que reconcilia fé e razão"],
        ["humanismo renascentista", "Valorização do ser humano no Renascimento"],
        ["iluminismo", "Confiança na razão como guia da humanidade"],
        ["positivismo", "Filosofia que limita o conhecimento ao verificável"],
        ["pragmatismo", "Filosofia que avalia ideias pelos seus efeitos"],
        ["instrumentalismo", "Visão das teorias como ferramentas úteis"],
        ["filosofia analítica", "Tradição que enfatiza clareza e análise lógica"],
        ["filosofia continental", "Tradição europeia mais histórica e crítica"],
        ["hermenêutica", "Filosofia da interpretação e compreensão"],
        ["desconstrução", "Método de Derrida para ler textos filosóficos"],
        ["genealogia", "Método de Nietzsche para investigar a origem dos valores"],
        ["arqueologia do saber", "Método de Foucault para estudar o conhecimento"],
        ["biopoder", "Poder que gere a vida das populações"],
        ["disciplina", "Técnica de controle dos corpos e comportamentos"],
        ["panóptico", "Estrutura de vigilância que produz autocontrole"],
        ["simulacro", "Cópia sem original na filosofia pós-moderna"],
        ["hiperrealidade", "Realidade substituída por simulações"],
        ["rizoma", "Estrutura de pensamento sem centro nem hierarquia"],
        ["diferença", "Conceito central da filosofia de Deleuze"],
        ["devir", "Processo de transformação sem identidade fixa"],
        ["acontecimento", "O que irrompe e muda o curso das coisas"],
        ["eterno retorno", "Ideia de Nietzsche sobre a repetição da vida"],
        ["vontade de poder", "Força criativa e afirmativa em Nietzsche"],
        ["super-homem", "Ideal nietzschiano de superação do humano"],
        ["morte de Deus", "Diagnóstico nietzschiano do fim dos valores absolutos"],
        ["niilismo ativo", "Destruição criativa dos valores para criar novos"],
        ["ressentimento", "Modo reativo de valorar em Nietzsche"],
        ["má consciência", "Interiorização da crueldade na moral nietzschiana"],
        ["alma", "Princípio vital e espiritual do ser humano"],
        ["corpo", "Dimensão material e vivida da existência"],
        ["mente", "Dimensão cognitiva e consciente do ser"],
        ["cérebro", "Base neural da mente no debate filosófico"],
        ["problema mente-corpo", "Questão sobre a relação entre mental e físico"],
        ["dualismo cartesiano", "Separação radical entre mente e corpo em Descartes"],
        ["cogito", "Prova cartesiana da existência pelo pensamento"],
        ["Deus", "Tema central da filosofia da religião"],
        ["teísmo", "Crença na existência de um Deus pessoal"],
        ["ateísmo", "Não crença na existência de Deus"],
        ["agnosticismo", "Posição de ignorância sobre a existência de Deus"],
        ["panteísmo", "Identificação de Deus com a totalidade do real"],
        ["argumento ontológico", "Prova da existência de Deus pela perfeição"],
        ["argumento cosmológico", "Prova de Deus como causa primeira"],
        ["argumento teleológico", "Prova de Deus pelo design do universo"],
        ["problema do mal", "Dificuldade de conciliar Deus bom com o sofrimento"],
        ["fé", "Adesão a verdades além da razão demonstrável"],
        ["revelação", "Manifestação divina ao ser humano"],
        ["secularismo", "Separação da vida pública da religião"],
        ["sacralidade", "Caráter do que é sagrado e intocável"],
        ["ritual", "Prática simbólica de caráter religioso ou social"],
        ["transcendência religiosa", "Dimensão divina além do mundo humano"],
        ["imortalidade", "Crença na continuidade da alma após a morte"],
        ["reencarnação", "Doutrina do retorno da alma em outro corpo"],
        ["karma", "Lei moral de causa e efeito no pensamento oriental"],
        ["nirvana", "Estado de extinção do sofrimento no budismo"],
        ["tao", "Princípio supremo da filosofia chinesa"],
        ["yin yang", "Dualidade complementar do pensamento taoísta"],
        ["dharma", "Ordem moral e cósmica no pensamento indiano"],
        ["maya", "Ilusão do mundo sensível na filosofia hindu"]
    ];

    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}

/* 
------------------------------------------------------------------------------------------
CATEGORIA DE TI/PROGRAMAÇÃO
------------------------------------------------------------------------------------------
*/

function ti_programacao() {

    // banco de palavras

    let palavras_dicas = [
        ["algoritmo", "Sequência de passos para resolver um problema"],
        ["variável", "Espaço na memória que armazena um valor"],
        ["constante", "Valor que não muda durante a execução"],
        ["função", "Bloco de código reutilizável com um propósito"],
        ["método", "Função associada a um objeto ou classe"],
        ["classe", "Modelo para criar objetos em orientação a objetos"],
        ["objeto", "Instância de uma classe com atributos e métodos"],
        ["herança", "Mecanismo onde uma classe deriva de outra"],
        ["polimorfismo", "Capacidade de um método ter formas diferentes"],
        ["encapsulamento", "Ocultar detalhes internos de um objeto"],
        ["abstração", "Modelar apenas os aspectos essenciais de algo"],
        ["interface", "Contrato que define métodos sem implementação"],
        ["loop", "Estrutura que repete um bloco de código"],
        ["condicional", "Estrutura que executa código com base em condição"],
        ["recursão", "Função que chama a si mesma para resolver problema"],
        ["pilha", "Estrutura de dados do tipo último a entrar, primeiro a sair"],
        ["fila", "Estrutura de dados do tipo primeiro a entrar, primeiro a sair"],
        ["array", "Coleção ordenada de elementos do mesmo tipo"],
        ["lista", "Coleção ordenada e dinâmica de elementos"],
        ["dicionário", "Estrutura de pares chave-valor"],
        ["árvore", "Estrutura hierárquica com nó raiz e filhos"],
        ["grafo", "Estrutura de nós conectados por arestas"],
        ["hash", "Transformação de dados em valor de tamanho fixo"],
        ["índice", "Referência de posição em uma estrutura de dados"],
        ["ponteiro", "Variável que armazena endereço de memória"],
        ["alocação", "Reserva de espaço na memória para um dado"],
        ["garbage collector", "Sistema que libera memória não utilizada"],
        ["compilador", "Traduz código-fonte para linguagem de máquina"],
        ["interpretador", "Executa código-fonte linha a linha"],
        ["bytecode", "Código intermediário entre fonte e máquina"],
        ["runtime", "Ambiente de execução de um programa"],
        ["depuração", "Processo de encontrar e corrigir erros no código"],
        ["bug", "Erro no código que causa comportamento inesperado"],
        ["breakpoint", "Ponto de parada para inspecionar o programa"],
        ["stack trace", "Registro da sequência de chamadas até um erro"],
        ["exception", "Evento que interrompe o fluxo normal do programa"],
        ["try catch", "Bloco para capturar e tratar exceções"],
        ["log", "Registro de eventos durante a execução"],
        ["teste unitário", "Verificação isolada de uma unidade de código"],
        ["TDD", "Desenvolvimento guiado por testes"],
        ["refatoração", "Melhorar o código sem alterar seu comportamento"],
        ["código limpo", "Código legível, simples e bem estruturado"],
        ["padrão de projeto", "Solução reutilizável para problemas comuns"],
        ["singleton", "Padrão que garante apenas uma instância de classe"],
        ["factory", "Padrão que cria objetos sem especificar a classe"],
        ["observer", "Padrão de notificação entre objetos dependentes"],
        ["MVC", "Padrão que separa modelo, visão e controle"],
        ["SOLID", "Conjunto de princípios de bom design orientado a objetos"],
        ["DRY", "Princípio de não repetir código"],
        ["KISS", "Princípio de manter o código simples"],
        ["YAGNI", "Princípio de não implementar o que ainda não é necessário"],
        ["API", "Interface de programação para comunicação entre sistemas"],
        ["REST", "Estilo de arquitetura para APIs web"],
        ["GraphQL", "Linguagem de consulta para APIs flexíveis"],
        ["endpoint", "Ponto de acesso de uma API"],
        ["requisição", "Pedido feito a um servidor ou serviço"],
        ["resposta", "Retorno de um servidor a uma requisição"],
        ["JSON", "Formato leve de troca de dados baseado em texto"],
        ["XML", "Formato de marcação para troca de dados estruturados"],
        ["serialização", "Converter objeto em formato transmissível"],
        ["deserialização", "Reconstruir objeto a partir de dados serializados"],
        ["autenticação", "Verificação da identidade de um usuário"],
        ["autorização", "Verificação do que um usuário pode acessar"],
        ["token", "Credencial digital para acesso autenticado"],
        ["JWT", "Token compacto e seguro para autenticação"],
        ["OAuth", "Protocolo de autorização baseado em tokens"],
        ["sessão", "Estado mantido entre cliente e servidor"],
        ["cookie", "Dado armazenado no navegador pelo servidor"],
        ["criptografia", "Técnica de proteger dados por transformação"],
        ["chave", "Parâmetro usado para cifrar ou decifrar dados"],
        ["certificado", "Documento digital que autentica uma entidade"],
        ["HTTPS", "Protocolo HTTP com camada de segurança"],
        ["firewall", "Barreira que filtra tráfego de rede"],
        ["VPN", "Rede virtual privada para conexão segura"],
        ["injeção de SQL", "Ataque que insere comandos SQL maliciosos"],
        ["XSS", "Ataque de inserção de scripts em páginas web"],
        ["CSRF", "Ataque que força ações indesejadas em usuário autenticado"],
        ["hash de senha", "Armazenamento seguro de senhas por função hash"],
        ["salt", "Dado aleatório adicionado à senha antes do hash"],
        ["banco de dados", "Sistema organizado para armazenar e consultar dados"],
        ["tabela", "Estrutura de dados em linhas e colunas no banco"],
        ["coluna", "Atributo de uma tabela em banco de dados relacional"],
        ["linha", "Registro individual em uma tabela"],
        ["chave primária", "Identificador único de um registro"],
        ["chave estrangeira", "Referência a registro de outra tabela"],
        ["join", "Operação que combina dados de duas tabelas"],
        ["query", "Consulta feita ao banco de dados"],
        ["SQL", "Linguagem de consulta estruturada para bancos"],
        ["SELECT", "Comando SQL para buscar dados"],
        ["INSERT", "Comando SQL para inserir dados"],
        ["UPDATE", "Comando SQL para atualizar dados"],
        ["DELETE", "Comando SQL para remover dados"],
        ["índice de banco", "Estrutura que acelera buscas no banco de dados"],
        ["transação", "Conjunto de operações tratadas como uma unidade"],
        ["commit", "Confirmação permanente de uma transação"],
        ["rollback", "Desfazer operações de uma transação falha"],
        ["ORM", "Mapeamento entre objetos e tabelas do banco"],
        ["NoSQL", "Banco de dados não relacional e flexível"],
        ["MongoDB", "Banco de dados orientado a documentos"],
        ["Redis", "Banco de dados em memória para alta velocidade"],
        ["cache", "Armazenamento temporário para acesso rápido"],
        ["TTL", "Tempo de vida de um dado em cache"],
        ["fila de mensagens", "Sistema de comunicação assíncrona entre serviços"],
        ["Kafka", "Plataforma de streaming de eventos em tempo real"],
        ["RabbitMQ", "Broker de mensagens para comunicação entre serviços"],
        ["microsserviço", "Arquitetura de serviços pequenos e independentes"],
        ["monólito", "Aplicação com todos os componentes juntos"],
        ["contêiner", "Ambiente isolado para executar aplicações"],
        ["Docker", "Plataforma de criação e gestão de contêineres"],
        ["Kubernetes", "Sistema de orquestração de contêineres"],
        ["pod", "Menor unidade de implantação no Kubernetes"],
        ["cluster", "Conjunto de máquinas que trabalham juntas"],
        ["nuvem", "Infraestrutura de computação acessada pela internet"],
        ["AWS", "Principal provedor de serviços em nuvem"],
        ["Azure", "Plataforma de nuvem da Microsoft"],
        ["GCP", "Plataforma de nuvem do Google"],
        ["IaaS", "Infraestrutura como serviço na nuvem"],
        ["PaaS", "Plataforma como serviço na nuvem"],
        ["SaaS", "Software como serviço entregue pela internet"],
        ["serverless", "Execução de código sem gerenciar servidores"],
        ["lambda", "Função serverless da AWS"],
        ["escalabilidade", "Capacidade de crescer conforme a demanda"],
        ["balanceamento", "Distribuição de requisições entre servidores"],
        ["alta disponibilidade", "Sistema que funciona mesmo com falhas"],
        ["failover", "Troca automática para sistema reserva em falha"],
        ["latência", "Tempo de resposta de um sistema"],
        ["throughput", "Quantidade de dados processados por unidade de tempo"],
        ["benchmark", "Medição de desempenho de um sistema"],
        ["profiling", "Análise de desempenho de código em execução"],
        ["otimização", "Melhoria da eficiência de código ou sistema"],
        ["complexidade", "Medida do custo em tempo ou espaço de algoritmo"],
        ["Big O", "Notação para descrever a complexidade de algoritmos"],
        ["busca binária", "Algoritmo eficiente para encontrar elemento em lista"],
        ["ordenação", "Processo de organizar elementos em sequência"],
        ["quicksort", "Algoritmo de ordenação rápida por pivô"],
        ["mergesort", "Algoritmo de ordenação por divisão e conquista"],
        ["git", "Sistema de controle de versão distribuído"],
        ["commit de versionamento", "Registro de mudança no histórico do código"],
        ["branch", "Ramificação independente do código no repositório"],
        ["merge", "Unificação de duas ramificações de código"],
        ["pull request", "Proposta de integração de código revisada"],
        ["conflito", "Divergência entre versões do mesmo arquivo"],
        ["repositório", "Local onde o código e seu histórico são armazenados"],
        ["GitHub", "Plataforma de hospedagem de repositórios git"],
        ["CI CD", "Integração e entrega contínua de software"],
        ["pipeline", "Fluxo automatizado de construção e implantação"],
        ["deploy", "Publicação de uma aplicação em produção"],
        ["rollout", "Implantação gradual de uma nova versão"],
        ["ambiente", "Configuração onde o software é executado"],
        ["variável de ambiente", "Configuração externa ao código da aplicação"],
        ["infraestrutura como código", "Gestão de infraestrutura por arquivos de configuração"],
        ["Terraform", "Ferramenta de infraestrutura como código"],
        ["Ansible", "Ferramenta de automação de configuração"],
        ["monitoramento", "Acompanhamento de métricas de um sistema"],
        ["alerta", "Notificação de anomalia em sistema monitorado"],
        ["observabilidade", "Capacidade de entender o estado interno do sistema"],
        ["rastreamento", "Seguir o caminho de uma requisição no sistema"],
        ["métrica", "Dado numérico que mede aspecto do sistema"],
        ["dashboard", "Painel visual com métricas do sistema"],
        ["protocolo", "Conjunto de regras para comunicação entre sistemas"],
        ["HTTP", "Protocolo de transferência de hipertexto"],
        ["TCP", "Protocolo de controle de transmissão confiável"],
        ["UDP", "Protocolo de transmissão rápida sem garantia"],
        ["IP", "Protocolo de endereçamento na internet"],
        ["DNS", "Sistema que traduz domínios em endereços IP"],
        ["endereço IP", "Identificador numérico de dispositivo na rede"],
        ["roteador", "Dispositivo que direciona tráfego entre redes"],
        ["porta", "Canal lógico de comunicação em rede"],
        ["socket", "Ponto de comunicação bidirecional em rede"],
        ["WebSocket", "Protocolo de comunicação bidirecional em tempo real"],
        ["proxy", "Intermediário entre cliente e servidor"],
        ["CDN", "Rede de distribuição de conteúdo geograficamente"],
        ["HTML", "Linguagem de marcação das páginas web"],
        ["CSS", "Linguagem de estilo visual das páginas web"],
        ["JavaScript", "Linguagem de programação do navegador"],
        ["TypeScript", "JavaScript com tipagem estática"],
        ["Python", "Linguagem interpretada e de alta legibilidade"],
        ["Java", "Linguagem orientada a objetos e portável"],
        ["C", "Linguagem de baixo nível e alta performance"],
        ["C++", "C com orientação a objetos e recursos avançados"],
        ["C#", "Linguagem da Microsoft para plataforma dotnet"],
        ["Go", "Linguagem compilada e concorrente do Google"],
        ["Rust", "Linguagem segura de memória e alta performance"],
        ["Swift", "Linguagem da Apple para iOS e macOS"],
        ["Kotlin", "Linguagem moderna para Android e JVM"],
        ["PHP", "Linguagem amplamente usada no desenvolvimento web"],
        ["Ruby", "Linguagem elegante focada na felicidade do desenvolvedor"],
        ["Scala", "Linguagem funcional e orientada a objetos na JVM"],
        ["Haskell", "Linguagem puramente funcional e fortemente tipada"],
        ["R", "Linguagem estatística para análise de dados"],
        ["MATLAB", "Ambiente de computação numérica e científica"],
        ["Assembly", "Linguagem de baixíssimo nível próxima ao processador"],
        ["framework", "Conjunto de ferramentas para acelerar o desenvolvimento"],
        ["biblioteca", "Conjunto de funções reutilizáveis para o código"],
        ["React", "Biblioteca JavaScript para interfaces de usuário"],
        ["Angular", "Framework JavaScript para aplicações web"],
        ["Vue", "Framework JavaScript progressivo para web"],
        ["Node.js", "Ambiente para executar JavaScript no servidor"],
        ["Django", "Framework web em Python com baterias inclusas"],
        ["Flask", "Micro framework web minimalista em Python"],
        ["Spring", "Framework Java para aplicações empresariais"],
        ["Laravel", "Framework PHP elegante para web"],
        ["Rails", "Framework Ruby para desenvolvimento ágil de web"],
        ["Express", "Framework minimalista web para Node.js"],
        ["machine learning", "Aprendizado de máquina por exemplos"],
        ["rede neural", "Modelo computacional inspirado no cérebro"],
        ["deep learning", "Aprendizado por múltiplas camadas neurais"],
        ["treinamento", "Processo de ajuste de parâmetros do modelo"],
        ["dataset", "Conjunto de dados usado para treinar modelo"],
        ["overfitting", "Modelo que memoriza dados mas não generaliza"],
        ["underfitting", "Modelo muito simples que não captura padrões"],
        ["validação", "Avaliação do modelo em dados não vistos"],
        ["acurácia", "Proporção de previsões corretas do modelo"],
        ["precisão", "Taxa de verdadeiros positivos entre os positivos previstos"],
        ["recall", "Taxa de verdadeiros positivos entre os reais positivos"],
        ["embedding", "Representação vetorial densa de dados"],
        ["transformer", "Arquitetura de rede neural para processamento de texto"],
        ["LLM", "Modelo de linguagem de grande escala"],
        ["prompt", "Instrução fornecida a um modelo de linguagem"],
        ["tokenização", "Divisão de texto em unidades para o modelo"],
        ["inferência", "Uso de modelo treinado para gerar previsões"],
        ["GPU", "Processador especializado para cálculos paralelos"],
        ["TPU", "Processador especializado para redes neurais"],
        ["ETL", "Processo de extração, transformação e carga de dados"],
        ["data warehouse", "Repositório central de dados históricos"],
        ["data lake", "Armazenamento bruto de dados em escala"],
        ["pipeline de dados", "Fluxo automatizado de processamento de dados"],
        ["streaming de dados", "Processamento de dados em tempo real"],
        ["Spark", "Framework para processamento de dados em larga escala"],
        ["Hadoop", "Ecossistema para processamento distribuído de dados"],
        ["blockchain", "Registro distribuído e imutável de transações"],
        ["criptografia assimétrica", "Par de chaves pública e privada para segurança"],
        ["chave pública", "Chave compartilhada para cifrar mensagens"],
        ["chave privada", "Chave secreta para decifrar mensagens"],
        ["assinatura digital", "Mecanismo de autenticidade de documentos digitais"],
        ["NFT", "Token não fungível que representa ativo digital único"],
        ["smart contract", "Contrato autoexecutável em blockchain"],
        ["Internet das Coisas", "Objetos físicos conectados à internet"],
        ["MQTT", "Protocolo leve de mensagens para dispositivos IoT"],
        ["edge computing", "Processamento de dados próximo à fonte"],
        ["computação quântica", "Computação baseada em princípios da mecânica quântica"],
        ["qubit", "Unidade básica de informação quântica"],
        ["superposição", "Estado quântico de ser zero e um simultaneamente"],
        ["entrelaçamento", "Correlação quântica entre partículas distantes"],
        ["acessibilidade", "Design inclusivo para pessoas com deficiência"],
        ["responsividade", "Adaptação do layout a diferentes tamanhos de tela"],
        ["UX", "Experiência do usuário com um produto digital"],
        ["UI", "Interface visual com que o usuário interage"],
        ["prototipagem", "Criação de versão inicial para teste de produto"],
        ["wireframe", "Esboço estrutural de uma interface"],
        ["design system", "Conjunto padronizado de componentes visuais"],
        ["dark mode", "Tema visual com fundo escuro"],
        ["PWA", "Aplicação web com comportamento de app nativo"],
        ["SEO", "Otimização para aparecer em buscadores"],
        ["WebAssembly", "Código de alto desempenho executável no navegador"],
        ["regex", "Padrão de texto para busca e validação"],
        ["lint", "Ferramenta que analisa código em busca de erros"],
        ["formatter", "Ferramenta que padroniza o estilo do código"],
        ["documentação", "Descrição do funcionamento de um sistema"],
        ["README", "Arquivo de apresentação de um projeto"],
        ["licença", "Termos legais de uso de um software"],
        ["open source", "Software com código aberto e livre"],
        ["fork", "Cópia de repositório para desenvolvimento independente"],
        ["contribuição", "Envio de melhoria a projeto de código aberto"],
        ["issue", "Registro de problema ou tarefa em um projeto"],
        ["scrum", "Metodologia ágil com sprints e papéis definidos"],
        ["kanban", "Método visual de gestão de fluxo de trabalho"],
        ["sprint", "Ciclo curto de desenvolvimento no scrum"],
        ["backlog", "Lista priorizada de tarefas a desenvolver"],
        ["retrospectiva", "Reunião para avaliar o processo ao final do sprint"],
        ["DevOps", "Cultura de integração entre desenvolvimento e operações"],
        ["SRE", "Engenharia de confiabilidade de site"],
        ["incidente", "Evento que causa degradação do serviço"],
        ["postmortem", "Análise de causa raiz após um incidente"],
        ["SLA", "Acordo de nível de serviço com garantias de uptime"],
        ["uptime", "Tempo em que o sistema fica disponível"],
        ["redundância", "Duplicação de componentes para evitar falha"],
        ["backup", "Cópia de segurança dos dados"],
        ["recuperação de desastres", "Plano para restaurar sistema após falha grave"],
        ["licenciamento", "Forma de distribuição e uso de software"],
        ["compilação", "Transformação de código-fonte em executável"],
        ["linkagem", "Combinação de módulos compilados em executável"],
        ["makefile", "Arquivo de instruções para compilar um projeto"],
        ["IDE", "Ambiente integrado de desenvolvimento de software"],
        ["editor de código", "Ferramenta leve para escrever código"],
        ["terminal", "Interface de linha de comando do sistema"],
        ["shell", "Interpretador de comandos do sistema operacional"],
        ["bash", "Shell padrão em sistemas Unix e Linux"],
        ["SSH", "Protocolo seguro de acesso remoto a servidores"],
        ["cron", "Agendador de tarefas em sistemas Unix"],
        ["systemd", "Sistema de inicialização e gestão de serviços Linux"],
        ["kernel", "Núcleo do sistema operacional"],
        ["processo", "Programa em execução no sistema operacional"],
        ["thread", "Unidade de execução dentro de um processo"],
        ["concorrência", "Múltiplas tarefas progredindo ao mesmo tempo"],
        ["paralelismo", "Múltiplas tarefas executando simultaneamente"],
        ["mutex", "Mecanismo para evitar acesso concorrente a recurso"],
        ["deadlock", "Situação onde processos se bloqueiam mutuamente"],
        ["race condition", "Erro causado por ordem imprevisível de execução"],
        ["sistema operacional", "Software que gerencia hardware e processos"],
        ["virtualização", "Criação de recursos computacionais virtuais"],
        ["hypervisor", "Software que gerencia máquinas virtuais"],
        ["máquina virtual", "Ambiente computacional simulado em software"]
    ];
    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}

/* 
------------------------------------------------------------------------------------------
CATEGORIA DE CIBERSEGURANÇA
------------------------------------------------------------------------------------------
*/

function ciberseguranca() {

    // banco de palavras


    let palavras_dicas = [
        ["firewall", "Barreira que protege redes"],
        ["malware", "Software criado para causar dano"],
        ["phishing", "Golpe que imita fontes confiáveis"],
        ["senha", "Chave de acesso a sistemas"],
        ["criptografia", "Técnica de codificar informações"],
        ["vírus", "Programa que se replica e infecta"],
        ["ransomware", "Sequestro digital de dados"],
        ["hacker", "Especialista em sistemas e redes"],
        ["trojan", "Ameaça disfarçada de programa útil"],
        ["spyware", "Espião invisível no seu dispositivo"],
        ["antivírus", "Guardião contra códigos maliciosos"],
        ["backdoor", "Entrada secreta em um sistema"],
        ["botnet", "Rede de máquinas controladas remotamente"],
        ["exploit", "Código que aproveita uma falha"],
        ["vulnerabilidade", "Fraqueza em um sistema digital"],
        ["patch", "Atualização que corrige falhas"],
        ["autenticação", "Processo de verificar identidade"],
        ["autorização", "Permissão para acessar recursos"],
        ["certificado", "Documento digital de confiança"],
        ["token", "Objeto físico ou digital de acesso"],
        ["vpn", "Túnel seguro pela internet"],
        ["proxy", "Intermediário entre usuário e rede"],
        ["protocolo", "Conjunto de regras de comunicação"],
        ["ciberataque", "Ação maliciosa em sistemas digitais"],
        ["intrusão", "Acesso não autorizado a sistemas"],
        ["monitoramento", "Vigilância contínua de atividades"],
        ["log", "Registro de eventos do sistema"],
        ["auditoria", "Revisão de registros de segurança"],
        ["incidente", "Evento que compromete a segurança"],
        ["resposta", "Ação diante de uma ameaça detectada"],
        ["defesa", "Proteção ativa de sistemas"],
        ["ataque", "Tentativa de comprometer um sistema"],
        ["vetor", "Caminho usado pelo atacante"],
        ["payload", "Carga maliciosa de um ataque"],
        ["engenharia", "Arte de manipular pessoas digitalmente"],
        ["spoofing", "Falsificação de identidade digital"],
        ["sniffing", "Captura de dados em trânsito"],
        ["keylogger", "Registrador secreto de teclas digitadas"],
        ["rootkit", "Kit de ocultação profunda no sistema"],
        ["worm", "Praga que se propaga sozinha pela rede"],
        ["adware", "Software que exibe anúncios indesejados"],
        ["zero-day", "Falha ainda desconhecida pelo fabricante"],
        ["sandbox", "Ambiente isolado para testes seguros"],
        ["ciberdefesa", "Proteção nacional do espaço digital"],
        ["espionagem", "Coleta clandestina de informações"],
        ["vazamento", "Exposição não autorizada de dados"],
        ["privacidade", "Direito de controlar seus próprios dados"],
        ["compliance", "Conformidade com normas de segurança"],
        ["política", "Regras formais de uso de sistemas"],
        ["risco", "Probabilidade de um dano ocorrer"],
        ["ameaça", "Potencial de causar dano a sistemas"],
        ["impacto", "Consequência de um incidente de segurança"],
        ["controle", "Medida que reduz riscos digitais"],
        ["mitigação", "Redução do impacto de um ataque"],
        ["criptoanálise", "Arte de quebrar códigos cifrados"],
        ["hash", "Impressão digital de um arquivo"],
        ["assinatura", "Prova de autoria de um documento digital"],
        ["biometria", "Identificação por características físicas"],
        ["fingerprint", "Impressão digital de dispositivo ou software"],
        ["dns", "Sistema que traduz nomes em endereços"],
        ["ddos", "Ataque que sobrecarrega servidores com tráfego"],
        ["ip", "Endereço único de cada dispositivo na rede"],
        ["porta", "Canal de comunicação em um sistema"],
        ["sessão", "Período ativo de conexão entre sistemas"],
        ["cookie", "Pequeno arquivo de rastreamento no navegador"],
        ["xss", "Injeção de scripts maliciosos em sites"],
        ["sqli", "Manipulação de banco de dados via comandos"],
        ["csrf", "Ação forçada em nome de outro usuário"],
        ["idor", "Acesso indevido a objetos por referência direta"],
        ["buffer", "Área de memória usada para dados temporários"],
        ["overflow", "Transbordamento intencional de memória"],
        ["shellcode", "Código usado para obter controle do sistema"],
        ["privilege", "Nível de permissão em um sistema"],
        ["escalonamento", "Ganho indevido de privilégios no sistema"],
        ["pentest", "Teste controlado de invasão a sistemas"],
        ["redteam", "Equipe que simula ataques reais"],
        ["blueteam", "Equipe que defende sistemas em ataques"],
        ["purpleteam", "Equipe que une ataque e defesa"],
        ["soc", "Centro de operações de segurança"],
        ["siem", "Sistema de gerenciamento de eventos de segurança"],
        ["ids", "Sistema que detecta intrusões na rede"],
        ["ips", "Sistema que previne intrusões automaticamente"],
        ["edr", "Detecção e resposta em endpoints"],
        ["mfa", "Múltiplos fatores de verificação de identidade"],
        ["otp", "Senha válida por apenas um uso"],
        ["oauth", "Protocolo de autorização entre serviços"],
        ["saml", "Padrão de troca de dados de autenticação"],
        ["ldap", "Protocolo de diretório de usuários"],
        ["active-directory", "Gerenciador central de identidades Windows"],
        ["iam", "Gestão de identidades e acessos"],
        ["pam", "Gerenciamento de acessos privilegiados"],
        ["zero-trust", "Modelo que nunca confia, sempre verifica"],
        ["microsegmentação", "Divisão granular da rede em zonas"],
        ["criptografia-ponta", "Proteção de dados entre remetente e destinatário"],
        ["chave", "Dado secreto usado em criptografia"],
        ["rsa", "Algoritmo de criptografia assimétrica"],
        ["aes", "Padrão avançado de criptografia simétrica"],
        ["ecdsa", "Assinatura digital baseada em curvas elípticas"],
        ["tls", "Protocolo que garante comunicação segura"],
        ["ssl", "Predecessor do protocolo de segurança atual"],
        ["https", "HTTP com camada de segurança ativa"],
        ["pki", "Infraestrutura de chaves públicas"],
        ["ca", "Autoridade que emite certificados digitais"],
        ["crl", "Lista de certificados digitais revogados"],
        ["ocsp", "Verificação em tempo real de certificado"],
        ["esteganografia", "Esconde dados dentro de outros dados"],
        ["watermark", "Marca invisível em conteúdo digital"],
        ["forense", "Análise de evidências digitais de crimes"],
        ["cadeia-custódia", "Registro rigoroso de evidências digitais"],
        ["metadados", "Dados ocultos que descrevem outros dados"],
        ["nist", "Instituto americano de padrões tecnológicos"],
        ["iso27001", "Norma internacional de gestão de segurança"],
        ["gdpr", "Regulamento europeu de proteção de dados"],
        ["lgpd", "Lei brasileira de proteção de dados pessoais"],
        ["hipaa", "Lei americana de proteção de dados de saúde"],
        ["pci-dss", "Padrão de segurança para dados de cartão"],
        ["framework", "Estrutura de referência para segurança"],
        ["mitre", "Repositório de táticas de ataque reais"],
        ["kill-chain", "Sequência das etapas de um ataque"],
        ["apt", "Ameaça persistente avançada e direcionada"],
        ["ioc", "Indicador que evidencia um comprometimento"],
        ["ttps", "Táticas, técnicas e procedimentos de atacantes"],
        ["threat-intel", "Inteligência sobre ameaças digitais"],
        ["osint", "Inteligência obtida de fontes abertas"],
        ["darkweb", "Parte oculta da internet inacessível normalmente"],
        ["tor", "Rede de anonimização de tráfego"],
        ["criptominer", "Malware que usa seu hardware para minerar"],
        ["evasão", "Técnica de escapar da detecção"],
        ["ofuscação", "Técnica de disfarçar código malicioso"],
        ["polimorfismo", "Malware que muda sua aparência constantemente"],
        ["metamorfismo", "Malware que reescreve completamente seu código"],
        ["lateral-movement", "Movimentação silenciosa dentro da rede comprometida"],
        ["exfiltração", "Roubo silencioso de dados de um sistema"],
        ["persistência", "Capacidade de manter acesso mesmo após reinício"],
        ["c2", "Servidor de comando e controle de malware"],
        ["beaconing", "Comunicação periódica de malware com servidor"],
        ["proxy-reverso", "Intermediário que protege servidores internos"],
        ["honeypot", "Armadilha digital para atrair atacantes"],
        ["honeynet", "Rede falsa criada para enganar invasores"],
        ["deception", "Tecnologia que cria isca para enganar atacantes"],
        ["canário", "Arquivo ou dado que alerta sobre invasão"],
        ["segmentação", "Divisão da rede em zonas isoladas"],
        ["dmz", "Zona neutra entre rede interna e internet"],
        ["nat", "Tradução de endereços de rede"],
        ["acl", "Lista que controla o acesso a recursos"],
        ["rbac", "Controle de acesso baseado em funções"],
        ["abac", "Controle de acesso baseado em atributos"],
        ["mac", "Controle de acesso obrigatório pelo sistema"],
        ["dac", "Controle de acesso definido pelo proprietário"],
        ["cve", "Identificador único de vulnerabilidade conhecida"],
        ["cvss", "Pontuação de severidade de vulnerabilidades"],
        ["nvd", "Banco nacional de vulnerabilidades dos EUA"],
        ["cwe", "Enumeração de fraquezas em software"],
        ["owasp", "Guia de segurança para aplicações web"],
        ["threat-modeling", "Análise antecipada de possíveis ameaças"],
        ["stride", "Método de modelagem de ameaças"],
        ["dread", "Modelo de pontuação de risco de ameaça"],
        ["pasta", "Metodologia de análise de ataque e defesa"],
        ["ciclo-pdca", "Melhoria contínua em segurança da informação"],
        ["bcdr", "Plano de continuidade e recuperação de negócios"],
        ["rpo", "Ponto máximo tolerável de perda de dados"],
        ["rto", "Tempo máximo para restaurar sistemas críticos"],
        ["backup", "Cópia de segurança de dados importantes"],
        ["redundância", "Duplicação de sistemas para garantir disponibilidade"],
        ["disponibilidade", "Garantia de acesso contínuo aos sistemas"],
        ["integridade", "Garantia de que dados não foram alterados"],
        ["confidencialidade", "Proteção de dados contra acesso não autorizado"],
        ["tríade-cia", "Pilares fundamentais: confidencialidade, integridade e disponibilidade"],
        ["não-repúdio", "Impossibilidade de negar uma ação realizada"],
        ["autenticidade", "Garantia de que a fonte é legítima"],
        ["responsabilidade", "Rastreabilidade de ações em um sistema"],
        ["auditabilidade", "Capacidade de revisar todas as ações realizadas"],
        ["segregação", "Separação de funções para reduzir risco"],
        ["menor-privilégio", "Conceder apenas o acesso estritamente necessário"],
        ["defesa-profundidade", "Múltiplas camadas sobrepostas de segurança"],
        ["hardening", "Fortalecimento da configuração de sistemas"],
        ["baseline", "Configuração mínima segura de referência"],
        ["benchmarking", "Comparação com padrões de segurança estabelecidos"],
        ["cis", "Centro de controles de segurança da internet"],
        ["scap", "Protocolo de automação de conformidade"],
        ["stig", "Guia técnico de implementação segura"],
        ["supply-chain", "Cadeia de fornecimento de software e hardware"],
        ["dependência", "Biblioteca externa usada por um software"],
        ["sbom", "Lista de componentes de um software"],
        ["código-aberto", "Software com código fonte disponível publicamente"],
        ["revisão-código", "Análise manual de código em busca de falhas"],
        ["análise-estática", "Verificação de código sem executá-lo"],
        ["análise-dinâmica", "Verificação de código durante sua execução"],
        ["fuzzing", "Envio de dados aleatórios para encontrar falhas"],
        ["devsecops", "Integração de segurança no ciclo de desenvolvimento"],
        ["ssdlc", "Ciclo de desenvolvimento seguro de software"],
        ["threat-hunting", "Busca proativa de ameaças ocultas na rede"],
        ["ir", "Plano de ação para responder a incidentes"],
        ["triage", "Classificação e priorização de incidentes"],
        ["contenção", "Ação para impedir a propagação de um ataque"],
        ["erradicação", "Remoção completa da ameaça do ambiente"],
        ["recuperação", "Restauração dos sistemas ao estado normal"],
        ["lições-aprendidas", "Revisão pós-incidente para melhorar defesas"],
        ["cibersegurança", "Proteção de sistemas e dados no ambiente digital"],
        ["segurança-informação", "Proteção abrangente de ativos de informação"],
        ["segurança-operacional", "Proteção das operações e processos de TI"],
        ["cloud", "Computação e armazenamento em nuvem remota"],
        ["saas", "Software entregue como serviço via internet"],
        ["iaas", "Infraestrutura fornecida como serviço na nuvem"],
        ["paas", "Plataforma de desenvolvimento disponível na nuvem"],
        ["misconfiguration", "Configuração incorreta que gera vulnerabilidade"],
        ["cspm", "Gestão de postura de segurança em nuvem"],
        ["cwpp", "Proteção de cargas de trabalho em nuvem"],
        ["casb", "Intermediário de segurança para serviços de nuvem"],
        ["container", "Unidade isolada de execução de aplicação"],
        ["docker", "Plataforma popular de criação de containers"],
        ["kubernetes", "Orquestrador de containers em larga escala"],
        ["imagem", "Template de um ambiente de container"],
        ["runtime", "Proteção durante a execução de containers"],
        ["namespace", "Isolamento lógico dentro de um cluster"],
        ["api", "Interface de comunicação entre sistemas"],
        ["api-gateway", "Ponto central de entrada e controle de APIs"],
        ["jwt", "Token compacto para autenticação segura"],
        ["injeção", "Inserção de comandos maliciosos em entradas"],
        ["deserialização", "Exploração de dados ao converter objetos"],
        ["ssrf", "Forçar servidor a fazer requisições internas"],
        ["lfi", "Inclusão de arquivos locais via vulnerabilidade"],
        ["rfi", "Inclusão de arquivos remotos via vulnerabilidade"],
        ["rce", "Execução de código no servidor da vítima"],
        ["xxe", "Exploração de entidades externas em XML"],
        ["open-redirect", "Redirecionamento malicioso via URL legítima"],
        ["clickjacking", "Enganar cliques em elementos invisíveis"],
        ["formjacking", "Roubo de dados em formulários web"],
        ["magecart", "Ataque que rouba dados de cartões em sites"],
        ["watering-hole", "Ataque em site frequentado pela vítima"],
        ["drive-by", "Infecção silenciosa ao visitar um site"],
        ["typosquatting", "Domínio falso com erro de digitação comum"],
        ["homograph", "Domínio com caracteres visualmente idênticos"],
        ["pharming", "Redirecionamento do tráfego para site falso"],
        ["vishing", "Phishing realizado por chamadas de voz"],
        ["smishing", "Phishing enviado por mensagens SMS"],
        ["sim-swap", "Roubo de número de telefone por fraude"],
        ["impostora", "Fraude se passando por pessoa de confiança"],
        ["baiting", "Isca física ou digital para infecção"],
        ["pretexting", "Criação de cenário falso para enganar vítima"],
        ["tailgating", "Acesso físico seguindo pessoa autorizada"],
        ["dumpster-diving", "Busca de informações em lixo descartado"],
        ["insider", "Ameaça originada por alguém de dentro"],
        ["sabotagem", "Dano intencional a sistemas ou dados"],
        ["fraude", "Ação enganosa para obter vantagem ilícita"],
        ["brute-force", "Tentativa exaustiva de adivinhar senhas"],
        ["dicionário", "Ataque usando lista de senhas comuns"],
        ["rainbow-table", "Tabela pré-calculada de hashes para senhas"],
        ["salting", "Adição de dados aleatórios ao hash de senha"],
        ["credential-stuffing", "Uso de credenciais vazadas em outros sites"],
        ["pass-the-hash", "Reutilização de hash de senha sem decifrar"],
        ["golden-ticket", "Forjamento de credencial Kerberos mestre"],
        ["silver-ticket", "Forjamento de credencial para serviço específico"],
        ["kerberoasting", "Ataque offline contra tickets Kerberos"],
        ["mimikatz", "Ferramenta de extração de credenciais da memória"],
        ["bloodhound", "Mapeamento visual de permissões em domínios"],
        ["empire", "Framework de pós-exploração em redes Windows"],
        ["cobalt-strike", "Plataforma de simulação de ataques avançados"],
        ["metasploit", "Framework open source para testes de invasão"],
        ["nmap", "Ferramenta de mapeamento de redes e portas"],
        ["wireshark", "Analisador de tráfego de rede em tempo real"],
        ["burpsuite", "Plataforma para testes de segurança web"],
        ["nikto", "Scanner de vulnerabilidades em servidores web"],
        ["sqlmap", "Ferramenta automática de testes de injeção SQL"],
        ["aircrack", "Suite para auditoria de redes sem fio"],
        ["hashcat", "Ferramenta de recuperação de senhas por hash"],
        ["john", "Cracker de senhas de código aberto clássico"],
        ["kali", "Distribuição Linux focada em segurança ofensiva"],
        ["parrot", "Sistema operacional para segurança e privacidade"],
        ["volatility", "Framework de análise forense de memória RAM"],
        ["autopsy", "Plataforma de investigação forense digital"],
        ["yara", "Linguagem para identificar e classificar malware"],
        ["snort", "Sistema de detecção de intrusão de rede"],
        ["suricata", "Motor moderno de análise de tráfego de rede"],
        ["zeek", "Plataforma de monitoramento e análise de rede"],
        ["ossec", "Sistema de detecção de intrusão baseado em host"],
        ["wazuh", "Plataforma open source de detecção de ameaças"],
        ["splunk", "Plataforma de análise e correlação de logs"],
        ["elastic", "Pilha de busca e análise de dados de segurança"],
        ["graylog", "Gerenciador centralizado de logs de sistemas"],
        ["threat-feed", "Fonte de dados sobre ameaças atuais"],
        ["stix", "Formato padrão para compartilhar inteligência de ameaças"],
        ["taxii", "Protocolo de troca de inteligência de ameaças"],
        ["isac", "Centro de compartilhamento de informações setoriais"],
        ["cibercrime", "Crime praticado no ambiente digital"],
        ["ciberespionagem", "Espionagem conduzida por meios digitais"],
        ["ciberterrorismo", "Uso de ataques digitais para fins terroristas"],
        ["guerra-cibernética", "Conflito entre nações no espaço digital"],
        ["hacktivismo", "Ativismo político realizado por ataques digitais"],
        ["bug-bounty", "Programa de recompensa por descoberta de falhas"],
        ["divulgação-responsável", "Reporte ético de vulnerabilidades ao fabricante"],
        ["ética-hacker", "Código de conduta dos profissionais de segurança"],
        ["certificação", "Credencial profissional em cibersegurança"],
        ["cissp", "Certificação avançada em segurança da informação"],
        ["ceh", "Certificação de hacker ético profissional"],
        ["oscp", "Certificação prática de teste de invasão"],
        ["comptia", "Organizadora de certificações de TI e segurança"],
        ["gdpr-artigo", "Direito de apagamento de dados pessoais"],
        ["encarregado", "Responsável pela proteção de dados na empresa"],
        ["dpia", "Avaliação de impacto à proteção de dados"],
        ["consentimento", "Permissão consciente para uso de dados pessoais"],
        ["minimização", "Coletar apenas dados estritamente necessários"],
        ["pseudonimização", "Substituir dados pessoais por identificadores"],
        ["anonimização", "Remover toda identificação de dados pessoais"],
        ["portabilidade", "Direito de transferir seus dados entre serviços"],
        ["breach-notification", "Obrigação de notificar vazamento de dados"],
        ["penalidade", "Multa por descumprimento de norma de privacidade"],
        ["nis2", "Diretiva europeia de segurança de redes e informação"],
        ["dora", "Regulação europeia de resiliência digital no setor financeiro"],
        ["cyberinsurance", "Seguro contra danos causados por ataques digitais"],
        ["resiliência", "Capacidade de se recuperar de ataques rapidamente"],
        ["ciberhigiene", "Práticas diárias que mantêm sistemas seguros"],
        ["treinamento", "Capacitação para reconhecer e evitar ameaças"],
        ["conscientização", "Programa de educação em segurança digital"],
        ["simulação-phishing", "Teste controlado de resistência a phishing"],
        ["tabletop", "Exercício simulado de resposta a incidentes"],
        ["red-team-op", "Operação que simula ataque real a organização"],
        ["purple-teaming", "Colaboração entre atacantes e defensores simulados"],
        ["continuous-validation", "Validação contínua das defesas de segurança"],
        ["bás", "Automação de simulações de ataques e violações"],
        ["ttx", "Exercício de mesa para testar planos de resposta"],
        ["criptomoeda", "Moeda digital baseada em criptografia"],
        ["blockchain", "Registro distribuído e imutável de transações"],
        ["nft", "Ativo digital único registrado em blockchain"],
        ["wallet", "Carteira digital para criptomoedas"],
        ["exchange", "Plataforma de troca de criptomoedas"],
        ["rug-pull", "Fraude onde criadores abandonam projeto repentinamente"],
        ["pump-and-dump", "Esquema de valorização artificial para venda fraudulenta"],
        ["flash-loan", "Empréstimo instantâneo explorado em ataques DeFi"],
        ["smart-contract", "Contrato autoexecutável em blockchain"],
        ["defi", "Finanças descentralizadas baseadas em blockchain"],
        ["iot", "Dispositivos cotidianos conectados à internet"],
        ["scada", "Sistema de controle industrial computadorizado"],
        ["ics", "Sistemas de controle de infraestrutura crítica"],
        ["ot", "Tecnologia operacional de sistemas industriais"],
        ["plc", "Controlador lógico programável industrial"],
        ["hmi", "Interface humana com sistema de controle industrial"],
        ["protocolo-industrial", "Padrão de comunicação em ambientes industriais"],
        ["firmware", "Software embutido em dispositivos de hardware"],
        ["hardware-security", "Proteção implementada diretamente no hardware"],
        ["tpm", "Módulo de plataforma confiável para segurança de hardware"],
        ["secure-boot", "Inicialização verificada e protegida do sistema"],
        ["hsm", "Módulo de segurança de hardware para chaves"],
        ["side-channel", "Ataque baseado em informação física vazada"],
        ["timing-attack", "Ataque que explora variações de tempo de resposta"],
        ["fault-injection", "Indução deliberada de erros em hardware"],
        ["power-analysis", "Análise do consumo elétrico para extrair segredos"],
        ["eavesdropping", "Interceptação passiva de comunicações"],
        ["mitm", "Intermediário que intercepta comunicações entre partes"],
        ["arp-spoofing", "Falsificação de tabela de resolução de endereços"],
        ["dns-poisoning", "Corrupção do cache de resolução de nomes"],
        ["bgp-hijacking", "Sequestro de rotas de tráfego na internet"],
        ["rogue-ap", "Ponto de acesso Wi-Fi falso e malicioso"],
        ["evil-twin", "Rede Wi-Fi falsa que imita uma legítima"],
        ["deauth", "Ataque de desautenticação em redes sem fio"],
        ["wpa3", "Protocolo mais recente de segurança Wi-Fi"],
        ["radius", "Protocolo de autenticação para acesso à rede"],
        ["802.1x", "Controle de acesso à rede por autenticação"],
        ["nac", "Controle de acesso baseado em saúde do dispositivo"],
        ["endpoint", "Dispositivo final conectado à rede corporativa"],
        ["epdr", "Detecção, proteção e resposta em endpoints"],
        ["xdr", "Detecção e resposta estendida em múltiplas camadas"],
        ["mdr", "Serviço gerenciado de detecção e resposta"],
        ["mssp", "Provedor gerenciado de serviços de segurança"],
        ["sase", "Borda de serviço de acesso seguro na nuvem"],
        ["sse", "Borda de serviço de segurança integrada"],
        ["ztna", "Acesso à rede baseado em zero confiança"],
        ["sd-wan", "Rede de longa distância definida por software"],
        ["cgi", "Interface de programação web legada vulnerável"],
        ["cors", "Política de compartilhamento entre origens diferentes"],
        ["csp", "Política de segurança de conteúdo de navegadores"],
        ["hsts", "Forçar uso exclusivo de HTTPS no site"],
        ["subresource-integrity", "Verificação de integridade de recursos externos"],
        ["certificate-pinning", "Fixação de certificado para evitar substituição"],
        ["certificate-transparency", "Registro público e auditável de certificados emitidos"],
        ["ocsp-stapling", "Verificação embutida de validade do certificado"],
        ["ct-log", "Registro de transparência de certificados digitais"],
        ["quantum", "Computação que ameaça criptografia atual"],
        ["pqc", "Criptografia resistente a computadores quânticos"],
        ["lattice", "Base matemática de algoritmos pós-quânticos"],
        ["kyber", "Algoritmo de encapsulamento de chave pós-quântico"],
        ["dilithium", "Algoritmo de assinatura digital pós-quântico"],
        ["falcon", "Algoritmo de assinatura baseado em reticulados"],
        ["homomorphic", "Criptografia que permite calcular dados cifrados"],
        ["mpc", "Computação segura com múltiplas partes"],
        ["smc", "Protocolo de cálculo sem revelar dados privados"],
        ["zkproof", "Prova de conhecimento sem revelar a informação"],
        ["criptografia-limiar", "Divisão de chave entre múltiplos guardiões"],
        ["shamir", "Esquema de compartilhamento de segredo entre partes"],
        ["dh", "Protocolo de troca segura de chaves pela rede"],
        ["ecdh", "Troca de chaves com curvas elípticas"],
        ["forward-secrecy", "Proteção de sessões passadas mesmo se chave vazar"],
        ["ephemeral", "Chave temporária gerada por sessão única"],
        ["saltear", "Adicionar dado aleatório antes de calcular hash"],
        ["bcrypt", "Função de hash lenta e segura para senhas"],
        ["argon2", "Algoritmo moderno vencedor de concurso de hashing"],
        ["pbkdf2", "Derivação de chave a partir de senha com sal"],
        ["scrypt", "Função de hash resistente a ataques de hardware"],
        ["hmac", "Código de autenticação de mensagem com hash"],
        ["cmac", "Código de autenticação de mensagem com cifra"],
        ["gcm", "Modo de cifragem com autenticação integrada"],
        ["chacha20", "Cifra de fluxo moderna e rápida"],
        ["poly1305", "Autenticador de mensagens de alta velocidade"],
        ["salsa20", "Algoritmo de cifra de fluxo de alto desempenho"],
        ["blowfish", "Cifra de bloco clássica de chave variável"],
        ["3des", "Tripla aplicação do algoritmo DES legado"],
        ["md5", "Algoritmo de hash antigo e inseguro"],
        ["sha1", "Função de hash obsoleta e vulnerável"],
        ["sha256", "Função de hash segura de 256 bits"],
        ["sha3", "Família de hash mais recente do padrão NIST"],
        ["blake2", "Função de hash rápida e segura moderna"],
        ["elliptic-curve", "Matemática base da criptografia moderna eficiente"],
        ["diffie-hellman", "Pioneiro da troca de chaves pela internet"]
    ];

    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}

/* 
------------------------------------------------------------------------------------------
CATEGORIA DE CULTURA POP
------------------------------------------------------------------------------------------
*/

function cultura_pop() {

    // banco de palavras

    let palavras_dicas = [
        ["cinema", "Arte de contar histórias em movimento"],
        ["filme", "Obra audiovisual exibida na tela grande"],
        ["série", "História contada em episódios"],
        ["anime", "Animação de origem japonesa"],
        ["mangá", "Quadrinho de origem japonesa"],
        ["herói", "Personagem que salva o mundo"],
        ["vilão", "Antagonista que ameaça tudo"],
        ["sequel", "Continuação de uma obra de sucesso"],
        ["reboot", "Reinicialização de uma franquia clássica"],
        ["crossover", "Encontro de universos diferentes"],
        ["fandom", "Comunidade apaixonada por uma obra"],
        ["cosplay", "Fantasia de personagens fictícios"],
        ["meme", "Imagem ou frase viral da internet"],
        ["viral", "Conteúdo que se espalha rapidamente"],
        ["trend", "Tendência do momento nas redes"],
        ["hashtag", "Marcador que organiza temas na internet"],
        ["influencer", "Pessoa com grande alcance digital"],
        ["streaming", "Assistir conteúdo sem baixar"],
        ["playlist", "Lista personalizada de músicas"],
        ["podcast", "Programa de áudio sob demanda"],
        ["youtuber", "Criador de conteúdo no YouTube"],
        ["tiktoker", "Criador de vídeos curtos no TikTok"],
        ["selfie", "Foto tirada de si mesmo"],
        ["stories", "Publicação que desaparece em 24 horas"],
        ["reels", "Vídeo curto do Instagram"],
        ["avatar", "Representação visual de um usuário"],
        ["emoji", "Símbolo digital que expressa emoção"],
        ["gif", "Imagem animada em loop"],
        ["unboxing", "Vídeo de abertura de produto"],
        ["review", "Análise crítica de um produto ou obra"],
        ["spoiler", "Revelação antecipada de um enredo"],
        ["cliffhanger", "Final tenso que exige continuação"],
        ["plot-twist", "Reviravolta inesperada na história"],
        ["easter-egg", "Segredo escondido em obras e jogos"],
        ["universo", "Conjunto de obras interligadas"],
        ["saga", "Longa história dividida em partes"],
        ["trilogia", "Obra dividida em três partes"],
        ["franquia", "Série de obras de uma mesma marca"],
        ["remake", "Nova versão de uma obra clássica"],
        ["adaptação", "Obra inspirada em outro formato"],
        ["roteiro", "Texto base de um filme ou série"],
        ["diretor", "Quem dá vida à visão de um filme"],
        ["produtor", "Responsável pelos bastidores de uma obra"],
        ["ator", "Profissional que interpreta personagens"],
        ["atriz", "Profissional feminina que interpreta personagens"],
        ["dublagem", "Tradução falada de um conteúdo"],
        ["legenda", "Texto que traduz o que é dito"],
        ["trilha", "Música que embala uma cena"],
        ["banda-sonora", "Conjunto musical de um filme"],
        ["Oscar", "Prêmio máximo do cinema mundial"],
        ["Grammy", "Premiação máxima da música mundial"],
        ["Emmy", "Maior prêmio da televisão americana"],
        ["cannes", "Festival de cinema mais famoso do mundo"],
        ["estreia", "Primeiro lançamento ao público"],
        ["bilheteria", "Arrecadação de um filme nos cinemas"],
        ["blockbuster", "Filme de enorme sucesso e orçamento"],
        ["cult", "Obra com público fiel e alternativo"],
        ["clássico", "Obra que resistiu ao teste do tempo"],
        ["nostalgia", "Saudade afetiva de algo do passado"],
        ["retro", "Estética inspirada em décadas passadas"],
        ["vintage", "Algo antigo com charme especial"],
        ["pop-art", "Arte inspirada na cultura de massa"],
        ["grunge", "Estilo musical e visual dos anos 90"],
        ["punk", "Movimento de rebeldia cultural"],
        ["rock", "Gênero musical de guitarras e energia"],
        ["metal", "Rock pesado e distorcido"],
        ["jazz", "Música improvisada de origem americana"],
        ["blues", "Gênero musical de alma e melancolia"],
        ["soul", "Música com profunda expressão emocional"],
        ["funk", "Ritmo dançante de origem negra americana"],
        ["rap", "Poesia falada sobre bases rítmicas"],
        ["hip-hop", "Cultura urbana de música e dança"],
        ["sertanejo", "Música popular do interior do Brasil"],
        ["pagode", "Samba animado e popular no Brasil"],
        ["forró", "Ritmo dançante do nordeste brasileiro"],
        ["axé", "Música festiva baiana de carnaval"],
        ["mpb", "Música popular brasileira moderna e variada"],
        ["bossa-nova", "Samba sofisticado dos anos 50 e 60"],
        ["carnaval", "Maior festa popular do Brasil"],
        ["samba", "Ritmo símbolo da identidade brasileira"],
        ["baile-funk", "Festa e ritmo urbano carioca"],
        ["k-pop", "Música pop coreana de alcance global"],
        ["idol", "Artista pop venerado pelos fãs"],
        ["grupo", "Banda formada por vários artistas"],
        ["solista", "Artista que se apresenta sozinho"],
        ["álbum", "Coleção de músicas de um artista"],
        ["single", "Música lançada individualmente"],
        ["clipe", "Vídeo musical de uma canção"],
        ["turnê", "Série de shows em diferentes cidades"],
        ["show", "Apresentação ao vivo de um artista"],
        ["festival", "Evento com vários artistas reunidos"],
        ["cover", "Versão de uma música famosa"],
        ["remix", "Reinterpretação de uma música original"],
        ["sample", "Trecho de música reaproveitado"],
        ["beat", "Base rítmica de uma música"],
        ["letra", "Texto cantado em uma música"],
        ["refrão", "Parte repetida de uma música"],
        ["verso", "Estrofe de uma canção"],
        ["bridge", "Parte de transição em uma música"],
        ["intro", "Abertura instrumental de uma música"],
        ["outro", "Final de uma composição musical"],
        ["acústico", "Versão sem amplificação elétrica"],
        ["ao-vivo", "Gravação feita durante apresentação real"],
        ["estúdio", "Ambiente profissional de gravação"],
        ["produção", "Processo de criar e gravar uma música"],
        ["DJ", "Artista que mistura músicas ao vivo"],
        ["beat-maker", "Criador de bases musicais digitais"],
        ["videogame", "Entretenimento eletrônico interativo"],
        ["console", "Aparelho dedicado a jogos eletrônicos"],
        ["gameplay", "Forma como um jogo é jogado"],
        ["speedrun", "Completar um jogo no menor tempo"],
        ["gamer", "Entusiasta de jogos eletrônicos"],
        ["esports", "Competições profissionais de videogame"],
        ["streamer", "Quem transmite jogos ao vivo online"],
        ["twitch", "Plataforma líder de streaming de jogos"],
        ["mod", "Modificação feita por fãs em um jogo"],
        ["DLC", "Conteúdo adicional pago de um jogo"],
        ["patch", "Atualização que corrige ou melhora jogos"],
        ["boss", "Inimigo poderoso no fim de uma fase"],
        ["quest", "Missão a ser cumprida em um jogo"],
        ["level-up", "Evoluir de nível em um jogo"],
        ["respawn", "Renascer após ser eliminado no jogo"],
        ["nerf", "Enfraquecer algo que estava forte demais"],
        ["buff", "Fortalecer algo que estava fraco demais"],
        ["loot", "Recompensa obtida dentro de um jogo"],
        ["skin", "Aparência alternativa de personagem"],
        ["personagem", "Ser fictício de uma obra ou jogo"],
        ["protagonista", "Personagem principal de uma história"],
        ["coadjuvante", "Personagem de suporte na narrativa"],
        ["backstory", "História passada de um personagem"],
        ["arco", "Jornada de desenvolvimento de personagem"],
        ["ship", "Torcer pelo romance entre personagens"],
        ["canon", "Fatos oficiais de uma obra"],
        ["headcanon", "Interpretação pessoal não oficial"],
        ["fanfic", "História escrita por fãs sobre obras"],
        ["fanart", "Arte criada por fãs sobre obras"],
        ["lore", "Universo histórico de uma obra"],
        ["worldbuilding", "Construção detalhada de um mundo fictício"],
        ["distopia", "Sociedade futura opressiva e sombria"],
        ["utopia", "Sociedade ideal e perfeita imaginária"],
        ["ficção", "Narrativa de eventos inventados"],
        ["fantasia", "Gênero com magia e mundos imaginários"],
        ["terror", "Gênero que provoca medo no público"],
        ["suspense", "Gênero que mantém o público tenso"],
        ["comédia", "Gênero que provoca risadas"],
        ["drama", "Gênero de conflitos emocionais profundos"],
        ["romance", "Gênero centrado em histórias de amor"],
        ["ação", "Gênero cheio de perseguições e lutas"],
        ["aventura", "Gênero de jornadas e descobertas"],
        ["thriller", "Gênero de tensão e reviravoltas"],
        ["noir", "Estilo sombrio e pessimista de cinema"],
        ["sci-fi", "Gênero baseado em ciência e tecnologia futura"],
        ["steampunk", "Estética vitoriana com tecnologia a vapor"],
        ["cyberpunk", "Estética futurista de neon e tecnologia"],
        ["superhero", "Personagem com poderes sobre-humanos"],
        ["origem", "História de como um herói surgiu"],
        ["kriptonita", "Fraqueza fatal de um personagem forte"],
        ["alter-ego", "Identidade secreta de um personagem"],
        ["máscara", "Disfarce que protege a identidade"],
        ["capa", "Símbolo icônico de um super-herói"],
        ["poderes", "Habilidades extraordinárias de personagens"],
        ["mutante", "Ser com habilidades geradas por mutação"],
        ["androide", "Robô com aparência humana"],
        ["cyborg", "Ser com partes humanas e mecânicas"],
        ["mago", "Ser que domina forças mágicas"],
        ["guerreiro", "Personagem especialista em combate"],
        ["arqueiro", "Personagem que usa arco e flecha"],
        ["ninja", "Guerreiro furtivo de origem japonesa"],
        ["samurai", "Guerreiro honrado da tradição japonesa"],
        ["pirata", "Aventureiro dos mares e tesouros"],
        ["espadachim", "Lutador especializado em espadas"],
        ["monstro", "Criatura assustadora de uma obra"],
        ["dragão", "Criatura mítica de fogo e escamas"],
        ["vampiro", "Criatura noturna que bebe sangue"],
        ["zumbi", "Morto-vivo que ameaça os vivos"],
        ["alien", "Ser vivo de outro planeta"],
        ["robô", "Máquina criada para executar tarefas"],
        ["inteligência", "Mente artificial em ficção científica"],
        ["viagem-no-tempo", "Deslocamento entre épocas diferentes"],
        ["paralelo", "Universo alternativo ao nosso"],
        ["apocalipse", "Fim devastador do mundo conhecido"],
        ["pós-apocalipse", "Mundo que sobreviveu a uma catástrofe"],
        ["reality-show", "Programa com pessoas reais em situações"],
        ["eliminação", "Saída forçada de participante de programa"],
        ["paredão", "Votação para eliminar participante"],
        ["confessionário", "Espaço privado de desabafo no reality"],
        ["audiência", "Número de pessoas que assistem algo"],
        ["ibope", "Medição de audiência televisiva"],
        ["prime-time", "Horário nobre da programação televisiva"],
        ["novela", "Drama seriado diário muito popular no Brasil"],
        ["protagonista", "Personagem central de uma novela"],
        ["vilã", "Antagonista feminina de uma novela"],
        ["par-romântico", "Casal principal de uma história"],
        ["capítulo", "Episódio diário de uma novela"],
        ["trama", "Enredo paralelo dentro de uma história"],
        ["ator-mirim", "Criança que atua em obras audiovisuais"],
        ["galã", "Ator atraente e sedutor de novelas"],
        ["mocinha", "Protagonista feminina bondosa"],
        ["golpe", "Traição dramática em um enredo"],
        ["reconciliação", "Reencontro amoroso no final da história"],
        ["moda", "Estilo de se vestir de uma época"],
        ["tendência", "O que está em alta no momento"],
        ["estilista", "Criador de peças de moda"],
        ["desfile", "Apresentação de coleção de moda"],
        ["passarela", "Palco dos modelos em um desfile"],
        ["modelo", "Profissional que apresenta roupas"],
        ["marca", "Empresa reconhecida por seu estilo"],
        ["logotipo", "Símbolo visual que identifica uma marca"],
        ["streetwear", "Moda casual e urbana"],
        ["sneaker", "Tênis esportivo de estilo urbano"],
        ["hoodie", "Moletom com capuz popular na cultura urbana"],
        ["acessório", "Complemento de moda como bolsas e bijuterias"],
        ["beleza", "Padrão estético valorizado culturalmente"],
        ["maquiagem", "Arte de realçar a aparência com cosméticos"],
        ["skincare", "Rotina de cuidados com a pele"],
        ["cabelo", "Elemento central da identidade visual"],
        ["tatuagem", "Arte permanente desenhada na pele"],
        ["piercing", "Adorno inserido no corpo"],
        ["bodyart", "Arte que usa o corpo como tela"],
        ["grife", "Marca de luxo com prestígio mundial"],
        ["coleção", "Conjunto de peças de uma temporada"],
        ["sustentável", "Moda consciente com o meio ambiente"],
        ["segunda-mão", "Roupas compradas de outra pessoa"],
        ["brechó", "Loja de roupas usadas e vintage"],
        ["literatura", "Arte de escrever histórias e poesias"],
        ["best-seller", "Livro mais vendido de uma temporada"],
        ["saga-literária", "Série de livros de um mesmo universo"],
        ["personagem-literário", "Ser fictício criado pela escrita"],
        ["narrador", "Voz que conta a história em um livro"],
        ["clímax", "Momento de maior tensão em uma obra"],
        ["desfecho", "Final de uma história"],
        ["prólogo", "Introdução de uma obra narrativa"],
        ["epílogo", "Texto final que conclui uma obra"],
        ["biografia", "Relato da vida de uma pessoa real"],
        ["autobiografia", "Relato da própria vida pelo autor"],
        ["conto", "Narrativa curta com impacto concentrado"],
        ["crônica", "Texto curto sobre o cotidiano"],
        ["poesia", "Arte de expressar sentimentos com palavras"],
        ["haiku", "Poema japonês de três versos curtos"],
        ["teatro", "Arte cênica ao vivo com atores"],
        ["peça", "Obra escrita para o teatro"],
        ["musical", "Espetáculo que combina teatro e música"],
        ["circo", "Espetáculo com acrobacias e palhaços"],
        ["dança", "Arte de se expressar pelo movimento"],
        ["ballet", "Dança clássica de origem europeia"],
        ["breakdance", "Dança urbana do hip-hop"],
        ["coreografia", "Sequência planejada de movimentos de dança"],
        ["palco", "Espaço de apresentações ao vivo"],
        ["plateia", "Público presente em uma apresentação"],
        ["ovação", "Aplauso entusiasmado do público"],
        ["bis", "Pedido de repetição ao artista"],
        ["tour", "Viagem de apresentações de um artista"],
        ["meet-and-greet", "Encontro de fãs com seu ídolo"],
        ["autógrafo", "Assinatura de um famoso para fãs"],
        ["fã-clube", "Grupo organizado de admiradores"],
        ["idol", "Ídolo que inspira milhões de pessoas"],
        ["celebridade", "Pessoa famosa e reconhecida publicamente"],
        ["paparazzi", "Fotógrafo que persegue celebridades"],
        ["tablóide", "Revista sensacionalista sobre famosos"],
        ["red-carpet", "Tapete vermelho de eventos famosos"],
        ["look", "Conjunto de roupa e acessórios de um evento"],
        ["photocall", "Parede decorada para fotos em eventos"],
        ["premiação", "Cerimônia de entrega de troféus"],
        ["troféu", "Objeto físico que simboliza uma vitória"],
        ["indicação", "Nomeação para concorrer a um prêmio"],
        ["estatueta", "Objeto icônico de premiações de cinema"],
        ["discurso", "Fala de agradecimento ao receber prêmio"],
        ["categoria", "Divisão de um concurso ou premiação"],
        ["júri", "Grupo que decide os vencedores"],
        ["voto", "Escolha do público em uma premiação"],
        ["campanha", "Estratégia para ganhar votos em premiação"],
        ["buzz", "Agitação e expectativa em torno de algo"],
        ["hype", "Entusiasmo exagerado por algo próximo"],
        ["lançamento", "Momento de disponibilizar algo ao público"],
        ["teaser", "Trecho curto para gerar curiosidade"],
        ["trailer", "Prévia de um filme ou série"],
        ["pré-estreia", "Exibição exclusiva antes do lançamento"],
        ["merchandise", "Produtos oficiais de uma obra ou artista"],
        ["colecionável", "Item especial para ser guardado"],
        ["action-figure", "Boneco articulado de personagem famoso"],
        ["poster", "Imagem decorativa de obra ou artista"],
        ["edição-limitada", "Produto lançado em quantidade restrita"],
        ["box-set", "Coleção completa embalada conjuntamente"],
        ["vinil", "Disco de música em formato analógico"],
        ["CD", "Disco compacto de armazenamento de música"],
        ["fita-cassete", "Formato antigo de gravação de áudio"],
        ["walkman", "Tocador portátil de fita cassete"],
        ["discman", "Tocador portátil de CDs"],
        ["iPod", "Tocador digital de músicas da Apple"],
        ["Spotify", "Plataforma líder de streaming de música"],
        ["Netflix", "Maior plataforma de streaming de vídeo"],
        ["Disney", "Gigante do entretenimento e animação"],
        ["Marvel", "Universo de super-heróis da Marvel Comics"],
        ["anime-expo", "Maior feira de anime dos Estados Unidos"],
        ["comic-con", "Convenção de quadrinhos e cultura pop"],
        ["cosplayer", "Pessoa que se fantasia de personagem"],
        ["convention", "Evento de encontro de fãs de cultura pop"],
        ["painel", "Debate com criadores em convenções"],
        ["autografar", "Assinar produtos para fãs em eventos"],
        ["geek", "Entusiasta apaixonado por cultura nerd"],
        ["nerd", "Aficionado por tecnologia e ficção científica"],
        ["otaku", "Fã obcecado por anime e cultura japonesa"],
        ["gamer-culture", "Cultura gerada ao redor de videogames"],
        ["leet", "Linguagem codificada usada por gamers"],
        ["noob", "Iniciante inexperiente em um jogo"],
        ["pro-player", "Jogador profissional de videogame"],
        ["GG", "Expressão de fair-play ao final de jogo"],
        ["AFK", "Sigla para jogador ausente do teclado"],
        ["nerf-gun", "Arma de brinquedo popular em cultura geek"],
        ["board-game", "Jogo de tabuleiro moderno ou clássico"],
        ["RPG", "Jogo de interpretação de personagens"],
        ["dungeon", "Masmorra de um jogo de RPG"],
        ["mestre", "Narrador e árbitro de uma sessão de RPG"],
        ["dado", "Objeto de sorte usado em jogos de RPG"],
        ["ficha", "Folha com atributos de personagem de RPG"],
        ["quest-RPG", "Aventura proposta pelo mestre do jogo"],
        ["maratona", "Assistir uma série do início ao fim"],
        ["binge-watching", "Assistir vários episódios seguidos"],
        ["cancelado", "Série encerrada antes da hora"],
        ["renovado", "Série confirmada para nova temporada"],
        ["showrunner", "Criador e chefe criativo de uma série"],
        ["episódio-piloto", "Primeiro episódio que apresenta a série"],
        ["season-finale", "Último episódio impactante de uma temporada"],
        ["mid-season", "Episódio de pausa no meio da temporada"],
        ["crossover-especial", "Episódio com personagens de outra série"],
        ["spin-off", "Obra derivada de outra já existente"],
        ["prequel", "História que se passa antes da original"],
        ["universo-expandido", "Obras complementares ao material principal"],
        ["retcon", "Alteração retroativa de fatos de uma obra"],
        ["deus-ex-machina", "Solução conveniente e abrupta na trama"],
        ["trope", "Recurso narrativo recorrente em obras"],
        ["clichê", "Elemento muito repetido e previsível"],
        ["subversão", "Quebrar intencionalmente uma expectativa"],
        ["metanarrativa", "Obra que comenta sobre si mesma"],
        ["quarta-parede", "Barreira entre personagem e público"],
        ["narrador-não-confiável", "Narrador que distorce a realidade"],
        ["anti-herói", "Protagonista com falhas morais"],
        ["redemption-arc", "Jornada de redenção de um personagem"],
        ["morte-personagem", "Perda impactante em uma narrativa"],
        ["revival", "Retorno de obra ou artista após pausa"],
        ["legado", "Impacto duradouro de uma obra ou artista"]
    ];


    //------------------------------------------------------------------------------------------------------------------------------------//

    //CODIGO REFERENTE A RANDONIZAÇÃO
    let ind_aleatorio = Math.floor(Math.random() * palavras_dicas.length); // aleatorizando o indice da matriz
    let array_palavra_aleatorio = palavras_dicas[ind_aleatorio];
    validador_modo_solo = true;
    game(6, '', array_palavra_aleatorio[0], array_palavra_aleatorio[1]);
}
