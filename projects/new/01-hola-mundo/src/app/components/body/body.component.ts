import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'un gran poder conlleva una gran responsabilidad',
    autor: 'tio ben'
  }

  personajes: string[] = ['Spiderman', 'Venom', 'Dr. Octopus'];
}
