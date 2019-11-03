import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.scss']
})
export class PhotoGalleryComponent implements OnInit {
  // category: string;

  // constructor(
  //   private activatedRoute: ActivatedRoute
  // ) {
  //   activatedRoute.params.subscribe(params => {
  //     if (params['cat']) {
  //       this.category = params['cat'];
  //     }
  //   })
  //  }

  ngOnInit() {
  }

}
