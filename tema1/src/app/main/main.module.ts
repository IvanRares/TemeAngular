import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { DiscoverBannerComponent } from './discover-banner/discover-banner.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { DestinationSearchComponent } from './destination-search/destination-search.component';
import { LocationCardComponent } from './location-card/location-card.component';
import { MostPopularComponent } from './most-popular/most-popular.component';


@NgModule({
  declarations: [
    MainComponent,
    DiscoverBannerComponent,
    ArticleCardComponent,
    DestinationSearchComponent,
    LocationCardComponent,
    MostPopularComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
