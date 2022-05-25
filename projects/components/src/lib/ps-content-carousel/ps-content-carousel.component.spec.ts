import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsContentCarouselComponent } from './ps-content-carousel.component';

describe('PsContentCarouselComponent', () => {
  let component: PsContentCarouselComponent;
  let fixture: ComponentFixture<PsContentCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PsContentCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PsContentCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
