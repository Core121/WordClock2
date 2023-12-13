import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuzzyTimeComponent } from './fuzzy-time.component';

describe('FuzzyTimeComponent', () => {
  let component: FuzzyTimeComponent;
  let fixture: ComponentFixture<FuzzyTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FuzzyTimeComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuzzyTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
