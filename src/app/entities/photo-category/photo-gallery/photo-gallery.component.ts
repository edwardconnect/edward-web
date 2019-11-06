import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location, DOCUMENT } from '@angular/common';

import GalleryPhoto from '../../../shared/models/gallery-photo.model'

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
  openOverlay = false;
  showEffect = false;
  // @HostListener('window:scroll', ['$event'])
  // check(event) {
  //   console.log(event.pageYOffset)
  // }

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
        this.galleryPhoto = photoIds.map(id => {
          return new GalleryPhoto(id, false);
        })
      } else {
        this.location.back();
      }
    })
  }

  open(event, photo: GalleryPhoto) {
    const clickedPhoto = event.target;

    // Enable fixed photo & Hide original photo
    this.document.body.classList.add('body--lock');
    photo.isOpen = true;
    this.openOverlay = true;

    // set all properties to fixed photo
    photo.top = clickedPhoto.y;
    photo.left = clickedPhoto.x;
    photo.width = clickedPhoto.width;
    photo.height = clickedPhoto.height;
    photo.borderRadius = 10;
    photo.scale = 1;

    // Store original photo info
    photo.originalTop = clickedPhoto.y;
    photo.originalLeft = clickedPhoto.x;
    photo.originalWidth = clickedPhoto.width;
    photo.originalHeight = clickedPhoto.height;

    // Assign new properties
    setTimeout(() => {
      photo.top = (window.innerHeight / 2) - (clickedPhoto.height / 2);
      console.log('photot TOP ' + photo.top)
      photo.scale = window.innerWidth / clickedPhoto.width;
      photo.borderRadius = 0;
      this.showEffect = true;
    }, 10)
  }

  closeModal(photo: GalleryPhoto) {
    photo.scale = 1;
    photo.top = photo.originalTop;
    photo.left = photo.originalLeft;
    photo.width = photo.originalWidth;
    photo.height = photo.originalHeight;
    this.showEffect = false;
    photo.borderRadius = 10;

    setTimeout(() => {
      photo.isOpen = false;
      this.openOverlay = false;
      this.document.body.classList.remove('body--lock');
    }, 300)
  }
}
