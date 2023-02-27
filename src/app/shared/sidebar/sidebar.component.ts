import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  menuitems: any[];

  constructor(private sidebarservice: SidebarService) {
    this.menuitems = sidebarservice.menu;
  }

  ngOnInit(): void {
    
  }

}
