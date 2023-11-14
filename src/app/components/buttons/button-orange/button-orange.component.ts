import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-orange',
  templateUrl: './button-orange.component.html',
  styleUrls: ['./button-orange.component.scss'],
})
export class ButtonOrangeComponent  implements OnInit {
  @Input() label:String="";
  constructor() { }

  ngOnInit() {}

}
