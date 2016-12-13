import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }
    from '@angular/forms';

@Component({
    selector: "model-driven-form",
    templateUrl: 'app/form-example/model-driven/model-driven-form.html'
})
export class ModelDrivenForm {
    form: FormGroup;

    firstName = new FormControl("", Validators.required);

    constructor(fb: FormBuilder) {
        this.form = fb.group({
            "firstName": this.firstName,
            "password":["", Validators.required]
        });
    }
    onSubmitModelBased() {
        console.log("model-based form submitted");
        console.log(this.form);
    }
}
