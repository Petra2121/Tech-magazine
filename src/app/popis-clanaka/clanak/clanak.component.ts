import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-clanak',
  templateUrl: './clanak.component.html',
  styleUrls: ['./clanak.component.css']
})
export class ClanakComponent implements OnInit {

  username: boolean = true;
  textMessages = [];
  textUserNames = [];
  arrayName = [];
  newName="";
  newComment="";
  
  pushItem = function(){
 
    if (this.newComment != "")
    {
      this.arrayName.push(
     {
     comment:this.newComment});
     }

     
     this.newComment = "";
  }

  Prijava () {
    var ime = prompt("Upiši korisničko ime: ", "mihaelawang");
    var lozinka = prompt("Upiši lozinku: ", "mojalozinka12345");

    if (ime === 'petralovric' || ime === 'mihaelawang')
      {
        this.username = true; 
      }

  }

Odjava () {
  this.username = false;
}
  constructor() { }

  ngOnInit() {
  }

}
