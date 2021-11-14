import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ThemeMode {
  DARK,
  LIGHT,
}

@Injectable({ providedIn: 'root' })
export class UiStyleToggleService {
  private readonly THEME_KEY = 'THEME';
  private readonly DARK_THEME_VALUE = 'DARK';
  private readonly LIGHT_THEME_VALUE = 'LIGHT';
  private readonly DARK_THEME_CLASS_NAME = 'theme-dark';

  private darkModeOn: boolean = false;

  public theme = new BehaviorSubject<ThemeMode>(ThemeMode.LIGHT);

  constructor() {}
  public setTheme() {
    if (this.isDarkModeOn()) {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
    setTimeout(
      () => document.body.classList.add('animate-colors.transition'),
      500
    );
  }

  public colorModeToggle() {
    if (this.darkModeOn) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }
  public isDarkModeOn(): boolean {
    this.darkModeOn =
      localStorage.getItem(this.THEME_KEY) === this.DARK_THEME_VALUE;
    return this.darkModeOn;
  }

  private setLightTheme() {
    localStorage.setItem(this.THEME_KEY, this.LIGHT_THEME_VALUE);
    document.body.classList.remove(this.DARK_THEME_CLASS_NAME);
    this.darkModeOn = false;
    this.theme.next(ThemeMode.LIGHT);
  }

  private setDarkTheme() {
    localStorage.setItem(this.THEME_KEY, this.DARK_THEME_VALUE);
    document.body.classList.add(this.DARK_THEME_CLASS_NAME);
    this.darkModeOn = true;
    this.theme.next(ThemeMode.DARK);
  }
}
