import { TestBed } from '@angular/core/testing';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { RouterTestingHarness } from '@angular/router/testing';
import { routes } from './app.routes';
import { PROJECTS } from './core/data/projects.data';

describe('Portfolio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideRouter(routes, withComponentInputBinding())] });
  });

  it('renders the hero on the home page', async () => {
    const harness = await RouterTestingHarness.create('/');
    const el = harness.routeNativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Naidu Tamarana');
    expect(el.querySelectorAll('app-project-card').length).toBe(PROJECTS.length);
  });

  it('renders a project case study', async () => {
    const harness = await RouterTestingHarness.create('/projects/bill-pay');
    const el = harness.routeNativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Bill Pay');
  });

  it('has unique slugs and complete demo data', () => {
    expect(new Set(PROJECTS.map((p) => p.slug)).size).toBe(PROJECTS.length);
    for (const p of PROJECTS.filter((x) => x.demo)) {
      expect(p.demo!.url).toMatch(/^prototypes\/.+\.html$/);
      expect(p.demo!.screens.length).toBeGreaterThan(0);
    }
  });
});
