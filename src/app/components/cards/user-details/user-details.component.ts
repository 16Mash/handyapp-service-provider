import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent  implements OnInit {
  @Input() text:string|undefined;
  @Input() icon:string|undefined;
  constructor() { }

  ngOnInit() {}

}
