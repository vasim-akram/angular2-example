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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_routes_1 = require("./route-example/app.routes");
var app_component_1 = require("./app.component");
var message_list_component_1 = require("./service-example/message-list.component");
var register_form_component_1 = require("./form-example/template-driven/register-form.component"); // template-driven
var model_driven_form_component_1 = require("./form-example/model-driven/model-driven-form.component"); // model-driven/reactive-driven
var home_component_1 = require("./route-example/home.component");
var about_component_1 = require("./route-example/about.component");
var http_component_1 = require("./http-example/http.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(app_routes_1.routes), http_1.HttpModule],
        declarations: [app_component_1.AppComponent, message_list_component_1.MessageListComponent, register_form_component_1.RegisterComponent, model_driven_form_component_1.ModelDrivenForm, home_component_1.HomeComponent, about_component_1.AboutComponent, http_component_1.HttpComponent],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map