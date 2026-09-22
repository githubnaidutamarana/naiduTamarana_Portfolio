import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../../../core/data/profile.data';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-experience',
  imports: [Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="experience">
      <div class="container">
        <app-section-heading
          eyebrow="Experience"
          title="Real-world healthcare product experience"
          lead="Production work on clinical applications — frontend engineering, API integration and release support." />

        @for (job of jobs; track job.company) {
          <article class="card job" appReveal>
            <header class="job__head">
              <div class="job__logo" aria-hidden="true">{{ job.company.slice(0, 2) }}</div>
              <div>
                <h3 class="job__role">{{ job.role }}</h3>
                <p class="job__company">{{ job.company }} · {{ job.location }}</p>
              </div>
              <span class="badge badge--live"><span class="pulse-dot" aria-hidden="true"></span>{{ job.period }}</span>
            </header>

            <p class="job__summary">{{ job.summary }}</p>

            <div class="job__groups">
              @for (g of job.groups; track g.title) {
                <div class="job__group">
                  <h4>{{ g.title }}</h4>
                  <ul class="ticks">
                    @for (item of g.items; track item) {
                      <li>{{ item }}</li>
                    }
                  </ul>
                </div>
              }
            </div>

            <footer class="job__modules">
              <span class="job__modules-label">Modules developed &amp; maintained</span>
              <ul class="chips chips--sm">
                @for (m of job.modules; track m) {
                  <li class="chip">{{ m }}</li>
                }
              </ul>
            </footer>
          </article>
        }
      </div>
    </section>
  `,
})
export class ExperienceSection {
  protected readonly jobs = EXPERIENCE;
}
