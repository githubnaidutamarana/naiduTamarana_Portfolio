import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../../../core/data/profile.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { IconName } from '../../../../shared/components/icon/icons';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-about',
  imports: [RouterLink, Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section" id="about">
      <div class="container about">
        <div class="about__copy">
          <app-section-heading eyebrow="About me" title="A frontend developer working inside real clinical software" />
          @for (p of profile.about; track $index) {
            <p class="about__text" appReveal>{{ p }}</p>
          }
        </div>

        <aside class="card facts" [appReveal]="120">
          <h3 class="facts__title">At a glance</h3>
          <dl>
            @for (f of facts; track f.label) {
              <div class="facts__row">
                <dt><app-icon [name]="f.icon" [size]="16" /> {{ f.label }}</dt>
                <dd>{{ f.value }}</dd>
              </div>
            }
          </dl>
          <a class="btn btn--primary btn--block" routerLink="/" fragment="contact">
            Get in touch <app-icon name="arrow-right" />
          </a>
        </aside>
      </div>
    </section>
  `,
})
export class About {
  protected readonly profile = PROFILE;
  protected readonly facts: { icon: IconName; label: string; value: string }[] = [
    { icon: 'briefcase', label: 'Role', value: PROFILE.role },
    { icon: 'layers', label: 'Company', value: PROFILE.company },
    { icon: 'award', label: 'Experience', value: PROFILE.experience },
    { icon: 'pulse', label: 'Domain', value: 'Healthcare · EHR/EMR · ASC' },
    { icon: 'code', label: 'Frontend', value: 'Angular 20, AngularJS, TypeScript' },
    { icon: 'server', label: 'Backend', value: '.NET Core Web API, REST' },
    { icon: 'pin', label: 'Location', value: PROFILE.location },
  ];
}
