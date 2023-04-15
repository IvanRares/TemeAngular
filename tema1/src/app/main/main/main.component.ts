import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  currentLocation!: string;
  @ViewChild('popularLocations', { read: ElementRef })
  popularLocations!: ElementRef;

  scrollToPopularLocations() {
    this.popularLocations.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
