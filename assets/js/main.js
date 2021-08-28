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
let cor_secundaria = '#ff7471';
let cor_amarelo = '#ffde39';

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
    btn_voltar.position(20, 74);
    btn_voltar.addClass("btn btn-voltar");
    btn_voltar.mousePressed(tela_inicial);
    
    // Botão voltar para tela fases
    btn_voltar2 = createButton("VOLTAR");
    btn_voltar2.position(20, 71);
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
    btn_fase2.addClass("btn btn-fase1");
    btn_fase2.mousePressed(tela_fase_2);
    btn_fase2.attribute('disabled', '');
    // btn_fase2.removeAttribute('disabled', '');

    btn_fase3 = createButton('3');
    btn_fase3.position(683, 194);
    btn_fase3.addClass("btn btn-fase1");
    btn_fase3.mousePressed(tela_fase_3);
    btn_fase3.attribute('disabled', '');

    btn_fase4 = createButton('4');
    btn_fase4.position(505, 329);
    btn_fase4.addClass("btn btn-fase1");
    btn_fase4.mousePressed(tela_fase_4);
    btn_fase4.attribute('disabled', '');

    btn_fase5 = createButton('5');
    btn_fase5.position(594, 329);
    btn_fase5.addClass("btn btn-fase1");
    btn_fase5.mousePressed(tela_fase_5);
    btn_fase5.attribute('disabled', '');

    btn_fase6 = createButton('6');
    btn_fase6.position(683, 329);
    btn_fase6.addClass("btn btn-fase1");
    btn_fase6.mousePressed(tela_fase_6);
    btn_fase6.attribute('disabled', '');

    //Botões letras fase 1
    btn_letraA1 = createButton('A');
    btn_letraA1.position(600, 460);
    btn_letraA1.addClass("btn btn-letra");
    btn_letraA1.mousePressed(letras_fase_1);

    btn_letraL1 = createButton('L');
    btn_letraL1.position(650, 270);
    btn_letraL1.addClass("btn btn-letra");
    btn_letraL1.mousePressed(letras_fase_1);

    btn_letraG1 = createButton('G');
    btn_letraG1.position(550, 370);
    btn_letraG1.addClass("btn btn-letra");
    btn_letraG1.mousePressed(letras_fase_1);

    btn_letraU1 = createButton('U');
    btn_letraU1.position(760, 370);
    btn_letraU1.addClass("btn btn-letra");
    btn_letraU1.mousePressed(letras_fase_1);

    btn_letraN1 = createButton('N');
    btn_letraN1.position(700, 460);
    btn_letraN1.addClass("btn btn-letra");
    btn_letraN1.mousePressed(letras_fase_1);

    //Botões letras fase 2
    btn_letraS2 = createButton('S');
    btn_letraS2.position(683, 464);
    btn_letraS2.addClass("btn btn-fase2");
    btn_letraS2.mousePressed(letras_fase_2);

    btn_letraA2 = createButton('A');
    btn_letraA2.position(683, 300);
    btn_letraA2.addClass("btn btn-fase2");
    btn_letraA2.mousePressed(letras_fase_2);

    btn_letraL2 = createButton('L');
    btn_letraL2.position(183, 300);
    btn_letraL2.addClass("btn btn-fase2");
    btn_letraL2.mousePressed(letras_fase_2);

    btn_letraI2 = createButton('I');
    btn_letraI2.position(299, 300);
    btn_letraI2.addClass("btn btn-fase2");
    btn_letraI2.mousePressed(letras_fase_2);

    btn_letraR2 = createButton('R');
    btn_letraR2.position(883, 300);
    btn_letraR2.addClass("btn btn-fase2");
    btn_letraR2.mousePressed(letras_fase_2);

    //BOTÕES LETRAS FASE 3
    btn_letraF3 = createButton('F');
    btn_letraF3.position(683, 464);
    btn_letraF3.addClass("btn btn-fase2");
    btn_letraF3.mousePressed(letras_fase_3);

    btn_letraR3 = createButton('R');
    btn_letraR3.position(683, 300);
    btn_letraR3.addClass("btn btn-fase2");
    btn_letraR3.mousePressed(letras_fase_3);

    btn_letraE3 = createButton('E');
    btn_letraE3.position(183, 300);
    btn_letraE3.addClass("btn btn-fase2");
    btn_letraE3.mousePressed(letras_fase_3);

    btn_letraS3 = createButton('S');
    btn_letraS3.position(299, 300);
    btn_letraS3.addClass("btn btn-fase2");
    btn_letraS3.mousePressed(letras_fase_3);

    btn_letraA3 = createButton('A');
    btn_letraA3.position(883, 300);
    btn_letraA3.addClass("btn btn-fase2");
    btn_letraA3.mousePressed(letras_fase_3);

    //BOTÕES FASE 4
    btn_letraN4 = createButton('N');
    btn_letraN4.position(683, 464);
    btn_letraN4.addClass("btn btn-fase2");
    btn_letraN4.mousePressed(letras_fase_4);

    btn_letraO4 = createButton('O');
    btn_letraO4.position(683, 300);
    btn_letraO4.addClass("btn btn-fase2");
    btn_letraO4.mousePressed(letras_fase_4);

    btn_letraC4 = createButton('C');
    btn_letraC4.position(183, 300);
    btn_letraC4.addClass("btn btn-fase2");
    btn_letraC4.mousePressed(letras_fase_4);

    btn_letraH4 = createButton('H');
    btn_letraH4.position(299, 300);
    btn_letraH4.addClass("btn btn-fase2");
    btn_letraH4.mousePressed(letras_fase_4);

    btn_letraE4 = createButton('E');
    btn_letraE4.position(883, 300);
    btn_letraE4.addClass("btn btn-fase2");
    btn_letraE4.mousePressed(letras_fase_4);

    //BOTÕES LETRAS FASE 5
    btn_letraB5 = createButton('B');
    btn_letraB5.position(683, 464);
    btn_letraB5.addClass("btn btn-fase2");
    btn_letraB5.mousePressed(letras_fase_5);

    btn_letraA5 = createButton('A');
    btn_letraA5.position(683, 300);
    btn_letraA5.addClass("btn btn-fase2");
    btn_letraA5.mousePressed(letras_fase_5);

    btn_letraI5 = createButton('I');
    btn_letraI5.position(183, 300);
    btn_letraI5.addClass("btn btn-fase2");
    btn_letraI5.mousePressed(letras_fase_5);

    btn_letraL5 = createButton('L');
    btn_letraL5.position(299, 300);
    btn_letraL5.addClass("btn btn-fase2");
    btn_letraL5.mousePressed(letras_fase_5);

    btn_letraE5 = createButton('E');
    btn_letraE5.position(883, 300);
    btn_letraE5.addClass("btn btn-fase2");
    btn_letraE5.mousePressed(letras_fase_5);

    btn_letraB6 = createButton('B');
    btn_letraB6.position(683, 464);
    btn_letraB6.addClass("btn btn-fase2");
    btn_letraB6.mousePressed(letras_fase_6);
    
    btn_letraU6 = createButton('U');
    btn_letraU6.position(683, 300);
    btn_letraU6.addClass("btn btn-fase2");
    btn_letraU6.mousePressed(letras_fase_6);

    btn_letraE6 = createButton('E');
    btn_letraE6.position(183, 300);
    btn_letraE6.addClass("btn btn-fase2");
    btn_letraE6.mousePressed(letras_fase_6);
    
    btn_letraN6 = createButton('N');
    btn_letraN6.position(299, 300);
    btn_letraN6.addClass("btn btn-fase2");
    btn_letraN6.mousePressed(letras_fase_6);
    
    btn_letraO6 = createButton('O');
    btn_letraO6.position(883, 300);
    btn_letraO6.addClass("btn btn-fase2");
    btn_letraO6.mousePressed(letras_fase_6);

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
    
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text("FASES", 700, 103);
}

const letrasf1 = {
    'letra1': 'A',
    'letra2': 'L',
    'letra3': 'G',
    'letra4': 'U',
    'letra5': 'N',
}
let resposta_fase_1 = [];
let quantidade_acertada = [];

function tela_fase_1() {
    tela = 5;
    let img_jogo_x = largura_central - 215;
    let img_jogo_y = altura_central - 225;
    clear();
    
    esconder_btn_fases();
    btn_letraA1.show();
    btn_letraL1.show();
    btn_letraG1.show();
    btn_letraU1.show();
    btn_letraN1.show();

    
    background(cor_principal);
    noStroke();
    fill(cor_secundaria);
    rect(largura_central-250, 100, 500, 70, 20);
    
    textSize(20);
    textFont(font_regular);
    fill(cor_amarelo);
    text("Acerte 3 palavras para passar de fase!", 700, 120);
    // image(tela_jogo_palavra, img_jogo_x, img_jogo_y, 430, 450);
    noStroke();
    fill(cor_secundaria);
    ellipse(largura_central, 400, 300, 300);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

//Função para letras das fases
function letras_fase_1(){
    
    // console.log(this.html());
    resposta_fase_1.push(this.html());
    console.log(quantidade_acertada.length);

    if ( quantidade_acertada.length <= 2 ) {
        // Algun
        if ( letrasf1.letra1 == resposta_fase_1[0] && letrasf1.letra2 == resposta_fase_1[1] && letrasf1.letra3 == resposta_fase_1[2] && letrasf1.letra4 == resposta_fase_1[3] && letrasf1.letra5 == resposta_fase_1[4]) {
            resposta_fase_1 = [];
            quantidade_acertada.push('Algun');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada, 700, 150);
        }
        
        // Gula
        if ( letrasf1.letra3 == resposta_fase_1[0] && letrasf1.letra4 == resposta_fase_1[1] && letrasf1.letra2 == resposta_fase_1[2] && letrasf1.letra1 == resposta_fase_1[3]) {
            resposta_fase_1 = [];
            quantidade_acertada.push('Gula');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada, 700, 150);
        }
        
        // Luna
        if ( letrasf1.letra2 == resposta_fase_1[0] && letrasf1.letra4 == resposta_fase_1[1] && letrasf1.letra5 == resposta_fase_1[2] && letrasf1.letra1 == resposta_fase_1[3]) {
            resposta_fase_1 = [];
            quantidade_acertada.push('Luna');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada, 700, 150);
        }
        
        // Nula
        if ( letrasf1.letra5 == resposta_fase_1[0] && letrasf1.letra4 == resposta_fase_1[1] && letrasf1.letra2 == resposta_fase_1[2] && letrasf1.letra1 == resposta_fase_1[3]) {
            resposta_fase_1 = [];
            quantidade_acertada.push('Nula');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada, 700, 150);
        }

        // Aun
        if ( letrasf1.letra1 == resposta_fase_1[0] && letrasf1.letra4 == resposta_fase_1[1] && letrasf1.letra5 == resposta_fase_1[2]) {
            resposta_fase_1 = [];
            quantidade_acertada.push('Aun');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada, 700, 150);
        }
        
        // Una
        if ( letrasf1.letra4 == resposta_fase_1[0] && letrasf1.letra5 == resposta_fase_1[1] && letrasf1.letra1 == resposta_fase_1[2]) {
            resposta_fase_1 = [];
            quantidade_acertada.push('Una');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada, 700, 150);
        }
    } else {
        btn_fase2.removeAttribute('disabled', '');
        alert('Você passou de fase, volte para a tela anterior e vá para a fase 2.');
    }

}

function tela_fase_2() {
    tela = 6;
    clear();

    esconder_btn_fases();
    btn_letraS2.show();
    btn_letraA2.show();
    btn_letraL2.show();
    btn_letraI2.show();
    btn_letraR2.show();

    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);

    const letrasF2 = {
        'letra1': 'S',
        'letra2': 'A',
        'letra3': 'L',
        'letra4': 'I',
        'letra5': 'R',
    }
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF2.letra1, 800, 100);
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF2.letra2, 800, 200);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF2.letra3, 800, 300);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF2.letra4, 800, 400);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF2.letra5, 800, 500);

}

function letras_fase_2(){
    console.log(this.html());
    resposta_fase_1.push(this.html());
} 

//FASE 3
function tela_fase_3() {
    tela = 7;
    clear();
    
    esconder_btn_fases();
    btn_letraF3.show();
    btn_letraR3.show();
    btn_letraE3.show();
    btn_letraS3.show();
    btn_letraA3.show();

    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);

    const letrasF3 = {
        'letra1': 'F',
        'letra2': 'R',
        'letra3': 'E',
        'letra4': 'S',
        'letra5': 'A',
    }
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF3.letra1, 800, 100);
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF3.letra2, 800, 200);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF3.letra3, 800, 300);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF3.letra4, 800, 400);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF3.letra5, 800, 500);
}

function letras_fase_3(){
    console.log(this.html());
    resposta_fase_1.push(this.html());
} 


//FASE 4
function tela_fase_4() {
    tela = 8;
    clear();
    
    esconder_btn_fases();
    btn_letraN4.show();
    btn_letraO4.show();
    btn_letraC4.show();
    btn_letraH4.show();
    btn_letraE4.show();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);

    const letrasF4 = {
        'letra1': 'N',
        'letra2': 'O',
        'letra3': 'C',
        'letra4': 'H',
        'letra5': 'E',
    }
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF4.letra1, 800, 100);
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF4.letra2, 800, 200);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF4.letra3, 800, 300);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF4.letra4, 800, 400);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF4.letra5, 800, 500);
}

function letras_fase_4(){
    
    console.log(this.html());
    resposta_fase_1.push(this.html());
} 

//FASE 5
function tela_fase_5() {
    tela = 9;
    clear();
    
    esconder_btn_fases();
    btn_letraB5.show();
    btn_letraA5.show();
    btn_letraI5.show();
    btn_letraL5.show();
    btn_letraE5.show();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);

    const letrasF5 = {
        'letra1': 'B',
        'letra2': 'A',
        'letra3': 'I',
        'letra4': 'L',
        'letra5': 'E',
    }
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF5.letra1, 800, 100);
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF5.letra2, 800, 200);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF5.letra3, 800, 300);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF5.letra4, 800, 400);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF5.letra5, 800, 500);
}

function letras_fase_5(){
    console.log(this.html());
    resposta_fase_1.push(this.html());
} 

function tela_fase_6() {
    tela = 10;
    clear();
    
    esconder_btn_fases();
    btn_letraB6.show();
    btn_letraU6.show();
    btn_letraE6.show();
    btn_letraN6.show();
    btn_letraO6.show();
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);

    const letrasF6 = {
        'letra1': 'B',
        'letra2': 'U',
        'letra3': 'E',
        'letra4': 'N',
        'letra5': 'O',
    }
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF6.letra1, 800, 100);
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF6.letra2, 800, 200);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF6.letra3, 800, 300);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF6.letra4, 800, 400);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text(letrasF6.letra5, 800, 500);
}

function letras_fase_6(){
    console.log(this.html());
    resposta_fase_1.push(this.html());
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
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraS2.hide();
    btn_letraA2.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraR2.hide();
    btn_letraF3.hide();
    btn_letraR3.hide();
    btn_letraE3.hide();
    btn_letraS3.hide();
    btn_letraA3.hide();
    btn_letraN4.hide();
    btn_letraO4.hide();
    btn_letraC4.hide();
    btn_letraH4.hide();
    btn_letraE4.hide();
    btn_letraB5.hide();
    btn_letraA5.hide();
    btn_letraI5.hide();
    btn_letraL5.hide();
    btn_letraE5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
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
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraS2.hide();
    btn_letraA2.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraR2.hide();
    btn_letraF3.hide();
    btn_letraR3.hide();
    btn_letraE3.hide();
    btn_letraS3.hide();
    btn_letraA3.hide();
    btn_letraN4.hide();
    btn_letraO4.hide();
    btn_letraC4.hide();
    btn_letraH4.hide();
    btn_letraE4.hide();
    btn_letraB5.hide();
    btn_letraA5.hide();
    btn_letraI5.hide();
    btn_letraL5.hide();
    btn_letraE5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
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
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraS2.hide();
    btn_letraA2.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraR2.hide();
    btn_letraF3.hide();
    btn_letraR3.hide();
    btn_letraE3.hide();
    btn_letraS3.hide();
    btn_letraA3.hide();
    btn_letraN4.hide();
    btn_letraO4.hide();
    btn_letraC4.hide();
    btn_letraH4.hide();
    btn_letraE4.hide();
    btn_letraB5.hide();
    btn_letraA5.hide();
    btn_letraI5.hide();
    btn_letraL5.hide();
    btn_letraE5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
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
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraS2.hide();
    btn_letraA2.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraR2.hide();
    btn_letraF3.hide();
    btn_letraR3.hide();
    btn_letraE3.hide();
    btn_letraS3.hide();
    btn_letraA3.hide();
    btn_letraN4.hide();
    btn_letraO4.hide();
    btn_letraC4.hide();
    btn_letraH4.hide();
    btn_letraE4.hide();
    btn_letraB5.hide();
    btn_letraA5.hide();
    btn_letraI5.hide();
    btn_letraL5.hide();
    btn_letraE5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
}