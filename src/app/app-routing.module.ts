import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './entities/home/home.component';
import { PhotoCategoryComponent } from './entities/photo-category/photo-category.component';
import { PhotoGalleryComponent } from './entities/photo-category/photo-gallery/photo-gallery.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'photo',
    component: PhotoCategoryComponent,
  }, 
  {
    path: 'photo/:cat',
    component: PhotoGalleryComponent
  }
];

/**
 * RouterModule.forRoot is like combining the previous route (same copy) and return the update module (same copy)
 * or if a module want to add some params before inject
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
