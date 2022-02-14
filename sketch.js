var canvas;
var backgroundImage;
var pista_img, carro1_img, carro2_img;
var database, estadoJogo;
var formulario, jogador, jogo
var contagemJogadores;
var todosJogadores;
var carro1, carro2, carros;

function preload() {
  backgroundImage = loadImage("./assets/planodefundo.png");

  pista_img = loadImage("./assets/pista.png");
  carro1_img = loadImage("./assets/car1.png");
  carro2_img = loadImage("./assets/car2.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  jogo = new Jogo();
  jogo.verificarEstado();
  jogo.iniciar();
}

function draw() {
  background(backgroundImage);

  if(contagemJogadores == 2){
    jogo.atualizarEstado(1);
  }

  if(estadoJogo == 1){
    jogo.jogar();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
