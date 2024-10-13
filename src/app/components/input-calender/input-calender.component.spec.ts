import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCalenderComponent } from './input-calender.component';

describe('InputCalenderComponent', () => {
  let component: InputCalenderComponent;
  let fixture: ComponentFixture<InputCalenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputCalenderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputCalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
