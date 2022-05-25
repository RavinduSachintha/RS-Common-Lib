import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsContentOtherProjectsComponent } from './ps-content-other-projects.component';

describe('PsContentOtherProjectsComponent', () => {
  let component: PsContentOtherProjectsComponent;
  let fixture: ComponentFixture<PsContentOtherProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsContentOtherProjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsContentOtherProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
