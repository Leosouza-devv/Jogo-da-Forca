// variaveis globais
let player = 'X';
let fim_game = false;
let player1 = [];
let player2 = [];
// posiçoes necessarias para ganhar uma partida 
const posicoes = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

// função responsavel por fornecer a logica do jogo da velha, logicas como: quando clicar em um espaço marcar o quadrado de acordo com a vez do jogador; fazer uma verificação do espaço, para conferir se ele esta vazio, e caso estiver vazio permitir ser preenchido; mapear quais posições preencidas são necessarias para se obter a vitoria; verificar se um dos jogadores alcançou um dos valores da array mapeada.
function game(n) {
    let espaco = document.getElementById('btn_' + n); //espaço clicado pelo jogador

    // condição caso o turno seja para o jogador 'X'
    if (player == 'X' && fim_game != true) {
        // confere se o espaço esta vazio para efetivar a jogada
        if (espaco.innerHTML == '') {
            espaco.innerHTML = player; //faz a jogada na tela

            player1.push(n);


            player = 'O' //mudando o turno de jogada
            console.log('player 1:' + player1);


        }

    }

    // condição caso o turno seja para o jogador 'O'
    else if (player == 'O' && fim_game != true) {
        // confere se o espaço esta vazio para efetivar a jogada
        if (espaco.innerHTML == '') {
            espaco.innerHTML = player; //faz a jogada na tela


            player2.push(n);

            player = 'X' //mudando o turno de jogada
            console.log('player 2:' + player2);

        }


    }


    let turno = document.getElementById('turno_ganhador'); //div responsavel pela informação de turno e ganhador da partida

    // Verificando se existe um ganhador
    for (let linha = 0; linha < posicoes.length; linha++) {
        const [a, b, c] = posicoes[linha];

        // Verifica se todos os três espaços foram preenchidos pelo mesmo jogador
        if (player1.includes(a) && player1.includes(b) && player1.includes(c)) {
            // imprime na tela que o jogador X venceu
            turno.innerHTML = '<p>O jogador:<span> X Venceu!</span></p>';
            fim_game = true; // determina o fim do jogo 
            return;
        }
        else if (player2.includes(a) && player2.includes(b) && player2.includes(c)) {
            // imprime na tela que o jogador O venceu
            turno.innerHTML = '<p>O jogador:<span> O Venceu!</span></p>';
            fim_game = true; //determina o fim do jogo
            return;
        }

    }

    if (player1.length + player2.length === 9) {
        turno.innerHTML = '<p>Os jogadores:<span>Empataram</span></p>';
        fim_game = true; // determina o fim do jogo
        return;
    }



    // imprimindo na tela o turno/vez do jogador
    turno.innerHTML = '<p>Vez do jogador:<span>' + player + '</span></p>';


}

// função para reiniciar game, zerando valores e deixando os espaços vazios para novas jogadas.
function reiniciar_game(reiniciar) {
    // condição que reinicia o game
    if (reiniciar == true) {
        player = 'X'; // reconfigura o valor de player, definindo assim que o primeiro player sempre sera X
        fim_game = false; // reconfigura o valor de fim_game para false, tornando possivel assim que os jogadores consigam jogar novamente após reiniciar a partida
        for (let i = 0; i < 10; i++) {
            player1.pop(); // zera os numeros acumulados em player 1
            player2.pop(); // zera os numeros acumulados em player 2
        }


        //limpa os espaços do jogo da velha 
        let espacos = document.querySelectorAll('.btn_game');
        espacos.forEach(espaco => {
            espaco.innerHTML = '';
        });

        reiniciar = false; //reinicia o valor do botão de reiniciar
    }
    // imprimindo na tela o turno/vez do jogador
    let turno = document.getElementById('turno_ganhador');
    turno.innerHTML = '<p>Vez do jogador:<span>' + player + '</span></p>';

}


