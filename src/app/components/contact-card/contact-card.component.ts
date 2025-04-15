import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contact-card',
  imports: [CommonModule, TranslateModule],
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.css'],
})
export class ContactCardComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  cambiarIdioma(lang: string) {
    this.translate.use(lang);
  }

}
