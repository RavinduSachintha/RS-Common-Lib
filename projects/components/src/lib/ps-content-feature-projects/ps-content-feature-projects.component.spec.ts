import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsContentFeatureProjectsComponent } from './ps-content-feature-projects.component';

describe('PsContentFeatureProjectsComponent', () => {
  let component: PsContentFeatureProjectsComponent;
  let fixture: ComponentFixture<PsContentFeatureProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsContentFeatureProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsContentFeatureProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
