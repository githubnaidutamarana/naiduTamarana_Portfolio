import {
  ChangeDetectionStrategy, Component, DestroyRef, computed, effect, inject, input, signal,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { DomSanitizer, Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../core/data/profile.data';
import { findProject } from '../../core/data/projects.data';
import { Icon } from '../../shared/components/icon/icon';
import { IconName } from '../../shared/components/icon/icons';

type Device = 'desktop' | 'tablet' | 'mobile';

@Component({
  selector: 'app-demo-viewer',
  imports: [RouterLink, Icon],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (project(); as p) {
      <div class="viewer">
        <header class="viewer__bar">
          <a class="viewer__btn" [routerLink]="['/projects', p.slug]">
            <app-icon name="arrow-left" [size]="16" /><span>Case study</span>
          </a>
          <div class="viewer__title">
            <span class="badge badge--demo">Prototype</span>
            <strong>{{ p.title }}</strong>
          </div>
          @if (p.demo; as demo) {
            <div class="viewer__devices" role="group" aria-label="Preview size">
              @for (d of devices; track d.id) {
                <button type="button" [class.is-active]="device() === d.id" [attr.aria-pressed]="device() === d.id"
                        [attr.aria-label]="d.label" (click)="device.set(d.id)">
                  <app-icon [name]="d.icon" [size]="16" /><span>{{ d.label }}</span>
                </button>
              }
            </div>
            <a class="viewer__btn" [href]="demo.url" target="_blank" rel="noopener">
              <span>New tab</span><app-icon name="external" [size]="15" />
            </a>
          }
          <a class="viewer__btn viewer__btn--icon" routerLink="/" fragment="demos" aria-label="Close demo">
            <app-icon name="close" [size]="18" />
          </a>
        </header>

        @if (p.demo && src(); as url) {
          <p class="viewer__hint"><app-icon name="info" [size]="15" /> {{ p.demo.hint }} Mock data only.</p>
          <div class="viewer__stage">
            <div class="viewer__frame" [class.viewer__frame--device]="device() !== 'desktop'" [style.width]="width()">
              <iframe [src]="url" [title]="p.title + ' interactive prototype'"></iframe>
            </div>
          </div>
        } @else {
          <div class="viewer__empty">
            <p>This project doesn't have an interactive prototype.</p>
            <a class="btn btn--primary" [routerLink]="['/projects', p.slug]">Read the case study</a>
          </div>
        }
      </div>
    } @else {
      <section class="not-found">
        <div class="container">
          <h1>Demo not found</h1>
          <p>That demo doesn't exist or has moved.</p>
          <a class="btn btn--primary" routerLink="/" fragment="demos">Back to demos</a>
        </div>
      </section>
    }
  `,
})
export class DemoViewer {
  readonly slug = input.required<string>();

  private readonly sanitizer = inject(DomSanitizer);
  protected readonly project = computed(() => findProject(this.slug()));

  /** Only URLs from our own project data reach the iframe. */
  protected readonly src = computed(() => {
    const url = this.project()?.demo?.url;
    return url ? this.sanitizer.bypassSecurityTrustResourceUrl(url) : null;
  });

  protected readonly devices: { id: Device; label: string; icon: IconName; width: string }[] = [
    { id: 'desktop', label: 'Desktop', icon: 'monitor', width: '100%' },
    { id: 'tablet', label: 'Tablet', icon: 'tablet', width: '834px' },
    { id: 'mobile', label: 'Mobile', icon: 'mobile', width: '390px' },
  ];
  protected readonly device = signal<Device>('desktop');
  protected readonly width = computed(() => this.devices.find((d) => d.id === this.device())!.width);

  constructor() {
    const body = inject(DOCUMENT).body;
    body.classList.add('no-scroll');
    inject(DestroyRef).onDestroy(() => body.classList.remove('no-scroll'));

    const title = inject(Title);
    effect(() => {
      const p = this.project();
      title.setTitle(p ? `${p.title} demo — ${PROFILE.name}` : `Demo not found — ${PROFILE.name}`);
    });
  }
}
