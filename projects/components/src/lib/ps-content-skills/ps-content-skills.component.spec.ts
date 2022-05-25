import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsContentSkillsComponent } from './ps-content-skills.component';

describe('PsContentSkillsComponent', () => {
  let component: PsContentSkillsComponent;
  let fixture: ComponentFixture<PsContentSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsContentSkillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsContentSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
