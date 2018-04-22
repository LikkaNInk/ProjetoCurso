import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  /* carrosel */
  cp2: string = '../../assets/image/pokefest.jpg';
  cpf: string = '../../assets/image/pokego.jpg';
  cp1: string = '../../assets/image/pokego2.jpg';








  constructor() { }

  ngOnInit() {
  }

}
