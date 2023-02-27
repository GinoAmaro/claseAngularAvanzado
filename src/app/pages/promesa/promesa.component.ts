import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesa',
  templateUrl: './promesa.component.html'
})
export class PromesaComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });

  }

  getUsuarios() {

    return new Promise(resolve => {

      fetch('https://reqres.in/api/users')
        .then(resp => resp.json())
        .then(body => resolve(body.data)
        )
    });

  }

}
