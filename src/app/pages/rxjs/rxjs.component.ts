import { Component } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { retry, take, map } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent {

  constructor() {



    // this.retornarObsevable().pipe(
    //   retry(1)
    // )
    //   .subscribe({
    //     next: (valor) => console.log('Sub', valor),
    //     error: (err) => console.warn('Error', err),
    //     complete: () => console.info('Obs terminado')
    //   }
    //   );

    this.retornaIntervalo()
      .subscribe(console.log)

  }

  retornaIntervalo(): Observable<number> {
    return interval(1000)
      .pipe(
        take(4),
        map(valor => {
          return valor + 1
        })
      );

  }

  retornarObsevable(): Observable<number> {


    let i = 0;
    return new Observable<number>(observer => {

      const intervalo = setInterval(() => {
        i++;
        observer.next(i);

        if (i === 4) {
          // observer.unsubscribe();
          clearInterval(intervalo);
          observer.complete();
        }

        if (i === 2) { observer.error('i llegó al valor de 2') }

      }, 1000)

    });

  }

}
