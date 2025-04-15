import { Component } from '@angular/core';
import { ContactCardComponent } from './components/contact-card/contact-card.component';

@Component({
  selector: 'app-root',
  imports: [ContactCardComponent,],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'portfolioTinn';
}
