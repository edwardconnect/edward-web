import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudinaryConfiguration, CloudinaryModule } from '@cloudinary/angular-5.x';
import { Cloudinary } from 'cloudinary-core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

import { PhotoCategoryComponent } from './photo-category/photo-category.component';
import { PhotoGalleryComponent } from './photo-category/photo-gallery/photo-gallery.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent, PhotoCategoryComponent, PhotoGalleryComponent],
  imports: [
    CommonModule,
    RouterModule,
    CloudinaryModule.forRoot({ Cloudinary }, {
      cloud_name: 'doyouvwrh'
    } as CloudinaryConfiguration),
    LazyLoadImageModule,
    CdkLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EntitiesModule { }
