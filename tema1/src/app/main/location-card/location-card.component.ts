import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Location } from 'src/app/_models/location';

@Component({
  selector: 'app-location-card',
  templateUrl: './location-card.component.html',
  styleUrls: ['./location-card.component.scss'],
})
export class LocationCardComponent {
  @Input() location!: Location;
  @Output() selectedLocationEvent = new EventEmitter<string>();

  onClick(){
    this.selectedLocationEvent.emit(this.location.title)
  }
}
