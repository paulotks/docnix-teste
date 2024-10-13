import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [InputTextModule, FormsModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    
})
export class InputComponent implements ControlValueAccessor {
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
