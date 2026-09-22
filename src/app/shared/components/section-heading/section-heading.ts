import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Reveal } from '../../directives/reveal';

@Component({
  selector: 'app-section-heading',
  imports: [Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="section-heading" [class.section-heading--center]="center()" appReveal>
      <p class="eyebrow">{{ eyebrow() }}</p>
      <h2 class="section-heading__title">{{ title() }}</h2>
      @if (lead()) {
        <p class="section-heading__lead">{{ lead() }}</p>
      }
    </header>
  `,
})
export class SectionHeading {
  readonly eyebrow = input.required<string>();
  readonly title = input.required<string>();
  readonly lead = input<string>();
  readonly center = input(false);
}
