import { ChangeDetectionStrategy, Component, computed, effect, inject, input, linkedSignal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../core/data/profile.data';
import { PROJECTS, findProject } from '../../core/data/projects.data';
import { Icon } from '../../shared/components/icon/icon';
import { ProjectVisual } from '../../shared/components/project-visual/project-visual';

@Component({
  selector: 'app-project-detail',
  imports: [RouterLink, Icon, ProjectVisual],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './project-detail.html',
})
export class ProjectDetail {
  /** Bound from the `:slug` route param. */
  readonly slug = input.required<string>();

  protected readonly project = computed(() => findProject(this.slug()));
  protected readonly activeScreen = linkedSignal(() => (this.slug(), 0));

  private readonly index = computed(() => PROJECTS.findIndex((p) => p.slug === this.slug()));
  protected readonly prev = computed(() => PROJECTS[this.index() - 1]);
  protected readonly next = computed(() => (this.index() >= 0 ? PROJECTS[this.index() + 1] : undefined));

  constructor() {
    const title = inject(Title);
    effect(() => {
      const p = this.project();
      title.setTitle(p ? `${p.title} — ${PROFILE.name}` : `Project not found — ${PROFILE.name}`);
    });
  }
}
