import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-input-calender',
  standalone: true,
  imports: [CalendarModule, FormsModule],
  templateUrl: './input-calender.component.html',
  styleUrl: './input-calender.component.scss'
})
export class InputCalenderComponent implements ControlValueAccessor {
  label = input.required();
  
  //setup
  private ngControl = inject(NgControl, { optional: true});
  protected value = '';
  protected onTouched?: () => {}
  protected onChange?: (value: string) => {}
  protected isDisabled: boolean = false

  constructor() {
      if (this.ngControl) {
          this.ngControl.valueAccessor = this;
      }
  }

  writeValue(obj: string): void {
      this.value = obj;
  }
  registerOnChange(fn: any): void {
      this.onChange = fn
  }
  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
      this.isDisabled = isDisabled;
  }


}