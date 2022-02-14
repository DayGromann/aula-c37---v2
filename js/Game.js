class Jogo {
  constructor() {}

  verificarEstado() {
    var obterEstadoRef = database.ref("gameState");
    obterEstadoRef.on("value", function(data) {
      estadoJogo = data.val();
    });
  }

  atualizarEstado(estado){
    database.ref('/').update({
      gameState: estado
    })
  }

  iniciar() {
    jogador = new Jogador();
    jogador.verificarContagem();

    formulario = new Form();
    formulario.mostrar();

    carro1 = createSprite(width/2 - 50, height-100);
    carro1.addImage("carro1", carro1_img);
    carro1.scale = 0.07;

    carro2 = createSprite(width/2 + 50, height-100);
    carro2.addImage("carro2", carro2_img);
    carro2.scale = 0.07;

    carros = [carro1, carro2];
  }

  jogar(){
    Jogador.obterInfoJogadores();

    if(todosJogadores != undefined){
      image(pista_img, 0, -height*5, width, height*6);
      drawSprites();
    }
  }
}
