import {Component, Input} from '@angular/core';

@Component({
  selector: 'page-divider',
  templateUrl: './page-divider.component.html'
})
export class PageDividerComponent{
  @Input() heading: string;
}
