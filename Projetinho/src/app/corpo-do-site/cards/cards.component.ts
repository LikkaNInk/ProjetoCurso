import { Component, OnInit } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {


  cards: string[] = ["time red", "time blue", "time yellow"];
  /* variavies para imagens */
  caminho_value: string = '../../assets/image/valor.jpg'
  caminho_mystic: string = '../../assets/image/mystic.jpg'
  caminho_instinct: string = '../../assets/image/instinct.jpg'
  /* variaveis para os titulos */
  tv: string = "Time Value";
  tm: string = "Time Mystic";
  ti: string = "Time Instinct";
  /*variaveis para o conteudo */
  cv: string = "A equipe de todos aqueles que seguem seus instintos com plena confiança.";
  cm: string = "O time que se dedica a estudar a evolução dos pokémons e em toda a ciência que rodeia esses seres.";
  ci: string = "Essa é a equipe que acredita em treinar duro para vencer e ser o melhor.";
  /* variaveis para a descrição */
  dv: string = "O Time Valentia é destinado para aqueles que treinam duro para evoluir suas habilidades. A líder, Candela, é a mais corajosa dos três e acredita que a disciplina é a chave para o sucesso e pesquisa maneiras de aumentar o poder natural dos Pokémon. O mascote do Team Valor é o Moltres.";
  dm: string = "O Time Místico é exatamente o oposto do Time Instinto. Para Blanche, líder dos azuis, manter a calma e analisar tudo são as chaves para o sucesso numa batalha Pokémon. A chefe do Mystic é a mais inteligente do grupo, estuda as evoluções e se interessa por toda a ciência do mundo Pokémon." +
    " O mascote do Team Mystic é o Articuno.";
  di: string = "Como o próprio nome já sugere, é o time dos instintivos. O líder Spark acredita que, se o treinador confiar em seus instintos, a derrota nunca virá. O cabeça da equipe amarela estuda a intuição Pokémon, e o mascote do Team Instinct é o Zapdos.";
  /* booleanas para ngIf*/
  mostrarinfo: boolean = true;
  mostrarinfo2: boolean = true;
  mostrarinfo3: boolean = true;
  /*metodos para ngIf - else */
  public esconderinfo() {
    this.mostrarinfo = false;
  }
  public esconderinfo2() {
    this.mostrarinfo2 = false;
  }
  public esconderinfo3() {
    this.mostrarinfo3 = false;
  }
  /*metodos para voltar */
  public Voltar() {
    this.mostrarinfo = true;
  }
  public Voltar2() {
    this.mostrarinfo2 = true;
  }
  public Voltar3() {
    this.mostrarinfo3 = true;
  }
  /*metodo de alerta Event Binding*/
  public Alerta() {

    alert('Parabéns, você se juntou ao Time!')
  }

  constructor() { }

  ngOnInit() {
  }

}
