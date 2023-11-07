import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProviderDetailsPage } from './provider-details.page';

describe('ProviderDetailsPage', () => {
  let component: ProviderDetailsPage;
  let fixture: ComponentFixture<ProviderDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProviderDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
