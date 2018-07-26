import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformDetectorService {
  public constructor(
    @Inject(PLATFORM_ID)
    private platformId: string) { }

  public isPlatformBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }
}
