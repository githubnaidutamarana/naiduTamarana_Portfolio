import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DEMO_PROJECTS } from '../../../../core/data/projects.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-demo-projects',
  imports: [RouterLink, Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--dark" id="demos">
      <div class="container">
        <app-section-heading
          eyebrow="Demo / prototype projects"
          title="Interactive demos you can click through"
          lead="Standalone prototypes I built to demonstrate complete patient workflows end to end. They run entirely in the browser." />

        <p class="notice" appReveal>
          <app-icon name="info" [size]="18" />
          <span>Prototypes use mock data and are separate from production code — no real patient data. The real project work is described in each case study.</span>
        </p>

        <div class="demos-grid">
          @for (p of projects; track p.slug; let i = $index) {
            @if (p.demo; as demo) {
              <article class="demo-card" [appReveal]="i * 80">
                <a class="demo-card__media" [routerLink]="['/demos', p.slug]" [attr.aria-label]="'Launch the ' + p.title + ' demo'">
                  <img [src]="demo.screens[0].src" alt="" width="1280" height="800" loading="lazy" decoding="async" />
                  <span class="demo-card__play" aria-hidden="true"><app-icon name="play" [size]="22" /></span>
                </a>
                <div class="demo-card__body">
                  <div class="demo-card__top">
                    <h3>{{ p.title }}</h3>
                    <span class="demo-card__count">{{ demo.flows.length }} flows</span>
                  </div>
                  <p>{{ demo.flows.slice(0, 3).join(' · ') }}</p>
                  <ul class="chips chips--sm chips--dark">
                    @for (s of demo.stack; track s) {
                      <li class="chip">{{ s }}</li>
                    }
                  </ul>
                  <div class="demo-card__actions">
                    <a class="btn btn--primary btn--sm" [routerLink]="['/demos', p.slug]">
                      <app-icon name="play" [size]="14" /> Launch demo
                    </a>
                    <a class="btn btn--glass btn--sm" [href]="demo.url" target="_blank" rel="noopener">
                      New tab <app-icon name="external" [size]="14" />
                    </a>
                    <a class="link-light" [routerLink]="['/projects', p.slug]">Case study</a>
                  </div>
                </div>
              </article>
            }
          }
        </div>
      </div>
    </section>
  `,
})
export class DemoProjects {
  protected readonly projects = DEMO_PROJECTS;
}
