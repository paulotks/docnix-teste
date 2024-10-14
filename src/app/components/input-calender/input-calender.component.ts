import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';


@Component({
    selector: 'app-input-calender',
    standalone: true,
    imports: [CalendarModule, FormsModule, CommonModule],
    templateUrl: './input-calender.component.html',
    styleUrl: './input-calender.component.scss'
})
export class InputCalenderComponent implements ControlValueAccessor {
    label = input.required();
    id = input.required();

    //setup
    private ngControl = inject(NgControl, { optional: true });
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
        this.onChange = fn;
    }
    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
    setDisabledState?(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    isControlInvalid(): boolean {
        const control = this.ngControl?.control;
        if (control) {
            return control.invalid && control.touched && control.dirty;
        }
        return false;
    }

    getErrorMessage(): string {
        const control = this.ngControl?.control;
        console.log(control?.errors)
        if (control) {
            if (control.errors?.['required'] && control.dirty) {
                return 'Este campo é obrigatório.';
            }
            if (control.errors?.['pattern'] && control.dirty) {
                return 'Formato inválido.';
            }
        }
        return '';
    }


}