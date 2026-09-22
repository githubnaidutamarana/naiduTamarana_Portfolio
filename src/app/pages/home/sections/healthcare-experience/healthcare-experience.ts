import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HEALTHCARE_AREAS, OPHTHALMOLOGY_WORK } from '../../../../core/data/profile.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-healthcare-experience',
  imports: [Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--tint" id="healthcare">
      <div class="container healthcare">
        <div class="healthcare__intro">
          <app-section-heading
            eyebrow="Healthcare experience"
            title="Built around clinical workflows"
            lead="Healthcare software needs accurate data, secure flows and screens that clinicians and patients can trust. These are the areas I've worked in." />
          <div class="card healthcare__panel" appReveal>
            <h3>Healthcare Management System — Ophthalmology</h3>
            <p>EHNOTE · Angular 20, AngularJS, RESTful APIs</p>
            <ul class="ticks ticks--compact">
              @for (w of ophthalmology; track w) {
                <li>{{ w }}</li>
              }
            </ul>
          </div>
        </div>

        <div class="domain-grid">
          @for (a of areas; track a.title; let i = $index) {
            <article class="domain-card" [appReveal]="i * 50">
              <span class="icon-tile icon-tile--teal"><app-icon [name]="a.icon" /></span>
              <div>
                <h3>{{ a.title }}</h3>
                <p>{{ a.description }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class HealthcareExperience {
  protected readonly areas = HEALTHCARE_AREAS;
  protected readonly ophthalmology = OPHTHALMOLOGY_WORK;
}
