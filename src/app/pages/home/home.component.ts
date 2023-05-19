import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showPopup: boolean = true;
  popupMessage: string =
    'This is a google search Iframe, please login to see more about the cars. Process to dashboard if you already logged in';

  hidePopup() {
    this.showPopup = false;
  }
}
