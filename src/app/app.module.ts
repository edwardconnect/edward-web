import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntitiesModule } from './entities/entities.module';
import { LayoutModule } from './layout/layout.module';

import { CloudinaryModule, CloudinaryConfiguration } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EntitiesModule,
    LayoutModule,
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'doyouvwrh'
    } as CloudinaryConfiguration),
    FontAwesomeModule
    // LazyLoadImageModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
