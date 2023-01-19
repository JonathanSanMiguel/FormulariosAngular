import { Component, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
  inputs: ['minimo']
})
export class BasicosComponent implements OnInit {

  @ViewChild('FormularioBasico') formularioBasico!: NgForm

  constructor(){}

  ngOnInit(): void {
      
  }

  ValidarNombre(): boolean{
    return this.formularioBasico?.form.controls['producto']?.invalid &&
            this.formularioBasico?.form.controls['producto']?.touched
  }

  ValidarPrecio(): boolean{
    return this.formularioBasico?.form.controls['precio']?.value < 1 &&
            this.formularioBasico?.form.controls['precio']?.touched
  }

  guardar(){
    console.log(this.formularioBasico)
  }

}