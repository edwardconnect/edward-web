import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'doyouvwrh'
  } as CloudinaryConfiguration),
  ]
})
export class EntitiesModule { }
