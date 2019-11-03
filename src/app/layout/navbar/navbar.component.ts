import { Component, OnInit, OnDestroy } from '@angular/core';

import { faCoffee, faAdjust } from '@fortawesome/free-solid-svg-icons';
import { ColorThemeService } from 'src/app/shared/services/color-theme.service';
import { Subscription } from 'rxjs';
import { ColorTheme } from 'src/app/shared/models/color-theme.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {
  navbarItems = [
    {
      name: 'Home',
      routerLink: '/'
    },
    // {
    //   name: 'Gallery',
    //   routerLink: '/gallery'
    // }
  ]
  faAdjust = faAdjust;
  colorThemeStateSub: Subscription;
  colorTheme: ColorTheme;

  constructor(
    private colorThemeService: ColorThemeService
  ) { }

  ngOnInit() {
    this.subscribeColorTheme();
  }

  ngOnDestroy() {
    this.colorThemeStateSub.unsubscribe();
  }

  subscribeColorTheme() {
    this.colorTheme = this.colorThemeService.getColorTheme();

    this.colorThemeStateSub = this.colorThemeService.getColorThemeState().subscribe(
      theme => {
        this.colorTheme = theme;
      }
    )
  }

  changeColorTheme() {
    this.colorThemeService.changeColorTheme(
      this.colorTheme === ColorTheme.Dark ? ColorTheme.Light : ColorTheme.Dark
    );
  }
}
