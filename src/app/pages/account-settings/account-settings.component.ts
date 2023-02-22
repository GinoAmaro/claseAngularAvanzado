import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html'
})
export class AccountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  public link!: NodeListOf<Element>;

  constructor() { }

  ngOnInit(): void {

    this.link = document.querySelectorAll('.selector');
    this.checkTheme();

  }


  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;

    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('theme', url);

    this.checkTheme();
  }

  checkTheme() {

    


    this.link.forEach(elem => {

      elem.classList.remove('working');
      const btnTheme = elem.getAttribute('data-theme');
      const btmThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');

      if (btmThemeUrl == currentTheme) {
        elem.classList.add('working');
      }

    })

  }
}
