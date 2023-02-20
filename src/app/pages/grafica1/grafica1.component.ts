import { Component } from '@angular/core';
import { ChartData } from 'chart.js';



@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  titulos: string[] = ['Pan', 'Refresco', 'Tacos'];
  datosEnviados: ChartData<'doughnut'> = {
    labels: this.titulos,
    datasets: [{
      data: [40, 10, 44],
      backgroundColor: ['#00821C', '#09DB36', '#024D0F'],
      // hoverBackgroundColor: ['#00821C', '#09DB36', '#024D0F'],
      // hoverBorderColor: ['#000000', '#000000', '#00000003']
    },
    ]
  };


}
