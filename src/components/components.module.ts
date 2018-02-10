
import {NgModule} from '@angular/core';
import { ComponentsSearchResultComponent } from './search-result-component/search-result-component';
import {IonicModule} from 'ionic-angular';
import { RepositoryComponent } from './repository/repository.component';
@NgModule({
    declarations:[
        ComponentsSearchResultComponent,
        RepositoryComponent
    ],
    imports: [
        IonicModule,
    ],
    exports:[
        ComponentsSearchResultComponent,
        IonicModule,
        RepositoryComponent
    ],
})

export class componentModule {

}