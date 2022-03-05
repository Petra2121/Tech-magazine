import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopisClanakaComponent } from './popis-clanaka/popis-clanaka.component';
import { AdminskoSuceljeComponent } from './adminsko-sucelje/adminsko-sucelje.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ClanakComponent } from './popis-clanaka/clanak/clanak.component';

@NgModule({
  declarations: [
    AppComponent,
    PopisClanakaComponent,
    AdminskoSuceljeComponent,
    NaslovnaComponent,
    MainNavComponent,
    ClanakComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

