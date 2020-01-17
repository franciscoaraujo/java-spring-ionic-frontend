import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import { CameraOriginal } from '@ionic-native/camera';



/**Refazer a parte de envio de fotos profile em casa!!! */
@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
  ],
  providers:[
    CameraOriginal
  ]
})
export class ProfilePageModule {}
