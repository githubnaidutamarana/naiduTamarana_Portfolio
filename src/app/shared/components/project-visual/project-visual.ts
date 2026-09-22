import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { Project } from '../../../core/models/portfolio.models';

/** Browser-framed screenshot of a prototype, or an illustration when no demo exists. */
@Component({
  selector: 'app-project-visual',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'project-visual' },
  template: `
    <div class="browser">
      <div class="browser__bar" aria-hidden="true">
        <i></i><i></i><i></i>
        <span class="browser__url">{{ url() }}</span>
      </div>
      @if (shot(); as s) {
        <img class="browser__shot" [src]="s.src" [alt]="project().title + ' — ' + s.caption"
             width="1280" height="800" loading="lazy" decoding="async" />
      } @else {
        <div class="schematic" role="img"
             aria-label="Illustration of an EHR screen: a data-bound form with a custom dropdown, a date picker and a REST API request">
          <div class="schematic__nav"><b></b><span></span><span class="on"></span><span></span><span></span><span></span></div>
          <div class="schematic__main">
            <div class="schematic__head">
              <strong>Patient Registration</strong>
              <em class="pill-api">GET /api/patients <b>200</b></em>
            </div>
            <div class="schematic__form">
              <div class="sf"><small>Patient name</small><span class="bar w70"></span></div>
              <div class="sf"><small>Date of birth</small><span class="bar w40"></span></div>
              <div class="sf">
                <small>Provider ▾</small>
                <ul class="dd"><li></li><li class="on"></li><li></li></ul>
              </div>
              <div class="sf">
                <small>Appointment</small>
                <div class="cal">
                  @for (d of days; track d) { <i [class.on]="d === 9"></i> }
                </div>
              </div>
            </div>
            <div class="schematic__code">vm.patient = <b>response.data</b>;</div>
          </div>
        </div>
      }
    </div>
    @if (!project().demo) {
      <p class="project-visual__note">Illustration · production screens not shown</p>
    }
  `,
})
export class ProjectVisual {
  readonly project = input.required<Project>();
  readonly screen = input(0);

  protected readonly days = Array.from({ length: 14 }, (_, i) => i);
  protected readonly shot = computed(() => this.project().demo?.screens[this.screen()]);
  protected readonly url = computed(() =>
    this.project().demo ? `prototype / ${this.project().slug}` : 'ehr-platform / patient-registration',
  );
}
