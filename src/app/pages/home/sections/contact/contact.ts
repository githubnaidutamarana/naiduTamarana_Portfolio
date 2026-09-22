import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PROFILE } from '../../../../core/data/profile.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--dark contact" id="contact">
      <div class="container contact__grid">
        <div appReveal>
          <p class="eyebrow">Contact</p>
          <h2 class="contact__title">Let's talk about frontend work on healthcare products.</h2>
          <p class="contact__lead">
            Whether it's a frontend role, an Angular or AngularJS codebase, or a patient-facing workflow,
            email is the quickest way to reach me.
          </p>
          <div class="hero__actions">
            <a class="btn btn--primary" [href]="'mailto:' + profile.email"><app-icon name="mail" /> Email me</a>
            <button class="btn btn--glass" type="button" (click)="copyEmail()">
              <app-icon [name]="copied() ? 'check' : 'copy'" /> {{ copied() ? 'Copied' : 'Copy email' }}
            </button>
          </div>
        </div>

        <ul class="contact__list" [appReveal]="120">
          <li>
            <a class="contact-item" [href]="'mailto:' + profile.email">
              <span class="icon-tile icon-tile--glass"><app-icon name="mail" /></span>
              <span><small>Email</small><strong>{{ profile.email }}</strong></span>
            </a>
          </li>
          @if (profile.phone) {
            <li>
              <a class="contact-item" [href]="phoneHref">
                <span class="icon-tile icon-tile--glass"><app-icon name="phone" /></span>
                <span><small>Phone</small><strong>{{ profile.phone }}</strong></span>
              </a>
            </li>
          }
          <li>
            <div class="contact-item">
              <span class="icon-tile icon-tile--glass"><app-icon name="pin" /></span>
              <span><small>Location</small><strong>{{ profile.location }}</strong></span>
            </div>
          </li>
          @if (profile.linkedin) {
            <li>
              <a class="contact-item" [href]="profile.linkedin" target="_blank" rel="noopener">
                <span class="icon-tile icon-tile--glass"><app-icon name="link" /></span>
                <span><small>LinkedIn</small><strong>{{ profile.linkedin }}</strong></span>
              </a>
            </li>
          }
          @if (profile.github) {
            <li>
              <a class="contact-item" [href]="profile.github" target="_blank" rel="noopener">
                <span class="icon-tile icon-tile--glass"><app-icon name="git" /></span>
                <span><small>GitHub</small><strong>{{ profile.github }}</strong></span>
              </a>
            </li>
          }
        </ul>
      </div>
    </section>
  `,
})
export class Contact {
  protected readonly profile = PROFILE;
  protected readonly phoneHref = 'tel:' + (PROFILE.phone ?? '').replace(/\s/g, '');
  protected readonly copied = signal(false);

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied.set(true);
      setTimeout(() => this.copied.set(false), 2000);
    } catch {
      window.location.href = 'mailto:' + this.profile.email;
    }
  }
}
