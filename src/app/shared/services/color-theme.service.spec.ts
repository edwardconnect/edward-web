import { TestBed } from '@angular/core/testing';

import { ColorThemeService } from './color-theme.service';

describe('ColorThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ColorThemeService = TestBed.get(ColorThemeService);
    expect(service).toBeTruthy();
  });
});
