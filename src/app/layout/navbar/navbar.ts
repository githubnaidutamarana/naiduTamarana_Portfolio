import { ChangeDetectionStrategy, Component, afterNextRender, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NAV_LINKS, PROFILE } from '../../core/data/profile.data';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onScroll()',
    '(document:keydown.escape)': 'open.set(false)',
  },
  template: `
    <header class="nav" [class.nav--scrolled]="scrolled()" [class.nav--open]="open()">
      <div class="container nav__inner">
        <a class="brand" routerLink="/" fragment="home" (click)="go('home')">
          <span class="brand__mark" aria-hidden="true">{{ profile.initials }}</span>
          <span class="brand__text">{{ profile.name }}<small>{{ profile.role }}</small></span>
        </a>

        <nav class="nav__links" id="site-nav" aria-label="Primary">
          @for (l of links; track l.id) {
            <a class="nav__link" [class.is-active]="active() === l.id"
               routerLink="/" [fragment]="l.id" (click)="go(l.id)">{{ l.label }}</a>
          }
          <a class="btn btn--primary btn--sm nav__cta" routerLink="/" fragment="contact" (click)="go('contact')">
            Contact me
          </a>
        </nav>

        <button class="nav__toggle" type="button" (click)="open.set(!open())"
                [attr.aria-expanded]="open()" aria-controls="site-nav"
                [attr.aria-label]="open() ? 'Close menu' : 'Open menu'">
          <app-icon [name]="open() ? 'close' : 'menu'" [size]="22" />
        </button>
      </div>
    </header>
  `,
})
export class Navbar {
  protected readonly profile = PROFILE;
  protected readonly links = NAV_LINKS;
  protected readonly open = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly active = signal('');

  private readonly router = inject(Router);
  private readonly spyIds = [...NAV_LINKS.map((l) => l.id), 'contact'];

  constructor() {
    afterNextRender(() => this.onScroll());
  }

  protected onScroll(): void {
    this.scrolled.set(window.scrollY > 8);
    if (!this.isHome()) {
      this.active.set('');
      return;
    }
    let current = '';
    for (const id of this.spyIds) {
      const el = document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 140) current = id;
    }
    this.active.set(current);
  }

  /** Router handles cross-page anchors; this covers re-clicking a link on the home page. */
  protected go(id: string): void {
    this.open.set(false);
    if (this.isHome()) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  private isHome(): boolean {
    return this.router.url.split(/[?#]/)[0] === '/';
  }
}
