import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<message-list></message-list>`,
})
export class AppComponent {}

 // <message-list></message-list>   for service-example module
 // <register-form></register-form> for form-example/template-driven module
 // <model-driven-form></model-driven-form> for form-example/model-driven module
 // <data-list></data-list> for http-example module
 // FOR Route Module
// template: `
//           <a [routerLink]="['/']">Home</a>
//           <a [routerLink]="['/about']">About</a>
//           <div class="outer-outlet">
//             <router-outlet></router-outlet>
//           </div>
//
//            `,
