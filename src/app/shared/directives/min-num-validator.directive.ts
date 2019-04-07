import { Directive } from '@angular/core';
import {  
  ReactiveFormsModule,  
  NG_VALIDATORS,  
  FormsModule,  
  FormGroup,  
  FormControl,  
  ValidatorFn,  
  Validator  
 } from '@angular/forms'; 

@Directive({
  selector: '[minNumValidator][ngModel]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: null,
      multi: true
    }
  ]
})
export class MinNumValidatorDirective implements Validator{

  validator: ValidatorFn;

  constructor() {
    this.validator = this.minNumValidator();
  }

  validate(c: FormControl) {
    return this.validator(c);
  }

  minNumValidator(): ValidatorFn {
    return (c: FormControl) => {
      let isValid = /^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/.test(c.value);
      if (isValid) {
        return null;
      } else {
        return { 
          minNumValidator: {
            valid: false
          }
        }
      }
    }
  }
}
