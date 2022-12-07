import { Component } from '@angular/core';

@Component({
  selector: 'app-horarios',
  templateUrl: './horarios.component.html',
  styleUrls: ['./horarios.component.scss']
})
export class HorariosComponent {
  public show:boolean = false;
  public show1:boolean = false;
  public show2:boolean = false;
  public mostrar:any = 'Show';
  public mostrar1:any = 'Show';
  public mostrar2:any = 'Show';

  toggle() {

    this.show = !this.show;
    this.mostrar = !this.mostrar;
  }
  
  toggle1() {

    this.show1 = !this.show1;
    this.mostrar1 = !this.mostrar1;
  }

  toggle2() {

    this.show2 = !this.show2;
    this.mostrar2 = !this.mostrar2;
  }
  
  
  

}
