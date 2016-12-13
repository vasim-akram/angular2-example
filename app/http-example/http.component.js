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
var http_service_component_1 = require("./http-service.component");
var HttpComponent = (function () {
    function HttpComponent(_httpService) {
        this._httpService = _httpService;
        this.mode = 'Observable';
    }
    HttpComponent.prototype.ngOnInit = function () { this.getHeroes(); };
    HttpComponent.prototype.getHeroes = function () {
        var _this = this;
        this._httpService.getData()
            .subscribe(function (heroes) { return _this.heroes = heroes; }, function (error) { return _this.errorMessage = error; });
    };
    return HttpComponent;
}());
HttpComponent = __decorate([
    core_1.Component({
        selector: 'data-list',
        template: "List of Data <br>\n              <ul>\n                  <li *ngFor=\"let data of heroes\">{{data.name}}</li>\n              </ul>\n            ",
        providers: [http_service_component_1.HttpService],
    }),
    __metadata("design:paramtypes", [http_service_component_1.HttpService])
], HttpComponent);
exports.HttpComponent = HttpComponent;
//# sourceMappingURL=http.component.js.map