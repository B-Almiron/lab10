import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

    email: string = '';
    nombre: string = '';
    modeloesvalido:boolean = false
    controlnombre: FormControl = new FormControl('',[Validators.required,Validators.minLength(5)])

    controlemail: FormControl = new FormControl('',[Validators.required,Validators.minLength(5),
      Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}')])


  onSubmit() {
    console.log('Formulario enviado');
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Email: ${this.email}`);
  }

  showModal(){
    Swal.fire({
      title: 'Estas seguro que quieres ingresar estos datos?',
      text: "si haces el cambio no hay vuelta atras :c!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si lo hare !'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Se confirmo el registro!',
          'presiona f12 y podras verlo .',
          'success'
        )
      }
    })

  }
}
