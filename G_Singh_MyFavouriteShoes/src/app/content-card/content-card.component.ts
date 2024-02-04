// content-card.component.ts

import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent {
  @Input() content: Content | undefined;
  @Input() borderStyle: string | undefined;
  @Output() imageClick: EventEmitter<Content> = new EventEmitter<Content>();

  onImageClick(): void {
    if (this.content) {
      this.imageClick.emit(this.content);
    }
  }
}
