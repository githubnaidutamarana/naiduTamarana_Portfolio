import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SKILL_GROUPS } from '../../../../core/data/profile.data';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-skills',
  imports: [Icon, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--tint" id="skills">
      <div class="container">
        <app-section-heading
          eyebrow="Skills"
          title="The toolkit I ship with"
          lead="Frontend first, with the API and backend knowledge to take a feature from a Figma design to working data." />
        <div class="skills-grid">
          @for (g of groups; track g.title; let i = $index) {
            <article class="card skill-card" [appReveal]="i * 70">
              <header class="skill-card__head">
                <span class="icon-tile"><app-icon [name]="g.icon" /></span>
                <h3>{{ g.title }}</h3>
              </header>
              <ul class="chips">
                @for (s of g.skills; track s) {
                  <li class="chip">{{ s }}</li>
                }
              </ul>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
}
