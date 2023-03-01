import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  titulo: string = '';
  tituloSub$!: Subscription;

  constructor(private router: Router) {
    this.getArgumentosRuta();
  }

  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getArgumentosRuta() {
    this.tituloSub$ = this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data)
      )
      .subscribe((event) => {
        this.titulo = event['titulo'];
        document.title = `Admin Pro - ${event['titulo']}`;
      })
    // .subscribe(({titulo}) => {
    // this.titulo=titulo
    // })
  }


}
