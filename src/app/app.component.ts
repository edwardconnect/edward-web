import { Component, OnInit, OnDestroy } from '@angular/core';
import { ColorTheme } from './shared/models/color-theme.model';
import { ColorThemeService } from './shared/services/color-theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'edward-web';
  theme: ColorTheme;
  colorThemeSub: Subscription;

  constructor(
    private colorThemeService: ColorThemeService
  ) { }

  ngOnInit() {
    this.subscribeColorThemeState();
  }

  ngOnDestroy() {
    this.colorThemeSub.unsubscribe();
  }

  subscribeColorThemeState() {
    this.theme = this.colorThemeService.getColorTheme();
    this.colorThemeSub = this.colorThemeService.getColorThemeState().subscribe(theme => this.theme = theme);
  }
}
