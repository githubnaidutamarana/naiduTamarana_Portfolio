import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATIONS, EDUCATION } from '../../../../core/data/profile.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-education',
  imports: [Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="education">
      <div class="container">
        <app-section-heading eyebrow="Education & certification" title="Education" />
        <div class="edu-grid">
          @for (e of education; track e.institution) {
            <article class="card edu-card" appReveal>
              <span class="icon-tile"><app-icon name="graduation" /></span>
              <div>
                <p class="edu-card__period">{{ e.period }}</p>
                <h3>{{ e.program }}</h3>
                <p class="edu-card__inst">{{ e.institution }}</p>
                <p class="edu-card__loc"><app-icon name="pin" [size]="14" /> {{ e.location }}</p>
              </div>
            </article>
          }
          @for (c of certifications; track c.title) {
            <article class="card edu-card" [appReveal]="80">
              <span class="icon-tile icon-tile--teal"><app-icon name="award" /></span>
              <div>
                <p class="edu-card__period">{{ c.year }}</p>
                <h3>{{ c.title }}</h3>
                <p class="edu-card__inst">Certification</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationSection {
  protected readonly education = EDUCATION;
  protected readonly certifications = CERTIFICATIONS;
}
