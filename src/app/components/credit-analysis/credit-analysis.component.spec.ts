import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditAnalysisComponent } from './credit-analysis.component';

describe('CreditAnalysisComponent', () => {
  let component: CreditAnalysisComponent;
  let fixture: ComponentFixture<CreditAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreditAnalysisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreditAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
