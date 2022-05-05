import { AbstractControl } from "@angular/forms";

export class MathValidators {

    static addition(form:AbstractControl){
        const {a,b,answer} = form.value;
    
    if (form.value.a + form.value.b === parseInt(form.value.answer)) {
      return null;
    }
    return { addition: true}
    }

}

