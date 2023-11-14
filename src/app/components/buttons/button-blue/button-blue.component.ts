import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-blue',
  templateUrl: './button-blue.component.html',
  styleUrls: ['./button-blue.component.scss'],
})
export class ButtonBlueComponent  implements OnInit {
  @Input() label:String="";
  constructor() { }

  ngOnInit() {}

}
