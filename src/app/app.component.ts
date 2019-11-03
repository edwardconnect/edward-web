import { Component, OnInit } from '@angular/core';
import { ColorTheme } from './shared/models/color-theme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'edward-web';
  theme: ColorTheme;

  ngOnInit() {
    this.initColorTheme();
  }

  private initColorTheme() {
    const currentTime = new Date();
    this.theme = currentTime.getHours() < 18 && currentTime.getHours() > 6 ? ColorTheme.Light : ColorTheme.Dark;
  }
}
