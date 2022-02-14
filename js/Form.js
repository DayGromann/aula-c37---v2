class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Digite Seu Nome");
    this.botaoJogar = createButton("Jogar");
    this.tituloImg = createImg("./assets/TITULO.png", "game title");
    this.mensagemAguardar = createElement("h2");
  }

  configurarPosicao() {
    this.tituloImg.position(120, 50);
    this.input.position(width / 2 - 110, height / 2 - 80);
    this.botaoJogar.position(width / 2 - 90, height / 2 - 20);
    this.mensagemAguardar.position(width / 2 - 300, height / 2 - 100);
  }

  configurarEstilo() {
    this.tituloImg.class("gameTitle");
    this.input.class("customInput");
    this.botaoJogar.class("customButton");
    this.mensagemAguardar.class("mensagemAguardar");
  }

  esconder() {
    this.mensagemAguardar.hide();
    this.botaoJogar.hide();
    this.input.hide();
  }

  enviarFormulario() {
    this.botaoJogar.mousePressed(() => {
      this.input.hide();
      this.botaoJogar.hide();
      
      var mensagem = `Olá ${this.input.value()} </br> espere o outro jogador entrar...`;
      this.mensagemAguardar.html(mensagem);

      contagemJogadores += 1;
      jogador.nome = this.input.value();
      jogador.indice = contagemJogadores;
      jogador.adicionar();
      jogador.atualizarContagem(contagemJogadores);

    });
  }


  mostrar() {
    this.configurarPosicao();
    this.configurarEstilo();
    this.enviarFormulario();
  }
}
