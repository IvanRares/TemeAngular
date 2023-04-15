import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-discover-banner',
  templateUrl: './discover-banner.component.html',
  styleUrls: ['./discover-banner.component.scss']
})
export class DiscoverBannerComponent {
 @Input() location!:string;
 @Output() buttonClickedEvent=new EventEmitter();

 onClick(){
  this.buttonClickedEvent.emit();
 }
}
