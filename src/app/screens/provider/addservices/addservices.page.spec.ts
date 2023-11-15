import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddservicesPage } from './addservices.page';

describe('AddservicesPage', () => {
  let component: AddservicesPage;
  let fixture: ComponentFixture<AddservicesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
