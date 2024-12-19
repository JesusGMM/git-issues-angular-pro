import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IssueItemComponent } from '@issue/components/issue-item/issue-item.component';
import { LabelsSelectorComponent } from '@issue/components/labels-selector/labels-selector.component';
import { State } from '@issue/interfaces';
import { IssuesService } from '@issue/services/issues.service';

@Component({
  selector: 'app-issues-list',
  imports: [LabelsSelectorComponent, IssueItemComponent],
  templateUrl: './issues-list.component.html',
  styleUrl: './issues-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuesListComponent {

  issuesService = inject(IssuesService);

  get labelsQuery() {
    return this.issuesService.labelsQuery;
  }

  get issuesQuery() {
    return this.issuesService.issuesQuery;
  }

  onChangeState(newState: string) {
    const state =
      {
        all: State.All,
        open: State.Open,
        closed: State.Closed,
      }[newState] ?? State.All;

    this.issuesService.showIssuesByState(state);
  }

}
