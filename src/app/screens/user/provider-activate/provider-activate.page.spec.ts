import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProviderActivatePage } from './provider-activate.page';

describe('ProviderActivatePage', () => {
  let component: ProviderActivatePage;
  let fixture: ComponentFixture<ProviderActivatePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ProviderActivatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
