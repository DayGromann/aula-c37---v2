class Jogador {
  constructor() {
    this.nome = null;
    this.indice = null;
    this.posicaoX = 0;
    this.posicaoY = 0;
  }

  verificarContagem() {
    var playerCountRef = database.ref("playerCount");
    playerCountRef.on("value", data => {
      contagemJogadores = data.val();
    });
  }

  atualizarContagem(qtde) {
    database.ref("/").update({
      playerCount: qtde
    });
  }

  adicionar(){

    var indiceJogador = "players/player" + this.indice;

    if(this.indice == 1){
      this.posicaoX = width/2 - 100;
    }else{
      this.posicaoX = width/2 + 100;
    }

    database.ref(indiceJogador).set({
      name: this.nome,
      positionX: this.posicaoX,
      positionY: this.posicaoY
    })

  }

  static obterInfoJogadores(){
    database.ref("players").on("value", data => {
      todosJogadores = data.val();
    })
  }
}
