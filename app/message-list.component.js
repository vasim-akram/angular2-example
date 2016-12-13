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
var message_service_1 = require("./message-service");
var MessageListComponent = (function () {
    function MessageListComponent(_messageService) {
        this._messageService = _messageService;
    }
    MessageListComponent.prototype.getMessage = function () {
        var _this = this;
        this._messageService.getMessage().then(function (message) { return _this.messages = message; });
    };
    MessageListComponent.prototype.ngOnInit = function () {
        this.getMessage();
    };
    return MessageListComponent;
}());
MessageListComponent = __decorate([
    core_1.Component({
        selector: 'message-list',
        template: "List of messages <br>\n              <ul>\n                  <li *ngFor=\"let msg of messages\">{{msg.name}}</li>\n              </ul>\n            ",
        providers: [message_service_1.MessageService],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof message_service_1.MessageService !== "undefined" && message_service_1.MessageService) === "function" && _a || Object])
], MessageListComponent);
exports.MessageListComponent = MessageListComponent;
var _a;
//# sourceMappingURL=message-list.component.js.map