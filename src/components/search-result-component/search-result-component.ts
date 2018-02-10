import { Component, Input } from '@angular/core';
import { User } from '../../app/models/user.interface';

/**
 * Generated class for the ComponentsSearchResultComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'search-result-component',
  templateUrl: 'search-result-component.html'
})
export class ComponentsSearchResultComponent {
 

  @Input() user: User

}
