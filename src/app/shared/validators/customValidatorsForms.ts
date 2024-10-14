import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidatorsForms {

  static validateCpf(control: AbstractControl): ValidationErrors | null {
    const cpf = control.value;
    if (!cpf) {
      return null;
    }

    const cleanCpf = cpf.replace(/[^\d]+/g, '');

    if (cleanCpf.length !== 11 || /^(\d)\1+$/.test(cleanCpf)) {
      return { cpfInvalid: true };
    }

    let sum = 0;
    for (let i = 1; i <= 9; i++) {
      sum += parseInt(cleanCpf.charAt(i - 1), 10) * (11 - i);
    }
    let rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cleanCpf.charAt(9), 10)) {
      return { cpfInvalid: true };
    }

    
    sum = 0;
    for (let i = 1; i <= 10; i++) {
      sum += parseInt(cleanCpf.charAt(i - 1), 10) * (12 - i);
    }
    rest = (sum * 10) % 11;
    if (rest === 10 || rest === 11) rest = 0;
    if (rest !== parseInt(cleanCpf.charAt(10), 10)) {
      return { cpfInvalid: true };
    }

    return null;
  }
}