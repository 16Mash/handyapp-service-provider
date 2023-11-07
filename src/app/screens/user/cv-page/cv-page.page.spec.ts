import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CvPagePage } from './cv-page.page';

describe('CvPagePage', () => {
  let component: CvPagePage;
  let fixture: ComponentFixture<CvPagePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CvPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
