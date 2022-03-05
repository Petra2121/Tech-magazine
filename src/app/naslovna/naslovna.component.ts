import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clanak } from '../clanak.model';

@Component({
  selector: 'app-naslovna',
  templateUrl: './naslovna.component.html',
  styleUrls: ['./naslovna.component.css']
})
export class NaslovnaComponent implements OnInit {

  constructor(public _router: Router) { }
  a: string = 'smartphones';
  b: string = 'AI';
  c: string = 'VR';
  d: string = 'software';
   
  
  

  novaKomponenta(x) {
    console.log(x);
    this._router.navigate(['/popis-clanaka'], { queryParams: 
      { aboutData: JSON.stringify(x) }} );

  }
  ngOnInit() {
    
  }
  public username: boolean = false;
  Prijava () {
    var ime = prompt("Upiši korisničko ime: ", "mihaelawang");
    var lozinka = prompt("Upiši lozinku: ", "mojalozinka12345");

    if (ime === 'petralovric' || ime === 'mihaelawang')
      {
        this.username = true; 
      }

      if(this.username)
    {
      console.log("PLSSSSSSSSSSSSSSS");
      this.a = "smartphones1";
      this.b = "AI1";
      this.c = "VR1";
      this.d = "software1";
    }
  }

Odjava () {
  this.username = false;

  if(!this.username)
    {
      console.log("PLSSSSSSSSSSSSSSS");
      this.a = "smartphones1";
      this.b = "AI1";
      this.c = "VR1";
      this.d = "software1";
    }
}



}