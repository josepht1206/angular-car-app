import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showPopup: boolean = true;
  popupMessage: string = 'This is a warning message.';

  hidePopup() {
    this.showPopup = false;
  }
}
