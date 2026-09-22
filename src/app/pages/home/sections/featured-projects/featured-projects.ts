import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../../../core/data/projects.data';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import { SectionHeading } from '../../../../shared/components/section-heading/section-heading';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-featured-projects',
  imports: [ProjectCard, Reveal, SectionHeading],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="section section--tint" id="projects">
      <div class="container">
        <app-section-heading
          eyebrow="Real project experience"
          title="Featured projects"
          lead="Healthcare products I've worked on. Each case study keeps the real project work separate from the interactive prototype that demonstrates the flow." />
        <div class="projects-grid">
          @for (p of projects; track p.slug; let i = $index) {
            <app-project-card [project]="p" [wide]="!!p.featured" [appReveal]="i * 60" />
          }
        </div>
      </div>
    </section>
  `,
})
export class FeaturedProjects {
  protected readonly projects = PROJECTS;
}
