import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
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
    private colorThemeService: ColorThemeService,
    private elementRef: ElementRef
  ) { }


  ngOnInit() {
    this.subscribeColorThemeState();
  }

  ngOnDestroy() {
    this.colorThemeSub.unsubscribe();
  }

  subscribeColorThemeState() {
    this.theme = this.colorThemeService.getColorTheme();
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.theme === 0 ? 'black' : '#E4E4E4';
    this.colorThemeSub = this.colorThemeService.getColorThemeState().subscribe(theme => {
      this.theme = theme;
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = this.theme === 0 ? 'black' : '#E4E4E4';
    });
  }
}
