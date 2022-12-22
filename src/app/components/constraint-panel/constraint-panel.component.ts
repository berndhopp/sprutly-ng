import {Component} from '@angular/core';
import {OfferConstraintService} from "../../../service/offer-constraint.service";
import * as _ from 'lodash'

@Component({
  selector: 'app-constraint-panel',
  templateUrl: './constraint-panel.component.html',
  styleUrls: ['./constraint-panel.component.css']
})
export class ConstraintPanelComponent {
  constructor(public offerConstraintService: OfferConstraintService) {
  }

  get house(): boolean {
    return this.categories.includes('House')
  }

  get apartment(): boolean {
    return this.categories.includes('Apartment')
  }

  private get categories(): ('House' | 'Apartment') [] {
    return this.offerConstraintService.offerSearchRequest.propertyCategories
  }

  set house(value) {
    if (value) {
      if (!this.house) {
        this.categories.push('House')
      }
    } else {
      if (this.house) {
        _.remove(this.categories, category => category == 'House')
      }
    }
  }

  set apartment(value) {
    if (value) {
      if (!this.house) {
        this.categories.push('Apartment')
      }
    } else {
      if (this.house) {
        _.remove(this.categories, category => category == 'Apartment')
      }
    }
  }
}
