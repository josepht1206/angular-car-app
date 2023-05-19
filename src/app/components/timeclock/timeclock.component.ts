import { Component } from '@angular/core';

@Component({
  selector: 'app-timeclock',
  templateUrl: './timeclock.component.html',
  styleUrls: ['./timeclock.component.css'],
})
export class TimeclockComponent {
  time: Date | undefined;

  constructor() {}

  ngOnInit() {
    setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
}
