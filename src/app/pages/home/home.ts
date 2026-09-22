import { ChangeDetectionStrategy, Component } from '@angular/core';
import { About } from './sections/about/about';
import { Contact } from './sections/contact/contact';
import { DemoProjects } from './sections/demo-projects/demo-projects';
import { EducationSection } from './sections/education/education';
import { ExperienceSection } from './sections/experience/experience';
import { FeaturedProjects } from './sections/featured-projects/featured-projects';
import { HealthcareExperience } from './sections/healthcare-experience/healthcare-experience';
import { Hero } from './sections/hero/hero';
import { Skills } from './sections/skills/skills';
import { TechnicalExpertise } from './sections/technical-expertise/technical-expertise';

@Component({
  selector: 'app-home',
  imports: [
    Hero, About, Skills, ExperienceSection, FeaturedProjects, DemoProjects,
    TechnicalExpertise, HealthcareExperience, EducationSection, Contact,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero />
    <app-about />
    <app-skills />
    <app-experience />
    <app-featured-projects />
    <app-demo-projects />
    <app-technical-expertise />
    <app-healthcare-experience />
    <app-education />
    <app-contact />
  `,
})
export class Home {}
