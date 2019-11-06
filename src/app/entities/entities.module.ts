import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotoGalleryComponent } from './photo-category/photo-gallery/photo-gallery.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HomeComponent, PhotoCategoryComponent, PhotoGalleryComponent],
  imports: [
    CommonModule,
    RouterModule,
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'doyouvwrh'
  } as CloudinaryConfiguration),
  LazyLoadImageModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntitiesModule { }
