import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { UserDetailsComponent } from "./cards/user-details/user-details.component";
import { OutlineBtnComponent } from "./outline-btn/outline-btn.component";
import { ProfileCardComponent } from "./cards/profile-card/profile-card.component";
import { SwipercardComponent } from "./cards/swipercard/swipercard.component";

@NgModule({
  declarations: [
    UserDetailsComponent,
    OutlineBtnComponent,
    ProfileCardComponent,
    SwipercardComponent
   
  ],
  imports: [CommonModule,IonicModule],
  exports: [
   UserDetailsComponent,
   OutlineBtnComponent,
   ProfileCardComponent,
   SwipercardComponent
  ],
})
export class SharedModule {}
 