import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location, DOCUMENT } from '@angular/common';

import { GalleryPhoto } from '../../../shared/models/gallery-photo.model'

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit, OnDestroy {
  photoUrl = 'https://res.cloudinary.com/doyouvwrh/image/upload/w_375,c_scale/v1572539504/edward-web/'
  photoGalleryIds = {
    travel: ['IMG_0506_boipom', 'bus-wall', 'math', 'math', 'IMG_0506_boipom', 'bus-wall', 'math', 'IMG_0506_boipom', 'bus-wall', 'math']
  };
  galleryPhoto: GalleryPhoto[] = [];
  private urlChangeSub: Subscription;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    this.subscribeUrlChange();
  }

  ngOnDestroy() {
    this.urlChangeSub.unsubscribe();
  }

  subscribeUrlChange() {
    this.urlChangeSub = this.route.params.subscribe(params => {
      const photoIds = this.photoGalleryIds[params['cat']];
      if (photoIds) {
        console.log(this.photoGalleryIds)
        this.galleryPhoto = photoIds.map(id => {
          return new GalleryPhoto(id, false);
        })
      } else {
        this.location.back();
      }
    })
  }

  test(e) {
    console.log(this.document)
    console.log(e)
    console.log(e.target.offsetTop)
    // console.log(this.elementRef.nativeElement.offsetTop);
    // console.log(this.elementRef.);
  }

  openModal(photo: GalleryPhoto) {
    // console.log(photo);
    // photo.isOpen = true;
  }

  closeModal(photo: GalleryPhoto) {
    // photo.isOpen = false;
  }
}
