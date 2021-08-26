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
let btn_voltar2;
let btn_fase1;
let btn_fase2;
let btn_fase3;
let btn_fase4;
let btn_fase5;
let btn_fase6;
let btn_fase7;
let btn_fase8;
let btn_fase9;
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
    
    // Botão voltar para tela fases
    btn_voltar2 = createButton("VOLTAR");
    btn_voltar2.position(20, 50);
    btn_voltar2.addClass("btn btn-voltar");
    btn_voltar2.mousePressed(tela_fases);

    // Botão jogar
    btn_jogar = createButton('JOGAR');
    btn_jogar.position(btn_iniciar_posicaoX, 210);
    btn_jogar.addClass("btn btn-jogar");
    btn_jogar.mousePressed(tela_fases);
    
    // Botão instruções
    btn_instrucoes = createButton('INSTRUÇÕES');
    btn_instrucoes.position(btn_iniciar_posicaoX, 290);
    btn_instrucoes.addClass("btn btn-jogar");
    btn_instrucoes.mousePressed(tela_instrucoes);
    
    // Botão créditos 
    btn_creditos = createButton('CRÉDITOS');
    btn_creditos.position(btn_iniciar_posicaoX, 370);
    btn_creditos.addClass("btn btn-jogar");
    btn_creditos.mousePressed(tela_creditos);

    // Botões fases
    btn_fase1 = createButton('1');
    btn_fase1.position(505, 194);
    btn_fase1.addClass("btn btn-fase1");
    btn_fase1.mousePressed(tela_fase_1);

    btn_fase2 = createButton('2');
    btn_fase2.position(594, 194);
    btn_fase2.addClass("btn btn-fase2");
    btn_fase2.mousePressed(tela_fase_2);

    btn_fase3 = createButton('3');
    btn_fase3.position(683, 194);
    btn_fase3.addClass("btn btn-fase2");
    btn_fase3.mousePressed(tela_fase_3);

    btn_fase4 = createButton('4');
    btn_fase4.position(505, 329);
    btn_fase4.addClass("btn btn-fase2");
    btn_fase4.mousePressed(tela_fase_4);

    btn_fase5 = createButton('5');
    btn_fase5.position(594, 329);
    btn_fase5.addClass("btn btn-fase2");
    btn_fase5.mousePressed(tela_fase_5);

    btn_fase6 = createButton('6');
    btn_fase6.position(683, 329);
    btn_fase6.addClass("btn btn-fase2");
    btn_fase6.mousePressed(tela_fase_6);

    btn_fase7 = createButton('7');
    btn_fase7.position(505, 464);
    btn_fase7.addClass("btn btn-fase2");
    btn_fase7.mousePressed(tela_fase_7);

    btn_fase8 = createButton('8');
    btn_fase8.position(595, 464);
    btn_fase8.addClass("btn btn-fase2");
    btn_fase8.mousePressed(tela_fase_8);

    btn_fase9 = createButton('9');
    btn_fase9.position(683, 464);
    btn_fase9.addClass("btn btn-fase2");
    btn_fase9.mousePressed(tela_fase_9);

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
    clear();
    mostrar_menu();
   
    background(cor_principal);
    image(logo, 255, 130, 400, 400);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
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

function tela_fases() {
    tela = 4;
    clear();
    mostrar_btn_fases();

    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
    //image(tela_jogo_progresso, img_progresso_x, img_progresso_y, 354, 439);
    
    //NÃO TÁ APARECENDO A PALAVRA FASES
    textAlign(CENTER);
    textSize(20);
    textFont(font_regular);
    fill('white');
    text("FASES");

   
}

function tela_fase_1() {
    tela = 5;
    let img_jogo_x = largura_central - 215;
    let img_jogo_y = altura_central - 225;
    clear();
    
    esconder_btn_fases();
    background(cor_principal);
    image(tela_jogo_palavra, img_jogo_x, img_jogo_y, 430, 450);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}


function tela_fase_2() {
    tela = 6;
    clear();
    
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}


function tela_fase_3() {
    tela = 7;
    clear();
    
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}


function tela_fase_4() {
    tela = 8;
    clear();
    
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function tela_fase_5() {
    tela = 9;
    clear();
    
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}


function tela_fase_6() {
    tela = 10;
    clear();
    
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function tela_fase_7() {
    tela = 11;
    clear();
    
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function tela_fase_8() {
    tela = 12;
    clear();
   
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60); 
}

function tela_fase_9() {
    tela = 13;
    clear();
  
    esconder_btn_fases();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

// Criando funções para os botões

function esconder_menu() {
    // Esconder menu
    btn_voltar.show();
    btn_voltar2.hide();
    btn_jogar.hide();
    btn_instrucoes.hide();
    btn_creditos.hide();
    btn_fase1.hide();
    btn_fase2.hide();
    btn_fase3.hide();
    btn_fase4.hide();
    btn_fase5.hide();
    btn_fase6.hide();
    btn_fase7.hide();
    btn_fase8.hide();
    btn_fase9.hide();
}

function mostrar_menu() {
    // Exibir menu
    btn_voltar.hide();
    btn_voltar2.hide();
    btn_jogar.show();
    btn_instrucoes.show();
    btn_creditos.show();
    btn_fase1.hide();
    btn_fase2.hide();
    btn_fase3.hide();
    btn_fase4.hide();
    btn_fase5.hide();
    btn_fase6.hide();
    btn_fase7.hide();
    btn_fase8.hide();
    btn_fase9.hide();
}

function esconder_btn_fases() {
    // Exibir menu
    btn_voltar.hide();
    btn_voltar2.show();
    btn_jogar.hide();
    btn_instrucoes.hide();
    btn_creditos.hide();
    btn_fase1.hide();
    btn_fase2.hide();
    btn_fase3.hide();
    btn_fase4.hide();
    btn_fase5.hide();
    btn_fase6.hide();
    btn_fase7.hide();
    btn_fase8.hide();
    btn_fase9.hide();
}

function mostrar_btn_fases(){
    //Exibir apenas botôes das fases
    btn_voltar.show();
    btn_voltar2.hide();
    btn_jogar.hide();
    btn_instrucoes.hide();
    btn_creditos.hide();
    btn_fase1.show();
    btn_fase2.show();
    btn_fase3.show();
    btn_fase4.show();
    btn_fase5.show();
    btn_fase6.show();
    btn_fase7.show();
    btn_fase8.show();
    btn_fase9.show();
    
    
}