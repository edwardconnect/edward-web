import { Component, OnInit, OnDestroy, ElementRef, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location, DOCUMENT } from '@angular/common';

import GalleryPhoto from '../../../shared/models/gallery-photo.model'
import { MediaMatcher, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit, OnDestroy {
  photoUrl = 'https://res.cloudinary.com/doyouvwrh/image/upload/w_500,c_scale/v1572539504/edward-web/'
  photoGalleryIds = {
    travel: ['travel03_on95lz','travel02_qocdwj','travel01_pkkgcu','IMG_0506_boipom', 'bus-wall'],
    food: ['food01_hrbrgm', 'food02_vlkyrt','food03_viu0hh','food04_d0ks5p','food05_cnuxts','food06_iqxnls','food07_fyhktv','food08_drpfbx'],
    work: ['work01_vv5pkj','work02_lwyaoo']
  };
  galleryPhoto: GalleryPhoto[] = [];
  private urlChangeSub: Subscription;
  openOverlay = false;
  showEffect = false;
  isSmallScreen: boolean;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private elementRef: ElementRef,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngOnInit() {
    console.log('sadf')
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 600px)');
    this.subscribeUrlChange();
    console.log(this.isSmallScreen);
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
    // console.log(`Scroll top value : ${this.document.body.scrollTop}`)
    // console.log(`Photo position Y: ${event.target.y}`);
    // console.log(`scoll position: ${window.scrollY}`)
    // console.log(event)
    const clickedPhoto = event.target;
    const targetY = event.target.y;

    // Enable fixed photo & Hide original photo
    this.document.body.classList.add('body--lock');
    this.openOverlay = true;
    photo.done = false;
    photo.isOpen = true;

    // set all properties to fixed photo
    photo.top = targetY - window.scrollY;
    photo.left = clickedPhoto.x;
    photo.width = clickedPhoto.width;
    photo.height = clickedPhoto.height;
    photo.borderRadius = 10;
    photo.scale = 1;

    // Store original photo info
    photo.originalTop = targetY - window.scrollY;
    photo.originalLeft = clickedPhoto.x;
    photo.originalWidth = clickedPhoto.width;
    photo.originalHeight = clickedPhoto.height;

    // Assign new properties
    setTimeout(() => {
      photo.done = true;
      photo.top = (window.innerHeight / 2) - (clickedPhoto.height / 2);
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
    }, 350)
  }
}
