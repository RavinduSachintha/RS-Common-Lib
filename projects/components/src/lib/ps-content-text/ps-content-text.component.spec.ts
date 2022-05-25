import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsContentTextComponent } from './ps-content-text.component';

describe('PsContentTextComponent', () => {
  let component: PsContentTextComponent;
  let fixture: ComponentFixture<PsContentTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsContentTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsContentTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
