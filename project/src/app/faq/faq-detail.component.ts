import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Reply }                                  from './faq';

@Component({
  selector: 'app-faq-detail',
  templateUrl: 'faq-detail.component.html',
  styleUrls: ['faq-detail.component.scss']
})
export class FaqDetailComponent {
  @Input()
  reply:Reply;

  @Output()
  closeReply = new EventEmitter();

  public constructor() { }

  goBack() {
    window.scrollTo(0, 0);
    this.closeReply.emit();
  }
}
