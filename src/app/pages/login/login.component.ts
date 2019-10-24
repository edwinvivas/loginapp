import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: UsuarioModel = new UsuarioModel();
 

  constructor() { }

  ngOnInit() {
  }

/*   onSubmit(form: NgForm) {

    if (form.invalid) { return; }


    this.auth.nuevoUsuario( this.usuario )
      .subscribe( resp => {
        console.log(resp);

      }, (err) => {

     console.log(err.error.error.mensaje);
      });

    console.log('Formulario enviado');
    console.log(this.usuario);
    console.log(form);

  } */

  login( form: NgForm ) {

    if (form.invalid) { return; }
    console.log(this.usuario);
    console.log(form);

  }

}
