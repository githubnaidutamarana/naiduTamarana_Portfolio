import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PROFILE } from '../../../../core/data/profile.data';
import { DEMO_PROJECTS, PROJECTS } from '../../../../core/data/projects.data';
import { Stat } from '../../../../core/models/portfolio.models';
import { Icon } from '../../../../shared/components/icon/icon';
import { Reveal } from '../../../../shared/directives/reveal';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, Icon, Reveal],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hero.html',
})
export class Hero {
  protected readonly profile = PROFILE;
  protected readonly photoFailed = signal(false);

  protected readonly stack = ['Angular 20', 'AngularJS', 'TypeScript', 'REST APIs', '.NET Core Web API'];

  protected readonly stats: Stat[] = [
    { value: PROFILE.experience, label: 'Professional experience' },
    { value: PROFILE.company, label: 'Current company' },
    { value: String(PROJECTS.length), label: 'Healthcare projects' },
    { value: String(DEMO_PROJECTS.length), label: 'Live prototypes' },
  ];
}
