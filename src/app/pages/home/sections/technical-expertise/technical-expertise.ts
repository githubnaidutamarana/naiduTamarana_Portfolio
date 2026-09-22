import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERTISE, INTEGRATION_SNIPPET } from '../../../../core/data/profile.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { IconName } from '../../../../shared/components/icon/icons';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-technical-expertise',
  imports: [Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="expertise">
      <div class="container">
        <app-section-heading
          eyebrow="Technical expertise"
          title="More than UI — the data layer behind every screen"
          lead="My work covers the full path from a component to the API and back: HTTP requests, REST communication, data binding and .NET Core Web API integration." />

        <div class="card flow" appReveal>
          <div class="flow__panel">
            <p class="flow__label">Request lifecycle</p>
            <ol class="flow__steps">
              @for (s of flow; track s.title) {
                <li class="flow__step">
                  <span class="icon-tile"><app-icon [name]="s.icon" /></span>
                  <strong>{{ s.title }}</strong>
                  <small>{{ s.detail }}</small>
                </li>
              }
            </ol>
          </div>
          <figure class="code-figure">
            <figcaption><app-icon name="code" [size]="15" /> Typical AngularJS → Web API pattern (illustrative)</figcaption>
            <pre class="code"><code>{{ snippet }}</code></pre>
          </figure>
        </div>

        <div class="expertise-grid">
          @for (e of items; track e.title; let i = $index) {
            <article class="card expertise-card" [appReveal]="i * 60">
              <span class="icon-tile icon-tile--teal"><app-icon [name]="e.icon" /></span>
              <h3>{{ e.title }}</h3>
              <p>{{ e.description }}</p>
              <ul class="ticks ticks--compact">
                @for (pt of e.points; track pt) {
                  <li>{{ pt }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class TechnicalExpertise {
  protected readonly items = EXPERTISE;
  protected readonly snippet = INTEGRATION_SNIPPET;
  protected readonly flow: { icon: IconName; title: string; detail: string }[] = [
    { icon: 'layout', title: 'Component / view', detail: 'Angular · AngularJS' },
    { icon: 'code', title: 'Service layer', detail: 'HttpClient · $http' },
    { icon: 'server', title: '.NET Core Web API', detail: 'REST · C#' },
    { icon: 'database', title: 'Response → UI', detail: 'Data binding · state' },
  ];
}
