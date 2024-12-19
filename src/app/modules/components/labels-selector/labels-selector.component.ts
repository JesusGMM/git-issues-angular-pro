import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { GitHubLabel } from '../../interfaces';

@Component({
  selector: 'app-issues-labels-selector',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './labels-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelsSelectorComponent {
  labels = input.required<GitHubLabel[]>();
}
