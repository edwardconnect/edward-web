import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-category',
  templateUrl: './photo-category.component.html',
  styleUrls: ['./photo-category.component.scss']
})
export class PhotoCategoryComponent implements OnInit {
  readonly cloudPicUrl = 'https://res.cloudinary.com/doyouvwrh/image/upload/c_fill,h_480,w_320/v1572539504/edward-web/'
  categories = [
    {
      title: 'Travel',
      photoUrl: this.cloudPicUrl +'travel_yjye7f',
      routerLink: 'travel'
    },
    {
      title: 'Food',
      photoUrl: this.cloudPicUrl +'food_cbte5j',
      routerLink: 'food'
    },
    {
      title: 'Work',
      photoUrl: this.cloudPicUrl +'work_poylvr',
      routerLink: 'work'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
