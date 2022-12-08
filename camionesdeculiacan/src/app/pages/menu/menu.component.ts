import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  ruta = '1';
  mapa = '';

  constructor() { }

  ngOnInit():void {

  }
  
  CambiarMapa()
	{
		
		switch(this.ruta)
		{
			case "1":
				this.mapa = "https://www.google.com/maps/d/embed?mid=1PISuXdAr6nOqj05boVbYuMklQTI&hl=en_US&ehbc=2E312F";				
			break;

			case "2":
				this.mapa = "https://www.google.com/maps/d/embed?mid=1fF_NoA1aag79j6pvA1BeUcFahaE&hl=es&ehbc=2E312F";
			break;

			case "3": 
				this.mapa = "https://www.google.com/maps/d/embed?mid=1GyQiQX9c7ifJsIpXsZ2WkauEwSI5yR8&ehbc=2E312F";
			break;

			case "4":
				this.mapa = 'https://www.google.com/maps/d/u/0/embed?mid=1HMhLdeZ4C6LRKurE_72OAaxtJ5VzMIY&ehbc=2E312F';
			break;
		}

    this.mapa = this.mapa;

	}

}
