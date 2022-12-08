import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})


export class ContactComponent {

  constructor() {}

  contactoForm:any; //form 

  ngOnInit(): void {
    this.contactoForm = new FormGroup({
      "nombres":new FormControl(null, [Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      "apellidos":new FormControl(null),
      "correo":new FormControl(null),
      "celular":new FormControl(null),
      "numunidad":new FormControl(null),
      "ruta":new FormControl(null),
      "mensaje":new FormControl(null),
    })
  }

  // Enviar Funcion
  enviarData() {
    console.log(this.contactoForm.value);
      alert('Gracias por su mensaje!')
      this.contactoForm.reset();
    }
  }
  


