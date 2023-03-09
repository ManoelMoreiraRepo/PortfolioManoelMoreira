import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit{
  persona: persona = null;
  private tokenService: TokenService;
  
  constructor(public personaService: PersonaService,
    tokenService: TokenService){

  }
  
  ngOnInit(): void {
  this.cargarPersonas();
  if (this.tokenService.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged=false;
  }  
  }
  isLogged=false;
  
  cargarPersonas(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data})
  }
}
