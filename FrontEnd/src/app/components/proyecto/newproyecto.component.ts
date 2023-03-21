import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css'],
})
export class NewproyectoComponent implements OnInit {
  nombre: string = '';
  descripcion: string = '';
  link: string = '';
  img: string = '';

  constructor(
    private sProyectos: ProyectoService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    
  }

  onCreate() {
   
    const proyecto = new Proyecto(
      this.nombre,
      this.descripcion,
      this.link,
      this.img
    );

    this.sProyectos.save(proyecto).subscribe(
      (data) => {
        alert('Experiencia añadida');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Falló');
        this.router.navigate(['']);
      }      
    )
    
  }

  uploadImage($event:any){
    
    const id = this.activatedRoute.snapshot.params['id'];
    let name;

    if(id){
       name = "Proyecto_" + id;
    }else{
      name = "Proyecto_" + this.imageService.generateUUID();
    }
    
     this.imageService.uploadImage($event,name)
   

  }
}
