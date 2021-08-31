//CONFIGURAÇÕES INICIAIS
//VARIÁVEIS PARA O CANVA (TELA)
let canva;
let tela = 1;
let x = 100;
let y = 100;
let largura_central = (window.innerWidth/2);
let altura_central = (window.innerHeight/2);

//VARIÁVEIS PARA AS CORES
let cor_principal = '#7A4AB4';
let cor_secundaria = '#ff7471';
let cor_amarelo = '#ffde39';

//VARIÁVEIS PARAA AS CONFIGURAÇÕES DOS BOTÕES 
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
let btn_frida;
let btn_salvador;

//PARA CENTRALIZAR O CANVA 
function centerCanvas() {
    let canva_x = (windowWidth - width) / 2;
    let canva_y = (windowHeight - height) / 2;
    canva.position(canva_x, canva_y);
}

//ADICIONANDO ASSETS NO PRELOAD
let font_regular;

function preload() {
    //PARA CARREGAR FONTES E IMAGENS
    font_regular = loadFont('assets/fonts/LondrinaSolid-Regular.ttf');
    logo = loadImage('assets/img/logo.png');
    tela_jogo_progresso = loadImage('assets/img/tela-jogo-progresso.svg');
    tela_jogo_palavra = loadImage('assets/img/tela-jogo-palavras.svg');
    bg_pixel = loadImage('assets/img/bg-pixel.svg');
    frida = loadImage('assets/img/fridaB.png');
    salvador = loadImage('assets/img/salvador.png');

}

function setup() {
    //PARA CRIAR CANVA
    canva = createCanvas(windowWidth, windowHeight);
    centerCanvas();

    //BOTÃO VOLTAR PARA MENU
    btn_voltar = createButton("VOLTAR");
    btn_voltar.position(20, 74);
    btn_voltar.addClass("btn btn-voltar");
    btn_voltar.mousePressed(tela_inicial);
    
    //BOTÃO VOLTAR PARA TELA DE FASES
    btn_voltar2 = createButton("VOLTAR");
    btn_voltar2.position(20, 71);
    btn_voltar2.addClass("btn btn-voltar");
    btn_voltar2.mousePressed(tela_fases);

    //BOTÃO JOGAR
    btn_jogar = createButton('JOGAR');
    btn_jogar.position(btn_iniciar_posicaoX, 210);
    btn_jogar.addClass("btn btn-jogar");
    btn_jogar.mousePressed(tela_fases);
    
    //BOTÃO INSTRUÇÕES
    btn_instrucoes = createButton('INSTRUÇÕES');
    btn_instrucoes.position(btn_iniciar_posicaoX, 290);
    btn_instrucoes.addClass("btn btn-jogar");
    btn_instrucoes.mousePressed(tela_instrucoes);
    
    //BOTÃO CRÉDITOS
    btn_creditos = createButton('CRÉDITOS');
    btn_creditos.position(btn_iniciar_posicaoX, 370);
    btn_creditos.addClass("btn btn-jogar");
    btn_creditos.mousePressed(tela_creditos);

    //BOTÃO RECOMPENSA FRIDA KAHLO
    btn_frida = createButton('');
    btn_frida.position(773, 219);
    btn_frida.addClass("btn btn-frida");
    btn_frida.mousePressed(tela_frida);
    //btn_frida.attribute('disabled', '');

    //BOTÃO RECOMPENSA SALVADOR DALÍ
    btn_salvador = createButton('');
    btn_salvador.position(773, 388);
    btn_salvador.addClass("btn btn-salvador");
    btn_salvador.mousePressed(tela_salvador);
    //btn_salvador.attribute('disabled', '');
    
    // BOTÕES FASES
    btn_fase1 = createButton('1');
    btn_fase1.position(500, 225);
    btn_fase1.addClass("btn btn-fase1");
    btn_fase1.mousePressed(tela_fase_1);

    btn_fase2 = createButton('2');
    btn_fase2.position(589, 225);
    btn_fase2.addClass("btn btn-fase1");
    btn_fase2.mousePressed(tela_fase_2);
    btn_fase2.attribute('disabled', '');

    btn_fase3 = createButton('3');
    btn_fase3.position(678, 225);
    btn_fase3.addClass("btn btn-fase1");
    btn_fase3.mousePressed(tela_fase_3);
    btn_fase3.attribute('disabled', '');

    btn_fase4 = createButton('4');
    btn_fase4.position(500, 390);
    btn_fase4.addClass("btn btn-fase1");
    btn_fase4.mousePressed(tela_fase_4);
    btn_fase4.attribute('disabled', '');

    btn_fase5 = createButton('5');
    btn_fase5.position(589, 390);
    btn_fase5.addClass("btn btn-fase1");
    btn_fase5.mousePressed(tela_fase_5);
    btn_fase5.attribute('disabled', '');

    btn_fase6 = createButton('6');
    btn_fase6.position(678, 390);
    btn_fase6.addClass("btn btn-fase1");
    btn_fase6.mousePressed(tela_fase_6);
    btn_fase6.attribute('disabled', '');

    //BOTÕES LETRAS FASE 1
    btn_letraA1 = createButton('A');
    btn_letraA1.position(600, 460);
    btn_letraA1.addClass("btn btn-letra");
    btn_letraA1.mousePressed(letras_fase_1);

    btn_letraL1 = createButton('L');
    btn_letraL1.position(650, 270);
    btn_letraL1.addClass("btn btn-letra");
    btn_letraL1.mousePressed(letras_fase_1);

    btn_letraG1 = createButton('G');
    btn_letraG1.position(550, 360);
    btn_letraG1.addClass("btn btn-letra");
    btn_letraG1.mousePressed(letras_fase_1);

    btn_letraU1 = createButton('U');
    btn_letraU1.position(760, 360);
    btn_letraU1.addClass("btn btn-letra");
    btn_letraU1.mousePressed(letras_fase_1);

    btn_letraN1 = createButton('N');
    btn_letraN1.position(700, 460);
    btn_letraN1.addClass("btn btn-letra");
    btn_letraN1.mousePressed(letras_fase_1);

    //BOTÕES LETRAS FASE 2
    btn_letraL2 = createButton('L');
    btn_letraL2.position(600, 460);
    btn_letraL2.addClass("btn btn-letra");
    btn_letraL2.mousePressed(letras_fase_2);

    btn_letraI2 = createButton('I');
    btn_letraI2.position(650, 270);
    btn_letraI2.addClass("btn btn-letra");
    btn_letraI2.mousePressed(letras_fase_2);

    btn_letraS2 = createButton('S');
    btn_letraS2.position(550, 360);
    btn_letraS2.addClass("btn btn-letra");
    btn_letraS2.mousePressed(letras_fase_2);

    btn_letraT2 = createButton('T');
    btn_letraT2.position(760, 360);
    btn_letraT2.addClass("btn btn-letra");
    btn_letraT2.mousePressed(letras_fase_2);

    btn_letraO2 = createButton('O');
    btn_letraO2.position(700, 460);
    btn_letraO2.addClass("btn btn-letra");
    btn_letraO2.mousePressed(letras_fase_2);

    //BOTÕES LETRAS FASE 3
    btn_letraF3 = createButton('F');
    btn_letraF3.position(600, 460);
    btn_letraF3.addClass("btn btn-letra");
    btn_letraF3.mousePressed(letras_fase_3);

    btn_letraR3 = createButton('R');
    btn_letraR3.position(650, 270);
    btn_letraR3.addClass("btn btn-letra");
    btn_letraR3.mousePressed(letras_fase_3);

    btn_letraE3 = createButton('E');
    btn_letraE3.position(550, 360);
    btn_letraE3.addClass("btn btn-letra");
    btn_letraE3.mousePressed(letras_fase_3);

    btn_letraS3 = createButton('S');
    btn_letraS3.position(760, 360);
    btn_letraS3.addClass("btn btn-letra");
    btn_letraS3.mousePressed(letras_fase_3);

    btn_letraA3 = createButton('A');
    btn_letraA3.position(700, 460);
    btn_letraA3.addClass("btn btn-letra");
    btn_letraA3.mousePressed(letras_fase_3);

    //BOTÕES LETRAS FASE 4
    btn_letraN4 = createButton('N');
    btn_letraN4.position(600, 460);
    btn_letraN4.addClass("btn btn-letra");
    btn_letraN4.mousePressed(letras_fase_4);

    btn_letraO4 = createButton('O');
    btn_letraO4.position(650, 270);
    btn_letraO4.addClass("btn btn-letra");
    btn_letraO4.mousePressed(letras_fase_4);

    btn_letraC4 = createButton('C');
    btn_letraC4.position(550, 360);
    btn_letraC4.addClass("btn btn-letra");
    btn_letraC4.mousePressed(letras_fase_4);

    btn_letraH4 = createButton('H');
    btn_letraH4.position(760, 360);
    btn_letraH4.addClass("btn btn-letra");
    btn_letraH4.mousePressed(letras_fase_4);

    btn_letraE4 = createButton('E');
    btn_letraE4.position(700, 460);
    btn_letraE4.addClass("btn btn-letra");
    btn_letraE4.mousePressed(letras_fase_4);

    //BOTÕES LETRAS FASE 5
    btn_letraP5 = createButton('P');
    btn_letraP5.position(600, 460);
    btn_letraP5.addClass("btn btn-letra");
    btn_letraP5.mousePressed(letras_fase_5);

    btn_letraO5 = createButton('O');
    btn_letraO5.position(650, 270);
    btn_letraO5.addClass("btn btn-letra");
    btn_letraO5.mousePressed(letras_fase_5);

    btn_letraD5 = createButton('D');
    btn_letraD5.position(550, 360);
    btn_letraD5.addClass("btn btn-letra");
    btn_letraD5.mousePressed(letras_fase_5);

    btn_letraE5 = createButton('E');
    btn_letraE5.position(760, 360);
    btn_letraE5.addClass("btn btn-letra");
    btn_letraE5.mousePressed(letras_fase_5);

    btn_letraR5 = createButton('R');
    btn_letraR5.position(700, 460);
    btn_letraR5.addClass("btn btn-letra");
    btn_letraR5.mousePressed(letras_fase_5);

    //BOTÕES LETRAS FASE 6
    btn_letraB6 = createButton('B');
    btn_letraB6.position(600, 460);
    btn_letraB6.addClass("btn btn-letra");
    btn_letraB6.mousePressed(letras_fase_6);
    
    btn_letraU6 = createButton('U');
    btn_letraU6.position(650, 270);
    btn_letraU6.addClass("btn btn-letra");
    btn_letraU6.mousePressed(letras_fase_6);

    btn_letraE6 = createButton('E');
    btn_letraE6.position(550, 360);
    btn_letraE6.addClass("btn btn-letra");
    btn_letraE6.mousePressed(letras_fase_6);
    
    btn_letraN6 = createButton('N');
    btn_letraN6.position(760, 360);
    btn_letraN6.addClass("btn btn-letra");
    btn_letraN6.mousePressed(letras_fase_6);
    
    btn_letraO6 = createButton('O');
    btn_letraO6.position(700, 460);
    btn_letraO6.addClass("btn btn-letra");
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

//CRIANDO FUNÇÕES PARA AS TELAS

//TELA INICIAL (MENU)
function tela_inicial() {
    tela = 1;
    clear();
    mostrar_menu();
   
    background(cor_principal);
    image(logo, 255, 130, 400, 400);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

//TELA INSTRUÇÕES
function tela_instrucoes() {
    tela = 2;
    clear();
    esconder_menu();
    
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text("INSTRUÇÕES", 700, 103);

    textAlign(CENTER);
    textSize(20); 
    textFont(font_regular);
    fill('white');
    text("O objetivo deste jogo é encontrar anagramas. Anagrama é uma espécie de jogo de palavras criado" + "\n" +
    "com a reorganização das letras de uma palavra ou expressão para produzir outras palavras ou expressões," + "\n" + 
    "utilizando todas as letras originais exatamente uma vez. Para jogar, basta arrastar o mouse entre as letras dispostas" + "\n" +
    "na tela conectando cada letra, e aguardar para descobrir se você acertou. Em síntese, você terá que escrever e encontrar" + "\n" + 
    " cada palavra do zero. Serão seis fases e ao completar três você ganhará como recompensa um personagem icônico hispanohablante" + "\n" + 
    "e saberá um pouco da história dele. Ao completar todas as fases, você irá aprender a escrita de novas palavras da língua espanhola." , 700, 250);
}

//TELA CRÉDITOS
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
    text("Jogo de Anagramas de Palavras desenvolvido pela aluna"  + "\n" + 
    "Maria Cecília em conjunto com a Professora Maria Clara "  + "\n" +
    "da disciplina de espanhol, no ano de 2021,  ainda não publicado.", 700, 285);
}

//TELA FASES
function tela_fases() {
    tela = 4;
    clear();
    mostrar_btn_fases();
    btn_frida.show();
    btn_salvador.show();

    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);    
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill(cor_amarelo);
    text("FASES", 645, 103);
}

//TELA RECOMPENSA (FRIDA KAHLO)
function tela_frida() {
    tela = 11;
    clear();
    esconder_menu();
    
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
    
    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill('#ffde39');
    text("FRIDA KAHLO", 645, 130);

    textAlign(CENTER);
    textSize(18);
    textFont(font_regular);
    fill('white');
    text("Magdalena Carmen Frida Kahlo y Calderón, mais conhecida como Frida Kahlo, foi uma importante pintora mexicana do século XX." + "\n" +
    "Frida nasceu na cidade de Coyoacán no México, em 6 de julho de 1907.  Ela é considerada uma artista que fez parte do Surrealismo." + "\n" +
    "Entretanto, Frida negava que era surrealista e dizia que não pintava sonhos, mas sim, sua própria realidade. Frida Kahlo constituiu nas suas"  + "\n" + 
    "obras um poder único de expressão de sua cultura mexicana e de percepções sobre si mesma. Além da força na pintura, ela também foi um"  + "\n" +
    "símbolo de envolvimento político. Se destacou ao defender o resgate à cultura dos astecas como forma de oposição ao sistema imperialista" + "\n" +
    "cultural europeu. Nos dias atuais, Frida tornou-se símbolo feminista não só pelas pinturas, mas por seu engajamento e empoderamento social" + "\n" +
    "diante a um cenário ainda conservador. Frida Kahlo morreu na cidade de Coyoacán, no México, em 13 de julho de 1954" + "\n" + 
    "e é até hoje uma grande inspiração para muitas mulheres.", 665, 250);

}

//TELA RECOMPENSA (SALVADOR DALÍ)
function tela_salvador() {
    tela = 12;
    clear();
    esconder_menu();
    
    background(cor_principal);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);

    textAlign(CENTER);
    textSize(35);
    textFont(font_regular);
    fill('#ffde39');
    text("SALVADOR DALÍ", 645, 130);

    textAlign(CENTER);
    textSize(20);
    textFont(font_regular);
    fill('white');
    text("Salvador Domingo Felipe Jacinto Dalí i Domènech, mais conhecido como Salvador Dalí, nasceu em 11 de maio de 1904, na cidade" + "\n" + 
    "espanhola de Figueres, na região da Catalunha, na Espanha. Salvador Dalí foi um importante pintor catalão, conhecido pelo seu trabalho" + "\n" + 
    "surrealista, ele é considerado um dos principais artistas do século XX. Em sua carreira, DalÍ se destacou não somente na pintura como na" + "\n" + 
    "escultura, além de ter grande colaboração no teatro, na moda, na fotografia, no cinema e até no campo do design. No cinema Dalí" + "\n" + 
    "escreveu vários roteiros. Dalí morreu de pneumonia e falha cardíaca na cidade onde nasceu e foi sepultado no átrio principal de" + "\n" + 
    "seu teatro-museu. Suas últimas obras datam de 1983 E até hoje suas obras são lembradas e apreciadas por muitos.", 665, 250);
}

//FASE 1
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
    noStroke();
    fill(cor_secundaria);
    ellipse(largura_central, 400, 300, 300);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function letras_fase_1(){
    
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

//FASE 2
const letrasF2 = {
    'letra1': 'L',//0
    'letra2': 'I',//1
    'letra3': 'S',//2
    'letra4': 'T',//3
    'letra5': 'O',//4
    'BOTÃO' : 'PRÓXIMA FASE',//5
}

let resposta_fase_2 = [];
let quantidade_acertada_f2 = [];

function tela_fase_2() {
    tela = 6;
    clear();

    esconder_btn_fases();
    btn_letraL2.show();
    btn_letraI2.show();
    btn_letraS2.show();
    btn_letraT2.show();
    btn_letraO2.show();

    background(cor_principal);
    noStroke();
    fill(cor_secundaria);
    rect(largura_central-250, 100, 500, 70, 20);
    
    textSize(20);
    textFont(font_regular);
    fill(cor_amarelo);
    text("Acerte 3 palavras para passar de fase!", 700, 120);
    noStroke();
    fill(cor_secundaria);
    ellipse(largura_central, 400, 300, 300);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function letras_fase_2(){

    resposta_fase_2.push(this.html());
    console.log(quantidade_acertada_f2.length);

    if ( quantidade_acertada_f2.length <=3 ) {
        //Listo
        if ( letrasF2.letra1 == resposta_fase_2[0] && letrasF2.letra2 == resposta_fase_2[1] && letrasF2.letra3 == resposta_fase_2[2] && letrasF2.letra4 == resposta_fase_2[3] && letrasF2.letra5 == resposta_fase_2[4]) {
            resposta_fase_2 = [];
            quantidade_acertada_f2.push('Listo');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f2, 700, 150);
        }  
        //Liso
        if ( letrasF2.letra1 == resposta_fase_2[0] && letrasF2.letra2 == resposta_fase_2[1] && letrasF2.letra3 == resposta_fase_2[2] && letrasF2.letra5 == resposta_fase_2[3] ) {
            resposta_fase_2 = [];
            quantidade_acertada_f2.push('Liso');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f2, 700, 150);
        }
          //Lis
          if ( letrasF2.letra1 == resposta_fase_2[0] && letrasF2.letra2 == resposta_fase_2[1] && letrasF2.letra3 == resposta_fase_2[2] ) {
            resposta_fase_2 = [];
            quantidade_acertada_f2.push('Lis');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f2, 700, 150);
        }
        //Los
        if ( letrasF2.letra1 == resposta_fase_2[0] && letrasF2.letra5 == resposta_fase_2[1] && letrasF2.letra3 == resposta_fase_2[2] ) {
            resposta_fase_2 = [];
            quantidade_acertada_f2.push('Los');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f2, 700, 150);
        }
        //Sol
        if ( letrasF2.letra3 == resposta_fase_2[0] && letrasF2.letra5 == resposta_fase_2[1] && letrasF2.letra1 == resposta_fase_2[2] ) {
            resposta_fase_2 = [];
            quantidade_acertada_f2.push('Sol');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f2, 700, 150);
        }
      
    } else {
        btn_fase3.removeAttribute('disabled', '');
        alert('Você passou de fase, volte para a tela anterior e vá para a fase 3.');
    }
     
} 

//FASE 3
const letrasF3 = {
    'letra1': 'F',
    'letra2': 'R',
    'letra3': 'E',
    'letra4': 'S',
    'letra5': 'A',
}

let resposta_fase_3 = [];
let quantidade_acertada_f3 = [];

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
    noStroke();
    fill(cor_secundaria);
    rect(largura_central-250, 100, 500, 70, 20);
    
    textSize(20);
    textFont(font_regular);
    fill(cor_amarelo);
    text("Acerte 3 palavras para passar de fase!", 700, 120);
    noStroke();
    fill(cor_secundaria);
    ellipse(largura_central, 400, 300, 300);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function letras_fase_3(){
    
    resposta_fase_3.push(this.html());
    console.log(quantidade_acertada_f3.length);

    if ( quantidade_acertada_f3.length <=2 ) {
        //Fresa
        if ( letrasF3.letra1 == resposta_fase_3[0] && letrasF3.letra2 == resposta_fase_3[1] && letrasF3.letra3 == resposta_fase_3[2] && letrasF3.letra4 == resposta_fase_3[3] && letrasF3.letra5 == resposta_fase_3[4]) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Fresa');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
        //Frase
        if ( letrasF3.letra1 == resposta_fase_3[0] && letrasF3.letra2 == resposta_fase_3[1] && letrasF3.letra5 == resposta_fase_3[2] && letrasF3.letra4 == resposta_fase_3[3] && letrasF3.letra3 == resposta_fase_3[4]) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Frase');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
        //Eras
        if ( letrasF3.letra3 == resposta_fase_3[0] && letrasF3.letra2 == resposta_fase_3[1] && letrasF3.letra5 == resposta_fase_3[2] && letrasF3.letra4 == resposta_fase_3[3] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Eras');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
        //Fase
        if ( letrasF3.letra1 == resposta_fase_3[0] && letrasF3.letra5 == resposta_fase_3[1] && letrasF3.letra4 == resposta_fase_3[2] && letrasF3.letra3 == resposta_fase_3[3] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Fase');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }   
        //Sera
        if ( letrasF3.letra4 == resposta_fase_3[0] && letrasF3.letra3 == resposta_fase_3[1] && letrasF3.letra2 == resposta_fase_3[2] && letrasF3.letra5 == resposta_fase_3[3] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Sera');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
          //Fea
          if ( letrasF3.letra1 == resposta_fase_3[0] && letrasF3.letra3 == resposta_fase_3[1] && letrasF3.letra5 == resposta_fase_3[2]&& letrasF3.letra4 == resposta_fase_3[2] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Feas');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        } 
        //Era
        if ( letrasF3.letra3 == resposta_fase_3[0] && letrasF3.letra2 == resposta_fase_3[1] && letrasF3.letra5 == resposta_fase_3[2] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Era');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
        //Esa
        if ( letrasF3.letra3 == resposta_fase_3[0] && letrasF3.letra4 == resposta_fase_3[1] && letrasF3.letra5 == resposta_fase_3[2] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Esa');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }    
        //Fea
        if ( letrasF3.letra1 == resposta_fase_3[0] && letrasF3.letra3 == resposta_fase_3[1] && letrasF3.letra5 == resposta_fase_3[2] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Fea');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
        //Sea
        if ( letrasF3.letra4 == resposta_fase_3[0] && letrasF3.letra3 == resposta_fase_3[1] && letrasF3.letra5 == resposta_fase_3[2] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Sea');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
        //Ser
        if ( letrasF3.letra4 == resposta_fase_3[0] && letrasF3.letra3 == resposta_fase_3[1] && letrasF3.letra2 == resposta_fase_3[2] ) {
            resposta_fase_3 = [];
            quantidade_acertada_f3.push('Ser');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f3, 700, 150);
        }  
    }else {
        btn_fase4.removeAttribute('disabled', '');
        btn_frida.removeAttribute('disabled', '');
        alert('Você passou de fase, volte para a tela anterior e vá para a fase 4.');
    }
} 

//FASE 4
const letrasF4 = {
    'letra1': 'N',
    'letra2': 'O',
    'letra3': 'C',
    'letra4': 'H',
    'letra5': 'E',
}

let resposta_fase_4 = [];
let quantidade_acertada_f4 = [];

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
    noStroke();
    fill(cor_secundaria);
    rect(largura_central-250, 100, 500, 70, 20);
    
    textSize(20);
    textFont(font_regular);
    fill(cor_amarelo);
    text("Acerte 3 palavras para passar de fase!", 700, 120);
    noStroke();
    fill(cor_secundaria);
    ellipse(largura_central, 400, 300, 300);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function letras_fase_4(){
    
    resposta_fase_4.push(this.html());
    console.log(quantidade_acertada_f4.length);

    if ( quantidade_acertada_f4.length <=2 ) {
        //Noche
        if ( letrasF4.letra1 == resposta_fase_4[0] && letrasF4.letra2 == resposta_fase_4[1] && letrasF4.letra3 == resposta_fase_4[2] && letrasF4.letra4 == resposta_fase_4[3] && letrasF4.letra5 == resposta_fase_4[4]) {
            resposta_fase_4 = [];
            quantidade_acertada_f4.push('Noche');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f4, 700, 150);
        }  
        //Echo
         if ( letrasF4.letra5 == resposta_fase_4[0] && letrasF4.letra3 == resposta_fase_4[1] && letrasF4.letra4 == resposta_fase_4[2] && letrasF4.letra2 == resposta_fase_4[3] ) {
            resposta_fase_4 = [];
            quantidade_acertada_f4.push('Echo');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f4, 700, 150);
        }  
         //Ceno
         if ( letrasF4.letra3 == resposta_fase_4[0] && letrasF4.letra5 == resposta_fase_4[1] && letrasF4.letra1 == resposta_fase_4[2] && letrasF4.letra2 == resposta_fase_4[3] ) {
            resposta_fase_4 = [];
            quantidade_acertada_f4.push('Ceno');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f4, 700, 150);
        }  
         //Once
         if ( letrasF4.letra2 == resposta_fase_4[0] && letrasF4.letra1 == resposta_fase_4[1] && letrasF4.letra3 == resposta_fase_4[2] && letrasF4.letra5 == resposta_fase_4[3] ) {
            resposta_fase_4 = [];
            quantidade_acertada_f4.push('Once');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f4, 700, 150);
        }  
         //Che
         if ( letrasF4.letra3 == resposta_fase_4[0] && letrasF4.letra4 == resposta_fase_4[1] && letrasF4.letra5 == resposta_fase_4[2] ) {
            resposta_fase_4 = [];
            quantidade_acertada_f4.push('Che');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f4, 700, 150);
        } 
         //Con
         if ( letrasF4.letra3 == resposta_fase_4[0] && letrasF4.letra2 == resposta_fase_4[1] && letrasF4.letra1 == resposta_fase_4[2] ) {
            resposta_fase_4 = [];
            quantidade_acertada_f4.push('Con');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f4, 700, 150);
        }  
         //Eco
         if ( letrasF4.letra5 == resposta_fase_4[0] && letrasF4.letra3 == resposta_fase_4[1] && letrasF4.letra2 == resposta_fase_4[2] ) {
            resposta_fase_4 = [];
            quantidade_acertada_f4.push('Eco');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f4, 700, 150);
        } 
    }else {
        btn_fase5.removeAttribute('disabled', '');
        alert('Você passou de fase, volte para a tela anterior e vá para a fase 5.');
    }
} 

//FASE 5
const letrasF5 = {
    'letra1': 'P',
    'letra2': 'O',
    'letra3': 'D',
    'letra4': 'E',
    'letra5': 'R',
}

let resposta_fase_5 = [];
let quantidade_acertada_f5 = [];

function tela_fase_5() {
    tela = 9;
    clear();
    
    esconder_btn_fases();
    btn_letraP5.show();
    btn_letraO5.show();
    btn_letraD5.show();
    btn_letraE5.show();
    btn_letraR5.show();
   
    background(cor_principal);
    noStroke();
    fill(cor_secundaria);
    rect(largura_central-250, 100, 500, 70, 20);
    
    textSize(20);
    textFont(font_regular);
    fill(cor_amarelo);
    text("Acerte 3 palavras para passar de fase!", 700, 120);
    noStroke();
    fill(cor_secundaria);
    ellipse(largura_central, 400, 300, 300);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function letras_fase_5(){

    resposta_fase_5.push(this.html());
    console.log(quantidade_acertada_f5.length);

    if ( quantidade_acertada_f5.length <=2 ) {
        //Poder
        if ( letrasF5.letra1 == resposta_fase_5[0] && letrasF5.letra2 == resposta_fase_5[1] && letrasF5.letra3 == resposta_fase_5[2] && letrasF5.letra4 == resposta_fase_5[3] && letrasF5.letra5 == resposta_fase_5[4]) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Poder');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Pedro
        if ( letrasF5.letra1 == resposta_fase_5[0] && letrasF5.letra4 == resposta_fase_5[1] && letrasF5.letra3 == resposta_fase_5[2] && letrasF5.letra5 == resposta_fase_5[3] && letrasF5.letra2 == resposta_fase_5[4]) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Pedro');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Pode
         if ( letrasF5.letra1 == resposta_fase_5[0] && letrasF5.letra2 == resposta_fase_5[1] && letrasF5.letra3 == resposta_fase_5[2] && letrasF5.letra4 == resposta_fase_5[3] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Pode');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Pedo
         if ( letrasF5.letra1 == resposta_fase_5[0] && letrasF5.letra4 == resposta_fase_5[1] && letrasF5.letra3 == resposta_fase_5[2] && letrasF5.letra2 == resposta_fase_5[3] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Pedo');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Peor
         if ( letrasF5.letra1 == resposta_fase_5[0] && letrasF5.letra4 == resposta_fase_5[1] && letrasF5.letra2 == resposta_fase_5[2] && letrasF5.letra5 == resposta_fase_5[3] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Peor');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Pero
         if ( letrasF5.letra1 == resposta_fase_5[0] && letrasF5.letra4 == resposta_fase_5[1] && letrasF5.letra5 == resposta_fase_5[2] && letrasF5.letra2 == resposta_fase_5[3] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Pero');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Ore
         if ( letrasF5.letra2 == resposta_fase_5[0] && letrasF5.letra5 == resposta_fase_5[1] && letrasF5.letra4 == resposta_fase_5[2] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Ore');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Por
         if ( letrasF5.letra1 == resposta_fase_5[0] && letrasF5.letra2 == resposta_fase_5[1] && letrasF5.letra5 == resposta_fase_5[2] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Por');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
         //Red
         if ( letrasF5.letra5 == resposta_fase_5[0] && letrasF5.letra4 == resposta_fase_5[1] && letrasF5.letra3 == resposta_fase_5[2] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Red');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
        //Roe
        if ( letrasF5.letra5 == resposta_fase_5[0] && letrasF5.letra2 == resposta_fase_5[1] && letrasF5.letra4 == resposta_fase_5[2] ) {
            resposta_fase_5 = [];
            quantidade_acertada_f5.push('Roe')
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f5, 700, 150);
        }
    }else {
        btn_fase6.removeAttribute('disabled', '');
        alert('Você passou de fase, volte para a tela anterior e vá para a fase 6.');
    }
} 

//FASE 6
const letrasF6 = {
    'letra1': 'B',
    'letra2': 'U',
    'letra3': 'E',
    'letra4': 'N',
    'letra5': 'O',
}

let resposta_fase_6 = [];
let quantidade_acertada_f6 = [];

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
    noStroke();
    fill(cor_secundaria);
    rect(largura_central-250, 100, 500, 70, 20);
    
    textSize(20);
    textFont(font_regular);
    fill(cor_amarelo);
    text("Acerte 3 palavras para passar de fase!", 700, 120);
    noStroke();
    fill(cor_secundaria);
    ellipse(largura_central, 400, 300, 300);
    image(bg_pixel, 0, windowHeight-60, windowWidth, 60);
}

function letras_fase_6(){
    
    resposta_fase_6.push(this.html());
    console.log(quantidade_acertada_f6.length);

    if ( quantidade_acertada_f6.length <=2 ) {
        //Bueno
        if ( letrasF6.letra1 == resposta_fase_6[0] && letrasF6.letra2 == resposta_fase_6[1] && letrasF6.letra3 == resposta_fase_6[2] && letrasF6.letra4 == resposta_fase_6[3] && letrasF6.letra5 == resposta_fase_6[4]) {
            resposta_fase_6 = [];
            quantidade_acertada_f6.push('Bueno');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f6, 700, 150);
        }
        //Buen
        if ( letrasF6.letra1 == resposta_fase_6[0] && letrasF6.letra2 == resposta_fase_6[1] && letrasF6.letra3 == resposta_fase_6[2] && letrasF6.letra4 == resposta_fase_6[3]) {
            resposta_fase_6 = [];
            quantidade_acertada_f6.push('Buen');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f6, 700, 150);
        }
        //Nube
        if ( letrasF6.letra4 == resposta_fase_6[0] && letrasF6.letra2 == resposta_fase_6[1] && letrasF6.letra1 == resposta_fase_6[2] && letrasF6.letra3 == resposta_fase_6[3]) {
            resposta_fase_6 = [];
            quantidade_acertada_f6.push('Nube');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f6, 700, 150);
        }
        //Neo
        if ( letrasF6.letra4 == resposta_fase_6[0] && letrasF6.letra3 == resposta_fase_6[1] && letrasF6.letra5 == resposta_fase_6[2] ) {
            resposta_fase_6 = [];
            quantidade_acertada_f6.push('Neo');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f6, 700, 150);
        }
        //Une
        if ( letrasF6.letra2 == resposta_fase_6[0] && letrasF6.letra4 == resposta_fase_6[1] && letrasF6.letra3 == resposta_fase_6[2] ) {
            resposta_fase_6 = [];
            quantidade_acertada_f6.push('Une');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f6, 700, 150);
        }
        //Uno
        if ( letrasF6.letra2 == resposta_fase_6[0] && letrasF6.letra4 == resposta_fase_6[1] && letrasF6.letra5 == resposta_fase_6[2] ) {
            resposta_fase_6 = [];
            quantidade_acertada_f6.push('Uno');
            fill(cor_secundaria);
            rect(largura_central-250, 135, 500, 20);
            fill(cor_amarelo);
            text(quantidade_acertada_f6, 700, 150);
        }
    }else {
        //btn_salvador.removeAttribute('disabled', '');
        alert('Parabéns, você concluiu todas as fases!.');
    }
}

//FUNÇÕES PARA MOSTRAR E ESCONDER BOTÕES

function esconder_menu() {
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
    btn_frida.hide();
    btn_salvador.hide();
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraS2.hide();
    btn_letraT2.hide();
    btn_letraO2.hide();
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
    btn_letraP5.hide();
    btn_letraO5.hide();
    btn_letraD5.hide();
    btn_letraE5.hide();
    btn_letraR5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
}

function mostrar_menu() {
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
    btn_frida.hide();
    btn_salvador.hide();
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraS2.hide();
    btn_letraT2.hide();
    btn_letraO2.hide();
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
    btn_letraP5.hide();
    btn_letraO5.hide();
    btn_letraD5.hide();
    btn_letraE5.hide();
    btn_letraR5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
}

function esconder_btn_fases() {
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
    btn_frida.hide();
    btn_salvador.hide();
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraS2.hide();
    btn_letraT2.hide();
    btn_letraO2.hide();
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
    btn_letraP5.hide();
    btn_letraO5.hide();
    btn_letraD5.hide();
    btn_letraE5.hide();
    btn_letraR5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
}

function mostrar_btn_fases(){
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
    btn_frida.show();
    btn_salvador.show();
    btn_letraA1.hide();
    btn_letraL1.hide();
    btn_letraG1.hide();
    btn_letraU1.hide();
    btn_letraN1.hide();
    btn_letraL2.hide();
    btn_letraI2.hide();
    btn_letraS2.hide();
    btn_letraT2.hide();
    btn_letraO2.hide();
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
    btn_letraP5.hide();
    btn_letraO5.hide();
    btn_letraD5.hide();
    btn_letraE5.hide();
    btn_letraR5.hide();
    btn_letraB6.hide();
    btn_letraU6.hide();
    btn_letraE6.hide();
    btn_letraN6.hide();
    btn_letraO6.hide();
}