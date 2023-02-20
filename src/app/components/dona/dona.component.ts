import { Component, Input } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html'
})
export class DonaComponent {

  @Input() titulo: string = 'Sin Titulo';

  @Input('labels') tituloDoughnut: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];


  @Input('DatosExtraidos') doughnutChartData: ChartData<'doughnut'> = {
    labels: this.tituloDoughnut,
    datasets: [
      {
        data: [350, 450, 100],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059']
      }
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
