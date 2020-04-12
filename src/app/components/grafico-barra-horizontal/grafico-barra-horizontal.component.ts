import { Component, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {

  @Input() results: any[] = [];

  // results: any[] = [
  //   {
  //     name: 'Juego 1',
  //     value: 33
  //   },
  //   {
  //     name: 'Juego 2',
  //     value: 45
  //   },
  //   {
  //     name: 'Juego 3',
  //     value: 12
  //   },
  //   {
  //     name: 'Juego 4',
  //     value: 19
  //   }
  // ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  // intervalo;

  constructor() {

    // this.intervalo = setInterval ( () => {

    //     const newResults = [...this.results];
    //     // tslint:disable-next-line: forin
    //     for (const i in newResults) {
    //       newResults[i].value = Math.round(Math.random() * 500);
    //     }

    //     this.results = [...newResults];

    // }, 1500);

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy() {
    // clearInterval(this.intervalo);
  }

}
