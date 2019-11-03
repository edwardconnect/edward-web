import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ColorTheme } from 'src/app/shared/models/color-theme.model';
import { ColorThemeService } from 'src/app/shared/services/color-theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private bannerImgs = {
    night: 'https://res.cloudinary.com/doyouvwrh/image/upload/c_fill,h_1080,w_1920/v1572539504/edward-web/hk-night_cfudzc',
    day: 'https://res.cloudinary.com/doyouvwrh/image/upload/c_fill,h_1080,w_1920/v1572539504/edward-web/hk-day_u2891h'
  };
  bannerImg: string;
  themeStateSub: Subscription;

  constructor(
    private colorThemeService: ColorThemeService
  ) { }

  ngOnInit() {
    console.log('init cinoibebt')
    this.subscribeColorTheme();
  }

  ngOnDestroy() {
    this.themeStateSub.unsubscribe();
  }

  subscribeColorTheme() {
    const selectTheme = theme => {
      this.bannerImg = theme === ColorTheme.Light ? this.bannerImgs.day : this.bannerImgs.night;
    }

    selectTheme(this.colorThemeService.getColorTheme());
    
    this.themeStateSub = this.colorThemeService.getColorThemeState()
      .subscribe(theme => {
        selectTheme(theme);
      });
  }
}
