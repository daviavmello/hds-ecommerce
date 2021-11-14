import { APP_INITIALIZER, NgModule } from '@angular/core';
import { UiStyleToggleService } from './ui-style-toggle.service';

export function themeProvider(themeService: UiStyleToggleService) {
  return () => themeService.setTheme();
}

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    UiStyleToggleService,
    {
      provide: APP_INITIALIZER,
      useFactory: themeProvider,
      deps: [UiStyleToggleService],
      multi: true,
    },
  ],
})
export class UiModule {}
