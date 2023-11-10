import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SigninPage } from './sign-in.page';

describe('SigninPage', () => {
  let component: SigninPage;
  let fixture: ComponentFixture<SigninPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SigninPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
