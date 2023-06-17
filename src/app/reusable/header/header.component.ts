import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  openNav() {
    (<HTMLInputElement>document.getElementById("mySidenav")).style.width = "250px";
    (<HTMLInputElement>document.getElementById("overlay")).classList.add('active')
  }
}
