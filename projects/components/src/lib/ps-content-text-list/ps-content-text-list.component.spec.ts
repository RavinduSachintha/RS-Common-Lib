import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsContentTextListComponent } from './ps-content-text-list.component';

describe('PsContentTextListComponent', () => {
  let component: PsContentTextListComponent;
  let fixture: ComponentFixture<PsContentTextListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsContentTextListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsContentTextListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
