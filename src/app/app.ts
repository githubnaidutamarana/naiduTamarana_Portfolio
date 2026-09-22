import { ViewportScroller } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './layout/footer/footer';
import { Navbar } from './layout/navbar/navbar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button class="skip-link" type="button" (click)="skipToContent(main)">Skip to content</button>
    <app-navbar />
    <main #main tabindex="-1">
      <router-outlet />
    </main>
    <app-footer />
  `,
})
export class App {
  constructor() {
    // Keep anchor targets clear of the fixed navbar.
    inject(ViewportScroller).setOffset([0, 76]);
  }

  protected skipToContent(main: HTMLElement): void {
    main.focus();
    main.scrollIntoView();
  }
}
