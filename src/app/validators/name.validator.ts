import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class NameValidator {
  
  //Whitespace validation
  static notOnlyWhitespace(control: FormControl): ValidationErrors | null{
    // check if string only contains whitespace
    if((control.value != null) && (control.value.trim().length === 0 || control.value.startsWith(' ') || control.value.endsWith(' '))){
      //invalid, return error object
      return {'notOnlyWhitespace': true};
    }else{
      // valid, return null
      return null;
    }
  }

  // LastName validator min length
   static minLengthDisplayed(control: FormControl): ValidationErrors | null{
    if(control.value != null && control.value.trim().length >0 && control.value.trim().length <2 && !control.value.startsWith(' ') && !control.value.endsWith(' ')){
      // alert("Inférieur")
      return {'minLengthDisplayed': true};
    }else{
      // valid, return null
      return null;
    }
  }

  // FirstName validator max length
  static maxLengthDisplayed(control: FormControl): ValidationErrors | null{
    if(control.value != null && control.value.trim().length >40 && !control.value.startsWith(' ') && !control.value.endsWith(' ')){
      // alert("Supérieur");
      return {'maxLengthDisplayed': true};
    }
    else{
      // valid, return null
      return null;
    }
  }

  // Ca doit contenir que des lettres et des nombres
  static checkValidOnlyLetterOrNumber(control: FormControl): ValidationErrors | null{
    const isNonWhiteSpace = /^\S*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^*()+={}\[\]|\\:;"'<>,°²£µ§&`.?/_₹]).*$/;
    if(control.value != null && isContainsSymbol.test(control.value)){
      return {'checkValidOnlyLetterOrNumber': true};
    }else{
      return null;
    }
  }

  // Ca doit contenir que des lettres
  static checkOnlyLetterValidator(control: FormControl): ValidationErrors | null{
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,°²£µ§&`.?/_₹]).*$/;
    if (control.value != null && isContainsNumber.test(control.value) || isContainsSymbol.test(control.value)) {
      return {'checkOnlyLetterValidator': true};
    }else{
      return null;
    }
  }

  // Validate adresse 
  static checkAdresseValidator(control: FormControl): ValidationErrors | null{
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    /*@Pour vérifier si l'adresse contient au moins une lettre*/
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\;"'<>°²£µ§&`?₹]).*$/;
    if (control.value != null && isContainsNumber.test(control.value) && (!isContainsLowercase.test(control.value) && !isContainsUppercase.test(control.value))) {
      // console.log("Adresse validation....");
      return {'checkAdresseValidator': true};
    }else{
      return null;
    }
  }

  // Validate adresse  
  static validAdresseValidator(control: FormControl): ValidationErrors | null{
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    /*@Pour vérifier si l'adresse contient au moins une lettre*/
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsSymbol = /^(?=.*[-,.]).*$/;
    if (control.value != null && isContainsSymbol.test(control.value) && !isContainsNumber.test(control.value) && (!isContainsLowercase.test(control.value) && !isContainsUppercase.test(control.value))) {
      return {'validAdresseValidator': true};
    }else{
      return null;
    }
  }

  // Ca doit contenir que des nombres
  static checkOnlyNumberValidator(control: FormControl): ValidationErrors | null{
    // const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (control.value != null && isContainsUppercase.test(control.value) || isContainsLowercase.test(control.value) || isContainsSymbol.test(control.value)) {
      return {'checkOnlyNumberValidator': true};
    }else{
      return null;
    }
  }

  // Validate password
  static checkPasswordValidity(control: FormControl): ValidationErrors | null{
    const isNonWhiteSpace = /^\S*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
    if (control.value != null && !isNonWhiteSpace.test(control.value) || !isContainsUppercase.test(control.value) ||
        !isContainsLowercase.test(control.value) || !isContainsNumber.test(control.value) ||
        !isContainsSymbol.test(control.value)) {
      return {'checkPasswordValidity': true};
    }
    return null;
    // if (!isValidLength.test(value)) {
    //   return "Password must be 8-16 Characters Long.";
    // }
  }

}


