import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { IonicModule } from "@ionic/angular";
import { UserDetailsComponent } from "./cards/user-details/user-details.component";
import { OutlineBtnComponent } from "./outline-btn/outline-btn.component";
import { ProfileCardComponent } from "./cards/profile-card/profile-card.component";
import { SwipercardComponent } from "./cards/swipercard/swipercard.component";
import { AuthContainerComponent } from "./auth-container/auth-container.component";
import { BtnPrimaryComponent } from "./buttons/btn-primary/btn-primary.component";
import { ButtonBlueComponent } from "./buttons/button-blue/button-blue.component";
import { ButtonOrangeComponent } from "./buttons/button-orange/button-orange.component";
import { ProvidercardComponent } from "./cards/providercard/providercard.component";

@NgModule({
  declarations: [
    UserDetailsComponent,
    OutlineBtnComponent,
    ProfileCardComponent,
    BtnPrimaryComponent,
    SwipercardComponent,
    AuthContainerComponent,
    ButtonBlueComponent,
    ButtonOrangeComponent,
    ProvidercardComponent,

   
  ],
  imports: [CommonModule,IonicModule],
  exports: [
   UserDetailsComponent,
   OutlineBtnComponent,
   ProfileCardComponent,
   BtnPrimaryComponent,
   SwipercardComponent,
   AuthContainerComponent,
   ButtonBlueComponent,
   ButtonOrangeComponent,
   ProvidercardComponent
  ],
})
export class SharedModule {}
 