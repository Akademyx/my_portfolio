import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JsComponentComponent } from './js-component/js-component.component';
import { PythonComponentComponent } from './python-component/python-component.component';
import { RubyComponentComponent } from './ruby-component/ruby-component.component';


@NgModule({
  declarations: [
    AppComponent,
    JsComponentComponent,
    PythonComponentComponent,
    RubyComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
