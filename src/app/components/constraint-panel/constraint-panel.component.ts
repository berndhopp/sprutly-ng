import {Component} from '@angular/core';
import {ConstraintHolderService} from "../../../service/constraint-holder.service";
import * as _ from 'lodash'
import {SearchService} from "../../../service/search.service";

@Component({
  selector: 'app-constraint-panel',
  templateUrl: './constraint-panel.component.html',
  styleUrls: ['./constraint-panel.component.css']
})
export class ConstraintPanelComponent {
  constructor(
    public constraintHolder: ConstraintHolderService,
    public searchService: SearchService
  ) {
  }
}
