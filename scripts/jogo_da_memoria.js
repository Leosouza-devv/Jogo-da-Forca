'use strict'
//matriz das imagens e numero do id das imagens
// a matriz ira conter o endereço/url das imagens e o id delas 
let id_cartas = [

    // parte 1 imagens
    ['../imagens/animais_jogo_memoria/Brown_Chicken.png', 1],
    ['../imagens/animais_jogo_memoria/Cat_2.png', 2],
    ['../imagens/animais_jogo_memoria/Dog_4.png', 3],
    ['../imagens/animais_jogo_memoria/Horse.png', 4],
    ['../imagens/animais_jogo_memoria/Ostrich.png', 5],
    ['../imagens/animais_jogo_memoria/Turtle.png', 6],
    ['../imagens/animais_jogo_memoria/White_Chicken.png', 7],
    ['../imagens/animais_jogo_memoria/White_Cow.png', 8],

    // parte 2 imagens  
    ['../imagens/animais_jogo_memoria/Brown_Chicken.png', 9],
    ['../imagens/animais_jogo_memoria/Cat_2.png', 10],
    ['../imagens/animais_jogo_memoria/Dog_4.png', 11],
    ['../imagens/animais_jogo_memoria/Horse.png', 12],
    ['../imagens/animais_jogo_memoria/Ostrich.png', 13],
    ['../imagens/animais_jogo_memoria/Turtle.png', 14],
    ['../imagens/animais_jogo_memoria/White_Chicken.png', 15],
    ['../imagens/animais_jogo_memoria/White_Cow.png', 16]

];

// função responsavel pelo embaralhamento das cartas
function random(array) {
    // ramdomizando a array que contem o link das imagens do game 
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    // responsavel por atribuir o valor embaralhado a outra array enquanto deleta o valor recem posto para não haver repetição
    let embaralhamento = [];
    for (let limpeza = 0; limpeza < 16; limpeza++) {
        embaralhamento.pop();

    }
    for (let linha = 0; linha < 16; linha++) {
        let ind = Math.floor(Math.random() * array.length); // Escolhe um índice aleatório para o elemento        
        embaralhamento.push(array.splice(ind, 1)[0]); // adiciona os valores dentro da array embaralhamento enquanto retira-os da copia da array passada por parametro, evitando repetições  
    }

    return embaralhamento;
}





// funções responsavel pela criação do jogo da memoria 
function memoria_cartas() {
    // VARIAVEIS LOCAIS DA FUNÇÃO memoria_cartas()
    let tentativa = 1;
    let i = 0; //indice para controle de passagem de array
    let value_ind = 0;

    // variavel da carta 1 e 2 que irão armazenar os valores das cartas clicadas
    let carta1;
    let carta2;

    // variavel responsavel por marcar a pontuação do game
    let pontuacao = 0;
    let txt_pontuacao = document.getElementById('ponto');
    txt_pontuacao.innerHTML = '<p>Você descobriu: <span>' + pontuacao + ' cartas<span></p>';


    let cartas_embaralhadas = random([...id_cartas]); // O '...' Faz uma cópia da array original para evitar modificar a original



    // criando as cartas do game
    let jogo = document.getElementById('jogo');
    jogo.innerHTML = ''; // apagando elementos da div jogo, que concequentemente apaga todas as cartas dentro dela, atualizando o game
    for (let linha = 0; linha < 4; linha++) {
        for (let coluna = 0; coluna < 4; coluna++) {

            // CRIANDO OS ELEMENTOS DIVS
            let carta = document.createElement('div'); //cria um elemento div
            carta.classList.add('oculto'); // cria uma classe para esse elemento
            jogo.appendChild(carta); // insere o elementos divs criados dentro do elemento pai que possui id="jogo" 

            // INSERINDO AS IMAGEMS
            carta.style.backgroundImage = 'url("' + cartas_embaralhadas[i++][0] + '")'; // definindo uma imagem para a div carta, atribuindo uma url da array das cartas embaralhadas, no background-image do mesmo elemento 
            carta.value = cartas_embaralhadas[value_ind++][0]; //definindo o valor da carta, onde o valor sera igual a url atribuida
            carta.innerHTML = '?';
            // EVENTO DE CLICK NAS CARTAS
            carta.addEventListener('click', () => {

                // laço condicional responsavel por conferir se a carta clicada, já não foi clicada ou descoberta anteriormente 
                if (carta.style.backgroundSize != '70%') {
                    carta.style.fontSize = '0';
                    carta.style.backgroundSize = '70%';//mostrando a carta clicada              

                    // o laço condicional a seguir ira atribuir o valor da carta clicada as variaveis carta1(primeira carta clicada), caso a vez seja impar, e carta2(segunda carta clicada), caso a vez seja par. Na vez de numero par existira uma condição que ira verificar se as duas são iguais ou não.
                    if (tentativa % 2 == 1) {
                        carta1 = carta;

                    }
                    else if (tentativa % 2 == 0) {
                        carta2 = carta;

                        // laço condicional responsavel por marcar 1 ponto caso as cartas sejam iguais, e caso não sejam as mesmas irão desaparecer da tela do usuario 
                        if ((carta1.value == carta2.value)) {

                            // confere se a pontuação é abaixo de 8 pontos(numero de cartas existentes no game), para continuar pontuando, caso seja igual a 8, o jogo será finalizado
                            if (pontuacao < 7) {
                                pontuacao++
                                console.log(pontuacao);
                                txt_pontuacao.innerHTML = '<p>Você descobriu: <span>' + pontuacao + ' cartas<span></p>';
                            }

                            else {
                                txt_pontuacao.innerHTML = '<p>Parabéns!! Você descobriu: <span>todas as cartas<span></p>';
                            }
                        }

                        else {
                            setTimeout(() => {
                                carta1.style.fontSize = '20px';
                                carta2.style.fontSize = '20px';
                                carta1.style.backgroundSize = '0';
                                carta2.style.backgroundSize = '0';
                            }, 490);
                        }
                    }
                    tentativa++; //responsavel por passar o turno

                }

            });



            if (carta.classList.contains('oculto')) {

            }
        }
    }
    let reiniciar = document.getElementById('reiniciar_btn');
    reiniciar.addEventListener('click', () => {

        memoria_cartas();

    });


}
memoria_cartas(); 
