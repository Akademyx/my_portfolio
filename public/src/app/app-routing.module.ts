import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JsComponentComponent } from './js-component/js-component.component';
import { PythonComponentComponent } from './python-component/python-component.component';
import { RubyComponentComponent } from './ruby-component/ruby-component.component';



const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'js', component:JsComponentComponent},
  {path: 'python', component:PythonComponentComponent},
  {path: 'ruby', component:RubyComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
