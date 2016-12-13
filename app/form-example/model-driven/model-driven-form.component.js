"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ModelDrivenForm = (function () {
    function ModelDrivenForm(fb) {
        this.firstName = new forms_1.FormControl("", forms_1.Validators.required);
        this.form = fb.group({
            "firstName": this.firstName,
            "password": ["", forms_1.Validators.required]
        });
    }
    ModelDrivenForm.prototype.onSubmitModelBased = function () {
        console.log("model-based form submitted");
        console.log(this.form);
    };
    return ModelDrivenForm;
}());
ModelDrivenForm = __decorate([
    core_1.Component({
        selector: "model-driven-form",
        templateUrl: 'app/form-example/model-driven/model-driven-form.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ModelDrivenForm);
exports.ModelDrivenForm = ModelDrivenForm;
//# sourceMappingURL=model-driven-form.component.js.map