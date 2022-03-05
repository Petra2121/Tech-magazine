import { ClanakComponent } from './popis-clanaka/clanak/clanak.component';
import { NaslovnaComponent } from './naslovna/naslovna.component';
import { PopisClanakaComponent } from './popis-clanaka/popis-clanaka.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', redirectTo: 'naslovna', pathMatch: 'full' },
  { path: 'popis-clanaka', component: PopisClanakaComponent },
  { path: '', component: NaslovnaComponent },
  { path: 'popis-clanaka/clanak', component: ClanakComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



