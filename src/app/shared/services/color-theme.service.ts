import { Injectable } from '@angular/core';
import { ColorTheme } from '../models/color-theme.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
  private theme: ColorTheme;
  private colorThemeState = new Subject<any>();

  constructor() { 
    this.initColorTheme();
  }

  private initColorTheme() {
    const lastThemeSeleted = sessionStorage.getItem('theme');

    if (lastThemeSeleted) {
     this.changeColorTheme(+lastThemeSeleted);
     return;
    }

    const currentTime = new Date();
    console.log('init theme')
    this.changeColorTheme(
      currentTime.getHours() < 18 && currentTime.getHours() > 6 ? ColorTheme.Light : ColorTheme.Dark
    )
  }

  changeColorTheme(theme: ColorTheme) {
    this.theme = theme;
    console.log(this.theme)
    sessionStorage.setItem('theme', String(this.theme));
    this.colorThemeState.next(this.theme);
  }

  getColorThemeState(): Observable<any> {
    return this.colorThemeState.asObservable();
  }

  getColorTheme(): ColorTheme {
    return this.theme;
  }
}
