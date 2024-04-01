// import { ProfilComponent } from './../account/profil/profil.component';

// Gestion de messages d'erreurs des champs de modifications de l'utilisateur
import { AbstractControl, FormControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validation{

  // Validate required
  static requiredValidator(controlName: string): ValidatorFn {

    return (name: AbstractControl): ValidationErrors |null=>{

      if(!name.value)
      {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      return null;
    };
  }


  // Validate email 
  static emailValidator(email: FormControl):ValidationErrors |null {

    let champ="e-mail";
    let format='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$';

    if(!email.value)
    {
      return { error: true, message: `L'adresse ${champ} est obligatoire.` }
    }

    if(!email.value.match(new RegExp(format)))
    {
      return { error: true, message: `Veuillez saissir une adresse ${champ} valide.` }
    }

    return null;
  }

  // Validate password
  static passWordValidator(controlName: string, minlength: number,
    maxlength: number):ValidatorFn {

    let format='^(?=.*\d)([a-zA-Z\d$@%*+\-_!]{8,15})$';

    return (password: AbstractControl): ValidationErrors |null=>{

      if(!password.value.length)
      {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      if(!password.value.match(new RegExp(format)))
    {
      return { error: true,
        message: `${controlName} doit contenir au moins un chiffre pour un mot de passe fort.`, }
    }
    if(password.value.length<minlength){
      return { error: true, message: `${controlName} doit contenir au moins ${minlength} caractères.` }
    }
    if((password.value != null) && (password.value.startsWith(' ') && password.value.endsWith(' ')))
    {
      return { error: true,
        message: `${controlName} Ce champs ne peut pas contenir des espaces.`, }

    }
      return null;
    };
  }

  // Validate name
  static nameValidator(controlName: string, minLength: number, maxLength: number): ValidatorFn {
    let patternalphabets = '^[A-Za-zéàèîôêûïëüö -]+$';

    return (name: AbstractControl): ValidationErrors |null=>{

      if(!name.value) {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      if(!name.value.match(new RegExp(patternalphabets))) {
        return { error: true,
          message: `${controlName} ne doit contenir que des lettres.`, }
      }
      if(name.value.length < minLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au moins  ${minLength} lettres.`,
        }
      }
      if(name.value.length > maxLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au plus  ${maxLength} lettres.`,
        }
      }
      if((name.value != null) && (name.value.startsWith(' ') && name.value.endsWith(' '))) {
        return { error: true,
          message: `Les espaces de début ou de fin ne sont pas autorisés.`, }
      }
      return null;
    };
  }

  // Ajoute 2 autres option : le nom ne doit pas contenir uniquement des chiffres et uniquement des lettres
  static nameAlphNumValidator(controlName: string, minLength: number, maxLength: number): ValidatorFn {
    let patternalphabets = '^(\s)*[a-zA-Z0-9éàèîôêûïëüö -]+$';
    let patternalphabets2 = '^(\s)*[0-9]+$';
    return (name: AbstractControl): ValidationErrors |null=>{
      if(!name.value) {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      if(!name.value.match(new RegExp(patternalphabets))) {
        return { error: true,
          message: `Le ${controlName} ne doit contenir que des lettres et des chiffres.`, }
      }
      if(name.value.match(new RegExp(patternalphabets2))) {
        return { error: true,
          message: `${controlName} ne doit pas contenir que des chiffres.`, }
      }
      if((name.value != null) && (name.value.startsWith(' ') && name.value.endsWith(' '))) {
        return { error: true,
          message: `${controlName} Ce champs ne peut pas contenir des espaces.`, }

      }
      if(name.value.length < minLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au moins  ${minLength} caractères.`,
        }
      }
      if(name.value.length > maxLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au plus  ${maxLength} caractères.`,
        }
      }
      return null;
    };
  }

  // Validate adresse
  static isValidAdress(controlName: string, minLength: number, maxLength: number): ValidatorFn {
    const isContainsNumber = /^(?=.*[0-9]).*$/;
    const isContainsUppercase = /^(?=.*[A-Z]).*$/;
    const isContainsLowercase = /^(?=.*[a-z]).*$/;
    const isContainsSymbol = /^(?=.*[-,;.]).*$/;
    return (name: AbstractControl): ValidationErrors |null=>{
      if(!name.value) {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      if(isContainsSymbol.test(name.value) && !isContainsNumber.test(name.value) && (!isContainsLowercase.test(name.value) && !isContainsUppercase.test(name.value))) {
        return { error: true,
          message: `${controlName} ne doit pas contenir que des caractères spéciaux.`, }
      }
      if (isContainsNumber.test(name.value) && (!isContainsLowercase.test(name.value) && !isContainsUppercase.test(name.value))) {
        return { error: true,
          message: `${controlName} ne doit pas contenir que des chiffres.`, }
      }
      if(name.value.length < minLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au moins  ${minLength} caractères.`,
        }
      }
      if(name.value.length > maxLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au plus  ${maxLength} caractères.`,
        }
      }
      return null;
    };
  }

  // Validate AlphaNum 
  static isValidAlphNumValidator(controlName: string, minLength: number, maxLength: number): ValidatorFn {
    let patternalphabets = '^(\s)*[a-zA-Z0-9éàèîôêûïëüö -]+$';
    let patternalphabets2 = '^(\s)*[0-9]+$';
    return (name: AbstractControl): ValidationErrors |null=>{
      if(!name.value) {
        return {  error: true, message: `` }
      }
      if(!name.value.match(new RegExp(patternalphabets))) {
        return { error: true,
          message: `Le ${controlName} ne doit contenir que des lettres et des chiffres.`, }
      }
      if(name.value.match(new RegExp(patternalphabets2))) {
        return { error: true,
          message: `${controlName} ne doit pas contenir que des chiffres.`, }
      }
      if((name.value != null) && (name.value.startsWith(' ') && name.value.endsWith(' '))) {
        return { error: true,
          message: `${controlName} Ce champs ne peut pas contenir des espaces.`, }

      }
      if(name.value.length < minLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au moins  ${minLength} caractères.`,
        }
      }
      if(name.value.length > maxLength ) {
        return {
          error: true,
          message: `${controlName} doit contenir au plus  ${maxLength} caractères.`,
        }
      }
      return null;
    };
  }

  // Pour ne pas mettre uniquement des lettres
  static nameAlphNumValidator2(controlName: string, minLength: number,
    maxLength: number): ValidatorFn {
    let patternalphabets = '^(\s)*[a-zA-Z0-9éàèîôêûïëüö -]+$';
    let patternalphabets2 = '^(\s)*[a-zA-Z]+$';
    return (name: AbstractControl): ValidationErrors |null=>{

      if(!name.value)
      {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      if(!name.value.match(new RegExp(patternalphabets)))
      {
        return { error: true,
          message: `Le ${controlName} ne doit contenir que des lettres et des chiffres.`, }
      }

      if(name.value.match(new RegExp(patternalphabets2)))
      {
        return { error: true,
          message: `${controlName} ne doit pas contenir que des lettres.`, }
      }

      if((name.value != null) && (name.value.startsWith(' ') && name.value.endsWith(' ')))
      {
        return { error: true,
          message: `${controlName} Ce champs ne peut pas contenir des espaces.`, }

      }

    if(name.value.length < minLength )
    {
      return {
        error: true,
        message: `${controlName} doit contenir au moins  ${minLength} caractères.`,
      }

    }
    if(name.value.length > maxLength )
    {
      return {
        error: true,
        message: `${controlName} doit contenir au plus  ${maxLength} caractères.`,
      }
    }

      return null;
    };
  }

  // Pour ne pas mettre uniquement des chiffres
   static nameAlphNumValidator3(controlName: string, minLength: number,
    maxLength: number): ValidatorFn {
    let patternalphabets = '^(\s)*[a-zA-Z0-9éàèîôêûïëüö -]+$';
    let patternalphabets3 = '^(\s)*[0-9]+$';
    return (name: AbstractControl): ValidationErrors |null=>{

      if(!name.value)
      {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      if(!name.value.match(new RegExp(patternalphabets)))
      {
        return { error: true,
          message: `Le ${controlName} ne doit contenir que des lettres et des chiffres.`, }
      }

      if(name.value.match(new RegExp(patternalphabets3)))
      {
        return { error: true,
          message: `${controlName} ne doit pas contenir que des chiffres.`, }
      }

      if((name.value != null) && (name.value.startsWith(' ') && name.value.endsWith(' ')))
      {
        return { error: true,
          message: `${controlName} Ce champs ne peut pas contenir des espaces.`, }

      }

    if(name.value.length < minLength )
    {
      return {
        error: true,
        message: `${controlName} doit contenir au moins  ${minLength} caractères.`,
      }

    }
    if(name.value.length > maxLength )
    {
      return {
        error: true,
        message: `${controlName} doit contenir au plus  ${maxLength} caractères.`,
      }
    }

      return null;
    };
  }
  
  // Validate téléphone
  static phoneValidator(controlName: string, minLength: number,
    maxLength: number): ValidatorFn {

    let pattern = '^[0-9+]+(\.?[0-9]+)?$';

    return (phone: AbstractControl): ValidationErrors |null=>{

      if(!phone.value)
      {
        return {  error: true, message: `${controlName} est obligatoire.` }
      }
      if(!phone.value.match(new RegExp(pattern)))
    {
      return { error: true,
        message: `${controlName} ne doit contenir que des chiffres.`, }
    }
    if(phone.value.length < minLength )
    {
      return {
        error: true,
        message: `${controlName} doit contenir au moins  ${minLength} chiffres.`,
      }

    }
    if(phone.value.length > maxLength )
    {
      return {
        error: true,
        message: `${controlName} doit contenir au plus  ${maxLength} chiffres`,
      }
    }
      return null;
    };
  }

  // Validate min, max attributes
  static checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (c.value && (isNaN(c.value) || c.value < min || c.value > max)) {
            return { 'range': true };
        }
        return null;
    };
  }

  // Validate files 1
  static file?: File;
  static fileValidatorOne(nameFiles: FormControl): ValidationErrors |null {
    // this.file=ProfilComponent.files;
      if(!nameFiles.value)
      {
        return {  error: true, message: `Le est obligatoire.` }
      }
      if ( this.file?.type != 'image/png' ) {
        // console.log(this.file?.type)
        return {
        error: true,
        message: ` Le type est invalid.`, }

    }
      return null;
  }

  // Validate files 2
  // static fileValidator1(nameFiles: FormControl): ValidationErrors |null {
  //   const file: File = ProfilComponent.files;

  //     if(!nameFiles.value)
  //     {
  //       return {  error: true, message: `Le est obligatoire.` }
  //     }
  //   if ( file.type == "image/jpeg" || file.type == 'image/png' || file.type =='image/jpg') {

  //       if(file.size<=2000000)
  //       {
  //         return{
  //           error:true, message:'la taille doit etre inferieur à 2Mo'
  //         }
  //       }

  //   }
  //   else{

  //     return {
  //       error: true,
  //       message: ` Le type est invalid.`, }
  //   }

  //     return null;

  // }

}


