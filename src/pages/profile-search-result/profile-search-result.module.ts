import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfileSearchResultPage } from './profile-search-result';
import {componentModule} from '../../components/components.module';

@NgModule({
  declarations: [
    ProfileSearchResultPage,
  ],
  imports: [
    IonicPageModule.forChild(ProfileSearchResultPage),
    componentModule
  ],
})
export class ProfileSearchResultPageModule {}
