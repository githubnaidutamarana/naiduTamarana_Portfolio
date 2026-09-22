import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Project } from '../../../core/models/portfolio.models';
import { Icon } from '../icon/icon';
import { ProjectVisual } from '../project-visual/project-visual';

@Component({
  selector: 'app-project-card',
  imports: [RouterLink, Icon, ProjectVisual],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'project-card-host', '[class.is-wide]': 'wide()' },
  template: `
    <article class="project-card" [class.project-card--wide]="wide()">
      <a class="project-card__media" [routerLink]="link()" tabindex="-1" aria-hidden="true">
        <app-project-visual [project]="project()" />
      </a>
      <div class="project-card__body">
        <div class="project-card__meta">
          <span class="badge badge--real"><app-icon name="briefcase" [size]="13" /> Real project</span>
          <span class="badge">{{ project().category }}</span>
          @if (project().demo) {
            <span class="badge badge--demo"><app-icon name="play" [size]="12" /> Demo available</span>
          }
        </div>
        <h3 class="project-card__title"><a [routerLink]="link()">{{ project().title }}</a></h3>
        <p class="project-card__summary">{{ project().summary }}</p>
        <ul class="ticks ticks--compact" [class.ticks--cols]="wide()">
          @for (h of highlights(); track h) {
            <li>{{ h }}</li>
          }
        </ul>
        @if (wide()) {
          <ul class="chips chips--sm">
            @for (t of project().tags; track t) {
              <li class="chip">{{ t }}</li>
            }
          </ul>
        }
        <div class="project-card__actions">
          <a class="btn btn--primary btn--sm" [routerLink]="link()">
            View case study <app-icon name="arrow-right" [size]="16" />
          </a>
          @if (project().demo) {
            <a class="btn btn--outline btn--sm" [routerLink]="['/demos', project().slug]">
              <app-icon name="play" [size]="14" /> Live demo
            </a>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProjectCard {
  readonly project = input.required<Project>();
  readonly wide = input(false);

  protected readonly link = computed(() => ['/projects', this.project().slug]);
  protected readonly highlights = computed(() => this.project().highlights.slice(0, this.wide() ? 8 : 4));
}
