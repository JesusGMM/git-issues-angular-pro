import { NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { GitHubIssue, State } from '../../interfaces';
import { RouterLink } from '@angular/router';
import { IssueService } from '@issue/services/issue.service';

@Component({
  selector: 'app-issue-item',
  standalone: true,
  imports: [RouterLink, NgStyle],
  templateUrl: './issue-item.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IssueItemComponent {
  issue = input.required<GitHubIssue>();
  issueService = inject(IssueService);

  get isOpen() {
    return this.issue().state === State.Open;
  }

  prefetchData() {
    // this.issueService.prefetchIssue(this.issue().number.toString());
    this.issueService.setIssueData(this.issue());
  }
}
