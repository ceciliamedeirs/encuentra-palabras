// Configurações iniciais
//Variáveis para o canva(tela)
let canva;
let tela = 1;
let x = 100;
let y = 100;
let largura_central = (window.innerWidth/2);
let altura_central = (window.innerHeight/2);

// Variáveis para as cores
let cor_principal = '#7A4AB4';

// Variáveis para as configurações dos botões 
let btn_iniciar_largura = 200;
let btn_iniciar_posicaoX = (window.innerWidth/1.5) - (btn_iniciar_largura/1.5);
let btn_voltar;
let btn_jogar;
let btn_instrucoes;
let btn_creditos;

// Centralizando o canva
function centerCanvas() {
    // Para centralizar o canva em todas as telas
    let canva_x = (windowWidth - width) / 2;
    let canva_y = (windowHeight - height) / 2;
    canva.position(canva_x, canva_y);
}

// Adicionando assets no preload
let font_regular;

function preload() {
    //Para carregar imagens, fontes
    font_regular = loadFont('assets/fonts/LondrinaSolid-Regular.ttf');
    logo = loadImage('assets/img/logo.png');
    //bg_img = loadImage('assets/img/bg.png');
    tela_jogo_progresso = loadImage('assets/img/tela-jogo-progresso.svg');
    tela_jogo_palavra = loadImage('assets/img/tela-jogo-palavras.svg');
    bg_pixel = loadImage('assets/img/bg-pixel.svg');
}

function setup() {
    //Para criar
    canva = createCanvas(windowWidth, windowHeight);
    centerCanvas();

    // Botão voltar (inicio) 
    btn_voltar = createButton("VOLTAR");
    btn_voltar.position(20, 50);
    btn_voltar.addClass("btn btn-voltar");
    btn_voltar.mousePressed(tela_inicial);
    
    // Botão jogar
    btn_jogar = createButton('JOGAR');
    btn_jogar.position(btn_iniciar_posicaoX, 210);
    btn_jogar.addClass("btn btn-jogar");
    btn_jogar.mousePressed(tela_jogo);
    
    // Botão instrucoes
    btn_instrucoes = createButton('INSTRUÇÕES');
    btn_instrucoes.position(btn_iniciar_posicaoX, 290);
    btn_instrucoes.addClass("btn btn-jogar");
    btn_instrucoes.mousePressed(tela_instrucoes);
    
    // Botão créditos 
    btn_creditos = createButton('CRÉDITOS');
    btn_creditos.position(btn_iniciar_posicaoX, 370);
    btn_creditos.addClass("btn btn-jogar");
    btn_creditos.mousePressed(tela_creditos);

    // Botão fase1
    btn_fase1 = createButton('1');
    btn_fase1.position(505, 194);
    btn_fase1.addClass("btn btn-fase1");
    btn_fase1.mousePressed(tela_fase_1);

    tela_inicial();
    // noLoop();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
  
function draw() {
    //Na versão final o jogo estará dentro do draw
    // Loop aqui...
    /* if ( tela == 4 ) {
        if ( keyIsDown(UP_ARROW) ) {
            y -= 5;
        }
        if ( keyIsDown(RIGHT_ARROW) ) {
            x += 5;
        }
        if ( keyIsDown(DOWN_ARROW) ) {
            y += 5;
        }
        if ( keyIsDown(LEFT_ARROW) ) {
            x -= 5;
        }
        esconder_menu();
        let c = color(255, 204, 0);
        fill('white');
        noStroke();
        ellipse(x, y, 50, 50);
        esconder_menu();
        image(tela_jogo_progresso, largura_central, altura_central, 354, 439);
    } */
}

// Criando funções para cada tela
function tela_inicial() {
    tela = 1;

    // O clear é pra limpar a tela
    clear();
    background(cor_principal);
    image(logo, 250, 130, 400, 400);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
    mostrar_menu();
}

function tela_instrucoes() {
    tela = 2;
    clear();
    esconder_menu();
    
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
    textAlign(CENTER);
    textSize(20); 
    textFont(font_regular);
    fill('white');
    text("O objetivo deste jogo é encontrar anagramas. Anagrama é uma espécie de jogo de palavras criado" + "\n" + "com a reorganização das letras de uma palavra ou expressão para produzir outras palavras ou expressões," + "\n" + 
    "utilizando todas as letras originais exatamente uma vez. Para jogar, basta arrastar o mouse entre as letras dispostas" + "\n" +
    "na tela conectando cada letra, e aguardar para descobrir se você acertou. Em síntese, você terá que escrever e encontrar" + "\n" + 
    " cada palavra do zero. Serão nove fases e ao completar três você ganhará como recompensa um personagem icônico hispanohablante" + "\n" + "e saberá um pouco da história dele. Ao completar todas as fases, você irá aprender a escrita de novas palavras da língua espanhola. "+ "\n" + "\n" + "Nesta primeira versão, o jogo ainda não se encontra funcionando na tela do jogo, " + "\n" + "mas ao clicar no botão da fase 1 você verá um esboço do jogo em forma de imagem." + "\n" + "\n" + "OBS: APENAS O BOTÃO 1 ESTÁ FUNCIONANDO." , 700, 220);
}

function tela_creditos() {
    tela = 3;
    clear();
    esconder_menu();
    
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
    textAlign(CENTER);
    textSize(20);
    textFont(font_regular);
    fill('white');
    text("Jogo de Anagramas de Palavras desenvolvido pela" + "\n" + "aluna Maria Cecília em 2021, ainda não publicado.", 700, 300);
}

function tela_jogo() {
    tela = 4;
    let img_progresso_x = largura_central - 177;
    let img_progresso_y = altura_central - 220;
    clear();
    esconder_menu();
    background(cor_principal);
    image(tela_jogo_progresso, img_progresso_x, img_progresso_y, 354, 439);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
    btn_fase1.show();
}

function tela_fase_1() {
    tela = 5;
    let img_jogo_x = largura_central - 215;
    let img_jogo_y = altura_central - 225;
    clear();
    esconder_menu();
    background(cor_principal);
    image(tela_jogo_palavra, img_jogo_x, img_jogo_y, 430, 450);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
    btn_fase1.hide();
}

// Criando funções para os botões

function esconder_menu() {
    // Esconder menu
    btn_voltar.show();
    btn_jogar.hide();
    btn_instrucoes.hide();
    btn_creditos.hide();
    btn_fase1.hide();
}

function mostrar_menu() {
    // Exibir menu
    btn_voltar.hide();
    btn_jogar.show();
    btn_instrucoes.show();
    btn_creditos.show();
    btn_fase1.hide();
}
