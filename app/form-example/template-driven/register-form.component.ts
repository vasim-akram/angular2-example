import {Component} from '@angular/core';
import {NgForm}    from '@angular/forms';


@Component({
  selector: 'register-form',
  templateUrl: 'app/form-example/template-driven/register-form.component.html'
})
export class RegisterComponent {
  user: Object = {
       firstName: 'Vasim',
       password: '123456'
  };

  onSubmitTemplateBased() {
      console.log(this.user);
   }
}
