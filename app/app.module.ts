import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { routes } from './route-example/app.routes';
import { AppComponent } from './app.component';
import { MessageListComponent } from './service-example/message-list.component';
import { RegisterComponent } from './form-example/template-driven/register-form.component'; // template-driven
import { ModelDrivenForm} from './form-example/model-driven/model-driven-form.component'    // model-driven/reactive-driven
import { HomeComponent } from './route-example/home.component';
import { AboutComponent } from './route-example/about.component';
import { HttpComponent } from './http-example/http.component';

@NgModule({
    imports: [BrowserModule,FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), HttpModule],
    declarations: [AppComponent,MessageListComponent, RegisterComponent, ModelDrivenForm, HomeComponent, AboutComponent, HttpComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
