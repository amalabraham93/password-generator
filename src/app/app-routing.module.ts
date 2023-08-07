import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [{path:'password-generator', component:PasswordGeneratorComponent},
{path:'weather-app', component:WeatherAppComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
