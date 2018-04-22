import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { CorpoDoSiteModule } from './corpo-do-site/corpo-do-site.module';
import { MenuComponent } from './corpo-do-site/menu/menu.component';
import { CardsComponent } from './corpo-do-site/cards/cards.component';
import { SobreComponent } from './corpo-do-site/sobre/sobre.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MenuComponent,
    CardsComponent,
    SobreComponent
  ],
  imports: [
    BrowserModule,
    CorpoDoSiteModule
  ],
  providers: [],
  bootstrap: [AppComponent],

  
})
export class AppModule { }
