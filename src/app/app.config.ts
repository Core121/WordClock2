/// <reference types="@angular/localize" />

import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import { SettingsService } from './services/settings.service';

export const appConfig: ApplicationConfig = {
  providers: [SettingsService, provideZonelessChangeDetection()],
};
