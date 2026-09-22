import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROFILE } from '../../core/data/profile.data';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer">
      <div class="container footer__inner">
        <p>© {{ year }} {{ profile.name }} · {{ profile.role }}</p>
        <p>Built with Angular &amp; SCSS</p>
        <button class="footer__top" type="button" (click)="toTop()">
          <app-icon name="arrow-up" [size]="16" /> Back to top
        </button>
      </div>
    </footer>
  `,
})
export class Footer {
  protected readonly profile = PROFILE;
  protected readonly year = new Date().getFullYear();

  protected toTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
