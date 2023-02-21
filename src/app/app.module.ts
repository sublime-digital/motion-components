import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from '../library/card/card.component';
import { NavbarComponent } from '../library/navbar/navbar.component';
import { ModalComponent } from '../library/modal/modal.component';
import { AuthComponent } from '../library/auth/auth.component';
import { SpinnersComponent } from '../library/spinners/spinners.component';
import { MIconsComponent } from '../library/m-icons/m-icons.component';
import { ButtonsComponent } from '../library/buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    NavbarComponent,
    ModalComponent,
    AuthComponent,
    SpinnersComponent,
    MIconsComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
