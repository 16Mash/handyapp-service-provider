import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.page.html',
  styleUrls: ['./category-list.page.scss'],
})
export class CategoryListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
