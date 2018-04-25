import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JsComponent } from './js/js.component';
import { PythonComponent } from './python/python.component';
import { RubyComponent } from './ruby/ruby.component';


@NgModule({
  declarations: [
    AppComponent,
    JsComponent,
    PythonComponent,
    RubyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
