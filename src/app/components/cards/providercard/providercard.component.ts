import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-providercard',
  templateUrl: './providercard.component.html',
  styleUrls: ['./providercard.component.scss'],
})
export class ProvidercardComponent  implements OnInit {
@Input() data:any;
@Input() id:any;
  constructor(private _router :Router) { }

  ngOnInit() {}


  navigate(){
    this._router.navigate(['/provider-details/'+this.id])
  }
}
