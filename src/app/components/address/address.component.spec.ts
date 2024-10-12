import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddresComponent } from './address.component';

describe('AddresComponent', () => {
  let component: AddresComponent;
  let fixture: ComponentFixture<AddresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
