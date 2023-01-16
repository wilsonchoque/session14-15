import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  titulo = "Data Binding Interpolation";
  nombreBoton = "Mostrar"
  condicion=false;
  name !: string;
  textoPadre: string = "" ;

  cambiar(){    
    
    if(this.condicion == false){
      this.condicion = true;
      this.nombreBoton = "Ocultar";
    }else{
      this.condicion = false;
      this.nombreBoton = "Mostrar";
    }

    
  }

}
