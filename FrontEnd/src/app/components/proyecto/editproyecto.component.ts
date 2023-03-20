import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-editproyecto',
  templateUrl: './editproyecto.component.html',
  styleUrls: ['./editproyecto.component.css']
})
export class EditproyectoComponent implements OnInit{

  proyecto: Proyecto =null;

  constructor(private activatedRouter: ActivatedRoute, 
    private proyectoService: ProyectoService, 
    private router: Router, 
    public imageService: ImageService) { }

ngOnInit(): void {
const id = this.activatedRouter.snapshot.params['id'];
this.proyectoService.detail(id).subscribe(
data => {
this.proyecto = data;
}, 
error => {
console.error(error);
alert("Error al cargar el proyecto");
this.router.navigate(['']);
}
);
}

onUpdate(): void {
const id = this.activatedRouter.snapshot.params['id'];
if (this.imageService.url) {
this.proyecto.img = this.imageService.url;
}
this.proyectoService.update(id, this.proyecto).subscribe(
data => {
this.router.navigate(['']);
}, 
error => {
console.error(error);
alert("Error al actualizar el proyecto");
this.router.navigate(['']);
}
);
}

uploadImage(event: any): void {
const id = this.activatedRouter.snapshot.params['id'];
const name = "proyecto_" + id;
this.imageService.uploadImage(event, name);
}

}
