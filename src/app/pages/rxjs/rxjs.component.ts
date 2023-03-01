import { Component, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html'
})
export class RxjsComponent implements OnDestroy {

  intervalSubs!: Subscription;

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

    this.intervalSubs = this.retornaIntervalo().subscribe(console.log)

  }
  ngOnDestroy(): void {
    this.intervalSubs.unsubscribe();
  }

  retornaIntervalo(): Observable<number> {
    return interval(100)
      .pipe(
        // take(10),
        map(valor => valor + 1),
        filter(valor => (valor % 2 === 0)),
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
