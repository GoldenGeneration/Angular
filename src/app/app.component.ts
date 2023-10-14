import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `
  <h1>Angular</h1>
  <h2>Upcomming angular Events</h2>
   <app-thumbnail [event2]="event1"></app-thumbnail>
  `
})
export class AppComponent {
  title = 'practiseFile';

  event1 = {
    id: 1,
    name: 'First Last',
    price: 999.99,
    address: 'Banasthali',
    phone: 93849482,
  }
}
