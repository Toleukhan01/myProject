import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdsComponent } from './ads/ads.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { FindBlocksComponent } from './find-blocks/find-blocks.component';
import { CardsBlockComponent } from './cards-block/cards-block.component';
import { CommunityBlockComponent } from './community-block/community-block.component';
import { PartnersComponent } from './partners/partners.component';
import { CopyrightComponent } from './copyright/copyright.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdsComponent,
    AboutUsComponent,
    ServiceTypesComponent,
    FindBlocksComponent,
    CardsBlockComponent,
    CommunityBlockComponent,
    PartnersComponent,
    CopyrightComponent,
    ],
    
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatProgressBarModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
