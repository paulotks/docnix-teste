import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'app-input',
    standalone: true,
    imports: [InputTextModule, FormsModule, CommonModule],
    templateUrl: './input.component.html',
    styleUrl: './input.component.scss',
    
})
export class InputComponent implements ControlValueAccessor {
    label = input.required<string>();
    id = input.required<string>();
    placeHolder = input.required<string>();
    
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

    isControlInvalid(): boolean {
        const control = this.ngControl?.control;
        if (control) {
            return control.invalid && control.touched && control.dirty;
        }
        return false;
    }

    getErrorMessage(): string {
        const control = this.ngControl?.control;
        if (control) {
            if (control.invalid && control.errors?.['required'] && control.dirty) {
                return 'Este campo é obrigatório.';
            }
            if (control.invalid && control.errors?.['pattern'] && control.dirty) {
                return 'Formato inválido.';
            }
            if (control.invalid && control.errors?.['minlength'] && control.dirty) {
                return 'Muito curto';
            }
            if (control.invalid && control.errors?.['email'] && control.dirty) {
                return 'E-mail inválido';
            }
            if (control.invalid && control.errors?.['cpfInvalid'] && control.dirty) {
                return 'Cpf inválido';
            }
        }
        return '';
    }
}
