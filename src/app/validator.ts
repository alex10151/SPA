import {FormControl} from '@angular/forms';


export function ValidatorMA(control: FormControl): { [s: string]: boolean } {
  if (control.value < 10 || control.value > 420) {
    return {invalid: true};
  }
}
export function ValidatorFOV(control: FormControl): { [s: string]: boolean } {
  if (control.value < 40 || control.value > 520) {
    return {invalid: true};
  }
}
export function ValidatorDenoise(control: FormControl): { [s: string]: boolean } {
  if (control.value < 0 || control.value > 1) {
    return {invalid: true};
  }
}
export function ValidatorOverlap(control: FormControl): { [s: string]: boolean } {
  if (control.value < 0 || control.value > 100) {
    return {invalid: true};
  }
}
export function ValidatorNegative(control: FormControl): { [s: string]: boolean } {
  if (control.value < 0) {
    return {invalid: true};
  }
}
